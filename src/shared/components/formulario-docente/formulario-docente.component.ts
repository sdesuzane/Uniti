import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotificacoesService } from 'src/shared/services/notificacoes.service';
import { mockSeletor } from 'src/utils/mocks/mocksSeletor';
import { CadastrarService, createTeacherPayload } from 'src/shared/services/cadastrar.service';
import { Router } from '@angular/router';
import { FormularioService } from 'src/shared/services/formulario.service';

@Component({
  selector: 'app-formulario-docente',
  templateUrl: './formulario-docente.component.html',
  styleUrls: ['./formulario-docente.component.scss']
})
export class FormularioDocenteComponent implements OnInit {
  public showError = false;
  public dataTurma = mockSeletor;
  public loading = false;
  public isDialogOpen = false;
  public errorMessage = '';

  public formulario = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    nomeProfessor: [null, [Validators.required]],
    matricula: [null, [Validators.required]],
    turma: [null, [Validators.required]],
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
      }
    });
  }

  public submit(): void {
    this.formulario.markAllAsTouched();

    if (this.formulario.valid) {
      this.loading = true;
      const teacherData: createTeacherPayload = {
        name: this.formulario.value.nomeProfessor || '',
        email: this.formulario.value.email || '',
        registration: this.formulario.value.matricula ?? 0,
        schoolClassIds: this.formulario.value.turma || [],
      };

      this.cadastrarService.createTeacher(teacherData).subscribe({
       next: () => {
          this.loading = false;
          this.showError = false;
          this.notificacoesService.openSnackBar('Professor(a) cadastrado com sucesso!','');
          this.resetForm();
        },
        error: (error) => {
          this.loading = false;
          if(error.status === 400 || error.status === 422) {
            this.errorMessage = error.error?.message || 'Erro ao cadastrar professor(a).';
          } else {
            this.errorMessage = 'Erro ao cadastrar professor(a).';
          }
          this.showError = true;
          this.isDialogOpen = true;
        }
    });
    } else {
      this.errorMessage = 'Por favor, corrija os erros antes de enviar o formulário.';
      this.showError = true;
    }
  }

  public voltarCadastroProfessor(): void {
    this.isDialogOpen = false;
    this.router.navigate(['/cadastrar/professores']);
  }

  private resetForm() {
    this.formulario?.reset();
  }
}
