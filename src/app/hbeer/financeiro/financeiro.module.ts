import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagamentosComponent } from './pagamentos/pagamentos.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from 'src/app/header/header.module';
import { CoreModule } from 'src/app/core/core.module';

const router: Routes = [
  { path: '', component: PagamentosComponent }
];

@NgModule({
  declarations: [
    PagamentosComponent,
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    CoreModule,
    HeaderModule
  ]
})
export class FinanceiroModule { }
