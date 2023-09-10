import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient ) { }

  baseServerUrl = "http://localhost:5708/api/"
  LoginUser(){
    return this.http.get(this.baseServerUrl + "Users/Login",
    {
      responseType: 'text'
    });
  }
}
