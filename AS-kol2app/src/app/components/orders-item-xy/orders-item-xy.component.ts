import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-item-xy',
  templateUrl: './orders-item-xy.component.html',
  styleUrls: ['./orders-item-xy.component.css']
})
export class OrdersItemXYComponent implements OnInit {
  @Input() image: string;
  @Input() text: string;
  @Input() id: number;

  constructor() { }

  ngOnInit() {
  }

}
