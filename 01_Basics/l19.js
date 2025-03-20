// FUNCTIONS

// function sayMyName(){
//     console.log("S");
//     console.log("H");
//     console.log("U");
//     console.log("B");
//     console.log("H");
//     console.log("A");
//     console.log("M");
// };
// sayMyName; //This is just a reference
// sayMyName(); // This is executing that function

// FUNCTION WITH PARAMETERS; 
function addTwoNumbers(number1, number2)
{
    console.log(number1+number2);
}
// addTwoNumbers();
// addTwoNumbers(1);
// addTwoNumbers("1");
// addTwoNumbers("abcd");
// addTwoNumbers(1, null);
// addTwoNumbers("1", null);
// let result=addTwoNumbers(3,5); //result will be undefined
// console.log(result)

// FUNCTIONS
function loginUserMessage(username)
{
    return `${username} just logged in!`;
}
loginUserMessage("Shreya"); //will not get print
console.log(loginUserMessage("Shreya"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());

// DEFAULT PARAMETERS
function greet(user="Sam")
{
    return `Hello! ${user}`
}
console.log(greet());
console.log(greet("Radha"))


