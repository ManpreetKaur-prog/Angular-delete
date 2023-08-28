import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Todo } from 'src/app/Todo';
import { TODOS } from 'src/app/todos-mock';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private backendUrl: string ='http://localhost:3000/todos'
  constructor(private httpclient: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.httpclient.get<Todo[]>(this.backendUrl);
    // const todos = of(TODOS);
    // return todos;
  }
  deleteTodo(todo:Todo): Observable<Todo>
  {
    const url=  `${this.backendUrl}/${todo.id}`;  
    return this.httpclient.delete<Todo>(url)
  }
}
