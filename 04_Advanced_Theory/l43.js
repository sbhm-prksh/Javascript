// FUNCTION IS ALSO A OBJECT
function multiplyBy5(num)
{
    return num*5;
}
multiplyBy5.shubham="Shreya"; //OMGGGGGGGGGGG
console.log(multiplyBy5(3));
console.log(multiplyBy5.shubham);
console.log(multiplyBy5.prototype)

// INJECTING OUR OWN FUNCTION IN A PROTOTYPE
function createUser(username, price)
{
    this.username=username;
    this.price=price;
    return this;
}
createUser.prototype.increment=function()
{
    this.price++;
}
createUser.prototype.printMe=function()
{
    console.log(`Price is ${this.price}`)
}
const chai= new createUser("chai", 10);
const tea= new createUser("tea", 20);

chai.printMe();