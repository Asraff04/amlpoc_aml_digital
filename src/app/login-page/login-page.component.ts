import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { localizedString } from '@angular/compiler/src/output/output_ast';
import { LoginService } from '../services/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  isLoggedIn :boolean;
  invalidLogin: boolean; 
  userId:any;

  constructor(
    private router:Router,
    private loginservice: LoginService
    ) { }

  ngOnInit(): void {

    this.userId = localStorage.getItem('userId');
    console.log("..... "+this.userId);
  }

  submitform(){
    this.isLoggedIn=true;
    this.router.navigate(['./homepage']);
    localStorage.setItem('isLoggedIn','true');
  }

  signIn(credentials: NgForm) {
    this.loginservice.login(credentials)
      .subscribe(result => { 
        localStorage.setItem('token', result.jwttoken);
        console.log("response...."+result);
        
        
      });
      let token = localStorage.getItem('token');
        if (token)
          this.router.navigate(['/homescreen']);
        else  
          this.invalidLogin = true; 
      // this.router.navigate(['/homescreen']); //remove this after implementation.
  }



}
