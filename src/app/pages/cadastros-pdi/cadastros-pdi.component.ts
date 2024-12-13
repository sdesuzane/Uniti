import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastros-pdi',
  templateUrl: './cadastros-pdi.component.html',
  styleUrls: ['./cadastros-pdi.component.scss']
})
export class CadastrosPdiComponent implements OnInit {
  public type = '';
  public titulo = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.localizarRota();
  }

  private localizarRota() {
    this.route.paramMap.subscribe((params) => {
      this.type = params.get('type') || '';
      this.updateTitle(1);
    });
  }

  public updateTitle(page: number) {
    switch (page) {
      case 1:
        this.titulo = 'Inteligência Emocional';
        break;
      case 2:
        this.titulo = 'Desenvolvimento Acadêmico';
        break;
      case 3:
        this.titulo = 'Responsabilidade';
        break;
      default:
        this.titulo = 'Inteligência Emocional';
    }
  }
}
