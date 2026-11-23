import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "../../services/carrinho";
import * as i2 from "@angular/common";
function Carrinho_div_19_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "div", 32);
    i0.ɵɵelement(2, "img", 33);
    i0.ɵɵelementStart(3, "div", 34)(4, "h3", 35);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 36);
    i0.ɵɵtext(7, "Quantidade: ");
    i0.ɵɵelementStart(8, "span", 37);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "div", 38)(11, "span", 39);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 40);
    i0.ɵɵlistener("click", function Carrinho_div_19_div_5_Template_button_click_14_listener() { const item_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.carrinhoService.removerItem(item_r2.produto.codigo)); });
    i0.ɵɵelement(15, "i", 41);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", item_r2.produto.codigo + ".png", i0.ɵɵsanitizeUrl)("alt", item_r2.produto.nome);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r2.produto.nome);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r2.quantidade);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(13, 5, (item_r2.produto.valorPromo > 0 ? item_r2.produto.valorPromo : item_r2.produto.valor) * item_r2.quantidade, "BRL"), " ");
} }
function Carrinho_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "div", 16)(2, "h2", 17);
    i0.ɵɵtext(3, "Itens Adicionados");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 18);
    i0.ɵɵtemplate(5, Carrinho_div_19_div_5_Template, 16, 8, "div", 19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 20)(7, "h2", 21);
    i0.ɵɵtext(8, "Resumo do Pedido");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 22)(10, "div", 23)(11, "span");
    i0.ɵɵtext(12, "Subtotal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span", 24);
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 23)(17, "span");
    i0.ɵɵtext(18, "Entrega");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span", 25);
    i0.ɵɵtext(20, "Calculado no checkout");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "div", 26)(22, "span", 27);
    i0.ɵɵtext(23, "Total a pagar:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span", 28);
    i0.ɵɵtext(25);
    i0.ɵɵpipe(26, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "a", 29)(28, "span");
    i0.ɵɵtext(29, "Finalizar Pedido");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(30, "i", 30);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r2.carrinhoService.obterItens());
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(15, 3, ctx_r2.carrinhoService.obterTotal(), "BRL"));
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(26, 6, ctx_r2.carrinhoService.obterTotal(), "BRL"));
} }
function Carrinho_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42);
    i0.ɵɵelement(1, "i", 43);
    i0.ɵɵelementStart(2, "h2", 44);
    i0.ɵɵtext(3, "O seu carrinho est\u00E1 vazio");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 45);
    i0.ɵɵtext(5, "Parece que ainda n\u00E3o adicionou nenhuma flor ou arranjo ao seu carrinho.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "a", 46);
    i0.ɵɵelement(7, "i", 47);
    i0.ɵɵtext(8, " Explorar Cat\u00E1logo ");
    i0.ɵɵelementEnd()();
} }
export class Carrinho {
    carrinhoService;
    constructor(carrinhoService) {
        this.carrinhoService = carrinhoService;
    }
    static ɵfac = function Carrinho_Factory(__ngFactoryType__) { /* @ts-ignore */
    return new (__ngFactoryType__ || Carrinho)(i0.ɵɵdirectiveInject(i1.CarrinhoService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Carrinho, selectors: [["app-carrinho"]], decls: 22, vars: 2, consts: [["carrinhoVazio", ""], [1, "min-h-screen", "pt-28", "pb-20", "px-4", "sm:px-6", "lg:px-8", "w-full"], [1, "max-w-6xl", "mx-auto"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-4", "mb-8", "pb-4", "border-b", "border-stone-200", "-mt-5", "md:mt-10"], ["routerLink", "/catalogo", 1, "inline-flex", "items-center", "gap-2", "text-xs", "font-bold", "text-stone-500", "hover:text-pink-600", "uppercase", "tracking-widest", "transition-colors"], [1, "fa-solid", "fa-arrow-left", "text-sm"], [1, "flex", "items-center", "gap-2", "text-xs", "font-medium", "text-stone-500", "overflow-x-auto", "whitespace-nowrap", "max-w-full"], ["routerLink", "/", 1, "hover:text-pink-600", "transition-colors"], [1, "fa-solid", "fa-chevron-right", "text-[10px]", "text-stone-300"], [1, "text-stone-900", "font-semibold", "truncate"], [1, "mb-8"], [1, "text-2xl", "sm:text-4xl", "font-serif", "font-bold", "text-stone-900", "flex", "items-center", "gap-3"], [1, "fa-solid", "fa-bag-shopping", "text-pink-600", "text-xl", "sm:text-2xl", "shrink-0"], [1, "text-stone-500", "text-xs", "sm:text-sm", "mt-1"], ["class", "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start", 4, "ngIf", "ngIfElse"], [1, "grid", "grid-cols-1", "lg:grid-cols-12", "gap-8", "items-start"], [1, "lg:col-span-8", "bg-white", "rounded-2xl", "border", "border-stone-200", "p-4", "sm:p-6", "shadow-sm"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-stone-400", "mb-4", "pb-2", "border-b", "border-stone-100"], [1, "flex", "flex-col", "divide-y", "divide-stone-100"], ["class", "py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", 4, "ngFor", "ngForOf"], [1, "lg:col-span-4", "bg-white", "rounded-2xl", "border", "border-stone-200", "p-4", "sm:p-6", "shadow-sm", "space-y-6"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-stone-400", "pb-2", "border-b", "border-stone-100"], [1, "space-y-3", "text-sm", "text-stone-600"], [1, "flex", "justify-between"], [1, "font-semibold", "text-stone-900"], [1, "font-semibold", "text-emerald-600"], [1, "border-t", "border-stone-200", "pt-4", "flex", "justify-between", "items-center"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-stone-500"], [1, "text-xl", "sm:text-2xl", "font-extrabold", "text-pink-600"], ["routerLink", "/finalizar-pedido", 1, "w-full", "bg-pink-600", "hover:bg-pink-700", "text-white", "font-bold", "py-3.5", "px-6", "rounded-xl", "shadow-md", "shadow-pink-600/10", "transition", "duration-200", "cursor-pointer", "flex", "items-center", "justify-center", "gap-2"], [1, "fa-solid", "fa-arrow-right", "text-xs"], [1, "py-4", "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "justify-between", "gap-4"], [1, "flex", "items-center", "gap-3", "sm:gap-4", "w-full", "sm:w-auto"], [1, "w-16", "h-16", "sm:w-20", "sm:h-20", "object-contain", "bg-stone-50", "rounded-xl", "p-2", "border", "border-stone-100", "shrink-0", 3, "src", "alt"], [1, "min-w-0", "flex-1"], [1, "text-sm", "font-bold", "text-stone-900", "truncate"], [1, "text-xs", "text-stone-500", "mt-1"], [1, "font-bold", "text-stone-700"], [1, "flex", "items-center", "justify-between", "sm:justify-end", "w-full", "sm:w-auto", "gap-4", "sm:gap-6", "pt-2", "sm:pt-0", "border-t", "sm:border-t-0", "border-stone-100"], [1, "text-sm", "sm:text-base", "font-extrabold", "text-pink-600"], ["title", "Remover item", 1, "text-stone-400", "hover:text-red-500", "transition", "cursor-pointer", "p-2", 3, "click"], [1, "fa-solid", "fa-trash", "text-sm"], [1, "bg-white", "rounded-2xl", "border", "border-stone-200", "p-8", "sm:p-12", "text-center", "shadow-sm", "max-w-2xl", "mx-auto", "my-8"], [1, "fa-solid", "fa-basket-shopping", "text-5xl", "sm:text-6xl", "text-pink-300", "mb-4"], [1, "text-lg", "sm:text-xl", "font-bold", "text-stone-800", "mb-2"], [1, "text-stone-500", "text-xs", "sm:text-sm", "mb-6"], ["routerLink", "/catalogo", 1, "inline-flex", "items-center", "gap-2", "bg-pink-600", "text-white", "font-bold", "py-3", "px-8", "rounded-xl", "text-xs", "hover:bg-pink-700", "transition", "shadow-md", "shadow-pink-600/20"], [1, "fa-solid", "fa-store", "text-xs"]], template: function Carrinho_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 1)(1, "div", 2)(2, "div", 3)(3, "a", 4);
            i0.ɵɵelement(4, "i", 5);
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6, "Continuar Comprando");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "nav", 6)(8, "a", 7);
            i0.ɵɵtext(9, "In\u00EDcio");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "i", 8);
            i0.ɵɵelementStart(11, "span", 9);
            i0.ɵɵtext(12, "Carrinho de Compras");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(13, "div", 10)(14, "h1", 11);
            i0.ɵɵelement(15, "i", 12);
            i0.ɵɵtext(16, " Carrinho de Compras ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "p", 13);
            i0.ɵɵtext(18, "Reveja os seus itens selecionados antes de avan\u00E7ar para o pagamento.");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(19, Carrinho_div_19_Template, 31, 9, "div", 14)(20, Carrinho_ng_template_20_Template, 9, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const carrinhoVazio_r4 = i0.ɵɵreference(21);
            i0.ɵɵadvance(19);
            i0.ɵɵproperty("ngIf", ctx.carrinhoService.obterItens().length > 0)("ngIfElse", carrinhoVazio_r4);
        } }, dependencies: [CommonModule, i2.NgForOf, i2.NgIf, RouterLink, i2.CurrencyPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Carrinho, [{
        type: Component,
        args: [{ selector: 'app-carrinho', standalone: true, imports: [CommonModule, RouterLink], template: "<main class=\"min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 w-full\">\r\n  <div class=\"max-w-6xl mx-auto\">\r\n    \r\n    <div class=\"flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-stone-200 -mt-5 md:mt-10\">\r\n      <a routerLink=\"/catalogo\" class=\"inline-flex items-center gap-2 text-xs font-bold text-stone-500 hover:text-pink-600 uppercase tracking-widest transition-colors\">\r\n        <i class=\"fa-solid fa-arrow-left text-sm\"></i>\r\n        <span>Continuar Comprando</span>\r\n      </a>\r\n\r\n      <nav class=\"flex items-center gap-2 text-xs font-medium text-stone-500 overflow-x-auto whitespace-nowrap max-w-full\">\r\n        <a routerLink=\"/\" class=\"hover:text-pink-600 transition-colors\">In\u00EDcio</a>\r\n        <i class=\"fa-solid fa-chevron-right text-[10px] text-stone-300\"></i>\r\n        <span class=\"text-stone-900 font-semibold truncate\">Carrinho de Compras</span>\r\n      </nav>\r\n    </div>\r\n\r\n    <div class=\"mb-8\">\r\n      <h1 class=\"text-2xl sm:text-4xl font-serif font-bold text-stone-900 flex items-center gap-3\">\r\n        <i class=\"fa-solid fa-bag-shopping text-pink-600 text-xl sm:text-2xl shrink-0\"></i> Carrinho de Compras\r\n      </h1>\r\n      <p class=\"text-stone-500 text-xs sm:text-sm mt-1\">Reveja os seus itens selecionados antes de avan\u00E7ar para o pagamento.</p>\r\n    </div>\r\n\r\n    <div *ngIf=\"carrinhoService.obterItens().length > 0; else carrinhoVazio\" class=\"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start\">\r\n      \r\n      <div class=\"lg:col-span-8 bg-white rounded-2xl border border-stone-200 p-4 sm:p-6 shadow-sm\">\r\n        <h2 class=\"text-xs font-bold uppercase tracking-wider text-stone-400 mb-4 pb-2 border-b border-stone-100\">Itens Adicionados</h2>\r\n        \r\n        <div class=\"flex flex-col divide-y divide-stone-100\">\r\n          <div *ngFor=\"let item of carrinhoService.obterItens()\" class=\"py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4\">\r\n            \r\n            <div class=\"flex items-center gap-3 sm:gap-4 w-full sm:w-auto\">\r\n              <img [src]=\"item.produto.codigo + '.png'\" [alt]=\"item.produto.nome\" class=\"w-16 h-16 sm:w-20 sm:h-20 object-contain bg-stone-50 rounded-xl p-2 border border-stone-100 shrink-0\">\r\n              <div class=\"min-w-0 flex-1\">\r\n                <h3 class=\"text-sm font-bold text-stone-900 truncate\">{{ item.produto.nome }}</h3>\r\n                <p class=\"text-xs text-stone-500 mt-1\">Quantidade: <span class=\"font-bold text-stone-700\">{{ item.quantidade }}</span></p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 sm:gap-6 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-100\">\r\n              <span class=\"text-sm sm:text-base font-extrabold text-pink-600\">\r\n                {{ (item.produto.valorPromo > 0 ? item.produto.valorPromo : item.produto.valor) * item.quantidade | currency:'BRL' }}\r\n              </span>\r\n              <button (click)=\"carrinhoService.removerItem(item.produto.codigo)\" class=\"text-stone-400 hover:text-red-500 transition cursor-pointer p-2\" title=\"Remover item\">\r\n                <i class=\"fa-solid fa-trash text-sm\"></i>\r\n              </button>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"lg:col-span-4 bg-white rounded-2xl border border-stone-200 p-4 sm:p-6 shadow-sm space-y-6\">\r\n        <h2 class=\"text-xs font-bold uppercase tracking-wider text-stone-400 pb-2 border-b border-stone-100\">Resumo do Pedido</h2>\r\n        \r\n        <div class=\"space-y-3 text-sm text-stone-600\">\r\n          <div class=\"flex justify-between\">\r\n            <span>Subtotal</span>\r\n            <span class=\"font-semibold text-stone-900\">{{ carrinhoService.obterTotal() | currency:'BRL' }}</span>\r\n          </div>\r\n          <div class=\"flex justify-between\">\r\n            <span>Entrega</span>\r\n            <span class=\"font-semibold text-emerald-600\">Calculado no checkout</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"border-t border-stone-200 pt-4 flex justify-between items-center\">\r\n          <span class=\"text-xs font-bold uppercase tracking-wider text-stone-500\">Total a pagar:</span>\r\n          <span class=\"text-xl sm:text-2xl font-extrabold text-pink-600\">{{ carrinhoService.obterTotal() | currency:'BRL' }}</span>\r\n        </div>\r\n\r\n        <a routerLink=\"/finalizar-pedido\"\r\n         class=\"w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md shadow-pink-600/10 transition duration-200 cursor-pointer flex items-center justify-center gap-2\">\r\n          <span>Finalizar Pedido</span>\r\n          <i class=\"fa-solid fa-arrow-right text-xs\"></i>\r\n      </a>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <ng-template #carrinhoVazio>\r\n      <div class=\"bg-white rounded-2xl border border-stone-200 p-8 sm:p-12 text-center shadow-sm max-w-2xl mx-auto my-8\">\r\n        <i class=\"fa-solid fa-basket-shopping text-5xl sm:text-6xl text-pink-300 mb-4\"></i>\r\n        <h2 class=\"text-lg sm:text-xl font-bold text-stone-800 mb-2\">O seu carrinho est\u00E1 vazio</h2>\r\n        <p class=\"text-stone-500 text-xs sm:text-sm mb-6\">Parece que ainda n\u00E3o adicionou nenhuma flor ou arranjo ao seu carrinho.</p>\r\n        <a routerLink=\"/catalogo\" class=\"inline-flex items-center gap-2 bg-pink-600 text-white font-bold py-3 px-8 rounded-xl text-xs hover:bg-pink-700 transition shadow-md shadow-pink-600/20\">\r\n          <i class=\"fa-solid fa-store text-xs\"></i> Explorar Cat\u00E1logo\r\n        </a>\r\n      </div>\r\n    </ng-template>\r\n\r\n  </div>\r\n</main>" }]
    }], () => [{ type: i1.CarrinhoService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Carrinho, { className: "Carrinho", filePath: "src/app/pages/carrinho/carrinho.ts", lineNumber: 12 }); })();
