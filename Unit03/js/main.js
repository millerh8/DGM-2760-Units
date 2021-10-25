document.querySelector('header > h1').innerText = "Guessing Game";
document.querySelector('header > h2').innerText = "Guess the correct number as fast as you can!";

let correctNumber = Math.floor(Math.random() * 15);

let guessed = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber += 1

console.log(correctNumber)
// pick a random number between 0 and 16
function evalGuess() {
    totalGuesses += 1
    gamerGuess = document.querySelector('#guess').value

    const feedback = document.querySelector('#feedback')
    

    if (gamerGuess == correctNumber) {
        feedback.innerText = `You win! It took you ${totalGuesses} guesses.`
        giveAward()
    } else if (gamerGuess > correctNumber && gamerGuess < 16) {
        feedback.innerText = 'Too high, try again'
    } else if (gamerGuess < correctNumber && gamerGuess > 0) {
        feedback.innerText = 'Too low, try again'
    } else {
        feedback.innerText = 'Guess a number between 0 and 16 and try again'
        totalGuesses -= 1
    }

    

    document.querySelector('#attempts').innerText = totalGuesses
}

function giveAward() {
    const award = document.querySelector('#ribbon')
    let imagePath = '#'
    switch (totalGuesses) {
        case 1:
        case 2:
        case 3:
            imagePath = 'images/blue.png'
            break;
        case 4:
        case 5:
        case 6:
            imagePath = 'images/red.png'
            break;
        default:
            imagePath = 'images/yellow.png'
            break;

    }

    const awardImage = document.createElement('img') // creates an <img> element
    awardImage.setAttribute('src', imagePath)
    // award.appendChild(awardImage)

    if (award.hasChildNodes() == false) {
        award.appendChild(awardImage)
    } else {
        award.remove()
    }
    
}
