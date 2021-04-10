const myName = prompt("What is your name?")
const myAge = prompt("How old are you?")
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears *= 4;
let myAgeInDogYears = earlyYears + laterYears;

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)