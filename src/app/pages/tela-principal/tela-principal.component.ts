import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.scss']
})
export class TelaPrincipalComponent {

  public redirectToWhatsApp() {
    window.open('http://wa.me/5541988362985', '_blank');
  }

}
