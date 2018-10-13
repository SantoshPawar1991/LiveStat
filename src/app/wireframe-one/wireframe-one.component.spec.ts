import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WireframeOneComponent } from './wireframe-one.component';

describe('WireframeOneComponent', () => {
  let component: WireframeOneComponent;
  let fixture: ComponentFixture<WireframeOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WireframeOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WireframeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
