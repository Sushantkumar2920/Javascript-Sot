const User = {
    _email: 's@sk.com',
    _password: "def",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const sush = Object.create(User)
console.log(sush.email);