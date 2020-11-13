import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  
  constructor(private http: HttpClient) { }

  async login(user: any) {
    const result = await this.http.post<any>(`${environment.api}/auth/login`, user).toPromise();
    if (result && result.access_token) {
      window.localStorage.setItem('token', result.access_token);

      return true;
    }

    return false;
  }


  createAccount(account: any) {
    return new Promise((resolve) => {
      resolve(true);
    });
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }


  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpiryDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }


  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }
    return true;
  }

  getTokenExpiryDate(token: string): Date {
    const decoded: any = jwt_decode(token);
    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setSeconds(decoded.exp);
    return date;
  }

  // getUser(token: string){
  //   const decoded: any = jwt_decode(token);
  //   if (decoded.sub != null) {
  //     return decoded.sub;
  //   }
  // }
}
