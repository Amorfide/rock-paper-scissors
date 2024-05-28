function getComputerChoice() {
    let computerChoice;
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
    const humanChoice = prompt("Please choose Rock (r), Paper (p) or Scissors (s)");
    
    if(humanChoice === "r"){
        console.log("You chose: Rock");
    }
}

getHumanChoice();
getComputerChoice();