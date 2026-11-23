
import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  PLATFORM_ID,
  inject
} from '@angular/core';

import {
  CommonModule,
  isPlatformBrowser
} from '@angular/common';

import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../app/services/auth';

@Component({
  selector: 'app-meus-pedidos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './meus-pedidos.html'
})
export class MeusPedidos implements OnInit, OnDestroy {

  private readonly platformId = inject(PLATFORM_ID);
  private readonly authService = inject(AuthService);
  private readonly cdr = inject(ChangeDetectorRef);

  private usuarioSubscription?: Subscription;

  pedidos: any[] = [];
  codigoCliente: number | null = null;
  carregando = true;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.usuarioSubscription = this.authService.usuario$.subscribe({
      next: usuario => {
        this.codigoCliente = usuario?.codigo ?? null;
        this.carregarPedidos();
        this.carregando = false;
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao identificar usuário:', erro);
        this.codigoCliente = null;
        this.pedidos = [];
        this.carregando = false;
        this.cdr.detectChanges();
      }
    });
  }

  carregarPedidos(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (this.codigoCliente === null) {
      this.pedidos = [];
      return;
    }

    const chave = `meus_pedidos_${this.codigoCliente}`;

    try {
      const dados = localStorage.getItem(chave);
      const historico = dados ? JSON.parse(dados) : [];

      this.pedidos = Array.isArray(historico)
        ? historico
        : [];
    } catch (erro) {
      console.error('Erro ao carregar pedidos:', erro);
      this.pedidos = [];
    }
  }

  limparHistorico(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (this.codigoCliente === null) {
      return;
    }

    localStorage.removeItem(
      `meus_pedidos_${this.codigoCliente}`
    );

    this.pedidos = [];
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.usuarioSubscription?.unsubscribe();
  }
}
