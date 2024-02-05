// while loop

let n = 0;
while (n <= 4) {
  console.log("number", n);
  n++;
}

// while loop sum

let i = 0;
let sum = 0;

while (i <= 10) {
  // sum = sum + i;
  sum += i; // short cut
  i++;
}

console.log(sum);

let numbers = [10, 20];
let sum1 = 0;
for (const number of numbers) {
  sum1 = sum1 + number;
}

console.log(sum1);
// gun

let j = 1;
let sum2 = 1;

while (j <= 5) {
  sum2 *= j;
  j++;
}

console.log(sum2);
