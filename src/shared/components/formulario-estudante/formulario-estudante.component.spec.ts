import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEstudanteComponent } from './formulario-estudante.component';

describe('FormularioEstudanteComponent', () => {
  let component: FormularioEstudanteComponent;
  let fixture: ComponentFixture<FormularioEstudanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioEstudanteComponent]
    });
    fixture = TestBed.createComponent(FormularioEstudanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
