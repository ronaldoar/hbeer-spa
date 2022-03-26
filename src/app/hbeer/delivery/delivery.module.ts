import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrosComponent } from './registros/registros.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from 'src/app/header/header.module';
import { HomeComponent } from '../dashboard/home/home.component';

const router: Routes = [
  { path: '', component: RegistrosComponent }
];

@NgModule({
  declarations: [
    RegistrosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    HeaderModule
  ]
})
export class DeliveryModule { }
