const initGame = () =>{
    const startGame = confirm("SHALL WE PLAY ROCK,PAPER AND SCISSORS");
    startGame ? playGame():alert("OKAY,MAYBE NEXT TIME");

}

//GAME FLOW FUNCTION

const playGame = () =>{
    while(true){
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if(playerChoice === ""){
            invalidChoice();
            continue;
        }
        if(!playerChoice){
            decideNotPlay();
            break;
        }

        playerChoice = evaluatePlayerChoice(playerChoice);
        if(!playerChoice){
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();

        const result = determineWinner(playerChoice,computerChoice);
        displayResult(result);
        if(askToPlayAgain()){
            continue;
        }else{
            thanksForPlaying();
            break;
        }

    }
}

const getPlayerChoice = () =>{
    return prompt("PLEASE ENTER ROCK,PAPER AND SCISSORS");
}


const formatPlayerChoice = (playerChoice) =>{
   if( playerChoice || playerChoice === ""){
    return playerChoice.trim().toLowerCase();
   }else{
    return false;
   }
}


const invalidChoice = ()=>{
    return alert("YOU DID'NT ENTER ROCK,PAPER AND SCISSORS");
}


const decideNotPlay = () =>{
    alert("I GUESS,CHANGED YOUR MIND,MAY BE NEXT TIME");
}

const evaluatePlayerChoice = (playerChoice) =>{
    if(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"){
        return playerChoice;
    }else{
        return false;
    }
}

const getComputerChoice = ()=>{
    const randomNumber = Math.floor(Math.random() *3);
    const ranArr = ["rock","paper","scissors"];
    return ranArr[randomNumber];
}


const determineWinner = (player,computer) =>{
    const winner = player === computer ?"TIE GAME" :player === "rock" && computer === "paper" ? `PLAYER: ${player}\n COMPUTER ${computer}\n COMPUTER WINS` : player === "paper" && computer === "scissors" ? `PLAYER: ${player}\n COMPUTER ${computer}\n COMPUTER WINS`: player === "scissors" && computer === "rock" ?`PLAYER: ${player}\n COMPUTER ${computer}\n COMPUTER WINS`:`PLAYER: ${player}\n COMPUTER ${computer}\n PLAYER WINS` 

    return winner;
}

const displayResult = (result) =>{
    alert(result);
}

const askToPlayAgain = () =>{
    return confirm("PLAY AGAIN");
}
const thanksForPlaying = () =>{
    alert("OK,THANKS FOR PLAYING");
}
initGame();


