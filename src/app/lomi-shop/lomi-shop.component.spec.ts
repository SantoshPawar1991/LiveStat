import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LomiShopComponent } from './lomi-shop.component';

describe('LomiShopComponent', () => {
  let component: LomiShopComponent;
  let fixture: ComponentFixture<LomiShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LomiShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LomiShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
