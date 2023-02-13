function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    let randIndex = Math.floor(Math.random() * choices.length)
    let choice = choices[randIndex]
    console.log("computer ", choice)
    return choice
}

function getUserSelection() {
    const choice = prompt('make your choice : rock, paper or scissors').toLowerCase()
    return choice
}

function checkMatch() {
    const userChoice = getUserSelection()
    const computerChoice = getComputerChoice()

    switch (userChoice) {
        case 'rock': {
            if (computerChoice == 'paper') {
                computerScore += 1
            } else if (computerChoice == 'scissors') {
                userScore += 1
            } else {
                break
            }
        }
            break;
        case 'paper': {
            if (computerChoice == 'scissors') {
                computerScore += 1
            } else if (computerChoice == 'rock') {
                userScore += 1
            } else {
                break
            }
            break;
        }
        case 'scissors': {
            if (computerChoice == 'rock') {
                computerScore += 1
            } else if (computerChoice == 'paper') {
                userScore += 1
            } else {
                break
            }
            break;
        }
        default:
            break;
    }
}

let userScore = 0
let computerScore = 0
for (let index = 0; index < 5; index++) {
    checkMatch()
}

if (userScore > computerScore) {
    console.log('you win the computer!')
} else if (userScore < computerScore) {
    console.log('you lost to the computer!')
} else {
    console.log('EVEN scissors')
}

console.log('userscore', userScore)
console.log('computerscore', computerScore) 