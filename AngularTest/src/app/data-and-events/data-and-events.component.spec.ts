import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAndEventsComponent } from './data-and-events.component';

describe('DataAndEventsComponent', () => {
  let component: DataAndEventsComponent;
  let fixture: ComponentFixture<DataAndEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataAndEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAndEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
