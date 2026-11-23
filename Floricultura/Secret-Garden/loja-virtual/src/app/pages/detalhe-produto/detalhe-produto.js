import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/carrinho";
import * as i3 from "../../services/auth";
import * as i4 from "../../services/produto";
import * as i5 from "@angular/common";
function DetalheProduto_div_1_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 54);
    i0.ɵɵtext(1, " Destaque ");
    i0.ɵɵelementEnd();
} }
function DetalheProduto_div_1_span_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 55);
    i0.ɵɵtext(1, " Oferta Especial ");
    i0.ɵɵelementEnd();
} }
function DetalheProduto_div_1_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 56);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 57);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 58);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(3, 3, ctx_r1.produto.valorPromo, "BRL"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(6, 6, ctx_r1.produto.valor, "BRL"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" Economize ", i0.ɵɵpipeBind2(9, 9, ctx_r1.produto.valor - ctx_r1.produto.valorPromo, "BRL"), " ");
} }
function DetalheProduto_div_1_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 59);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, ctx_r1.produto.valor, "BRL"), " ");
} }
function DetalheProduto_div_1_ng_container_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 60);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Adicionar ao Carrinho");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function DetalheProduto_div_1_ng_container_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 61);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Adicionado com Sucesso!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function DetalheProduto_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "a", 6);
    i0.ɵɵelement(3, "i", 7);
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Voltar ao Cat\u00E1logo");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "nav", 8)(7, "a", 9);
    i0.ɵɵtext(8, "In\u00EDcio");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "i", 10);
    i0.ɵɵelementStart(10, "a", 11);
    i0.ɵɵtext(11, "Cat\u00E1logo");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "i", 10);
    i0.ɵɵelementStart(13, "span", 12);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "div", 13)(16, "div", 14)(17, "div", 15)(18, "div", 16);
    i0.ɵɵtemplate(19, DetalheProduto_div_1_span_19_Template, 2, 0, "span", 17)(20, DetalheProduto_div_1_span_20_Template, 2, 0, "span", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(21, "img", 19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 20)(23, "div", 21)(24, "div", 22)(25, "span", 23);
    i0.ɵɵtext(26, " Secret Garden Collection ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "span", 24);
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "h1", 25);
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "p", 26);
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "div", 27)(34, "div", 28);
    i0.ɵɵtemplate(35, DetalheProduto_div_1_ng_container_35_Template, 10, 12, "ng-container", 29)(36, DetalheProduto_div_1_ng_template_36_Template, 3, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "p", 30);
    i0.ɵɵtext(39, "Em at\u00E9 3x sem juros no cart\u00E3o de cr\u00E9dito");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "div", 31)(41, "div", 32)(42, "div", 33)(43, "button", 34);
    i0.ɵɵlistener("click", function DetalheProduto_div_1_Template_button_click_43_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.decrementar()); });
    i0.ɵɵelement(44, "i", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "span", 36);
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "button", 37);
    i0.ɵɵlistener("click", function DetalheProduto_div_1_Template_button_click_47_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.incrementar()); });
    i0.ɵɵelement(48, "i", 38);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(49, "button", 39);
    i0.ɵɵlistener("click", function DetalheProduto_div_1_Template_button_click_49_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.adicionarAoCarrinho()); });
    i0.ɵɵtemplate(50, DetalheProduto_div_1_ng_container_50_Template, 4, 0, "ng-container", 40)(51, DetalheProduto_div_1_ng_container_51_Template, 4, 0, "ng-container", 40);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(52, "div", 41)(53, "div", 42);
    i0.ɵɵelement(54, "i", 43);
    i0.ɵɵelementStart(55, "div")(56, "p", 44);
    i0.ɵɵtext(57, "Entrega Expressa");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "p", 45);
    i0.ɵɵtext(59, "Em at\u00E9 24h na sua regi\u00E3o");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(60, "div", 42);
    i0.ɵɵelement(61, "i", 46);
    i0.ɵɵelementStart(62, "div")(63, "p", 44);
    i0.ɵɵtext(64, "Flores Frescas");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "p", 45);
    i0.ɵɵtext(66, "Selecionadas \u00E0 m\u00E3o");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(67, "div", 42);
    i0.ɵɵelement(68, "i", 47);
    i0.ɵɵelementStart(69, "div")(70, "p", 44);
    i0.ɵɵtext(71, "Compra Segura");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "p", 45);
    i0.ɵɵtext(73, "Garantia de satisfa\u00E7\u00E3o");
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(74, "div", 48)(75, "h2", 49);
    i0.ɵɵelement(76, "i", 50);
    i0.ɵɵtext(77, " Detalhes do Produto & Cuidados ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(78, "div", 51)(79, "div")(80, "h3", 52);
    i0.ɵɵtext(81, "Sobre este arranjo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(82, "p");
    i0.ɵɵtext(83, "Cada produto da linha Secret Garden \u00E9 preparado artesanalmente por floristas especializados momentos antes do envio, garantindo m\u00E1xima durabilidade, frescor e perfume.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(84, "div")(85, "h3", 52);
    i0.ɵɵtext(86, "Dicas de conserva\u00E7\u00E3o");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(87, "ul", 53)(88, "li");
    i0.ɵɵtext(89, "Mantenha em local fresco, longe da luz solar direta.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(90, "li");
    i0.ɵɵtext(91, "Troque a \u00E1gua do vaso a cada 2 dias.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(92, "li");
    i0.ɵɵtext(93, "Corte 1cm da base das hastes na diagonal ao trocar a \u00E1gua.");
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const precoNormal_r3 = i0.ɵɵreference(37);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(14);
    i0.ɵɵtextInterpolate(ctx_r1.produto.nome);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.produto.destaque === 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.produto.valorPromo > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r1.produto.codigo + ".png", i0.ɵɵsanitizeUrl)("alt", ctx_r1.produto.nome);
    i0.ɵɵadvance(6);
    i0.ɵɵclassMap(ctx_r1.produto.quantidade > 0 ? "text-emerald-700 bg-emerald-50 border-emerald-200" : "text-rose-700 bg-rose-50 border-rose-200");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.produto.quantidade > 0 ? "Em estoque (" + ctx_r1.produto.quantidade + " un.)" : "Esgotado", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.produto.nome, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.produto.descritivo, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.produto.valorPromo > 0)("ngIfElse", precoNormal_r3);
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate(ctx_r1.qtdSelecionada);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("bg-emerald-600", ctx_r1.adicionadoComSucesso)("hover:bg-emerald-700", ctx_r1.adicionadoComSucesso)("bg-pink-600", !ctx_r1.adicionadoComSucesso)("hover:bg-pink-700", !ctx_r1.adicionadoComSucesso);
    i0.ɵɵproperty("disabled", ctx_r1.produto.quantidade === 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.adicionadoComSucesso);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.adicionadoComSucesso);
} }
function DetalheProduto_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62);
    i0.ɵɵelement(1, "i", 63);
    i0.ɵɵelementStart(2, "h2", 64);
    i0.ɵɵtext(3, "Produto n\u00E3o encontrado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 65);
    i0.ɵɵtext(5, "O item que voc\u00EA procurou n\u00E3o est\u00E1 dispon\u00EDvel ou foi removido do nosso cat\u00E1logo.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "a", 66);
    i0.ɵɵelement(7, "i", 67);
    i0.ɵɵtext(8, " Voltar ao Cat\u00E1logo ");
    i0.ɵɵelementEnd()();
} }
export class DetalheProduto {
    route;
    router;
    carrinhoService;
    authService;
    produtoService;
    produto;
    qtdSelecionada = 1;
    adicionadoComSucesso = false;
    erroCarregamento = '';
    constructor(route, router, carrinhoService, authService, produtoService) {
        this.route = route;
        this.router = router;
        this.carrinhoService = carrinhoService;
        this.authService = authService;
        this.produtoService = produtoService;
    }
    ngOnInit() {
        const codigoParam = this.route.snapshot.paramMap.get('codigo');
        if (codigoParam) {
            const codigoNumero = Number(codigoParam);
            if (!Number.isInteger(codigoNumero) || codigoNumero <= 0) {
                this.erroCarregamento = 'Código de produto inválido.';
                return;
            }
            this.produtoService.buscarPorCodigo(codigoNumero).subscribe({
                next: produto => {
                    if (produto?.codigo)
                        this.produto = produto;
                    else
                        this.erroCarregamento = 'Produto não encontrado.';
                },
                error: () => this.erroCarregamento = 'Não foi possível carregar o produto.'
            });
        }
    }
    incrementar() {
        if (this.produto && this.qtdSelecionada < this.produto.quantidade) {
            this.qtdSelecionada++;
        }
    }
    decrementar() {
        if (this.qtdSelecionada > 1) {
            this.qtdSelecionada--;
        }
    }
    adicionarAoCarrinho() {
        if (!this.produto)
            return;
        const usuarioLogado = this.authService.usuario$ ? this.authService.usuario$ : null;
        let temUsuario = false;
        this.authService.usuario$.subscribe(user => {
            temUsuario = !!user;
        }).unsubscribe();
        if (!temUsuario) {
            this.router.navigate(['/login']);
            return;
        }
        this.carrinhoService.adicionar(this.produto, this.qtdSelecionada);
        this.adicionadoComSucesso = true;
        setTimeout(() => {
            this.adicionadoComSucesso = false;
        }, 2500);
    }
    static ɵfac = function DetalheProduto_Factory(__ngFactoryType__) { /* @ts-ignore */
    return new (__ngFactoryType__ || DetalheProduto)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.CarrinhoService), i0.ɵɵdirectiveInject(i3.AuthService), i0.ɵɵdirectiveInject(i4.ProdutoService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DetalheProduto, selectors: [["app-detalhe-produto"]], decls: 4, vars: 2, consts: [["naoEncontrado", ""], ["precoNormal", ""], [1, "min-h-screen", "bg-stone-50/60", "pt-20", "pb-20", "px-4", "sm:px-6", "lg:px-8", "w-full", "mt-3", "md:mt-15"], ["class", "max-w-7xl mx-auto", 4, "ngIf", "ngIfElse"], [1, "max-w-7xl", "mx-auto"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-4", "mb-6", "sm:mb-8"], ["routerLink", "/catalogo", 1, "inline-flex", "items-center", "gap-2", "text-xs", "font-bold", "text-stone-500", "hover:text-pink-600", "uppercase", "tracking-widest", "transition-colors"], [1, "fa-solid", "fa-arrow-left", "text-sm"], [1, "flex", "items-center", "gap-2", "text-xs", "font-medium", "text-stone-500", "overflow-x-auto", "whitespace-nowrap"], ["routerLink", "/", 1, "hover:text-pink-600", "transition-colors"], [1, "fa-solid", "fa-chevron-right", "text-[10px]", "text-stone-300"], ["routerLink", "/catalogo", 1, "hover:text-pink-600", "transition-colors"], [1, "text-stone-900", "font-semibold", "truncate", "max-w-50", "sm:max-w-none"], [1, "grid", "grid-cols-1", "lg:grid-cols-12", "gap-8", "lg:gap-12", "items-start"], [1, "lg:col-span-6", "xl:col-span-7"], [1, "sticky", "top-24", "bg-white", "rounded-2xl", "sm:rounded-3xl", "p-6", "sm:p-10", "border", "border-stone-200/60", "shadow-sm", "flex", "items-center", "justify-center", "overflow-hidden", "group", "min-h-95", "sm:min-h-120", "lg:min-h-140"], [1, "absolute", "top-4", "left-4", "flex", "flex-wrap", "gap-2", "z-10"], ["class", "bg-pink-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm", 4, "ngIf"], ["class", "bg-amber-500 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm", 4, "ngIf"], [1, "max-h-80", "sm:max-h-105", "w-auto", "object-contain", "drop-shadow-2xl", "transition-transform", "duration-500", "group-hover:scale-105", 3, "src", "alt"], [1, "lg:col-span-6", "xl:col-span-5", "flex", "flex-col", "space-y-6"], [1, "space-y-3", "pb-6", "border-b", "border-stone-200"], [1, "flex", "items-center", "justify-between", "gap-4"], [1, "text-xs", "font-bold", "uppercase", "tracking-widest", "text-pink-600", "bg-pink-50", "px-3", "py-1", "rounded-full", "border", "border-pink-100"], [1, "text-xs", "font-semibold", "px-3", "py-1", "rounded-full", "border"], [1, "text-2xl", "sm:text-3xl", "lg:text-4xl", "font-extrabold", "text-stone-900", "tracking-tight", "leading-tight"], [1, "text-stone-600", "text-sm", "sm:text-base", "leading-relaxed"], [1, "bg-white", "p-5", "sm:p-6", "rounded-2xl", "border", "border-stone-200/80", "shadow-sm", "space-y-2"], [1, "flex", "items-baseline", "flex-wrap", "gap-3"], [4, "ngIf", "ngIfElse"], [1, "text-xs", "text-stone-500"], [1, "space-y-4", "pt-2"], [1, "flex", "flex-col", "sm:flex-row", "items-stretch", "sm:items-center", "gap-3"], [1, "flex", "items-center", "justify-between", "border", "border-stone-300", "rounded-xl", "bg-white", "p-1", "min-w-32.5", "sm:w-auto", "shadow-sm"], ["type", "button", "aria-label", "Diminuir quantidade", 1, "w-10", "h-10", "rounded-lg", "text-stone-600", "font-bold", "hover:bg-stone-100", "hover:text-stone-900", "transition", "flex", "items-center", "justify-center", "cursor-pointer", 3, "click"], [1, "fa-solid", "fa-minus", "text-xs"], [1, "px-4", "text-base", "font-bold", "text-stone-800"], ["type", "button", "aria-label", "Aumentar quantidade", 1, "w-10", "h-10", "rounded-lg", "text-stone-600", "font-bold", "hover:bg-stone-100", "hover:text-stone-900", "transition", "flex", "items-center", "justify-center", "cursor-pointer", 3, "click"], [1, "fa-solid", "fa-plus", "text-xs"], ["type", "button", 1, "flex-1", "text-white", "font-bold", "py-3.5", "px-6", "rounded-xl", "shadow-md", "shadow-pink-600/10", "hover:shadow-lg", "transition-all", "duration-200", "active:scale-[0.99]", "flex", "items-center", "justify-center", "gap-3", "disabled:opacity-50", "disabled:cursor-not-allowed", "text-base", "cursor-pointer", 3, "click", "disabled"], [4, "ngIf"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-3", "pt-6", "border-t", "border-stone-200"], [1, "bg-white", "p-3.5", "rounded-xl", "border", "border-stone-200/70", "flex", "items-center", "gap-3"], [1, "fa-solid", "fa-truck-fast", "text-pink-600", "text-lg"], [1, "text-xs", "font-bold", "text-stone-800"], [1, "text-[11px]", "text-stone-500"], [1, "fa-solid", "fa-leaf", "text-pink-600", "text-lg"], [1, "fa-solid", "fa-shield-halved", "text-pink-600", "text-lg"], [1, "mt-16", "bg-white", "rounded-2xl", "border", "border-stone-200/80", "p-6", "sm:p-10", "shadow-sm"], [1, "text-lg", "font-bold", "text-stone-900", "mb-4", "flex", "items-center", "gap-2"], [1, "fa-solid", "fa-circle-info", "text-pink-600"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-8", "text-sm", "text-stone-600", "leading-relaxed"], [1, "font-bold", "text-stone-800", "mb-2"], [1, "list-disc", "list-inside", "space-y-1", "text-stone-600"], [1, "bg-pink-600", "text-white", "text-[11px]", "font-bold", "uppercase", "tracking-wider", "px-3", "py-1", "rounded-full", "shadow-sm"], [1, "bg-amber-500", "text-white", "text-[11px]", "font-bold", "uppercase", "tracking-wider", "px-3", "py-1", "rounded-full", "shadow-sm"], [1, "text-3xl", "sm:text-4xl", "font-extrabold", "text-pink-600", "tracking-tight"], [1, "text-base", "text-stone-400", "line-through", "font-medium"], [1, "text-xs", "font-bold", "text-amber-800", "bg-amber-100", "px-2.5", "py-1", "rounded-md", "ml-auto"], [1, "text-3xl", "sm:text-4xl", "font-extrabold", "text-stone-900", "tracking-tight"], [1, "fa-solid", "fa-bag-shopping"], [1, "fa-solid", "fa-circle-check", "text-lg"], [1, "max-w-md", "mx-auto", "text-center", "py-16", "bg-white", "rounded-3xl", "shadow-sm", "p-8", "border", "border-stone-200", "my-12"], [1, "fa-solid", "fa-circle-exclamation", "text-5xl", "text-pink-500", "mb-4"], [1, "text-2xl", "font-bold", "text-stone-800"], [1, "text-stone-500", "text-sm", "mt-2"], ["routerLink", "/catalogo", 1, "mt-6", "inline-flex", "items-center", "gap-2", "bg-pink-600", "hover:bg-pink-700", "text-white", "font-bold", "py-3", "px-8", "rounded-xl", "transition", "shadow-md", "shadow-pink-600/20"], [1, "fa-solid", "fa-arrow-left", "text-xs"]], template: function DetalheProduto_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 2);
            i0.ɵɵtemplate(1, DetalheProduto_div_1_Template, 94, 24, "div", 3)(2, DetalheProduto_ng_template_2_Template, 9, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const naoEncontrado_r4 = i0.ɵɵreference(3);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.produto)("ngIfElse", naoEncontrado_r4);
        } }, dependencies: [CommonModule, i5.NgIf, RouterLink, i5.CurrencyPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DetalheProduto, [{
        type: Component,
        args: [{ selector: 'app-detalhe-produto', standalone: true, imports: [CommonModule, RouterLink], template: "<main class=\"min-h-screen bg-stone-50/60 pt-20 pb-20 px-4 sm:px-6 lg:px-8 w-full mt-3 md:mt-15\">\r\n  <div class=\"max-w-7xl mx-auto\" *ngIf=\"produto; else naoEncontrado\">\r\n\r\n    <div class=\"flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8\">\r\n      <a routerLink=\"/catalogo\"\r\n        class=\"inline-flex items-center gap-2 text-xs font-bold text-stone-500 hover:text-pink-600 uppercase tracking-widest transition-colors\">\r\n        <i class=\"fa-solid fa-arrow-left text-sm\"></i>\r\n        <span>Voltar ao Cat\u00E1logo</span>\r\n      </a>\r\n\r\n      <nav class=\"flex items-center gap-2 text-xs font-medium text-stone-500 overflow-x-auto whitespace-nowrap\">\r\n        <a routerLink=\"/\" class=\"hover:text-pink-600 transition-colors\">In\u00EDcio</a>\r\n        <i class=\"fa-solid fa-chevron-right text-[10px] text-stone-300\"></i>\r\n        <a routerLink=\"/catalogo\" class=\"hover:text-pink-600 transition-colors\">Cat\u00E1logo</a>\r\n        <i class=\"fa-solid fa-chevron-right text-[10px] text-stone-300\"></i>\r\n        <span class=\"text-stone-900 font-semibold truncate max-w-50 sm:max-w-none\">{{ produto.nome }}</span>\r\n      </nav>\r\n    </div>\r\n\r\n    <div class=\"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start\">\r\n\r\n      <div class=\"lg:col-span-6 xl:col-span-7\">\r\n        <div\r\n          class=\"sticky top-24 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-stone-200/60 shadow-sm flex items-center justify-center  overflow-hidden group min-h-95 sm:min-h-120 lg:min-h-140\">\r\n\r\n          <div class=\"absolute top-4 left-4 flex flex-wrap gap-2 z-10\">\r\n            <span *ngIf=\"produto.destaque === 1\"\r\n              class=\"bg-pink-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm\">\r\n              Destaque\r\n            </span>\r\n            <span *ngIf=\"produto.valorPromo > 0\"\r\n              class=\"bg-amber-500 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm\">\r\n              Oferta Especial\r\n            </span>\r\n          </div>\r\n\r\n          <img [src]=\"produto.codigo + '.png'\" [alt]=\"produto.nome\"\r\n            class=\"max-h-80 sm:max-h-105 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"lg:col-span-6 xl:col-span-5 flex flex-col space-y-6\">\r\n\r\n        <div class=\"space-y-3 pb-6 border-b border-stone-200\">\r\n          <div class=\"flex items-center justify-between gap-4\">\r\n            <span\r\n              class=\"text-xs font-bold uppercase tracking-widest text-pink-600 bg-pink-50 px-3 py-1 rounded-full border border-pink-100\">\r\n              Secret Garden Collection\r\n            </span>\r\n            <span\r\n              [class]=\"produto.quantidade > 0 ? 'text-emerald-700 bg-emerald-50 border-emerald-200' : 'text-rose-700 bg-rose-50 border-rose-200'\"\r\n              class=\"text-xs font-semibold px-3 py-1 rounded-full border\">\r\n              {{ produto.quantidade > 0 ? 'Em estoque (' + produto.quantidade + ' un.)' : 'Esgotado' }}\r\n            </span>\r\n          </div>\r\n\r\n          <h1 class=\"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight\">\r\n            {{ produto.nome }}\r\n          </h1>\r\n\r\n          <p class=\"text-stone-600 text-sm sm:text-base leading-relaxed\">\r\n            {{ produto.descritivo }}\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2\">\r\n          <div class=\"flex items-baseline flex-wrap gap-3\">\r\n            <ng-container *ngIf=\"produto.valorPromo > 0; else precoNormal\">\r\n              <span class=\"text-3xl sm:text-4xl font-extrabold text-pink-600 tracking-tight\">\r\n                {{ produto.valorPromo | currency:'BRL' }}\r\n              </span>\r\n              <span class=\"text-base text-stone-400 line-through font-medium\">\r\n                {{ produto.valor | currency:'BRL' }}\r\n              </span>\r\n              <span class=\"text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-md ml-auto\">\r\n                Economize {{ (produto.valor - produto.valorPromo) | currency:'BRL' }}\r\n              </span>\r\n            </ng-container>\r\n\r\n            <ng-template #precoNormal>\r\n              <span class=\"text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight\">\r\n                {{ produto.valor | currency:'BRL' }}\r\n              </span>\r\n            </ng-template>\r\n          </div>\r\n          <p class=\"text-xs text-stone-500\">Em at\u00E9 3x sem juros no cart\u00E3o de cr\u00E9dito</p>\r\n        </div>\r\n\r\n        <div class=\"space-y-4 pt-2\">\r\n          <div class=\"flex flex-col sm:flex-row items-stretch sm:items-center gap-3\">\r\n\r\n            <div\r\n              class=\"flex items-center justify-between border border-stone-300 rounded-xl bg-white p-1 min-w-32.5 sm:w-auto shadow-sm\">\r\n              <button type=\"button\" (click)=\"decrementar()\" aria-label=\"Diminuir quantidade\"\r\n                class=\"w-10 h-10 rounded-lg text-stone-600 font-bold hover:bg-stone-100 hover:text-stone-900 transition flex items-center justify-center cursor-pointer\">\r\n                <i class=\"fa-solid fa-minus text-xs\"></i>\r\n              </button>\r\n              <span class=\"px-4 text-base font-bold text-stone-800\">{{ qtdSelecionada }}</span>\r\n              <button type=\"button\" (click)=\"incrementar()\" aria-label=\"Aumentar quantidade\"\r\n                class=\"w-10 h-10 rounded-lg text-stone-600 font-bold hover:bg-stone-100 hover:text-stone-900 transition flex items-center justify-center cursor-pointer\">\r\n                <i class=\"fa-solid fa-plus text-xs\"></i>\r\n              </button>\r\n            </div>\r\n\r\n            <button type=\"button\" [disabled]=\"produto.quantidade === 0\" (click)=\"adicionarAoCarrinho()\"\r\n              [class.bg-emerald-600]=\"adicionadoComSucesso\" [class.hover:bg-emerald-700]=\"adicionadoComSucesso\"\r\n              [class.bg-pink-600]=\"!adicionadoComSucesso\" [class.hover:bg-pink-700]=\"!adicionadoComSucesso\"\r\n              class=\"flex-1 text-white font-bold py-3.5 px-6 rounded-xl shadow-md shadow-pink-600/10 hover:shadow-lg transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed text-base cursor-pointer\">\r\n\r\n              <ng-container *ngIf=\"!adicionadoComSucesso\">\r\n                <i class=\"fa-solid fa-bag-shopping\"></i>\r\n                <span>Adicionar ao Carrinho</span>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"adicionadoComSucesso\">\r\n                <i class=\"fa-solid fa-circle-check text-lg\"></i>\r\n                <span>Adicionado com Sucesso!</span>\r\n              </ng-container>\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-stone-200\">\r\n          <div class=\"bg-white p-3.5 rounded-xl border border-stone-200/70 flex items-center gap-3\">\r\n            <i class=\"fa-solid fa-truck-fast text-pink-600 text-lg\"></i>\r\n            <div>\r\n              <p class=\"text-xs font-bold text-stone-800\">Entrega Expressa</p>\r\n              <p class=\"text-[11px] text-stone-500\">Em at\u00E9 24h na sua regi\u00E3o</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"bg-white p-3.5 rounded-xl border border-stone-200/70 flex items-center gap-3\">\r\n            <i class=\"fa-solid fa-leaf text-pink-600 text-lg\"></i>\r\n            <div>\r\n              <p class=\"text-xs font-bold text-stone-800\">Flores Frescas</p>\r\n              <p class=\"text-[11px] text-stone-500\">Selecionadas \u00E0 m\u00E3o</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"bg-white p-3.5 rounded-xl border border-stone-200/70 flex items-center gap-3\">\r\n            <i class=\"fa-solid fa-shield-halved text-pink-600 text-lg\"></i>\r\n            <div>\r\n              <p class=\"text-xs font-bold text-stone-800\">Compra Segura</p>\r\n              <p class=\"text-[11px] text-stone-500\">Garantia de satisfa\u00E7\u00E3o</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mt-16 bg-white rounded-2xl border border-stone-200/80 p-6 sm:p-10 shadow-sm\">\r\n      <h2 class=\"text-lg font-bold text-stone-900 mb-4 flex items-center gap-2\">\r\n        <i class=\"fa-solid fa-circle-info text-pink-600\"></i> Detalhes do Produto & Cuidados\r\n      </h2>\r\n      <div class=\"grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-stone-600 leading-relaxed\">\r\n        <div>\r\n          <h3 class=\"font-bold text-stone-800 mb-2\">Sobre este arranjo</h3>\r\n          <p>Cada produto da linha Secret Garden \u00E9 preparado artesanalmente por floristas especializados momentos antes\r\n            do envio, garantindo m\u00E1xima durabilidade, frescor e perfume.</p>\r\n        </div>\r\n        <div>\r\n          <h3 class=\"font-bold text-stone-800 mb-2\">Dicas de conserva\u00E7\u00E3o</h3>\r\n          <ul class=\"list-disc list-inside space-y-1 text-stone-600\">\r\n            <li>Mantenha em local fresco, longe da luz solar direta.</li>\r\n            <li>Troque a \u00E1gua do vaso a cada 2 dias.</li>\r\n            <li>Corte 1cm da base das hastes na diagonal ao trocar a \u00E1gua.</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <ng-template #naoEncontrado>\r\n    <div class=\"max-w-md mx-auto text-center py-16 bg-white rounded-3xl shadow-sm p-8 border border-stone-200 my-12\">\r\n      <i class=\"fa-solid fa-circle-exclamation text-5xl text-pink-500 mb-4\"></i>\r\n      <h2 class=\"text-2xl font-bold text-stone-800\">Produto n\u00E3o encontrado</h2>\r\n      <p class=\"text-stone-500 text-sm mt-2\">O item que voc\u00EA procurou n\u00E3o est\u00E1 dispon\u00EDvel ou foi removido do nosso\r\n        cat\u00E1logo.</p>\r\n      <a routerLink=\"/catalogo\"\r\n        class=\"mt-6 inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-xl transition shadow-md shadow-pink-600/20\">\r\n        <i class=\"fa-solid fa-arrow-left text-xs\"></i> Voltar ao Cat\u00E1logo\r\n      </a>\r\n    </div>\r\n  </ng-template>\r\n</main>" }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i1.Router }, { type: i2.CarrinhoService }, { type: i3.AuthService }, { type: i4.ProdutoService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DetalheProduto, { className: "DetalheProduto", filePath: "src/app/pages/detalhe-produto/detalhe-produto.ts", lineNumber: 16 }); })();
