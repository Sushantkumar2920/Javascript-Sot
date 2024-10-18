// if 
const isUserLoggedIn = true
const temp = 41

if (temp < 30 ) {                             //this condition will check which condition will work
      console.log("less then 30");
} 
else {
 console.log("temp is greater than 30") 

}
// <, >, <=, >=, ==, !==, ===, !==            // 2<=2 ✅, 2>=2✅, 2==2✅, 3!=2✅(not equals), 2==="2" will check value & type, !== will check the negative side.

  const score = 200

  if (score > 100) {
     const power = "fly"
     console.log(`user power = ${power}`);    //outside this { }, curly bracket we can't use the value, but var keyword can do but that is wrong 
     
  }

 const balance = 1000
 if (balance > 500) console.log("test"),console.log("test2"); //we can write the code like this but this way is not the good practice to write good code 

 if (balance < 500) {
    console.log("less than 500");
 }
 else if (balance < 750) {
    console.log("less than 750");

 }
 else if (balance < 900) {
    console.log("less than 900");
 }
 else {
    console.log("less than 1200");
}

const userLoggedIn = true
const creditCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true 

if (userLoggedIn && creditCard && 2==2) {
   console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
   console.log("User logged in ")
}