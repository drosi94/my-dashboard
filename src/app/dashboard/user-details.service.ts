import { Injectable } from '@angular/core';
import { UserDetails } from './user-details.model';

@Injectable({
  providedIn: 'root',
})
export class UserDetailsService {
  private userDetailsList: UserDetails[] = [
    {
      firstName: 'Bill',
      lastName: 'Drosatos',
      email: 'bill@drosatos.com',
      phoneNumber: '0123490540',
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'John@Doe.com',
      phoneNumber: '0133490541',
    },
    {
      firstName: 'Test',
      lastName: 'User',
      email: 'test@User.com',
      phoneNumber: '0133430234',
    },
  ];

  addUser(userDetails: UserDetails): void {
    this.userDetailsList = [userDetails, ...this.userDetailsList];
  }

  getList(): UserDetails[] {
    return this.userDetailsList;
  }
}
