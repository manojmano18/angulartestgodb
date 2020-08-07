import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Login:any={};
  
  constructor(public router:Router){

  }
  ngOnInit(){
    this.clear();
  }

  clear(){
    this.Login.email='';
    this.Login.password='';
  }
  LoginUser(){
    if(this.Login.email!='' && this.Login.password!=''){
    let email=  localStorage.getItem('email');
    let password=  localStorage.getItem('password');
      
    if(this.Login.email==email && this.Login.password==password){

    this.router.navigate(['/userdetails']);
    }else{
      alert('Incorrect Email / Password ')
    }
    }else{
      alert("Field Required !");
    }
  }
}

