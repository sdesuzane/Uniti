import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTelaInicialComponent } from './button-tela-inicial.component';

describe('ButtonTelaInicialComponent', () => {
  let component: ButtonTelaInicialComponent;
  let fixture: ComponentFixture<ButtonTelaInicialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonTelaInicialComponent]
    });
    fixture = TestBed.createComponent(ButtonTelaInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
