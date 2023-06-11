import { ColumnEnum } from '../../../enums/column.enum';
import { Task } from 'src/app/model/task';
import { TaskService } from './../../../service/task.service';
import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/model/column';
import { ColumnService } from 'src/app/service/column.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-index',
  templateUrl: './task-index.component.html',
  styleUrls: ['./task-index.component.scss'],
})
export class TaskIndexComponent implements OnInit {
  constructor(private taskService: TaskService, private columnService: ColumnService) { }

  tasks: Array<Task> = [];
  columns: Array<Column> = [];
  toDo: Array<Task> = [];
  doing: Array<Task> = [];
  done: Array<Task> = [];

  ngOnInit(): void {
    this.list();
    this.listColumns();
  }

  list(): void {
    this.taskService.list().subscribe(
      (res) => {
        this.tasks = res;

        this.filterTasks();
      }
    );
  }

  listColumns(): void {
    this.columnService.list().subscribe(
      (res) => {
        this.columns = res;
      }
    ); 
  }

  filterTasks(): void {
    this.toDo = this.tasks.filter(task => task.columnId == ColumnEnum.ToDo);
    this.doing = this.tasks.filter(task => task.columnId == ColumnEnum.Doing);
    this.done = this.tasks.filter(task => task.columnId == ColumnEnum.Done);
  }

  drop(event: CdkDragDrop<Task[]>) {
    // Caso o usuário não tenha movido nem transferido o card, não faz nada
    if (event.previousContainer === event.container && event.previousIndex == event.currentIndex) {
      return;
    }

    // Pega o atributo de ID das colunas
    let previousColumnId = parseInt(event.previousContainer.element.nativeElement.getAttribute('columnIdProp') ?? '');
    let currentColumnId = parseInt(event.container.element.nativeElement.getAttribute('columnIdProp') ?? '');

    if (event.previousContainer == event.container) {
      // Apenas move o item no array de tarefas
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

      // Atualiza as tarefas da coluna coluna atual
      this.updateColumnTasks(event.container.data, currentColumnId);
    } else {
      // Atualiza a posição do item nos arrays e move os mesmos entre as colunas
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);

      // Atualiza as tarefas da coluna anterior e da coluna atual
      this.updateColumnTasks(event.previousContainer.data, previousColumnId);
      this.updateColumnTasks(event.container.data, currentColumnId);
    }
  }

  updateColumnTasks(tasks: Array<Task>, columnId: number): void {
    tasks.forEach((task, index) => {
      task.order = index + 1;
      task.columnId = columnId;
      
      this.taskService.update(task, task.id).subscribe();
    });
  }

  delete(id: number, event: Event): void {
    event.stopPropagation();

    this.taskService.delete(id).subscribe(
      (res) => {
        this.list();
      },
      (err) => {
        alert('Ocorreu um erro! Tente novamente mais tarde.');
      }
    );
  }
}
