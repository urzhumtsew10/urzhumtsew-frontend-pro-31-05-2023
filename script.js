// ========= first task =========

let yourName = prompt("What's your name?");
while (yourName === "" || yourName === null) {
  yourName = prompt("What's your name?");
}

alert(`Hello, ${yourName}! How are you?`);

// ========= second task =========

let a = prompt("Enter first number");

while (a === "" || isNaN(a)) {
  a = prompt("Enter NUMBER");
}

let b = prompt("Enter second number");

while (b === "" || isNaN(b)) {
  b = prompt("Enter NUMBER");
}

const arithmeticOperation = prompt(
  "Choose, what you want to do with numbers? \n1. + \n2. - \n3. * \n4. /"
);

switch (arithmeticOperation) {
  case "1":
    alert(`${a} + ${b} = ${+a + +b}`);
    break;
  case "2":
    alert(`${a} - ${b} = ${+a - +b}`);
    break;
  case "3":
    alert(`${a} * ${b} = ${+a * +b}`);
    break;
  case "4":
    if (+b === 0) {
      alert("You cannot divide by zero!");
    } else {
      alert(`${a} / ${b} = ${+a / +b}`);
    }
    break;
  default:
    alert("No such item!");
}

// ========= third task =========

const valueOne = prompt("Enter first value");
const valueTwo = prompt("Enter second value");

const res = valueOne === valueTwo ? true : false;
alert(res);

// ========= fourth task =========
a = prompt("Enter first number");

while (a === "" || isNaN(a)) {
  a = prompt("Enter NUMBER");
}

b = prompt("Enter second number");

while (b === "" || isNaN(b)) {
  b = prompt("Enter NUMBER");
}

let c = prompt("Enter third number");

while (c === "" || isNaN(c)) {
  c = prompt("Enter NUMBER");
}

alert(`Arithmetic average(${a}, ${b}, ${c}) = (${(+a + +b + +c) / 3})`);

// ========= fiveth task =========

number = prompt("Enter number(five symbols)");

while (number === "" || isNaN(number)) {
  number = prompt("Enter NUMBER of five symbols");
}
let one = number % 10000;
one = (number - one) / 10000;
let two = number % 1000;
two = (number - two) / 1000;
two = two - one * 10;
let three = number % 100;
three = (number - three) / 100;
three = three - (one * 100 + two * 10);
let four = number % 10;
four = (number - four) / 10;
four = four - (one * 1000 + two * 100 + three * 10);
let five = number % 10;

alert(`${number} = ${one} ${two} ${three} ${four} ${five}`);
