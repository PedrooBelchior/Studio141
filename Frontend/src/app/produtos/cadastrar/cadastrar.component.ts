import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProdutoService } from '../shared/produto.service';
import { Produto } from '../shared/produto.model';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  @ViewChild('formProduto', { static: true }) formProduto: NgForm;

  request: Produto = {
    nome: null,
    marca: null,
    categoria: null,
    preco: null,
    descricao: null,
    palavraChave: null,
    quantidade: null,
    faq:
    {
      pergunta: null,
      resposta: null,
    }
    ,
    imagem: [null],
  };

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register(): void {
    if (this.formProduto.form.valid) {
      this.produtoService.createProduto(this.request).subscribe();
      this.router.navigate(['/produtos/listar']);
    }

  }

}
