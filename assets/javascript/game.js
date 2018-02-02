//initialize win counter
var userWins = 0;

//initialize counter for number of guesses remaining
var remainingGuesses = 12;

//Create array with the names of different movies
var films = ["precious", "psycho", "inception", "carrie", "predator", "jumanji", "aliens", "amelie", "powder", "jaws", "prometheus", "xanadu", "leviathan", "rudy", "gaslight", "shaft", "scarface", "dumbo", "gigli", "mother", "dunkirk", "psycho"];
 
var randomWord = films[Math.floor(Math.random() * films.length)];

var answerArray = [];
var dashLine = " ";
var beginGame = true;

//Capture user keystroke
document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = event.key;

function startUP () {
    for (var i = 0; i< randomWord.length; i++) {
        answerArray[i] = "_";
    }

    dashLine = answerArray.join(" ");

    document.getElementById("current-word").innerHTML = dashLine;

}

document.getElementById("user-wins").innerHTML = 0;
document.getElementById("user-remaining-guesses").innerHTML = 12;

    if (beginGame === true) {

        startUP();

    } else {
        
        //Save user guess into user guessed array
        usedLetters.push(event.key);
        
        if (remainingGuesses > 0); {
            var letterPosition = randomWord.search(userGuess);
            var usedLettersPosition = usedLetters.indexOf(userGuess);
            
            //If user guess is in the movie title and has NOT already been used by the user
            if (letterPosition >= 0 && usedLettersPosition < 0); {

                //Move the letter to all appropriate spaces in the browser
                
                //Move the letter to "Letters already guessed" in the browser
                document.getElementById("user-guessed").innerHTML = usedLetters;
                
                //If word is complete
                    userWins = userWins + 1;

                    //Print to "Wins" in browswer
                    document.getElementById("user-guessed").innerHTML = userWins;

                    //Clear used letters array
                    var usedLetters = [];

                    //Clear "Letters already guessed" in browser

                    //Change number of guesses remaining to 12
                    remainingGuesses = 12;

                    //print number of guesses remaining to browswer
                    document.getElementById("user-remaining-guesses").innerHTML = remainingGuesses;

                    //Display dashes for next movie in browser
                    startUp();
                //else
                    remainingGuesses = remainingGuesses -1;

                    //print number of guesses remaining to browswer
                    document.getElementById("user-remaining-guesses").innerHTML = remainingGuesses;

                    //print letter to "Letters already guessed" in browser
                    document.getElementById("user-guessed").innerHTML = usedLetters;

                //screenDashArray.fill(userGuess, letterPosition);
                
            }
            
        }
    } 
}
    

