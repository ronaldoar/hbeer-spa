import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserService } from 'src/app/core/current-user.service';
import { Usuario } from 'src/app/core/usuario-model';
import { Fornecedor } from '../../models/fornecedor-model';
import { EstoqueService } from '../services/estoque.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  user$: Observable<Usuario> | undefined;
  fornecedores: Fornecedor[] = [];

  constructor(private service: EstoqueService, private user: CurrentUserService) {
    this.user$ = this.user.getUser();
  }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.service.listarFornecedores().subscribe(resp => { this.fornecedores = resp });
  }

}
