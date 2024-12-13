import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { mockCadastro } from 'src/utils/mocks/mocksCadrastro';

@Component({
  selector: 'app-card-cadastro',
  templateUrl: './card-cadastro.component.html',
  styleUrls: ['./card-cadastro.component.scss']
})
export class CardCadastroComponent {
  public data=mockCadastro;

  constructor(private router: Router){ }

  public navegar(pagina:string){
    this.router.navigate([`/${pagina}`]);
  }

}
