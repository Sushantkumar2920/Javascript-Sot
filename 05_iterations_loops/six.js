//const lang = ["js", "rb", "cpp", "java", "py"]

// const values = lang.forEach((item)=> {
//     console.log(item);
    
// })

// console.log(values);

// const myNums =[1,2,3,4,5,6,7,8,9,10]

// let numNums = myNums.filter((num) =>{      //we can write in two way 1st- without {} direct condition and 2nd what is written in code
//     return num > 4 
// } )

// const newNums = []
// myNums.forEach((num)=>{
//     if (num > 4) {
//         newNums.push(num)        //the uper one and this one both the things are same, 1st one is easy
//     }
// } )

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) =>  bk.genre === 'History')    // we can fetch data by this method with conditions or 

//   userBooks = books.filter( (bk) => bk.publish >= 2000 )            //or by this method with conditions
 userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === 'Science'            // && if we want to test 2 conditions
})                                                                      // we can write like this also 
  console.log(userBooks);
  
