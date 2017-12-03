import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showLogout: boolean;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  get token(): string {
    return localStorage.getItem('token');
  }

  get username(): string {
    return localStorage.getItem('username');
  }

  onLogoutClick(): void {
    this.loginService
      .logout(this.token)
      .subscribe(() => this.clearStorageAndNavigateHome(), () => this.clearStorageAndNavigateHome());
  }

  private clearStorageAndNavigateHome() {
    localStorage.clear();
    this.router.navigate(['']);
  }

}
