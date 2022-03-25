import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagamentosComponent } from './pagamentos/pagamentos.component';
import { RegistrarComponent } from './registrar/registrar.component';



@NgModule({
  declarations: [
    PagamentosComponent,
    RegistrarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FinanceiroModule { }
