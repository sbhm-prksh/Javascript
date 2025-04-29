// // Object Oriented Programming

// // LITERALS
// const user={
//     // Properties
//     userName:"Shubham",
//     loginCount:8,
//     signedIn:true,
//     // Methods
//     getUserDetails: function(){
//         // console.log("Success!");
//         console.log(this)
//     }
// }
// console.log(user["userName"])
// user.getUserDetails();

// // CONSTRUCTOR FUNCTIONS-1
// function User(userName, loginCount, isLoggedIn)
// {
//     this.userName=userName
//     this.loginCount=loginCount
//     this.isLoggedIn=isLoggedIn
//     return this
// }
// const userOne=User("SP",1000, true)
// const userTwo=User("Shreya",20, false)
// console.log(userOne)

// CONSTRUCTOR FUNCTIONS-2
function User(userName, loginCount, isLoggedIn)
{
    this.userName=userName
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    this.greeting=function(){
        console.log(`Wlcome ${this.userName}`)
    }
    return this //optional
}
const userOne=new User("SP",1000, true)
const userTwo=new User("Shreya",20, false)
console.log(userOne)