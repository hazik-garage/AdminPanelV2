import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  constructor(private http: HttpClient) { }

  readIntergraion(userId: number){
    return this.http.get(`/api/integration/GetAll?userID=${userId}`)
  }
}
