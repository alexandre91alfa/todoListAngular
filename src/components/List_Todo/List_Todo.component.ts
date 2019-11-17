import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-List_Todo',
  templateUrl: './List_Todo.component.html',
  styleUrls: ['./List_Todo.component.css']
})
export class List_TodoComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  public todos: Todo[] = [];
  public title: string = "Minhas tarefas";

  constructor() {
    this.todos.push(new Todo(1, "fazer tarefa faculdade", false));
    this.todos.push(new Todo(2, "Ouvir musica", false));
    this.todos.push(new Todo(3, "faculdade", true));
  }
  public add() { }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1 && todo.done === true) {
      this.todos.splice(index, 1);
    }
  }

  markAsDone(todo: Todo): void {
    todo.done = true;
  }

  markAsUndone(todo: Todo): void {
    todo.done = false;
  }

}
