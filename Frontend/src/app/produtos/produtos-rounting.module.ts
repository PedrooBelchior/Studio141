import { EstoquistaEditarComponent } from './estoquista/estoquista-editar/estoquista-editar.component';
import { EstoquistaComponent } from './estoquista/estoquista.component';
import { VisualizarComponent } from './visualizar/visualizar.component';
import { Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EditarComponent } from './editar/editar.component';
import { HomeComponent } from './home/home.component';
import { PaginaProdutoComponent } from './pagina-produto/pagina-produto.component';


export const ProdutosRoutes: Routes = [
  {
    path: 'produtos',
    redirectTo: 'produtos/listar'

  },
  {
    path: 'produtos/listar',
    component: ListarComponent

  },
  {
    path: 'produtos/cadastrar',
    component: CadastrarComponent

  },
  {
    path: 'produtos/editar/:id',
    component: EditarComponent

  },

  {
    path: 'produtos/visualizar/:id',
    component: VisualizarComponent

  },

  {
    path: 'estoquista/listar',
    component: EstoquistaComponent
  },
  {
    path: 'estoquista/editar/:id',
    component: EstoquistaEditarComponent

  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'produto/:id',
    component: PaginaProdutoComponent
  },



];
