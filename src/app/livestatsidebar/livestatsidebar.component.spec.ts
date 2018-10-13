import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivestatsidebarComponent } from './livestatsidebar.component';

describe('LivestatsidebarComponent', () => {
  let component: LivestatsidebarComponent;
  let fixture: ComponentFixture<LivestatsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivestatsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivestatsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
