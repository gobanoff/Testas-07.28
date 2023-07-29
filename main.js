function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const box = document.querySelector("#box");
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");

// 1 Uzduotis

const a = 7;
const b = 4;

if (a === b) console.log("Abu skaičiai yra lygūs");
if (a > b) console.log("a skaičius didesnis : ", a);
else if (b > a) console.log("b skaičius didesnis: ", b);

// 2 Uzduotis

for (let i = 1; i < 11; i++) {
  console.log("2 užduotis : ", i);
}

// 3 Uzduotis

for (let i = 0; i < 11; i = i + 2) {
  console.log("Trečia užduotis : ", i);
}

// 4 Uzduotis

let number = 0;

for (let i = 0; i < 5; i++) {
  number = rand(1, 10);
  console.log("4 užduotis : ", number);
}

// 5 Uzduotis

let randomNumber = 0;

while (randomNumber !== 5) {
  randomNumber = rand(1, 10);

  console.log("Penktoji užduotis : ", randomNumber);
}

// 6 Uzduotis

function max(array) {
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

let arrayA = [];
arrayA.length = rand(20, 30);
for (let q = 0; q < arrayA.length; q++) {
  arrayA[q] = rand(10, 30);
  max(arrayA);
}

console.log("6 užduotis : ", arrayA);
console.log("Didžiausią masyvo reikšmę : ", max(arrayA));
box.innerHTML = " (6 užd.) didžiausią masyvo reikšmę : " + max(arrayA);

// 7 Uzduotis

function letters(x) {
  if (x === 0) return "A";
  if (x === 1) return "B";
  if (x === 2) return "C";
  if (x === 3) return "D";
}
let sumA = 0;
let sumB = 0;
let sumC = 0;
let sumD = 0;
const ltrArray = [];
const letter = ["A", "B", "C", "D"];
for (let i = 0; i < 100; i++) {
  let r = letters(rand(0, 3));
  ltrArray.push(r);

  if (r === "A") sumA++;
  if (r === "B") sumB++;
  if (r === "C") sumC++;
  if (r === "D") sumD++;
}
console.log(ltrArray);
console.log("suma A : ", sumA);
console.log("suma B : ", sumB);
console.log("suma C : ", sumC);
console.log("suma D : ", sumD);
box1.innerHTML =
  "(7 užd.) Suma A : " +
  sumA +
  " ," +
  " Suma B : " +
  sumB +
  " ," +
  " Suma C : " +
  sumC +
  " ," +
  " Suma D : " +
  sumD;

// 8 Uzduotis

function lygineSuma(a, b) {
  let total = a + b;
  if (total % 2 === 1) {
    console.log("suma nelyginė");
  }
  return total;
}

console.log(lygineSuma(12, 9));

// 9 Uzduotis

function pirminisSkaicius(y) {
  let prime = y;

  if (typeof prime === "number") {
    console.log("Kintamasis yra skaičius.");
  } else {
    console.log("Kintamasis nėra skaičius.");
  }

  if (prime < 2) return false;
  for (let i = 2; i <= Math.sqrt(prime); i++) {
    if (prime % i === 0) {
      return false;
    }
  }

  return true;
}
y = 59;
y = 77;
console.log("Ar pateiktas skaičius yra pirminis? :" + pirminisSkaicius(59));
console.log("Ar pateiktas skaičius yra pirminis? :" + pirminisSkaicius(77));

// 10 Uzduotis

function telefonoNumeris(w) {
  for (let i = 0; i < w.length; i++) {
    if (w[i] < 10) {
      const abc = w.slice(0, 3).join("");
      const efg = w.slice(3, 6).join("");
      const klm = w.slice(6, 10).join("");
      return `(${abc}) ${efg}-${klm}`;
    }
  }
}
let v = [3, 7, 3, 4, 5, 6, 7, 8, 9, 4];
console.log(telefonoNumeris(v));
box2.innerHTML = "Mobile : " + "+" + telefonoNumeris(v);
