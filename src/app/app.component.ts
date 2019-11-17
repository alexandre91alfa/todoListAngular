import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public todos: any[] = [];
  public title = "Minhas tarefas";
  /**
   *
   */
  constructor() {
    this.todos.push("Manda messagem");
    this.todos.push("Fazer o trabalho da faculdade");
    this.todos.push("Ouvir musica");
  }
  public add() {
    this.todos.push("alexandre");
  }
}
