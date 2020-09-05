import { Component, OnInit } from '@angular/core';
import {Roles} from '../user-info';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { AlertService } from '../alert';

@Component({
  selector: 'maintain-user',
  templateUrl: './maintain-user.component.html',
  styleUrls: ['./maintain-user.component.css']
})
export class MaintainUserComponent implements OnInit {

  options = {
    autoclose:true
  };

  public rolelist:any;
  public updatedRole:any;
  public isAddrole:boolean =false;

  constructor(private userService: UserService,
      protected alertService: AlertService
      ) { }

  ngOnInit(): void {

    this.userService.getAllRoles()
    .subscribe(response =>{
      this.rolelist = response;
      console.log(this.rolelist);
    })
  }

  reloadMaintainRole(){
    this.userService.getAllRoles()
    .subscribe(response =>{
      this.rolelist = response;
      console.log(this.rolelist);
    })

  }
  
  addRole(newRoledetails:NgForm){
    console.log(newRoledetails);
    this.userService.addRole(newRoledetails)
    .subscribe(response =>{
      //statusCd codition
      console.log(response);
      //window.alert("Successfully added !!!");
      this.alertService.success('Successfully Added !!', this.options);
      this.reloadMaintainRole();
      // window.location.reload();
    })
   
  }

  updateRole(roleId, i){
    console.log("role list>>>>>>>>>>>>>>>>>>"+this.rolelist[i]+ " i value "+i);
    this.updatedRole = this.rolelist[i];
    this.userService.updateRoles(this.updatedRole,roleId)
    .subscribe(response =>{
      //statusCd codition
    //  window.alert("Successfully Updated !!!");
    this.alertService.success('Successfully Updated !!', this.options);
    this.reloadMaintainRole();
      // window.location.reload();
    })
    
  }

  deleteRole(roleId,i){
    this.userService.deleteRole(roleId)
    .subscribe(response =>{
      console.log(response);
      this.rolelist.splice(i,1);
    //  window.alert("Successfully deleted !!!");
    this.alertService.success('Successfully deleted !!', this.options);
    this.reloadMaintainRole();      
      // window.location.reload();
    })
    
  }

}
