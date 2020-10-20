import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}
