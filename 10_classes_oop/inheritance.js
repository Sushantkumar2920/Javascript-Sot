class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const sush = new Teacher("sush", "chai@teacher.com", "123")

sush.logMe()
const masalaChai = new User("masalaChai") 

masalaChai.logMe()

console.log(sush instanceof User);