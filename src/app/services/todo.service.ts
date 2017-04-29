/**
 * Created by deadly on 24.04.17.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import {Todo} from '../todo';


@Injectable()
export class TodoService {
  todos: FirebaseListObservable<Todo[]>;

  constructor(private af: AngularFire) {
    this.todos = this.af.database.list('/listings') as FirebaseListObservable<Todo[]>;
  }

  getTodo() {
    return this.todos;
  }

  addTodo(listing) {
    return this.todos.push(listing);
    /*let todo: Todo = new Todo(title, message);*/
    // this.todos.push(todo);
  }

  deleteTodo(todo) {
    this.todos.remove(todo);
  }

  updateTodo(key, todo) {
    return this.todos.update(key,todo);
  }

  checkTodo(key, todo) {
    if (!todo.done) {
      todo.done = true;
    } else {
      todo.done = false;
    }
    return this.todos.update(key, todo);
  }


}
