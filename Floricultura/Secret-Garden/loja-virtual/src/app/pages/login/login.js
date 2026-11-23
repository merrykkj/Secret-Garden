import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "../../services/auth";
import * as i2 from "@angular/router";
import * as i3 from "@angular/forms";
export class Login {
    authService;
    router;
    emailInput = '';
    senhaInput = '';
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    efetuarLogin() {
        if (!this.emailInput.trim() || !this.senhaInput) {
            alert('Preencha o e-mail e a senha.');
            return;
        }
        this.authService.login(this.emailInput.trim(), this.senhaInput).subscribe({
            next: (usuario) => {
                if (usuario) {
                    this.router.navigate(['/catalogo']);
                }
                else {
                    alert('E-mail ou senha incorretos.');
                }
            },
            error: (erro) => {
                console.error('Erro ao realizar login:', erro);
                alert('Não foi possível realizar o login. Tente novamente.');
            }
        });
    }
    static ɵfac = function Login_Factory(__ngFactoryType__) { /* @ts-ignore */
    return new (__ngFactoryType__ || Login)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Login, selectors: [["app-login"]], decls: 71, vars: 2, consts: [[1, "h-screen", "w-full", "grid", "grid-cols-1", "lg:grid-cols-12", "bg-white", "overflow-hidden", "relative"], [1, "absolute", "top-3", "right-3", "lg:top-8", "lg:right-8", "z-20"], ["routerLink", "/", 1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "bg-white/90", "hover:bg-white", "text-gray-700", "hover:text-pink-600", "text-[11px]", "font-semibold", "uppercase", "tracking-wider", "rounded-full", "border", "border-pink-100", "hover:border-pink-200", "shadow-sm", "transition-all", "duration-200", "backdrop-blur-md"], ["aria-hidden", "true", 1, "fa-solid", "fa-arrow-left", "text-[10px]"], [1, "hidden", "lg:flex", "lg:col-span-6", "relative", "bg-pink-950", "flex-col", "justify-between", "p-12", "text-white", "overflow-hidden", "h-full"], ["src", "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop", "alt", "Arranjo de Flores Secret Garden", 1, "absolute", "inset-0", "w-full", "h-full", "object-cover", "opacity-60"], [1, "absolute", "inset-0", "bg-linear-to-t", "from-pink-950", "via-pink-950/40", "to-transparent"], [1, "relative", "z-10", "pt-12"], [1, "inline-flex", "items-center", "gap-2", "px-3.5", "py-1.5", "bg-white/20", "backdrop-blur-md", "rounded-full", "text-xs", "font-semibold", "uppercase", "tracking-widest", "text-pink-100", "border", "border-white/30"], [1, "fa-solid", "fa-sparkles", "text-xs"], [1, "relative", "z-10", "space-y-4", "max-w-lg", "mb-8"], [1, "text-4xl", "font-serif", "font-bold", "leading-tight", "drop-shadow-md"], [1, "text-sm", "text-pink-100/90", "leading-relaxed", "font-light"], [1, "lg:col-span-6", "flex", "flex-col", "justify-center", "items-center", "px-6", "sm:px-12", "lg:px-20", "h-full", "bg-linear-to-br", "from-pink-50/50", "via-white", "to-pink-50/30", "overflow-y-auto"], [1, "w-full", "max-w-md", "space-y-5", "my-auto", "py-6"], [1, "text-center"], [1, "inline-flex", "items-center", "justify-center", "w-12", "h-12", "bg-pink-100/80", "text-pink-600", "rounded-2xl", "mb-2", "shadow-sm", "border", "border-pink-200/50"], ["aria-hidden", "true", 1, "fa-solid", "fa-seedling", "text-2xl"], [1, "text-gray-900", "text-2xl", "font-serif", "font-bold", "tracking-tight"], ["routerLink", "/", 1, "text-pink-600", "hover:text-pink-700", "transition-colors", "cursor-pointer"], [1, "text-[10px]", "text-gray-500", "font-semibold", "uppercase", "tracking-widest", "mt-0.5"], [1, "flex", "flex-col", "gap-3.5", 3, "ngSubmit"], ["for", "email", 1, "block", "text-[11px]", "font-bold", "text-gray-700", "uppercase", "tracking-wider", "mb-1"], [1, "relative", "flex", "items-center"], [1, "absolute", "left-3.5", "text-pink-400"], ["aria-hidden", "true", 1, "fa-solid", "fa-envelope", "text-sm"], ["type", "email", "id", "email", "name", "email", "placeholder", "seu@email.com", "required", "", 1, "w-full", "pl-10", "pr-3", "py-2.5", "bg-white", "border", "border-pink-200", "rounded-xl", "text-gray-800", "placeholder-gray-400", "text-xs", "outline-none", "transition", "duration-200", "focus:border-pink-500", "focus:ring-4", "focus:ring-pink-500/10", "shadow-sm", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-between", "items-center", "mb-1"], ["for", "senha", 1, "block", "text-[11px]", "font-bold", "text-gray-700", "uppercase", "tracking-wider"], ["aria-hidden", "true", 1, "fa-solid", "fa-lock", "text-sm"], ["type", "password", "id", "senha", "name", "senha", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 1, "w-full", "pl-10", "pr-10", "py-2.5", "bg-white", "border", "border-pink-200", "rounded-xl", "text-gray-800", "placeholder-gray-400", "text-xs", "outline-none", "transition", "duration-200", "focus:border-pink-500", "focus:ring-4", "focus:ring-pink-500/10", "shadow-sm", 3, "ngModelChange", "ngModel"], ["type", "button", "aria-label", "Mostrar senha", 1, "absolute", "right-3.5", "text-gray-400", "hover:text-pink-600", "transition"], ["aria-hidden", "true", 1, "fa-solid", "fa-eye", "text-xs"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "cursor-pointer", "select-none"], ["type", "checkbox", "id", "remember", "name", "remember", 1, "w-3.5", "h-3.5", "text-pink-600", "border-pink-300", "rounded", "focus:ring-pink-500", "accent-pink-600", "cursor-pointer"], [1, "ml-2", "text-[11px]", "font-medium", "text-gray-600"], ["type", "submit", 1, "w-full", "bg-linear-to-r", "from-pink-500", "to-pink-600", "hover:from-pink-600", "hover:to-pink-700", "text-white", "font-semibold", "py-2.5", "rounded-xl", "shadow-md", "shadow-pink-500/20", "active:scale-[0.98]", "transition", "duration-200", "cursor-pointer", "flex", "items-center", "justify-center", "gap-2", "group", "text-xs"], ["aria-hidden", "true", 1, "fa-solid", "fa-arrow-right", "text-xs", "transition-transform", "duration-200", "group-hover:translate-x-1"], [1, "relative", "my-2", "flex", "items-center", "justify-center"], [1, "border-t", "border-gray-200", "w-full"], [1, "bg-white", "px-2", "text-[10px]", "font-semibold", "text-gray-400", "uppercase", "tracking-widest", "absolute"], [1, "grid", "grid-cols-2", "gap-2.5"], ["type", "button", 1, "flex", "items-center", "justify-center", "gap-2", "border", "border-gray-200", "hover:border-pink-300", "bg-white", "py-2", "rounded-xl", "text-xs", "font-semibold", "text-gray-700", "hover:bg-pink-50/50", "transition", "shadow-sm"], [1, "fa-brands", "fa-google", "text-red-500", "text-xs"], [1, "fa-brands", "fa-facebook", "text-blue-600", "text-xs"], [1, "text-center", "text-[11px]", "text-gray-600", "mt-2"], ["routerLink", "/cadastro", 1, "font-bold", "text-pink-600", "hover:text-pink-700", "hover:underline", "transition"]], template: function Login_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0)(1, "div", 1)(2, "a", 2);
            i0.ɵɵelement(3, "i", 3);
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵtext(5, "Voltar \u00E0 Home");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵelement(7, "img", 5)(8, "div", 6);
            i0.ɵɵelementStart(9, "div", 7)(10, "span", 8);
            i0.ɵɵelement(11, "i", 9);
            i0.ɵɵtext(12, " Sinta o Aroma ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 10)(14, "h2", 11);
            i0.ɵɵtext(15, " Espalhe amor com flores frescas e selecionadas. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "p", 12);
            i0.ɵɵtext(17, " Acesse sua conta para acompanhar pedidos em tempo real, salvar seus favoritos e receber ofertas exclusivas no Secret Garden. ");
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
            i0.ɵɵtext(28, " Bem-vindo de volta! ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "form", 21);
            i0.ɵɵlistener("ngSubmit", function Login_Template_form_ngSubmit_29_listener() { return ctx.efetuarLogin(); });
            i0.ɵɵelementStart(30, "div")(31, "label", 22);
            i0.ɵɵtext(32, " E-mail ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "div", 23)(34, "span", 24);
            i0.ɵɵelement(35, "i", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "input", 26);
            i0.ɵɵtwoWayListener("ngModelChange", function Login_Template_input_ngModelChange_36_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.emailInput, $event) || (ctx.emailInput = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(37, "div")(38, "div", 27)(39, "label", 28);
            i0.ɵɵtext(40, " Senha ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(41, "div", 23)(42, "span", 24);
            i0.ɵɵelement(43, "i", 29);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "input", 30);
            i0.ɵɵtwoWayListener("ngModelChange", function Login_Template_input_ngModelChange_44_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.senhaInput, $event) || (ctx.senhaInput = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(45, "button", 31);
            i0.ɵɵelement(46, "i", 32);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(47, "div", 33)(48, "label", 34);
            i0.ɵɵelement(49, "input", 35);
            i0.ɵɵelementStart(50, "span", 36);
            i0.ɵɵtext(51, "Lembrar das minhas informa\u00E7\u00F5es");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(52, "button", 37)(53, "span");
            i0.ɵɵtext(54, "Entrar no Jardim");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(55, "i", 38);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "div", 39);
            i0.ɵɵelement(57, "div", 40);
            i0.ɵɵelementStart(58, "span", 41);
            i0.ɵɵtext(59, "Ou entre com");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(60, "div", 42)(61, "button", 43);
            i0.ɵɵelement(62, "i", 44);
            i0.ɵɵtext(63, " Google ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(64, "button", 43);
            i0.ɵɵelement(65, "i", 45);
            i0.ɵɵtext(66, " Facebook ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(67, "p", 46);
            i0.ɵɵtext(68, " Ainda n\u00E3o tem uma conta? ");
            i0.ɵɵelementStart(69, "a", 47);
            i0.ɵɵtext(70, " Cadastre-se gratuitamente ");
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(36);
            i0.ɵɵtwoWayProperty("ngModel", ctx.emailInput);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(8);
            i0.ɵɵtwoWayProperty("ngModel", ctx.senhaInput);
            i0.ɵɵcontrol();
        } }, dependencies: [FormsModule, i3.ɵNgNoValidate, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.RequiredValidator, i3.NgModel, i3.NgForm, RouterLink], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Login, [{
        type: Component,
        args: [{ selector: 'app-login', imports: [
                    FormsModule,
                    RouterLink
                ], template: "\n<main class=\"h-screen w-full grid grid-cols-1 lg:grid-cols-12 bg-white overflow-hidden relative\">\n    <div class=\"absolute top-3 right-3 lg:top-8 lg:right-8 z-20\">\n        <a routerLink=\"/\"\n            class=\"inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 hover:bg-white text-gray-700 hover:text-pink-600 text-[11px] font-semibold uppercase tracking-wider rounded-full border border-pink-100 hover:border-pink-200 shadow-sm transition-all duration-200 backdrop-blur-md\">\n            <i class=\"fa-solid fa-arrow-left text-[10px]\" aria-hidden=\"true\"></i>\n            <span>Voltar \u00E0 Home</span>\n        </a>\n    </div>\n\n    <div class=\"hidden lg:flex lg:col-span-6 relative bg-pink-950 flex-col justify-between p-12 text-white overflow-hidden h-full\">\n        <img src=\"https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop\"\n            alt=\"Arranjo de Flores Secret Garden\" class=\"absolute inset-0 w-full h-full object-cover opacity-60\">\n\n        <div class=\"absolute inset-0 bg-linear-to-t from-pink-950 via-pink-950/40 to-transparent\"></div>\n\n        <div class=\"relative z-10 pt-12\">\n            <span\n                class=\"inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-widest text-pink-100 border border-white/30\">\n                <i class=\"fa-solid fa-sparkles text-xs\"></i> Sinta o Aroma\n            </span>\n        </div>\n\n        <div class=\"relative z-10 space-y-4 max-w-lg mb-8\">\n            <h2 class=\"text-4xl font-serif font-bold leading-tight drop-shadow-md\">\n                Espalhe amor com flores frescas e selecionadas.\n            </h2>\n            <p class=\"text-sm text-pink-100/90 leading-relaxed font-light\">\n                Acesse sua conta para acompanhar pedidos em tempo real, salvar seus favoritos e receber ofertas\n                exclusivas no Secret Garden.\n            </p>\n        </div>\n    </div>\n\n    <div class=\"lg:col-span-6 flex flex-col justify-center items-center px-6 sm:px-12 lg:px-20 h-full bg-linear-to-br from-pink-50/50 via-white to-pink-50/30 overflow-y-auto\">\n        <div class=\"w-full max-w-md space-y-5 my-auto py-6\">\n\n            <div class=\"text-center\">\n                <div\n                    class=\"inline-flex items-center justify-center w-12 h-12 bg-pink-100/80 text-pink-600 rounded-2xl mb-2 shadow-sm border border-pink-200/50\">\n                    <i class=\"fa-solid fa-seedling text-2xl\" aria-hidden=\"true\"></i>\n                </div>\n\n                <h1 class=\"text-gray-900 text-2xl font-serif font-bold tracking-tight\">\n                    Secret\n                    <a routerLink=\"/\" class=\"text-pink-600 hover:text-pink-700 transition-colors cursor-pointer\">\n                        Garden\n                    </a>\n                </h1>\n                <p class=\"text-[10px] text-gray-500 font-semibold uppercase tracking-widest mt-0.5\">\n                    Bem-vindo de volta!\n                </p>\n            </div>\n\n            <form class=\"flex flex-col gap-3.5\" (ngSubmit)=\"efetuarLogin()\">\n                <div>\n                    <label for=\"email\" class=\"block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1\">\n                        E-mail\n                    </label>\n                    <div class=\"relative flex items-center\">\n                        <span class=\"absolute left-3.5 text-pink-400\">\n                            <i class=\"fa-solid fa-envelope text-sm\" aria-hidden=\"true\"></i>\n                        </span>\n                        <input type=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"emailInput\" placeholder=\"seu@email.com\"\n                            required\n                            class=\"w-full pl-10 pr-3 py-2.5 bg-white border border-pink-200 rounded-xl text-gray-800 placeholder-gray-400 text-xs outline-none transition duration-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 shadow-sm\">\n                    </div>\n                </div>\n\n                <div>\n                    <div class=\"flex justify-between items-center mb-1\">\n                        <label for=\"senha\" class=\"block text-[11px] font-bold text-gray-700 uppercase tracking-wider\">\n                            Senha\n                        </label>\n\n                    </div>\n                    <div class=\"relative flex items-center\">\n                        <span class=\"absolute left-3.5 text-pink-400\">\n                            <i class=\"fa-solid fa-lock text-sm\" aria-hidden=\"true\"></i>\n                        </span>\n                        <input type=\"password\" id=\"senha\" name=\"senha\" [(ngModel)]=\"senhaInput\"\n                            placeholder=\"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\" required\n                            class=\"w-full pl-10 pr-10 py-2.5 bg-white border border-pink-200 rounded-xl text-gray-800 placeholder-gray-400 text-xs outline-none transition duration-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 shadow-sm\">\n\n                        <button type=\"button\" aria-label=\"Mostrar senha\"\n                            class=\"absolute right-3.5 text-gray-400 hover:text-pink-600 transition\">\n                            <i class=\"fa-solid fa-eye text-xs\" aria-hidden=\"true\"></i>\n                        </button>\n                    </div>\n                </div>\n\n                <div class=\"flex items-center justify-between\">\n                    <label class=\"flex items-center cursor-pointer select-none\">\n                        <input type=\"checkbox\" id=\"remember\" name=\"remember\"\n                            class=\"w-3.5 h-3.5 text-pink-600 border-pink-300 rounded focus:ring-pink-500 accent-pink-600 cursor-pointer\">\n                        <span class=\"ml-2 text-[11px] font-medium text-gray-600\">Lembrar das minhas informa\u00E7\u00F5es</span>\n                    </label>\n                </div>\n\n                <button type=\"submit\"\n                    class=\"w-full bg-linear-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-2.5 rounded-xl shadow-md shadow-pink-500/20 active:scale-[0.98] transition duration-200 cursor-pointer flex items-center justify-center gap-2 group text-xs\">\n                    <span>Entrar no Jardim</span>\n                    <i class=\"fa-solid fa-arrow-right text-xs transition-transform duration-200 group-hover:translate-x-1\"\n                        aria-hidden=\"true\"></i>\n                </button>\n\n                <div class=\"relative my-2 flex items-center justify-center\">\n                    <div class=\"border-t border-gray-200 w-full\"></div>\n                    <span\n                        class=\"bg-white px-2 text-[10px] font-semibold text-gray-400 uppercase tracking-widest absolute\">Ou\n                        entre com</span>\n                </div>\n\n                <div class=\"grid grid-cols-2 gap-2.5\">\n                    <button type=\"button\"\n                        class=\"flex items-center justify-center gap-2 border border-gray-200 hover:border-pink-300 bg-white py-2 rounded-xl text-xs font-semibold text-gray-700 hover:bg-pink-50/50 transition shadow-sm\">\n                        <i class=\"fa-brands fa-google text-red-500 text-xs\"></i> Google\n                    </button>\n                    <button type=\"button\"\n                        class=\"flex items-center justify-center gap-2 border border-gray-200 hover:border-pink-300 bg-white py-2 rounded-xl text-xs font-semibold text-gray-700 hover:bg-pink-50/50 transition shadow-sm\">\n                        <i class=\"fa-brands fa-facebook text-blue-600 text-xs\"></i> Facebook\n                    </button>\n                </div>\n\n                <p class=\"text-center text-[11px] text-gray-600 mt-2\">\n                    Ainda n\u00E3o tem uma conta?\n                    <a routerLink=\"/cadastro\"\n                        class=\"font-bold text-pink-600 hover:text-pink-700 hover:underline transition\">\n                        Cadastre-se gratuitamente\n                    </a>\n                </p>\n            </form>\n\n        </div>\n    </div>\n</main>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Login, { className: "Login", filePath: "src/app/pages/login/login.ts", lineNumber: 17 }); })();
