import { Component } from '@angular/core';
import { LoginCadastroService } from 'src/shared/services/login-cadastro.service';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss'],
})
export class TelaInicialComponent {

  constructor(
    private loginCadastroService: LoginCadastroService
  ) {
    this.clearLocalStorage();
  }
  private clearLocalStorage(): void {
    this.loginCadastroService.clearAuthData();
  }
}
