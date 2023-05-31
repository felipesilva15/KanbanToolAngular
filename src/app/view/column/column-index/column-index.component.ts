import { Column } from './../../../model/column';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnService } from 'src/app/service/column.service';

@Component({
  selector: 'app-column-index',
  templateUrl: './column-index.component.html',
  styleUrls: ['./column-index.component.scss']
})
export class ColumnIndexComponent {
  constructor(private columnService: ColumnService, private router: Router, private activeRoute: ActivatedRoute) { }

  columns: Array<Column> = [];

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.columnService.list().subscribe(
      (res) => {
        this.columns = res;
      },
      (err) => {
        alert('Ocorreu um erro! Tente novamente mais tarde.');
      }
    );
  }

  delete(id: number) {
    this.columnService.delete(id).subscribe(
      (res) => { },
      (err) => {
        alert('Ocorreu um erro! Tente novamente mais tarde.');
      },
      () => {
        this.list();
      }
    );
  }
}
