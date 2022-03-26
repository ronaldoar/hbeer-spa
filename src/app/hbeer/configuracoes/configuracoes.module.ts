import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParametrosComponent } from './parametros/parametros.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from 'src/app/header/header.module';
import { CoreModule } from 'src/app/core/core.module';

const router: Routes = [
  { path: '', component: ParametrosComponent }
];

@NgModule({
  declarations: [
    ParametrosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    CoreModule,
    HeaderModule
  ]
})
export class ConfiguracoesModule { }
