// INTIAL VALUES
let targetNum=Math.ceil(1+99*Math.random())
let attemptRemaining=10;
let guessedNumber=[];

// SETTING DOM TO NEW VALUES
let guessedNumberString=guessedNumber.join();
document.getElementById('guessArray').innerHTML=guessedNumberString
document.getElementById('attemptCount').innerHTML=attemptRemaining

let form=document.querySelector('form')
form.addEventListener('submit',(evnt)=>{
    evnt.preventDefault();
    let enteredNum=Number(document.getElementById("number").value);

    // CHECKING IF NO INPUT IS THERE
    if(document.getElementById("number").value=='')
    {
        alert("Kindly enter a number")
    }

    // CHECKING WHETHER NUMBER IS IN RANGE OR NOT
    else if(enteredNum>100 || enteredNum<0)
    {
        alert("Kindly enter number in 1 to 100 range")

    }
    // IF EVERYTHING IS OKAY
    else
    {
        // SETTING DOM TO NEW VALUES
        attemptRemaining--;
        guessedNumber.push(enteredNum)
        let guessedNumberString=guessedNumber.join();
        document.getElementById('guessArray').innerHTML=guessedNumberString
        document.getElementById('attemptCount').innerHTML=attemptRemaining

        // IF USER GOT THE CORRECT NUMBER
        if(enteredNum==targetNum)
        {
            document.querySelector('button[type="reset"]').innerHTML="Restart Game"
            document.getElementById('won').innerHTML=`Congratulation You Won! You entered the correct number i.e ${targetNum}.\n Kindly restart the game.`
            document.querySelector('button[type="submit"]').disabled=true;
        }

        // IF WRONG GUESS
        else
        {
            document.getElementById('won').innerHTML=`Oh No,Wrong Guess! Try again`
        }

        // IF NO FURTHER ATTEMPT IS REMAINING
        if(attemptRemaining==0)
        {
            document.querySelector('button[type="reset"]').innerHTML="Restart Game"
            document.getElementById('won').innerHTML=`You lost! The correct number was ${targetNum}.`
            document.querySelector('button[type="submit"]').disabled=true;

        }
        document.getElementById("number").value = ''; // Making form empty again for next attempt
    }
})

// RESTART OR RESET
form.addEventListener('reset', (evnt)=>{
    evnt.preventDefault();
    // GETTING NEW VALUES
    targetNum=Math.ceil(1+99*Math.random())
    attemptRemaining=10;
    guessedNumber=[];
    guessedNumberString=guessedNumber.join()

    // RE ADJUSTING DOM TO INITIAL STATE
    document.getElementById('guessArray').innerHTML=guessedNumberString
    document.getElementById('attemptCount').innerHTML=attemptRemaining
    document.querySelector('button[type="reset"]').innerHTML="Reset Game"
    document.getElementById('won').innerHTML=``

    // ENABLING SUBMIT BUTTON WITH NULL VALUES
    document.querySelector('button[type="submit"]').disabled=false;
    document.getElementById("number").value = '';
})