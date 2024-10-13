// Stack (primitive), Heap (Non-primitive)

let mySelfName = "Sushant kumar"

let anotherName = mySelfName

anotherName = "sushantRaj"

console.log(anotherName);
console.log(mySelfName);

let userOne = {
    email: "abc@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "cba@google.com"

console.log(userOne.email);
console.log(userTwo.email);
