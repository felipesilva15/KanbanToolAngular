import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnIndexComponent } from './column-index.component';

describe('ColumnIndexComponent', () => {
  let component: ColumnIndexComponent;
  let fixture: ComponentFixture<ColumnIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
