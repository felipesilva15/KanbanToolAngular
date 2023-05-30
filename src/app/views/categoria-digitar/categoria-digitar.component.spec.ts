import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaDigitarComponent } from './categoria-digitar.component';

describe('CategoriaDigitarComponent', () => {
  let component: CategoriaDigitarComponent;
  let fixture: ComponentFixture<CategoriaDigitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaDigitarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaDigitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
