import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../modal/user';
import { Food } from '../modal/food';
import { error } from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  private usersapi = "https://localhost:7280/api/userApi";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  getusersapi() : Observable<any>{
    return this.http.get<any>(this.usersapi);
  }



  login(email: string, password: string): Observable<any>{
  const body = JSON.parse('{"email": "' + email + '", "password": "' + password + '"}');

    return this.http.post<any>(this.usersapi + '/login', body).pipe(
      catchError((error: HttpErrorResponse) =>{
        console.error('login error', error);
        return throwError(error);
      })
    );
  }
}
