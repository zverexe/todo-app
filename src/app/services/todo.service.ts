/**
 * Created by deadly on 24.04.17.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Todo } from '../todo';



@Injectable()
export class TodoService{
    constructor(private af: AngularFire) {
        this.todos = this.af.database.list('/listings') as FirebaseListObservable<Todo[]>;

    }

    todos: FirebaseListObservable<any[]>;

    getTodo(){
        return this.todos;
    }

    addTodo(listing){
        return this.todos.push(listing);
        /*let todo: Todo = new Todo(title, message);*/
        //this.todos.push(todo);
    }

    delete(todo){
        this.todos.remove(todo);
    }

    updateTodo(key, todo){
        return this.todos.update(key, todo);
    }


}
