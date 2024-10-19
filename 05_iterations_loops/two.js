// while loop

let i = 0
while (i <= 10) {
    console.log(`value of i is ${i}`);     //in while loop we we have to give the declaration first then conditon in the 2nd line
    i = i + 2  
}

let myArray = ["sush", 'ush', "sh", 'h']

let arr = 0
while (arr < myArray.length) {                 //same with array and obj
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 1
do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);