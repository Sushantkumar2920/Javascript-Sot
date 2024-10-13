// Array

const myArr = [0,1,2,3,4,5]
const mySelf = ["one", "two"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[1]);  // this will show the position od the arrey element

// Array methods 

// myArr.push(6)     //it will give 6 element of array
// myArr.push(7)     // it will give 7 element of array
// myArr.pop()       // it will remove one last value fom the array


// myArr.unshift(0)    // it will add the new given value in the 1st place
// myArr.shift()       // it will remove the 1st value from the orignal array

// console.log(myArr.includes(9));   // it will check the given value in the array  
// console.log(myArr.indexOf(9));    // it will also chcek the given number in the array

const newArr = myArr.join()    // it will change the array into string

// console.log(myArr); 
// console.log(newArr);

//slice, splice  

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)   // .slice will reject the last value in the given array

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3) // .splice will remove the give value from the array

console.log(myn2);
console.log("C", myArr);
