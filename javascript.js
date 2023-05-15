const choices = ['rock', 'paper' , 'scissors'];

function getComputerChoice(choices) {

    const randomIndex = Math.floor(Math.random() * choices.length);
    const item = choices[randomIndex];

    return item;
}

const result = getComputerChoice(choices);

console.log(result);



const playerSelection = "rock";



const computerSelection = getComputerChoice(choices);

/*

function playRound(playerSelection, computerSelection) {

    if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") ||  (playerSelection == "scissors" && computerSelection == "rock")) {
        return "computer is the winner";
    } else if ((playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "scissors") ||  (playerSelection == "scissors" && computerSelection == "paper"))  {
        return "player is the winner";
    } else {
        return "draw";
    }
  };

*/


  
  console.log(playRound(playerSelection, computerSelection));


function playRound(playerSelection, computerSelection) {

const game = window.prompt('choose your weapon',playerSelection)

if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") ||  (playerSelection == "scissors" && computerSelection == "rock")) {
        return "computer is the winner";
    } else if ((playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "scissors") ||  (playerSelection == "scissors" && computerSelection == "paper"))  {
        return "player is the winner";
    } else {
        return "draw";
    }
  };

