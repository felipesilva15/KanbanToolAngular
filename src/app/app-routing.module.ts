import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaConsultarComponent } from './views/tarefa-consultar/tarefa-consultar.component';
import { CategoriaConsultarComponent } from './views/categoria-consultar/categoria-consultar.component';
import { CategoriaDigitarComponent } from './views/categoria-digitar/categoria-digitar.component';
import { ColunaConsultarComponent } from './views/coluna-consultar/coluna-consultar.component';
import { ColunaDigitarComponent } from './views/coluna-digitar/coluna-digitar.component';
import { TarefaDigitarComponent } from './views/tarefa-digitar/tarefa-digitar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'tarefa' },
  { path: 'tarefa', component: TarefaConsultarComponent },
  { path: 'tarefa/digitar/:id', component: TarefaDigitarComponent },
  { path: 'tarefa/digitar', component: TarefaDigitarComponent },
  { path: 'categoria', component: CategoriaConsultarComponent },
  { path: 'categoria/digitar/:id', component: CategoriaDigitarComponent },
  { path: 'categoria/digitar', component: CategoriaDigitarComponent },
  { path: 'coluna', component: ColunaConsultarComponent },
  { path: 'coluna/digitar/:id', component: ColunaDigitarComponent },
  { path: 'coluna/digitar', component: ColunaDigitarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
