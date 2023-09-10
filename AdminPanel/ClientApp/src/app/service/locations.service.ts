import { Injectable } from '@angular/core';
import { Location } from '../model/location';
import { HttpClient } from '@angular/common/http';

interface SearchLocation {
  data: Location[];
}
@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) { }


  getAllLocations(userid: any) {
    return this.http.get<any[]>(`api/locations/GetAll?userid=${userid}`);

  }
}

