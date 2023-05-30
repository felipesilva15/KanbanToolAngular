import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Common modules
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CategoriaConsultarComponent } from './views/categoria-consultar/categoria-consultar.component';
import { CategoriaDigitarComponent } from './views/categoria-digitar/categoria-digitar.component';
import { TarefaConsultarComponent } from './views/tarefa-consultar/tarefa-consultar.component';
import { TarefaDigitarComponent } from './views/tarefa-digitar/tarefa-digitar.component';
import { ColunaDigitarComponent } from './views/coluna-digitar/coluna-digitar.component';
import { ColunaConsultarComponent } from './views/coluna-consultar/coluna-consultar.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaConsultarComponent,
    CategoriaDigitarComponent,
    TarefaConsultarComponent,
    TarefaDigitarComponent,
    ColunaDigitarComponent,
    ColunaConsultarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
