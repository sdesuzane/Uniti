import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

interface Options {
  caminho: string;
  imagem: string;
  titulo: string;
}
@Component({
  selector: 'app-opcoes-menu-lateral',
  templateUrl: './opcoes-menu-lateral.component.html',
  styleUrls: ['./opcoes-menu-lateral.component.scss'],
})
export class OpcoesMenuLateralComponent {
  @Input() public options: Options[] = [];

  constructor(private router: Router) {}

  public redirectPages(page: string) {
    this.router.navigate([page]);
  }

}
