import { Component, OnInit } from '@angular/core';
import {User} from '../user-info';
import { UserService } from '../services/user.service';
import { NgForm }   from '@angular/forms';
import {AlertService} from '../alert/alert.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  options = {
    autoClose: false
  };
  enableEdit = false;   
  enableEditIndex = null;
  public updatedUser: any;
  public isAdduser:boolean =false;
  public userdata: any;
  private newUser = new User(1,'New User','xyz','abc','abc','abc@gmail.com','27/12/2020','27/12/2020');

  constructor(
    private userService: UserService,
    protected alertService: AlertService
  ) { }

  ngOnInit(): void {
      this.userService.getAllUsers()
      .subscribe(response =>{
        
        console.log(response);
        this.userdata=response;
        /*response = this.users;
        this.userdata = response;
        console.log(this.userdata);*/
      })
    }

  /*users =[
    new User(1,'Administrator','Admin','Null','Admin','admin@xyz.com','01/02/2020','01/20/2020'),
    new User(1,'John Smith','John','Smith','Jsmith','Jsmith@xyz.com','27/12/2020','27/12/2020'),
    new User(1,'Tanaji Patil','Tanaji','Patil','tanajipatil','tanajipatil9696@gmail.com','27/12/2020','27/12/2020'),
    new User(1,'Tanaji Patil','Tanaji','Patil','tanajipatil','tanajipatil9696@gmail.com','27/12/2020','27/12/2020'),
    new User(1,'Tanaji Patil','Tanaji','Patil','tanajipatil','tanajipatil9696@gmail.com','27/12/2020','27/12/2020'),
    new User(1,'Tanaji Patil','Tanaji','Patil','tanajipatil','tanajipatil9696@gmail.com','27/12/2020','27/12/2020')
  ]*/

  deleteUser(userId, i){

    console.log(userId);
    this.userdata.splice(i,1);
    this.userService.deleteUser(userId)
    .subscribe(response =>{
      console.log(response);
      this.userdata.splice(i,1);
      this.reloadUser();
      //  window.location.reload();
      this.alertService.success('Success!!', this.options);
    })
    
  }

  reloadUser(){
    this.userService.getAllUsers()
      .subscribe(response =>{
        
        console.log(response);
        this.userdata=response;
        /*response = this.users;
        this.userdata = response;
        console.log(this.userdata);*/
      })
  }
  
  /*addUser(){
    //console.log(this.name,this.empoloyeeID);
    this.userdata.push(this.newUser);
    this.userService.addUser(this.newUser)
    .subscribe(response =>{
      console.log(">>>>>>>>>>>>>>>"+this.newUser);
      this.userdata.push(this.newUser);
    })
  }*/
 
  /*addUser(newUserdetails:NgForm){

    console.log(newUserdetails);     
    this.userService.addUser(newUserdetails)
    .subscribe(response =>{  

      console.log("response >>. " +response);       
      this.userdata.push()     
    }) 

  }*/

  addUser(newUserdetails:NgForm){
    console.log("payloadd for add*** "+newUserdetails);
    this.userService.addUser(newUserdetails)
    .subscribe(response =>{
    //statusCd codition
      console.log(response);
      this.reloadUser();
      // window.location.reload();
      this.alertService.success('Success!!', this.options);
      })
    }


    updateUser(userid,i){
      console.log(this.userdata[i]);
      this.updatedUser = this.userdata[i];
      this.userService.updateUser(this.updatedUser,i)
      .subscribe(response =>{
      //statusCd codition
      this.reloadUser();
        // window.location.reload();
        this.alertService.success('Success!!', this.options);
        })
      }
}
