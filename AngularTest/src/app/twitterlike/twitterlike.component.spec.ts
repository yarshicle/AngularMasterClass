import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterlikeComponent } from './twitterlike.component';

describe('TwitterlikeComponent', () => {
  let component: TwitterlikeComponent;
  let fixture: ComponentFixture<TwitterlikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterlikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterlikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
