// .reduce 

const myNums = [1,2,3]

// const total = myNums.reduce(function (acc, currentValue ) {
//     console.log(`acc: ${acc} and currenValue: ${currentValue}`);
    
//     return acc + currentValue
// }, 0) 

const total = myNums.reduce( (acc, currentValue) => acc + currentValue, 0)

console.log(total);

const shoppingCart = [
    {
        itemName: 'js',
        price: 2999
    },
    {
        itemName: 'Py',
        price: 999
    },
    {
        itemName: 'C++',
        price: 5999
    },
    {
        itemName: 'java',
        price: 12999
    }
]

const pay = shoppingCart.reduce( (acc, item) => acc+ item.price, 0)

console.log(pay);
