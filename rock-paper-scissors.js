function getComputerChoice() {
    //return a random choice of rock, paper scissors
    const computerRoll = Math.floor(Math.random()*3); //start by using some random function
    switch(computerRoll){
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors" ;
            break;
    }
    console.log("Computer chose: " + computerChoice);
}

function getHumanChoice() {
    humanChoice = prompt("Please choose Rock (r), Paper (p) or Scissors (s)");
    
    if(humanChoice.toLowerCase() === "r"){
        console.log("You chose: Rock");
    }
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === "r" && computerChoice === "Rock"){
        console.log("This round was a draw")
    }else if(humanChoice === "r" && computerChoice === "Paper"){
        humanScore += 1;
        console.log("You won!")
    }

}

let humanScore = 0;
let computerScore = 0;

let computerChoice = "";
let humanChoice = "";

getHumanChoice();
console.log(humanChoice);
getComputerChoice();
console.log(computerChoice)
playRound(humanChoice, computerChoice);