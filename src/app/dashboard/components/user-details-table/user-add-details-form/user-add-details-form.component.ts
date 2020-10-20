import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDetails } from 'src/app/dashboard/user-details.model';
import { UserDetailsService } from 'src/app/dashboard/user-details.service';

@Component({
  selector: 'app-user-add-details-form',
  templateUrl: './user-add-details-form.component.html',
  styleUrls: ['./user-add-details-form.component.css'],
})
export class UserAddDetailsFormComponent implements OnInit {
  form: FormGroup;
  @Output() updateListEvent = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private userDetailsService: UserDetailsService) {}

  async ngOnInit(): Promise<void> {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  async onSubmit() {
    if (this.form.valid) {
      const userDetails: UserDetails = {
        firstName: this.form.get('firstName').value,
        lastName: this.form.get('lastName').value,
        email: this.form.get('email').value,
        phoneNumber: this.form.get('phoneNumber').value,
      }

      this.userDetailsService.addUser(userDetails);
      this.updateListEvent.emit();
    }
  }
}
