import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaConsultarComponent } from './tarefa-consultar.component';

describe('TarefaConsultarComponent', () => {
  let component: TarefaConsultarComponent;
  let fixture: ComponentFixture<TarefaConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarefaConsultarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefaConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
