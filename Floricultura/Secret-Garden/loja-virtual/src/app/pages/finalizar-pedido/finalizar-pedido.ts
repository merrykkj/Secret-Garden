
import {
  Component,
  ChangeDetectorRef,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { CarrinhoService } from '../../services/carrinho';
import { PedidoService } from '../../services/pedido';
import { AuthService } from '../../services/auth';

import { take } from 'rxjs';

@Component({
  selector: 'app-finalizar-pedido',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './finalizar-pedido.html',
  styleUrl: './finalizar-pedido.css'
})
export class FinalizarPedido {

  private pedidoService = inject(PedidoService);
  private authService = inject(AuthService);
  private cdr = inject(ChangeDetectorRef);

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

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  calcularTotalFinal(): number {
    const subtotal = this.carrinhoService.obterTotal();

    let total = subtotal + this.taxaEntrega;

    if (this.dadosPedido.pagamento === 'pix') {
      total -= subtotal * 0.05;
    }

    return Math.max(0, total);
  }

  finalizarCompra(): void {

    if (this.carregando || this.pedidoConcluido) {
      return;
    }

    this.carregando = true;
    this.cdr.detectChanges();

    this.authService.usuario$
      .pipe(take(1))
      .subscribe({
        next: usuario => {

          if (!usuario?.codigo) {
            this.carregando = false;
            this.cdr.detectChanges();

            alert('Faça login antes de finalizar a compra.');
            this.router.navigate(['/login']);
            return;
          }

          const itens = this.carrinhoService.obterItens();

          if (itens.length === 0) {
            this.carregando = false;
            this.cdr.detectChanges();

            alert('Seu carrinho está vazio.');
            return;
          }

          const totalFinal = this.calcularTotalFinal();
          const pagamento = this.dadosPedido.pagamento;

          const itensPedido = itens.map(item => ({
            ...item,
            produto: { ...item.produto }
          }));

          const pedido = {
            valorTotal: totalFinal,
            entrega:
              `${this.dadosPedido.endereco}, ` +
              `${this.dadosPedido.numero} - ` +
              `${this.dadosPedido.bairro}, ` +
              `${this.dadosPedido.cidade} - ` +
              `CEP: ${this.dadosPedido.cep}`,
            obs: `Pagamento: ${pagamento}`,
            dataPedido: new Date().toISOString().split('T')[0],
            codigoCliente: usuario.codigo
          };

          this.pedidoService.cadastrar(pedido).subscribe({
            next: () => {

              const novoPedido = {
                id: Math.floor(
                  100000 + Math.random() * 900000
                ),
                data: new Date().toLocaleDateString('pt-BR'),
                itens: itensPedido,
                totalFinal: totalFinal,
                pagamento: pagamento,
                status: 'Em andamento'
              };

              try {
                const chavePedidos =
                  `meus_pedidos_${usuario.codigo}`;

                const pedidosSalvos = JSON.parse(
                  localStorage.getItem(chavePedidos) || '[]'
                );

                pedidosSalvos.unshift(novoPedido);

                localStorage.setItem(
                  chavePedidos,
                  JSON.stringify(pedidosSalvos)
                );

              } catch (erro) {
                console.error(
                  'Pedido registrado na API, mas houve erro ao salvar o histórico local:',
                  erro
                );
              }

              this.pedidoConcluido = true;
              this.carregando = false;

              this.carrinhoService.limparCarrinho();

              this.cdr.detectChanges();
            },

            error: erro => {
              console.error(
                'Erro ao registrar pedido:',
                erro
              );

              this.carregando = false;
              this.cdr.detectChanges();

              alert(
                'Não foi possível finalizar o pedido. Tente novamente.'
              );
            }
          });
        },

        error: erro => {
          console.error(
            'Erro ao verificar usuário:',
            erro
          );

          this.carregando = false;
          this.cdr.detectChanges();

          alert(
            'Não foi possível verificar seu login.'
          );
        }
      });
  }

  fecharModalEVoltar(): void {
    this.router.navigate(['/catalogo']);
  }
}
