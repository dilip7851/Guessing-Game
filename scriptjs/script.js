

var inputBox = document.querySelector("#input");
var GuessingBtn = document.querySelector("#guessBtn");

var Wrong = document.querySelector("#Wrong");
var Guess = document.querySelector("#Guess");

var ansRandom = Math.floor(Math.random() * 100) + 1;
//    console.log(ans);
var numGuess = 0;


GuessingBtn.addEventListener(
    "click",
    function () {
        guessNumber()
    }
)


function guessNumber() {
    if (inputBox.value < 1 || inputBox.value > 100 || isNaN(inputBox.value)) {
        Wrong.innerHTML = `Enter between 1 to 100`;
    } else {
        numGuess++;
        Guess.innerHTML = "No of Guess: " + numGuess;


        if (inputBox.value > ansRandom) {
            Wrong.innerHTML = "<h2>You guessed too High</h2>";
            inputBox.value = "";
        } else if (inputBox.value < ansRandom) {
            Wrong.innerHTML = "<h2>You guessed too Low </h2>"
            inputBox.value = "";

        } else {
            Wrong.innerHTML = "<h2> Congratulation You guessed the correct answer </h2>"
            setTimeout(() => {
                resetGame();
            }, 5000);
        }

    }



}


function resetGame() {
    numGuess = 0;
    ansRandom = Math.floor(Math.random() * 100) + 1;
    inputBox.value = "";
    Guess.innerHTML = "No of Guess:0";
    Wrong.innerHTML = "";

}


