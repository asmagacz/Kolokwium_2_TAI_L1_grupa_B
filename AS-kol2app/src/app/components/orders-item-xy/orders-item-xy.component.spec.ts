import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemXYComponent } from './orders-item-xy.component';

describe('OrdersItemXYComponent', () => {
  let component: OrdersItemXYComponent;
  let fixture: ComponentFixture<OrdersItemXYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersItemXYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemXYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
