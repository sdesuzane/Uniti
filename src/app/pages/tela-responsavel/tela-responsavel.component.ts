import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { removeAuthToken } from 'src/utils/helpers/helpers';

@Component({
  selector: 'app-tela-responsavel',
  templateUrl: './tela-responsavel.component.html',
  styleUrls: ['./tela-responsavel.component.scss']
})
export class TelaResponsavelComponent {

  constructor(private router: Router){

  }
  public removerTokenERetornarInicial() {
    removeAuthToken();
    this.router.navigate(['/tela-inicial']);

  }

}
