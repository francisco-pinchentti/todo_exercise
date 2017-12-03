import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LoginService } from './login.service';
import { Subscription } from 'rxjs/Subscription';
import { ErrorModalComponent } from '../base/ErrorModalComponent';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  private subscriptions: Subscription[] = [];
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private loginService: LoginService
  ) {
    localStorage.clear();
    this.loginForm = new FormGroup({
      email: new FormControl('john@doe.com', Validators.required),
      password: new FormControl('12345', Validators.required)
    });
  }

  onFormSend(): void {
    const formValues = this.loginForm.value;
    this.subscriptions.push(this.loginService
      .login(formValues.email, formValues.password)
      .subscribe((response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('username', `${response.lastname}, ${response.firstname}`);
        this.router.navigate(['todo']);
      }, (err: any) => this.showErrorModal())
    );

  }

  ngOnDestroy() {
    this.subscriptions.forEach((s: Subscription) => s.unsubscribe());
  }

  showErrorModal() {
    const modalRef = this.modalService.open(ErrorModalComponent);
    modalRef.componentInstance.title = 'Error';
    modalRef.componentInstance.message = 'Invalid Login';
  }

}
