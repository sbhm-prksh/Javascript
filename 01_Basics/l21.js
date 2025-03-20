// SCOPE OF A VARIABLES
var c=300;
if(true)
{
    let a=12;
    const b=13;
    var c=15;
}
// console.log(a); // i dont know any a in this scope
// console.log(b); // i dont know any b in this scope
console.log(c); // Hey, this is the same c as in the above scope
