import { Component, OnInit } from '@angular/core';
import {Book} from "../models/book.model";
import {DatabaseService} from "../services/database.service";

@Component({
  selector: 'app-addpage',
  templateUrl: './addpage.component.html',
  styleUrls: ['./addpage.component.css']
})
export class AddpageComponent implements OnInit {

  book: Book = new Book("noname", 10.12);
  constructor(private database: DatabaseService) {
  }

  ngOnInit(): void {
  }

  btnAdd_click(){
    this.database.insert(this.book, ()=>{
      console.log("Record added successfully");
      alert("Record added successfully");
    });
  }
}
