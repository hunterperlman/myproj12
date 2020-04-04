import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit 
{
  // creates router object
  constructor(private router : Router) { }
  
  login(form)
  {
      this.router.navigate(["/library"]);
  }
    
  ngOnInit(): void {}
}
