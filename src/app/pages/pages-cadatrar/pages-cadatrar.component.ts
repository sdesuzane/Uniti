import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pages-cadatrar',
  templateUrl: './pages-cadatrar.component.html',
  styleUrls: ['./pages-cadatrar.component.scss'],
})
export class PagesCadatrarComponent implements OnInit {
  public type = '';
  public titulo = '';
  public subtitulo = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.localizarRota();
  }

 private localizarRota() {
    this.route.paramMap.subscribe((params) => {
      this.type = params.get('type') || '';
    });
    if (this.type === 'estudantes') {
      this.titulo = 'Cadastro de estudante';
      this.subtitulo = 'Preencha os dados do estudante.';
    } else if (this.type === 'turmas') {
      this.titulo = 'Cadastro de turma ';
      this.subtitulo = 'Complete o formulário para registrar a turma. ';
    } else if(this.type ==="professores") {
      this.titulo = 'Cadastro de docente';
      this.subtitulo = 'Preencha as informações do professor ou professora. ';
    }
  }
}
