
import {
  Component,
  ChangeDetectorRef,
  OnDestroy,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ClienteService } from '../../services/cliente';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro implements OnDestroy {
  private clienteService = inject(ClienteService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  private temporizador?: ReturnType<typeof setTimeout>;

  nome = '';
  email = '';
  documento = '';
  senha = '';
  confirmarSenha = '';

  carregando = false;
  mensagemErro = '';
  cadastroConcluido = false;

  cadastrar(): void {
    if (this.carregando || this.cadastroConcluido) return;

    this.mensagemErro = '';

    if (
      !this.nome.trim() ||
      !this.email.trim() ||
      !this.documento.trim() ||
      !this.senha
    ) {
      this.mensagemErro = 'Preencha todos os campos.';
      return;
    }

    if (this.senha !== this.confirmarSenha) {
      this.mensagemErro = 'As senhas não coincidem.';
      return;
    }

    this.carregando = true;
    this.cdr.detectChanges();

    this.clienteService.cadastrar({
      nome: this.nome.trim(),
      email: this.email.trim(),
      documento: this.documento.trim(),
      senha: this.senha,
      ativo: 1
    }).subscribe({
      next: () => {
        this.carregando = false;
        this.cadastroConcluido = true;

        this.cdr.detectChanges();

        this.temporizador = setTimeout(() => {
          this.cadastroConcluido = false;
          this.cdr.detectChanges();
          this.router.navigate(['/login']);
        }, 3000);
      },

      error: (erro) => {
        console.error('Erro ao cadastrar cliente:', erro);

        this.mensagemErro =
          'Não foi possível realizar o cadastro.';

        this.carregando = false;
        this.cdr.detectChanges();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.temporizador) {
      clearTimeout(this.temporizador);
    }
  }
}
