import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public authenticateUser(username, password): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        if (username === 'admin' && password === 'Aa123456') {
          localStorage.setItem('loggedin', '1');
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1300);
    });
  }

  public logout(): void {
    localStorage.removeItem('loggedin');
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('loggedin') ? true : false;
  }
}
