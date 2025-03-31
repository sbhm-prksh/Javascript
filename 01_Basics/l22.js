// BLOCK SCOPE IN A FUNCTION
function one()
{
    let userName="Shubham";
    function two()
    {
        let userAge=23;
        console.log(userAge);
        console.log(userName);
    }
    // console.log(userAge) //Out of its scope
    two();
}
// console.log(userName); //Out of its scope
one()


// HOISTING BRIEF
console.log(addOne(5)) // WORKS
function addOne(num)
{
    return num+1;
}
console.log(addTwo(5)) //DOESNT WORKS WHEN A VARIABLE HOLDS A FUNCTION
let addTwo=function(num)
{
    return num+1;
}