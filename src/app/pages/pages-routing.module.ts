import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'src/shared/services/auth-guard.guard';
import { PageExibirCadastrosComponent } from './page-exibir-cadastros/page-exibir-cadastros.component';
import { PagesCadatrarComponent } from './pages-cadatrar/pages-cadatrar.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { CadastrosPdiComponent } from './cadastros-pdi/cadastros-pdi.component';
import { TelaPdiComponent } from './tela-pdi/tela-pdi.component';
import { TelaResponsavelComponent } from './tela-responsavel/tela-responsavel.component';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';

const routes: Routes = [
  { path: '', redirectTo: '/tela-inicial', pathMatch: 'full' },
  { path: 'tela-inicial', component: TelaInicialComponent },

  {
    path: 'tela-principal',
    component: TelaPrincipalComponent,
    canActivate: [authGuard],
    data: { roles: ['ADMIN'] },
  },

  {
    path: 'tela-pdi',
    component: TelaPdiComponent,
    canActivate: [authGuard],
    data: { roles: ['ADMIN', 'TEACHER'] },
  },

  {
    path: 'tela-responsavel',
    component: TelaResponsavelComponent,
    canActivate: [authGuard],
    data: { roles: ['ADMIN', 'GUARDIAN'] },
  },

  {
    path: 'cadastros-pdi/:id',
    component: CadastrosPdiComponent,
    canActivate: [authGuard],
    data: { roles: ['ADMIN', 'TEACHER'] },
  },

  {
    path: 'cadastrados/:type',
    component: PageExibirCadastrosComponent,
    canActivate: [authGuard],
    data: { roles: ['ADMIN'] },
  },

  {
    path: 'cadastrar/:type',
    component: PagesCadatrarComponent,
    canActivate: [authGuard],
    data: { roles: ['ADMIN'] },
  },

  {
    path: 'acesso-negado',
    component: AcessoNegadoComponent,
  },
  { path: '**', redirectTo: '/tela-inicial' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
