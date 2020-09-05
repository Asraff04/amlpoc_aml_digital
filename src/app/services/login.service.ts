import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpBackend} from '@angular/common/http';
import {JwtHelper} from 'angular2-jwt';

var token = localStorage.getItem('token');
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})


export class LoginService {

  constructor(private http:HttpClient, handler:HttpBackend) {
    this.http = new HttpClient(handler);
   }
  
  getCurrentUser(token){
   
    console.log("current user..."+token);
    if(!token) return null;
    let userdetails = new JwtHelper().decodeToken(token);
    return userdetails ;
    console.log("result decoded token:"+userdetails);
  }

  login(credentials) { 
    console.log(credentials.username);
    return this.http.post('http://localhost:8080/authenticate', 
       JSON.stringify(credentials),httpOptions);
       
   }
   signUp(credentials){
    console.log(JSON.stringify("credentials..."+credentials.username));
    return this.http.post('http://localhost:8080/register', 
       JSON.stringify(credentials),httpOptions);

   }

   logout() { 
   }
 
   isLoggedIn() { 
     return false;
   }
}
