import { Component } from '@angular/core';
import { ModalLoginService } from './../../services/modal-login.service';
@Component({
  selector: 'app-content-tela',
  templateUrl: './content-tela.component.html',
  styleUrls: ['./content-tela.component.scss'],
})
export class ContentTelaComponent {
  public txtBtnEntrar = 'Entrar';

  constructor(private modalLoginService: ModalLoginService) {}

  public openModal(): void {
    this.modalLoginService.openLoginModal();
  }
}
