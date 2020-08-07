import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  user:any={}
  constructor() { }

  ngOnInit(): void {
    this.GetUserData();
  }
GetUserData(){

  this.user.firstname=localStorage.getItem('firstname');
  this.user.lastname=localStorage.getItem('lastname');
  this.user.emailid=localStorage.getItem('email');
  this.user.mobilenumber=localStorage.getItem('mobilenumber');
  this.user.address=localStorage.getItem('address');
  this.user.gender=localStorage.getItem('gender');
}
}
