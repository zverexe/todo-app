/**
 * Created by deadly on 24.04.17.
 */
/**
 * Created by deadly on 24.04.17.
 */
import { Component } from '@angular/core';
import { TodoService } from "../services/todo.service";

import { Todo } from '../todo';


@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']
})
export class TodoFormComponent {

    todos: Todo[];

    title: string = '';
    message: string = '';
    key: any;
    constructor(private todoService: TodoService){}

    createTodo(event){
        event.preventDefault();
        let listing={
            title: this.title,
            message: this.message
        }

        this.todoService.addTodo(listing);
    }


}

