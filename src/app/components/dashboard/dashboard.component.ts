import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit
{

  //List<Characters> charactersLoadedFromDB = null;

  constructor()
  {

  }

  ngOnInit(): void
  {
    // We'll need to get the account id from the logged in session
    // int accountId = LoginComponent.isUserLoggedIn() ? LoginComponent.getAccountId() : -1;
    // charactersLoadedFromDB = DB.LoadCharacters(accountId);
  }

  /*
  getCharacters(int accountId) : List<Character>
  {
    return this.characters.Get(accountId);
  }*/
}
