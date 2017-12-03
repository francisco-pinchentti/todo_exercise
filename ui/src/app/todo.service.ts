import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { TodoItem } from './models/TodoItem.model';

@Injectable()
export class TodoService {

  private baseServiceUrl = '/api/todos';

  constructor(
    private http: HttpClient
  ) { }

  /** mappig inside service:
  list(): Observable<TodoItem[]> {
    return this.http
      .get<any[]>(this.baseServiceUrl)
      .map(todoItemsResponse => {
        return todoItemsResponse.map(item => new TodoItem(item));
      });
  }
  */

  list(): Observable<any[]> {
    return this.http.get<any[]>(this.baseServiceUrl);
  }

  update(todoItem: TodoItem): Observable<any> {
    return this.http.put(`${this.baseServiceUrl}/${todoItem.id}`, todoItem.asJSON());
  }

  create(todoItem: TodoItem): Observable<any> {
    return this.http
    .post(this.baseServiceUrl, todoItem.asJSON());
  }

  delete(id: string): Observable<any> {
    //@see HTTP PARAMS/OPTIONS https://angular.io/api/common/http/HttpClient
    return this.http.delete(`${this.baseServiceUrl}/${id}`);
  }

}
