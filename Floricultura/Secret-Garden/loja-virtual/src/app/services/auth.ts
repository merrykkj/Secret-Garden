
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { ClienteService } from './cliente';

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

  private usuarioSubject = new BehaviorSubject<UsuarioMock | null>(null);
  public usuario$: Observable<UsuarioMock | null> = this.usuarioSubject.asObservable();

  constructor() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const usuarioSalvo = localStorage.getItem('usuario_mock');

      if (usuarioSalvo) {
        try {
          this.usuarioSubject.next(JSON.parse(usuarioSalvo));
        } catch {
          localStorage.removeItem('usuario_mock');
        }
      }
    }
  }

  login(email: string, senha: string): Observable<UsuarioMock | null> {
    return this.clienteService.login(email, senha).pipe(
      map(cliente => {
        if (!cliente || !cliente.codigo) {
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
        if (usuario) {
          if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
            localStorage.setItem('usuario_mock', JSON.stringify(usuario));
          }

          this.usuarioSubject.next(usuario);
        }
      })
    );
  }

  logout(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.removeItem('usuario_mock');
    }

    this.usuarioSubject.next(null);
  }
}
