export class Produto {
  nome: string;
  marca: string;
  categoria: string;
  preco: string;
  descricao: string;
  palavraChave: string;
  quantidade: number;
  faq:
    {
      pergunta: string,
      resposta: string,
    }
    ;
  imagem: [string];
}

// GET Produtos
export class ResponseProdutos {
  produtos: Produto[];
}

// GET Produto
export class ResponseProduto {
  data: Produto;
}
