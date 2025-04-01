// CONTROL FLOW OR LOGIC FLOW

// IF STATEMENT
if(2==='2')
{
    console.log("Executed1");
}
if(2!=='2')
{
    console.log("Executed2");
    console.log(this);
}

// SWITCH STATEMENT
let month=3;
switch(month)
{
    case 0:
        console.log("January");
    case 1:
        console.log("Febuary");
    case 3:
        console.log("March");
    case 4:
        console.log("April");
    default:
        console.log("Invalid Month");
}

// TRUTHY AND FALSY VALUES
// FALSY
if("")
{
    console.log(`"" is true`);
}
else
{
    console.log(`"" is false`);
}
if(0)
{
    console.log("0 is true");
}
else
{
    console.log("0 is false");
}
if(-0)
{
    console.log(`-0 is true`);
}
else
{
    console.log(`-0 is false`);
}
if(0n)
{
    console.log("0n is true");
}
else
{
    console.log("0n is false");
}
if(null)
{
    console.log(`null is true`);
}
else
{
    console.log(`null is false`);
}
if(undefined)
{
    console.log(`undefined is true`);
}
else
{
    console.log(`undefined is false`);
}
if(NaN)
{
    console.log(`NaN is true`);
}
else
{
    console.log(`NaN is false`);
}

// TRUTHY
if("0")
{
    console.log(`"0" is true`);
}
else
{
    console.log(`"0" is false`);
}
if("false")
{
    console.log(`"false" is true`);
}
else
{
    console.log(`"false" is true is false`);
}
if(" ")
{
    console.log(`" " is true`);
}
else
{
    console.log(`" " is false`);
}
if([])
{
    console.log("[] is true");
}
else
{
    console.log("[] is false");
}
if({})
{
    console.log(`{} is true`);
}
else
{
    console.log(`{} is false`);
}
if(()=>{})
{
    console.log(`()=>{} is true`);
}
else
{
    console.log(`()=>{} is false`);
}

// NULL COALESCING OPERATOR
let val1=1??2
console.log(val1);
let val2=null??3;
console.log(val2);
let val3=undefined??4;
console.log(val3);
let val4=5??null
console.log(val4);
let val5=6??undefined;
console.log(val5);
let val6=undefined??null;
console.log(val6);
let val7=null?? undefined;
console.log(val7)
let userName=null;
let displayName= userName ?? "Guest";
console.log(displayName)

// TERNARY OPERATOR
let iceTeaPrice=90;
iceTeaPrice>=80 ? console.log("More than 80") : console.log("Less than or equal to 80")

