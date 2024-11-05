//ES6 

class User{
    constructor(username, email, password){
        this.username;
        this.email;
        this.password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const sush = new User("sush", "sush@gmail.com", "123")
console.log(sush.encryptPassword());
