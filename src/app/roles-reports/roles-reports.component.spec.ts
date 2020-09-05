import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesReportsComponent } from './roles-reports.component';

describe('RolesReportsComponent', () => {
  let component: RolesReportsComponent;
  let fixture: ComponentFixture<RolesReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
