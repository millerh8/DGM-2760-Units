const question = {
    stem: `Who is buried in Grant's Tomb`,
    option1: 'Bob',
    option2: 'George',
    option3: 'Grant',
    option4: 'Jimbo',
    correct: 3,
    display: () => {
        document.querySelector('#stem').textContent = question.stem
        document.querySelector('#answer1').textContent = question.option1
        document.querySelector('#answer2').textContent = question.option2
        document.querySelector('#answer3').textContent = question.option3
        document.querySelector('#answer4').textContent = question.option4
    },
    check: (userChoice) => {
        if (userChoice === question.correct) {
            document.querySelector('.feedback').textContent = `You are correct, ${question.option3} is buried in Grant's Tomb!`
        }
        else {
            document.querySelector('.feedback').textContent = 'That is not correct'
        }
    }
}

document.querySelector('#answer1').addEventListener('click', () => question.check(1))
document.querySelector('#answer2').addEventListener('click', () => question.check(2))
document.querySelector('#answer3').addEventListener('click', () => question.check(3))
document.querySelector('#answer4').addEventListener('click', () => question.check(4))

question.display()
