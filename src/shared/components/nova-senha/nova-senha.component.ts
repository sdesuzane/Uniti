import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificacoesService } from 'src/shared/services/notificacoes.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginCadastroService } from 'src/shared/services/login-cadastro.service';

@Component({
  selector: 'app-nova-senha',
  templateUrl: './nova-senha.component.html',
  styleUrls: ['./nova-senha.component.scss'],
})
export class NovaSenhaComponent {
  public formulario: FormGroup;
  public loading = false;
  public passwordValid = false;
  public senhasIguais = true;
  public showError = false;
  public api_path = '';

  private readonly passwordPattern: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[0-9a-zA-Z@$!%*?&#]{6,}$/;

  constructor(
    private formBuilder: FormBuilder,
    private notificacoesService: NotificacoesService,
    private dialogRef: MatDialogRef<NovaSenhaComponent>,
    private http: HttpClient,
    private loginCadastroService: LoginCadastroService

  ) {
    this.formulario = this.formBuilder.group({
      password: [
        null,
        [
          Validators.required,
          Validators.pattern(this.passwordPattern),
        ],
      ],
      confirmPassword: [null, [Validators.required]],
    });

    this.formulario.get('password')?.valueChanges.subscribe((value) => {
      this.passwordValid = this.formulario.get('password')?.valid || false;
    });

    this.formulario.valueChanges.subscribe(() => {
      this.senhasIguais =
        this.formulario.get('password')?.value === this.formulario.get('confirmPassword')?.value;
    });
    this.api_path = environment.urlBase;
  }

  public init(): void {
    this.formulario.reset();
  }

  public submit(): void {
    this.formulario.markAllAsTouched();

    if (this.formulario.valid && this.senhasIguais) {
      this.loading = true;
      this.showError = false;

      const newPassword = this.formulario.get('password')?.value;

      this.loginCadastroService.changePassword(newPassword).subscribe({
        next: () => {
          this.loading = false;
          setTimeout(() => this.closeModal(), 1500);
        },
        error: () => {
          this.loading = false;
        },
      });
    } else {
      this.showError = true;
    }
  }


  public closeModal(): void {
    this.dialogRef.close();
  }
}
