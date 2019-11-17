import { Component } from "@angular/core";
import { Todo } from "../models/todo.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public todos: Todo[] = [];
  public title = "Minhas tarefas";
  public form: FormGroup;

  constructor(private build: FormBuilder) {
    this.form = this.build.group({
      title: [
        "",
        Validators.compose([
          Validators.minLength(2),
          Validators.maxLength(255),
          Validators.required
        ])
      ]
    });
    this.load();
  }
  public add() {
    const title: string = this.form.controls.title.value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    this.save();
    this.clear();
  }

  clear() {
    this.form.reset();
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1 && todo.done === true) {
      this.todos.splice(index, 1);
    }
    this.save();
  }

  markAsDone(todo: Todo): void {
    todo.done = true;
    this.save();
  }

  markAsUndone(todo: Todo): void {
    todo.done = false;
    this.save();
  }

  save() {
    const data = JSON.stringify(this.todos);
    localStorage.setItem("todos", data);
  }
  load() {
    const data = localStorage.getItem("todos");
    this.todos = JSON.parse(data);
  }
}
