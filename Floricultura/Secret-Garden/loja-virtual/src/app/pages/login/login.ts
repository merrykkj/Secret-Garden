
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    RouterLink
  ],
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  emailInput: string = '';
  senhaInput: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  efetuarLogin(): void {
    if (!this.emailInput.trim() || !this.senhaInput) {
      alert('Preencha o e-mail e a senha.');
      return;
    }

    this.authService.login(this.emailInput.trim(), this.senhaInput).subscribe({
      next: (usuario) => {
        if (usuario) {
          this.router.navigate(['/catalogo']);
        } else {
          alert('E-mail ou senha incorretos.');
        }
      },
      error: (erro) => {
        console.error('Erro ao realizar login:', erro);
        alert('Não foi possível realizar o login. Tente novamente.');
      }
    });
  }
}
