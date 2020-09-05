import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  options = {
    autoClose: false
    };
    constructor(private loginService:LoginService,
    private router:Router,
    private alertService:AlertService) { }
    ngOnInit(): void {
    }
    
    signUp(credentials: NgForm) {
    this.loginService.signUp(credentials)
    .subscribe(result => {
      // this.userId = result.userId;
    if (result)
    // this.router.navigate(['/']);
    // this.alertService.success('Registration successfull ! ');
    console.log("sign in response ..."+JSON.stringify(result));
    });
    //this.router.navigate(['/']); //remove this after implementation.
    //this.alertService.success('Registration successfull ! ', this.options);
    }

}
