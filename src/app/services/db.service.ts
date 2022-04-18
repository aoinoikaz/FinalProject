import {Injectable} from '@angular/core';
import {User} from "../components/models/user.model";

// @ts-ignore
declare function openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess): any;

@Injectable({
  providedIn: 'root'
})

// @ts-ignore
export class DbService
{
  private db = null;

  constructor()
  {

  }

// @ts-ignore
  private static errorHandler(error): any
  {
    console.error("Error: " + error);
  }

  private createDatabase(): void
  {
    let shortName = "FinalProject";
    let version = "1.0";
    let displayName = "DB for Angular FinalProject App";
    let dbSize = 2 * 1024 * 1024;


    this.db = openDatabase(shortName, version, displayName, dbSize, () => {
      console.log("Success: Database created successfully");
    });
  }

  private createTables(): void
  {
    function txFunction(tx: any): void
    {
      var sql: string = "CREATE TABLE IF NOT EXISTS users(" +
        " id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
        " username VARCHAR(20) NOT NULL," +
        " password VARCHAR(20) NOT NULL," +
        " email VARCHAR(20) NOT NULL);";
      var options: never[] = [];

      tx.executeSql(sql, options, () => {
        console.info("Success: create table successful");
      }, DbService.errorHandler);
    }

    this.getDatabase().transaction(txFunction, DbService.errorHandler, () => {
      console.log("Success: Table creation transaction successful");
    });
  }

  private dropTables(): void {
    function txFunction(tx: any): void {
      var sql: string = "DROP TABLE IF EXISTS users;";
      var options:any = [];
      tx.executeSql(sql, options, () => {
        console.info("Success: drop table successful");
      }, DbService.errorHandler);
    }
    this.getDatabase().transaction(txFunction, DbService.errorHandler, () => {
      console.log("Success: Table drop transaction successful");
    });
  }

  public clearDB(): void{
    let result = confirm("Really want to clear database?");
    if (result) {
      this.dropTables();
      this.db = null;
      alert("Database cleared");
    }
  }

  public initDB(): void
  {
    if (this.db == null)
    {
      try
      {
        //create database
        this.createDatabase();
        //create tables
        this.createTables();
      } catch (e)
      {
        console.error("Error in initDB(): " + e);
      }
    }
  }

  getDatabase(): any {
    this.initDB();
    return this.db;
  }

  //crud operations
  public insert(user: User, callback:any) {
    function txFunction(tx: any) {
      var sql: string = 'INSERT INTO users(username, password, email) VALUES(?,?,?);';
      var options = [user.username, user.password, user.email];

      tx.executeSql(sql, options, callback, DbService.errorHandler);
    }

    this.getDatabase().transaction(txFunction, DbService.errorHandler, () => {
      console.log('Success: insert transaction successful');
    });
  }

  public selectAll(): Promise<any> {
    let options:any = [];
    let users: User[] = [];

    return new Promise((resolve, reject) => {

      function txFunction(tx:any) {
        let sql = "SELECT * FROM users;";
        tx.executeSql(sql, options, (tx:any, results:any) => {
          if (results.rows.length > 0) {
            for (let i = 0; i < results.rows.length; i++) {
              let row = results.rows[i];
              let b = new User(row['username'], row['password'], row['email']);
              b.id = row['id'];
              users.push(b);
            }
            resolve(users);
          } else {
            reject("No users found");
          }
        }, DbService.errorHandler);
      }

      this.getDatabase().transaction(txFunction, DbService.errorHandler, () => {
        console.log('Success: selectAll transaction successful');
      });
    });


  }

  // Login account
  public loginUser(username: string, password: string): Promise<any>
  {
    let options = [username, password];
    let loggedInUser: User;

    return new Promise((resolve, reject) =>
    {
      // @ts-ignore
      function txFunction(tx)
      {
        let sql = "SELECT * FROM users WHERE username=? AND password=?;";
        // @ts-ignore
        tx.executeSql(sql, options, (tx, results) =>
        {
          if (results.rows.length > 0)
          {
            // for(let i=0; i< results.rows.length; i++){
            let row = results.rows[0];
            loggedInUser = new User(row['username'], row['password'], row['email']);
            loggedInUser.id = row['id'];
            // books.push(b);
            // }
            resolve(loggedInUser);
          }
          else
          {
            reject("Invalid username or password");
          }
        }, DbService.errorHandler);
      }
      this.getDatabase().transaction(txFunction, DbService.errorHandler, () =>
      {
        console.log('Success: Login transaction successful');
      });
    });
  }

  // Select user by their already known user id
  public select(id: number): Promise<any>
  {
    let options = [id];
    let user: User;

    return new Promise((resolve, reject) =>
    {
      // @ts-ignore
      function txFunction(tx) {
        let sql = "SELECT * FROM users WHERE id=?;";
        // @ts-ignore
        tx.executeSql(sql, options, (tx, results) => {
          if (results.rows.length > 0) {
            // for(let i=0; i< results.rows.length; i++){
            let row = results.rows[0];
            user = new User(row['username'], row['password'], row['email']);
            user.id = row['id'];
            // books.push(b);
            // }
            resolve(user);
          } else {
            reject("No users found");
          }
        }, DbService.errorHandler);
      }
      this.getDatabase().transaction(txFunction, DbService.errorHandler, () => {
        console.log('Success: select transaction successful');
      });
    });
  }

// @ts-ignore
  public delete(user: User, callback) {
    function txFunction(tx: any) {
      var sql: string = 'DELETE FROM users WHERE id=?;';
      var options = [user.id];
      tx.executeSql(sql, options, callback, DbService.errorHandler);
    }

    this.getDatabase().transaction(txFunction, DbService.errorHandler, () => {
      console.log('Success: delete transaction successful');
    });
  }
// @ts-ignore
  public update(user: User, callback) {
    function txFunction(tx: any) {
      var sql: string = 'UPDATE users SET username=?, password=?, email=? WHERE id=?;';
      var options = [user.username, user.password, user.email, user.id];
      tx.executeSql(sql, options, callback, DbService.errorHandler);
    }

    this.getDatabase().transaction(txFunction, DbService.errorHandler, () => {
      console.log('Success: update transaction successful');
    });
  }
}
