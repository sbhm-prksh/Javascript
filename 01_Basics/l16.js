// OBJECTS
// Object Constructor-> Creates Singleton
// Object.create


// Object Literals-> No Singleton
const employee={
    name:"Shubham",
    "full name":"Shubham Prakash",
    age:18,
    location: "Mandi",
    email: "shubham@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(employee.name)
console.log(employee["full name"]) //prefer this
// console.log(employee[age]); //Invalid. Required double quotes

// Normal operations
// Changing values
employee.age=21;
console.log(employee.age)
// freeze
// Object.freeze(employee);
console.log(employee);
employee.age=24;
console.log(employee);
// function as value
employee.work=function(){
    console.log("Hello World!")
}
// function as value with this keywords
employee.work2=function(){
  console.log(`Hello, I am ${this["name"]}`)
}
console.log(employee.work);
console.log(employee.work());
console.log(employee.work);
console.log(employee.work2());




// Symbols inside a object.
let mySymbol = Symbol("uniqueKey"); //defining the symbol
let obj = {
  name: "Shubham",
  [mySymbol]: "This is a secret value"
};
console.log(obj)
console.log(typeof obj[mySymbol]); //is a string.
console.log(obj[mySymbol]);
// console.log(obj["mySymbol"]); // will give undefined. "mySymbol" is just a string, but in obj, there is no key named "mySymbol" (the key is a Symbol, not a string).



