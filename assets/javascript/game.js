// Letter options
var letters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
                "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
                "y", "z"];

// Var on html screen
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var LettersGuessed = [];

// Which key the user pressed
var userGuess = "";
var computerLetter = ""; //global var

// computer randomly generates letter for game
function randomLetter () {
    var letter = letters[Math.floor(Math.random()*letters.length)];
    return letter;
}
    computerLetter=randomLetter();
    console.log("Computer choice " + computerLetter);

// Function for what to do when letter is pressed
document.onkeypress = function(event){
    userGuess=event.key;
    // Which key was pressed
    // If letter pressed is UpperCase or non-alphabet character
    var lowerCaseUserGuess = userGuess.toLowerCase()
    if (lowerCaseUserGuess==computerLetter) {
    // If computerLetter == userGuess record a win and reset game
    // wins = wins +1
        wins++;
        alert ("You so clever. Good job!");
    // guessLeft returns to 9, LettersGuessed array empties
        guessesLeft=9;
        LettersGuessed=[];

    // computer generates a new random letter
        computerLetter=randomLetter();
    }

    else {
    // Incorrect = add letter to LettersGuessed array
        LettersGuessed[LettersGuessed.length]=userGuess;
        console.log("You have picked these letter so far " + LettersGuessed);
    // Incorrect = -1 to guessesLeft
        guessesLeft--;
    }

    // guessesLeft = 0 = lost game!
    if (guessesLeft == 0) {
        losses++;
        alert("Wa Gwan! You LOST!");
    // guessesLeft returns to 9 & LettersGuessed array empties
        guessesLeft = 9;
        LettersGuessed =[];
    // computer generates a new random letter
        computerLetter=randomLetter();

    }

    //Display all result on HTML
    document.querySelector("#wins").innerHTML = 'Wins: ' +wins;
    document.querySelector("#losses").innerHTML = 'Losses: ' +losses;
    document.querySelector("#guessesLeft").innerHTML = 'Guesses Left: ' +guessesLeft;
    document.querySelector("#LettersGuessed").innerHTML = 'Your guesses so far: ' +LettersGuessed.join(', ');
}