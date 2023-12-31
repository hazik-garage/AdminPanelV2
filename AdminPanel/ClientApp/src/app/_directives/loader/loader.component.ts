import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { LoaderService } from '../../service/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoaderComponent implements OnInit {

  constructor(public loader:LoaderService) { }

  ngOnInit(): void {
  }

}
