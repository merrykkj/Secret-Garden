
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pedido {
  codigoPedido?: number;
  valorTotal: number;
  entrega: string;
  obs: string;
  dataPedido: string;
  codigoCliente: number;
}

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8081/api/pedido';

  cadastrar(pedido: Pedido): Observable<string> {
    return this.http.post(this.apiUrl, pedido, {
      responseType: 'text'
    });
  }

  buscar(codigo: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.apiUrl}/${codigo}`);
  }

  atualizar(pedido: Pedido): Observable<string> {
    return this.http.put(this.apiUrl, pedido, { responseType: 'text' });
  }

  excluir(codigo: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/${codigo}`, { responseType: 'text' });
  }

}
