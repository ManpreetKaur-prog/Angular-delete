import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo: Todo = {   id:3,
    text: 'Morning meeting',
    day: '08/22/2023',
    reminder: false
  };

  @Output() onDeleteTodo: EventEmitter<Todo>=new EventEmitter;
  
    faTimes=faTimes;
    onDelete(todo: Todo)
    {
      this.onDeleteTodo.emit(todo)
    }
}
