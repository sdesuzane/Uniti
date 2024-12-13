import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotificacoesService } from 'src/shared/services/notificacoes.service';
import { CadastrarService } from 'src/shared/services/cadastrar.service';
import { createDefaultStudentPayload } from 'src/shared/models/default-payload.interface';
import { Router } from '@angular/router';
import { FormularioService } from 'src/shared/services/formulario.service';

@Component({
  selector: 'app-formulario-estudante',
  templateUrl: './formulario-estudante.component.html',
  styleUrls: ['./formulario-estudante.component.scss'],
})

export class FormularioEstudanteComponent implements OnInit {
  public dataTurma: { value: string; label: string }[] = [];
  public showError = false;
  public isOpen = false;
  public loading = false;
  public errorMessage = '';
  public isDialogOpen = false;

  public formulario = this.formBuilder.group({
    name: ['', [Validators.required]],
    registration: [null, [Validators.required, Validators.maxLength(10), Validators.pattern(/^\d{1,10}$/)]],
    schoolClassIds: [[] as number[], [Validators.required]],
    cpf: [null, [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private notificacoesService: NotificacoesService,
    private cadastrarService: CadastrarService,
    private router: Router,
    private formularioService: FormularioService
  ) {
    this.formulario.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        this.showError = false;
      }
    });
  }

  ngOnInit(): void {
    this.loading = true;

    this.formularioService.getFormAllClasses().subscribe({
      next: (response) => {
        if (response.sucess) {
          this.dataTurma = response.data.map((classe) => ({
            value: classe.id.toString(),
            label: classe.identifier,
          }));
        }
        this.loading = false;
      },
      error: () => {
        this.dataTurma = [];
        this.loading = false;
      },
    });
  }

  public onSubmit(): void {
    this.formulario.markAllAsTouched();

    if (this.formulario.valid) {
      this.loading = true;

      const payload = createDefaultStudentPayload({
        name: this.formulario.value.name,
        registration: this.formulario.value.registration,
        schoolClassIds: this.formulario.value.schoolClassIds,
        cpf:  (this.formulario.value.cpf || '').replace(/[^\d]/g, ''),
        email: this.formulario.value.email,
      });
      this.cadastrarService.createStudent(payload).subscribe({
        next: () => {
          this.loading = false;
          this.showError = false;
          this.notificacoesService.openSnackBar('Estudante cadastrado com sucesso!', '');
          this.resetForm();
        },
        error: (error) => {
          this.loading = false;
          if (error.status === 400 || error.status === 422) {
            this.errorMessage = error.error?.message || 'Erro ao cadastrar Estudante!';
          } else {
            this.errorMessage = 'Erro ao cadastrar Estudante.';
          }
          this.showError = true;
          this.isDialogOpen = true;
        },
      });
    } else {
      this.errorMessage = 'Por favor, corrija os erros antes de enviar o formulário.';
      this.showError = true;
    }
  }

  public voltarCadastroEstudante(): void {
    this.isDialogOpen = false;
    this.router.navigate(['/cadastrar/estudantes']);
  }

  private resetForm() {
      this.formulario?.reset();
    }
}
