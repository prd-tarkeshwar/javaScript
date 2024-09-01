
const name = "Tarkeshwar"
const repoCount = 50
//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('tarkeshwar-pa')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4)
console.log(newString);

const antherString = gameName.slice(-3,4)
console.log(antherString);

const newStringOne = "  tarkeshwar  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://automatic-space-invention-jjj4x655xpwqh4xv.github.dev/"
console.log(url.replace('4x','-'));

console.log(url.includes('space'));