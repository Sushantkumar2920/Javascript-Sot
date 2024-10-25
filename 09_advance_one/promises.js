// fetch('https://abc.com').then().catch().finally()   //wrong way to give value

const promiseOne = new Promise(function(resolve, reject){
    // do an async task 
    // DB calls, sryptography, network 
    setTimeout(function() {
        console.log('Async task in complete');
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2 is complete");
        resolve()
    }, 1000);
})
.then(function(){
    console.log("Async 2 resolved");  
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "sush", email: "sush@gmail.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "sushant", password: "123"})
        } else {
            reject('error: somthing went wrong')
        }
    }, 1000);
})

promiseFour
.then((user) => {
   console.log(user);
   return user.username
})
.then((username) => {                            //this will show the output if everything is wrong
   console.log(username);
})
.catch(function(error){                          //this will show error if somthing is wrong
   console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))  //this will always show in the end of promise.


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "javascript", password: "123"})
        } else {
            reject('error: js went wrong')
        }
    }, 1000);
})

async function consumePromiseFive() {
   try {
    const response = await promiseFive
    console.log(response);
   } catch(error){
    console.log(error);
    
   }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/Sushantkumar2920')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.