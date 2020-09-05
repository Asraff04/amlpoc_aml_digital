import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailsRolesComponent } from './userdetails-roles.component';

describe('UserdetailsRolesComponent', () => {
  let component: UserdetailsRolesComponent;
  let fixture: ComponentFixture<UserdetailsRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdetailsRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailsRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
