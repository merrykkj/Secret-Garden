
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8081/api';

  listarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(
      `${this.apiUrl}/produtos`
    );
  }

  buscarProdutos(termo: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(
      `${this.apiUrl}/produto/busca/${encodeURIComponent(termo)}`
    );
  }

  buscarPorCodigo(codigo: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/produto/${codigo}`);
  }

  listarVitrine(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}/produto/vitrine`);
  }

  cadastrar(produto: Omit<Produto, 'codigo'>): Observable<string> {
    return this.http.post(`${this.apiUrl}/produto`, produto, { responseType: 'text' });
  }

  atualizar(produto: Produto): Observable<string> {
    return this.http.put(`${this.apiUrl}/produto`, produto, { responseType: 'text' });
  }

  excluir(codigo: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/produto/${codigo}`, { responseType: 'text' });
  }

}
