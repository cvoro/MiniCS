import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckHotelComponent } from './check-hotel.component';

describe('CheckHotelComponent', () => {
  let component: CheckHotelComponent;
  let fixture: ComponentFixture<CheckHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
