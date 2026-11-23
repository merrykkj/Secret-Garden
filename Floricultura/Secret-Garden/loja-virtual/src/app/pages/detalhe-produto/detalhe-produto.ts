
import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { Produto } from '../../model/produto';
import { CarrinhoService } from '../../services/carrinho';
import { AuthService } from '../../services/auth';
import { ProdutoService } from '../../services/produto';

@Component({
  selector: 'app-detalhe-produto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalhe-produto.html',
  styleUrl: './detalhe-produto.css'
})
export class DetalheProduto implements OnInit {

  produto?: Produto;

  qtdSelecionada: number = 1;
  adicionadoComSucesso: boolean = false;

  erroCarregamento: string = '';
  carregando: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carrinhoService: CarrinhoService,
    private authService: AuthService,
    private produtoService: ProdutoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const codigoParam = this.route.snapshot.paramMap.get('codigo');

    if (!codigoParam) {
      this.erroCarregamento = 'Código do produto não informado.';
      this.carregando = false;
      return;
    }

    const codigoNumero = Number(codigoParam);

    if (!Number.isInteger(codigoNumero) || codigoNumero <= 0) {
      this.erroCarregamento = 'Código de produto inválido.';
      this.carregando = false;
      return;
    }

    this.produtoService.buscarPorCodigo(codigoNumero).subscribe({
      next: (produto: Produto) => {
        console.log('Produto recebido:', produto);

        if (produto && produto.codigo) {
          this.produto = produto;
          this.erroCarregamento = '';
        } else {
          this.produto = undefined;
          this.erroCarregamento = 'Produto não encontrado.';
        }

        this.carregando = false;
        this.cdr.detectChanges();
      },

      error: (erro) => {
        console.error('Erro ao carregar produto:', erro);

        this.produto = undefined;
        this.erroCarregamento = 'Não foi possível carregar o produto.';
        this.carregando = false;

        this.cdr.detectChanges();
      }
    });
  }

  incrementar(): void {
    if (
      this.produto &&
      this.qtdSelecionada < this.produto.quantidade
    ) {
      this.qtdSelecionada++;
    }
  }

  decrementar(): void {
    if (this.qtdSelecionada > 1) {
      this.qtdSelecionada--;
    }
  }

  adicionarAoCarrinho(): void {
    if (!this.produto || this.produto.quantidade <= 0) {
      return;
    }

    let temUsuario = false;

    this.authService.usuario$
      .subscribe(usuario => {
        temUsuario = !!usuario;
      })
      .unsubscribe();

    if (!temUsuario) {
      this.router.navigate(['/login']);
      return;
    }

    this.carrinhoService.adicionar(
      this.produto,
      this.qtdSelecionada
    );

    this.adicionadoComSucesso = true;

    setTimeout(() => {
      this.adicionadoComSucesso = false;
      this.cdr.detectChanges();
    }, 2500);
  }
}
