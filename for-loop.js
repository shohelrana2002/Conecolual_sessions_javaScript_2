// loop a const use kora jabe na
for (let i = 1; i <= 10; i += 2) {
  //   console.log("Shohel Rana", i);
}

const numbers = [10, 20, 50, 40, 5, 0, 54, 5, 451, 5, 4];
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i < numbers.length; i++) {
  const x = numbers[i];
  if (x % 2 === 0) {
    sumOdd += x;
  } else {
    sumEven += x;
  }
}

console.log(sumOdd);
console.log(sumEven);
