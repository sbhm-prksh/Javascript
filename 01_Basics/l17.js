// OBJECTS
const tinderUser={};
tinderUser.id="123abc";
tinderUser.name="Sam";
tinderUser.isLoggedIn=false;
// console.log(tinderUser)

// Object inside a object
const regularUser={
    email:"some@gmail.com",
    name:{
        firstName:"Sam",
        lastName:"Prakash"
    }
}
// console.log(regularUser)
// console.log(regularUser["name"])
// console.log(regularUser["name"]["firstName"])

// Merging two objects-1
const obj1={1:'a',3:'b'};
const obj2={3:'c',4:'d'};
const obj3={obj1, obj2};
// console.log(obj3.obj1.1) //JS doesnt allow dot notation will numbers.
// console.log(obj3.obj1['1'])
// console.log(obj3.obj1['1'])

// Merging two objects-2a
// Object.assign(obj1, obj2) //will modify obj1 itself
// console.log(obj1);
// console.log(obj2);

// Merging two objects-2b
let combined=Object.assign({}, obj1, obj2)
// console.log(obj1);
// console.log(obj2);
// console.log(combined);

// Merging two objects-3
let combinedUsingSpread={...obj1, ...obj2};
// console.log(obj1);
// console.log(obj2);
// console.log(combinedUsingSpread);

// Object inside a array
let arr=[{1:'a'},{2:'b'}];
// console.log(arr)
// console.log(arr[1])
// console.log(arr[1][2])

//  Keys and values of a object
let student={
    name:"Shubham",
    age:23,
    email:"shubham@google.com"
};
let keys=Object.keys(student);
let values=Object.values(student);
let entries=Object.entries(student);
// console.log(keys);
// console.log(values);
// console.log(entries);
console.log(student.hasOwnProperty('name'));
console.log(student.hasOwnProperty('roll no'));


 

