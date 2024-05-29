function getRounds() {
    let number = prompt("How many rounds would you like to play?");
    while(number %1 !== 0){
        alert("You did not enter a valid number");
        number = prompt("How many rounds would you like to play?");
    }
    return number;
}

function getComputerChoice() {
    //return a random choice of rock, paper scissors
    const computerRoll = Math.floor(Math.random()*3); //start by using some random function
    switch(computerRoll){
        case 0:
            computerRPS = "Rock";
            break;
        case 1:
            computerRPS = "Paper";
            break;
        case 2:
            computerRPS = "Scissors" ;
            break;
    }
    console.log("Computer chose: " + computerRPS);
    return computerRPS;
}

function getHumanChoice() {
    let rps = prompt("Please choose Rock (r), Paper (p) or Scissors (s)");
    
    if(rps.toLowerCase() === "r"){
        rps = "Rock";
        console.log("You chose: Rock");
    }else if(rps.toLowerCase() === "s"){
        rps = "Scissors";
        console.log("You chose: Scissors");
    }else if(rps.toLowerCase() === "p"){
        rps = "Paper";
        console.log("You chose: Paper");
    }
    return rps;
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice){
        console.log("This round was a draw");
    }else if(humanChoice === "Rock" && computerChoice === "Scissors"){
        console.log("You won this round!");
    }else if(humanChoice === "Scissors" && computerChoice === "Paper"){
        console.log("You won this round!");
    }else if(humanChoice === "Paper" && computerChoice === "Rock"){
        console.log("You won this round!");
    }else{
        console.log("You lost this round");
    }
}

let humanScore = 0;
let computerScore = 0;

const rounds = getRounds();

for(i=1; i<= rounds; i++){

const humanChoice = getHumanChoice();

const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

}