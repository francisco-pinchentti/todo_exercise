import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { TodoService } from '../todo.service';
import { TodoItem } from '../models/TodoItem.model';
import { TodoModalComponent } from '../todomodal/todomodal.component';

@Component({
  selector: 'todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  todoItems: TodoItem[];
  username: string;

  constructor(
    private todoService: TodoService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.todoService
      .list()
      .subscribe((response: any[]) => {
        this.todoItems = response.map( itemData => new TodoItem(itemData) );
      });
  }

  onEditClick(todoItem: TodoItem): void {
    const modalRef = this.modalService.open(TodoModalComponent);

    modalRef.componentInstance.todoItem = todoItem;

    modalRef.result.then((result: any) => {
      const updatedItem = new TodoItem(result);
      this.todoService
        .update(updatedItem)
        .subscribe((response: any) => {
          // update with BE data:
          todoItem.assign(response);
        });
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onDeleteClick(todoItem: TodoItem): void {
    const targetId = todoItem.id;
    this.todoService
    .delete(targetId)
    .subscribe( (response: any) => {
      this.todoItems = this.todoItems.filter( (item: TodoItem) => item.id !== targetId);
    });
  }

  onCreateClick(): void {
    const modalRef = this.modalService.open(TodoModalComponent);
    modalRef.result.then((result: any) => {
      const newItem = new TodoItem(result);
      this.todoService
        .create(newItem)
        .subscribe((response: any) => {
          this.todoItems.push(new TodoItem(response));
        });
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }


}
