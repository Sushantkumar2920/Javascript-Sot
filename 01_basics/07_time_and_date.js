// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());                //.toString to convert date in string
console.log(myDate.toDateString());            //.toDateString to convert  in different way in string 
console.log(myDate.toLocaleString());          //.toLocaleString to convert  in different way in string 
console.log(typeof myDate);

 let myCreateDate = new Date(2000, 3, 18)             // different way to write date 
 let myCreateDate1 = new Date(2024, 3, 18, 5, 30)     // different way to write date 
 let myCreateDate2 = new Date("2024-01-18")           // different way to write date 
 let myCreateDate3 = new Date("02-03-2024")           // different way to write date 


console.log(myCreateDate3.toDateString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);                     //current date
console.log(myCreateDate3.getTime());         //current date in different formate
console.log(Math.round(Date.now()/1000));     //convert millisecond into seconds

let newDate = new Date()
console.log(newDate);                         //current date
console.log(newDate.getMonth());              //curent month
console.log(newDate.getDate());               //current date etc

newDate.toLocaleString('default',{
    weekday: "long",
})