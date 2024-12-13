import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginCadastroService } from 'src/shared/services/login-cadastro.service';
import { finalize } from 'rxjs/operators';
import { NotificacoesService } from 'src/shared/services/notificacoes.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss'],
})
export class ModalLoginComponent {
  public formulario: FormGroup;
  public showError = false;
  public loading = false;

  constructor(
    public dialogRef: MatDialogRef<ModalLoginComponent>,
    private formBuilder: FormBuilder,
    private loginCadastroService: LoginCadastroService,
    private notificacoesService: NotificacoesService
  ) {

    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }



  public init(): void {
    this.formulario.reset();
  }


  public submit(): void {
    this.formulario.markAllAsTouched();
    if (this.formulario.valid) {
      this.loading = true;
      const payload = {
        email: this.formulario.value.email,
        password: this.formulario.value.password,
      };

      this.loginCadastroService
        .login(payload)
        .pipe(
          finalize(() => {
            this.loading = false;
            this.reset();
          })
        )
        .subscribe({
          next: () => {
            this.showError = false;
          },
          error: (error) => this.handleError(error),
        });
    }
  }

  private handleError(error: any): void {
    if (error.status === 404 || error.status === 500) {
      this.showError = true;
    } else {
      const errorMessage = error.error?.message || 'Erro desconhecido';
      this.notificacoesService.showError(errorMessage);
    }
  }

  private reset(): void {
    this.formulario.reset();
  }

  public closeModal(): void {
    this.dialogRef.close();
  }
}
