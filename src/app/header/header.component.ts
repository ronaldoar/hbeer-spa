import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserService } from '../core/current-user.service';
import { Usuario } from '../core/usuario-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$: Observable<Usuario> | undefined;
  menuApp: string[] = [];

  constructor(private user: CurrentUserService) {
    this.user$ = this.user.getUser();
  }

  ngOnInit(): void {
    this.menuApp = this.buildAppMenus();
  }


  buildAppMenus(): string[] {
    return ['/dashboard', '/estoque', '/cliente', '/financeiro', '/delivery', '/configuracoes'];
  }

}
