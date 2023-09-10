import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { }

  products(locationID: string) {
    return this.http.get<any[]>(`/api/product//${locationID}`);
  }

}
