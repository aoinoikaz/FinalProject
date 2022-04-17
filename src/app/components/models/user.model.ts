export class User
{
    id: number = -1;
    username: string = "";
    password: string = "";
    email: string = "";

    constructor(username?: string, password?: string, email?: string)
    {
        this.username = username as string;
        this.password = password as string;
        this.email = email as string;
    }
}
