//Goal is to creat a Rock Paper Scissors Game for the Console
//Rock Paper Scissors needs to take the input from the user
//Compare the input to what the computer has selected
//Determine who won or if a tie took place
//All of this will be wrapped in a play game function that continues for 5 rounds

//inputs: players choice of Rock Paper or Scissors

//output: Result of players choice against computers choice (tie,win,loss)
//output: total score for game that increments and notifies after computer or person gets to five


//computer play
//take players input for Rock Paper Scissors
function playComputer(){
    let playerChoice=getPlayerChoice();
    console.log(`You selected: ${playerChoice}`);
    //select Rock Paper Scissor for computer

    //compare player and computer choices and output
}
function getPlayerChoice() {
    let keepGoing=true;
    let playerChoice;
    let playerChoiceLowered;
    while(keepGoing) {
        playerChoice= prompt("Please enter Rock Paper or Scissors");
        playerChoiceLowered=playerChoice.toLowerCase();
        //perform check that player input is valid
        if (playerChoiceLowered==='rock' || playerChoiceLowered==='paper' || playerChoiceLowered==='scissors') {
            keepGoing=false;
        } else {
            console.log(`Your input of "${playerChoice}" is not valid, please try again.`);
        }
    }
    return playerChoiceLowered;
}
playComputer();

