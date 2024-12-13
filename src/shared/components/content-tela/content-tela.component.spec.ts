import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTelaComponent } from './content-tela.component';

describe('ContentTelaComponent', () => {
  let component: ContentTelaComponent;
  let fixture: ComponentFixture<ContentTelaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentTelaComponent]
    });
    fixture = TestBed.createComponent(ContentTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
