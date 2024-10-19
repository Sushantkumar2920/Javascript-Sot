//foreach loop

const lang = ["js", "rb", "cpp", "java", "py"]

// lang.forEach( function (item) {
//     console.log(item); 
 // } )

// lang.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);   
// }

// lang.forEach(printMe)

// lang.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);  
// })

const myCode = [
    {
        langName: "javascript",
        langFileNmae: "JS"
    },
    {
        langName: "Java",
        langFileNmae: "Java"
    },
    {
        langName: "Python",
        langFileNmae: "Py"
    },
]

myCode.forEach((item)=> {             //this type of foreach loop will help in databse extraction
    {}                                //this wil give you access in the current array loop
    console.log(item.langName);
    
})
