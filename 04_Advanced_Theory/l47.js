// getOwn PropertyDescriptor

const descriptor= Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor)

let person={
    pName:"Shubham",
    pEmployer:"Google"
}
// Getting descriptor
const d=Object.getOwnPropertyDescriptor(person, "pName")
console.log(d)

// setting descriptor
Object.defineProperty(person, "pName", {writable:false});
console.log(Object.getOwnPropertyDescriptor(person, "pName"))

// Now you cant change its values
console.log(person)
person.pName="Shreya";
console.log(person)

//Usecase
Object.defineProperty(person, "salary", {value:"520000", writable:false,enumerable:true, configurable:false});
console.log(person)