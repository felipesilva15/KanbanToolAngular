import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { TaskIndexComponent } from './view/task/task-index/task-index.component';
import { TaskFormComponent } from './view/task/task-form/task-form.component';
import { CategoryIndexComponent } from './view/category/category-index/category-index.component';
import { CategoryFormComponent } from './view/category/category-form/category-form.component';
import { ColumnIndexComponent } from './view/column/column-index/column-index.component';
import { ColumnFormComponent } from './view/column/column-form/column-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'task' },
  { path: 'task', component: TaskIndexComponent },
  { path: 'task/form/:id', component: TaskFormComponent },
  { path: 'task/form', component: TaskFormComponent },
  { path: 'category', component: CategoryIndexComponent },
  { path: 'category/form/:id', component: CategoryFormComponent },
  { path: 'category/form', component: CategoryFormComponent },
  { path: 'column', component: ColumnIndexComponent },
  { path: 'column/form/:id', component: ColumnFormComponent },
  { path: 'column/form', component: ColumnFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
