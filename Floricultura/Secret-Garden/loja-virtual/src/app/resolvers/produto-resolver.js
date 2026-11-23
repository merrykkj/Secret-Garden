import { inject } from '@angular/core';
import { catchError, of } from 'rxjs';
import { ProdutoService } from '../services/produto';
export const produtoResolver = () => {
    const produtoService = inject(ProdutoService);
    return produtoService.listarProdutos().pipe(catchError(erro => {
        console.error('Erro ao carregar produtos do catálogo:', erro);
        return of([]);
    }));
};
