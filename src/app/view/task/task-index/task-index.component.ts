import { Task } from 'src/app/model/task';
import { TaskService } from './../../../service/task.service';
import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/model/column';
import { ColumnService } from 'src/app/service/column.service';

@Component({
  selector: 'app-task-index',
  templateUrl: './task-index.component.html',
  styleUrls: ['./task-index.component.scss']
})
export class TaskIndexComponent implements OnInit {
  constructor(private taskService: TaskService, private columnService: ColumnService) { }

  tasks: Array<Task> = [];
  columns: Array<Column> = [];

  ngOnInit(): void {
    this.list();
    this.listColumns();
  }

  list(): void {
    this.taskService.list().subscribe(
      (res) => {
        this.tasks = res;
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
}
