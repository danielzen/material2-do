import {Component} from '@angular/core';
import {MdCard} from '@angular2-material/card';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {HTTP_PROVIDERS} from '@angular/http';

import {DialogComponent} from './dialog/dialog.component';

@Component({
  moduleId: module.id,
  selector: 'material2-do-app',
  directives: [MdCard, MdToolbar, MdList, MdListItem, MdCheckbox,
    MdButton, MdIcon, DialogComponent],
  templateUrl: 'material2-do.component.html',
  styleUrls: ['material2-do.component.css'],
  providers: [MdIconRegistry, HTTP_PROVIDERS],
})
export class Material2DoAppComponent {
  showDialog: boolean = false;
  editingTodo = null;
  fieldValue: string = '';
  todoList: any = [];
  okButtonText: string = 'Create task';

  todoDialog(todo = null) {
    this.okButtonText = 'Create task';
    this.fieldValue = '';
    this.editingTodo = todo;
    if (todo) {
      this.fieldValue = todo.title;
      this.okButtonText = 'Edit task';
    }
    this.showDialog = true;
  }

  remove(index: number) {
    this.todoList.splice(index, 1);
  }

  updateTodo(title) {
    if (title) {
      title = title.trim();
      if (this.editingTodo) {
        this.editTodo(title);
      } else {
        this.addTodo(title);
      }
    }
    this.hideDialog();
  }

  editTodo(title) {
    this.editingTodo.title = title;
  }

  addTodo(title) {
    const todo = {title: title, completed: false};
    this.todoList.push(todo);
  }

  hideDialog() {
    this.showDialog = false;
    this.editingTodo = null;
    this.fieldValue = null; // make sure Input is always new
  }
}
