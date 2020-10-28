import { Component, OnInit, ViewChild } from '@angular/core';
import { ResponseUsers } from '../shared/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-editar',
  templateUrl: './users-editar.component.html',
  styleUrls: ['./users-editar.component.css']
})
export class UsersEditarComponent implements OnInit {

  responseUsers: ResponseUsers[];

  itemSelected: any;
  @ViewChild('formProduto', { static: true }) formProduto: NgForm;

  id: string;
  request: any;

  constructor(
    private produtoService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarTodas();
    this.id = this.route.snapshot.paramMap.get('id');
    this.produtoService.getUser(this.id).subscribe(response => this.request = response);
  }

  update(): void {
    if (this.formProduto.form.valid) {
      this.produtoService.updateUser(this.id, this.request).subscribe();
      this.router.navigate(['/users/listar']);
      this.listarTodas();
    }
  }

  listarTodas() {
    this.produtoService.getUsers().subscribe(response => this.responseUsers = response);
  }

}
