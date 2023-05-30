import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColunaDigitarComponent } from './coluna-digitar.component';

describe('ColunaDigitarComponent', () => {
  let component: ColunaDigitarComponent;
  let fixture: ComponentFixture<ColunaDigitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColunaDigitarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColunaDigitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
