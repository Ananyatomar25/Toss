var randomNumber1, randomNumber2;

// FOR DICE 1\

randomNumber1 = Math.floor(Math.random() * 6) +1 ; // numbers from 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice images from dice1.png-dice2=6.png
var randomImageSoruce = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0]; // taking the 1st dice
image1.setAttribute("src",randomImageSoruce); // setting the randomDiceImage

// FOR DICE 2

randomNumber2 = Math.floor(Math.random() * 6) +1 ; // numbers from 1-6
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // dice images from dice1.png-dice2=6.png
var randomImageSoruce2 = "images/" + randomDiceImage2; //images/dice1.png - images/dice6.png
var image2 = document.querySelectorAll("img")[1]; // taking the 1st dice
image2.setAttribute("src",randomImageSoruce2); // setting the randomDiceImage

// declaring winner or draw


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else if(randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!";
}
