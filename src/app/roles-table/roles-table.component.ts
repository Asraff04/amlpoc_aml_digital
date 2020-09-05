import { Component, OnInit } from '@angular/core';
import {User} from '../user-info';
import {MatSelectModule} from '@angular/material/select';
import { UserService } from '../services/user.service';
import {Router} from '@angular/router';
import { JsonPipe } from '@angular/common';
@Component({
selector: 'roles-table',
templateUrl: './roles-table.component.html',
styleUrls: ['./roles-table.component.css']
})
export class RolesTableComponent implements OnInit {
  oldExistRole:any;
oldRole:any;
enableEdit = false;
enableEditIndex = null;
userdetails:any;
mappedrolelist:any;
mappedRole:any;
selected='';
selectedUser:any;
mail:any;
user: any;
new_role:any;
AllUsers:any;
isEditable:any;

constructor(
public userService: UserService,
private router:Router)
{ }

isUpdate: boolean=false;
rolelist: any;
selectedOption: string;
ngOnInit(): void {

//this.rolelist = this.userroles;

this.userService.getMappedUser()
.subscribe(response =>{
  this.userdetails=response;
//response = this.userroles;
this.mappedRole = response;
console.log("role mapping "+JSON.stringify(response));

})

this.userService.getAllUsers()
.subscribe(response =>{
  console.log("All users for mapping role .... "+JSON.stringify(response));
  this.AllUsers = response;
})

this.userService.getAllRoles()
.subscribe(response =>{
  console.log("All roles for mapping .... "+response);
  this.mappedrolelist = response;
})



}

selectedrole=null;

userroles=[
'Admin','fdfsd','dffer','jekui','ghgwrh'
]

users =[
new User(1,'Administrator','Admin','Null','Admin','admin@xyz.com','01/02/2020','01/20/2020'),
new User(1,'John Smith','John','Smith','Jsmith','Jsmith@xyz.com','27/12/2020','27/12/2020'),
new User(1,'Tanaji Patil','Tanaji','Patil','tanajipatil','tanajipatil9696@gmail.com','27/12/2020','27/12/2020'),
new User(1,'Tanaji Patil','Tanaji','Patil','tanajipatil','tanajipatil9696@gmail.com','27/12/2020','27/12/2020')
]

deleteUser(userId){

this.users.splice(userId,1);
this.userService.deleteUser(userId)
.subscribe(response =>{
  console.log(response);
  this.users.splice(userId,1);
})
}


reloadDataMapRole(){
    this.userService.getMappedUser()
  .subscribe(response =>{
    this.userdetails=response;
  //response = this.userroles;
  this.mappedRole = response;
  console.log("role mapping "+JSON.stringify(response));

  })
  this.userService.getAllRoles()
  .subscribe(response =>{
    console.log("roles .... "+response);
    this.mappedrolelist = response;
  })
   this.isEditable = -1;
    this.enableEditIndex = -1;
}

updateRole(userId, mappedRole, roleId, oldroleId, oldroleName ){
  this.mappedRole={
    userId : userId,
    mappedRole: mappedRole,
    roleId: roleId
    }

    this.oldRole={
      userId : userId,
      mappedRole: oldroleName,
      roleId: oldroleId
      }
  
      
  console.log("delete .... "+JSON.stringify(this.oldRole));
  this.userService.deleteMappedRole(this.oldRole)
  .subscribe(response =>{
    //console.log(response);
      // window.location.reload();
  })

  console.log("update .... "+JSON.stringify(this.mappedRole));
  this.userService.updateMappedRole(this.mappedRole)
  .subscribe(response =>{
    //console.log(response);
    //  window.location.reload();
    this.reloadDataMapRole();
  })

  
}

submit(selectedUser){
  console.log("working form"+JSON.stringify(selectedUser));
  this.mail = selectedUser.mailId;
  console.log(~~~~~~~~~~~ ~~~~~~~~+this.mail);
  }
  mapRole(){
  console.log("////////////////"+JSON.stringify(this.user.userId)+","+this.mail+","+this.new_role.roleId);
  const newRoleDetails ={
    "userId": this.user.userId,
    "roleId" :  this.new_role.roleId,
    "mappedRole": this.new_role.roleShortName
  }
  console.log(">>>>>>>>>>>>>>newroledetails"+JSON.stringify(newRoleDetails));
  this.userService.addMapRole(newRoleDetails)
  .subscribe(response =>{
    console.log("add mapping .."+response);
    this.reloadDataMapRole();
  })
  }

  
  deleteExistRole(userid, roleId, roleName){

    this.oldExistRole={
      userId : userid,
      mappedRole: roleName,
      roleId: roleId
      }

    this.userService.deleteExistingRole(this.oldExistRole)
    .subscribe(response =>{
      //console.log(response);
        // window.location.reload();
        this.reloadDataMapRole();
    })
  }
  enableEditMethod(e, i) {
    this.isEditable = i;
    this.enableEditIndex = i;
    console.log(i, e);
    }
}

