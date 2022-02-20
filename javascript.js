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
function playRound(){
    let playerChoice=getPlayerChoice();
    console.log(`You selected: ${playerChoice}`);
    //select Rock Paper Scissor for computer
    let rockPaperScissorsArray=['rock','paper','scissors'];
    let computerChoice=rockPaperScissorsArray.at(Math.random()*3)
    console.log(`The computer selected: ${computerChoice}`);
    //compare player and computer choices and output
    let roundWinner=getWinner(playerChoice,computerChoice);
    console.log(roundWinner);
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

function getWinner(playerChoice,computerChoice) {
    if (playerChoice===computerChoice) {
        console.log(`Player choice of ${playerChoice} and computer choice of ${computerChoice} results in a tie!`);
        return 'tie';
    } else if (playerChoice==='rock') {
        if (computerChoice==='scissors') {
            console.log("Player choice of rock beats computer's scissors! 😝");
            return 'playerwin';
        } else {
            console.log("Player choice of rock loses to computer's paper! 😭");
            return 'computerwin';
        }
    } else if (playerChoice==='paper') {
        if (computerChoice==='rock') {
            console.log("Player choice of paper beater computer's rock! 🥳 ");
            return "playerwin";
        } else {
            console.log("Player choice of paper loses to computer's scissors! 🤬 " );
            return "computerwin";
        }
    } else {
        if (computerChoice==='paper') {
            console.log("Player choice of scissors beats computer's paper! 🤩 " ); 
            return "playerwin";
        } else { 
            console.log("Player choice of scissors loses to computer's rock! 😱 " );
            return "computerwin";
        }
    }
}

playRound();
// function game() {
//     let computerScore=0;
//     let playerScore=0;
//     playRound();
// }
