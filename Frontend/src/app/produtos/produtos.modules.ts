import { CheckoutComponent } from './checkout/checkout.component';
import { UsersCadastrarComponent } from './users-cadastrar/users-cadastrar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// MDB Angular Free
import { ModalModule, WavesModule, InputsModule, ButtonsModule, ModalDirective } from 'angular-bootstrap-md';

import { ProdutoService } from './shared/produto.service';
import { UserService } from './shared/user.service';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EditarComponent } from './editar/editar.component';
import { VisualizarComponent } from './visualizar/visualizar.component';
import { EstoquistaEditarComponent } from './estoquista/estoquista-editar/estoquista-editar.component';
import { EstoquistaComponent } from './estoquista/estoquista.component';
import { HomeComponent } from './home/home.component';
import { PaginaProdutoComponent } from './pagina-produto/pagina-produto.component';
import { UsersListarComponent } from './users-listar/users-listar.component';
import { UsersEditarComponent } from './users-editar/users-editar.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [ListarComponent,
    CadastrarComponent,
    EditarComponent,
    VisualizarComponent,
    EstoquistaComponent,
    EstoquistaEditarComponent,
    HomeComponent,
    PaginaProdutoComponent,
    UsersListarComponent,
    UsersEditarComponent,
    UsersCadastrarComponent,
    LoginComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ModalModule,
    WavesModule,
    InputsModule,
    ButtonsModule
  ],
  providers: [
    ProdutoService,
    UserService,
    RouterModule,
    ModalDirective,

  ]
})
export class ProdutosModule { }
