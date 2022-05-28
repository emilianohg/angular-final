import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  get isUserLoggedIn(): boolean {
    return this.auth.isUserLoggedIn();
  }

  get isInLogin(): boolean {
    return this.router.url === '/auth';
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/auth');
  }
}
