import { Component, OnInit } from '@angular/core';
import {DbService} from "../../services/db.service";
import {User} from "../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  User: User = new User("", "");
  constructor(private database: DbService)
  {

  }

  onLoginButtonClicked(): void
  {
    alert("On login button clicked: " + this.User.username + " | " + this.User.password);

    // @ts-ignore
    this.database.loginUser(this.User.username, this.User.password, ()=>
    {
      console.log("User successfully logged in!");
      alert("Logged in successfully!");
    });
  }

  ngOnInit(): void
  {

  }

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
