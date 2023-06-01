// ============================     HOMEWORK #4       ============================

let bornYear = prompt("When you were born?");

while (
  ((bornYear <= 1900 || bornYear >= 2023) && bornYear !== null) ||
  isNaN(bornYear)
) {
  bornYear = prompt("When you were born? (form 1900 to 2023 year)");
}
if (bornYear === null) {
  alert("We're sorry you didn't want to enter to birth year");
  bornYear = "Nothing";
}

let yourCity = prompt("Where do you live?");

while (!isNaN(yourCity) && yourCity !== null) {
  yourCity = prompt("Where do you live?(It isn't string)");
}
if (yourCity === null) {
  alert("We're sorry you didn't want to enter to your city");
  yourCity = "Nothing";
} else {
  yourCity = yourCity.toLowerCase();
}
switch (yourCity) {
  case "kiyv":
    yourCity = "capital Ukraine";
    break;
  case "london":
    yourCity = "capital England";
    break;
  case "washington":
    yourCity = "capital USA";
    break;
  default:
    const size = yourCity.lenght;
    yourCity =
      "city " + yourCity.slice(0, 1).toUpperCase() + yourCity.slice(1, size);
}

let favoriteSport = prompt("What's your favorite sport?");

while (!isNaN(favoriteSport) && favoriteSport !== null) {
  favoriteSport = prompt("What's your favorite sport?(It isn't string)");
}
if (favoriteSport === null) {
  alert("We're sorry you didn't want to enter to your favorite sport");
  favoriteSport = "Nothing";
} else {
  favoriteSport = favoriteSport.toLowerCase();
}

switch (favoriteSport) {
  case "basketball":
    favoriteSport = "Michael Jordan";
    break;
  case "football":
    favoriteSport = "Leo Messi";
    break;
  case "boxing":
    favoriteSport = "Vasiliy Lomachenko";
  default:
    favoriteSport = "Champion";
}

alert(
  `Your age: ${
    2023 - bornYear
  }\nYou live in the ${yourCity}\nCool!You want to will be a ${favoriteSport}`
);
