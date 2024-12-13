import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormularioService, ApiStudent, Classes } from 'src/shared/services/formulario.service';

@Component({
  selector: 'app-tela-pdi',
  templateUrl: './tela-pdi.component.html',
  styleUrls: ['./tela-pdi.component.scss'],
})
export class TelaPdiComponent implements OnInit {
  public dataTurma: { value: string; label: string }[] = [];
  public selectedTurma: string | null = null;
  public alunos: SimplifiedStudent[] = [];
  public loading = false;
  public api_path = '';
  public userId: string | null = null;
  public userRole: string | null = null;

  public formulario = this.formBuilder.group({
    turma: [null, [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private formularioService: FormularioService
  ) {
    this.api_path = environment.urlBase;
    this.userId = localStorage.getItem('userId');
    this.userRole = localStorage.getItem('userRole');
  }

  ngOnInit(): void {
    this.loading = true;
    if (this.userRole === 'ADMIN') {
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
    } else if (this.userId) {
      this.formularioService.getFormTeacherClasses(this.userId).subscribe({
        next: (response) => {
          if (response.sucess) {
            this.dataTurma = response.data.map((classe: Classes) => ({
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
  }

  public onTurmaSelect(): void {
    if (!this.selectedTurma) return;
    this.loading = true;

    this.formularioService.getFormStudents(this.selectedTurma).subscribe({
      next: (response) => {
        if (response.sucess) {
          this.alunos = response.data.map((student: ApiStudent) => ({
            id: student.id.toString(),
            name: student.name,
            registration: student.registration.toString(),
          }));
        }
        this.loading = false;
      },
      error: () => {
        this.alunos = [];
        this.loading = false;
      },
    });
  }

  public cadastrarPdi(alunoId: string): void {
    this.router.navigate([`/cadastros-pdi`, alunoId]);
  }

  public redirectToWhatsApp(): void {
    window.open('http://wa.me/5541988362985', '_blank');
  }
}

interface SimplifiedStudent {
  id: string;
  name: string;
  registration: string;
}
