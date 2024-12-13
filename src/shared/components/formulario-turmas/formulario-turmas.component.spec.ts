import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTurmasComponent } from './formulario-turmas.component';

describe('FormularioTurmasComponent', () => {
  let component: FormularioTurmasComponent;
  let fixture: ComponentFixture<FormularioTurmasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioTurmasComponent]
    });
    fixture = TestBed.createComponent(FormularioTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
