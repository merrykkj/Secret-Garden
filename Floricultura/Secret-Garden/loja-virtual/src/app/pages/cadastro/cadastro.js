import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ClienteService } from '../../services/cliente';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function Cadastro_p_92_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 64);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.mensagemErro, " ");
} }
export class Cadastro {
    clienteService = inject(ClienteService);
    router = inject(Router);
    nome = '';
    email = '';
    documento = '';
    senha = '';
    confirmarSenha = '';
    carregando = false;
    mensagemErro = '';
    cadastrar() {
        this.mensagemErro = '';
        if (!this.nome.trim() ||
            !this.email.trim() ||
            !this.documento.trim() ||
            !this.senha) {
            this.mensagemErro = 'Preencha todos os campos.';
            return;
        }
        if (this.senha !== this.confirmarSenha) {
            this.mensagemErro = 'As senhas não coincidem.';
            return;
        }
        if (this.carregando)
            return;
        this.carregando = true;
        this.clienteService.cadastrar({
            nome: this.nome.trim(),
            email: this.email.trim(),
            documento: this.documento.trim(),
            senha: this.senha,
            ativo: 1
        }).subscribe({
            next: () => {
                this.carregando = false;
                alert('Cadastro realizado com sucesso!');
                this.router.navigate(['/login']);
            },
            error: (erro) => {
                console.error('Erro ao cadastrar cliente:', erro);
                this.mensagemErro = 'Não foi possível realizar o cadastro.';
                this.carregando = false;
            }
        });
    }
    static ɵfac = function Cadastro_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Cadastro)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Cadastro, selectors: [["app-cadastro"]], decls: 112, vars: 7, consts: [[1, "h-screen", "w-full", "grid", "grid-cols-1", "lg:grid-cols-12", "bg-white", "overflow-hidden", "relative"], [1, "absolute", "top-3", "right-3", "lg:top-8", "lg:right-8", "z-20"], ["routerLink", "/", 1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "bg-white/90", "hover:bg-white", "text-gray-700", "hover:text-pink-600", "text-[11px]", "font-semibold", "uppercase", "tracking-wider", "rounded-full", "border", "border-pink-100", "hover:border-pink-200", "shadow-sm", "transition-all", "duration-200", "backdrop-blur-md"], ["aria-hidden", "true", 1, "fa-solid", "fa-arrow-left", "text-[10px]"], [1, "hidden", "lg:flex", "lg:col-span-6", "relative", "bg-pink-950", "flex-col", "justify-between", "p-12", "text-white", "overflow-hidden", "h-full"], ["src", "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop", "alt", "Cora\u00E7\u00E3o de Flores Secret Garden", 1, "absolute", "inset-0", "w-full", "h-full", "object-cover", "opacity-60"], [1, "absolute", "inset-0", "bg-linear-to-t", "from-pink-950", "via-pink-950/40", "to-transparent"], [1, "relative", "z-10", "pt-12"], [1, "inline-flex", "items-center", "gap-2", "px-3.5", "py-1.5", "bg-white/20", "backdrop-blur-md", "rounded-full", "text-xs", "font-semibold", "uppercase", "tracking-widest", "text-pink-100", "border", "border-white/30"], [1, "fa-solid", "fa-sparkles", "text-xs"], [1, "relative", "z-10", "space-y-4", "max-w-lg", "mb-8"], [1, "text-4xl", "font-serif", "font-bold", "leading-tight", "drop-shadow-md"], [1, "text-sm", "text-pink-100/90", "leading-relaxed", "font-light"], [1, "lg:col-span-6", "flex", "flex-col", "justify-center", "items-center", "px-6", "sm:px-12", "lg:px-20", "h-full", "bg-linear-to-br", "from-pink-50/50", "via-white", "to-pink-50/30", "overflow-y-auto"], [1, "w-full", "max-w-lg", "space-y-3", "my-auto", "py-4"], [1, "text-center"], [1, "inline-flex", "items-center", "justify-center", "w-10", "h-10", "bg-pink-100/80", "text-pink-600", "rounded-xl", "mb-1.5", "shadow-sm", "border", "border-pink-200/50"], ["aria-hidden", "true", 1, "fa-solid", "fa-seedling", "text-xl"], [1, "text-gray-900", "text-2xl", "font-serif", "font-bold", "tracking-tight"], ["routerLink", "/", 1, "text-pink-600", "hover:text-pink-700", "transition-colors", "cursor-pointer"], [1, "text-[10px]", "text-gray-500", "font-semibold", "uppercase", "tracking-widest", "mt-0.5"], [1, "flex", "flex-col", "gap-2.5", 3, "ngSubmit"], ["for", "nome", 1, "block", "text-[10px]", "font-bold", "text-gray-700", "uppercase", "tracking-wider", "mb-0.5"], [1, "relative", "flex", "items-center"], [1, "absolute", "left-3.5", "text-pink-400"], ["aria-hidden", "true", 1, "fa-solid", "fa-user", "text-xs"], ["type", "text", "id", "nome", "name", "nome", "placeholder", "Seu nome e sobrenome", "required", "", 1, "w-full", "pl-9", "pr-3", "py-2", "bg-white", "border", "border-pink-200", "rounded-xl", "text-gray-800", "placeholder-gray-400", "text-xs", "outline-none", "transition", "duration-200", "focus:border-pink-500", "focus:ring-4", "focus:ring-pink-500/10", "shadow-sm", 3, "ngModelChange", "ngModel"], ["for", "email", 1, "block", "text-[10px]", "font-bold", "text-gray-700", "uppercase", "tracking-wider", "mb-0.5"], ["aria-hidden", "true", 1, "fa-solid", "fa-envelope", "text-xs"], ["type", "email", "id", "email", "name", "email", "placeholder", "seu@email.com", "required", "", 1, "w-full", "pl-9", "pr-3", "py-2", "bg-white", "border", "border-pink-200", "rounded-xl", "text-gray-800", "placeholder-gray-400", "text-xs", "outline-none", "transition", "duration-200", "focus:border-pink-500", "focus:ring-4", "focus:ring-pink-500/10", "shadow-sm", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-2"], ["for", "telefone", 1, "block", "text-[10px]", "font-bold", "text-gray-700", "uppercase", "tracking-wider", "mb-0.5"], ["aria-hidden", "true", 1, "fa-brands", "fa-whatsapp", "text-xs"], ["type", "tel", "id", "telefone", "placeholder", "(00) 90000-0000", 1, "w-full", "pl-9", "pr-3", "py-2", "bg-white", "border", "border-pink-200", "rounded-xl", "text-gray-800", "placeholder-gray-400", "text-xs", "outline-none", "transition", "duration-200", "focus:border-pink-500", "focus:ring-4", "focus:ring-pink-500/10", "shadow-sm"], ["for", "nascimento", 1, "block", "text-[10px]", "font-bold", "text-gray-700", "uppercase", "tracking-wider", "mb-0.5"], ["aria-hidden", "true", 1, "fa-solid", "fa-cake-candles", "text-xs"], ["type", "date", "id", "nascimento", 1, "w-full", "pl-9", "pr-3", "py-2", "bg-white", "border", "border-pink-200", "rounded-xl", "text-gray-600", "placeholder-gray-400", "text-xs", "outline-none", "transition", "duration-200", "focus:border-pink-500", "focus:ring-4", "focus:ring-pink-500/10", "shadow-sm"], ["for", "senha", 1, "block", "text-[10px]", "font-bold", "text-gray-700", "uppercase", "tracking-wider", "mb-0.5"], ["aria-hidden", "true", 1, "fa-solid", "fa-lock", "text-xs"], ["type", "password", "id", "senha", "name", "senha", "placeholder", "M\u00EDnimo 8 caracteres", "minlength", "8", "required", "", 1, "w-full", "pl-9", "pr-3", "py-2", "bg-white", "border", "border-pink-200", "rounded-xl", "text-gray-800", "placeholder-gray-400", "text-xs", "outline-none", "transition", "duration-200", "focus:border-pink-500", "focus:ring-4", "focus:ring-pink-500/10", "shadow-sm", 3, "ngModelChange", "ngModel"], ["for", "confirmar-senha", 1, "block", "text-[10px]", "font-bold", "text-gray-700", "uppercase", "tracking-wider", "mb-0.5"], ["aria-hidden", "true", 1, "fa-solid", "fa-shield-halved", "text-xs"], ["type", "password", "id", "confirmar-senha", "name", "confirmarSenha", "placeholder", "Repita a senha", "required", "", 1, "w-full", "pl-9", "pr-3", "py-2", "bg-white", "border", "border-pink-200", "rounded-xl", "text-gray-800", "placeholder-gray-400", "text-xs", "outline-none", "transition", "duration-200", "focus:border-pink-500", "focus:ring-4", "focus:ring-pink-500/10", "shadow-sm", 3, "ngModelChange", "ngModel"], ["for", "documento", 1, "block", "text-[10px]", "font-bold", "text-gray-700", "uppercase", "tracking-wider", "mb-0.5"], ["aria-hidden", "true", 1, "fa-solid", "fa-id-card", "text-xs"], ["type", "text", "id", "documento", "name", "documento", "placeholder", "Somente n\u00FAmeros", "inputmode", "numeric", "maxlength", "11", "pattern", "[0-9]{11}", "required", "", 1, "w-full", "pl-9", "pr-3", "py-2", "bg-white", "border", "border-pink-200", "rounded-xl", "text-gray-800", "placeholder-gray-400", "text-xs", "outline-none", "transition", "duration-200", "focus:border-pink-500", "focus:ring-4", "focus:ring-pink-500/10", "shadow-sm", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center"], [1, "flex", "items-start", "cursor-pointer", "select-none"], ["type", "checkbox", "id", "terms", "required", "", 1, "w-3.5", "h-3.5", "mt-0.5", "text-pink-600", "border-pink-300", "rounded", "focus:ring-pink-500", "accent-pink-600", "cursor-pointer"], [1, "ml-2", "text-[10px]", "font-medium", "text-gray-600", "leading-tight"], ["routerLink", "/termos", 1, "text-pink-600", "font-semibold", "hover:underline"], ["routerLink", "/privacidade", 1, "text-pink-600", "font-semibold", "hover:underline"], ["role", "alert", "class", "text-xs text-red-600", 4, "ngIf"], ["type", "submit", 1, "w-full", "bg-linear-to-r", "from-pink-500", "to-pink-600", "hover:from-pink-600", "hover:to-pink-700", "text-white", "font-semibold", "py-2.5", "rounded-xl", "shadow-md", "shadow-pink-500/20", "active:scale-[0.98]", "transition", "duration-200", "cursor-pointer", "flex", "items-center", "justify-center", "gap-2", "group", "text-xs", 3, "disabled"], ["aria-hidden", "true", 1, "fa-solid", "fa-arrow-right", "text-xs", "transition-transform", "duration-200", "group-hover:translate-x-1"], [1, "relative", "my-1.5", "flex", "items-center", "justify-center"], [1, "border-t", "border-gray-200", "w-full"], [1, "bg-white", "px-2", "text-[9px]", "font-semibold", "text-gray-400", "uppercase", "tracking-widest", "absolute"], [1, "grid", "grid-cols-2", "gap-2"], ["type", "button", 1, "flex", "items-center", "justify-center", "gap-2", "border", "border-gray-200", "hover:border-pink-300", "bg-white", "py-2", "rounded-xl", "text-xs", "font-semibold", "text-gray-700", "hover:bg-pink-50/50", "transition", "shadow-sm"], [1, "fa-brands", "fa-google", "text-red-500", "text-xs"], [1, "fa-brands", "fa-facebook", "text-blue-600", "text-xs"], [1, "text-center", "text-[10px]", "text-gray-600", "mt-1"], ["routerLink", "/login", 1, "font-bold", "text-pink-600", "hover:text-pink-700", "hover:underline", "transition"], ["role", "alert", 1, "text-xs", "text-red-600"]], template: function Cadastro_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0)(1, "div", 1)(2, "a", 2);
            i0.ɵɵelement(3, "i", 3);
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵtext(5, "Voltar \u00E0 Home");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵelement(7, "img", 5)(8, "div", 6);
            i0.ɵɵelementStart(9, "div", 7)(10, "span", 8);
            i0.ɵɵelement(11, "i", 9);
            i0.ɵɵtext(12, " Fa\u00E7a Parte ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 10)(14, "h2", 11);
            i0.ɵɵtext(15, " Crie mem\u00F3rias colhendo momentos. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "p", 12);
            i0.ɵɵtext(17, " Cadastre-se na Secret Garden para guardar os seus arranjos favoritos, acompanhar entregas em tempo real e receber ofertas florais exclusivas. ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(18, "div", 13)(19, "div", 14)(20, "div", 15)(21, "div", 16);
            i0.ɵɵelement(22, "i", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "h1", 18);
            i0.ɵɵtext(24, " Secret ");
            i0.ɵɵelementStart(25, "a", 19);
            i0.ɵɵtext(26, " Garden ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "p", 20);
            i0.ɵɵtext(28, " Crie a sua conta ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "form", 21);
            i0.ɵɵlistener("ngSubmit", function Cadastro_Template_form_ngSubmit_29_listener() { return ctx.cadastrar(); });
            i0.ɵɵelementStart(30, "div")(31, "label", 22);
            i0.ɵɵtext(32, " Nome Completo ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "div", 23)(34, "span", 24);
            i0.ɵɵelement(35, "i", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "input", 26);
            i0.ɵɵtwoWayListener("ngModelChange", function Cadastro_Template_input_ngModelChange_36_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.nome, $event) || (ctx.nome = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(37, "div")(38, "label", 27);
            i0.ɵɵtext(39, " E-mail ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "div", 23)(41, "span", 24);
            i0.ɵɵelement(42, "i", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "input", 29);
            i0.ɵɵtwoWayListener("ngModelChange", function Cadastro_Template_input_ngModelChange_43_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.email, $event) || (ctx.email = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(44, "div", 30)(45, "div")(46, "label", 31);
            i0.ɵɵtext(47, " WhatsApp / Telem\u00F3vel ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "div", 23)(49, "span", 24);
            i0.ɵɵelement(50, "i", 32);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(51, "input", 33);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(52, "div")(53, "label", 34);
            i0.ɵɵtext(54, " Data de Nascimento ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "div", 23)(56, "span", 24);
            i0.ɵɵelement(57, "i", 35);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(58, "input", 36);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(59, "div", 30)(60, "div")(61, "label", 37);
            i0.ɵɵtext(62, " Senha ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(63, "div", 23)(64, "span", 24);
            i0.ɵɵelement(65, "i", 38);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "input", 39);
            i0.ɵɵtwoWayListener("ngModelChange", function Cadastro_Template_input_ngModelChange_66_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.senha, $event) || (ctx.senha = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(67, "div")(68, "label", 40);
            i0.ɵɵtext(69, " Confirmar Senha ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "div", 23)(71, "span", 24);
            i0.ɵɵelement(72, "i", 41);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "input", 42);
            i0.ɵɵtwoWayListener("ngModelChange", function Cadastro_Template_input_ngModelChange_73_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.confirmarSenha, $event) || (ctx.confirmarSenha = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(74, "div")(75, "label", 43);
            i0.ɵɵtext(76, " CPF ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(77, "div", 23)(78, "span", 24);
            i0.ɵɵelement(79, "i", 44);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "input", 45);
            i0.ɵɵtwoWayListener("ngModelChange", function Cadastro_Template_input_ngModelChange_80_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.documento, $event) || (ctx.documento = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(81, "div", 46)(82, "label", 47);
            i0.ɵɵelement(83, "input", 48);
            i0.ɵɵelementStart(84, "span", 49);
            i0.ɵɵtext(85, " Eu aceito os ");
            i0.ɵɵelementStart(86, "a", 50);
            i0.ɵɵtext(87, "Termos");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(88, " e a ");
            i0.ɵɵelementStart(89, "a", 51);
            i0.ɵɵtext(90, "Pol\u00EDtica de Privacidade");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(91, ". ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(92, Cadastro_p_92_Template, 2, 1, "p", 52);
            i0.ɵɵelementStart(93, "button", 53)(94, "span");
            i0.ɵɵtext(95, "Criar Minha Conta");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(96, "i", 54);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(97, "div", 55);
            i0.ɵɵelement(98, "div", 56);
            i0.ɵɵelementStart(99, "span", 57);
            i0.ɵɵtext(100, "Ou cadastre-se com");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(101, "div", 58)(102, "button", 59);
            i0.ɵɵelement(103, "i", 60);
            i0.ɵɵtext(104, " Google ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(105, "button", 59);
            i0.ɵɵelement(106, "i", 61);
            i0.ɵɵtext(107, " Facebook ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(108, "p", 62);
            i0.ɵɵtext(109, " J\u00E1 possui uma conta ativa? ");
            i0.ɵɵelementStart(110, "a", 63);
            i0.ɵɵtext(111, " Fazer Login ");
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(36);
            i0.ɵɵtwoWayProperty("ngModel", ctx.nome);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(7);
            i0.ɵɵtwoWayProperty("ngModel", ctx.email);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(23);
            i0.ɵɵtwoWayProperty("ngModel", ctx.senha);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(7);
            i0.ɵɵtwoWayProperty("ngModel", ctx.confirmarSenha);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(7);
            i0.ɵɵtwoWayProperty("ngModel", ctx.documento);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(12);
            i0.ɵɵproperty("ngIf", ctx.mensagemErro);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.carregando);
        } }, dependencies: [CommonModule, i1.NgIf, FormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.NgModel, i2.NgForm, RouterLink], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Cadastro, [{
        type: Component,
        args: [{ selector: 'app-cadastro', standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: "\r\n<main class=\"h-screen w-full grid grid-cols-1 lg:grid-cols-12 bg-white overflow-hidden relative\">\r\n    <div class=\"absolute top-3 right-3 lg:top-8 lg:right-8 z-20\">\r\n        <a routerLink=\"/\"\r\n            class=\"inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 hover:bg-white text-gray-700 hover:text-pink-600 text-[11px] font-semibold uppercase tracking-wider rounded-full border border-pink-100 hover:border-pink-200 shadow-sm transition-all duration-200 backdrop-blur-md\">\r\n            <i class=\"fa-solid fa-arrow-left text-[10px]\" aria-hidden=\"true\"></i>\r\n            <span>Voltar \u00E0 Home</span>\r\n        </a>\r\n    </div>\r\n\r\n    <div\r\n        class=\"hidden lg:flex lg:col-span-6 relative bg-pink-950 flex-col justify-between p-12 text-white overflow-hidden h-full\">\r\n        <img src=\"https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop\"\r\n            alt=\"Cora\u00E7\u00E3o de Flores Secret Garden\" class=\"absolute inset-0 w-full h-full object-cover opacity-60\">\r\n\r\n        <div class=\"absolute inset-0 bg-linear-to-t from-pink-950 via-pink-950/40 to-transparent\"></div>\r\n\r\n        <div class=\"relative z-10 pt-12\">\r\n            <span\r\n                class=\"inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-widest text-pink-100 border border-white/30\">\r\n                <i class=\"fa-solid fa-sparkles text-xs\"></i> Fa\u00E7a Parte\r\n            </span>\r\n        </div>\r\n\r\n        <div class=\"relative z-10 space-y-4 max-w-lg mb-8\">\r\n            <h2 class=\"text-4xl font-serif font-bold leading-tight drop-shadow-md\">\r\n                Crie mem\u00F3rias colhendo momentos.\r\n            </h2>\r\n            <p class=\"text-sm text-pink-100/90 leading-relaxed font-light\">\r\n                Cadastre-se na Secret Garden para guardar os seus arranjos favoritos, acompanhar entregas em tempo real\r\n                e receber ofertas florais exclusivas.\r\n            </p>\r\n        </div>\r\n    </div>\r\n\r\n    <div\r\n        class=\"lg:col-span-6 flex flex-col justify-center items-center px-6 sm:px-12 lg:px-20 h-full bg-linear-to-br from-pink-50/50 via-white to-pink-50/30 overflow-y-auto\">\r\n        <div class=\"w-full max-w-lg space-y-3 my-auto py-4\">\r\n\r\n            <div class=\"text-center\">\r\n                <div\r\n                    class=\"inline-flex items-center justify-center w-10 h-10 bg-pink-100/80 text-pink-600 rounded-xl mb-1.5 shadow-sm border border-pink-200/50\">\r\n                    <i class=\"fa-solid fa-seedling text-xl\" aria-hidden=\"true\"></i>\r\n                </div>\r\n\r\n                <h1 class=\"text-gray-900 text-2xl font-serif font-bold tracking-tight\">\r\n                    Secret\r\n                    <a routerLink=\"/\" class=\"text-pink-600 hover:text-pink-700 transition-colors cursor-pointer\">\r\n                        Garden\r\n                    </a>\r\n                </h1>\r\n                <p class=\"text-[10px] text-gray-500 font-semibold uppercase tracking-widest mt-0.5\">\r\n                    Crie a sua conta\r\n                </p>\r\n            </div>\r\n\r\n            <form class=\"flex flex-col gap-2.5\" (ngSubmit)=\"cadastrar()\">\r\n\r\n                <div>\r\n                    <label for=\"nome\" class=\"block text-[10px] font-bold text-gray-700 uppercase tracking-wider mb-0.5\">\r\n                        Nome Completo\r\n                    </label>\r\n                    <div class=\"relative flex items-center\">\r\n                        <span class=\"absolute left-3.5 text-pink-400\">\r\n                            <i class=\"fa-solid fa-user text-xs\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                        <input type=\"text\" id=\"nome\" name=\"nome\" [(ngModel)]=\"nome\"\r\n                            placeholder=\"Seu nome e sobrenome\" required\r\n                            class=\"w-full pl-9 pr-3 py-2 bg-white border border-pink-200 rounded-xl text-gray-800 placeholder-gray-400 text-xs outline-none transition duration-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 shadow-sm\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div>\r\n                    <label for=\"email\"\r\n                        class=\"block text-[10px] font-bold text-gray-700 uppercase tracking-wider mb-0.5\">\r\n                        E-mail\r\n                    </label>\r\n                    <div class=\"relative flex items-center\">\r\n                        <span class=\"absolute left-3.5 text-pink-400\">\r\n                            <i class=\"fa-solid fa-envelope text-xs\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                        <input type=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"email\"\r\n                            placeholder=\"seu@email.com\" required\r\n                            class=\"w-full pl-9 pr-3 py-2 bg-white border border-pink-200 rounded-xl text-gray-800 placeholder-gray-400 text-xs outline-none transition duration-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 shadow-sm\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2\">\r\n                    <div>\r\n                        <label for=\"telefone\"\r\n                            class=\"block text-[10px] font-bold text-gray-700 uppercase tracking-wider mb-0.5\">\r\n                            WhatsApp / Telem\u00F3vel\r\n                        </label>\r\n                        <div class=\"relative flex items-center\">\r\n                            <span class=\"absolute left-3.5 text-pink-400\">\r\n                                <i class=\"fa-brands fa-whatsapp text-xs\" aria-hidden=\"true\"></i>\r\n                            </span>\r\n                            <input type=\"tel\" id=\"telefone\" placeholder=\"(00) 90000-0000\"\r\n                                class=\"w-full pl-9 pr-3 py-2 bg-white border border-pink-200 rounded-xl text-gray-800 placeholder-gray-400 text-xs outline-none transition duration-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 shadow-sm\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <label for=\"nascimento\"\r\n                            class=\"block text-[10px] font-bold text-gray-700 uppercase tracking-wider mb-0.5\">\r\n                            Data de Nascimento\r\n                        </label>\r\n                        <div class=\"relative flex items-center\">\r\n                            <span class=\"absolute left-3.5 text-pink-400\">\r\n                                <i class=\"fa-solid fa-cake-candles text-xs\" aria-hidden=\"true\"></i>\r\n                            </span>\r\n                            <input type=\"date\" id=\"nascimento\"\r\n                                class=\"w-full pl-9 pr-3 py-2 bg-white border border-pink-200 rounded-xl text-gray-600 placeholder-gray-400 text-xs outline-none transition duration-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 shadow-sm\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2\">\r\n                    <div>\r\n                        <label for=\"senha\"\r\n                            class=\"block text-[10px] font-bold text-gray-700 uppercase tracking-wider mb-0.5\">\r\n                            Senha\r\n                        </label>\r\n                        <div class=\"relative flex items-center\">\r\n                            <span class=\"absolute left-3.5 text-pink-400\">\r\n                                <i class=\"fa-solid fa-lock text-xs\" aria-hidden=\"true\"></i>\r\n                            </span>\r\n                            <input type=\"password\" id=\"senha\" name=\"senha\" [(ngModel)]=\"senha\"\r\n                                placeholder=\"M\u00EDnimo 8 caracteres\" minlength=\"8\" required\r\n                                class=\"w-full pl-9 pr-3 py-2 bg-white border border-pink-200 rounded-xl text-gray-800 placeholder-gray-400 text-xs outline-none transition duration-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 shadow-sm\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <label for=\"confirmar-senha\"\r\n                            class=\"block text-[10px] font-bold text-gray-700 uppercase tracking-wider mb-0.5\">\r\n                            Confirmar Senha\r\n                        </label>\r\n                        <div class=\"relative flex items-center\">\r\n                            <span class=\"absolute left-3.5 text-pink-400\">\r\n                                <i class=\"fa-solid fa-shield-halved text-xs\" aria-hidden=\"true\"></i>\r\n                            </span>\r\n                            <input type=\"password\" id=\"confirmar-senha\" name=\"confirmarSenha\"\r\n                                [(ngModel)]=\"confirmarSenha\" placeholder=\"Repita a senha\" required\r\n                                class=\"w-full pl-9 pr-3 py-2 bg-white border border-pink-200 rounded-xl text-gray-800 placeholder-gray-400 text-xs outline-none transition duration-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 shadow-sm\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div>\r\n                    <label for=\"documento\"\r\n                        class=\"block text-[10px] font-bold text-gray-700 uppercase tracking-wider mb-0.5\">\r\n                        CPF\r\n                    </label>\r\n                    <div class=\"relative flex items-center\">\r\n                        <span class=\"absolute left-3.5 text-pink-400\">\r\n                            <i class=\"fa-solid fa-id-card text-xs\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                        <input type=\"text\" id=\"documento\" name=\"documento\" [(ngModel)]=\"documento\"\r\n                            placeholder=\"Somente n\u00FAmeros\" inputmode=\"numeric\" maxlength=\"11\"\r\n                            pattern=\"[0-9]{11}\" required\r\n                            class=\"w-full pl-9 pr-3 py-2 bg-white border border-pink-200 rounded-xl text-gray-800 placeholder-gray-400 text-xs outline-none transition duration-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 shadow-sm\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"flex items-center\">\r\n                    <label class=\"flex items-start cursor-pointer select-none\">\r\n                        <input type=\"checkbox\" id=\"terms\" required\r\n                            class=\"w-3.5 h-3.5 mt-0.5 text-pink-600 border-pink-300 rounded focus:ring-pink-500 accent-pink-600 cursor-pointer\">\r\n                        <span class=\"ml-2 text-[10px] font-medium text-gray-600 leading-tight\">\r\n                            Eu aceito os <a routerLink=\"/termos\"\r\n                                class=\"text-pink-600 font-semibold hover:underline\">Termos</a> e a <a\r\n                                routerLink=\"/privacidade\" class=\"text-pink-600 font-semibold hover:underline\">Pol\u00EDtica\r\n                                de Privacidade</a>.\r\n                        </span>\r\n                    </label>\r\n                </div>\r\n\r\n                <p *ngIf=\"mensagemErro\" role=\"alert\" class=\"text-xs text-red-600\">\r\n                    {{ mensagemErro }}\r\n                </p>\r\n\r\n                <button type=\"submit\" [disabled]=\"carregando\"\r\n                    class=\"w-full bg-linear-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-2.5 rounded-xl shadow-md shadow-pink-500/20 active:scale-[0.98] transition duration-200 cursor-pointer flex items-center justify-center gap-2 group text-xs\">\r\n                    <span>Criar Minha Conta</span>\r\n                    <i class=\"fa-solid fa-arrow-right text-xs transition-transform duration-200 group-hover:translate-x-1\"\r\n                        aria-hidden=\"true\"></i>\r\n                </button>\r\n\r\n                <div class=\"relative my-1.5 flex items-center justify-center\">\r\n                    <div class=\"border-t border-gray-200 w-full\"></div>\r\n                    <span\r\n                        class=\"bg-white px-2 text-[9px] font-semibold text-gray-400 uppercase tracking-widest absolute\">Ou\r\n                        cadastre-se com</span>\r\n                </div>\r\n\r\n                <div class=\"grid grid-cols-2 gap-2\">\r\n                    <button type=\"button\"\r\n                        class=\"flex items-center justify-center gap-2 border border-gray-200 hover:border-pink-300 bg-white py-2 rounded-xl text-xs font-semibold text-gray-700 hover:bg-pink-50/50 transition shadow-sm\">\r\n                        <i class=\"fa-brands fa-google text-red-500 text-xs\"></i> Google\r\n                    </button>\r\n                    <button type=\"button\"\r\n                        class=\"flex items-center justify-center gap-2 border border-gray-200 hover:border-pink-300 bg-white py-2 rounded-xl text-xs font-semibold text-gray-700 hover:bg-pink-50/50 transition shadow-sm\">\r\n                        <i class=\"fa-brands fa-facebook text-blue-600 text-xs\"></i> Facebook\r\n                    </button>\r\n                </div>\r\n\r\n                <p class=\"text-center text-[10px] text-gray-600 mt-1\">\r\n                    J\u00E1 possui uma conta ativa?\r\n                    <a routerLink=\"/login\"\r\n                        class=\"font-bold text-pink-600 hover:text-pink-700 hover:underline transition\">\r\n                        Fazer Login\r\n                    </a>\r\n                </p>\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</main>\r\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Cadastro, { className: "Cadastro", filePath: "src/app/pages/cadastro/cadastro.ts", lineNumber: 15 }); })();
