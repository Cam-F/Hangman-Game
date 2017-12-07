// Array for the possible words
var randomWord = ["singapore", "bangladesh", "poland", "russia", "greenland", "moldova", "venezuela", "taiwan", "libya"];
var word = randomWord[Math.floor(Math.random() * randomWord.length)];

var rightLetter = [];   // Right guesses
var wrongLetter = [];   // Wrong guesses
var point = 0;          // Points
var lives = 15;         // Lives
var remainingLetters = word.length;

console.log("The word is: " + word);

// Get elements ==================================
var wordhtml = document.getElementById("word");
var wrongGuess = document.getElementById("wrongGuess");
var pointSpan = document.getElementById("pointSpan");
var livesSpan = document.getElementById("livesSpan");

// ================ INTIAL FUNCTION ================
function gameStart() {
    rightLetter = [];                                           // For restart
    remainingLetters = word.length;                             // For restart      
    wordhtml.innerHTML = rightLetter.join(" ");                 // For restart
    for (var i = 0; i < word.length; i++) {
        rightLetter.push(" _ ");
    }
    wordhtml.innerHTML = rightLetter.join(" ");
}

// ================ NEW WORD ================

// I think this is where having it all in 1 object will help

// ================ MAIN FUNCTION ================

function updateGuess(guess) {
    if (word.indexOf(guess) == -1) {                         // If the letter is not in the word
        wrongLetter.push(guess);                             // Add to wrongLetter array
        wrongGuess.innerHTML = wrongLetter.join(", ");
        lives--;                                             // Lose 1 life
        livesSpan.innerHTML = lives;
        console.log(wrongLetter);
    }
    else {                                          // The user guess is correct 
        for (var j = 0; j < word.length; j++) {     // Replace _ with the correct letter in the array
            if (word[j] === guess) {                // 
                rightLetter[j] = guess;             // 
                remainingLetters--;
                console.log(rightLetter);
                console.log(remainingLetters);
            }
            if (remainingLetters === 0) {               // Win message
                alert("You Win!");                      // Adds 1 point
                point++;                                // Sometimes adds multiple points ??????
                pointSpan.innerHTML = point;
                gameStart();
            }
            if (lives === 0) {
                alert("You Lose");
            }
        }
        wordhtml.innerHTML = rightLetter.join(" ");     // Changing the HTML content to display the updated array
    }
}

// Log the user guess
document.onkeyup = function (event) {
    var letter = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    updateGuess(letter);
}

gameStart();