import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Demo';
  constructor(public router:Router){}

  ngOnInit(){
   /*  if(!localStorage.getItem('email')){
    localStorage.clear();
    this.router.navigate(['/signup'])
    }else{
      this.router.navigate(['/login'])
    } */
  }
}
