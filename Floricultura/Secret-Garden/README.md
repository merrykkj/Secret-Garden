# 🌸 Secret Garden

> Uma experiência simples, agradável e intuitiva na escolha e compra de flores e produtos para diferentes ocasiões.

<p align="center">
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge" alt="Status Concluído">
</p>

---

## Sobre o Projeto

A Secret Garden é uma aplicação web que simula uma floricultura online. O projeto foi desenvolvido com foco em organização de componentes, design responsivo e uma interface visual delicada e elegante, alinhada à identidade de uma floricultura. 

Os usuários podem navegar livremente pelo catálogo, visualizar detalhes das flores e gerenciar suas compras de forma prática, com persistência de dados feita diretamente no navegador através do Local Storage.

---

## Funcionalidades

* **Catálogo de Produtos:** Navegação por diferentes tipos de flores e arranjos.
* **Visualização Detalhada:** Informações completas sobre os produtos disponíveis.
* **Gerenciamento do Carrinho:** 
  * Adicionar e remover produtos.
  * Alterar a quantidade de itens.
  * Cálculo dinâmico do valor total da compra.
* **Persistência de Dados:** O carrinho de compras é salvo no Local Storage, mantendo os itens mesmo após atualizar ou fechar a página.
* **Design Responsivo:** Interface totalmente adaptada para computadores, tablets e dispositivos móveis.
* **Arquitetura Modular:** Organização em componentes reutilizáveis utilizando o Angular.

---

## Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias e ferramentas:

* **HTML5** — Estruturação semântica das páginas.
* **Tailwind CSS** — Framework CSS para estilização ágil e responsiva.
* **Angular** — Framework para desenvolvimento da aplicação e componentização.
* **TypeScript** — Linguagem para lógica e tipagem estática.
* **Local Storage API** — Armazenamento local de dados do carrinho no navegador.

---

## Estrutura do Projeto

A organização de pastas segue os padrões recomendados do Angular para facilitar a manutenção e escalabilidade:

```text
src/
├── app/
│   ├── components/    # Componentes reutilizáveis (Navbar, Footer, Cards, etc.)
│   ├── models/        # Interfaces e tipagens (ex: Produto, ItemCarrinho)
│   ├── pages/         # Páginas da aplicação (Catálogo, Carrinho, Home)
│   ├── services/      # Lógica de negócio e gerenciamento do Local Storage
│   └── ...
├── assets/            # Imagens e recursos estáticos
└── styles.css         # Configurações globais e diretivas do Tailwind CSS
