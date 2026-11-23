import { Component, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProdutoService } from '../services/produto';
import { Subject, of, debounceTime, distinctUntilChanged, switchMap, takeUntil, catchError, map } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.codigo;
function Catalogo_For_71_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 39);
    i0.ɵɵtext(1, " Novo ");
    i0.ɵɵelementEnd();
} }
function Catalogo_For_71_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 40);
    i0.ɵɵtext(1, " Oferta ");
    i0.ɵɵelementEnd();
} }
function Catalogo_For_71_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 53);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 54)(4, "span", 55);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "currency");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const obj_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(2, 2, obj_r1.valor, "BRL", "symbol", "1.2-2"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(6, 7, obj_r1.valorPromo, "BRL", "symbol", "1.2-2"));
} }
function Catalogo_For_71_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 56);
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 57)(3, "span", 55);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "currency");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const obj_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(5, 1, obj_r1.valor, "BRL", "symbol", "1.2-2"));
} }
function Catalogo_For_71_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 51);
    i0.ɵɵtext(1, " Comprar agora ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const obj_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", "/produto/" + obj_r1.codigo);
} }
function Catalogo_For_71_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 52);
    i0.ɵɵtext(1, " Esgotado ");
    i0.ɵɵelementEnd();
} }
function Catalogo_For_71_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 36)(1, "div", 38);
    i0.ɵɵconditionalCreate(2, Catalogo_For_71_Conditional_2_Template, 2, 0, "span", 39);
    i0.ɵɵconditionalCreate(3, Catalogo_For_71_Conditional_3_Template, 2, 0, "span", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 41);
    i0.ɵɵelement(5, "img", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 43)(7, "div", 44)(8, "p", 45);
    i0.ɵɵtext(9, "Secret Garden");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "h3", 46);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "p", 47);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 48)(15, "div", 49);
    i0.ɵɵconditionalCreate(16, Catalogo_For_71_Conditional_16_Template, 7, 12)(17, Catalogo_For_71_Conditional_17_Template, 6, 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 50);
    i0.ɵɵconditionalCreate(19, Catalogo_For_71_Conditional_19_Template, 2, 1, "a", 51)(20, Catalogo_For_71_Conditional_20_Template, 2, 0, "button", 52);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const obj_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(obj_r1.destaque === 1 ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(obj_r1.valorPromo > 0 ? 3 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", i0.ɵɵinterpolate1("", obj_r1.codigo, ".png"), i0.ɵɵsanitizeUrl)("alt", obj_r1.nome);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("title", obj_r1.nome);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", obj_r1.nome, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", obj_r1.descritivo, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(obj_r1.valorPromo > 0 ? 16 : 17);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(obj_r1.quantidade > 0 ? 19 : 20);
} }
function Catalogo_ForEmpty_72_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "p", 58);
    i0.ɵɵtext(2, "Nenhum produto encontrado com os filtros selecionados.");
    i0.ɵɵelementEnd()();
} }
export class Catalogo {
    produtoService = inject(ProdutoService);
    route = inject(ActivatedRoute);
    cdr = inject(ChangeDetectorRef);
    busca$ = new Subject();
    destruir$ = new Subject();
    _termoBusca = '';
    get termoBusca() {
        return this._termoBusca;
    }
    set termoBusca(valor) {
        const novoValor = valor ?? '';
        if (this._termoBusca !== novoValor) {
            this._termoBusca = novoValor;
            this.busca$.next(novoValor);
        }
    }
    precoMaximo = 300;
    apenasDisponiveis = false;
    apenasPromocoes = false;
    ordenarPor = 'vendas';
    categoriaSelecionada = 'todos';
    lista = [];
    carregando = false;
    erroCarregamento = '';
    ngOnInit() {
        const produtos = this.route.snapshot.data['produtos'];
        this.lista = Array.isArray(produtos)
            ? [...produtos]
            : [];
        this.carregando = false;
        this.busca$
            .pipe(map(termo => termo.trim()), debounceTime(300), distinctUntilChanged(), switchMap(termo => {
            this.carregando = true;
            this.erroCarregamento = '';
            this.cdr.detectChanges();
            const requisicao = termo
                ? this.produtoService.buscarProdutos(termo)
                : this.produtoService.listarProdutos();
            return requisicao.pipe(map(resultado => ({
                produtos: resultado,
                erro: false
            })), catchError(erro => {
                console.error('Erro ao buscar produtos:', erro);
                return of({
                    produtos: this.lista,
                    erro: true
                });
            }));
        }), takeUntil(this.destruir$))
            .subscribe(resultado => {
            if (resultado.erro) {
                this.erroCarregamento =
                    'Não foi possível atualizar os produtos. Tente novamente.';
            }
            else {
                this.lista = Array.isArray(resultado.produtos)
                    ? [...resultado.produtos]
                    : [];
                this.erroCarregamento = '';
            }
            this.carregando = false;
            this.cdr.detectChanges();
        });
        this.cdr.detectChanges();
    }
    carregarProdutos() {
        this.busca$.next(this.termoBusca);
    }
    pesquisarProdutos() {
        this.busca$.next(this.termoBusca);
    }
    selecionarCategoria(categoria) {
        this.categoriaSelecionada = categoria;
    }
    obterPreco(produto) {
        const valor = Number(produto.valor);
        const valorPromo = Number(produto.valorPromo);
        if (Number.isFinite(valorPromo) && valorPromo > 0) {
            return valorPromo;
        }
        return Number.isFinite(valor) ? valor : 0;
    }
    get listaFiltrada() {
        const maxPreco = Number(this.precoMaximo);
        let resultado = this.lista.filter(produto => {
            const nome = String(produto.nome ?? '').toLowerCase();
            const precoAtual = this.obterPreco(produto);
            const correspondePreco = !Number.isFinite(maxPreco) ||
                precoAtual <= maxPreco;
            const correspondeEstoque = !this.apenasDisponiveis ||
                Number(produto.quantidade) > 0;
            const correspondePromo = !this.apenasPromocoes ||
                Number(produto.valorPromo) > 0;
            let correspondeCategoria = true;
            if (this.categoriaSelecionada === 'buques') {
                correspondeCategoria =
                    nome.includes('buquê') ||
                        nome.includes('buque');
            }
            else if (this.categoriaSelecionada === 'vasos') {
                correspondeCategoria =
                    nome.includes('vaso') ||
                        nome.includes('planta') ||
                        nome.includes('orquídea') ||
                        nome.includes('orquidea');
            }
            else if (this.categoriaSelecionada === 'especial') {
                correspondeCategoria =
                    Number(produto.destaque) === 1;
            }
            return (correspondePreco &&
                correspondeEstoque &&
                correspondePromo &&
                correspondeCategoria);
        });
        if (this.ordenarPor === 'menor') {
            resultado = [...resultado].sort((a, b) => this.obterPreco(a) - this.obterPreco(b));
        }
        else if (this.ordenarPor === 'maior') {
            resultado = [...resultado].sort((a, b) => this.obterPreco(b) - this.obterPreco(a));
        }
        return resultado;
    }
    ngOnDestroy() {
        this.destruir$.next();
        this.destruir$.complete();
    }
    static ɵfac = function Catalogo_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Catalogo)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Catalogo, selectors: [["app-catalogo"]], decls: 73, vars: 17, consts: [[1, "min-h-screen"], [1, "relative", "overflow-hidden", "py-16", "md:py-24", "mt-20"], [1, "pointer-events-none", "absolute", "-left-20", "-top-20", "h-72", "w-72", "rounded-full", "bg-pink-200/30", "blur-3xl"], [1, "pointer-events-none", "absolute", "-right-20", "bottom-0", "h-80", "w-80", "rounded-full", "bg-rose-100/30", "blur-3xl"], [1, "relative", "mx-auto", "max-w-7xl", "px-4", "text-center", "sm:px-6", "lg:px-8"], [1, "inline-flex", "items-center", "gap-2", "rounded-full", "bg-white/90", "px-4", "py-1.5", "text-[10px]", "font-bold", "uppercase", "tracking-[0.2em]", "text-[#E55B69]", "shadow-sm", "border", "border-pink-100/60"], ["data-lucide", "sparkles", 1, "h-3.5", "w-3.5"], [1, "mt-4", "text-4xl", "font-extrabold", "tracking-tight", "text-stone-900", "sm:text-5xl", "md:text-6xl", "font-sans"], [1, "inline-block", "text-pink-600", "font-cursive", "transition-all", "duration-300", "hover:scale-105"], [1, "mx-auto", "mt-4", "max-w-2xl", "text-sm", "leading-relaxed", "text-stone-600", "font-serif", "md:text-base"], [1, "mt-8", "flex", "flex-wrap", "justify-center", "gap-2.5"], [1, "rounded-full", "px-6", "py-2.5", "text-xs", "font-medium", "shadow-sm", "transition-all", "cursor-pointer", 3, "click", "ngClass"], [1, "w-full", "max-w-7xl", "mx-auto", "px-4", "pb-20", "grid", "grid-cols-1", "lg:grid-cols-4", "gap-8"], [1, "w-full", "bg-white/90", "backdrop-blur-md", "border", "border-pink-100/60", "rounded-3xl", "p-6", "shadow-sm", "h-fit"], [1, "text-sm", "font-bold", "uppercase", "tracking-wider", "text-stone-800", "border-b", "border-stone-100", "pb-3", "mb-5"], [1, "flex", "flex-col", "gap-6"], [1, "block", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "mb-2"], ["type", "range", "min", "30", "max", "300", 1, "w-full", "accent-pink-600", "cursor-pointer", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-between", "text-[11px]", "text-stone-400", "mt-1"], [1, "flex", "flex-col", "gap-2.5"], [1, "flex", "items-center", "gap-2", "text-xs", "text-stone-600", "cursor-pointer", "select-none"], ["type", "checkbox", 1, "rounded", "border-stone-300", "text-pink-600", "focus:ring-pink-500/20", "accent-pink-600", 3, "ngModelChange", "ngModel"], [1, "w-full", "bg-white", "border", "border-stone-200", "rounded-xl", "px-3", "py-2.5", "text-xs", "text-stone-700", "focus:outline-none", "focus:border-pink-500", "transition-all", 3, "ngModelChange", "ngModel"], ["value", "vendas"], ["value", "menor"], ["value", "maior"], [1, "w-full", "lg:col-span-3"], ["id", "catalogo", 1, "w-full"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4", "mb-8", "border-b", "border-pink-100/60", "pb-6"], [1, "text-center", "sm:text-left"], [1, "text-xl", "font-bold", "tracking-wide", "uppercase", "text-stone-800"], [1, "relative", "w-full", "sm:w-72", "mx-auto", "sm:mx-0"], [1, "absolute", "inset-y-0", "left-0", "pl-3.5", "flex", "items-center", "pointer-events-none", "text-stone-400"], ["data-lucide", "search", 1, "w-4", "h-4"], ["type", "text", "placeholder", "Pesquise flores...", 1, "w-full", "pl-9", "pr-4", "py-2.5", "bg-white/90", "backdrop-blur-sm", "border", "border-stone-200", "rounded-full", "text-stone-800", "placeholder-stone-400", "text-xs", "focus:outline-none", "focus:bg-white", "focus:border-pink-500", "focus:ring-4", "focus:ring-pink-500/5", "transition-all", "duration-200", "shadow-sm", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "xl:grid-cols-3", "gap-6", "justify-items-center"], [1, "product-card", "group", "w-full", "bg-white", "rounded-3xl", "shadow-sm", "hover:shadow-2xl", "border", "border-pink-100/40", "overflow-hidden", "transition-all", "duration-300", "flex", "flex-col", "justify-between", "h-120", "relative"], [1, "col-span-full", "py-12", "text-center", "text-stone-500"], [1, "absolute", "top-4", "left-4", "z-10", "flex", "flex-col", "gap-1.5"], [1, "bg-rose-500", "text-white", "text-[9px]", "font-bold", "tracking-widest", "px-2.5", "py-1", "rounded-md", "uppercase", "shadow-sm"], [1, "bg-amber-500", "text-white", "text-[9px]", "font-bold", "tracking-widest", "px-2.5", "py-1", "rounded-md", "uppercase", "shadow-sm"], [1, "relative", "h-52", "w-full", "flex", "items-center", "justify-center", "p-6", "bg-stone-50", "overflow-hidden"], [1, "h-full", "w-full", "object-contain", "transition-transform", "duration-500", "group-hover:scale-105", 3, "src", "alt"], [1, "p-6", "flex", "flex-col", "flex-1", "justify-between", "gap-4", "bg-white"], [1, "text-center", "flex", "flex-col", "gap-1.5"], [1, "text-[9px]", "text-stone-400", "font-bold", "uppercase", "tracking-widest"], [1, "text-base", "font-bold", "text-stone-800", "line-clamp-1", "group-hover:text-pink-600", "transition-colors", "duration-200", 3, "title"], [1, "text-stone-400", "text-xs", "leading-relaxed", "font-serif", "line-clamp-2"], [1, "flex", "flex-col", "gap-3", "mt-auto"], [1, "flex", "flex-col", "items-center", "justify-center", "min-h-11", "bg-stone-50/50", "py-1.5", "rounded-xl", "border", "border-stone-100/60"], [1, "w-full"], [1, "w-full", "bg-pink-600", "hover:bg-pink-700", "text-white", "font-medium", "py-2.5", "px-4", "rounded-xl", "transition-all", "duration-300", "text-xs", "tracking-wide", "shadow-sm", "hover:shadow-md", "active:scale-[0.99]", "block", "text-center", "cursor-pointer", 3, "routerLink"], ["type", "button", "disabled", "", 1, "w-full", "bg-stone-100", "text-stone-400", "font-medium", "py-2.5", "px-4", "rounded-xl", "text-xs", "cursor-not-allowed"], [1, "text-[10px]", "text-stone-400", "line-through"], [1, "flex", "items-baseline", "gap-0.5", "text-pink-600", "font-extrabold"], [1, "text-2xl", "tracking-tight"], [1, "text-[10px]", "text-transparent", "select-none"], [1, "flex", "items-baseline", "gap-0.5", "text-stone-800", "font-extrabold"], [1, "text-sm", "font-medium"]], template: function Catalogo_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "section", 1);
            i0.ɵɵelement(2, "div", 2)(3, "div", 3);
            i0.ɵɵelementStart(4, "div", 4)(5, "span", 5);
            i0.ɵɵelement(6, "i", 6);
            i0.ɵɵtext(7, " Curadoria Exclusiva ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "h1", 7);
            i0.ɵɵtext(9, " Secret ");
            i0.ɵɵelementStart(10, "span", 8);
            i0.ɵɵtext(11, "Garden");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(12, " & Cole\u00E7\u00F5es ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "p", 9);
            i0.ɵɵtext(14, " Arranjos bot\u00E2nicos desenhados \u00E0 m\u00E3o, cultivados de forma sustent\u00E1vel e entregues com o frescor da manh\u00E3 direto na sua porta. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 10)(16, "button", 11);
            i0.ɵɵlistener("click", function Catalogo_Template_button_click_16_listener() { return ctx.selecionarCategoria("todos"); });
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "button", 11);
            i0.ɵɵlistener("click", function Catalogo_Template_button_click_18_listener() { return ctx.selecionarCategoria("buques"); });
            i0.ɵɵtext(19, " Buqu\u00EAs Nobres ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "button", 11);
            i0.ɵɵlistener("click", function Catalogo_Template_button_click_20_listener() { return ctx.selecionarCategoria("vasos"); });
            i0.ɵɵtext(21, " Vasos & Plantas ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "button", 11);
            i0.ɵɵlistener("click", function Catalogo_Template_button_click_22_listener() { return ctx.selecionarCategoria("especial"); });
            i0.ɵɵtext(23, " Edi\u00E7\u00E3o Especial ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(24, "div", 12)(25, "aside", 13)(26, "h3", 14);
            i0.ɵɵtext(27, " Filtros ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "div", 15)(29, "div")(30, "label", 16);
            i0.ɵɵtext(31);
            i0.ɵɵpipe(32, "currency");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "input", 17);
            i0.ɵɵtwoWayListener("ngModelChange", function Catalogo_Template_input_ngModelChange_33_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.precoMaximo, $event) || (ctx.precoMaximo = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(34, "div", 18)(35, "span");
            i0.ɵɵtext(36, "R$ 30");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "span");
            i0.ɵɵtext(38, "R$ 300");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(39, "div")(40, "label", 16);
            i0.ɵɵtext(41, "Disponibilidade");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "div", 19)(43, "label", 20)(44, "input", 21);
            i0.ɵɵtwoWayListener("ngModelChange", function Catalogo_Template_input_ngModelChange_44_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.apenasDisponiveis, $event) || (ctx.apenasDisponiveis = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵtext(45, " Dispon\u00EDvel em estoque ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "label", 20)(47, "input", 21);
            i0.ɵɵtwoWayListener("ngModelChange", function Catalogo_Template_input_ngModelChange_47_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.apenasPromocoes, $event) || (ctx.apenasPromocoes = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵtext(48, " Apenas Promo\u00E7\u00F5es ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(49, "div")(50, "label", 16);
            i0.ɵɵtext(51, "Ordenar por");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "select", 22);
            i0.ɵɵtwoWayListener("ngModelChange", function Catalogo_Template_select_ngModelChange_52_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.ordenarPor, $event) || (ctx.ordenarPor = $event); return $event; });
            i0.ɵɵelementStart(53, "option", 23);
            i0.ɵɵtext(54, "Mais vendidos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "option", 24);
            i0.ɵɵtext(56, "Menor pre\u00E7o");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(57, "option", 25);
            i0.ɵɵtext(58, "Maior pre\u00E7o");
            i0.ɵɵelementEnd()();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(59, "main", 26)(60, "section", 27)(61, "div", 28)(62, "div", 29)(63, "h2", 30);
            i0.ɵɵtext(64, " Flores Populares ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(65, "div", 31)(66, "div", 32);
            i0.ɵɵelement(67, "i", 33);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(68, "input", 34);
            i0.ɵɵtwoWayListener("ngModelChange", function Catalogo_Template_input_ngModelChange_68_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.termoBusca, $event) || (ctx.termoBusca = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(69, "div", 35);
            i0.ɵɵrepeaterCreate(70, Catalogo_For_71_Template, 21, 10, "div", 36, _forTrack0, false, Catalogo_ForEmpty_72_Template, 3, 0, "div", 37);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(16);
            i0.ɵɵproperty("ngClass", ctx.categoriaSelecionada === "todos" ? "bg-pink-600 text-white shadow-md shadow-pink-500/10" : "border border-pink-200/60 bg-white/90 text-stone-700 hover:border-pink-600 hover:text-pink-600");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" Todos (", ctx.lista.length, ") ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.categoriaSelecionada === "buques" ? "bg-pink-600 text-white shadow-md shadow-pink-500/10" : "border border-pink-200/60 bg-white/90 text-stone-700 hover:border-pink-600 hover:text-pink-600");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.categoriaSelecionada === "vasos" ? "bg-pink-600 text-white shadow-md shadow-pink-500/10" : "border border-pink-200/60 bg-white/90 text-stone-700 hover:border-pink-600 hover:text-pink-600");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.categoriaSelecionada === "especial" ? "bg-pink-600 text-white shadow-md shadow-pink-500/10" : "border border-pink-200/60 bg-white/90 text-stone-700 hover:border-pink-600 hover:text-pink-600");
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate1(" Pre\u00E7o M\u00E1ximo: ", i0.ɵɵpipeBind4(32, 12, ctx.precoMaximo, "BRL", "symbol", "1.2-2"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtwoWayProperty("ngModel", ctx.precoMaximo);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(11);
            i0.ɵɵtwoWayProperty("ngModel", ctx.apenasDisponiveis);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.apenasPromocoes);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.ordenarPor);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(16);
            i0.ɵɵtwoWayProperty("ngModel", ctx.termoBusca);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.listaFiltrada);
        } }, dependencies: [CommonModule, i1.NgClass, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.RangeValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel, RouterLink, i1.CurrencyPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Catalogo, [{
        type: Component,
        args: [{ selector: 'app-catalogo', standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: "<div class=\"min-h-screen\">\r\n    \r\n    <section class=\"relative overflow-hidden py-16 md:py-24 mt-20\">\r\n        <div class=\"pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl\"></div>\r\n        <div class=\"pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-rose-100/30 blur-3xl\"></div>\r\n\r\n        <div class=\"relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8\">\r\n            <span\r\n                class=\"inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E55B69] shadow-sm border border-pink-100/60\">\r\n                <i data-lucide=\"sparkles\" class=\"h-3.5 w-3.5\"></i> Curadoria Exclusiva\r\n            </span>\r\n            <h1 class=\"mt-4 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl md:text-6xl font-sans\">\r\n                Secret <span\r\n                    class=\"inline-block text-pink-600 font-cursive transition-all duration-300 hover:scale-105\">Garden</span>\r\n                & Cole\u00E7\u00F5es\r\n            </h1>\r\n            <p class=\"mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-stone-600 font-serif md:text-base\">\r\n                Arranjos bot\u00E2nicos desenhados \u00E0 m\u00E3o, cultivados de forma sustent\u00E1vel e entregues com o frescor da manh\u00E3\r\n                direto na sua porta.\r\n            </p>\r\n\r\n            <div class=\"mt-8 flex flex-wrap justify-center gap-2.5\">\r\n                <button (click)=\"selecionarCategoria('todos')\"\r\n                    [ngClass]=\"categoriaSelecionada === 'todos' ? 'bg-pink-600 text-white shadow-md shadow-pink-500/10' : 'border border-pink-200/60 bg-white/90 text-stone-700 hover:border-pink-600 hover:text-pink-600'\"\r\n                    class=\"rounded-full px-6 py-2.5 text-xs font-medium shadow-sm transition-all cursor-pointer\">\r\n                    Todos ({{ lista.length }})\r\n                </button>\r\n\r\n                <button (click)=\"selecionarCategoria('buques')\"\r\n                    [ngClass]=\"categoriaSelecionada === 'buques' ? 'bg-pink-600 text-white shadow-md shadow-pink-500/10' : 'border border-pink-200/60 bg-white/90 text-stone-700 hover:border-pink-600 hover:text-pink-600'\"\r\n                    class=\"rounded-full px-6 py-2.5 text-xs font-medium shadow-sm transition-all cursor-pointer\">\r\n                    Buqu\u00EAs Nobres\r\n                </button>\r\n\r\n                <button (click)=\"selecionarCategoria('vasos')\"\r\n                    [ngClass]=\"categoriaSelecionada === 'vasos' ? 'bg-pink-600 text-white shadow-md shadow-pink-500/10' : 'border border-pink-200/60 bg-white/90 text-stone-700 hover:border-pink-600 hover:text-pink-600'\"\r\n                    class=\"rounded-full px-6 py-2.5 text-xs font-medium shadow-sm transition-all cursor-pointer\">\r\n                    Vasos & Plantas\r\n                </button>\r\n\r\n                <button (click)=\"selecionarCategoria('especial')\"\r\n                    [ngClass]=\"categoriaSelecionada === 'especial' ? 'bg-pink-600 text-white shadow-md shadow-pink-500/10' : 'border border-pink-200/60 bg-white/90 text-stone-700 hover:border-pink-600 hover:text-pink-600'\"\r\n                    class=\"rounded-full px-6 py-2.5 text-xs font-medium shadow-sm transition-all cursor-pointer\">\r\n                    Edi\u00E7\u00E3o Especial\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <div class=\"w-full max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-4 gap-8\">\r\n\r\n        <aside class=\"w-full bg-white/90 backdrop-blur-md border border-pink-100/60 rounded-3xl p-6 shadow-sm h-fit\">\r\n            <h3 class=\"text-sm font-bold uppercase tracking-wider text-stone-800 border-b border-stone-100 pb-3 mb-5\">\r\n                Filtros\r\n            </h3>\r\n\r\n            <div class=\"flex flex-col gap-6\">\r\n                <div>\r\n                    <label class=\"block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2\">\r\n                        Pre\u00E7o M\u00E1ximo: {{ precoMaximo | currency:'BRL':'symbol':'1.2-2' }}\r\n                    </label>\r\n                    <input type=\"range\" min=\"30\" max=\"300\" [(ngModel)]=\"precoMaximo\"\r\n                        class=\"w-full accent-pink-600 cursor-pointer\">\r\n                    <div class=\"flex justify-between text-[11px] text-stone-400 mt-1\">\r\n                        <span>R$ 30</span>\r\n                        <span>R$ 300</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div>\r\n                    <label class=\"block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2\">Disponibilidade</label>\r\n                    <div class=\"flex flex-col gap-2.5\">\r\n                        <label class=\"flex items-center gap-2 text-xs text-stone-600 cursor-pointer select-none\">\r\n                            <input type=\"checkbox\" [(ngModel)]=\"apenasDisponiveis\"\r\n                                class=\"rounded border-stone-300 text-pink-600 focus:ring-pink-500/20 accent-pink-600\">\r\n                            Dispon\u00EDvel em estoque\r\n                        </label>\r\n                        <label class=\"flex items-center gap-2 text-xs text-stone-600 cursor-pointer select-none\">\r\n                            <input type=\"checkbox\" [(ngModel)]=\"apenasPromocoes\"\r\n                                class=\"rounded border-stone-300 text-pink-600 focus:ring-pink-500/20 accent-pink-600\">\r\n                            Apenas Promo\u00E7\u00F5es\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div>\r\n                    <label class=\"block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2\">Ordenar por</label>\r\n                    <select [(ngModel)]=\"ordenarPor\"\r\n                        class=\"w-full bg-white border border-stone-200 rounded-xl px-3 py-2.5 text-xs text-stone-700 focus:outline-none focus:border-pink-500 transition-all\">\r\n                        <option value=\"vendas\">Mais vendidos</option>\r\n                        <option value=\"menor\">Menor pre\u00E7o</option>\r\n                        <option value=\"maior\">Maior pre\u00E7o</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </aside>\r\n\r\n        <main class=\"w-full lg:col-span-3\">\r\n            <section id=\"catalogo\" class=\"w-full\">\r\n\r\n                <div class=\"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 border-b border-pink-100/60 pb-6\">\r\n                    <div class=\"text-center sm:text-left\">\r\n                        <h2 class=\"text-xl font-bold tracking-wide uppercase text-stone-800\">\r\n                            Flores Populares\r\n                        </h2>\r\n                    </div>\r\n\r\n                    <div class=\"relative w-full sm:w-72 mx-auto sm:mx-0\">\r\n                        <div class=\"absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400\">\r\n                            <i data-lucide=\"search\" class=\"w-4 h-4\"></i>\r\n                        </div>\r\n                        <input type=\"text\" [(ngModel)]=\"termoBusca\" placeholder=\"Pesquise flores...\"\r\n                            class=\"w-full pl-9 pr-4 py-2.5 bg-white/90 backdrop-blur-sm border border-stone-200 rounded-full text-stone-800 placeholder-stone-400 text-xs focus:outline-none focus:bg-white focus:border-pink-500 focus:ring-4 focus:ring-pink-500/5 transition-all duration-200 shadow-sm\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center\">\r\n                    @for (obj of listaFiltrada; track obj.codigo) {\r\n\r\n                    <div class=\"product-card group w-full bg-white rounded-3xl shadow-sm hover:shadow-2xl border border-pink-100/40 overflow-hidden transition-all duration-300 flex flex-col justify-between h-120 relative\">\r\n\r\n                        <div class=\"absolute top-4 left-4 z-10 flex flex-col gap-1.5\">\r\n                            @if (obj.destaque === 1) {\r\n                            <span class=\"bg-rose-500 text-white text-[9px] font-bold tracking-widest px-2.5 py-1 rounded-md uppercase shadow-sm\">\r\n                                Novo\r\n                            </span>\r\n                            }\r\n                            @if (obj.valorPromo > 0) {\r\n                            <span class=\"bg-amber-500 text-white text-[9px] font-bold tracking-widest px-2.5 py-1 rounded-md uppercase shadow-sm\">\r\n                                Oferta\r\n                            </span>\r\n                            }\r\n                        </div>\r\n\r\n                        <div class=\"relative h-52 w-full flex items-center justify-center p-6 bg-stone-50 overflow-hidden\">\r\n                            <img src=\"{{obj.codigo}}.png\" [alt]=\"obj.nome\"\r\n                                class=\"h-full w-full object-contain transition-transform duration-500 group-hover:scale-105\" />\r\n                        </div>\r\n\r\n                        <div class=\"p-6 flex flex-col flex-1 justify-between gap-4 bg-white\">\r\n                            <div class=\"text-center flex flex-col gap-1.5\">\r\n                                <p class=\"text-[9px] text-stone-400 font-bold uppercase tracking-widest\">Secret Garden</p>\r\n                                <h3 class=\"text-base font-bold text-stone-800 line-clamp-1 group-hover:text-pink-600 transition-colors duration-200\" [title]=\"obj.nome\">\r\n                                    {{ obj.nome }}\r\n                                </h3>\r\n                                <p class=\"text-stone-400 text-xs leading-relaxed font-serif line-clamp-2\">\r\n                                    {{ obj.descritivo }}\r\n                                </p>\r\n                            </div>\r\n\r\n                            <div class=\"flex flex-col gap-3 mt-auto\">\r\n                                <div class=\"flex flex-col items-center justify-center min-h-11 bg-stone-50/50 py-1.5 rounded-xl border border-stone-100/60\">\r\n                                    @if (obj.valorPromo > 0) {\r\n                                    <span class=\"text-[10px] text-stone-400 line-through\">{{ obj.valor | currency:'BRL':'symbol':'1.2-2' }}</span>\r\n                                    <div class=\"flex items-baseline gap-0.5 text-pink-600 font-extrabold\">\r\n                                        <span class=\"text-2xl tracking-tight\">{{ obj.valorPromo | currency:'BRL':'symbol':'1.2-2' }}</span>\r\n                                    </div>\r\n                                    } @else {\r\n                                    <span class=\"text-[10px] text-transparent select-none\">-</span>\r\n                                    <div class=\"flex items-baseline gap-0.5 text-stone-800 font-extrabold\">\r\n                                        <span class=\"text-2xl tracking-tight\">{{ obj.valor | currency:'BRL':'symbol':'1.2-2' }}</span>\r\n                                    </div>\r\n                                    }\r\n                                </div>\r\n\r\n                                <div class=\"w-full\">\r\n                                    @if (obj.quantidade > 0) {\r\n                                    <a [routerLink]=\"'/produto/' + obj.codigo\"\r\n                                        class=\"w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-300 text-xs tracking-wide shadow-sm hover:shadow-md active:scale-[0.99] block text-center cursor-pointer\">\r\n                                        Comprar agora\r\n                                    </a>\r\n                                    } @else {\r\n                                    <button type=\"button\" disabled\r\n                                        class=\"w-full bg-stone-100 text-stone-400 font-medium py-2.5 px-4 rounded-xl text-xs cursor-not-allowed\">\r\n                                        Esgotado\r\n                                    </button>\r\n                                    }\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    } @empty {\r\n                    <div class=\"col-span-full py-12 text-center text-stone-500\">\r\n                        <p class=\"text-sm font-medium\">Nenhum produto encontrado com os filtros selecionados.</p>\r\n                    </div>\r\n                    }\r\n\r\n                </div>\r\n            </section>\r\n        </main>\r\n    </div>\r\n</div>" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Catalogo, { className: "Catalogo", filePath: "src/app/catalogo/catalogo.ts", lineNumber: 38 }); })();
