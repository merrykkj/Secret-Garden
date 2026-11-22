
import { Component, inject } from '@angular/core';
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
export class Cadastro {
  private clienteService = inject(ClienteService);
  private router = inject(Router);

  nome = '';
  email = '';
  documento = '';
  senha = '';
  confirmarSenha = '';

  carregando = false;
  mensagemErro = '';

  cadastrar(): void {
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

    if (this.carregando) return;

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
}
