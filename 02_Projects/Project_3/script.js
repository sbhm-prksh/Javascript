setInterval(()=>{
    let clock=document.getElementById('clock')
    let date=new Date()
    clock.innerHTML=date.toLocaleTimeString()
},100)