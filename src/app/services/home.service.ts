import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HomeService
{
  // In this example we'll use an array to mimic a data source
  booksArray: string[] = [
    'Programming in Java',
    'Programming in C',
    'Programming in Javascript',
    'Developing Web Applications'
  ];

  constructor() { }
}
