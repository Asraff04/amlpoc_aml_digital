import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SarAnalyticsComponent } from './sar-analytics.component';

describe('SarAnalyticsComponent', () => {
  let component: SarAnalyticsComponent;
  let fixture: ComponentFixture<SarAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SarAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SarAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
