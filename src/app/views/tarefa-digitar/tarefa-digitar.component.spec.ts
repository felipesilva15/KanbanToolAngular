import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaDigitarComponent } from './tarefa-digitar.component';

describe('TarefaDigitarComponent', () => {
  let component: TarefaDigitarComponent;
  let fixture: ComponentFixture<TarefaDigitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarefaDigitarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefaDigitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
