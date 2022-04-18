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

  ngOnInit(): void
  {
    this.database.openDB();
    //this.database.clearDB();
    this.database.openTables();
  }

  onLoginButtonClicked(): void
  {
    this.database.loginUser(this.User.username, this.User.password).then(loggedInUser =>
    {
      this.User = loggedInUser;
      alert("User logged in successfully");
    }).catch(err=>
    {
      console.error(err);
      alert(err)
    });
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
