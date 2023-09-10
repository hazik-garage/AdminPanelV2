import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { LocalStorageService } from '../service/localstorage.service';
import { LoginService } from '../service/login.service';
import { LocationsService } from '../service/locations.service';
// import { Injectable, Inject } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
// import { Users } from '../model/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private returnUrl = '';
  id: any;
  errorMessage: string = '';
  public showPass: boolean = false;
  public edited: boolean = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private locationService: LocationsService,
    private authService: AuthService,
    private ls: LocalStorageService) { }
  ngOnInit(): void { }
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
  });
  // this.returnUrl = this.route.snapshot.queryParams['/admin/dashboard'] || '/';

  public showPassword(): void {
    this.showPass = !this.showPass
  }
  onSubmit() {
    //this.router.navigate(["/admin/dashboard"]);

    this.loginService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value).subscribe(
      (data: any) => {

        if (data != null) {
          this.ls.setSelectedUser(data);
          this.loadLocations(data["id"]);
          // this.router.navigate(["/admin/dashboard"]);
        }
        else {

          // this.ts.showerror("Error", "Username or password is not correct.");
        }
      },
      error => {
      }
    );
    this.edited = true;

  }
  get f() { return this.loginForm.controls; }

  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get Password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
  private loadLocations(id: any) {

    this.locationService.getAllLocations(id).subscribe((res: any) => {

      if (res.length > 0) {
        this.ls.setLocation(res);
        this.ls.setSelectedLocation(res[0]);
        this.router.navigate(["/admin/dashboard"]);
      }
      else {
        this.ls.setLocation(null);
        this.ls.setSelectedLocation(null);
      }
    });
  }
}
