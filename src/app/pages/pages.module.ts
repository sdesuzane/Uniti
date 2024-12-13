import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { SharedComponentModule } from 'src/shared/components/shared-component.module';
import { PageExibirCadastrosComponent } from './page-exibir-cadastros/page-exibir-cadastros.component';
import { PagesCadatrarComponent } from './pages-cadatrar/pages-cadatrar.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaPdiComponent } from './tela-pdi/tela-pdi.component';
import { ButtonVoltarComponent } from 'src/shared/components/button-voltar/button-voltar.component';
import { CadastrosPdiComponent } from './cadastros-pdi/cadastros-pdi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TelaResponsavelComponent } from './tela-responsavel/tela-responsavel.component';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';

@NgModule({
  declarations: [
    PageExibirCadastrosComponent,
    PagesCadatrarComponent,
    TelaInicialComponent,
    TelaPdiComponent,
    ButtonVoltarComponent,
    TelaResponsavelComponent,
    CadastrosPdiComponent,
    AcessoNegadoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularToastifyModule,
    SharedComponentModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [ToastService],
})
export class PagesModule {}
