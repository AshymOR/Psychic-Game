
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var guessed = [];
var win = 0;
var losses = 0;
var guesses = 10;
var arrayNumber = 0;
var letter = 0;
var guess = 0;


//generate random number between 0 and 25 set it to number
function rng() {
    arrayNumber = Math.floor((Math.random()*letters.length));
}
console.log(arrayNumber);

//set letter = letters[number]
letter = letters[arrayNumber];
console.log(letter);

//records players guess, sets it to the guess variable
document.onkeyup = function (event) {
    var guess = event.key;

     if (letters.includes(guess)) {
        //if statement for when they guess right
        if (guess === letter) {
            win++;
            guesses = 11;
            guessed = [];
            rng();
            letter = letters[arrayNumber];
            console.log(letter);

        }
        // if statement for when they guess wrong
        if (guess !== letter) {
            guesses--;

        }
        //if statement for when they run out of attempts and lose
        if (guesses == 0) {
            losses++;
            guessed = []
            guesses = 11;
            rng();
            letter = letters[arrayNumber];
            console.log(letter);
        }

        //dealing with player input
        //prevents duplicate inputs from appearing on screen
        if (guessed.indexOf(guess) >= 0) {

        }
        //puts the players input into the guessed array. Writes it on screen
        else {
            guessed.push(guess);
            document.getElementById('guessed').innerHTML = guessed;
            console.log(guessed);

        }

        document.getElementById('win').innerHTML = win;
        document.getElementById('losses').innerHTML = losses;
        document.getElementById('guessesRemaining').innerHTML = guesses;
    }

}
