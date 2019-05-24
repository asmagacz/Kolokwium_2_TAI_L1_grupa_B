import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsXYComponent } from './orders-details-xy.component';

describe('OrdersDetailsXYComponent', () => {
  let component: OrdersDetailsXYComponent;
  let fixture: ComponentFixture<OrdersDetailsXYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDetailsXYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsXYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
