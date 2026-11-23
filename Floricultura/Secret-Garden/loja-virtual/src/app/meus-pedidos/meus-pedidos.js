import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
function MeusPedidos_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function MeusPedidos_button_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.limparHistorico()); });
    i0.ɵɵelement(1, "i", 11);
    i0.ɵɵtext(2, " Limpar Hist\u00F3rico ");
    i0.ɵɵelementEnd();
} }
function MeusPedidos_div_12_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26)(1, "div", 27);
    i0.ɵɵelement(2, "img", 28);
    i0.ɵɵelementStart(3, "div", 29)(4, "p", 30);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 31);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "span", 32);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "currency");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", item_r3.produto.codigo + ".png", i0.ɵɵsanitizeUrl)("alt", item_r3.produto.nome);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.produto.nome);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Qtd: ", item_r3.quantidade);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(10, 5, (item_r3.produto.valorPromo > 0 ? item_r3.produto.valorPromo : item_r3.produto.valor) * item_r3.quantidade, "BRL"), " ");
} }
function MeusPedidos_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 15)(2, "div")(3, "span", 16);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 17);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 18)(8, "span", 19);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "uppercase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span", 20);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 21);
    i0.ɵɵtemplate(14, MeusPedidos_div_12_div_1_div_14_Template, 11, 8, "div", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 23)(16, "span", 24);
    i0.ɵɵtext(17, "Total Pago:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "span", 25);
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "currency");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const pedido_r4 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Pedido #", pedido_r4.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Realizado em ", pedido_r4.data);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(10, 6, pedido_r4.pagamento), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", pedido_r4.status, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", pedido_r4.itens);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(20, 8, pedido_r4.totalFinal, "BRL"), " ");
} }
function MeusPedidos_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtemplate(1, MeusPedidos_div_12_div_1_Template, 21, 11, "div", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.pedidos);
} }
function MeusPedidos_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33)(1, "div", 34);
    i0.ɵɵelement(2, "i", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 36)(4, "h3", 37);
    i0.ɵɵtext(5, "Nenhum pedido encontrado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 38);
    i0.ɵɵtext(7, "Voc\u00EA ainda n\u00E3o concluiu nenhuma compra na floricultura.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div")(9, "a", 39);
    i0.ɵɵtext(10, " Explorar Cat\u00E1logo ");
    i0.ɵɵelementEnd()()();
} }
export class MeusPedidos {
    platformId;
    pedidos = [];
    constructor(platformId) {
        this.platformId = platformId;
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.carregarPedidos();
        }
    }
    carregarPedidos() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        const dados = localStorage.getItem('meus_pedidos');
        if (dados) {
            this.pedidos = JSON.parse(dados);
        }
    }
    limparHistorico() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        localStorage.removeItem('meus_pedidos');
        this.pedidos = [];
    }
    static ɵfac = function MeusPedidos_Factory(__ngFactoryType__) { /* @ts-ignore */
    return new (__ngFactoryType__ || MeusPedidos)(i0.ɵɵdirectiveInject(PLATFORM_ID)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MeusPedidos, selectors: [["app-meus-pedidos"]], decls: 15, vars: 3, consts: [["semPedidos", ""], [1, "min-h-screen", "pt-24", "sm:pt-28", "pb-16", "sm:pb-20", "px-4", "sm:px-6", "lg:px-8", "w-full", "bg-stone-50/40"], [1, "max-w-4xl", "mx-auto", "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4", "pb-4", "border-b", "border-stone-200"], ["routerLink", "/", 1, "inline-flex", "items-center", "gap-2", "text-xs", "font-bold", "text-stone-500", "hover:text-pink-600", "uppercase", "tracking-widest", "transition-colors", "mb-2"], [1, "fa-solid", "fa-arrow-left", "text-sm"], [1, "text-xl", "sm:text-3xl", "font-serif", "font-bold", "text-stone-900", "flex", "items-center", "gap-3"], [1, "fa-solid", "fa-bag-shopping", "text-pink-600"], ["class", "text-xs font-semibold text-rose-600 hover:text-rose-800 border border-rose-200 bg-rose-50/50 hover:bg-rose-100/50 px-3 py-2 rounded-xl transition", 3, "click", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf", "ngIfElse"], [1, "text-xs", "font-semibold", "text-rose-600", "hover:text-rose-800", "border", "border-rose-200", "bg-rose-50/50", "hover:bg-rose-100/50", "px-3", "py-2", "rounded-xl", "transition", 3, "click"], [1, "fa-solid", "fa-trash-can", "mr-1"], [1, "space-y-4"], ["class", "bg-white rounded-2xl border border-stone-200 p-5 shadow-sm space-y-4", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-2xl", "border", "border-stone-200", "p-5", "shadow-sm", "space-y-4"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-2", "pb-3", "border-b", "border-stone-100", "text-xs"], [1, "font-bold", "text-stone-900", "text-sm"], [1, "text-stone-400", "ml-2"], [1, "flex", "items-center", "gap-2"], [1, "bg-pink-50", "text-pink-700", "font-semibold", "px-2.5", "py-1", "rounded-full", "border", "border-pink-100", "uppercase", "text-[10px]"], [1, "bg-emerald-50", "text-emerald-700", "font-semibold", "px-2.5", "py-1", "rounded-full", "border", "border-emerald-100", "text-[10px]"], [1, "divide-y", "divide-stone-50", "max-h-48", "overflow-y-auto"], ["class", "py-2.5 flex items-center justify-between gap-3 text-xs", 4, "ngFor", "ngForOf"], [1, "pt-3", "border-t", "border-stone-100", "flex", "justify-between", "items-center"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-stone-400"], [1, "text-base", "font-extrabold", "text-pink-600"], [1, "py-2.5", "flex", "items-center", "justify-between", "gap-3", "text-xs"], [1, "flex", "items-center", "gap-3", "min-w-0"], [1, "w-10", "h-10", "object-contain", "bg-stone-50", "rounded-lg", "p-1", "border", "border-stone-100", "shrink-0", 3, "src", "alt"], [1, "min-w-0"], [1, "font-bold", "text-stone-900", "truncate"], [1, "text-stone-500"], [1, "font-semibold", "text-stone-800", "shrink-0"], [1, "bg-white", "rounded-3xl", "border", "border-stone-200", "p-12", "text-center", "space-y-4", "shadow-sm"], [1, "w-16", "h-16", "bg-pink-50", "text-pink-500", "rounded-full", "flex", "items-center", "justify-center", "mx-auto", "text-2xl"], [1, "fa-solid", "fa-box-open"], [1, "space-y-1"], [1, "font-serif", "font-bold", "text-stone-900", "text-lg"], [1, "text-xs", "text-stone-500"], ["routerLink", "/catalogo", 1, "inline-block", "bg-pink-600", "hover:bg-pink-700", "text-white", "font-bold", "py-2.5", "px-6", "rounded-xl", "shadow-md", "transition", "text-xs", "uppercase", "tracking-wider"]], template: function MeusPedidos_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 1)(1, "div", 2)(2, "div", 3)(3, "div")(4, "a", 4);
            i0.ɵɵelement(5, "i", 5);
            i0.ɵɵelementStart(6, "span");
            i0.ɵɵtext(7, "Voltar \u00E0 P\u00E1gina Inicial");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "h1", 6);
            i0.ɵɵelement(9, "i", 7);
            i0.ɵɵtext(10, " Meus Pedidos ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(11, MeusPedidos_button_11_Template, 3, 0, "button", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(12, MeusPedidos_div_12_Template, 2, 1, "div", 9)(13, MeusPedidos_ng_template_13_Template, 11, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const semPedidos_r5 = i0.ɵɵreference(14);
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngIf", ctx.pedidos.length > 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pedidos.length > 0)("ngIfElse", semPedidos_r5);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, RouterModule, i2.RouterLink, i1.UpperCasePipe, i1.CurrencyPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MeusPedidos, [{
        type: Component,
        args: [{ selector: 'app-meus-pedidos', standalone: true, imports: [CommonModule, RouterModule], template: "<main class=\"min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 w-full bg-stone-50/40\">\r\n    <div class=\"max-w-4xl mx-auto space-y-6\">\r\n\r\n        <div class=\"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-stone-200\">\r\n            <div>\r\n                <a routerLink=\"/\"\r\n                    class=\"inline-flex items-center gap-2 text-xs font-bold text-stone-500 hover:text-pink-600 uppercase tracking-widest transition-colors mb-2\">\r\n                    <i class=\"fa-solid fa-arrow-left text-sm\"></i>\r\n                    <span>Voltar \u00E0 P\u00E1gina Inicial</span>\r\n                </a>\r\n                <h1 class=\"text-xl sm:text-3xl font-serif font-bold text-stone-900 flex items-center gap-3\">\r\n                    <i class=\"fa-solid fa-bag-shopping text-pink-600\"></i> Meus Pedidos\r\n                </h1>\r\n            </div>\r\n            \r\n            <button *ngIf=\"pedidos.length > 0\" (click)=\"limparHistorico()\"\r\n                class=\"text-xs font-semibold text-rose-600 hover:text-rose-800 border border-rose-200 bg-rose-50/50 hover:bg-rose-100/50 px-3 py-2 rounded-xl transition\">\r\n                <i class=\"fa-solid fa-trash-can mr-1\"></i> Limpar Hist\u00F3rico\r\n            </button>\r\n        </div>\r\n\r\n        <div *ngIf=\"pedidos.length > 0; else semPedidos\" class=\"space-y-4\">\r\n            <div *ngFor=\"let pedido of pedidos\" class=\"bg-white rounded-2xl border border-stone-200 p-5 shadow-sm space-y-4\">\r\n                \r\n                <div class=\"flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-100 text-xs\">\r\n                    <div>\r\n                        <span class=\"font-bold text-stone-900 text-sm\">Pedido #{{ pedido.id }}</span>\r\n                        <span class=\"text-stone-400 ml-2\">Realizado em {{ pedido.data }}</span>\r\n                    </div>\r\n                    <div class=\"flex items-center gap-2\">\r\n                        <span class=\"bg-pink-50 text-pink-700 font-semibold px-2.5 py-1 rounded-full border border-pink-100 uppercase text-[10px]\">\r\n                            {{ pedido.pagamento | uppercase }}\r\n                        </span>\r\n                        <span class=\"bg-emerald-50 text-emerald-700 font-semibold px-2.5 py-1 rounded-full border border-emerald-100 text-[10px]\">\r\n                            {{ pedido.status }}\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"divide-y divide-stone-50 max-h-48 overflow-y-auto\">\r\n                    <div *ngFor=\"let item of pedido.itens\" class=\"py-2.5 flex items-center justify-between gap-3 text-xs\">\r\n                        <div class=\"flex items-center gap-3 min-w-0\">\r\n                            <img [src]=\"item.produto.codigo + '.png'\" [alt]=\"item.produto.nome\"\r\n                                class=\"w-10 h-10 object-contain bg-stone-50 rounded-lg p-1 border border-stone-100 shrink-0\">\r\n                            <div class=\"min-w-0\">\r\n                                <p class=\"font-bold text-stone-900 truncate\">{{ item.produto.nome }}</p>\r\n                                <p class=\"text-stone-500\">Qtd: {{ item.quantidade }}</p>\r\n                            </div>\r\n                        </div>\r\n                        <span class=\"font-semibold text-stone-800 shrink-0\">\r\n                            {{ (item.produto.valorPromo > 0 ? item.produto.valorPromo : item.produto.valor) * item.quantidade | currency:'BRL' }}\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"pt-3 border-t border-stone-100 flex justify-between items-center\">\r\n                    <span class=\"text-xs font-bold uppercase tracking-wider text-stone-400\">Total Pago:</span>\r\n                    <span class=\"text-base font-extrabold text-pink-600\">\r\n                        {{ pedido.totalFinal | currency:'BRL' }}\r\n                    </span>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <ng-template #semPedidos>\r\n            <div class=\"bg-white rounded-3xl border border-stone-200 p-12 text-center space-y-4 shadow-sm\">\r\n                <div class=\"w-16 h-16 bg-pink-50 text-pink-500 rounded-full flex items-center justify-center mx-auto text-2xl\">\r\n                    <i class=\"fa-solid fa-box-open\"></i>\r\n                </div>\r\n                <div class=\"space-y-1\">\r\n                    <h3 class=\"font-serif font-bold text-stone-900 text-lg\">Nenhum pedido encontrado</h3>\r\n                    <p class=\"text-xs text-stone-500\">Voc\u00EA ainda n\u00E3o concluiu nenhuma compra na floricultura.</p>\r\n                </div>\r\n                <div>\r\n                    <a routerLink=\"/catalogo\"\r\n                        class=\"inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-2.5 px-6 rounded-xl shadow-md transition text-xs uppercase tracking-wider\">\r\n                        Explorar Cat\u00E1logo\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n\r\n    </div>\r\n</main>" }]
    }], () => [{ type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MeusPedidos, { className: "MeusPedidos", filePath: "src/app/meus-pedidos/meus-pedidos.ts", lineNumber: 12 }); })();
