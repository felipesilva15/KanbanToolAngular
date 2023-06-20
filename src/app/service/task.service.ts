import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './../model/task';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }

  private readonly baseUrl = `${environment.apiUrl}/tasks`;

  list(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}?_sort=order&_expand=category&_expand=column`);
  }

  getById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.baseUrl}/${id}`);
  }

  insert(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl, task);
  }

  update(task: Task, id: number): Observable<Task> {
    return this.http.put<Task>(`${this.baseUrl}/${id}`, task);
  }

  delete(id: number): Observable<Task> {
    return this.http.delete<Task>(`${this.baseUrl}/${id}`);
  }

  getLastTaskByColumnId(columnId: number): Observable<Task[]> {
    return this.http.get<Task[]>((`${this.baseUrl}?_sort=order&_order=desc&_expand=category&_expand=column&_limit=1&columnId=${columnId}`));
  }
}
