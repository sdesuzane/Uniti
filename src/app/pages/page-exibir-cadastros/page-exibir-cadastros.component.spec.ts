import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExibirCadastrosComponent } from './page-exibir-cadastros.component';

describe('PageExibirCadastrosComponent', () => {
  let component: PageExibirCadastrosComponent;
  let fixture: ComponentFixture<PageExibirCadastrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageExibirCadastrosComponent]
    });
    fixture = TestBed.createComponent(PageExibirCadastrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
