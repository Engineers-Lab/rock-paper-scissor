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
                // console.log('you lost to the computer!')
                computerScore += 1
            } else if (computerChoice == 'scissors') {
                // console.log('you win the computer!')
                userScore += 1
            } else {
                // console.log('EVEN rock')
                break
            }
        }
            break;
        case 'paper': {
            if (computerChoice == 'scissors') {
                // console.log('you lost to the computer!')
                computerScore += 1
            } else if (computerChoice == 'rock') {
                // console.log('you win the computer!')
                userScore += 1
            } else {
                // console.log('EVEN paper')
                break
            }
            break;
        }
        case 'scissors': {
            if (computerChoice == 'rock') {
                // console.log('you lost to the computer!')
                computerScore += 1
            } else if (computerChoice == 'paper') {
                // console.log('you win the computer!')
                userScore += 1
            } else {
                // console.log('EVEN scissors')
                break
            }
            break;
        }
        default:
            break;
    }
}
// getComputerChoice()
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