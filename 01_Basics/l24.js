// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

//NORMAL FUNCTION
function connectDB()
{
    console.log("DB Connected");
}
connectDB()

//NAMED IIFE
; (function db(){
    console.log("DB Connected2");
})();

// ANONYMOUS IIFE
; (function(){
    console.log("DB Connected3")
})()

// ANONYMOUS IIFE WITH ARROW FUNCTION
; (()=>{
    console.log("DB Connected3")
})()

// IIFE WITH ARGUMENTS
; ((num)=>{
    console.log(`num is: ${num}`);
})(6)




