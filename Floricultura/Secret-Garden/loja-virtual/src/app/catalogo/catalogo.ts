
import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  RouterLink
} from '@angular/router';

import { Produto } from '../model/produto';
import { ProdutoService } from '../services/produto';

import {
  Subject,
  of,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  takeUntil,
  catchError,
  map
} from 'rxjs';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  styleUrl: './catalogo.css',
  templateUrl: './catalogo.html',
})
export class Catalogo implements OnInit, OnDestroy {
  private produtoService = inject(ProdutoService);
  private route = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef);

  private busca$ = new Subject<string>();
  private destruir$ = new Subject<void>();

  private _termoBusca: string = '';

  get termoBusca(): string {
    return this._termoBusca;
  }

  set termoBusca(valor: string) {
    const novoValor = valor ?? '';

    if (this._termoBusca !== novoValor) {
      this._termoBusca = novoValor;
      this.busca$.next(novoValor);
    }
  }

  precoMaximo: number = 300;
  apenasDisponiveis: boolean = false;
  apenasPromocoes: boolean = false;
  ordenarPor: string = 'vendas';
  categoriaSelecionada: string = 'todos';

  lista: Produto[] = [];

  carregando: boolean = false;
  erroCarregamento: string = '';

  ngOnInit(): void {
    const produtos = this.route.snapshot.data['produtos'] as Produto[];

    this.lista = Array.isArray(produtos)
      ? [...produtos]
      : [];

    this.carregando = false;

    this.busca$
      .pipe(
        map(termo => termo.trim()),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(termo => {
          this.carregando = true;
          this.erroCarregamento = '';
          this.cdr.detectChanges();

          const requisicao = termo
            ? this.produtoService.buscarProdutos(termo)
            : this.produtoService.listarProdutos();

          return requisicao.pipe(
            map(resultado => ({
              produtos: resultado,
              erro: false
            })),
            catchError(erro => {
              console.error('Erro ao buscar produtos:', erro);

              return of({
                produtos: this.lista,
                erro: true
              });
            })
          );
        }),
        takeUntil(this.destruir$)
      )
      .subscribe(resultado => {
        if (resultado.erro) {
          this.erroCarregamento =
            'Não foi possível atualizar os produtos. Tente novamente.';
        } else {
          this.lista = Array.isArray(resultado.produtos)
            ? [...resultado.produtos]
            : [];

          this.erroCarregamento = '';
        }

        this.carregando = false;
        this.cdr.detectChanges();
      });

    this.cdr.detectChanges();
  }

  carregarProdutos(): void {
    this.busca$.next(this.termoBusca);
  }

  pesquisarProdutos(): void {
    this.busca$.next(this.termoBusca);
  }

  selecionarCategoria(categoria: string): void {
    this.categoriaSelecionada = categoria;
  }

  private obterPreco(produto: Produto): number {
    const valor = Number(produto.valor);
    const valorPromo = Number(produto.valorPromo);

    if (Number.isFinite(valorPromo) && valorPromo > 0) {
      return valorPromo;
    }

    return Number.isFinite(valor) ? valor : 0;
  }

  get listaFiltrada(): Produto[] {
    const maxPreco = Number(this.precoMaximo);

    let resultado = this.lista.filter(produto => {
      const nome = String(produto.nome ?? '').toLowerCase();
      const precoAtual = this.obterPreco(produto);

      const correspondePreco =
        !Number.isFinite(maxPreco) ||
        precoAtual <= maxPreco;

      const correspondeEstoque =
        !this.apenasDisponiveis ||
        Number(produto.quantidade) > 0;

      const correspondePromo =
        !this.apenasPromocoes ||
        Number(produto.valorPromo) > 0;

      let correspondeCategoria = true;

      if (this.categoriaSelecionada === 'buques') {
        correspondeCategoria =
          nome.includes('buquê') ||
          nome.includes('buque');

      } else if (this.categoriaSelecionada === 'vasos') {
        correspondeCategoria =
          nome.includes('vaso') ||
          nome.includes('planta') ||
          nome.includes('orquídea') ||
          nome.includes('orquidea');

      } else if (this.categoriaSelecionada === 'especial') {
        correspondeCategoria =
          Number(produto.destaque) === 1;
      }

      return (
        correspondePreco &&
        correspondeEstoque &&
        correspondePromo &&
        correspondeCategoria
      );
    });

    if (this.ordenarPor === 'menor') {
      resultado = [...resultado].sort(
        (a, b) => this.obterPreco(a) - this.obterPreco(b)
      );

    } else if (this.ordenarPor === 'maior') {
      resultado = [...resultado].sort(
        (a, b) => this.obterPreco(b) - this.obterPreco(a)
      );
    }

    return resultado;
  }

  ngOnDestroy(): void {
    this.destruir$.next();
    this.destruir$.complete();
  }
}
