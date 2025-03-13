// DATE
let myDate = new Date()
console.log(typeof myDate) //object
console.log(myDate) //ugly
// Ways of printing dates in good manner. Use 'en-IN' inside toLocale to have in d/m/y formate.
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString());
console.log(myDate.getMonth())

let myNewDate=new Date(0) // Since how many ms from UNIX epoch
console.log(myNewDate);

// getting and setting the date
myNewDate = new Date(2023,2,12)
myDate.setFullYear(2972)
console.log(myNewDate.getFullYear())



// TIME
let myTime=Date.now()
// let myTime= new Date.now()  // this is wrong
console.log(typeof Date.now())
console.log(myTime)
