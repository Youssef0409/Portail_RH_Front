import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/gestion'; // Replace with your backend API URL


  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<User[]> {
    const endpoint = '/user/getAll/employee';
    return this.http.get<User[]>(this.apiUrl+ endpoint);
  }

  getAllMangers(): Observable<User[]> {
    const endpoint = '/user/getAll/manager';
    return this.http.get<User[]>(this.apiUrl+ endpoint);
  }

  deleteUser(userId: number): Observable<void> {
    const endpoint = `/delete/users/${userId}`; // Additional path for user ID
    return this.http.delete<void>(this.apiUrl + endpoint);
  }

  updateUser(id: number, user: User): Observable<User> {
    const url = `${this.apiUrl}/update/user/${id}`;
    return this.http.put<User>(url, user);
  }

  
  getUserById(userId: number): Observable<User> {
    const url = `${this.apiUrl}/find/user/${userId}`;
    return this.http.get<User>(url);
  }
}
