import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent {
  constructor(private categoryService: CategoryService, private location: Location, private activatedRoute: ActivatedRoute) { }

  action: string = 'Cadastrar'
  id: number = 0;
  category: Category = new Category();

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
    this.categoryService.getById(this.id).subscribe(
      (res) => {
        this.category = res;
      },
      (err) => {
        alert('Ocorreu um erro! Tente novamente mais tarde.');
      }
    );
  }

  save(): void {
    if (!this.validate()) {
      return;
    }

    if (this.id) {
      this.update();
    } else {
      this.insert();
    }
  }

  insert(): void {
    this.categoryService.insert(this.category).subscribe(
      (res) => {
        this.backPage();
      },
      (err) => { 
        alert('Ocorreu um erro! Tente novamente mais tarde.');
      }
    );
  }

  update(): void {
    this.categoryService.update(this.category, this.id).subscribe(
      (res) => {
        this.backPage();
      },
      (err) => { 
        alert('Ocorreu um erro! Tente novamente mais tarde.');
      }
    );
  }

  validate(): boolean {
    if (!this.category.name) {
      alert('Informe o nome da categoria!');
      return false;
    } else if (!this.category.color) {
      alert('Informe a cor da categoria!');
      return false;
    }  

    return true;
  }
}
