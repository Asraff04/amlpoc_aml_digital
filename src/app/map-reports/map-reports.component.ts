import { Component, OnInit } from '@angular/core';
import {reporttableDetails} from '../user-info';
import { UserService } from '../services/user.service';
import { AlertService } from '../alert';
@Component({
selector: 'map-reports',
templateUrl: './map-reports.component.html',
styleUrls: ['./map-reports.component.css']
})
export class MapReportsComponent implements OnInit {

  existingMappingReport:any;
  report:any;
  listAllNewModule:any;
rollesReport:any;
newReportDetails:any;
selectedRoleName:any;
new_report:any;
isAddreport:boolean=false;
selectedreport =null;
roledetails:any;
mappedreportList:any;
newModule:any;
oldModule:any;
allRolesReport:any;
constructor(protected userService: UserService,
private alertService: AlertService) { }

ngOnInit(): void {

  this.userService.getRoleMapReport()
  .subscribe(response=> {
    this.roledetails = response.roleModuleList;
    console.log(this.roledetails);
  })

  this.userService.getRoleAllModules()
  .subscribe(response=> {
    this.newReportDetails=response;
    this.mappedreportList = response;
    console.log("all modules..."+JSON.stringify(this.mappedreportList));
  })

  this.userService.getAllRoles()
  .subscribe(response=> {
    this.allRolesReport=response;
    console.log("all Roles for mapping reports..."+JSON.stringify(this.allRolesReport));
  })

}

reloadMapModule(){

  this.userService.getRoleMapReport()
  .subscribe(response=> {
    this.roledetails = response;
    this.roledetails = response.roleModuleList;
    console.log(this.roledetails);
  })

}

updateMappedReport(newModuleName, newRoleId, oldModuleName){

  this.alertService.success('response');
  this.newModule = {
    moduleName : newModuleName, 
    roleId:newRoleId
  }

  this.oldModule = {
    moduleName : oldModuleName, 
    roleId:newRoleId
  }

  this.userService.deleteMappedReport(this.oldModule)
  .subscribe(response =>{
  // this.alertService.success('response');
  })
  // this.alertService.success('response');
  

  this.userService.updateMappedReport(this.newModule)
  .subscribe(response =>{
  this.alertService.success('Updated Sucessfully!');
  this.reloadMapModule();
  // window.location.reload();
  })
  // this.alertService.success('response');

  }

  mapReport(){
    console.log("new map report ..."+this.report.roleId+" value .."+this.listAllNewModule);
    this.newReportDetails ={
      "roleId": this.report.roleId,
      "moduleName" :  this.listAllNewModule
    }
    // console.log(">>>>>>>>>>>>>>newroledetails"+JSON.stringify(newReportDetails)
    this.userService.addMapReport(this.newReportDetails)
    .subscribe(response =>{ 
      this.reloadMapModule();
    })
  }

  deleteExistMapReport(newRoleId, oldModuleName){

    this.existingMappingReport={
      "moduleName": oldModuleName,
      "roleId": newRoleId
      }

    this.userService.deleteExistMapReport(this.existingMappingReport)
    .subscribe(response =>{
      //console.log(response);
        // window.location.reload();
        this.reloadMapModule();
    })
  }

}


