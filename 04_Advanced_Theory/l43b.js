// // PROTOTYPE

// // Injection our own made functions to array/objects
// let employee={
//     eName:"Shubham",
//     eSalary:"52Lakhs",
//     eCompany:"Google"
// }
// let teams=["RCB", "CSK"];
// Object.prototype.sayHello=()=>{
//     console.log("Hi from object.")
// }
// Array.prototype.sayHello1=()=>{
//     console.log("Hi from array.")
// }
// teams.sayHello();
// teams.sayHello1();
// employee.sayHello();
// // employee.sayHello1();


// INHERITANCE
let animal={
    weight:52,
    height:12,
    speak:function(){
        console.log("Hi....")
    }
}
let dog={
    dogName:"Spike",
    power:0,
    // __proto__:animal
}
// dog.__proto__=animal; // you can do this too
Object.setPrototypeOf(dog, animal) //modern syntax
console.log(dog.weight);

