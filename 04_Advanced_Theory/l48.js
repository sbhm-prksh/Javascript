// GETTER AND SETTER

// CANT MAKE GETTER WITHOUT SETTER 
// class User{
//     constructor(email, password)
//     {
//         this.email=email;
//         this.password=password;
//     }
//     get password()
//     {
//         return this.password.toUpperCase();
//     }
// }
// let u1=new User("s@google.com", "123");
// console.log(u1.password)

// // BELOW ONE WILL RECURSIVELY CALL SETTER AND HENCE MAXIMUM CALL STACK SIZE EXCEEDED
// class User{
//     constructor(email, password)
//     {
//         this.email=email;
//         this.password=password;
//     }
//     get password()
//     {
//         return this.password.toUpperCase();
//     }
//     set password(password)
//     {
//         this.password=password;
//     }
// }
// let u1=new User("s@google.com", "123");
// console.log(u1.password)

// Solution: Make new internal property
class User{
    constructor(email, password)
    {
        this.email=email;
        this.password=password;
    }
    get password()
    {
        return this._password.toUpperCase();
    }
    set password(password)
    {
        this._password=password;
    }
}
let u1=new User("s@google.com", "123abc");
console.log(u1.password)

// BEFORE ES6
function students(email, password)
{
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(password)
        {
            this._password=password;
        }
    })
    // important to do this below, so that we have a getter and setter defined earlier
    this.email=email;
    this.password=password;
}
let s1= new students("b20021", "123abc");
console.log(s1.password)