// Arrays
const myHeros=['Elon','Sam','Virat']
const myHobbies=['Running','Sleeping','History']

//PUSH
myHeros.push(myHobbies)
console.log(myHeros)
console.log(myHeros.length)
console.log(myHeros[3])
console.log(myHeros[3][1])

// CONCAT
const myMerged=myHeros.concat(myHobbies)
console.log(myMerged)

// SPREAD OPERATOR
const allNew=[...myHeros, ...myHobbies]
console.log(allNew)

// flat 
const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(anotherArray)
console.log(anotherArray[5][2][0])
const real_anotherArray=anotherArray.flat(2)
console.log(real_anotherArray)

// Checking whether a array or not
console.log(Array.isArray([1,2,3,4]))
console.log(Array.isArray("Shubham"))

// Making arrays
// M1
let score=100
let names="Shubham"
let arraysss=[1,2,34,null]
console.log(Array.of(score, names, arraysss))
// M2
console.log(Array.from([1,2,3,4]))
console.log(Array.from("Shubam"))
console.log(Array.from({key:"value"}))

