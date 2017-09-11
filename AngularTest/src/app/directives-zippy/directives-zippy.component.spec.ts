import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesZippyComponent } from './directives-zippy.component';

describe('DirectivesZippyComponent', () => {
  let component: DirectivesZippyComponent;
  let fixture: ComponentFixture<DirectivesZippyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesZippyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesZippyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
