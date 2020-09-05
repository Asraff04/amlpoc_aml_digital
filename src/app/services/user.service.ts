import { Injectable } from '@angular/core';
import 'rxjs/operators';
import { map } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

// var token = localStorage.getItem('token');

// const httpOptionsHeaders = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json', 
//     'Authorization' : `Bearer${token}`
//   })
// };
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
//httpOptionsHeaders
// http://localhost:8082/user/roles/modules/2




  getAllUsers(){
    console.log("http All Users...")
    return this.http.get('http://localhost:8080/users');

  }

  getUserRoleswithModules(userId){
    console.log("getUserRoleswithModules..."+userId);
    // return this.http.get('http://localhost:8082/user/roles/modules/'+userId).pipe(map((response: any) => response.json()));
    return this.http.get('http://localhost:8082/user/roles/modules/'+userId);
  }

  deleteUser(userId){
    console.log("delete method... "+userId);
    return this.http.delete('http://localhost:8080/users/'+userId, userId);
  }

  addUser(newUser){
    return this.http.post('http://localhost:8080/users',newUser);
  }

  updateUser(newrole,userid){
    console.log("payload... "+userid + newrole);
    return this.http.put('http://localhost:8080/users/'+userid,newrole);
  }

  getAllRoles(){
    return this.http.get('http://localhost:8081/roles/');
  }

  addRole(newRoledetails){
    //console.log("post method ..."+updatedRole);
    return this.http.post('http://localhost:8081/roles/',newRoledetails);
  }

  updateRoles(updatedRole, userId){
  console.log("put method ..."+updatedRole);
  return this.http.put('http://localhost:8081/roles/'+userId, updatedRole);
  }
    
  deleteRole(userId){
  return this.http.delete('http://localhost:8081/roles/'+userId, userId);
  }

  addMapRole(newmappedRole){
    return this.http.post('http://localhost:8082/userroles/', newmappedRole);
  }
  

  getMappedUser(){
    return this.http.get('http://localhost:8082/userrolestest');
  }

  updateMappedRole(mappedRole){
    console.log("put method... "+mappedRole);
    return this.http.put('http://localhost:8082/userroles/'+mappedRole.userId, mappedRole);
  }

  deleteMappedRole(oldRole){
    console.log("Delete method... "+oldRole);
    return this.http.post('http://localhost:8082/userroles/'+oldRole.userId, oldRole);
  }

  deleteExistingRole(oldRole){
    console.log("Delete existing method... "+oldRole);
    return this.http.post('http://localhost:8082/userroles/'+oldRole.userId, oldRole);
  }

  // Mapping report APIs

  getRoleMapReport(){
    console.log("get method... ");
    return this.http.get('http://localhost:8083/mapmodules/maprolesdetails/')
  }

  // http://localhost:8083/rolemodules/rolesdetails
 

  getRoleAllModules(){
    console.log("get all modules method... ");
    return this.http.get('http://localhost:8083/mapmodules/mapallmodules/')
  }

  // http://localhost:8083/rolemodules/roles
  
  addMapReport(newModule){
    console.log("add all modules method... "+JSON.stringify(newModule));
    return this.http.post('http://localhost:8083/mapmodules/module/', newModule)
  }

  updateMappedReport(newModule){
    console.log("Put all modules method... "+JSON.stringify(newModule));
    return this.http.put('http://localhost:8083/mapmodules/module/'+newModule.roleId, newModule)
  }

  deleteMappedReport(oldModule){
    console.log("delete all modules method... "+JSON.stringify(oldModule));
    return this.http.post('http://localhost:8083/mapmodules/module/'+oldModule.roleId, oldModule)
  }

  
  deleteExistMapReport(oldRole){
    console.log("Delete existing method... "+oldRole);
    return this.http.post('http://localhost:8083/mapmodules/module/'+oldRole.roleId, oldRole);
  }
}
