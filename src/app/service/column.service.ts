import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Column } from './../model/column';

@Injectable({
  providedIn: 'root'
})
export class ColumnService {
  constructor(private http: HttpClient) { }

  private readonly urlApi = 'http://localhost:3000/columns';

  list(): Observable<Column[]> {
    return this.http.get<Column[]>(this.urlApi);
  }

  getById(id: number): Observable<Column> {
    return this.http.get<Column>(`${this.urlApi}/${id}`);
  }

  insert(column: Column): Observable<Column> {
    return this.http.post<Column>(this.urlApi, column);
  }

  update(column: Column, id: number): Observable<Column> {
    return this.http.put<Column>(`${this.urlApi}/${id}`, column);
  }

  delete(id: number): Observable<Column> {
    return this.http.delete<Column>(`${this.urlApi}/${id}`);
  }
}
