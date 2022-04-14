import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{

  constructor()
  {

  }

  ngOnInit(): void
  {

  }

  /*
  getAccountId() : integer
  {

  }*/

  logoutUser() : boolean
  {
    return true;
  }

  loginUser() : boolean
  {
    return true;
  }

  isUserLoggedIn() : boolean
  {
    return false;
  }
}
