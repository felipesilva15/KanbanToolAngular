import { Category } from 'src/app/model/category';
import { Component, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-category-index',
  templateUrl: './category-index.component.html',
  styleUrls: ['./category-index.component.scss']
})
export class CategoryIndexComponent {
  constructor(private categoryService: CategoryService) { }

  displayedColumns: string[] = ['id', 'name', 'color','actions'];
  dataSource: MatTableDataSource<Category> = new MatTableDataSource();
  categories: Array<Category> = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.list()
  }

  list(): void {
    this.categoryService.list().subscribe(
      (res) => {
        this.categories = res;
        
        this.dataSource = new MatTableDataSource(this.categories);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (err) => {
        alert('Ocorreu um erro! Tente novamente mais tarde.');
      }
    );
  }

  delete(id: number) {
    this.categoryService.delete(id).subscribe(
      (res) => {
        this.list();
      },
      (err) => {
        alert('Ocorreu um erro! Tente novamente mais tarde.');
      }
    );
  }
}
