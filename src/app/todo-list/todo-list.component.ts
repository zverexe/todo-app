/**
 * Created by deadly on 24.04.17.
 */
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { AngularFire, AuthProviders } from 'angularfire2';
// import { UpdateTodoComponent } from '../update-todo/update-todo.component';

import { Todo } from '../todo';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})
export class TodoListComponent implements OnInit{
    todos: any;
    // title: string = '';
   // message: string = '';

    editForm: boolean = false;
    todo: Todo;

    constructor( private todoService: TodoService, private af: AngularFire){}

    ngOnInit() {
       this.todoService.getTodo()
            .subscribe(todo => {
                this.todos = todo;
            });
    }

    deleteTodo(todo: Todo) {
        this.todoService.delete(todo);
    }

    showUpdate() {
      this.editForm = true;
    }

    update(event, todo) {
        event.preventDefault();
        this.todoService.updateTodo(todo.$key, todo);
        this.editForm = false;
        this.todoService.getTodo()
            .subscribe(todo => {
                this.todos = todo;
            });
    }

    updateDone(todo) {
        event.preventDefault();
        this.todoService.checkTodo(todo.$key, todo);
        /*this.todoService.getTodo()
            .subscribe(todo=>{
                this.todos=todo;
            });*/
    }

    closeEdit(event, todo){
        event.preventDefault();
        //this.todoService.updateTodo(todo.$key, todo);
        this.editForm = false;
        this.todoService.getTodo()
            .subscribe(todo=>{
                this.todos=todo;
            });
    }



}

