
function game(){
//get player selection//
    function player(){
        window.input = prompt("player selection?");
        alert(`Your  is fist is ${window.input}`);
    }
    player();
    const playerSelection = window.input;
    console.log(playerSelection);


    //get computer Selection?
    function computer()
    {   
    var fists = [
        'rock',
        'paper',
        'scissors',
    ];
    myfists = fists[Math.floor(Math.random() * fists.length)];
    }
    computer();
    const computerSelection = window.myfists;
    console.log(computerSelection);
    window.cmptCount = 0;
    window.plyerCount = 0;


    //play one round//
    function playRound(playerSelection, computerSelection) {
        if (playerSelection  == "rock" && computerSelection == "paper") {
            window.cmptCount++;
            return "you loose";
        }
        if (playerSelection  == "rock" && computerSelection == "scissors") {
            window.plyerCount++;
            return "you win";
        }
        if (playerSelection  == "rock" && computerSelection == "rock") {
            return "tie";
        }
        if (playerSelection  == "scissors" && computerSelection == "scissors") {
            return "tie";
        }
        if (playerSelection  == "scissors" && computerSelection == "rock") {
            window.cmptCount++;
            return "you loose";
        }
        if (playerSelection  == "scissors" && computerSelection == "paper") {
            window.plyerCount++;
            return "you win";
        }
        if (playerSelection  == "paper" && computerSelection == "rock") {
            window.plyerCount++;
            return "you win";
        }
        if (playerSelection  == "paper" && computerSelection == "scissors") {
            window.cmptCount++;
            return "you loose";
        }
        if (playerSelection  == "paper" && computerSelection == "paper") {
            return "tie";
        }else{
            return "error";
        }

    }
    console.log(playRound(playerSelection, computerSelection));

}

for (let i = 0; i < 5; i++) {
    game(i);
    alert("computer score is: " + window.cmptCount + ", player score is: " + window.plyerCount);
}
