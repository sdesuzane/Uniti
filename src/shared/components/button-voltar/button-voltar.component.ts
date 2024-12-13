import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-voltar',
  templateUrl: './button-voltar.component.html',
  styleUrls: ['./button-voltar.component.scss']
})
export class ButtonVoltarComponent {

  @Input() rota = '';


  constructor(private router: Router){ }

  public navegar(): void {
    if (this.rota) {
      this.router.navigate([this.rota]);
    } else {
      console.warn('Nenhuma rota foi definida.');
    }
  }

}
