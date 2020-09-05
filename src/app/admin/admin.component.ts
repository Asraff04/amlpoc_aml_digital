import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   isManageUsers: boolean =true;
   isManageRoles: boolean =false;
  constructor() { }


  ngOnInit(): void {
  }


}
