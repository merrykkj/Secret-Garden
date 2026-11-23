import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export class PedidoService {
    http = inject(HttpClient);
    apiUrl = 'http://localhost:8081/api/pedido';
    cadastrar(pedido) {
        return this.http.post(this.apiUrl, pedido, {
            responseType: 'text'
        });
    }
    buscar(codigo) {
        return this.http.get(`${this.apiUrl}/${codigo}`);
    }
    atualizar(pedido) {
        return this.http.put(this.apiUrl, pedido, { responseType: 'text' });
    }
    excluir(codigo) {
        return this.http.delete(`${this.apiUrl}/${codigo}`, { responseType: 'text' });
    }
    static ɵfac = function PedidoService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PedidoService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PedidoService, factory: PedidoService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PedidoService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
