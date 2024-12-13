import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificacoesService } from 'src/shared/services/notificacoes.service';
import { CadastrarService, CreatePdiPayload } from 'src/shared/services/cadastrar.service';
import { finalize } from 'rxjs/operators';


interface FormField {
  name: string;
  page: number;
  label: string;
}

@Component({
  selector: 'app-formulario-pdi',
  templateUrl: './formulario-pdi.component.html',
  styleUrls: ['./formulario-pdi.component.scss'],
})
export class FormularioPdiComponent implements OnInit {
  public alunoId: string | null = null;
  public form!: FormGroup;
  public isDialogOpen = false;
  public showConfirmDialog = false;
  public options = ['Excepcional', 'Acima das expectativas', 'Adequado', 'Abaixo do esperado', 'Precisa de melhorias'];
  public paginaAtual = 1;
  public loading = false;

  public formFields: FormField[] = [
    { name: 'inteligenciaEmocional_1', page: 1, label: 'Como você avalia a pontualidade do aluno em relação à entrega de tarefas e projetos?' },
    { name: 'inteligenciaEmocional_2', page: 1, label: 'Como você avalia a cooperação do aluno em atividades em grupo?' },
    { name: 'inteligenciaEmocional_3', page: 1, label: 'Como você avalia a capacidade do aluno de lidar com críticas e feedbacks?' },
    { name: 'desenvolvimentoAcademico_1', page: 2, label: 'Qual é a sua percepção sobre a iniciativa do aluno em assumir responsabilidades em atividades de grupo?' },
    { name: 'desenvolvimentoAcademico_2', page: 2, label: 'Como o aluno se destaca em resolução de problemas?' },
    { name: 'desenvolvimentoAcademico_3', page: 2, label: 'Qual é a habilidade do aluno em aprender novos conteúdos?' },
    { name: 'responsabilidade_1', page: 3, label: 'Como você avalia a pontualidade do aluno em relação à entrega de tarefas e projetos?' },
    { name: 'responsabilidade_2', page: 3, label: 'Qual é a sua percepção sobre a organização do aluno?' },
    { name: 'responsabilidade_3', page: 3, label: 'Como você avaliaria a capacidade do aluno de se organizar e gerenciar seu tempo?' },
  ];

  @Output() pageChange = new EventEmitter<number>();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private notificacoesService: NotificacoesService,
    private cadastrarService: CadastrarService,
  ) {}

  public ngOnInit(): void {
    this.initializeForm();
    this.alunoId = this.route.snapshot.paramMap.get('id');
  }

  private initializeForm(): void {
    const controls = this.formFields.reduce((acc, field) => {
      acc[field.name] = ['', Validators.required];
      return acc;
    }, {} as Record<string, any>);

    controls['consideracoes'] = ['', [Validators.required, Validators.minLength(3)]];
    this.form = this.fb.group(controls);
  }

  public nextPage(): void {
    if (this.isPageValid(this.paginaAtual)) {
      this.paginaAtual++;
      this.pageChange.emit(this.paginaAtual);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  public previousPage(): void {
    if (this.paginaAtual > 1) {
      this.paginaAtual--;
      this.pageChange.emit(this.paginaAtual);
    }
  }

  public isPageValid(page: number): boolean {
    return this.formFields
      .filter(field => field.page === page)
      .every(field => this.form.get(field.name)?.valid);
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.isDialogOpen = true;
    }
  }

  private formatFormValues(): CreatePdiPayload {
    return {
      studentId: this.alunoId ? parseInt(this.alunoId, 10) : 0,
      answersAcademicDevelopmentId: this.extractAnswerIds('desenvolvimentoAcademico'),
      answersEmotionalInteligenceId: this.extractAnswerIds('inteligenciaEmocional'),
      answersResponsabilityId: this.extractAnswerIds('responsabilidade'),
      considerations: this.form.get('consideracoes')?.value,
    };
  }

  private extractAnswerIds(prefix: string): number[] {
    return this.formFields
      .filter(field => field.name.startsWith(prefix))
      .map(field => this.options.indexOf(this.form.get(field.name)?.value) + 1)
      .filter(id => id > 0);
  }

  public createPDIButton(): void {
    this.isDialogOpen = false;
    this.loading = true;
    const payload = this.formatFormValues();
    this.cadastrarService.createPDI(payload).pipe(
      finalize(() => (this.loading = false))
    ).subscribe({
      next: (response) => {
        if ('sucess' in response && response.sucess) {
            this.showConfirmDialog = true;

        } else if ('message' in response) {
          this.notificacoesService.showError(response.message || 'Erro ao enviar o PDI');
        }
      },
      error: (error) => {
        const errorMessage = error.error?.message || 'Erro inesperado ao enviar o PDI';
        this.notificacoesService.showError(errorMessage);
      },
    });
  }

  public returnForm(): void {
    this.isDialogOpen = false;
    this.router.navigate(['/cadastros-pdi']);
  }

  public returnPanel(): void {
    this.showConfirmDialog = false;
    this.router.navigate(['/tela-pdi']);
  }
}
