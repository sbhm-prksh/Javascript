// FILTERS
let myNums=[1,2,3,4,5,6,7,8,9,10];
let filteredNums=myNums.filter((num)=>{
    return num>4;
    console.log(num);
    // if(num>4)
    // {
    //     return num;
    // }
})
console.log(filteredNums)

// FILTER APPLICATION
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
const userBook=books.filter((bk)=>bk.genre=='History')
console.log(userBook);
const userBook2= books.filter((bk)=> bk.publish>=1995 && bk.genre=='History');
console.log(userBook2)


// MAPS
let mandi=[1,2,3,4,5,6,7,8,9,10];
let newMandi=mandi.map((items)=>{
    return items+10;
})
console.log(mandi);
console.log(newMandi);

// CHAINING OF MAP AND FILTERS
let newerMandi=mandi.map((items)=>{
    return items+10;
}).map((items)=>{
    return items*10;
}).filter((items)=>{
    return items>100;
})
console.log(newerMandi)

// REDUCE
let cartPrice=[1,2,3,4,5];
let totalPrice= cartPrice.reduce(function(accumulator, currentValue)
{
    // console.log(`Accumulator value is ${accumulator} \nCurrent Value is: ${currentValue}`)
    return accumulator+currentValue;
}, 0);
// Using arrow function
let totalPrice2=cartPrice.reduce((acc, cV)=>(acc+cV), 0);
console.log(totalPrice)
console.log(totalPrice2)

// Application of reduce
let shoppingCart=[{itemName:"JS Course", price:999},{itemName:"Python Course", price:999}, {itemName:"Cpp Course", price:999}]
let totalPrice3=shoppingCart.reduce((acc, currentVal)=>(acc+currentVal["price"]),0)
console.log(totalPrice3)