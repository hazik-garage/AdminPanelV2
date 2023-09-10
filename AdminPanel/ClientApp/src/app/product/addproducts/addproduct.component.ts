import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isCollapsed = false;

}
