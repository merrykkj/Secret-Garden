
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cliente {
  codigo?: number;
  nome: string;
  email: string;
  senha?: string;
  documento?: string;
  ativo?: number;
  telefone?: string;
  logradouro?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8081/api/cliente';

  cadastrar(cliente: Cliente): Observable<string> {
    return this.http.post(
      this.apiUrl,
      cliente,
      { responseType: 'text' }
    );
  }

  login(email: string, senha: string): Observable<Cliente> {
    return this.http.post<Cliente>(
      `${this.apiUrl}/login`,
      { email, senha }
    );
  }

  buscar(codigo: number): Observable<Cliente> {
    return this.http.get<Cliente>(
      `${this.apiUrl}/${codigo}`
    );
  }

  atualizar(cliente: Cliente): Observable<string> {
    return this.http.put(
      this.apiUrl,
      cliente,
      { responseType: 'text' }
    );
  }

  excluir(codigo: number): Observable<string> {
    return this.http.delete(
      `${this.apiUrl}/${codigo}`,
      { responseType: 'text' }
    );
  }

  resetarSenha(email: string): Observable<string> {
    return this.http.patch(
      `${this.apiUrl}/resetarSenha`,
      { email },
      { responseType: 'text' }
    );
  }

  alterarSenha(
    email: string,
    documento: string,
    senha: string
  ): Observable<string> {
    return this.http.patch(
      `${this.apiUrl}/alterarSenha`,
      { email, documento, senha },
      { responseType: 'text' }
    );
  }
}
