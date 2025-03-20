// FUNCTIONS2

// Rest Operator
function calculateCartPrice(...num1)
{
    return num1;
}
// console.log(calculateCartPrice(200,300,400))

function totalItems(item1, item2, ...items)
{
    return items;
}
// console.log(totalItems("Sugar","Milk","Surf","Bread"))

// OBJECT AS ARGUMENT IN A FUNCTION
let employee={
    eName:"Shubham",
    age:23
};
function callEmployee(anyObject)
{
    console.log(`Employee named ${anyObject.eName} is ${anyObject.age}yrs old.`);
};
// callEmployee(employee);
// callEmployee({eName:"Shreya", age:22});

// ARRAY AS PARAMETER IN A FUNCTION
let cars=['Porsche', 'Lamborghini','Audi'];
function yourCar(anyArray)
{
    console.log(anyArray[1]);
}
yourCar(cars);
yourCar(['BMW', 'Mercedes', 'Buggatti']);
