import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutoService } from '../shared/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ResponseProdutos, Faq, Imagem, Produto } from '../shared/produto.model';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['../cadastrar/cadastrar.component.css']
})
export class EditarComponent implements OnInit {
  responseProdutos: ResponseProdutos[];
  faq: Faq = new Faq();
  imagem: Imagem = new Imagem();
  @ViewChild('formProduto', { static: true }) formProduto: NgForm;

  id: string;
  request: any;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarTodas();
    this.id = this.route.snapshot.paramMap.get('id');
    this.produtoService.getProduto(this.id).subscribe(response => this.request = response);
  }

  update(): void {
    if (this.formProduto.form.valid) {
      this.produtoService.updateProduto(this.id, this.request).subscribe();
      this.router.navigate(['/produtos']);
      this.listarTodas();
    }
  }

  faqs(): void {
    this.request.faq.push(this.faq);
    console.log(this.request.faq);
    this.faq = new Faq();
  }

  listarTodas() {
    this.produtoService.getProdutos().subscribe(response => this.responseProdutos = response);
  }
}
