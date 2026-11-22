
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-meus-pedidos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './meus-pedidos.html'
})
export class MeusPedidos implements OnInit {
  pedidos: any[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.carregarPedidos();
    }
  }

  carregarPedidos() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const dados = localStorage.getItem('meus_pedidos');

    if (dados) {
      this.pedidos = JSON.parse(dados);
    }
  }

  limparHistorico() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    localStorage.removeItem('meus_pedidos');
    this.pedidos = [];
  }
}
