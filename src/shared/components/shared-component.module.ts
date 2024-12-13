import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { ButtonTelaInicialComponent } from './button-tela-inicial/button-tela-inicial.component';
import { ButtonComponent } from './button/button.component';
import { ContentTelaComponent } from './content-tela/content-tela.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormularioEstudanteComponent } from './formulario-estudante/formulario-estudante.component';
import { FormularioTurmasComponent } from './formulario-turmas/formulario-turmas.component';
import { ImagemTelaComponent } from './imagem-tela/imagem-tela.component';
import { InputFieldComponent } from './input-component/input-component.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { OpcoesMenuLateralComponent } from './opcoes-menu-lateral/opcoes-menu-lateral.component';
import { SelectComponent } from './select/select.component';
import { FormularioDocenteComponent } from './formulario-docente/formulario-docente.component';
import { FormularioPdiComponent } from './formulario-pdi/formulario-pdi.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CampoConsideracoesComponent } from './campo-consideracoes/campo-consideracoes.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { provideNgxMask } from 'ngx-mask';
import { NovaSenhaComponent } from './nova-senha/nova-senha.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputFieldComponent,
    MenuLateralComponent,
    OpcoesMenuLateralComponent,
    ImagemTelaComponent,
    ContentTelaComponent,
    ButtonTelaInicialComponent,
    SelectComponent,
    FormularioEstudanteComponent,
    DialogComponent,
    FormularioTurmasComponent,
    FormularioDocenteComponent,
    ProgressBarComponent,
    FormularioPdiComponent,
    CampoConsideracoesComponent,
    ModalLoginComponent,
    NovaSenhaComponent,
  ],
    imports: [
      CommonModule,
      RouterModule,
      ReactiveFormsModule,
      AngularToastifyModule,
      MatSnackBarModule,
      MatProgressBarModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatProgressSpinnerModule,
      MatInputModule,
      MatFormFieldModule,
      MatSelectModule,
      MatButtonModule,
      FormsModule,
      NgxMaskDirective,
      NgxMaskPipe,
      MatDialogModule,
      MatProgressSpinnerModule

    ],
  exports: [
    ButtonComponent,
    InputFieldComponent,
    MenuLateralComponent,
    ImagemTelaComponent,
    ContentTelaComponent,
    ButtonTelaInicialComponent,
    SelectComponent,
    FormularioEstudanteComponent,
    DialogComponent,
    FormularioTurmasComponent,
    FormularioDocenteComponent,
    FormularioPdiComponent,
    CampoConsideracoesComponent,
    ProgressBarComponent,
    MatDialogModule
  ],
  providers:[
    ToastService,
    provideNgxMask(),
  ]
})
export class SharedComponentModule{}
