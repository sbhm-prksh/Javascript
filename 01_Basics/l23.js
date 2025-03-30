// THIS KEYWORD
let user={
    userName:"Shubham",
    price:999,
    greet: function(){
        // console.log(`Hello, ${userName}`); Error! Because object doesnt creates scope. userName is a property of user not a variable in the parent scope.
        console.log(this.userName)
        console.log(this) 
    }

}
user.greet()
console.log(this) // {} HERE, BUT IN BROWSER IT GIVES WINDOWS OBJECT

let myFun=function(){
    console.log(this) // GIVES GLOBAL SCOPE, IT GIVES WINDOWS OBJEXT IN BROWSER
}
myFun();
let myFun2=()=>{
    console.log(this) // {} HERE,  BUT IN BROWSER, IT GIVES WINDOWS OBJEXT
}
myFun2();

// ARROW FUNCTION
function greet()
{
    console.log("Hi")
}
let greet2=function()
{
    console.log("Hi2");
}
let addTwo=(num1,num2)=>{
    return num1+num2
}
greet();
greet2();
console.log(addTwo(5,7));

// IMPLICIT RETURN
let addThree=(num1, num2, num3) => num1+num2+num3
console.log(addThree(1,2,30))