import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-page-exibir-cadastros',
  templateUrl: './page-exibir-cadastros.component.html',
  styleUrls: ['./page-exibir-cadastros.component.scss'],
})
export class PageExibirCadastrosComponent implements OnInit {
  public typeParams = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.routeChanges();
  }

  public routeChanges() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.typeParams = this.route.snapshot.params['type'];
      });
  }
}
