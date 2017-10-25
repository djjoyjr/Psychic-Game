var wins = 0;
var losses = 0;
var turns = 9;
var options = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuess = "";
var computerGuess = options[Math.floor(Math.random()*options.length)];
var guessedSoFar = [];

document.onkeyup = function(event) {
  userGuess = event.key;

if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) {

if (userGuess == computerGuess) {
 wins++;
 turns = 9;
 userGuess = "";
 guessedSoFar = [];
 alert("You Win! the letter was:  " + computerGuess + ". Click OK to play again.");
 computerGuess = options[Math.floor(Math.random()*options.length)];
}
else if(userGuess !== computerGuess) {
turns--;
}

if (turns > 0) {
  guessedSoFar.push(userGuess);
}

if (turns ==0) {
   losses++;
   turns= 9;
   guessedSoFar = [];
   alert("Sorry, you lost. The correct letter was: " + computerGuess + ". Click OK to play again.");
   computerGuess = options[Math.floor(Math.random()*options.length)];
}
}
var html =
  "<h3>Wins: " + wins + "</h3>" +
  "<h3>Losses: " + losses + "</h3>" +
  "<h3>Turns: " + turns + "</h3>" +
  "<h3>Letters guessed so far: " + guessedSoFar + "</h3>";

  document.querySelector("#game").innerHTML = html;
  console.log (computerGuess);

}
