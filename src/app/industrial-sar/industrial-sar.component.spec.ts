import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialSarComponent } from './industrial-sar.component';

describe('IndustrialSarComponent', () => {
  let component: IndustrialSarComponent;
  let fixture: ComponentFixture<IndustrialSarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustrialSarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrialSarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
