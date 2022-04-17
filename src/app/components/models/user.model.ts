export class User{
    id: number = -1;
    username: string = "";
    password: number = 0;
    email: string = "";

    constructor(username?: string, password?: number, email?: string){
        this.username = username;
        this.password = password;
        this.email = email
    }
}
