import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;
  public loginLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  async ngOnInit(): Promise<void> {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/),
        ],
      ],
    });
    if (this.authService.isLoggedIn()) {
      await this.router.navigate(['/dashboard']);
    }
  }

  async onSubmit() {
    this.loginInvalid = false;
    if (this.form.valid) {
      const username = this.form.get('username').value;
      const password = this.form.get('password').value;
      this.loginLoading = true;
      const authenticated = await this.authService.authenticateUser(
        username,
        password
      );
      this.loginLoading = false;

      if (!authenticated) {
        this.loginInvalid = true;
      } else {
        await this.router.navigate(['/dashboard']);
      }
    }
  }
}
