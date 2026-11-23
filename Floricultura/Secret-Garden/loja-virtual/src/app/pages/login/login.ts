
import { Component, ChangeDetectorRef, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  emailInput = '';
  senhaInput = '';

  carregando = false;
  modalErroAberto = false;
  mensagemErro = '';

  efetuarLogin(): void {
    if (this.carregando) return;

    if (!this.emailInput.trim() || !this.senhaInput) {
      this.abrirModalErro('Preencha o e-mail e a senha para continuar.');
      return;
    }

    this.carregando = true;
    this.cdr.detectChanges();

    this.authService.login(
      this.emailInput.trim(),
      this.senhaInput
    ).subscribe({
      next: (usuario) => {
        this.carregando = false;

        if (usuario) {
          this.router.navigate(['/catalogo']);
        } else {
          this.abrirModalErro(
            'E-mail ou senha incorretos. Verifique seus dados e tente novamente.'
          );
        }

        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao realizar login:', erro);

        this.carregando = false;

        if (erro.status === 400 || erro.status === 401 || erro.status === 403) {
          this.abrirModalErro(
            'E-mail ou senha incorretos. Verifique seus dados e tente novamente.'
          );
        } else {
          this.abrirModalErro(
            'Não foi possível realizar o login. Tente novamente.'
          );
        }

        this.cdr.detectChanges();
      }
    });
  }

  abrirModalErro(mensagem: string): void {
    this.mensagemErro = mensagem;
    this.modalErroAberto = true;
    this.cdr.detectChanges();
  }

  fecharModalErro(): void {
    this.modalErroAberto = false;
    this.cdr.detectChanges();
  }
}
