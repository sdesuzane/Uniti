import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesCadatrarComponent } from './pages-cadatrar.component';

describe('PagesCadatrarComponent', () => {
  let component: PagesCadatrarComponent;
  let fixture: ComponentFixture<PagesCadatrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesCadatrarComponent]
    });
    fixture = TestBed.createComponent(PagesCadatrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
