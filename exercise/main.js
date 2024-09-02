var min = 1;
var max = 100;
var guesses = 0;


document.getElementById('startBtn').addEventListener('click', function() {
    guesses = 0;
    min = 1;
    max = 100;
    guessNumber();
})


function startBtn(){
    document.getElementById('startBtn').addEventListener('click')
    guesses = 0;
    min = 1;
    max = 100;
    guessNumber();

}

function guessNumber() {
    const guess = Math.floor((min + max) / 2);
    guesses++;
    const userResponse = confirm(`Is your number ${guess}? Click "OK" if the number is correct, or "Cancel" if it is not.`);

    if (userResponse) {
        document.getElementById('result').innerHTML = `The computer guessed your number in ${guesses} tries!`;
        document.getElementById('result').classList.remove('hidden');
    } else {
        const isHigher = confirm("Is your number higher than the guess?");
        if (isHigher) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
        guessNumber();
    }
}