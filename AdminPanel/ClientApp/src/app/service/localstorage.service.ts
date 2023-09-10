import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setSelectedUser(users: any) {

    sessionStorage.setItem('autheticatedUser', JSON.stringify(users));
  }

  getSelectedUser() {

    let userData = JSON.parse(sessionStorage.getItem("autheticatedUser") || '{}');
    if (userData !== null) {
      /*userData = JSON.parse(userData.data);*/
      return userData;
    }
  }

  setSelectedLocation(location: any) {
    sessionStorage.setItem('selectedLocation', JSON.stringify(location));
  }

  getSelectedLocation() {
    return JSON.parse(sessionStorage.getItem("selectedLocation") || '{}');
  }
  setLocation(location: any) {
    sessionStorage.setItem('Locations', JSON.stringify(location));
  }

  getLocation() {
    return JSON.parse(sessionStorage.getItem('Locations') || '{}');
  }

}
