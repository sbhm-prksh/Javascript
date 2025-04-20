// PROMISES

// CREATING PROMISE
const promiseOne= new Promise(function(resolve, reject){
    // Do any async task
    // DB Calls, cryptography, networks calls, reading file which requires kernel help
    setTimeout(()=>{
        // resolve(); //IF RESOLVE IS HERE, THEN ALSO ORDER OF CONSOLE, WILL BE SAME.
        console.log("Async Task:1 is complete.");
        resolve();

    },1000)
});

// CONSUMING PROMISE
promiseOne.then(function(){
    console.log("Async 1 resolved")
})

//CREATING PROMISE AND CONSUMING IT WITHOUT STORING IT IN A VARIABLE
new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Async Task:2 is complete.")
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

// PASSING VALUE THROUGH RESOLVE
let promiseThree= new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName:"Shubham", userEmployer:"Google"})
    },1000)
})
promiseThree.then(function(obj){
    console.log(obj)
})

// REJECTING A PROMISE AND CONSUMING IT.
const promiseFour=new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=true;
        if(error==true)
        {
            reject("Something went wrong.")
        }
        else
        {
            resolve({userName:"Shubham", userCTC:"52LPA"})
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user)
}).catch(function(err){
    console.log(err)
})