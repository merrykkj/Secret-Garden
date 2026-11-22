
import { Component, OnInit, inject } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../services/produto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  styleUrl: './catalogo.css',
  templateUrl: './catalogo.html',
})
export class Catalogo implements OnInit {
  private produtoService = inject(ProdutoService);

  termoBusca: string = '';
  precoMaximo: number = 300;
  apenasDisponiveis: boolean = false;
  apenasPromocoes: boolean = false;
  ordenarPor: string = 'vendas';
  categoriaSelecionada: string = 'todos';

  lista: Produto[] = [];

  carregando: boolean = true;
  erroCarregamento: string = '';

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.carregando = true;
    this.erroCarregamento = '';

    this.produtoService.listarProdutos().subscribe({
      next: (produtos: Produto[]) => {
        this.lista = produtos;
        this.carregando = false;
        console.log('Produtos carregados:', produtos);
      },
      error: (erro) => {
        console.error('Erro ao carregar produtos:', erro);
        this.erroCarregamento = 'Não foi possível carregar os produtos.';
        this.carregando = false;
      }
    });
  }

  selecionarCategoria(categoria: string): void {
    this.categoriaSelecionada = categoria;
  }

  get listaFiltrada(): Produto[] {
    const termo = this.termoBusca.toLowerCase().trim();
    const maxPreco = Number(this.precoMaximo);

    let resultado = this.lista.filter(obj => {
      const correspondeBusca =
        !termo ||
        obj.nome.toLowerCase().includes(termo) ||
        obj.descritivo.toLowerCase().includes(termo);

      const precoAtual =
        obj.valorPromo > 0 ? obj.valorPromo : obj.valor;

      const correspondePreco = precoAtual <= maxPreco;

      const correspondeEstoque =
        !this.apenasDisponiveis || obj.quantidade > 0;

      const correspondePromo =
        !this.apenasPromocoes || obj.valorPromo > 0;

      let correspondeCategoria = true;

      if (this.categoriaSelecionada === 'buques') {
        correspondeCategoria = obj.nome.toLowerCase().includes('buquê');

      } else if (this.categoriaSelecionada === 'vasos') {
        const nomeLower = obj.nome.toLowerCase();

        correspondeCategoria =
          nomeLower.includes('vaso') ||
          nomeLower.includes('planta') ||
          nomeLower.includes('orquídea');

      } else if (this.categoriaSelecionada === 'especial') {
        correspondeCategoria = obj.destaque === 1;
      }

      return (
        correspondeBusca &&
        correspondePreco &&
        correspondeEstoque &&
        correspondePromo &&
        correspondeCategoria
      );
    });

    if (this.ordenarPor === 'menor') {
      resultado = [...resultado].sort((a, b) => {
        const precoA =
          a.valorPromo > 0 ? a.valorPromo : a.valor;

        const precoB =
          b.valorPromo > 0 ? b.valorPromo : b.valor;

        return precoA - precoB;
      });

    } else if (this.ordenarPor === 'maior') {
      resultado = [...resultado].sort((a, b) => {
        const precoA =
          a.valorPromo > 0 ? a.valorPromo : a.valor;

        const precoB =
          b.valorPromo > 0 ? b.valorPromo : b.valor;

        return precoB - precoA;
      });
    }

    return resultado;
  }
}
