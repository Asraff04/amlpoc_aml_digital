import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  @Input() userName;
  private isLoggedIn;
  public showProfile:boolean;
  public islogShow= false;

  constructor(private router:Router) {
 

   }

  
  ngOnInit(): void {
    this.userName=this.userName;
    console.log("username.."+this.userName);
    this.isLoggedIn = localStorage.getItem('isLoggedIn');

    if(this.isLoggedIn=='true'){
      this.showProfile = true;
    }else{
      this.showProfile= false;
    }
  }

  logoutSetting(){
    this.islogShow =!this.islogShow;
  }
  
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['']);

  }

}
