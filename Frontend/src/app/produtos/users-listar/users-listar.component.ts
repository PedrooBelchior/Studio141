import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../shared/produto.service';
import { UserService } from '../shared/user.service';
import { ResponseUsers, User } from '../shared/user.model';
import { ResponseProdutos } from '../shared/produto.model';


@Component({
  selector: 'app-listar',
  templateUrl: './users-listar.component.html',
  styleUrls: ['./users-listar.component.css']
})
export class UsersListarComponent implements OnInit {

  responseUsers: ResponseUsers[];
  id: string;
  request: User = {
    _id: null,
    usuario: null,
    senha: null,
    tipo: null,
    nome: null,
    statusUsuario: null,
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.listarTodas();
  }

  listarTodas() {
    this.userService.getUsers().subscribe(response => this.responseUsers = response);
  }

  remover(_id: string, nome: string) {
    if (confirm(`Deseja remover o usuário ${nome}?`)) {
      this.userService.deleteUser(_id).subscribe();
      this.listarTodas();
      location.reload();
    }
  }
}
