import { Component, OnInit } from '@angular/core';
import {ASDataService} from '../service/as-data.service';

@Component({
  selector: 'app-orders-xy',
  templateUrl: './orders-xy.component.html',
  styleUrls: ['./orders-xy.component.css']
})
export class OrdersXYComponent implements OnInit {

  public items$: any;
  constructor(private service: ASDataService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }

}
