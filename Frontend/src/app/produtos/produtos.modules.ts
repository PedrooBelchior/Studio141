import { EstoquistaEditarComponent } from './estoquista/estoquista-editar/estoquista-editar.component';
import { EstoquistaComponent } from './estoquista/estoquista.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProdutoService } from './shared/produto.service';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EditarComponent } from './editar/editar.component';
import { VisualizarComponent } from './visualizar/visualizar.component';
import { HomeComponent } from './home/home.component';
import { PaginaProdutoComponent } from './pagina-produto/pagina-produto.component';

@NgModule({
  declarations: [ListarComponent,
    CadastrarComponent,
    EditarComponent,
    VisualizarComponent,
    EstoquistaComponent,
    EstoquistaEditarComponent,
    HomeComponent,
    PaginaProdutoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    ProdutoService,
    RouterModule
  ]
})
export class ProdutosModule { }
