import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemTelaComponent } from './imagem-tela.component';

describe('ImagemTelaComponent', () => {
  let component: ImagemTelaComponent;
  let fixture: ComponentFixture<ImagemTelaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagemTelaComponent]
    });
    fixture = TestBed.createComponent(ImagemTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
