import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Column } from './../model/column';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColumnService {
  constructor(private http: HttpClient) { }

  private readonly baseUrl = `${environment.apiUrl}/columns`;

  list(): Observable<Column[]> {
    return this.http.get<Column[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Column> {
    return this.http.get<Column>(`${this.baseUrl}/${id}`);
  }

  insert(column: Column): Observable<Column> {
    return this.http.post<Column>(this.baseUrl, column);
  }

  update(column: Column, id: number): Observable<Column> {
    return this.http.put<Column>(`${this.baseUrl}/${id}`, column);
  }

  delete(id: number): Observable<Column> {
    return this.http.delete<Column>(`${this.baseUrl}/${id}`);
  }
}
