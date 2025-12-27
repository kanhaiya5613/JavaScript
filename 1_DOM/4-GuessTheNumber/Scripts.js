let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1;
let PlayGame = true;
if (PlayGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })

}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid Number')
    }
    else if (guess > 100) {
        alert('Number is Greater then 100')
    }
    else if (guess < 1) {
        alert('Number is lessor then 0')
    }
    else {
        prevGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game over. Random Number was ${randomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(" Congratulations your guessed it Right")
    }
    else if (guess > randomNumber) {
        displayMessage("Your guessed is too high")
    }
    else if (guess < randomNumber) {
        displayMessage("Your guessed is too low")
    }
}
function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
userInput.value=''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML=`<h2 id= "newGame">Start new Game</h2>`;
startOver.appendChild(p)
PlayGame = false;
newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);;

        PlayGame = true;


    });
}







