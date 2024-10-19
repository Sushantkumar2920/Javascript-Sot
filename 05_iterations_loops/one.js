//for loop

for (let i = 0; i < 10; i++) {                  // in this 1st let i=0 is declaration then condition i< 10 then condition to end the loop 
    const element = i;
    if (element == 5) {
        console.log("5 is good number");
    }
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop: ${i}`);                              //run this loop to understand better
    for (let j = 0; j <= 10; j++) { 
        // console.log(`inner loop: ${j} and inner loop${i}`);
            //    console.log(i + '*' + j + '=' + i*j);
               
    }    
}

let myArray = ["flash", "batman", "superman"]                     //example of array loop

// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
        
}

// break & continue

for (let i = 1; i <= 20; i++) {             //this will find the particular value in th loop and pause the loop
    if (i == 5) {
        console.log(`detect 5`);
        break
    }
    console.log(`value of i is ${i}`);
     
}

for (let i = 1; i <= 20; i++) {             //this is highlight the value of the loop 
    if (i == 5) {
        console.log(`detect 5`);
        continue
    }
    console.log(`value of i is ${i}`);
     
}