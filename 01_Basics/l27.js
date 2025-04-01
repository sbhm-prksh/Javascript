// LOOPS

// FOR
for(let index=0;index<10;index++)
{
    console.log(index)
}

// NESTED LOOP
for (let i = 0; i < 5; i++) 
{
    console.log(`Value of i is: ${i}`)
    for (let j = 0; j < 5; j++) 
    {
        console.log(`i is: ${i} and j is: ${i}`)
    }
}

// LOOP WITH ARRAY
let myArray=["Batman","Ironman", "Superman"]
console.log(myArray.length)
for(let index=0;index<myArray.length;index++)
{
    console.log(myArray[index])
}

// BREAK AND CONTINUE
for (let index = 1; index <=20; index++) {
    if(index==5)
    {
        console.log("Detected 5");
        break;
    }
    console.log(index);
    
}