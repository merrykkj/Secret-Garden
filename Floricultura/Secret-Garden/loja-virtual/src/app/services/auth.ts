
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';

import { ClienteService } from './cliente';
import { CarrinhoService } from './carrinho';

export interface UsuarioMock {
  codigo?: number;
  nome: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private clienteService = inject(ClienteService);
  private carrinhoService = inject(CarrinhoService);

  private usuarioSubject =
    new BehaviorSubject<UsuarioMock | null>(null);

  public usuario$: Observable<UsuarioMock | null> =
    this.usuarioSubject.asObservable();

  constructor() {
    if (typeof localStorage !== 'undefined') {
      const usuarioSalvo = localStorage.getItem('usuario_mock');

      if (usuarioSalvo) {
        try {
          const usuario = JSON.parse(usuarioSalvo);

          if (usuario?.codigo) {
            this.usuarioSubject.next(usuario);
          } else {
            localStorage.removeItem('usuario_mock');
          }
        } catch {
          localStorage.removeItem('usuario_mock');
        }
      }
    }
  }

  login(
    email: string,
    senha: string
  ): Observable<UsuarioMock | null> {

    return this.clienteService.login(email, senha).pipe(
      map(cliente => {
        if (!cliente?.codigo) {
          return null;
        }

        const usuario: UsuarioMock = {
          codigo: cliente.codigo,
          nome: cliente.nome,
          email: cliente.email
        };

        return usuario;
      }),

      tap(usuario => {
        if (!usuario) {
          return;
        }

        const usuarioAnterior = this.usuarioSubject.value;

        if (
          usuarioAnterior?.codigo !== usuario.codigo
        ) {
          this.carrinhoService.limparCarrinho();
        }

        if (typeof localStorage !== 'undefined') {
          localStorage.setItem(
            'usuario_mock',
            JSON.stringify(usuario)
          );
        }

        this.usuarioSubject.next(usuario);
      })
    );
  }

  logout(): void {
    this.carrinhoService.limparCarrinho();

    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('usuario_mock');
    }

    this.usuarioSubject.next(null);
  }
}
