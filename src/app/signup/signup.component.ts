import { Component, OnInit } from '@angular/core';
//import SimpleCrypto from "simple-crypto-js";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup:any={};
  post:any={};
  
  constructor(public router: Router) { }

  ngOnInit() {
    this.Clear();
  }
  Clear(){
    this.signup.firstname='';
    this.signup.lastname='';
    this.signup.emailid='';
    this.signup.mobilenumber='';
    this.signup.address='';
    this.signup.password='';
    this.signup.confirmpassword='';
    this.signup.male=false;
    this.signup.female=false;
    this.signup.gender='';
  }
  gender(){
    if(this.signup.male==true){
      return this.signup.gender='Male';
    }else if(this.signup.female==true){
      return this.signup.gender='Female';
    }
  }

  SignUp(){
    this.gender();
    /* if(this.signup.firstname==''){
      alert("First Name Required");
    } */if(this.signup.emailid==''){
      alert("Email ID Required");
    }
     else if(this.signup.mobilenumber==''){
      alert("Mobile Number Required");
    }else if(this.signup.password=='' || this.signup.confirmpassword==''){
      alert("Password Required");
    }
    else if(this.signup.password.length < 8 ){
      alert("Minimum 8 Char Password Required");
    }
    else if(this.signup.password!=this.signup.confirmpassword ){
      alert("Mismatch Password");
    }else{
      localStorage.setItem('firstname',this.signup.firstname);
      localStorage.setItem('lastname',this.signup.lastname);
      localStorage.setItem('email',this.signup.emailid);
      localStorage.setItem('mobilenumber',this.signup.mobilenumber);
      localStorage.setItem('gender',this.signup.gender);
      localStorage.setItem('address',this.signup.address);
      localStorage.setItem('password',this.signup.password);
      alert('Registration Successful !');
      this.router.navigate(['/login'])
    }
    /* else if((this.signup.male==true || this.signup.female==true)) {
    console.log('success')
  } */
}




}
