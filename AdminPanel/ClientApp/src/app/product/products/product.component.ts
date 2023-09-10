import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products = [
    { image: './assets/img/nav-icons/Mobil.png', name: 'Castrol 15w40', category: 'Oil 1', inventory: '24,332', price: '22.25SAR',status:'Active'},
    { image: './assets/img/nav-icons/Mobil.png', name: 'Shell helix 15w40 Castrol 15w40', category: 'Oil Filter', inventory: '4,345', price: '345.25SAR',status:'Inactive'},
    { image: './assets/img/nav-icons/Mobil.png', name: 'O/F 90915-YZZD4', category: 'Air filter', inventory: '523,432', price: '430.75 SAR',status:'Active'},
    { image: './assets/img/nav-icons/Mobil.png', name: 'O/F me21500 zurex Castrol 15w40', category: 'OIL FILTER', inventory: '54,325', price: '62.00 SAR',status:'Active'},
    { image: './assets/img/nav-icons/Mobil.png', name: 'O/F MD-36093545...', category: 'OIL FILTE...', inventory: '8,643', price: '62.00 SAR',status:'Inactive'},
    { image: './assets/img/nav-icons/Mobil.png', name: 'ENGINE-OIL-F2 Castrol 15w40', category: 'Air filter', inventory: '6,85,894', price: '22.25 SAR',status:'Active'},
    { image: './assets/img/nav-icons/Mobil.png', name: 'shell helix 10w30', category: 'OIL2', inventory: '3,324', price: '430.75 SAR',status:'Active'},
    { image: './assets/img/nav-icons/Mobil.png', name: 'HYUNDAI XTEER...', category: 'Mechanical', inventory: '13,456', price: '22.25SAR',status:'Active'},
    { image: './assets/img/nav-icons/Mobil.png', name: 'Castrol 10W30', category: 'window film', inventory: '54,674', price: '430.75 SAR',status:'Inactive'},
    { image: './assets/img/nav-icons/Mobil.png', name: 'Petromin Diesel 1...', category: 'window film', inventory: '12,322', price: '22.25SAR',status:'Active'},
    { image: './assets/img/nav-icons/Mobil.png', name: 'Castrol 15w40', category: 'Oil 1', inventory: '24,332', price: '22.25SAR',status:'Active'},
    { image: './assets/img/nav-icons/Mobil.png', name: 'Castrol 15w40', category: 'Oil 1', inventory: '24,332', price: '22.25SAR',status:'Active'},
    { image: './assets/img/nav-icons/Mobil.png', name: 'Castrol 15w40', category: 'Oil 1', inventory: '24,332', price: '22.25SAR',status:'Active'}
  ]

  // constructor() { }

  // ngOnInit(): void {
  // }



}
