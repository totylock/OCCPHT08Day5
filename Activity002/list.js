const firstNumber = prompt("What is first number?: ");
const secondNumber = prompt("What is second number? ");
let thirdNumber = Math.min(firstNumber,secondNumber);
let fourthNumber = Math.max(firstNumber,secondNumber);
let ranga = Math.abs(Math.abs(firstNumber)-Math.abs(secondNumber));


let count = 1;
while (count <= ranga) {
  console.log("Sequence:", thirdNumber++);
  count++;
}
