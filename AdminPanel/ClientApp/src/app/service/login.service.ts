import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Users } from '../model/users';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private currentUserSubject: BehaviorSubject<Users>;
  public currentUser: Observable<Users>;
  public BaseUrl: string = '';
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.BaseUrl = baseUrl;
    this.currentUserSubject = new BehaviorSubject<Users>(JSON.parse(sessionStorage.getItem('authenticatedUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Users {
    return this.currentUserSubject.value;
  }

  loginuser() {
    return this.http.get<any[]>(`api/users/login`);

    //return this.http.get<any[]>(`api/Users/Login/${email}/${password}`);

  }

  login(email: string, password: string) {
    return this.http.get<any[]>(`/api/login/${email}/${password}`);
   
  }

}
