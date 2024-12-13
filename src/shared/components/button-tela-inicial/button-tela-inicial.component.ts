import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-tela-inicial',
  templateUrl: './button-tela-inicial.component.html',
  styleUrls: ['./button-tela-inicial.component.scss'],
})
export class ButtonTelaInicialComponent {
  @Input() texto = 'btn';
}
