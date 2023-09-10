import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/localstorage.service';
import { LocationsService } from 'src/app/service/locations.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  public showLogout: boolean = false

  constructor(private router: Router
    , public service: LocationsService
    , public ls: LocalStorageService) { }

  ngOnInit(): void {
  }

  public getLogoutDropdown(): void {
    this.showLogout = !this.showLogout
  }
  Logout() {

    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
