// MODERN APPRAOCH TO EVENTS
document.getElementById('river').addEventListener('click',()=>{
    alert('River clicked');
});

// GETTING EVENT OBJECT
document.getElementById('river').addEventListener('click',( e)=>{
    console.log(e);
}, false);

// EVENT PROPAGATION

// BUBBLING
document.getElementById('images').addEventListener('click', ()=>{
    console.log("Parent Image Clicked")
}, false)
document.getElementById('japan').addEventListener('click', ()=>{
    console.log("Japan Clicked")
}, false)

// CAPTURING
document.getElementById('images').addEventListener('click', ()=>{
    console.log("Parent Image Clicked")
}, true)
document.getElementById('japan').addEventListener('click', ()=>{
    console.log("Japan Clicked")
}, false)

// STOPPING PROPAGATION
document.getElementById('images').addEventListener('click', (e)=>{
    console.log("Parent Image Clicked")
}, false)
document.getElementById('japan').addEventListener('click', (e)=>{
    console.log("Japan Clicked")
    e.stopPropagation(); // SEE NOTES FOR DIFFERENT VARIATION IN ITS POSITION OF INSERTION
}, false)

// EVENT TARGET
document.getElementById('images').addEventListener('click', (e)=>{
    console.log(e.target.id) // IT WILL BE THAT OF JAPAN (SURPRISING!!!!!!)
}, false)
document.getElementById('japan').addEventListener('click', (e)=>{
    console.log(e.target.id)
}, false)

// PREVENT DEFUALT
document.getElementById('google').addEventListener('click', (e)=>{
    e.preventDefault(); // IT WILL NOT GO TO GOOGLE.COM
    console.log("Google Clicked")
});

// DISAPPEARING IMAGES

// MY METHOD
let ourImages=document.querySelectorAll('img');
console.log(ourImages);
ourImages.forEach((image)=>{
    image.addEventListener('click', (e)=>{
        console.log(e.target)
        if(image.style.display=='none')
        {
            image.style.display='block'
        }
        else
        {
            image.style.display='none'
        }
    })
})

// SIR METHOD
document.getElementById('images').addEventListener('click', (e) => {
    console.log(e.target.tagName) //it gives you the tag of that element
    if (e.target.tagName == 'IMG') 
    {
        let toRemove = e.target.parentElement;
        toRemove.remove()
    }
})
