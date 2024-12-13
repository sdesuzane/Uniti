import { LoginCadastroService } from 'src/shared/services/login-cadastro.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { removeAuthToken } from 'src/utils/helpers/helpers';
import { mocksMenuAdministrador } from 'src/utils/mocks/mocksMenuAdministrador';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss'],
})
export class MenuLateralComponent {
  @Input() public menuOptions = mocksMenuAdministrador;

  constructor(
    private router: Router,
    private LoginCadastroService: LoginCadastroService,
  ){}

  public logout() {
    this.LoginCadastroService.clearAuthData();
    removeAuthToken();
    this.router.navigate(['/']);

  }

}
