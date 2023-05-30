import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColunaConsultarComponent } from './coluna-consultar.component';

describe('ColunaConsultarComponent', () => {
  let component: ColunaConsultarComponent;
  let fixture: ComponentFixture<ColunaConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColunaConsultarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColunaConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
