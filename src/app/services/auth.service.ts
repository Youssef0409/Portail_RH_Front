import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/login-request';
import { RegisterRequest } from '../models/register-request';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}
  
  private refreshTokenUrl = 'http://localhost:8080/api/v1/auth/refresh-token';
  login(loginRequest: LoginRequest): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/v1/auth/authenticate', loginRequest);
  }

  decodeToken(token: string): any {
    return this.jwtHelper.decodeToken(token);
  }
  register(registerRequest: RegisterRequest): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/v1/auth/register', registerRequest);
  }

 

  logout() {
    const url = 'http://localhost:8080/api/v1/auth/logout';
    return this.http.post(url, null);
  }


  getUserByEmail(email: string): Observable<User> {
    const url = `http://localhost:8080/gestion/user/email/${email}`;
    return this.http.get<User>(url);
  }

  refreshAccessToken(): Observable<any> {
    return this.http.post(this.refreshTokenUrl, {});
  }


  isAuthenticated(): boolean {
    const bearerToken = localStorage.getItem('access_token');

    // Check if the bearer token exists and is not expired
    return !!bearerToken; // Return true if bearer token exists, false otherwise
  }

  getUserRole(): string | null {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      return user.role; // Assuming the user object has a 'role' property
    }
    return null; // User data not found or user has no role
  }
}
