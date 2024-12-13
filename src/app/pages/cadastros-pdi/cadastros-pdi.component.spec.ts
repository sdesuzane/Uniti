import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrosPdiComponent } from './cadastros-pdi.component';

describe('CadastrosPdiComponent', () => {
  let component: CadastrosPdiComponent;
  let fixture: ComponentFixture<CadastrosPdiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrosPdiComponent]
    });
    fixture = TestBed.createComponent(CadastrosPdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
