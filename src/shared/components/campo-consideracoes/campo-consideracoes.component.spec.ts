import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoConsideracoesComponent } from './campo-consideracoes.component';

describe('CampoConsideracoesComponent', () => {
  let component: CampoConsideracoesComponent;
  let fixture: ComponentFixture<CampoConsideracoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampoConsideracoesComponent]
    });
    fixture = TestBed.createComponent(CampoConsideracoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
