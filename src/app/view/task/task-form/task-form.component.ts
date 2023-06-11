import { CategoryService } from 'src/app/service/category.service';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/service/task.service';
import { ColumnService } from 'src/app/service/column.service';
import { Category } from 'src/app/model/category';
import { Column } from 'src/app/model/column';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  constructor(private taskService: TaskService, private location: Location, private activatedRoute: ActivatedRoute, private categoryService: CategoryService, private columnService: ColumnService) { }

  action: string = 'Cadastrar'
  id: number = 0;
  task: Task = new Task();
  categories: Array<Category> = []; 
  columns: Array<Column> = []; 

  ngOnInit(): void {
    // Route params
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id') ?? '');

    // Query params
    this.activatedRoute.queryParams.subscribe((params) => {
      this.task.columnId = parseInt(params['columnId'])
    });

    // load select's data
    this.getCategories();
    this.getColumns();

    // load task data for update action
    if (this.id) {
      this.action = 'Alterar'
      this.getById();
    }
  }

  backPage(): void {
    this.location.back();
  }

  getById(): void {
    this.taskService.getById(this.id).subscribe(
      (res) => {
        this.task = res;
      },
      (err) => {
        alert('Ocorreu um erro! Tente novamente mais tarde.');
      }
    );
  }

  save(): void {
    if (!this.task.title) {
      alert('Informe o título da tarefa!');
      return;
    } else if (!this.task.categoryId) {
      alert('Informe a categoria da tarefa!');
      return;
    } else if (!this.task.order) {
      alert('Informe a ordem da tarefa!');
      return;
    } else if (!this.task.columnId) {
      alert('Informe a coluna da tarefa!');
      return;
    } 

    if (this.id) {
      this.update();
    } else {
      this.insert();
    }
  }

  insert(): void {
    this.taskService.insert(this.task).subscribe(
      (res) => {
        this.backPage();
      },
      (err) => { 
        alert('Ocorreu um erro! Tente novamente mais tarde.');
      }
    );
  }

  update(): void {
    this.taskService.update(this.task, this.id).subscribe(
      (res) => {
        this.backPage();
      },
      (err) => { 
        alert('Ocorreu um erro! Tente novamente mais tarde.');
      }
    );
  }

  getCategories(): void {
    this.categoryService.list().subscribe(
      (res) => {
        this.categories = res;
      },
      (err) => {
        alert('Ocorreu um erro! Tente novamente mais tarde.');
      }
    );
  }

  getColumns(): void {
    this.columnService.list().subscribe(
      (res) => {
        this.columns = res;
      },
      (err) => {
        alert('Ocorreu um erro! Tente novamente mais tarde.');
      }
    );
  }
}
