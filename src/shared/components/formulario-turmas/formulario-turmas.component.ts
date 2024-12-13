import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastrarService } from 'src/shared/services/cadastrar.service';
import { NotificacoesService } from 'src/shared/services/notificacoes.service';
import { FormularioService } from './../../services/formulario.service';
import { Router } from '@angular/router';
import { FormClassesOptions, SchoolYear, Shift, Teaching } from './../../models/form-classes-options.model';

interface DataTurma {
  year: { value: string; label: string }[];
  shift: { value: string; label: string }[];
  teaching: { value: string; label: string }[];
}

@Component({
  selector: 'app-formulario-turmas',
  templateUrl: './formulario-turmas.component.html',
  styleUrls: ['./formulario-turmas.component.scss'],
})
export class FormularioTurmasComponent implements OnInit {
  public showError = false;
  public errorMessage = '';
  public isDialogOpen = false;
  public loading = false;
  public formulario: FormGroup;
  public dataTurma: DataTurma = {
    year: [],
    shift: [],
    teaching: [],
  };

  constructor(
    private formBuilder: FormBuilder,
    private cadastrarService: CadastrarService,
    private notificacoesService: NotificacoesService,
    private formularioService: FormularioService,
    private router: Router
  ) {
    this.formulario = this.formBuilder.group({
      year: ['', Validators.required],
      shift: ['', Validators.required],
      teaching: ['', Validators.required],
      identifier: ['', [Validators.required, Validators.maxLength(20)]],
    });

    this.formulario.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        this.showError = false;
      }
    });
  }

  ngOnInit(): void {
    this.loadClassOptions();
  }

  private loadClassOptions(): void {
    this.loading = true;
    this.formularioService.getFormClassesOptions().subscribe({
      next: (response: FormClassesOptions) => {
        if (response?.data) {
          this.loading = false;
          this.dataTurma = {
            year: response.data.schoolYears.map((item: SchoolYear) => ({
              value: item.id,
              label: item.name,
            })),
            shift: response.data.shifts.map((item: Shift) => ({
              value: item.id,
              label: item.name,
            })),
            teaching: response.data.teachings.map((item: Teaching) => ({
              value: item.id,
              label: item.name,
            })),
          };
        }
      },
      error: () => {
        this.loading = false;
        this.errorMessage ='Erro ao carregar opções de turma!';
        this.isDialogOpen = true;
      },
    });
  }

  public onSubmit(): void {
    this.formulario.markAllAsTouched();

    if (this.formulario.valid) {
      this.loading = true;
      const payload = { ...this.formulario.value };

      this.cadastrarService.createClass(payload).subscribe({
        next: () => {
          this.loading = false;
          this.showError = false;
          this.notificacoesService.openSnackBar('Turma cadastrada com sucesso!', '');
          this.resetForm();
        },
        error: (error) => {
          this.loading = false;
          if (error.status === 400 || error.status === 422) {
            this.errorMessage = error.error?.message || 'Erro ao cadastrar turma!';
          } else {
            this.errorMessage ='Erro ao cadastrar turma!';
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

  public voltarCadastroTurma(): void {
    this.isDialogOpen = false;
    this.router.navigate(['/cadastrar/turmas']);
  }


  private resetForm() {
      this.formulario?.reset();
    }
}
