import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaResponsavelComponent } from './tela-responsavel.component';

describe('TelaResponsavelComponent', () => {
  let component: TelaResponsavelComponent;
  let fixture: ComponentFixture<TelaResponsavelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaResponsavelComponent]
    });
    fixture = TestBed.createComponent(TelaResponsavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
