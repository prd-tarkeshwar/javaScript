const marvel_heros = ["aa","dd","fff"]
const dc = ["aa","rr","gg"]

// marvel_heros.push(dc)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc)
// console.log(allHeros);

const all_heros = [...marvel_heros,...dc]

// console.log(all_heros);
const another_array = [1,,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Tarkeshwar"));
console.log(Array.from("Tarkeshwar"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2,score3));
