import { Column } from './../../../model/column';
import { Component, ViewChild } from '@angular/core';
import { ColumnService } from 'src/app/service/column.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-column-index',
  templateUrl: './column-index.component.html',
  styleUrls: ['./column-index.component.scss']
})
export class ColumnIndexComponent {
  constructor(private columnService: ColumnService) { }

  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource: MatTableDataSource<Column> = new MatTableDataSource();
  columns: Array<Column> = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.list()
  }

  list(): void {
    this.columnService.list().subscribe(
      (res) => {
        this.columns = res;
        
        this.dataSource = new MatTableDataSource(this.columns);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (err) => {
        alert('Ocorreu um erro! Tente novamente mais tarde.');
      }
    );
  }

  delete(id: number) {
    this.columnService.delete(id).subscribe(
      (res) => {
        this.list();
      },
      (err) => {
        alert('Ocorreu um erro! Tente novamente mais tarde.');
      }
    );
  }
}
