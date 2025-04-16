let targetNum=Math.ceil(1+99*Math.random())
let attemptRemaining=10;
let guessedNumber=[];
let guessedNumberString=guessedNumber.join();
document.getElementById('guessArray').innerHTML=guessedNumberString
document.getElementById('attemptCount').innerHTML=attemptRemaining
console.log(targetNum)

let form=document.querySelector('form')
form.addEventListener('submit',(evnt)=>{
    evnt.preventDefault();
    let enteredNum=Number(document.getElementById("number").value);
    if(document.getElementById("number").value=='')
    {
        alert("Kindly enter a number")
    }
    else if(enteredNum>100 || enteredNum<0)
    {
        alert("Kindly enter number in 1 to 100 range")

    }
    else
    {
        attemptRemaining--;
        guessedNumber.push(enteredNum)
        let guessedNumberString=guessedNumber.join();
        document.getElementById('guessArray').innerHTML=guessedNumberString
        document.getElementById('attemptCount').innerHTML=attemptRemaining

        if(enteredNum==targetNum)
        {
            document.querySelector('button[type="reset"]').innerHTML="Restart Game"
            document.getElementById('won').innerHTML=`Congratulation You Won! You entered the correct number i.e ${targetNum}.\n Kindly restart the game.`
            document.querySelector('button[type="submit"]').disabled=true;
        }
        else
        {
            document.getElementById('won').innerHTML=`Oh No,Wrong Guess! Try again`
        }
        if(attemptRemaining==0)
        {
            document.querySelector('button[type="reset"]').innerHTML="Restart Game"
            document.getElementById('won').innerHTML=`You lost! The correct number was ${targetNum}.`
            // document.querySelector('button[type="submit"]').setAttribute('disabled', 'true');
            document.querySelector('button[type="submit"]').disabled=true;

        }
        document.getElementById("number").value = '';

    }
})
form.addEventListener('reset', (evnt)=>{
    evnt.preventDefault();
    targetNum=Math.ceil(1+99*Math.random())
    attemptRemaining=10;
    guessedNumber=[];
    document.getElementById('guessArray').innerHTML=guessedNumberString
    document.getElementById('attemptCount').innerHTML=attemptRemaining
    document.getElementById('won').innerHTML=``
    document.getElementById("number").value = '';
    console.log(targetNum)
    document.querySelector('button[type="submit"]').disabled=false;
    document.querySelector('button[type="reset"]').innerHTML="Reset Game"



})