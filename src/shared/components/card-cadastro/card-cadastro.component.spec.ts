import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCadastroComponent } from './card-cadastro.component';

describe('CardCadastroComponent', () => {
  let component: CardCadastroComponent;
  let fixture: ComponentFixture<CardCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCadastroComponent]
    });
    fixture = TestBed.createComponent(CardCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
