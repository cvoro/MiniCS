import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeisureConsultantsComponent } from './leisure-consultants.component';

describe('LeisureConsultantsComponent', () => {
  let component: LeisureConsultantsComponent;
  let fixture: ComponentFixture<LeisureConsultantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeisureConsultantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeisureConsultantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
