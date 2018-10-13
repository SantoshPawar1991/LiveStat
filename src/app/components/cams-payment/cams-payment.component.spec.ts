import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamsPaymentComponent } from './cams-payment.component';

describe('CamsPaymentComponent', () => {
  let component: CamsPaymentComponent;
  let fixture: ComponentFixture<CamsPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamsPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamsPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
