import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/localstorage.service';
import { LocationsService } from 'src/app/service/locations.service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
})
export class BaseLayoutComponent implements OnInit {

  constructor(private router: Router
    , public service: LocationsService
    , public ls: LocalStorageService) { }

  ngOnInit(): void {

    var data = this.ls.getSelectedUser();

    if (data == null)
      this.router.navigate(["/"]);

    var selectedLocation = this.ls.getSelectedLocation();

  }
  Logout() {

    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
