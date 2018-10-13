import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrappractiseComponent } from './bootstrappractise.component';

describe('BootstrappractiseComponent', () => {
  let component: BootstrappractiseComponent;
  let fixture: ComponentFixture<BootstrappractiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrappractiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrappractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
