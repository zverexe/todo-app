/**
 * Created by deadly on 24.04.17.
 */
import {Component, OnInit} from '@angular/core';
import {TodoService} from '../services/todo.service';
import {AngularFire, AuthProviders} from 'angularfire2';

import {Todo} from '../todo';

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: any;
  // title: string = '';
  // message: string = '';

  globalEditMode: boolean = false;
  oldTodo: Todo;

  constructor(private todoService: TodoService, private af: AngularFire) {}
  getFreshListOfTodos() {
    this.todoService.getTodo()
      .subscribe(todo => {
        this.todos = todo;
      });
  }

  ngOnInit() {
    this.getFreshListOfTodos();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  showUpdate(todo) {
    this.oldTodo = Object.assign({}, todo);
    todo.editmode = true;
    this.globalEditMode = true;
  }

  update(todo) {
    todo.editmode = false;
    this.globalEditMode = false;
    this.todoService.updateTodo(todo.$key, todo);
    this.getFreshListOfTodos();
  }

  updateDone(todo) {
    this.todoService.checkTodo(todo.$key, todo);
  }

  closeEdit(todo) {
    this.globalEditMode = false;
    Object.assign(todo, this.oldTodo);
  }


}

