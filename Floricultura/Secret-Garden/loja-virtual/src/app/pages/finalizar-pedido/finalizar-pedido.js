import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PedidoService } from '../../services/pedido';
import { AuthService } from '../../services/auth';
import { take } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../services/carrinho";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
function FinalizarPedido_div_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43)(1, "div", 44);
    i0.ɵɵelement(2, "img", 45);
    i0.ɵɵelementStart(3, "div", 46)(4, "p", 47);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 48);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "span", 49);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "currency");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", item_r1.produto.codigo + ".png", i0.ɵɵsanitizeUrl)("alt", item_r1.produto.nome);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r1.produto.nome);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Qtd: ", item_r1.quantidade);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(10, 5, (item_r1.produto.valorPromo > 0 ? item_r1.produto.valorPromo : item_r1.produto.valor) * item_r1.quantidade, "BRL"), " ");
} }
function FinalizarPedido_div_72_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50)(1, "span");
    i0.ɵɵtext(2, "Desconto PIX (5%)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "currency");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("- ", i0.ɵɵpipeBind2(5, 1, ctx_r1.carrinhoService.obterTotal() * 0.05, "BRL"));
} }
function FinalizarPedido_div_83_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 51)(1, "div", 52)(2, "div", 53);
    i0.ɵɵelement(3, "i", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 55)(5, "h3", 56);
    i0.ɵɵtext(6, "Pedido Realizado com Sucesso!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 57);
    i0.ɵɵtext(8, " Agradecemos a prefer\u00EAncia pela ");
    i0.ɵɵelementStart(9, "span", 58);
    i0.ɵɵtext(10, "Secret Garden");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, ". ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 59)(13, "a", 60);
    i0.ɵɵelement(14, "i", 61);
    i0.ɵɵtext(15, " Ver Meus Pedidos ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 62);
    i0.ɵɵlistener("click", function FinalizarPedido_div_83_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.fecharModalEVoltar()); });
    i0.ɵɵtext(17, " Voltar ao Cat\u00E1logo ");
    i0.ɵɵelementEnd()()()();
} }
export class FinalizarPedido {
    carrinhoService;
    router;
    pedidoService = inject(PedidoService);
    authService = inject(AuthService);
    dadosPedido = {
        nome: '',
        email: '',
        telefone: '',
        cep: '',
        endereco: '',
        numero: '',
        bairro: '',
        cidade: '',
        pagamento: 'cartao'
    };
    taxaEntrega = 15.00;
    pedidoConcluido = false;
    carregando = false;
    constructor(carrinhoService, router) {
        this.carrinhoService = carrinhoService;
        this.router = router;
    }
    calcularTotalFinal() {
        const subtotal = this.carrinhoService.obterTotal();
        let total = subtotal + this.taxaEntrega;
        if (this.dadosPedido.pagamento === 'pix') {
            total -= subtotal * 0.05;
        }
        return total > 0 ? total : 0;
    }
    finalizarCompra() {
        if (this.carregando)
            return;
        this.authService.usuario$.pipe(take(1)).subscribe(usuario => {
            if (!usuario?.codigo) {
                alert('Faça login antes de finalizar a compra.');
                this.router.navigate(['/login']);
                return;
            }
            const itens = this.carrinhoService.obterItens();
            if (itens.length === 0) {
                alert('Seu carrinho está vazio.');
                return;
            }
            const pedido = {
                valorTotal: this.calcularTotalFinal(),
                entrega: `${this.dadosPedido.endereco}, ${this.dadosPedido.numero} - ${this.dadosPedido.bairro}, ${this.dadosPedido.cidade} - CEP: ${this.dadosPedido.cep}`,
                obs: `Pagamento: ${this.dadosPedido.pagamento}`,
                dataPedido: new Date().toISOString().split('T')[0],
                codigoCliente: usuario.codigo
            };
            this.carregando = true;
            this.pedidoService.cadastrar(pedido).subscribe({
                next: () => {
                    const novoPedido = {
                        id: Math.floor(100000 + Math.random() * 900000),
                        data: new Date().toLocaleDateString('pt-BR'),
                        itens,
                        totalFinal: this.calcularTotalFinal(),
                        pagamento: this.dadosPedido.pagamento,
                        status: 'Em andamento'
                    };
                    const pedidosSalvos = JSON.parse(localStorage.getItem('meus_pedidos') || '[]');
                    pedidosSalvos.unshift(novoPedido);
                    localStorage.setItem('meus_pedidos', JSON.stringify(pedidosSalvos));
                    this.carrinhoService.limparCarrinho();
                    this.pedidoConcluido = true;
                    this.carregando = false;
                },
                error: erro => {
                    console.error('Erro ao registrar pedido:', erro);
                    alert('Não foi possível finalizar o pedido. Tente novamente.');
                    this.carregando = false;
                }
            });
        });
    }
    fecharModalEVoltar() {
        this.router.navigate(['/catalogo']);
    }
    static ɵfac = function FinalizarPedido_Factory(__ngFactoryType__) { /* @ts-ignore */
    return new (__ngFactoryType__ || FinalizarPedido)(i0.ɵɵdirectiveInject(i1.CarrinhoService), i0.ɵɵdirectiveInject(i2.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FinalizarPedido, selectors: [["app-finalizar-pedido"]], decls: 84, vars: 18, consts: [[1, "min-h-screen", "pt-24", "sm:pt-28", "pb-16", "sm:pb-20", "px-4", "sm:px-6", "lg:px-8", "w-full", "bg-stone-50/40"], [1, "max-w-6xl", "mx-auto"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4", "mb-6", "sm:mb-8", "pb-4", "border-b", "border-stone-200"], ["routerLink", "/carrinho", 1, "inline-flex", "items-center", "gap-2", "text-xs", "font-bold", "text-stone-500", "hover:text-pink-600", "uppercase", "tracking-widest", "transition-colors"], [1, "fa-solid", "fa-arrow-left", "text-sm"], [1, "mb-6", "sm:mb-8"], [1, "text-xl", "sm:text-3xl", "lg:text-4xl", "font-serif", "font-bold", "text-stone-900", "flex", "items-center", "gap-3"], [1, "fa-solid", "fa-credit-card", "text-pink-600", "text-lg", "sm:text-2xl", "shrink-0"], [1, "text-stone-500", "text-xs", "sm:text-sm", "mt-1"], [1, "grid", "grid-cols-1", "lg:grid-cols-12", "gap-6", "lg:gap-8", "items-start"], [1, "lg:col-span-7", "space-y-6"], [1, "bg-white", "rounded-2xl", "border", "border-stone-200", "p-4", "sm:p-6", "shadow-sm", "space-y-4"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-stone-400", "pb-2", "border-b", "border-stone-100", "flex", "items-center", "gap-2"], [1, "fa-solid", "fa-user", "text-pink-600"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "block", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-600", "mb-1"], ["type", "text", "placeholder", "Ex: Maria Silva", 1, "w-full", "bg-white", "border", "border-stone-200", "rounded-xl", "px-3", "py-2.5", "text-xs", "text-stone-800", "placeholder-stone-400", "focus:outline-none", "focus:border-pink-500", "transition-all", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "(00) 00000-0000", 1, "w-full", "bg-white", "border", "border-stone-200", "rounded-xl", "px-3", "py-2.5", "text-xs", "text-stone-800", "placeholder-stone-400", "focus:outline-none", "focus:border-pink-500", "transition-all", 3, "ngModelChange", "ngModel"], [1, "fa-solid", "fa-location-dot", "text-pink-600"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-4"], [1, "sm:col-span-2"], ["type", "text", "placeholder", "Ex: Rua das Flores, 123", 1, "w-full", "bg-white", "border", "border-stone-200", "rounded-xl", "px-3", "py-2.5", "text-xs", "text-stone-800", "placeholder-stone-400", "focus:outline-none", "focus:border-pink-500", "transition-all", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ex: S\u00E3o Paulo - SP", 1, "w-full", "bg-white", "border", "border-stone-200", "rounded-xl", "px-3", "py-2.5", "text-xs", "text-stone-800", "placeholder-stone-400", "focus:outline-none", "focus:border-pink-500", "transition-all", 3, "ngModelChange", "ngModel"], [1, "fa-solid", "fa-wallet", "text-pink-600"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-3"], ["type", "button", 1, "border", "rounded-xl", "p-3.5", "text-center", "text-xs", "font-semibold", "transition", "flex", "flex-col", "items-center", "justify-center", "gap-2", "cursor-pointer", 3, "click", "ngClass"], [1, "fa-solid", "fa-credit-card", "text-lg"], [1, "fa-solid", "fa-qrcode", "text-lg"], [1, "fa-solid", "fa-barcode", "text-lg"], [1, "lg:col-span-5", "bg-white", "rounded-2xl", "border", "border-stone-200", "p-4", "sm:p-6", "shadow-sm", "space-y-6"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-stone-400", "pb-2", "border-b", "border-stone-100"], [1, "flex", "flex-col", "max-h-48", "overflow-y-auto", "divide-y", "divide-stone-100", "pr-1"], ["class", "py-3 flex items-center justify-between gap-3", 4, "ngFor", "ngForOf"], [1, "space-y-3", "text-sm", "text-stone-600", "pt-3", "border-t", "border-stone-200"], [1, "flex", "justify-between", "text-xs"], [1, "font-semibold", "text-stone-900"], ["class", "flex justify-between text-xs text-emerald-600 font-medium", 4, "ngIf"], [1, "border-t", "border-stone-200", "pt-4", "flex", "justify-between", "items-center"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-stone-500"], [1, "text-xl", "sm:text-2xl", "font-extrabold", "text-pink-600"], [1, "w-full", "bg-pink-600", "hover:bg-pink-700", "text-white", "font-bold", "py-3.5", "px-6", "rounded-xl", "shadow-md", "shadow-pink-600/10", "transition", "duration-200", "cursor-pointer", "flex", "items-center", "justify-center", "gap-2", "text-sm", 3, "click"], [1, "fa-solid", "fa-circle-check"], ["class", "fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs transition-all", 4, "ngIf"], [1, "py-3", "flex", "items-center", "justify-between", "gap-3"], [1, "flex", "items-center", "gap-3", "min-w-0"], [1, "w-10", "h-10", "object-contain", "bg-stone-50", "rounded-lg", "p-1", "border", "border-stone-100", "shrink-0", 3, "src", "alt"], [1, "min-w-0"], [1, "text-xs", "font-bold", "text-stone-900", "truncate"], [1, "text-[11px]", "text-stone-500"], [1, "text-xs", "font-bold", "text-stone-800", "shrink-0"], [1, "flex", "justify-between", "text-xs", "text-emerald-600", "font-medium"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-stone-900/60", "backdrop-blur-xs", "transition-all"], [1, "bg-white", "rounded-3xl", "border", "border-stone-200", "p-6", "sm:p-8", "max-w-md", "w-full", "shadow-2xl", "text-center", "space-y-5"], [1, "w-16", "h-16", "bg-pink-100", "text-pink-600", "rounded-full", "flex", "items-center", "justify-center", "mx-auto", "text-2xl", "shadow-inner"], [1, "fa-solid", "fa-check"], [1, "space-y-2"], [1, "text-xl", "font-serif", "font-bold", "text-stone-900"], [1, "text-xs", "sm:text-sm", "text-stone-500", "leading-relaxed"], [1, "font-semibold", "text-stone-700"], [1, "space-y-2", "pt-2"], ["routerLink", "/meus-pedidos", 1, "w-full", "bg-pink-600", "hover:bg-pink-700", "text-white", "font-bold", "py-3", "px-6", "rounded-xl", "shadow-md", "transition", "duration-200", "flex", "items-center", "justify-center", "gap-2", "text-xs", "sm:text-sm", "uppercase", "tracking-wider"], [1, "fa-solid", "fa-bag-shopping"], [1, "w-full", "bg-stone-100", "hover:bg-stone-200", "text-stone-700", "font-bold", "py-3", "px-6", "rounded-xl", "transition", "duration-200", "cursor-pointer", "text-xs", "sm:text-sm", "uppercase", "tracking-wider", 3, "click"]], template: function FinalizarPedido_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
            i0.ɵɵelement(4, "i", 4);
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6, "Voltar ao Carrinho");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(7, "div", 5)(8, "h1", 6);
            i0.ɵɵelement(9, "i", 7);
            i0.ɵɵtext(10, " Finaliza\u00E7\u00E3o de Compra ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "p", 8);
            i0.ɵɵtext(12, "Confirme seus dados para concluir a apresenta\u00E7\u00E3o do pedido.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "h2", 12);
            i0.ɵɵelement(17, "i", 13);
            i0.ɵɵtext(18, " 1. Dados B\u00E1sicos ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 14)(20, "div")(21, "label", 15);
            i0.ɵɵtext(22, "Nome");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "input", 16);
            i0.ɵɵtwoWayListener("ngModelChange", function FinalizarPedido_Template_input_ngModelChange_23_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.dadosPedido.nome, $event) || (ctx.dadosPedido.nome = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "div")(25, "label", 15);
            i0.ɵɵtext(26, "Telefone");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "input", 17);
            i0.ɵɵtwoWayListener("ngModelChange", function FinalizarPedido_Template_input_ngModelChange_27_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.dadosPedido.telefone, $event) || (ctx.dadosPedido.telefone = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(28, "div", 11)(29, "h2", 12);
            i0.ɵɵelement(30, "i", 18);
            i0.ɵɵtext(31, " 2. Endere\u00E7o ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "div", 19)(33, "div", 20)(34, "label", 15);
            i0.ɵɵtext(35, "Endere\u00E7o");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "input", 21);
            i0.ɵɵtwoWayListener("ngModelChange", function FinalizarPedido_Template_input_ngModelChange_36_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.dadosPedido.endereco, $event) || (ctx.dadosPedido.endereco = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "div")(38, "label", 15);
            i0.ɵɵtext(39, "Cidade");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "input", 22);
            i0.ɵɵtwoWayListener("ngModelChange", function FinalizarPedido_Template_input_ngModelChange_40_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.dadosPedido.cidade, $event) || (ctx.dadosPedido.cidade = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(41, "div", 11)(42, "h2", 12);
            i0.ɵɵelement(43, "i", 23);
            i0.ɵɵtext(44, " 3. Pagamento ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "div", 24)(46, "button", 25);
            i0.ɵɵlistener("click", function FinalizarPedido_Template_button_click_46_listener() { return ctx.dadosPedido.pagamento = "cartao"; });
            i0.ɵɵelement(47, "i", 26);
            i0.ɵɵtext(48, " Cart\u00E3o ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "button", 25);
            i0.ɵɵlistener("click", function FinalizarPedido_Template_button_click_49_listener() { return ctx.dadosPedido.pagamento = "pix"; });
            i0.ɵɵelement(50, "i", 27);
            i0.ɵɵtext(51, " PIX (-5%) ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "button", 25);
            i0.ɵɵlistener("click", function FinalizarPedido_Template_button_click_52_listener() { return ctx.dadosPedido.pagamento = "boleto"; });
            i0.ɵɵelement(53, "i", 28);
            i0.ɵɵtext(54, " Boleto ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(55, "div", 29)(56, "h2", 30);
            i0.ɵɵtext(57, " Resumo do Pedido");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "div", 31);
            i0.ɵɵtemplate(59, FinalizarPedido_div_59_Template, 11, 8, "div", 32);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "div", 33)(61, "div", 34)(62, "span");
            i0.ɵɵtext(63, "Subtotal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(64, "span", 35);
            i0.ɵɵtext(65);
            i0.ɵɵpipe(66, "currency");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(67, "div", 34)(68, "span");
            i0.ɵɵtext(69, "Entrega");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "span", 35);
            i0.ɵɵtext(71, "R$ 15,00");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(72, FinalizarPedido_div_72_Template, 6, 4, "div", 36);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "div", 37)(74, "span", 38);
            i0.ɵɵtext(75, "Total Final:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "span", 39);
            i0.ɵɵtext(77);
            i0.ɵɵpipe(78, "currency");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(79, "button", 40);
            i0.ɵɵlistener("click", function FinalizarPedido_Template_button_click_79_listener() { return ctx.finalizarCompra(); });
            i0.ɵɵelement(80, "i", 41);
            i0.ɵɵelementStart(81, "span");
            i0.ɵɵtext(82, "Confirmar e Finalizar Pedido");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(83, FinalizarPedido_div_83_Template, 18, 0, "div", 42);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(23);
            i0.ɵɵtwoWayProperty("ngModel", ctx.dadosPedido.nome);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.dadosPedido.telefone);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(9);
            i0.ɵɵtwoWayProperty("ngModel", ctx.dadosPedido.endereco);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.dadosPedido.cidade);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngClass", ctx.dadosPedido.pagamento === "cartao" ? "border-pink-600 bg-pink-50/50 text-pink-700" : "border-stone-200 bg-white text-stone-700 hover:border-stone-300");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", ctx.dadosPedido.pagamento === "pix" ? "border-pink-600 bg-pink-50/50 text-pink-700" : "border-stone-200 bg-white text-stone-700 hover:border-stone-300");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", ctx.dadosPedido.pagamento === "boleto" ? "border-pink-600 bg-pink-50/50 text-pink-700" : "border-stone-200 bg-white text-stone-700 hover:border-stone-300");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngForOf", ctx.carrinhoService.obterItens());
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(66, 12, ctx.carrinhoService.obterTotal(), "BRL"));
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.dadosPedido.pagamento === "pix");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(78, 15, ctx.calcularTotalFinal(), "BRL"), " ");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.pedidoConcluido);
        } }, dependencies: [CommonModule, i3.NgClass, i3.NgForOf, i3.NgIf, FormsModule, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, RouterModule, i2.RouterLink, i3.CurrencyPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FinalizarPedido, [{
        type: Component,
        args: [{ selector: 'app-finalizar-pedido', standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: "<main class=\"min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 w-full bg-stone-50/40\">\r\n    <div class=\"max-w-6xl mx-auto\">\r\n\r\n        <div\r\n            class=\"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8 pb-4 border-b border-stone-200\">\r\n            <a routerLink=\"/carrinho\"\r\n                class=\"inline-flex items-center gap-2 text-xs font-bold text-stone-500 hover:text-pink-600 uppercase tracking-widest transition-colors\">\r\n                <i class=\"fa-solid fa-arrow-left text-sm\"></i>\r\n                <span>Voltar ao Carrinho</span>\r\n            </a>\r\n        </div>\r\n\r\n        <div class=\"mb-6 sm:mb-8\">\r\n            <h1 class=\"text-xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 flex items-center gap-3\">\r\n                <i class=\"fa-solid fa-credit-card text-pink-600 text-lg sm:text-2xl shrink-0\"></i> Finaliza\u00E7\u00E3o de Compra\r\n            </h1>\r\n            <p class=\"text-stone-500 text-xs sm:text-sm mt-1\">Confirme seus dados para concluir a apresenta\u00E7\u00E3o do\r\n                pedido.</p>\r\n        </div>\r\n\r\n        <div class=\"grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start\">\r\n\r\n            <div class=\"lg:col-span-7 space-y-6\">\r\n\r\n                <div class=\"bg-white rounded-2xl border border-stone-200 p-4 sm:p-6 shadow-sm space-y-4\">\r\n                    <h2\r\n                        class=\"text-xs font-bold uppercase tracking-wider text-stone-400 pb-2 border-b border-stone-100 flex items-center gap-2\">\r\n                        <i class=\"fa-solid fa-user text-pink-600\"></i> 1. Dados B\u00E1sicos\r\n                    </h2>\r\n\r\n                    <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4\">\r\n                        <div>\r\n                            <label\r\n                                class=\"block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1\">Nome</label>\r\n                            <input type=\"text\" [(ngModel)]=\"dadosPedido.nome\" placeholder=\"Ex: Maria Silva\"\r\n                                class=\"w-full bg-white border border-stone-200 rounded-xl px-3 py-2.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-pink-500 transition-all\">\r\n                        </div>\r\n                        <div>\r\n                            <label\r\n                                class=\"block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1\">Telefone</label>\r\n                            <input type=\"text\" [(ngModel)]=\"dadosPedido.telefone\" placeholder=\"(00) 00000-0000\"\r\n                                class=\"w-full bg-white border border-stone-200 rounded-xl px-3 py-2.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-pink-500 transition-all\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"bg-white rounded-2xl border border-stone-200 p-4 sm:p-6 shadow-sm space-y-4\">\r\n                    <h2\r\n                        class=\"text-xs font-bold uppercase tracking-wider text-stone-400 pb-2 border-b border-stone-100 flex items-center gap-2\">\r\n                        <i class=\"fa-solid fa-location-dot text-pink-600\"></i> 2. Endere\u00E7o\r\n                    </h2>\r\n\r\n                    <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-4\">\r\n                        <div class=\"sm:col-span-2\">\r\n                            <label\r\n                                class=\"block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1\">Endere\u00E7o</label>\r\n                            <input type=\"text\" [(ngModel)]=\"dadosPedido.endereco\" placeholder=\"Ex: Rua das Flores, 123\"\r\n                                class=\"w-full bg-white border border-stone-200 rounded-xl px-3 py-2.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-pink-500 transition-all\">\r\n                        </div>\r\n                        <div>\r\n                            <label\r\n                                class=\"block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1\">Cidade</label>\r\n                            <input type=\"text\" [(ngModel)]=\"dadosPedido.cidade\" placeholder=\"Ex: S\u00E3o Paulo - SP\"\r\n                                class=\"w-full bg-white border border-stone-200 rounded-xl px-3 py-2.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-pink-500 transition-all\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"bg-white rounded-2xl border border-stone-200 p-4 sm:p-6 shadow-sm space-y-4\">\r\n                    <h2\r\n                        class=\"text-xs font-bold uppercase tracking-wider text-stone-400 pb-2 border-b border-stone-100 flex items-center gap-2\">\r\n                        <i class=\"fa-solid fa-wallet text-pink-600\"></i> 3. Pagamento\r\n                    </h2>\r\n\r\n                    <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-3\">\r\n                        <button type=\"button\" (click)=\"dadosPedido.pagamento = 'cartao'\"\r\n                            [ngClass]=\"dadosPedido.pagamento === 'cartao' ? 'border-pink-600 bg-pink-50/50 text-pink-700' : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'\"\r\n                            class=\"border rounded-xl p-3.5 text-center text-xs font-semibold transition flex flex-col items-center justify-center gap-2 cursor-pointer\">\r\n                            <i class=\"fa-solid fa-credit-card text-lg\"></i>\r\n                            Cart\u00E3o\r\n                        </button>\r\n\r\n                        <button type=\"button\" (click)=\"dadosPedido.pagamento = 'pix'\"\r\n                            [ngClass]=\"dadosPedido.pagamento === 'pix' ? 'border-pink-600 bg-pink-50/50 text-pink-700' : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'\"\r\n                            class=\"border rounded-xl p-3.5 text-center text-xs font-semibold transition flex flex-col items-center justify-center gap-2 cursor-pointer\">\r\n                            <i class=\"fa-solid fa-qrcode text-lg\"></i>\r\n                            PIX (-5%)\r\n                        </button>\r\n\r\n                        <button type=\"button\" (click)=\"dadosPedido.pagamento = 'boleto'\"\r\n                            [ngClass]=\"dadosPedido.pagamento === 'boleto' ? 'border-pink-600 bg-pink-50/50 text-pink-700' : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'\"\r\n                            class=\"border rounded-xl p-3.5 text-center text-xs font-semibold transition flex flex-col items-center justify-center gap-2 cursor-pointer\">\r\n                            <i class=\"fa-solid fa-barcode text-lg\"></i>\r\n                            Boleto\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"lg:col-span-5 bg-white rounded-2xl border border-stone-200 p-4 sm:p-6 shadow-sm space-y-6\">\r\n                <h2 class=\"text-xs font-bold uppercase tracking-wider text-stone-400 pb-2 border-b border-stone-100\">\r\n                    Resumo do Pedido</h2>\r\n\r\n                <div class=\"flex flex-col max-h-48 overflow-y-auto divide-y divide-stone-100 pr-1\">\r\n                    <div *ngFor=\"let item of carrinhoService.obterItens()\"\r\n                        class=\"py-3 flex items-center justify-between gap-3\">\r\n                        <div class=\"flex items-center gap-3 min-w-0\">\r\n                            <img [src]=\"item.produto.codigo + '.png'\" [alt]=\"item.produto.nome\"\r\n                                class=\"w-10 h-10 object-contain bg-stone-50 rounded-lg p-1 border border-stone-100 shrink-0\">\r\n                            <div class=\"min-w-0\">\r\n                                <p class=\"text-xs font-bold text-stone-900 truncate\">{{ item.produto.nome }}</p>\r\n                                <p class=\"text-[11px] text-stone-500\">Qtd: {{ item.quantidade }}</p>\r\n                            </div>\r\n                        </div>\r\n                        <span class=\"text-xs font-bold text-stone-800 shrink-0\">\r\n                            {{ (item.produto.valorPromo > 0 ? item.produto.valorPromo : item.produto.valor) *\r\n                            item.quantidade | currency:'BRL' }}\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"space-y-3 text-sm text-stone-600 pt-3 border-t border-stone-200\">\r\n                    <div class=\"flex justify-between text-xs\">\r\n                        <span>Subtotal</span>\r\n                        <span class=\"font-semibold text-stone-900\">{{ carrinhoService.obterTotal() | currency:'BRL'\r\n                            }}</span>\r\n                    </div>\r\n                    <div class=\"flex justify-between text-xs\">\r\n                        <span>Entrega</span>\r\n                        <span class=\"font-semibold text-stone-900\">R$ 15,00</span>\r\n                    </div>\r\n                    <div *ngIf=\"dadosPedido.pagamento === 'pix'\"\r\n                        class=\"flex justify-between text-xs text-emerald-600 font-medium\">\r\n                        <span>Desconto PIX (5%)</span>\r\n                        <span>- {{ carrinhoService.obterTotal() * 0.05 | currency:'BRL' }}</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"border-t border-stone-200 pt-4 flex justify-between items-center\">\r\n                    <span class=\"text-xs font-bold uppercase tracking-wider text-stone-500\">Total Final:</span>\r\n                    <span class=\"text-xl sm:text-2xl font-extrabold text-pink-600\">\r\n                        {{ calcularTotalFinal() | currency:'BRL' }}\r\n                    </span>\r\n                </div>\r\n\r\n                <button (click)=\"finalizarCompra()\"\r\n                    class=\"w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md shadow-pink-600/10 transition duration-200 cursor-pointer flex items-center justify-center gap-2 text-sm\">\r\n                    <i class=\"fa-solid fa-circle-check\"></i>\r\n                    <span>Confirmar e Finalizar Pedido</span>\r\n                </button>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"pedidoConcluido\"\r\n        class=\"fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs transition-all\">\r\n        <div\r\n            class=\"bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 max-w-md w-full shadow-2xl text-center space-y-5\">\r\n            <div\r\n                class=\"w-16 h-16 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto text-2xl shadow-inner\">\r\n                <i class=\"fa-solid fa-check\"></i>\r\n            </div>\r\n            <div class=\"space-y-2\">\r\n                <h3 class=\"text-xl font-serif font-bold text-stone-900\">Pedido Realizado com Sucesso!</h3>\r\n                <p class=\"text-xs sm:text-sm text-stone-500 leading-relaxed\">\r\n                    Agradecemos a prefer\u00EAncia pela <span class=\"font-semibold text-stone-700\">Secret Garden</span>.\r\n                </p>\r\n            </div>\r\n            <div class=\"space-y-2 pt-2\">\r\n                <a routerLink=\"/meus-pedidos\"\r\n                    class=\"w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-wider\">\r\n                    <i class=\"fa-solid fa-bag-shopping\"></i> Ver Meus Pedidos\r\n                </a>\r\n\r\n                <button (click)=\"fecharModalEVoltar()\"\r\n                    class=\"w-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold py-3 px-6 rounded-xl transition duration-200 cursor-pointer text-xs sm:text-sm uppercase tracking-wider\">\r\n                    Voltar ao Cat\u00E1logo\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</main>" }]
    }], () => [{ type: i1.CarrinhoService }, { type: i2.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FinalizarPedido, { className: "FinalizarPedido", filePath: "src/app/pages/finalizar-pedido/finalizar-pedido.ts", lineNumber: 18 }); })();
