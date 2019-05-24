import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersXYComponent } from './orders-xy.component';

describe('OrdersXYComponent', () => {
  let component: OrdersXYComponent;
  let fixture: ComponentFixture<OrdersXYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersXYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersXYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
