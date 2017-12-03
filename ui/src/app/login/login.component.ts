import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


import { LoginService } from './login.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('john@doe.com', Validators.required),
      password: new FormControl('12345', Validators.required)
    });
  }

  ngOnInit() {
    localStorage.clear();
  }

  onFormSend(): void {
    const formValues = this.loginForm.value;

    this.subscriptions.push(this.loginService
      .login(formValues.email, formValues.password)
      .subscribe((response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('username', `${response.lastname}, ${response.firstname}`);
        this.router.navigate(['todo']);
      })
    );

  }

  ngOnDestroy() {
    this.subscriptions.forEach((s: Subscription) => s.unsubscribe());
  }

}
