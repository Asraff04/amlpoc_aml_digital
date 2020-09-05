// import { Component, OnInit } from '@angular/core';
// import { UserService } from '../services/user.service';
// // import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';
// import { pipe } from 'rxjs';
// import { Observable, Subject } from 'rxjs';
// import { HttpClient } from '@angular/common/http';


// @Component({
//   selector: 'home-screen',
//   templateUrl: './home-screen.component.html',
//   styleUrls: ['./home-screen.component.css']
// })
// export class HomeScreenComponent implements OnInit {

// userName: string;
// loginuserData :any;

// roleModuleList:any;
// roleArray:any;
// moduleArray:string[]= new Array() ;
// moduleName:any;

//   constructor(private userservice:UserService, private http:HttpClient) {
//    }

//   ngOnInit(): void {

  

//     // this.login_userData = {
//     //   acUsers: {
//     //   username: 'ashsh',
//     //   loginId: 'Ash',
//     //   mailId: 'Ash@xyz.com',
//     //   createdDate: '2019-05-30T18:30:00.000+00:00',
//     //   modifiedDate: '2019-05-30T18:30:00.000+00:00',
//     //   userId: '2',
//     //   firstName: 'Ash',
//     //   lastName: 'Ash',
//     //   displayName: 'Ash'
//     //   },
//     //   acRolesLists: [
//     //   {
//     //   roleId: 2,
//     //   roleName: 'AML Case Investigator',
//     //   roleShortName: 'AML_CASE_INVESTIGATOR',
//     //   roleModuleList: [
//     //   {
//     //   roleId: 2,
//     //   roleName: null,
//     //   moduleName: 'AML Investigate',
//     //   roleShortName: null
//     //   },
//     //   {
//     //   roleId: 2,
//     //   roleName: null,
//     //   moduleName: 'Graph Visualization',
//     //   roleShortName: null
//     //   }
//     //   ]
//     //   },
//     //   {
//     //   roleId: 3,
//     //   roleName: 'AML SAR Writer',
//     //   roleShortName: 'AML SAR WRITER',
//     //   roleModuleList: [
//     //   {
//     //   roleId: 3,
//     //   roleName: null,
//     //   moduleName: 'AML Investigate',
//     //   roleShortName: null
//     //   }
//     //   ]
//     //   }
//     //   ]
//       // }

//     // getUserRoleswithModules(userId){
//     //   console.log("getUserRoleswithModules..."+userId);
//     //   // return this.http.get('http://localhost:8082/user/roles/modules/'+userId).pipe(map((response: any) => response.json()));
//     //   return this.http.get('http://localhost:8082/user/roles/modules/'+userId);
//     // }

// //       this.http.get('http://localhost:8082/user/roles/modules/'+2)
// //       // .pipe(map(response => JSON.stringify(response)))
// //       .pipe(map(r => { console.log(r.acUsers); 
// //         this.loginuserData= r.acRolesLists;
    
// //         console.log("r value...."+this.loginuserData);
// //         console.log(r.acRolesLists[0].roleModuleList[0].moduleName);
// //       }))
// // .subscribe(resp => {
  
// //   console.log("respnses..."+resp);
// //   console.log("outside r value...."+this.loginuserData[0].roleModuleList[0]).moduleName);
// // });


//       // .pipe(map(response => response.json()))
//       // .subscribe(result => {

//       //   console.log("result..."+result);
     
//       // })

//       // .map((response: any) => response.json())
//       // .subscribe(response => {
//       //   console.log("user modules 000..."+response);
//       //   this.login_userData = response;
//       //   console.log("login_data"+JSON.stringify(this.login_userData));
//       //   console.log("user modules..."+JSON.stringify(this.login_userData.acUsers));
//       //   this.userName = JSON.stringify(this.login_userData.acUsers.username);
//       //   console.log("username is....."+this.userName)
//       // })  
      

//       this.userservice.getUserRoleswithModules(3)
//       .subscribe(response =>{
//         console.log("11111..."+JSON.stringify(response));
//         this.loginuserData = response;
//         sessionStorage.setItem('modulesresponse',this.loginuserData);
//         console.log("22222.."+this.loginuserData);
//       })
    

//       console.log("3333.."+sessionStorage.getItem('modulesresponse'));


//       this.userName = JSON.stringify(this.loginuserData.acUsers.username);
//       console.log("username .."+this.userName);
//               this.userName =this.loginuserData.acUsers.username;
//         this.userName =JSON.stringify((this.loginuserData).acUsers.username);
        
//         localStorage.setItem('username',this.userName);
      
//         this.roleArray =JSON.stringify(this.loginuserData);
//         console.log("role array..."+JSON.stringify(this.roleArray));

//           for( let i=0; i<this.roleArray.length;i++){
//             this.roleModuleList =this.roleArray[i].roleModuleList;
//             console.log("Module :"+JSON.stringify( this.roleModuleList));
      
//            for(let j=0; j< this.roleModuleList.length;j++){
//              this.moduleName = this.roleModuleList[j].moduleName;
//              console.log("Module "+j+" is: " + this.moduleName);
//              this.moduleArray.push(this.moduleName);
//            }
      
//           }
//           console.log("Module List :"+this.moduleArray);
//   }

// }



import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { LoginService } from '../services/login.service';
@Component({
selector: 'home-screen',
templateUrl: './home-screen.component.html',
styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
newData:any;
userName: string;
login_userData;
roleModuleList:any;
roleArray:any;
moduleArray:string[]= new Array() ;
moduleName:any;
constructor(
private userService :UserService, 
  private loginService:LoginService
) { }

ngOnInit(): void {
let token = localStorage.getItem('token');
console.log("home screen ..."+token);
console.log("yyyyyyyyyyyyyyyyyyyyyyy  "+JSON.stringify(this.loginService.getCurrentUser(token).userId)) ;
let currentUserId = this.loginService.getCurrentUser(token).userId;

localStorage.setItem('currentUserId', currentUserId);

this.userService.getUserRoleswithModules(currentUserId)
.subscribe(response =>{
  this.login_userData = response;
  // this.newData=JSON.parse(JSON.stringify(response));
  console.log(".new data..."+ this.newData)


console.log("tttttttttttttttttttttt"+this.login_userData)
// console.log(".new data.2222.."+ this.newData)

// console.log("222222........."+(this.newData.acRolesLists));
// console.log("1111........."+this.newData.acUsers);

this.userName =this.login_userData.acUsers.username;

// localStorage.setItem('username',this.userName);

this.roleArray =this.login_userData.acRolesLists;
console.log("roleArray>>>"+this.roleArray);
this.roleArray =this.login_userData.acRolesLists;
for( let i=0; i<this.roleArray.length;i++){
this.roleModuleList =this.roleArray[i].roleModuleList;
console.log("Module :"+JSON.stringify( this.roleModuleList));

     for(let j=0; j< this.roleModuleList.length;j++){
       this.moduleName = this.roleModuleList[j].moduleName;
       console.log("Module "+j+" is: " + this.moduleName);
       this.moduleArray.push(this.moduleName);
     }

    }
    console.log("Module List :"+this.moduleArray);
})
;


// this.login_userData = {
//   acUsers: {
//   username: 'ashsh',
//   loginId: 'Ash',
//   mailId: 'Ash@xyz.com',
//   createdDate: '2019-05-30T18:30:00.000+00:00',
//   modifiedDate: '2019-05-30T18:30:00.000+00:00',
//   userId: '2',
//   firstName: 'Ash',
//   lastName: 'Ash',
//   displayName: 'Ash'
//   },
//   acRolesLists: [
//   {
//   roleId: 2,
//   roleName: 'AML Case Investigator',
//   roleShortName: 'AML_CASE_INVESTIGATOR',
//   roleModuleList: [
//   {
//   roleId: 2,
//   roleName: null,
//   moduleName: 'AML Investigate',
//   roleShortName: null
//   },
//   {
//   roleId: 2,
//   roleName: null,
//   moduleName: 'Graph Visualization',
//   roleShortName: null
//   }
//   ]
//   },
//   {
//   roleId: 3,
//   roleName: 'AML SAR Writer',
//   roleShortName: 'AML SAR WRITER',
//   roleModuleList: [
//   {
//   roleId: 3,
//   roleName: null,
//   moduleName: 'AML Investigate',
//   roleShortName: null
//   }
//   ]
//   }
//   ]
//   }
// console.log("tttttttttttttttttttttt"+this.login_userData)
// console.log(".new data.2222.."+ this.newData)

// console.log("222222........."+(this.newData.acRolesLists));
// console.log("1111........."+this.newData.acUsers);

//   this.userName =this.newData.acUsers.username;

//   localStorage.setItem('username',this.userName);

//    this.roleArray =this.newData.acRolesLists;
// console.log("roleArray>>>"+this.roleArray);
// this.roleArray =this.newData.acRolesLists;
// for( let i=0; i<this.roleArray.length;i++){
// this.roleModuleList =this.roleArray[i].roleModuleList;
// console.log("Module :"+JSON.stringify( this.roleModuleList));

//      for(let j=0; j< this.roleModuleList.length;j++){
//        this.moduleName = this.roleModuleList[j].moduleName;
//        console.log("Module "+j+" is: " + this.moduleName);
//        this.moduleArray.push(this.moduleName);
//      }

//     }
//     console.log("Module List :"+this.moduleArray);
}

}


