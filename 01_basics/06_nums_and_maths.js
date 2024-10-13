    const score = 400
    console.log(score); 

    const balance =  new Number(100)
    // console.log(balance);
    
    // console.log(balance.toString());  // .toString will convert number to string
    // console.log(balance.toFixed(2));  // .toFixed will show the decimal value for the given input

    const otherNumber = 123.8966
    // console.log(otherNumber.toPrecision(4));    //this property help user to round off the Decimal value 

    const hundreds = 1000000
    // console.log(hundreds.toLocaleString('en-IN')); // .toLocaleString will explain the number how much is present count

    //********************************Maths********************************
    
    // console.log(Math);
    // console.log(Math.abs(-6));  // .abs will convert -ve value to +ve
    // console.log(Math.round(4.6)); //.round will round off decimel value
    // console.log(Math.ceil(4.2)); //.ceil will round off decimel value in the top       // ans will be 5
    // console.log(Math.min(4,6,7,8,9,0,1)); //.min will find the lower value in the array
    // console.log(Math.max(4,6,7,8,9,0,1)); //.max will find the max value in the array
    console.log(Math.random()); //.random will give random value from 0 to 1. 
    console.log(Math.random()*10); // it will incress the random value by multiply to 10
    console.log(Math.floor(Math.random()*10) + 1); //.floor for some exact values without decimel 

    const min = 10
    const max = 20

    console.log(Math.floor(Math.random() * (max - min + 1 )) + min );