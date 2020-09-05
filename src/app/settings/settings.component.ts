import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from'@angular/material/card';
import { SettingService } from '../services/setting.service';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
selector: 'app-settings',
templateUrl: './settings.component.html',
styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
userDetails:any;
secAns1: any;
secAns2:any;
pwd: any;
isPwdChanged:any;
isSavebtn:boolean=false;
currentUserId:any = localStorage.getItem('currentUserId');
username:any;

isPwdShow: boolean = false;

constructor(private settingService: SettingService, private userService:UserService, private router:Router) {
this.secAns1 ="tana";
this.secAns2 ="Pune";
this.pwd ="Tanaji@2020";
}



ngOnInit(): void {
  console.log("current iser identifierModuleUrl "+this.currentUserId);
  this.settingService.getUserDetails(this.currentUserId)
  .subscribe(response =>{
    console.log(response);
    this.userDetails = response;
    // this.currentUserId = this.userDetails.userId;
    this.username = this.userDetails.username;
    })
}
resetPwd(pwdDetails: NgForm){
  console.log("pwd details..."+JSON.stringify(pwdDetails), this.currentUserId);
  this.settingService.changePassword(pwdDetails, this.currentUserId)
  .subscribe(response =>{
    //statusCd codition
    console.log(response);
    this.isPwdChanged = true;
  })
  }
  
  redirectToLogin(){
  localStorage.removeItem('token');
  this.router.navigate(['/']);
  }

}

