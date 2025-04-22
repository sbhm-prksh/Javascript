// // ASYNC AWAIT
// async function myFun()
// {
//     console.log("Shubham")
//     return "Success"
// }
// // IT RETURNS A PROMISE;
// let a=myFun()
// console.log(a)
// // LOOK WE RESOLVED THAT RETURNED FUNCTION
// myFun().then((e)=>{
//     console.log(e)
// })

// // AWAIT
// let ourPromise= new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("Resolved successfully")
//     }, 1000);
// })
// async function consumePromise()
// {
//     let result=await ourPromise
//     console.log(result)
//     console.log("Aync function moved ahead!")
// }
// consumePromise()
// console.log("Rest of code moves ahead!")

// CATCHING REJECTION USING AWAIT
let ourPromise2= new Promise((resolve, reject)=>{
    setTimeout(() => {
        reject("Something went wrong")
    }, 1000);
})

async function consumePromise2() 
{
    try {
        let result=await ourPromise2
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
consumePromise2()
