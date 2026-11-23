import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./services/auth";
import * as i2 from "@angular/router";
import * as i3 from "./services/carrinho";
import * as i4 from "@angular/common";
function App_header_0_ng_container_8_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.carrinhoService.obterQuantidadeTotal(), " ");
} }
function App_header_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 21);
    i0.ɵɵelement(2, "i", 22);
    i0.ɵɵtemplate(3, App_header_0_ng_container_8_span_3_Template, 2, 1, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.carrinhoService.obterQuantidadeTotal() > 0);
} }
function App_header_0_ng_container_27_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.carrinhoService.obterQuantidadeTotal(), " ");
} }
function App_header_0_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 25)(2, "a", 21);
    i0.ɵɵelement(3, "i", 22);
    i0.ɵɵtemplate(4, App_header_0_ng_container_27_span_4_Template, 2, 1, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 26)(6, "div", 27)(7, "div", 28);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 29);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "i", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 31)(13, "div", 32)(14, "a", 33);
    i0.ɵɵelement(15, "i", 34);
    i0.ɵɵtext(16, " Meus Pedidos ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 35);
    i0.ɵɵlistener("click", function App_header_0_ng_container_27_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.logout()); });
    i0.ɵɵelement(18, "i", 36);
    i0.ɵɵtext(19, " Sair da conta ");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const usuario_r4 = ctx.ngIf;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.carrinhoService.obterQuantidadeTotal() > 0);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", usuario_r4.nome.charAt(0), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(usuario_r4.nome);
} }
function App_header_0_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "a", 38);
    i0.ɵɵtext(2, "Login");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 39);
    i0.ɵɵtext(4, "Cadastro");
    i0.ɵɵelementEnd()();
} }
function App_header_0_div_31_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "nav")(2, "ul", 41)(3, "li")(4, "a", 42);
    i0.ɵɵlistener("click", function App_header_0_div_31_ng_container_1_Template_a_click_4_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.closeMenu()); });
    i0.ɵɵtext(5, "Home");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "li")(7, "a", 43);
    i0.ɵɵlistener("click", function App_header_0_div_31_ng_container_1_Template_a_click_7_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.closeMenu()); });
    i0.ɵɵtext(8, "Cat\u00E1logo");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "li")(10, "a", 44);
    i0.ɵɵlistener("click", function App_header_0_div_31_ng_container_1_Template_a_click_10_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.closeMenu()); });
    i0.ɵɵtext(11, "Meus Pedidos");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "li")(13, "a", 16);
    i0.ɵɵtext(14, "Sobre");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "li")(16, "a", 17);
    i0.ɵɵtext(17, "Contato");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "li")(19, "a", 45);
    i0.ɵɵlistener("click", function App_header_0_div_31_ng_container_1_Template_a_click_19_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.closeMenu()); });
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(21, "div", 46)(22, "div", 47)(23, "div", 48);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "span", 49);
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "button", 50);
    i0.ɵɵlistener("click", function App_header_0_div_31_ng_container_1_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.logout()); });
    i0.ɵɵelement(28, "i", 36);
    i0.ɵɵtext(29, " Sair da conta ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const usuario_r6 = ctx.ngIf;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(20);
    i0.ɵɵtextInterpolate1(" Meu Carrinho (", ctx_r1.carrinhoService.obterQuantidadeTotal(), ") ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", usuario_r6.nome.charAt(0), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(usuario_r6.nome);
} }
function App_header_0_div_31_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nav")(1, "ul", 41)(2, "li")(3, "a", 42);
    i0.ɵɵlistener("click", function App_header_0_div_31_ng_template_3_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.closeMenu()); });
    i0.ɵɵtext(4, "Home");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "li")(6, "a", 16);
    i0.ɵɵtext(7, "Sobre");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "li")(9, "a", 17);
    i0.ɵɵtext(10, "Contato");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "li")(12, "a", 43);
    i0.ɵɵlistener("click", function App_header_0_div_31_ng_template_3_Template_a_click_12_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.closeMenu()); });
    i0.ɵɵtext(13, "Cat\u00E1logo");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(14, "div", 51)(15, "a", 52);
    i0.ɵɵlistener("click", function App_header_0_div_31_ng_template_3_Template_a_click_15_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.closeMenu()); });
    i0.ɵɵtext(16, "Login");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "a", 53);
    i0.ɵɵlistener("click", function App_header_0_div_31_ng_template_3_Template_a_click_17_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.closeMenu()); });
    i0.ɵɵtext(18, "Cadastro");
    i0.ɵɵelementEnd()();
} }
function App_header_0_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵtemplate(1, App_header_0_div_31_ng_container_1_Template, 30, 3, "ng-container", 19);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵtemplate(3, App_header_0_div_31_ng_template_3_Template, 19, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menuMobileDeslogado_r8 = i0.ɵɵreference(4);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 2, ctx_r1.usuario$))("ngIfElse", menuMobileDeslogado_r8);
} }
function App_header_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "header", 4)(1, "div", 5)(2, "div", 6)(3, "h1", 7);
    i0.ɵɵtext(4, " Secret ");
    i0.ɵɵelementStart(5, "a", 8);
    i0.ɵɵtext(6, " Garden ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 9);
    i0.ɵɵtemplate(8, App_header_0_ng_container_8_Template, 4, 1, "ng-container", 10);
    i0.ɵɵpipe(9, "async");
    i0.ɵɵelementStart(10, "button", 11);
    i0.ɵɵlistener("click", function App_header_0_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleMenu()); });
    i0.ɵɵelement(11, "i", 12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 13)(13, "nav")(14, "ul", 14)(15, "li")(16, "a", 15);
    i0.ɵɵtext(17, "Home");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "li")(19, "a", 16);
    i0.ɵɵtext(20, "Sobre");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "li")(22, "a", 17);
    i0.ɵɵtext(23, "Contato");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "li")(25, "a", 18);
    i0.ɵɵtext(26, "Cat\u00E1logo");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(27, App_header_0_ng_container_27_Template, 20, 3, "ng-container", 19);
    i0.ɵɵpipe(28, "async");
    i0.ɵɵtemplate(29, App_header_0_ng_template_29_Template, 5, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(31, App_header_0_div_31_Template, 5, 4, "div", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const botoesDeslogadoDesktop_r9 = i0.ɵɵreference(30);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1.isScrolled ? "bg-white shadow-2xl" : "bg-transparent");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(9, 6, ctx_r1.usuario$));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", ctx_r1.isMenuOpen ? "fa-xmark text-2xl" : "fa-bars text-xl");
    i0.ɵɵadvance(16);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(28, 8, ctx_r1.usuario$))("ngIfElse", botoesDeslogadoDesktop_r9);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.isMenuOpen);
} }
function App_footer_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "footer", 54)(1, "div", 55)(2, "div", 56)(3, "h3", 57);
    i0.ɵɵtext(4, " Secret ");
    i0.ɵɵelementStart(5, "span", 58);
    i0.ɵɵtext(6, "Garden");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "p", 59);
    i0.ɵɵtext(8, " Transformando sentimentos puros em arte floral delicada. Flores frescas colhidas e entregues com amor todos os dias. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 60)(10, "a", 61);
    i0.ɵɵelement(11, "i", 62);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "a", 63);
    i0.ɵɵelement(13, "i", 64);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "a", 65);
    i0.ɵɵelement(15, "i", 66);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div", 56)(17, "h4", 67);
    i0.ɵɵtext(18, "Navega\u00E7\u00E3o");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "ul", 68)(20, "li")(21, "a", 69);
    i0.ɵɵtext(22, "In\u00EDcio");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "li")(24, "a", 70);
    i0.ɵɵtext(25, "Nosso Cat\u00E1logo");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "li")(27, "a", 71);
    i0.ɵɵtext(28, "Sobre a Floricultura");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "li")(30, "a", 72);
    i0.ɵɵtext(31, "Fale Conosco");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(32, "div", 56)(33, "h4", 67);
    i0.ɵɵtext(34, "Contato");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "ul", 73)(36, "li", 47);
    i0.ɵɵelement(37, "i", 74);
    i0.ɵɵelementStart(38, "span");
    i0.ɵɵtext(39, "(11) 99999-9999");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "li", 47);
    i0.ɵɵelement(41, "i", 75);
    i0.ɵɵelementStart(42, "span");
    i0.ɵɵtext(43, "oi@secretgarden.com");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "li", 76);
    i0.ɵɵelement(45, "i", 77);
    i0.ɵɵelementStart(46, "span", 78);
    i0.ɵɵtext(47, "Av. das Flores, 123 - S\u00E3o Paulo, SP");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(48, "div", 56)(49, "h4", 67);
    i0.ɵɵtext(50, "Funcionamento");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "p", 79);
    i0.ɵɵtext(52, " Segunda a S\u00E1bado: 08h \u00E0s 19h");
    i0.ɵɵelement(53, "br");
    i0.ɵɵtext(54, " Domingos e Feriados: 09h \u00E0s 14h ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "div", 80)(56, "h5", 81);
    i0.ɵɵtext(57, "Formas de Pagamento ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "div", 82)(59, "span", 83);
    i0.ɵɵtext(60, "PIX");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(61, "span", 84);
    i0.ɵɵtext(62, "CART\u00C3O");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "span", 84);
    i0.ɵɵtext(64, "BOLETO");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(65, "div", 85)(66, "p");
    i0.ɵɵtext(67, "\u00A9 2026 Secret Garden Floricultura. Todos os direitos reservados.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "p", 86);
    i0.ɵɵtext(69, " Desenvolvido para a Fatec ");
    i0.ɵɵelementEnd()()();
} }
export class App {
    authService;
    router;
    carrinhoService;
    isScrolled = false;
    isMenuOpen = false;
    usuario$;
    exibirHeaderFooter = true;
    constructor(authService, router, carrinhoService) {
        this.authService = authService;
        this.router = router;
        this.carrinhoService = carrinhoService;
        this.usuario$ = this.authService.usuario$;
    }
    get qtdCarrinho() {
        return this.carrinhoService.obterQuantidadeTotal();
    }
    ngOnInit() {
        this.atualizarHeaderFooter(this.router.url);
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
            this.atualizarHeaderFooter(event.urlAfterRedirects);
        });
    }
    atualizarHeaderFooter(url) {
        const rota = url.split('?')[0].split('#')[0];
        const rotasSemHeader = [
            '/login',
            '/cadastro',
        ];
        this.exibirHeaderFooter = !rotasSemHeader.includes(rota);
    }
    onWindowScroll() {
        this.isScrolled = window.scrollY > 20;
    }
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
    closeMenu() {
        this.isMenuOpen = false;
    }
    logout() {
        this.authService.logout();
        this.closeMenu();
        this.router.navigate(['/']);
    }
    static ɵfac = function App_Factory(__ngFactoryType__) { /* @ts-ignore */
    return new (__ngFactoryType__ || App)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.CarrinhoService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: App, selectors: [["app-root"]], hostBindings: function App_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function App_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, i0.ɵɵresolveWindow);
        } }, decls: 3, vars: 2, consts: [["botoesDeslogadoDesktop", ""], ["menuMobileDeslogado", ""], ["id", "main-header", "class", "top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 fixed px-4 sm:px-8 py-4", 3, "ngClass", 4, "ngIf"], ["class", "w-full bg-[#FFF0F3] border-t border-pink-200 mt-20 pt-16 pb-8 px-6 md:px-16 font-sans", 4, "ngIf"], ["id", "main-header", 1, "top-0", "left-0", "w-full", "z-50", "backdrop-blur-md", "transition-all", "duration-300", "fixed", "px-4", "sm:px-8", "py-4", 3, "ngClass"], [1, "max-w-6xl", "mx-auto", "flex", "items-center", "justify-between", "lg:flex-col", "lg:gap-4"], [1, "text-left", "lg:text-center"], [1, "text-gray-900", "text-2xl", "sm:text-3xl", "font-light", "tracking-wide"], ["routerLink", "/", 1, "font-cursive", "font-bold", "text-pink-600", "text-3xl", "sm:text-4xl", "hover:text-pink-800", "transition-colors", "duration-300", "relative", "top-1", "cursor-pointer"], [1, "flex", "items-center", "gap-3", "lg:hidden"], [4, "ngIf"], ["aria-label", "Abrir menu", 1, "text-pink-600", "focus:outline-none", "p-2", "rounded-md", "hover:bg-pink-100/50", "transition", 3, "click"], [1, "fa-solid", 3, "ngClass"], [1, "hidden", "lg:flex", "w-full", "items-center", "justify-center", "relative", "mt-2"], [1, "flex", "gap-8", "text-sm", "font-medium", "tracking-wide", "uppercase", "text-gray-700"], ["routerLink", "/", "fragment", "home", 1, "hover:text-pink-600", "transition-colors", "duration-300"], ["routerLink", "/", "fragment", "sobre", 1, "hover:text-pink-600", "transition-colors", "duration-300"], ["routerLink", "/", "fragment", "contato", 1, "hover:text-pink-600", "transition-colors", "duration-300"], ["routerLink", "/catalogo", 1, "hover:text-pink-600", "transition-colors", "duration-300"], [4, "ngIf", "ngIfElse"], ["class", "lg:hidden bg-white/95 backdrop-blur-md rounded-2xl mt-4 p-6 shadow-xl border border-pink-100 flex flex-col gap-6 animate-fadeIn", 4, "ngIf"], ["routerLink", "/carrinho", "aria-label", "Ver Carrinho", 1, "relative", "text-gray-700", "hover:text-pink-600", "transition-colors", "p-1"], [1, "fa-solid", "fa-cart-shopping", "text-xl"], ["class", "absolute -top-1.5 -right-2 bg-pink-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow", 4, "ngIf"], [1, "absolute", "-top-1.5", "-right-2", "bg-pink-600", "text-white", "text-[10px]", "font-bold", "w-4", "h-4", "rounded-full", "flex", "items-center", "justify-center", "shadow"], [1, "flex", "gap-5", "absolute", "right-0", "items-center"], [1, "relative", "group", "border-l", "border-pink-200", "pl-4"], [1, "flex", "items-center", "gap-2", "cursor-pointer", "py-1"], [1, "w-8", "h-8", "rounded-full", "bg-pink-100", "text-pink-600", "border", "border-pink-300", "font-bold", "flex", "items-center", "justify-center", "text-xs", "shadow-sm"], [1, "text-xs", "font-bold", "text-gray-800"], [1, "fa-solid", "fa-chevron-down", "text-[10px]", "text-gray-500", "transition-transform", "group-hover:rotate-180"], [1, "absolute", "right-0", "top-full", "pt-2", "w-44", "opacity-0", "invisible", "group-hover:opacity-100", "group-hover:visible", "transition-all", "duration-200", "z-50"], [1, "bg-white", "rounded-xl", "border", "border-stone-200", "shadow-xl", "p-1.5", "space-y-1"], ["routerLink", "/meus-pedidos", 1, "flex", "items-center", "gap-2", "px-3", "py-2", "text-xs", "font-semibold", "text-stone-700", "hover:text-pink-600", "hover:bg-pink-50", "rounded-lg", "transition"], [1, "fa-solid", "fa-box", "text-pink-600"], [1, "w-full", "text-left", "flex", "items-center", "gap-2", "px-3", "py-2", "text-xs", "font-semibold", "text-rose-600", "hover:bg-rose-50", "rounded-lg", "transition", "cursor-pointer", 3, "click"], [1, "fa-solid", "fa-right-from-bracket"], [1, "flex", "gap-5", "absolute", "right-0"], ["routerLink", "/login", 1, "bg-pink-500", "text-white", "rounded-md", "py-1", "px-7", "hover:text-pink-500", "hover:bg-white", "transition", "transform", "duration-300", "hover:scale-105", "hover:shadow-2xl", "shadow-pink-500", "hover:border", "hover:border-pink-400"], ["routerLink", "/cadastro", 1, "bg-white", "text-pink-500", "rounded-md", "py-1", "px-7", "hover:text-pink-500", "hover:bg-pink-50", "transition", "transform", "duration-300", "hover:scale-105", "hover:shadow-2xl", "hover:shadow-pink-500", "border", "border-pink-400"], [1, "lg:hidden", "bg-white/95", "backdrop-blur-md", "rounded-2xl", "mt-4", "p-6", "shadow-xl", "border", "border-pink-100", "flex", "flex-col", "gap-6", "animate-fadeIn"], [1, "flex", "flex-col", "gap-4", "text-center", "text-sm", "font-medium", "tracking-wide", "uppercase", "text-gray-700"], ["routerLink", "/", "fragment", "home", 1, "hover:text-pink-600", "transition-colors", "block", "py-1", 3, "click"], ["routerLink", "/catalogo", 1, "hover:text-pink-600", "transition-colors", "block", "py-1", 3, "click"], ["routerLink", "/meus-pedidos", 1, "hover:text-pink-600", "transition-colors", "block", "py-1", 3, "click"], ["routerLink", "/carrinho", 1, "hover:text-pink-600", "transition-colors", "block", "py-1", 3, "click"], [1, "flex", "flex-col", "items-center", "gap-3", "pt-4", "border-t", "border-pink-100", "text-center"], [1, "flex", "items-center", "gap-2"], [1, "w-8", "h-8", "rounded-full", "bg-pink-100", "text-pink-600", "font-bold", "flex", "items-center", "justify-center", "text-xs"], [1, "text-sm", "font-bold", "text-gray-800"], [1, "text-xs", "font-semibold", "text-rose-600", "hover:underline", "flex", "items-center", "gap-1", "mt-1", "cursor-pointer", 3, "click"], [1, "flex", "flex-col", "gap-3", "pt-2", "border-t", "border-pink-100"], ["routerLink", "/login", 1, "bg-pink-500", "text-white", "text-center", "rounded-md", "py-2", "px-7", "hover:bg-pink-600", "transition", "duration-300", "w-full", "font-medium", 3, "click"], ["routerLink", "/cadastro", 1, "bg-white", "text-pink-500", "text-center", "rounded-md", "py-2", "px-7", "border", "border-pink-400", "hover:bg-pink-50", "transition", "duration-300", "w-full", "font-medium", 3, "click"], [1, "w-full", "bg-[#FFF0F3]", "border-t", "border-pink-200", "mt-20", "pt-16", "pb-8", "px-6", "md:px-16", "font-sans"], [1, "max-w-6xl", "mx-auto", "grid", "grid-cols-1", "md:grid-cols-4", "gap-10", "border-b", "border-pink-200", "pb-12"], [1, "flex", "flex-col", "space-y-4"], [1, "text-gray-900", "text-2xl", "font-light", "tracking-wide"], [1, "font-cursive", "font-bold", "text-pink-600", "text-3xl"], [1, "text-gray-600", "text-sm", "leading-relaxed", "font-serif"], [1, "flex", "gap-4", "pt-2"], ["href", "#", "aria-label", "Instagram", 1, "w-9", "h-9", "rounded-full", "bg-white", "border", "border-pink-200", "flex", "items-center", "justify-center", "text-pink-600", "hover:bg-pink-600", "hover:text-white", "transition-all", "duration-300"], [1, "fa-brands", "fa-instagram", "text-base"], ["href", "#", "aria-label", "Facebook", 1, "w-9", "h-9", "rounded-full", "bg-white", "border", "border-pink-200", "flex", "items-center", "justify-center", "text-pink-600", "hover:bg-pink-600", "hover:text-white", "transition-all", "duration-300"], [1, "fa-brands", "fa-facebook", "text-base"], ["href", "#", "aria-label", "WhatsApp", 1, "w-9", "h-9", "rounded-full", "bg-white", "border", "border-pink-200", "flex", "items-center", "justify-center", "text-pink-600", "hover:bg-pink-600", "hover:text-white", "transition-all", "duration-300"], [1, "fa-brands", "fa-whatsapp", "text-base"], [1, "text-pink-950", "font-bold", "text-sm", "uppercase", "tracking-wider"], [1, "flex", "flex-col", "space-y-2", "text-sm", "text-gray-600"], ["routerLink", "/", 1, "hover:text-pink-600", "transition-colors", "duration-200"], ["routerLink", "/catalogo", 1, "hover:text-pink-600", "transition-colors", "duration-200"], ["href", "#sobre", 1, "hover:text-pink-600", "transition-colors", "duration-200"], ["href", "#contato", 1, "hover:text-pink-600", "transition-colors", "duration-200"], [1, "flex", "flex-col", "space-y-3", "text-sm", "text-gray-600"], [1, "fa-solid", "fa-phone", "text-pink-600", "text-sm", "shrink-0"], [1, "fa-solid", "fa-envelope", "text-pink-600", "text-sm", "shrink-0"], [1, "flex", "items-start", "gap-2"], [1, "fa-solid", "fa-location-dot", "text-pink-600", "text-sm", "shrink-0", "mt-0.5"], [1, "font-serif"], [1, "text-sm", "text-gray-600", "font-serif"], [1, "pt-2"], [1, "text-xs", "font-semibold", "text-pink-950/60", "uppercase", "tracking-wider", "mb-2"], [1, "flex", "gap-2", "text-gray-500", "text-xs", "font-bold", "tracking-wider"], [1, "bg-white", "border", "border-pink-200", "px-2", "py-1", "rounded", "text-[10px]", "text-pink-700"], [1, "bg-white", "border", "border-pink-200", "px-2", "py-1", "rounded", "text-[10px]", "text-gray-700"], [1, "max-w-6xl", "mx-auto", "flex", "flex-col", "md:flex-row", "justify-between", "items-center", "pt-8", "text-xs", "text-gray-500", "gap-4"], [1, "flex", "items-center", "gap-1"]], template: function App_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, App_header_0_Template, 32, 10, "header", 2);
            i0.ɵɵelement(1, "router-outlet");
            i0.ɵɵtemplate(2, App_footer_2_Template, 70, 0, "footer", 3);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.exibirHeaderFooter);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.exibirHeaderFooter);
        } }, dependencies: [RouterOutlet, RouterLink, CommonModule, i4.NgClass, i4.NgIf, i4.AsyncPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(App, [{
        type: Component,
        args: [{ selector: 'app-root', standalone: true, imports: [RouterOutlet, RouterLink, CommonModule], template: "<header *ngIf=\"exibirHeaderFooter\" id=\"main-header\" [ngClass]=\"isScrolled ? 'bg-white shadow-2xl' : 'bg-transparent'\"\r\n    class=\"top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 fixed px-4 sm:px-8 py-4\">\r\n\r\n    <div class=\"max-w-6xl mx-auto flex items-center justify-between lg:flex-col lg:gap-4\">\r\n\r\n        <div class=\"text-left lg:text-center\">\r\n            <h1 class=\"text-gray-900 text-2xl sm:text-3xl font-light tracking-wide\">\r\n                Secret\r\n                <a routerLink=\"/\"\r\n                    class=\"font-cursive font-bold text-pink-600 text-3xl sm:text-4xl hover:text-pink-800 transition-colors duration-300 relative top-1 cursor-pointer\">\r\n                    Garden\r\n                </a>\r\n            </h1>\r\n        </div>\r\n\r\n        <div class=\"flex items-center gap-3 lg:hidden\">\r\n            <ng-container *ngIf=\"(usuario$ | async)\">\r\n                <a routerLink=\"/carrinho\" aria-label=\"Ver Carrinho\"\r\n                    class=\"relative text-gray-700 hover:text-pink-600 transition-colors p-1\">\r\n                    <i class=\"fa-solid fa-cart-shopping text-xl\"></i>\r\n                    <span *ngIf=\"carrinhoService.obterQuantidadeTotal() > 0\"\r\n                        class=\"absolute -top-1.5 -right-2 bg-pink-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow\">\r\n                        {{ carrinhoService.obterQuantidadeTotal() }}\r\n                    </span>\r\n                </a>\r\n            </ng-container>\r\n\r\n            <button (click)=\"toggleMenu()\" aria-label=\"Abrir menu\"\r\n                class=\"text-pink-600 focus:outline-none p-2 rounded-md hover:bg-pink-100/50 transition\">\r\n                <i class=\"fa-solid\" [ngClass]=\"isMenuOpen ? 'fa-xmark text-2xl' : 'fa-bars text-xl'\"></i>\r\n            </button>\r\n        </div>\r\n\r\n        <div class=\"hidden lg:flex w-full items-center justify-center relative mt-2\">\r\n            <nav>\r\n                <ul class=\"flex gap-8 text-sm font-medium tracking-wide uppercase text-gray-700\">\r\n                    <li><a routerLink=\"/\" fragment=\"home\" class=\"hover:text-pink-600 transition-colors duration-300\">Home</a></li>\r\n                    <li><a routerLink=\"/\" fragment=\"sobre\"\r\n                            class=\"hover:text-pink-600 transition-colors duration-300\">Sobre</a></li>\r\n                    <li><a routerLink=\"/\" fragment=\"contato\"\r\n                            class=\"hover:text-pink-600 transition-colors duration-300\">Contato</a></li>\r\n                    <li><a routerLink=\"/catalogo\"\r\n                            class=\"hover:text-pink-600 transition-colors duration-300\">Cat\u00E1logo</a></li>\r\n                </ul>\r\n            </nav>\r\n\r\n            <ng-container *ngIf=\"(usuario$ | async) as usuario; else botoesDeslogadoDesktop\">\r\n                <div class=\"flex gap-5 absolute right-0 items-center\">\r\n                    <a routerLink=\"/carrinho\" aria-label=\"Ver Carrinho\"\r\n                        class=\"relative text-gray-700 hover:text-pink-600 transition-colors p-1\">\r\n                        <i class=\"fa-solid fa-cart-shopping text-xl\"></i>\r\n                        <span *ngIf=\"carrinhoService.obterQuantidadeTotal() > 0\"\r\n                            class=\"absolute -top-1.5 -right-2 bg-pink-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow\">\r\n                            {{ carrinhoService.obterQuantidadeTotal() }}\r\n                        </span>\r\n                    </a>\r\n                    \r\n                    <div class=\"relative group border-l border-pink-200 pl-4\">\r\n                        <div class=\"flex items-center gap-2 cursor-pointer py-1\">\r\n                            <div\r\n                                class=\"w-8 h-8 rounded-full bg-pink-100 text-pink-600 border border-pink-300 font-bold flex items-center justify-center text-xs shadow-sm\">\r\n                                {{ usuario.nome.charAt(0) }}\r\n                            </div>\r\n                            <span class=\"text-xs font-bold text-gray-800\">{{ usuario.nome }}</span>\r\n                            <i class=\"fa-solid fa-chevron-down text-[10px] text-gray-500 transition-transform group-hover:rotate-180\"></i>\r\n                        </div>\r\n\r\n                        <div class=\"absolute right-0 top-full pt-2 w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50\">\r\n                            <div class=\"bg-white rounded-xl border border-stone-200 shadow-xl p-1.5 space-y-1\">\r\n                                <a routerLink=\"/meus-pedidos\"\r\n                                    class=\"flex items-center gap-2 px-3 py-2 text-xs font-semibold text-stone-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition\">\r\n                                    <i class=\"fa-solid fa-box text-pink-600\"></i> Meus Pedidos\r\n                                </a>\r\n                                <button (click)=\"logout()\"\r\n                                    class=\"w-full text-left flex items-center gap-2 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-lg transition cursor-pointer\">\r\n                                    <i class=\"fa-solid fa-right-from-bracket\"></i> Sair da conta\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n\r\n            <ng-template #botoesDeslogadoDesktop>\r\n                <div class=\"flex gap-5 absolute right-0\">\r\n                    <a routerLink=\"/login\"\r\n                        class=\"bg-pink-500 text-white rounded-md py-1 px-7 hover:text-pink-500 hover:bg-white transition transform duration-300 hover:scale-105 hover:shadow-2xl shadow-pink-500 hover:border hover:border-pink-400\">Login</a>\r\n                    <a routerLink=\"/cadastro\"\r\n                        class=\"bg-white text-pink-500 rounded-md py-1 px-7 hover:text-pink-500 hover:bg-pink-50 transition transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500 border border-pink-400\">Cadastro</a>\r\n                </div>\r\n            </ng-template>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"isMenuOpen\"\r\n        class=\"lg:hidden bg-white/95 backdrop-blur-md rounded-2xl mt-4 p-6 shadow-xl border border-pink-100 flex flex-col gap-6 animate-fadeIn\">\r\n\r\n        <ng-container *ngIf=\"(usuario$ | async) as usuario; else menuMobileDeslogado\">\r\n            <nav>\r\n                <ul class=\"flex flex-col gap-4 text-center text-sm font-medium tracking-wide uppercase text-gray-700\">\r\n                    <li><a routerLink=\"/\" fragment=\"home\" (click)=\"closeMenu()\"\r\n                            class=\"hover:text-pink-600 transition-colors block py-1\">Home</a></li>\r\n                    <li><a routerLink=\"/catalogo\" (click)=\"closeMenu()\"\r\n                            class=\"hover:text-pink-600 transition-colors block py-1\">Cat\u00E1logo</a></li>\r\n                    <li><a routerLink=\"/meus-pedidos\" (click)=\"closeMenu()\"\r\n                            class=\"hover:text-pink-600 transition-colors block py-1\">Meus Pedidos</a></li>\r\n                    <li><a routerLink=\"/\" fragment=\"sobre\"\r\n                            class=\"hover:text-pink-600 transition-colors duration-300\">Sobre</a></li>\r\n                    <li><a routerLink=\"/\" fragment=\"contato\"\r\n                            class=\"hover:text-pink-600 transition-colors duration-300\">Contato</a></li>\r\n                    <li>\r\n                        <a routerLink=\"/carrinho\" (click)=\"closeMenu()\"\r\n                            class=\"hover:text-pink-600 transition-colors block py-1\">\r\n                            Meu Carrinho ({{ carrinhoService.obterQuantidadeTotal() }})\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </nav>\r\n\r\n            <div class=\"flex flex-col items-center gap-3 pt-4 border-t border-pink-100 text-center\">\r\n                <div class=\"flex items-center gap-2\">\r\n                    <div\r\n                        class=\"w-8 h-8 rounded-full bg-pink-100 text-pink-600 font-bold flex items-center justify-center text-xs\">\r\n                        {{ usuario.nome.charAt(0) }}\r\n                    </div>\r\n                    <span class=\"text-sm font-bold text-gray-800\">{{ usuario.nome }}</span>\r\n                </div>\r\n                <button (click)=\"logout()\"\r\n                    class=\"text-xs font-semibold text-rose-600 hover:underline flex items-center gap-1 mt-1 cursor-pointer\">\r\n                    <i class=\"fa-solid fa-right-from-bracket\"></i> Sair da conta\r\n                </button>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <ng-template #menuMobileDeslogado>\r\n            <nav>\r\n                <ul class=\"flex flex-col gap-4 text-center text-sm font-medium tracking-wide uppercase text-gray-700\">\r\n                    <li><a routerLink=\"/\" fragment=\"home\" (click)=\"closeMenu()\"\r\n                            class=\"hover:text-pink-600 transition-colors block py-1\">Home</a></li>\r\n                    <li><a routerLink=\"/\" fragment=\"sobre\"\r\n                            class=\"hover:text-pink-600 transition-colors duration-300\">Sobre</a></li>\r\n                    <li><a routerLink=\"/\" fragment=\"contato\"\r\n                            class=\"hover:text-pink-600 transition-colors duration-300\">Contato</a></li>\r\n                    <li><a routerLink=\"/catalogo\" (click)=\"closeMenu()\"\r\n                            class=\"hover:text-pink-600 transition-colors block py-1\">Cat\u00E1logo</a></li>\r\n                </ul>\r\n            </nav>\r\n\r\n            <div class=\"flex flex-col gap-3 pt-2 border-t border-pink-100\">\r\n                <a routerLink=\"/login\" (click)=\"closeMenu()\"\r\n                    class=\"bg-pink-500 text-white text-center rounded-md py-2 px-7 hover:bg-pink-600 transition duration-300 w-full font-medium\">Login</a>\r\n                <a routerLink=\"/cadastro\" (click)=\"closeMenu()\"\r\n                    class=\"bg-white text-pink-500 text-center rounded-md py-2 px-7 border border-pink-400 hover:bg-pink-50 transition duration-300 w-full font-medium\">Cadastro</a>\r\n            </div>\r\n        </ng-template>\r\n    </div>\r\n</header>\r\n\r\n<router-outlet />\r\n\r\n<footer *ngIf=\"exibirHeaderFooter\"\r\n    class=\"w-full bg-[#FFF0F3] border-t border-pink-200 mt-20 pt-16 pb-8 px-6 md:px-16 font-sans\">\r\n    <div class=\"max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-pink-200 pb-12\">\r\n\r\n        <div class=\"flex flex-col space-y-4\">\r\n            <h3 class=\"text-gray-900 text-2xl font-light tracking-wide\">\r\n                Secret <span class=\"font-cursive font-bold text-pink-600 text-3xl\">Garden</span>\r\n            </h3>\r\n            <p class=\"text-gray-600 text-sm leading-relaxed font-serif\">\r\n                Transformando sentimentos puros em arte floral delicada. Flores frescas colhidas e entregues com\r\n                amor todos os dias.\r\n            </p>\r\n            <div class=\"flex gap-4 pt-2\">\r\n                <a href=\"#\" aria-label=\"Instagram\"\r\n                    class=\"w-9 h-9 rounded-full bg-white border border-pink-200 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300\">\r\n                    <i class=\"fa-brands fa-instagram text-base\"></i>\r\n                </a>\r\n                <a href=\"#\" aria-label=\"Facebook\"\r\n                    class=\"w-9 h-9 rounded-full bg-white border border-pink-200 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300\">\r\n                    <i class=\"fa-brands fa-facebook text-base\"></i>\r\n                </a>\r\n                <a href=\"#\" aria-label=\"WhatsApp\"\r\n                    class=\"w-9 h-9 rounded-full bg-white border border-pink-200 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300\">\r\n                    <i class=\"fa-brands fa-whatsapp text-base\"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"flex flex-col space-y-4\">\r\n            <h4 class=\"text-pink-950 font-bold text-sm uppercase tracking-wider\">Navega\u00E7\u00E3o</h4>\r\n            <ul class=\"flex flex-col space-y-2 text-sm text-gray-600\">\r\n                <li><a routerLink=\"/\" class=\"hover:text-pink-600 transition-colors duration-200\">In\u00EDcio</a></li>\r\n                <li><a routerLink=\"/catalogo\" class=\"hover:text-pink-600 transition-colors duration-200\">Nosso\r\n                        Cat\u00E1logo</a>\r\n                </li>\r\n                <li><a href=\"#sobre\" class=\"hover:text-pink-600 transition-colors duration-200\">Sobre a Floricultura</a>\r\n                </li>\r\n                <li><a href=\"#contato\" class=\"hover:text-pink-600 transition-colors duration-200\">Fale Conosco</a></li>\r\n            </ul>\r\n        </div>\r\n\r\n        <div class=\"flex flex-col space-y-4\">\r\n            <h4 class=\"text-pink-950 font-bold text-sm uppercase tracking-wider\">Contato</h4>\r\n            <ul class=\"flex flex-col space-y-3 text-sm text-gray-600\">\r\n                <li class=\"flex items-center gap-2\">\r\n                    <i class=\"fa-solid fa-phone text-pink-600 text-sm shrink-0\"></i>\r\n                    <span>(11) 99999-9999</span>\r\n                </li>\r\n                <li class=\"flex items-center gap-2\">\r\n                    <i class=\"fa-solid fa-envelope text-pink-600 text-sm shrink-0\"></i>\r\n                    <span>oi@secretgarden.com</span>\r\n                </li>\r\n                <li class=\"flex items-start gap-2\">\r\n                    <i class=\"fa-solid fa-location-dot text-pink-600 text-sm shrink-0 mt-0.5\"></i>\r\n                    <span class=\"font-serif\">Av. das Flores, 123 - S\u00E3o Paulo, SP</span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n        <div class=\"flex flex-col space-y-4\">\r\n            <h4 class=\"text-pink-950 font-bold text-sm uppercase tracking-wider\">Funcionamento</h4>\r\n            <p class=\"text-sm text-gray-600 font-serif\">\r\n                Segunda a S\u00E1bado: 08h \u00E0s 19h<br>\r\n                Domingos e Feriados: 09h \u00E0s 14h\r\n            </p>\r\n            <div class=\"pt-2\">\r\n                <h5 class=\"text-xs font-semibold text-pink-950/60 uppercase tracking-wider mb-2\">Formas de Pagamento\r\n                </h5>\r\n                <div class=\"flex gap-2 text-gray-500 text-xs font-bold tracking-wider\">\r\n                    <span class=\"bg-white border border-pink-200 px-2 py-1 rounded text-[10px] text-pink-700\">PIX</span>\r\n                    <span\r\n                        class=\"bg-white border border-pink-200 px-2 py-1 rounded text-[10px] text-gray-700\">CART\u00C3O</span>\r\n                    <span\r\n                        class=\"bg-white border border-pink-200 px-2 py-1 rounded text-[10px] text-gray-700\">BOLETO</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div\r\n        class=\"max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-gray-500 gap-4\">\r\n        <p>&copy; 2026 Secret Garden Floricultura. Todos os direitos reservados.</p>\r\n        <p class=\"flex items-center gap-1\">\r\n            Desenvolvido para a Fatec\r\n        </p>\r\n    </div>\r\n</footer>" }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }, { type: i3.CarrinhoService }], { onWindowScroll: [{
            type: HostListener,
            args: ['window:scroll', []]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 22 }); })();
