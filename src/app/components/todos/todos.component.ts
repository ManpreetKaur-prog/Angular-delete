import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo-service.service';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoService: TodoService) {

  }
  
  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => this.todos = todos);
  }
  deleteTodo(todo: Todo){
      this.todoService
      .deleteTodo(todo)
      .subscribe(()=>(this.todos=this.todos.filter(td=> td.id !== todo.id)))
  }

}
