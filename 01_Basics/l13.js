// DATE
let myDate = new Date()
console.log(myDate)
console.log(myDate.getMonth())
console.log(typeof myDate) //ugly
myDate.setFullYear(2972)
console.log(myDate)
console.log(typeof myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString())
let myNewDate=new Date(2025, 0,23)
console.log(myNewDate.toDateString())
// let myNewDate = new Date(2023,2,12)
console.log(myNewDate.getFullYear())

// TIME
let myTime=Date.now()
console.log(typeof Date.now())
console.log(myTime)
