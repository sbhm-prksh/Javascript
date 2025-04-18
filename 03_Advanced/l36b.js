let btn1=document.querySelector('button')
btn1.addEventListener('click', (e)=>{
    let body=document.querySelector('body')
    if(body.style.backgroundColor=='white')
    {
        body.style.backgroundColor='black';
    }
    else
    {
        body.style.backgroundColor='white';
    }
})

// KEYBOARD EVENTS
document.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
  });
  