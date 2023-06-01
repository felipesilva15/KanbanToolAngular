import { ColumnService } from 'src/app/service/column.service';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Column } from 'src/app/model/column';

@Component({
  selector: 'app-column-form',
  templateUrl: './column-form.component.html',
  styleUrls: ['./column-form.component.scss']
})
export class ColumnFormComponent {
  constructor(private columnService: ColumnService, private location: Location, private activatedRoute: ActivatedRoute) { }

  action: string = 'Cadastrar'
  id: number = 0;
  column: Column = new Column();

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
    this.columnService.getById(this.id).subscribe(
      (res) => {
        this.column = res;
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
    this.columnService.insert(this.column).subscribe(
      (res) => {
        this.backPage();
      },
      (err) => { 
        alert('Ocorreu um erro! Tente novamente mais tarde.');
      }
    );
  }

  update(): void {
    this.columnService.update(this.column, this.id).subscribe(
      (res) => {
        this.backPage();
      },
      (err) => { 
        alert('Ocorreu um erro! Tente novamente mais tarde.');
      }
    );
  }
}
