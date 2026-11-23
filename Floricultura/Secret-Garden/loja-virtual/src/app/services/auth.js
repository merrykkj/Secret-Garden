import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { ClienteService } from './cliente';
import * as i0 from "@angular/core";
export class AuthService {
    clienteService = inject(ClienteService);
    usuarioSubject = new BehaviorSubject(null);
    usuario$ = this.usuarioSubject.asObservable();
    constructor() {
        if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
            const usuarioSalvo = localStorage.getItem('usuario_mock');
            if (usuarioSalvo) {
                try {
                    this.usuarioSubject.next(JSON.parse(usuarioSalvo));
                }
                catch {
                    localStorage.removeItem('usuario_mock');
                }
            }
        }
    }
    login(email, senha) {
        return this.clienteService.login(email, senha).pipe(map(cliente => {
            if (!cliente || !cliente.codigo) {
                return null;
            }
            const usuario = {
                codigo: cliente.codigo,
                nome: cliente.nome,
                email: cliente.email
            };
            return usuario;
        }), tap(usuario => {
            if (usuario) {
                if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
                    localStorage.setItem('usuario_mock', JSON.stringify(usuario));
                }
                this.usuarioSubject.next(usuario);
            }
        }));
    }
    logout() {
        if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
            localStorage.removeItem('usuario_mock');
        }
        this.usuarioSubject.next(null);
    }
    static ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
