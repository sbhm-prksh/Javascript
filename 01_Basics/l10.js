// Stack and heap memory
// Pass by value
let myTwitter="sbhm_prksh"
let myWebsite="sbhmprksh.in"
console.log(myTwitter)
console.log(myWebsite)
myWebsite="shubhamprakash.in"
console.log(myTwitter)
console.log(myWebsite)
// Pass by reference
let jobOne={
    company:"google",
    ctc:5400000
}
let jobTwo=jobOne
console.log(jobOne.company)
console.log(jobTwo.company)
jobTwo.company="uber"
console.log(jobOne.company)
console.log(jobTwo.company)
 



