function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * 3)
  switch (randomIndex) { 
case 0:
  return "rock";
  case 1:
  return "paper";
  case 2:
  return "scissors";
  }
};






const rock = document.getElementById('rockBtn');

const paper = document.getElementById('paperBtn');

const scissors = document.getElementById('scissorsBtn');

const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const roundWinner = document.querySelector("#roundWinner");
const gamesWon1 = document.querySelector(".gamesWon1");
const gamesWon2 = document.querySelector(".gamesWon2");

let playerScore = 0;
let computerScore = 0;
let gamesWon1Score = 0;
let gamesWon2Score = 0;
/*
player.textContent = "player: " + playerScore;
computer.textContent = "computer: " + computerScore;

*/

rock.addEventListener('click', () => handleClick("rock"))
paper.addEventListener('click', () => handleClick("paper"))
scissors.addEventListener('click', () => handleClick("scissors"))


function handleClick(playerSelection) {
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  if (playerScore === 5){
    roundWinner.textContent = "Game winner is player! ";
    restartGame();
    gamesWon1Score++;
    gamesWon1.textContent = "games won:" + gamesWon1Score;

   } else if (computerScore === 5) {
    roundWinner.textContent = "Game winner is computer! ";
    restartGame();
    gamesWon2Score++;
    gamesWon2.textContent = "games won:" + gamesWon2Score;
  }
};


function playRound(playerSelection, computerSelection) {
if (
  (playerSelection === "rock" && computerSelection === "paper") ||
  (playerSelection === "paper" && computerSelection === "scissors") ||
  (playerSelection === "scissors" && computerSelection ==="rock")
  ) {
    playerScore = playerScore + 1;
    player.textContent = "player: " + playerScore;
    roundWinner.textContent = "Round winner is player";
    }
    else if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "scissors") ||  (playerSelection === "scissors" && computerSelection === "paper"))  {
      computerScore = computerScore + 1;
      computer.textContent = "computer: " + computerScore;
       roundWinner.textContent = "Round winner is computer";
    } else {
      roundWinner.textContent = "this was a draw ";
    }
};

function gameIsOver() {
  return playerScore === 5 || computerScore === 5
}

function restartGame() {
playerScore = 0;
player.textContent = "player: 0";
computerScore = 0;
computer.textContent = "computer: 0";
}







/*
function handleClick(playerSelection) {
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
};



const choices = ['rock', 'paper' , 'scissors'];

function playRoundRock(computerSelection) {
  computerSelection = getComputerChoice(choices)
if (computerSelection == "paper") {
    computerScore = computerScore +1;
    } else if ( computerSelection == "scissors")  {
      playerScore = playerScore +1;
    } else {
      console.log ('draw');
    }
};

function playRoundPaper(computerSelection) {
  computerSelection = getComputerChoice(choices)
if (computerSelection == "scissors") {
    computerScore = computerScore +1;
    } else if ( computerSelection == "rock")  {
      playerScore = playerScore +1;
    } else {
      console.log ('draw');
    }
};

function playRoundScissors(computerSelection) {
  computerSelection = getComputerChoice(choices)
if (computerSelection == "rock") {
    computerScore = computerScore +1;
    } else if ( computerSelection == "paper")  {
      playerScore = playerScore +1;
    } else {
      console.log ('draw');
    }
};

/*

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice(choices)
if ((playerSelection == rock && computerSelection == "paper") || (playerSelection == paper && computerSelection == "scissors") ||  (playerSelection == scissors && computerSelection == "rock")) {
    computerScore = computerScore +1;
    } else if ((playerSelection == paper && computerSelection == "rock") || (playerSelection == rock && computerSelection == "scissors") ||  (playerSelection == scissors && computerSelection == "paper"))  {
      playerScore = playerScore +1;
    } else {
      console.log ('draw');
    }
    return computerSelection;
};

*/


/*

console.log(playerSelection);
console.log(computerSelection);


*/












   /*
const computerSelection = getComputerChoice(choices);


let computerSelection = getComputerChoice(choices);

function getComputerChoice(choices) {

  const randomIndex = Math.floor(Math.random() * choices.length);
  const item = choices[randomIndex];
  return item;
}

/*
function playRound(playerSelection, computerSelection) {
  ps = playerSelection.toLowerCase(); {
if ((ps== "rock" && computerSelection == "paper") || (ps == "paper" && computerSelection == "scissors") ||  (ps == "scissors" && computerSelection == "rock")) {
        return "computer is the winner";
    } else if ((ps == "paper" && computerSelection == "rock") || (ps == "rock" && computerSelection == "scissors") ||  (ps == "scissors" && computerSelection == "paper"))  {
        return "player is the winner";
    } else {
        return "draw";
    }
}
  }




const player = document.querySelector("#player");
const computer = document.querySelector("#computer");

let playerScore = 0;
let computerScore = 0;

player.textContent = "player: " + playerScore;
computer.textContent = "computer: " + computerScore;


function playRound(playerSelection, computerSelection) {
  ps = playerSelection.toLowerCase();{
if ((ps== "rock" && computerSelection == "paper") || (ps == "paper" && computerSelection == "scissors") ||  (ps == "scissors" && computerSelection == "rock")) {
        computerScore = computerScore +1;
    } else if ((ps == "paper" && computerSelection == "rock") || (ps == "rock" && computerSelection == "scissors") ||  (ps == "scissors" && computerSelection == "paper"))  {
      playerScore = playerScore +1;
    } else {
        return "draw";
    }
}
};




function playRoundRock(computerSelection) {

  if (computerSelection == "paper") {
    computerScore = computerScore +1;
  } else if (computerSelection == "scissors") {
    playerScore = playerScore +1;
  } else {
    return "draw";
  }
};

function playRoundPaper(computerSelection) {

  if (computerSelection == "scissors") {
    computerScore = computerScore +1;
  } else if (computerSelection == "rock") {
    playerScore = playerScore +1;
  } else {
    return "draw";
  }
};

function playRoundScissors(computerSelection) {

  if (computerSelection == "scissors") {
    computerScore = computerScore +1;
  } else if (computerSelection == "paper") {
    playerScore = playerScore +1;
  } else {
    return "draw";
  }
};

/*
let playRoundRock = playRound("rock", computerSelection);
let playRoundPaper = playRound("paper", computerSelection);
let playRoundScissors = playRound("scissors", computerSelection);



  const rock = document.getElementById('rockBtn');

  rock.addEventListener('click', playRoundRock);


  const paper = document.getElementById('paperBtn');

  paper.addEventListener('click', playRoundPaper );


  const scissors = document.getElementById('scissorsBtn');

  scissors.addEventListener('click', playRoundScissors);





/*


console.log(computerSelection);
console.log(playRound('Scissors', computerSelection));


document.createElement















playRound(playerSelection, computerSelection)






const rock = document.getElementById('rockBtn');

rock.addEventListener('click', runEvent(rock));




const paper = document.getElementById(paperBtn);

paper.addEventListener("mouseenter", runEvent2);

const scissors = document.getElementById(scissorsBtn);

scissors.addEventListener("mouseenter", runEvent);



function runEvent(e) {
e.style.backgroundColor =  "rgb( 0,0,0)";
};





function runEvent2(e) {
  paper.style.backgroundColor =  white;
  };


  function runEvent3(e) {
   scissors.style.backgroundColor =  white;
    };

*/





/*
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



function playRound(playerSelection, computerSelection) {

    if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") ||  (playerSelection == "scissors" && computerSelection == "rock")) {
        return "computer is the winner";
    } else if ((playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "scissors") ||  (playerSelection == "scissors" && computerSelection == "paper"))  {
        return "player is the winner";
    } else {
        return "draw";
    }
  };



  
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

*/
