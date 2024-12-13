import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesMenuLateralComponent } from './opcoes-menu-lateral.component';

describe('OpcoesMenuLateralComponent', () => {
  let component: OpcoesMenuLateralComponent;
  let fixture: ComponentFixture<OpcoesMenuLateralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpcoesMenuLateralComponent]
    });
    fixture = TestBed.createComponent(OpcoesMenuLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
