import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetails-roles',
  templateUrl: './userdetails-roles.component.html',
  styleUrls: ['./userdetails-roles.component.css']
})
export class UserdetailsRolesComponent implements OnInit {

  public isMaintainUsers: boolean =true;
  public isMapRoles: boolean =false;
  constructor() { }

  ngOnInit(): void {
  }
   

}
