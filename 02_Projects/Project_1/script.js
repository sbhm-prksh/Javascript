let buttons=document.querySelectorAll('.colorChanger')
let body=document.querySelector('body')
// BELOW FOREACH WILL SET EVENTLISTENER TO EACH BUTTONS.
// ALTERNATE WAY IS TO SET EVENTLISTENER TO EACH BUTTONS INDIVISUALLY
buttons.forEach((button)=>{
    button.addEventListener('click', (evnt)=>{
        // console.log(evnt) // Whole event object which contains all necessary information about the even
        // console.log(evnt.target) // It gives us the html that has triggered the event.
        // console.log(evnt.target.id) //Now you can apply id, className or whatever on that html
        body.style.backgroundColor=evnt.target.id;
    })
})