console.log("Welcome Mister and Miss PHT08!");

const guessedNumber = prompt("What is your guess number? ");
var secretNumber = Math.floor(Math.random() * 10 + 1);
let attempts = 0;

if (guessedNumber < secretNumber) {
do {
  attempts++;
} while (attempts <= 9999999999);


  console.log("Too low, Try again");
} else if (guessedNumber > secretNumber) {
  console.log("Too high, Try again");
} else {
  console.log(`Congratulations, you guessed the correct number:`, secretNumber);
  console.log(`You also have number of attempts:`, attempts);
}

