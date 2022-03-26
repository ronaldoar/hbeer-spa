import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/auth-guard.service';

const routes: Routes = [

  {
    path: 'dashboard',
    loadChildren: () => import('./hbeer/dashboard/dashboard.module').then(d => d.DashboardModule),
    canActivate: [AuthGuardService],
    data: { roles: ["hbeer"] }
  },
  {
    path: 'estoque',
    loadChildren: () => import('./hbeer/estoque/estoque.module').then(e => e.EstoqueModule),
    canActivate: [AuthGuardService],
    data: { roles: ["hbeer"] }
  },
  {
    path: 'cliente',
    loadChildren: () => import('./hbeer/clientes/clientes.module').then(c => c.ClientesModule),
    canActivate: [AuthGuardService],
    data: { roles: ["hbeer"] }
  },
  {
    path: 'financeiro',
    loadChildren: () => import('./hbeer/financeiro/financeiro.module').then(f => f.FinanceiroModule),
    canActivate: [AuthGuardService],
    data: { roles: ["hbeer"] }
  },
  {
    path: 'delivery',
    loadChildren: () => import('./hbeer/delivery/delivery.module').then(d => d.DeliveryModule),
    canActivate: [AuthGuardService],
    data: { roles: ["hbeer"] }
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./hbeer/configuracoes/configuracoes.module').then(c => c.ConfiguracoesModule),
    canActivate: [AuthGuardService],
    data: { roles: ["admin"] }
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
