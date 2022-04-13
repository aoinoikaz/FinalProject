import { Component, OnInit } from '@angular/core';

//
import {HomeService} from "../../services/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit
{
  booksArray: string[] | undefined;

  constructor(private HomeService: HomeService)
  {

  }

  ngOnInit(): void
  {
    this.booksArray = this.HomeService.booksArray;
  }

}
