import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivestatheaderComponent } from './livestatheader.component';

describe('LivestatheaderComponent', () => {
  let component: LivestatheaderComponent;
  let fixture: ComponentFixture<LivestatheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivestatheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivestatheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
