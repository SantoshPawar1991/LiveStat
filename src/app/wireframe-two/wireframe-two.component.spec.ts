import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WireframeTwoComponent } from './wireframe-two.component';

describe('WireframeTwoComponent', () => {
  let component: WireframeTwoComponent;
  let fixture: ComponentFixture<WireframeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WireframeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WireframeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
