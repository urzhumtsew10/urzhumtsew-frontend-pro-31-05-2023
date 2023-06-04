// ============================     HOMEWORK #6       ============================

// task 1

let firstNumber = prompt("Enter first number");
while (
  firstNumber === null ||
  isNaN(firstNumber) ||
  firstNumber.trim() === ""
) {
  firstNumber = prompt("Enter first number(ENTER NUMBER)");
}

let secondNumber = prompt("Enter second number");
while (
  secondNumber === null ||
  isNaN(secondNumber) ||
  secondNumber.trim() === ""
) {
  secondNumber = prompt("Enter second number(ENTER NUMBER)");
}

if (+firstNumber > +secondNumber) {
  alert("First number bigger than second number");
} else if (+firstNumber < +secondNumber) {
  alert("Second number bigger than first number");
} else {
  alert("First number equals the second");
}

// task 2

let distance1 = prompt("Enter first distance in kilometers");
while (distance1 === null || isNaN(distance1) || distance1.trim() === "") {
  distance1 = prompt("Enter first distance in kilometers (enter number)");
}

let distance2 = prompt("Enter first distance in pounds");
while (distance2 === null || isNaN(distance2) || distance2.trim() === "") {
  distance2 = prompt("Enter first distance in pounds (enter number)");
}

if (distance1 * 1000 < distance2 * 0.305) {
  alert("First distance smaller than second distance");
} else if (distance1 * 1000 > distance2 * 0.305) {
  alert("Second distance smaller than first distance");
} else {
  alert("These distances are equal");
}

// task 3

let a = prompt("Enter first number");
while (a === null || isNaN(a) || a.trim() === "") {
  a = prompt("Enter first number(ENTER NUMBER)");
}

let b = prompt("Enter second number");
while (b === null || isNaN(b) || b.trim() === "") {
  b = prompt("Enter second number(ENTER NUMBER)");
}

if (b % a === 0) {
  alert("The number a is the divisor of b");
} else if (a % b === 0) {
  alert("The number b is the divisor of a");
}

// task 4

a = prompt("Enter number");
while (a === null || isNaN(a) || a.trim() === "") {
  a = prompt("Enter number(ENTER NUMBER)");
}

if (a % 2 === 0) {
  alert("Number a ends with a pair of digits - " + `${a % 10}`);
} else {
  alert("Number a doesn't end with a pair of digits - " + `${a % 10}`);
}

// task 5

a = prompt("Enter number");
while (a === null || isNaN(a) || a.trim() === "" || a.length !== 2) {
  a = prompt("Enter number(ENTER NUMBER AND LENGHT IS 2)");
}

const firstdigit = (a - (a % 10)) / 10;
const lastdigit = a % 10;

if (firstdigit > lastdigit) {
  alert("First digit bigger than last digit");
} else if (lastdigit > firstdigit) {
  alert("Last digit bigger than first digit");
} else {
  alert("These distances are equal");
}

// task 6-7

a = prompt("Enter number");
while (a === null || isNaN(a) || a.trim() === "" || a.length !== 3) {
  a = prompt("Enter number(ENTER NUMBER AND LENGHT IS 3)");
}

const firstDigit = (a - (a % 100)) / 100;
const secondDigit = (a - (a % 10) - firstDigit * 100) / 10;
const thirdDigit = a % 10;

let message1;
let message2;
let message3;

if ((firstDigit + secondDigit + thirdDigit) % 2 === 0) {
  message1 = "Pair";
} else {
  message1 = "Not pair";
}

if ((firstDigit + secondDigit + thirdDigit) % 5 === 0) {
  message2 = "Suma of numbers can divided by 5";
} else {
  message2 = "Suma of numbers can't divided by 5";
}

if (firstDigit * secondDigit * thirdDigit > 100) {
  message3 = "Products of numbers more than 100";
} else {
  message3 = "Products of numbers not more than 100";
}

alert(`Result:\n1.${message1}\n2.${message2}\n3.${message3}`);

if (
  firstDigit === secondDigit &&
  secondDigit === thirdDigit &&
  firstDigit === thirdDigit
) {
  alert("All numbers are the same");
} else if (firstDigit === secondDigit) {
  alert("First and second numbers are the same");
} else if (secondDigit === thirdDigit) {
  alert("Second and third numbers are the same");
} else if (firstDigit === thirdDigit) {
  alert("First and third numbers are the same");
}

// task 8

// Извините за такое странное решения этой задачи

a = prompt("Enter number");
while (a === null || isNaN(a) || a.trim() === "" || a.length !== 6) {
  a = prompt("Enter number(ENTER NUMBER AND LENGHT IS 6)");
}

const last_Number = a % 10;
const fiveth_Number = ((a - last_Number) / 10) % 10;
const fourth_Number = ((a - (fiveth_Number * 10 + last_Number)) / 100) % 10;
const third_Number =
  ((a - (fourth_Number * 100 + fiveth_Number * 10 + last_Number)) / 1000) % 10;
const second_Number =
  ((a -
    (third_Number * 1000 +
      fourth_Number * 100 +
      fiveth_Number * 10 +
      last_Number)) /
    10000) %
  10;
const first_Number =
  ((a -
    (second_Number * 10000 +
      third_Number * 1000 +
      fourth_Number * 100 +
      fiveth_Number * 10 +
      last_Number)) /
    100000) %
  10;

const firstPart =
  String(first_Number) + String(second_Number) + String(third_Number);
const secondPart =
  String(third_Number) + String(second_Number) + String(first_Number);

const firstPart_your =
  String(first_Number) + String(second_Number) + String(third_Number);

const secondPart_your =
  String(fourth_Number) + String(fiveth_Number) + String(last_Number);

if (firstPart === firstPart_your && secondPart === secondPart_your) {
  alert(`Your number(${a}) is mirror`);
} else {
  alert(`Your number(${a}) isn't mirror`);
}
