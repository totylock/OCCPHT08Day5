const Score = prompt("Enter your score: ");

if (Score >= 90 && Score <=100) {
  console.log("Your Grade Rank is A, Very Satisfactory Rank! Congratulations!");
} else if(Score >100){
console.log("Your grade is not ordinary. An error grade. Go to guidance!");
}
else if (Score >= 80 && Score < 90) {
  console.log("Your Grade Rank is B, Satisfactory Rank! Congratulations!");
} else if (Score >= 70 && Score < 80) {
  console.log("Your Grade Rank is C, Improved Rank! Congratulations!");
} else if (Score >= 61 && Score < 70) {
  console.log("Your Grade Rank is D, Need Improvement Rank! Congratulations!");
} else {
  console.log("Oh no! Your Grade Rank is F! Better luck next time.");
}
