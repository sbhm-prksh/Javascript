// // PROMISES

// // CREATING PROMISE
// const promiseOne= new Promise(function(resolve, reject){
//     // Do any async task
//     // DB Calls, cryptography, networks calls, reading file which requires kernel help
//     setTimeout(()=>{
//         // resolve(); //IF RESOLVE IS HERE, THEN ALSO ORDER OF CONSOLE, WILL BE SAME.
//         console.log("Async Task:1 is complete.");
//         resolve();

//     },1000)
// });

// // CONSUMING PROMISE
// promiseOne.then(function(){
//     console.log("Async 1 resolved")
// })

// //CREATING PROMISE AND CONSUMING IT WITHOUT STORING IT IN A VARIABLE
// new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("Async Task:2 is complete.")
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved")
// })

// // PASSING VALUE THROUGH RESOLVE
// let promiseThree= new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({userName:"Shubham", userEmployer:"Google"})
//     },1000)
// })
// promiseThree.then(function(obj){
//     console.log(obj)
// })

// // REJECTING A PROMISE AND CONSUMING IT.
// const promiseFour=new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error=true;
//         if(error==true)
//         {
//             reject("Something went wrong.")
//         }
//         else
//         {
//             resolve({userName:"Shubham", userCTC:"52LPA"})
//         }
//     },1000)
// })
// // promiseFour.then((user)=>{
// //     console.log(user)
// // })
// // promiseFour.catch(function(err){
// //     console.log(err)
// // })
// promiseFour.then((user)=>{
//     console.log(user)
// }).catch(function(err){
//     console.log(err)
// })

// // RETURNING THINGS FROM THEN (CHAINING THEN)
// let promiseFive=new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve({userName:"Shubham Prakash", age:23});
//     }, 1000);
// })
// // //  THIS WILL RETURN A NEW PROMISE WITH THE RESOLVE VALUE AS WHAT YOU HAVE RETURNED
// // let result=promiseFive.then((e)=>{
// //     console.log(e)
// //     return e.userName;
// // })
// // result.then((e)=>{
// //     console.log(e)
// // })
// promiseFive
// .then((e)=>{
//     console.log(e);
//     return e.userName;
// })
// .then((e)=>{
//     console.log(e);
// })

// // FINALLY
// let promiseSix= new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("Yeahhh")
//     }, 1000);
// })
// promiseSix
// .then((e)=>{
//     console.log(e)
// })
// .catch((e)=>{
//     console.log(e)
// })
// .finally(()=>{
//     console.log("Promise delivered. I dont care whether it got resolved or reject.")
// })


// 
let promiseSeven= new Promise9(resolve, reject)