import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPdiComponent } from './tela-pdi.component';

describe('TelaPdiComponent', () => {
  let component: TelaPdiComponent;
  let fixture: ComponentFixture<TelaPdiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaPdiComponent]
    });
    fixture = TestBed.createComponent(TelaPdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
