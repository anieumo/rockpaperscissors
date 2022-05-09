
let cmptCount = 0;
let plyerCount = 0;
let movesleft = 10;

function getId(btn){
    playerSelection = btn.id;
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
    document.getElementById("com").textContent = computerSelection;
    document.getElementById("computer").textContent = playerSelection + " vs " + computerSelection;
    console.log(computerSelection);
    console.log(playerSelection, computerSelection)



    function playRound(playerSelection, computerSelection) {
        let result = document.getElementById("results");
        movesleft--;


        if (playerSelection  == "rock" && computerSelection == "paper") {
            cmptCount++;
            result.textContent = "you loose";
            }
        if (playerSelection  == "rock" && computerSelection == "scissors") {
            plyerCount++;
            result.textContent = "you win";
            }
        if (playerSelection  == "rock" && computerSelection == "rock") {
            result.textContent = "tie";
            }
        if (playerSelection  == "scissors" && computerSelection == "scissors") {
            result.textContent = "tie";
            }
        if (playerSelection  == "scissors" && computerSelection == "rock") {
            cmptCount++;
            result.textContent = "you loose";
            }
        if (playerSelection  == "scissors" && computerSelection == "paper") {
            plyerCount++;
            result.textContent = "you win";
            }
        if (playerSelection  == "paper" && computerSelection == "rock") {
            plyerCount++;
            result.textContent = "you win";
            }
        if (playerSelection  == "paper" && computerSelection == "scissors") {
            cmptCount++;
            result.textContent = "you loose";
            }
        if (playerSelection  == "paper" && computerSelection == "paper") {
            result.textContent = "tie";
            }else{
            return "error";
            }    
    
    }
    playRound(playerSelection, computerSelection);

    function gameover(){
        if (movesleft = 0) {
            alert("game over")
        }
    }
    gameover();

    document.getElementById("player-score").textContent = plyerCount;
    document.getElementById("computer-score").textContent = cmptCount;

}



