function getComputerChoice() {
    const choices = ['Rock', 'Paper' , 'Scissors']
    let randIndex = Math.floor(Math.random()*choices.length)
    let choice = choices[randIndex]
    console.log(choice)
    return choice
}

getComputerChoice()