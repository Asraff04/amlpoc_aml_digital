import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauDataComponent } from './tableau-data.component';

describe('TableauDataComponent', () => {
  let component: TableauDataComponent;
  let fixture: ComponentFixture<TableauDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
