import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  logout(): void {
    if (confirm(`Deseja realemente sair?`)){
    localStorage.clear();
    location.reload();
    }
  }

}
