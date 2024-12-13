import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPdiComponent } from './formulario-pdi.component';

describe('FormularioPdiComponent', () => {
  let component: FormularioPdiComponent;
  let fixture: ComponentFixture<FormularioPdiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioPdiComponent]
    });
    fixture = TestBed.createComponent(FormularioPdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
