import {Component, OnInit} from '@angular/core';
//import {Book} from "../models/book.model";
//import {DatabaseService} from "../services/database.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // book: Book = new Book("noname", 10.12);
  // constructor(private database: DatabaseService) {
  // }

  ngOnInit(): void {
  }

  btnAdd_click(){
    // this.database.insert(this.book, ()=>{
    //   console.log("Record added successfully");
    //   alert("Record added successfully");
    // });
  }
}
