function getComputerChoice(){
    let choice= Math.floor(Math.random()*3);
    if(choice==0)
        return "rock";
    else if(choice==1)
        return "paper";
    return "scissors";
}
function getUserChoice(){
    let userChoice= prompt("Enter your choice, Rock/Paper/Scissors");
    userChoice= userChoice.toLowerCase();
    if(userChoice=="rock"||userChoice=="paper"||userChoice=="scissors")
        playRound(userChoice);
    else
        alert("Invalid input")
}
function playRound(userChoice){
    let computerChoice= getComputerChoice();
    if(computerChoice=="rock")
    {
        if(userChoice=="paper")
            alert("Computer choice is "+computerChoice+", you win!");
        else if(userChoice=="scissors")
            alert("Computer choice is "+computerChoice+", Computer wins!");
        else
            alert("Computer choice is "+computerChoice+", its a draw!");
    }
    else if (computerChoice=="scissors")
    {
        if(userChoice=="paper")
            alert("Computer choice is "+computerChoice+", Computer win!");
        else if(userChoice=="scissors")
            alert("Computer choice is "+computerChoice+", its a draw!");
        else
            alert("Computer choice is "+computerChoice+", you win!");
    }
    else
    {
        if(userChoice=="paper")
            alert("Computer choice is "+computerChoice+", its a draw!");
        else if(userChoice=="scissors")
            alert("Computer choice is "+computerChoice+", you win!");
        else
            alert("Computer choice is "+computerChoice+", Computer wins!");
    }
}