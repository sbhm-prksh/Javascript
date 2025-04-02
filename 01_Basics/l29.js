// HIGH ORDER ARRAY LOOPS

// FOR OF
// FOR OF WITH ARRAY
let arr=[1,2,3,4,5,6]
for(let num of arr)
{
    console.log(num)
}
// FOR OF WITH STRING
let arr2="shubham will work at google!"
for(let num of arr2)
{
    console.log(num)
}

// MAPS
let myMap=new Map();
myMap.set('India', 'In');
myMap.set('France', 'Fr');
myMap.set('Pakistan', 'Pak');
// FOR OF WITH MAPS
for (const element of myMap) {
    console.log(element)
}
for (const [key,value] of myMap) {
    console.log(`Key is ${key}. Value is ${value}`)
}

// FOR OF WITH OBJECT
let employee={
    empName:"Shubham",
    empAge:23,
    comName:"Google",
    empCTC:5800000,
    empLoc:"Gurgaon"
}
// for (const element of employee) {
//     console.log(element); //OBJECT IS NOT ITERABLE
// }
// ---------------------------------------------------------------------
// FOR IN
// FOR IN WITH OBJECT
for (const key in employee) 
{
    console.log(`${key} is ${employee[key]}`)
}
// FOR IN WITH ARRAY
let iplTeams=["RCB", "CSK", "RR" ]
for (const teams in iplTeams) {
    console.log(`${teams}`) // return indices
    console.log(iplTeams[teams]);
}
// FOR IN WITH STRING
let myTeam="I love RCB!";
for (const alpha in myTeam) {
    console.log(alpha)
}

// ------------------------------------------------
// FOR EACH
let myGoals=["Google", "Microsoft", "Amazon", "Uber"];
myGoals.forEach(function iterate(companies){
    console.log(companies)
})
myGoals.forEach(function (companies){
    console.log(companies)
})
myGoals.forEach((companies)=>{
    console.log(companies)
})
myGoals.forEach(print)
function print(element)
{
    console.log(element);
}

// FOR EACH WITH ARRAY OF OBJECTS.
let myComp=[{compName:"google", ctc:"5200000"}, {compName:"deshaw", ctc:"5100000"}, {compName:"zomato", ctc:"5600000"}];
myComp.forEach((item)=>{
    console.log(item.compName)
    
})
// FOR EACH WITH STRING. DOESNT WORKS!!!!
let myComp2="Google"
myComp2.forEach((item)=>{
    console.log(item)
    
})