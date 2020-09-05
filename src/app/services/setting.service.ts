import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private http:HttpClient ) { }

  getUserDetails(userI1d){
    return this.http.get('http://localhost:8080/users/'+userI1d);
  }

  changePassword(pwdetails, currentUserId){
    console.log("change password ...."+JSON.stringify(pwdetails), currentUserId);
    return this.http.put('http://localhost:8080/changepwd/'+currentUserId, pwdetails);
  }

}

