import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LoginRequest, RegisterRequest } from '../models/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseurl: string = `${environment.baseUrl}auth/`;

  constructor(private http: HttpClient) {}

  login(body: LoginRequest) {
    return this.http.post(`${this.baseurl}login`, body);
  }

  register(body: RegisterRequest) {
    return this.http.post(`${this.baseurl}register`, body);
  }
}
