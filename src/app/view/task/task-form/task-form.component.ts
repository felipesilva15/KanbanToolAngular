import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  constructor(private taskService: TaskService, private location: Location, private activatedRoute: ActivatedRoute) { }

  action: string = 'Cadastrar'
  id: number = 0;
  task: Task = new Task();

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id') ?? '');

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
}
