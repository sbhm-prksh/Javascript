let form=document.querySelector('form')
form.addEventListener('submit', (e)=>{
    // IT WILL PREVENT SUBMIT BUTTON TO MAKE POST OR GET REQUEST
    e.preventDefault();

    // WHENEVER WE ARE CLICKING CALCULATE BUTTON, PREVIOUS COLOR CODING OF CLASSIFICATION SHOULD BE RESET
    // SO BELOW LINE WILL SET IT TO DEFAULT INTERNAL CSS CALUES
    document.querySelectorAll('tbody tr').forEach(row => {
        row.style.backgroundColor = '';
    });

    // GETTING VALUE OF INPUT/SELECTBOX OR TEXTAREA
    console.log(document.querySelector('#height').value)
    let height=Number(document.querySelector('#height').value)
    let weight=Number(document.querySelector('#weight').value)
    console.log(height)
    // ERROR HANDELING
    if(height<=0 || weight<=0)
    {
        alert("Kindly Enter Valid Height/Weight")
    }
    else
    {
        let bmi=((weight*10000/(height*height))).toFixed(2)
        document.querySelector('#result').innerHTML=`<p id='finalOutput'>Your BMI: ${bmi}</p>`
        if(bmi<18.5)
        {
            document.querySelector('tbody tr:nth-child(1)').style.backgroundColor='rgb(201,68,68)'
        }
        else if(18.5<=bmi && bmi<24.9)
        {
            document.querySelector('tbody tr:nth-child(2)').style.backgroundColor='green'
        }
        else if(25<=bmi && bmi<=29.9)
        {
            document.querySelector('tbody tr:nth-child(3)').style.backgroundColor='rgb(201,68,68)'
        }
        else if(bmi>29.9)
        {
            document.querySelector('tbody tr:nth-child(4)').style.backgroundColor='red'
            
        }
    }
})

// RESET BUTTON
form.addEventListener('reset', (e)=>{

    document.querySelectorAll('tbody tr').forEach(row => {
        row.style.backgroundColor = '';
    });

    // REMOVING BMI RESULT PARAGRAPH
    if(document.querySelector('#finalOutput')!=null) //CHECKING WHETHER THAT ELEMENT IS PRESENT OR NOT. BECAUSE USER CAN CLICK RESET JUST AFTER LANDING ON THE PAGE
    {
        document.querySelector('#finalOutput').style.display='none'
    }


})