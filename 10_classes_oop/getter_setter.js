class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    // get password(){
    //     return this._password.toUpperCase()
    // }

    get password(){
        return `${this._password} Sushant`
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const sushant = new User("sushant@gmail.com", "abc")
console.log(sushant.email);
