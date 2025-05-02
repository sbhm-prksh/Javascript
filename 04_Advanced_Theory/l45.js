// class

// // Before ES6
// function User(userName)
// {
//     this.userName=userName;
// }
// User.prototype.changeUserName=function()
// {
//     return this.userName.toUpperCase();
// }
// let user1=new User("Shubham")
// console.log(user1.changeUserName())

// // After ES6
// class User{
//     constructor(userName)
//     {
//         this.userName=userName;
//     }
//     // function changeUserName() //wrong syntax
//     changeUserName()
//     {
//         return this.userName.toUpperCase();
//     }
// }
// let user1= new User("ShubhamLovesShreya");
// console.log(user1)
// console.log(user1.changeUserName())

// // Inheritance
// class User{
//     constructor(userName)
//     {
//         this.userName=userName
//     }
// }
// class admin extends User{
//     constructor(userName, password)
//     {
//         super(userName)
//         this.userName=userName;
//         this.password=password;
//     }
// }
// let admin1= new admin("Shubham", "123");
// console.log(admin1)

// // INSTANCEOF
// console.log(admin1=== admin)
// console.log(admin1 instanceof admin)

// STATIC
class Student{
    static count=0;
    constructor(userName)
    {
        Student.count++;
        this.userName=userName;
    }
    static studentCount()
    {
        return Student.count;
    }
}
console.log(Student.studentCount())
const b20021= new Student("Shubham Prakash")
const umt1800= new Student("Shreya")
console.log(Student.studentCount())
console.log(b20021.studentCount())

