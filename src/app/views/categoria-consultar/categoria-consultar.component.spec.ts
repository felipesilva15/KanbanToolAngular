import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaConsultarComponent } from './categoria-consultar.component';

describe('CategoriaConsultarComponent', () => {
  let component: CategoriaConsultarComponent;
  let fixture: ComponentFixture<CategoriaConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaConsultarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
