import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export class ClienteService {
    http = inject(HttpClient);
    apiUrl = 'http://localhost:8081/api/cliente';
    cadastrar(cliente) {
        return this.http.post(this.apiUrl, cliente, { responseType: 'text' });
    }
    login(email, senha) {
        return this.http.post(`${this.apiUrl}/login`, { email, senha });
    }
    buscar(codigo) {
        return this.http.get(`${this.apiUrl}/${codigo}`);
    }
    atualizar(cliente) {
        return this.http.put(this.apiUrl, cliente, { responseType: 'text' });
    }
    excluir(codigo) {
        return this.http.delete(`${this.apiUrl}/${codigo}`, { responseType: 'text' });
    }
    resetarSenha(email) {
        return this.http.patch(`${this.apiUrl}/resetarSenha`, { email }, { responseType: 'text' });
    }
    alterarSenha(email, documento, senha) {
        return this.http.patch(`${this.apiUrl}/alterarSenha`, { email, documento, senha }, { responseType: 'text' });
    }
    static ɵfac = function ClienteService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ClienteService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ClienteService, factory: ClienteService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClienteService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
