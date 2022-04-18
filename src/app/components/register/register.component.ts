import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model";
import {DbService} from "../../services/db.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit
{
  User: User = new User("", "", "");
  constructor(private database: DbService)
  {

  }

  ngOnInit(): void
  {
    this.database.openDB();
    //this.database.clearDB();
    this.database.openTables();
  }

  onRegisterButtonClicked()
  {
    this.database.insert(this.User, ()=>
    {
      console.log("Record added successfully");
      alert("Record added successfully");
    });
  }
}
