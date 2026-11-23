import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export class ProdutoService {
    http = inject(HttpClient);
    apiUrl = 'http://localhost:8081/api';
    listarProdutos() {
        return this.http.get(`${this.apiUrl}/produtos`);
    }
    buscarProdutos(termo) {
        return this.http.get(`${this.apiUrl}/produto/busca/${encodeURIComponent(termo)}`);
    }
    buscarPorCodigo(codigo) {
        return this.http.get(`${this.apiUrl}/produto/${codigo}`);
    }
    listarVitrine() {
        return this.http.get(`${this.apiUrl}/produto/vitrine`);
    }
    cadastrar(produto) {
        return this.http.post(`${this.apiUrl}/produto`, produto, { responseType: 'text' });
    }
    atualizar(produto) {
        return this.http.put(`${this.apiUrl}/produto`, produto, { responseType: 'text' });
    }
    excluir(codigo) {
        return this.http.delete(`${this.apiUrl}/produto/${codigo}`, { responseType: 'text' });
    }
    static ɵfac = function ProdutoService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProdutoService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProdutoService, factory: ProdutoService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProdutoService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
