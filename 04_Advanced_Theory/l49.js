// // LEXICAL SCOPING AND CLOSURE

// // LEXICAL SCOPING-1
// function outer()
// {
//     let outerVar="Shubham";
//     function inner() 
//     {
//         let innerVar="Shreya";
//         console.log(outerVar)
//     }
//     inner();
//     // console.log(innerVar);
// }
// outer();
// // console.log(outerVar);
// // console.log(innerVar)

// // LEXICAL SCOPE-2
// let x = "global";

// function logX() 
// {
//   console.log(x);
// }
// function outer()
// {
//   let x = "local";
//   logX();
// }

// logX();
// outer();

// CLOSURE-1
function outer()
{
    let name="Shubham";
    function inner()
    {
        console.log(name);
    }
    return inner;
}
let innerCopy=outer();
innerCopy();