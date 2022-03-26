import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuApp: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuApp = this.buildAppMenus();
  }


  buildAppMenus(): string[] {
    return ['/dashboard', '/estoque', '/cliente', '/financeiro', '/delivery', '/configuracoes'];
  }

}
