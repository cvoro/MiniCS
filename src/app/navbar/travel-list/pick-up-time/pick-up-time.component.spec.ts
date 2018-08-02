import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickUpTimeComponent } from './pick-up-time.component';

describe('PickUpTimeComponent', () => {
  let component: PickUpTimeComponent;
  let fixture: ComponentFixture<PickUpTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickUpTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickUpTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
