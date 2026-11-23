import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class CarrinhoService {
    itens = [];
    adicionar(produto, quantidade = 1) {
        const itemExistente = this.itens.find(i => i.produto.codigo === produto.codigo);
        if (itemExistente) {
            itemExistente.quantidade += quantidade;
        }
        else {
            this.itens.push({ produto, quantidade });
        }
    }
    obterItens() {
        return this.itens;
    }
    removerItem(codigoProduto) {
        this.itens = this.itens.filter(i => i.produto.codigo !== codigoProduto);
    }
    limparCarrinho() {
        this.itens = [];
    }
    obterTotal() {
        return this.itens.reduce((total, item) => {
            const preco = item.produto.valorPromo > 0 ? item.produto.valorPromo : item.produto.valor;
            return total + (preco * item.quantidade);
        }, 0);
    }
    obterQuantidadeTotal() {
        return this.itens.reduce((sum, item) => sum + item.quantidade, 0);
    }
    static ɵfac = function CarrinhoService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CarrinhoService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CarrinhoService, factory: CarrinhoService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarrinhoService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
