import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../shared/produto.service';
import { ResponseProdutos } from '../shared/produto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  responseProdutos: ResponseProdutos[];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.listarTodas();
  }

  listarTodas() {
    this.produtoService.getProdutos().subscribe(response => this.responseProdutos = response);
  }

}
