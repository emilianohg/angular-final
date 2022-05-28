import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  submitted: boolean;
  messageError = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) {

    this.submitted = false;

    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });

  }

  ngOnInit(): void {}

  login() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const data = this.form.value;

    this.auth.login(data.email, data.password).subscribe(res => {
        this.messageError = '';
        this.router.navigateByUrl('/posts');
      },(error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.messageError = 'Correo electrónico o contraseña invalidos.';
        }
      });
  }

}
