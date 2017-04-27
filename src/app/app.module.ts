import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

export const firebaseConfig = {
  apiKey: 'AIzaSyCx3-809Yi9jl0rPf5LJ2Fi8FHdQraPswk',
  authDomain: 'todo-app-46a49.firebaseapp.com',
  databaseURL: 'https://todo-app-46a49.firebaseio.com',
  projectId: 'todo-app-46a49',
  storageBucket: 'todo-app-46a49.appspot.com',
  messagingSenderId: '87509693702'
};

const myFirebaseAuthConfig = {
  // provider: AuthProviders.Facebook,
  method: AuthMethods.Popup
};


import { AppComponent } from './app.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {TodoService} from './services/todo.service';
// import {UpdateTodoComponent} from './update-todo/update-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent,
    // UpdateTodoComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)

  ],
  providers: [
      TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
