let xhr= new XMLHttpRequest();
xhr.open('GET','https://randomuser.me/api/')
console.log("Loarding")
xhr.onreadystatechange=function(){
    console.log('State Changing')
    if(xhr.readyState==4)
    {
        console.log("We got the data")
        let data=JSON.parse(this.responseText);
        document.querySelector('#userPhoto').setAttribute('src',`${data["results"][0]["picture"]["large"]}`)
        document.querySelector('#userName').innerHTML=`${data["results"][0]["name"]["title"]} ${data["results"][0]["name"]["first"]} ${data["results"][0]["name"]["last"]}`
        document.querySelector('#userEmail').innerHTML=`${data["results"][0]["email"]}`
        document.querySelector('#userGender').innerHTML=`${data["results"][0]["gender"]}`
        document.querySelector('#userAge').innerHTML=`${data["results"][0]["dob"]["age"]}`
    }
}
xhr.send();