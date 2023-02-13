function getComputerChoice() {
    const choices = ['rock', 'raper' , 'scissors']
    let randIndex = Math.floor(Math.random()*choices.length)
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
                console.log('you lost to the computer!')
            } else if (computerChoice == 'scissors') {
                console.log('you win the computer!')
            } else {
                console.log('EVEN')
            }
        }
            break;
        case 'paper': {
            if (computerChoice == 'scissors') {
                console.log('you lost to the computer!')
            } else if (computerChoice == 'rock') {
                console.log('you win the computer!')
            }else {
                console.log('EVEN')
            }
            break;
        }
        case 'scissors': {   
            if (computerChoice == 'rock') {
                console.log('you lost to the computer!')
            } else if (computerChoice == 'paper') {
                console.log('you win the computer!')
            } else {
                console.log('EVEN')
            }
            break;
        }
        default:
            break;
    }
}
// getComputerChoice()
checkMatch()