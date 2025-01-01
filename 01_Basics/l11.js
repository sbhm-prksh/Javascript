// strings
let name="Shubham"
let age=22
console.log(name, age,"yrs") //outdated
console.log(name + age+"yrs") //outdated
console.log(`My name is ${name}. My age is ${age}yrs`)
let myName="shubham"
console.log(myName)
console.log(typeof myName)
let myCompany=new String("Uber-Google-OpenAI-Meta-Snap")
console.log(typeof(myCompany))
myCompany[1]='J' // string object is immutable.
console.log(myCompany)
console.log(myCompany[1])
console.log(myCompany.__proto__)
console.log(myCompany.length)
console.log(myCompany.toUpperCase())
console.log(myCompany.charAt(2))
console.log(myCompany.charCodeAt(2))
console.log(myCompany.lastIndexOf('e'))
console.log(myCompany.includes("r-G"))
console.log(myCompany.trim())
console.log(myCompany.replace("Googlee","OpenAI"))
console.log(myCompany.split(''))
console.log(myCompany.slice(-4,0))
