import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

import { NgbModal, NgbActiveModal, NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { TodoItem } from '../models/TodoItem.model';

@Component({
  selector: 'todomodal',
  templateUrl: './todomodal.component.html',
  styleUrls: ['./todomodal.component.scss']
})
export class TodoModalComponent implements OnInit {

  @Input() todoItem: TodoItem = new TodoItem();

  modalTitle: string;
  todoItemForm: FormGroup;

  startDate: any;

  constructor(
    public activeModal: NgbActiveModal,
    private ngbDateParserFormatter: NgbDateParserFormatter
  ) { }

  get invalidItem(): boolean {
    return !this.todoItemForm.valid;
  }

  ngOnInit() {

    this.modalTitle = (!!this.todoItem.id) ? 'Edit Task' : 'Add a new Task';

    const dueDate = moment(this.todoItem.dueDate).format('DD-MM-YYYY');
    this.startDate = this.ngbDateParserFormatter.parse(dueDate);
    
    this.todoItemForm = new FormGroup({
      title: new FormControl(this.todoItem.title, Validators.required),
      description: new FormControl(this.todoItem.description),
      dueDate: new FormControl(this.startDate),
      done: new FormControl(this.todoItem.done)
    });
  }

  onSaveClick(): void {
    const ngbDate: NgbDateStruct = this.todoItemForm.controls['dueDate'].value;
    const dueDate = moment(new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day)).toISOString();
    const newValues = Object.assign(
      { id: this.todoItem.id },
      this.todoItemForm.value,
      { dueDate: dueDate }
    );
    this.activeModal.close(newValues);
  }

}
