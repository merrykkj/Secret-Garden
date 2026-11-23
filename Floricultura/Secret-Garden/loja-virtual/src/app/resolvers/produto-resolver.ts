
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { catchError, of } from 'rxjs';

import { Produto } from '../model/produto';
import { ProdutoService } from '../services/produto';

export const produtoResolver: ResolveFn<Produto[]> = () => {
  const produtoService = inject(ProdutoService);

  return produtoService.listarProdutos().pipe(
    catchError(erro => {
      console.error('Erro ao carregar produtos do catálogo:', erro);
      return of([] as Produto[]);
    })
  );
};
