import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassangersComponent } from './passangers.component';

describe('PassangersComponent', () => {
  let component: PassangersComponent;
  let fixture: ComponentFixture<PassangersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassangersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassangersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
