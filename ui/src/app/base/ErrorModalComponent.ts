import { Input, Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'error-modal',
    template: `
      <div class="modal-header">
        <h4 class="modal-title">{{ title }}</h4>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>{{ message }}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
      </div>
    `
})
export class ErrorModalComponent {
    @Input() title: string;
    @Input() message: string;
    constructor(public activeModal: NgbActiveModal) { }
}
