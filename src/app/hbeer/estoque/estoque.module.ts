import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from 'src/app/header/header.module';
import { CoreModule } from 'src/app/core/core.module';
import { EstoqueService } from './services/estoque.service';

const router: Routes = [
  { path: '', component: ListarComponent }
];

@NgModule({
  declarations: [
    ListarComponent,
    CadastrarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    CoreModule,
    HeaderModule
  ],
  providers: [
    EstoqueService
  ]
})
export class EstoqueModule { }
