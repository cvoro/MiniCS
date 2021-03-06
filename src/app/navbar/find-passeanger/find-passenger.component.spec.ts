import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPassangerComponent } from './find-passenger.component';

describe('FindPassengerComponent', () => {
  let component: FindPassangerComponent;
  let fixture: ComponentFixture<FindPassangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPassangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPassangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
