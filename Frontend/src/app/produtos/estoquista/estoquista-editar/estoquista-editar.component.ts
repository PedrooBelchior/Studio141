import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProdutoService } from '../../shared/produto.service';

@Component({
  selector: 'app-editar',
  templateUrl: './estoquista-editar.component.html',
  styleUrls: ['../../cadastrar/cadastrar.component.css']
})
export class EstoquistaEditarComponent implements OnInit {

  @ViewChild('formProduto', { static: true }) formProduto: NgForm;

  id: string;
  request: any;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.produtoService.getProduto(this.id).subscribe(response => this.request = response);
  }

  update(): void {
    if (this.formProduto.form.valid) {
      this.produtoService.updateProduto(this.id, this.request).subscribe();
      this.router.navigate(['/produtos']);
    }
  }

}



// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-estoquista-editar',
//   templateUrl: './estoquista-editar.component.html',
//   styleUrls: ['./estoquista-editar.component.css']
// })
// export class EstoquistaEditarComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
