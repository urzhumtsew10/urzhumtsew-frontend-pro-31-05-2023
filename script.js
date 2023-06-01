// ============================     HOMEWORK #5       ============================

let numOrStr = prompt("input number or string");
console.log(numOrStr);

switch (numOrStr) {
  case null:
    console.log("ви відмінили");
  case numOrStr.trim() === "":
    console.log("Empty String");
  case isNaN(+numOrStr):
    console.log("number is Ba_NaN");
  default:
    console.log("OK!");
}
