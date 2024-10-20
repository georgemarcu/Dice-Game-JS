// for the dices
var randomNumbers = [];
var randomNumberDice = [];
var randomImageSource = [];

for(var i=0;i<4;i++){
   randomNumbers[i] = Math.floor(Math.random() * 6) + 1; // generate number between 1-6

   randomNumberDice[i] = "dice" + randomNumbers[i] + ".png"; // generate dice image based on randomNumber
  
   randomImageSource[i] = "images/" + randomNumberDice[i]; //generate source based on dice1
  
  document.querySelectorAll("img")[i].setAttribute("src", randomImageSource[i]); //change source of player 1 dice
}

// for the h1 element
if (randomNumbers[0] + randomNumbers[1]> randomNumbers[2] + randomNumbers[3]) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumbers[0] + randomNumbers[1]< randomNumbers[2] + randomNumbers[3]) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
  document.querySelector("h1").innerHTML = "It's a draw!";
}
