import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonVoltarComponent } from './button-voltar.component';

describe('ButtonVoltarComponent', () => {
  let component: ButtonVoltarComponent;
  let fixture: ComponentFixture<ButtonVoltarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonVoltarComponent]
    });
    fixture = TestBed.createComponent(ButtonVoltarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
