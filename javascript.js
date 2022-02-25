//Goal is to creat a Rock Paper Scissors Game
//Rock Paper Scissors needs to take the input from the user
//Compare the input to what the computer has selected
//Determine who won or if a tie took place
//All of this will be wrapped in a play game function that continues for 5 rounds

//inputs: players choice of Rock Paper or Scissors

//output: Result of players choice against computers choice (tie,win,loss)
//output: total score for game that increments and notifies after computer or person gets to five


//computer play
//take players input for Rock Paper Scissors
function playRound(playerChoice, playerScoreSel,computerScoreSel){
    // let playerChoice=getPlayerChoice();
    //select Rock Paper Scissor for computer
    let rockPaperScissorsArray=['rock','paper','scissors'];
    let computerChoice=rockPaperScissorsArray.at(Math.random()*3)
    //compare player and computer choices and output
    let roundWinner=getWinner(playerChoice,computerChoice);
    // console.log(roundWinner);
    const score=document.createElement('div');
    score.classList.add()
    let computerScore=computerScoreSel.textContent.at(-1);
    let playerScore=playerScoreSel.textContent.at(-1);
    if (roundWinner==='computerwin') computerScore++;
    else if (roundWinner==='playerwin') playerScore++;
    
    computerScoreSel.textContent=`Computer Score is: ${computerScore}`;
    playerScoreSel.textContent=`Player Score is: ${playerScore}`;
    
    if(computerScore===5 || playerScore===5) {
        endGame(computerScore,playerScore);

    }
    return roundWinner;
}

function endGame(computerScore,playerScore) {
    const results=document.querySelector('#gameResults');
    const buttons=document.querySelector('.RPS-Buttons').querySelectorAll('button');
    buttons.forEach((button) => {
        button.disabled=true;
    });
    const gameOver=document.createElement('h2');
    gameOver.classList.add("results-Text");
    if (computerScore>playerScore) {
        gameOver.textContent="The Computer has won!!!😩"
    } else {
        gameOver.textContent="The Player has won!!! 🤑"
    }
    results.appendChild(gameOver);

}

function getWinner(playerChoice,computerChoice) {
    //Display player choice to the DOM
    const results=document.querySelector('#resultText');

    //check if any children in resultText and if so remove them before printing next round
    while (results.firstChild) {
        results.removeChild(results.firstChild);
    }

    const playerSelectionText=document.createElement('div');
    playerSelectionText.classList.add('resultsContent');
    playerSelectionText.textContent= `You selected: ${playerChoice}`;
    console.log(`You selected: ${playerChoice}`);
    results.appendChild(playerSelectionText);

    //Display Computer Choice to the DOM
    const computerSelectionText=document.createElement('div');
    computerSelectionText.classList.add('resultsContent');
    computerSelectionText.textContent=`The computer selected: ${computerChoice}`;
    results.appendChild(computerSelectionText);
    console.log(`The computer selected: ${computerChoice}`);
    let roundResultText;
    let roundResult;
    if (playerChoice===computerChoice) {
        roundResultText=`Player choice of ${playerChoice} and computer choice of ${computerChoice} results in a tie!`;
        roundResult='tie';
    } else if (playerChoice==='rock') {
        if (computerChoice==='scissors') {
            roundResultText=("Player choice of rock beats computer's scissors! 😝");
            roundResult='playerwin';
        } else {
            roundResultText=("Player choice of rock loses to computer's paper! 😭");
            roundResult='computerwin';
        }
    } else if (playerChoice==='paper') {
        if (computerChoice==='rock') {
            roundResultText=("Player choice of paper beats computer's rock! 🥳 ");
            roundResult="playerwin";
        } else {
            roundResultText=("Player choice of paper loses to computer's scissors! 🤬 " );
            roundResult="computerwin";
        }
    } else {
        if (computerChoice==='paper') {
            roundResultText=("Player choice of scissors beats computer's paper! 🤩 " ); 
            roundResult="playerwin";
        } else { 
            roundResultText=("Player choice of scissors loses to computer's rock! 😱 " );
            roundResult="computerwin";
        }
    }
    const DOMroundResultText=document.createElement('div');
    DOMroundResultText.classList.add('resultsContent');
    DOMroundResultText.textContent=roundResultText;
    results.appendChild(DOMroundResultText);
    console.log(roundResultText);
    return roundResult;
}

// playRound();


function getPlayerChoice(){
    const buttons=document.querySelector('.RPS-Buttons').querySelectorAll('button');
    const playerScore=document.querySelector('#playerScore');
    const computerScore=document.querySelector('#computerScore');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            
            playRound(button.id,playerScore,computerScore);

        })

    });
}
const refreshButton=document.querySelector('#refresh');
refreshButton.addEventListener('click', () => {
    window.location.reload();
});
console.log(getPlayerChoice());
//Function to play a game of first to five wins
// function game() {
//     console.log("You are going to play Rock Paper Scissors against the computer up to a total score of 5 points");
//     //create a counter for computer score and player score to keep track
//     let computerScore=0;
//     let playerScore=0;
// //  loop until computer or player score equals 5
//     let roundResult;
//     let roundCounter=1;
//     while (computerScore<5 && playerScore<5) {
// //      call playRound function and assign result of round to a variable
//         console.log("----------------*****NEW ROUND*****------------------------");
//         console.log(`ROUND #${roundCounter}`)
//         roundResult=getPlayerChoice();
// // Depending on result of playRound increment computer or player score
//         if(roundResult==='playerwin') {
//             playerScore++;
//         } else if (roundResult==='computerwin'){
//             computerScore++;
//         }
//         console.log(`Current Score is \nPlayer: ${playerScore} \nComputer: ${computerScore}`);
//         roundCounter++;
//     }
//     if(playerScore>computerScore) {
//         console.log("Congratulations!!! You Win!!! 😄");
//     } else {
//         console.log("To Bad, you lose! Try again!!! 😔");
//     }
// }

// game();