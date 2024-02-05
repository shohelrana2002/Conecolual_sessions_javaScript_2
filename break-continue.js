const numbers = [10, 21, 55, 40];

for (let number of numbers) {
  // console.log(number);
  if (number === 21) {
    break;
  }
}
// continue hole skip korbe
for (let number of numbers) {
  if (number === 21 || number === 55) {
    continue;
  }
  // console.log(number);
}

for (let number of numbers) {
  if (number % 2 === 0) {
    continue;
  }
  console.log(number);
}
