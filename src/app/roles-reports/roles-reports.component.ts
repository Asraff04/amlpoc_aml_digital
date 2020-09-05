import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles-reports',
  templateUrl: './roles-reports.component.html',
  styleUrls: ['./roles-reports.component.css']
})
export class RolesReportsComponent implements OnInit {
  public isMaintainRoles: boolean =true;
  public isMapReports: boolean =false;
  constructor() { }

  ngOnInit(): void {
  }

}
