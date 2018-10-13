import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalpaymentComponent } from './internationalpayment.component';

describe('InternationalpaymentComponent', () => {
  let component: InternationalpaymentComponent;
  let fixture: ComponentFixture<InternationalpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
