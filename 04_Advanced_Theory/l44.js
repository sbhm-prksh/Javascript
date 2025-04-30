// CALL

// chatgpt example
function greet()
{
    console.log(this)
}
let user={
    userName:"SP"
}
greet();
greet.call(user); // hey listen, run greet and pretend your are inside the user object


// Hitesh sir example
function checkUserName(userName)
{
    // it do some checking from DB and tehn set username by some twerks
    this.userName=userName;
}
function createUser(userName, email, password)
{
    // checkUserName(userName)
    this.email=email;
    this.password=password;
}
let user1= new createUser("SP", "sp@google.com", "abcdef");
console.log(user1)

