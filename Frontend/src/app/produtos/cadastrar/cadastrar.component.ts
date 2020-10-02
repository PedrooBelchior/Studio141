import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProdutoService } from '../shared/produto.service';
import { Produto, ResponseProdutos, Faq, Imagem } from '../shared/produto.model';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  responseProdutos: ResponseProdutos[];
  faq: Faq = new Faq();
  imagem: Imagem = new Imagem();
  @ViewChild('formProduto', { static: true }) formProduto: NgForm;

  request: Produto = {
    _id: null,
    nome: null,
    marca: null,
    categoria: null,
    preco: null,
    descricao: null,
    palavraChave: null,
    quantidade: null,
    faq: [],
    imagem: [],
  };

  faqs(): void {
    this.request.faq.push(this.faq);
    console.log(this.request.faq);
    this.faq = new Faq();
  }

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  listarTodas() {
    this.produtoService.getProdutos().subscribe(response => this.responseProdutos = response);
  }
  register(): void {
    if (this.formProduto.form.valid) {
      this.produtoService.createProduto(this.request).subscribe();
      this.router.navigate(['/produtos/listar']);
      this.listarTodas();

    }
  }
}

