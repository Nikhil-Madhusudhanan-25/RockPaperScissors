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
        return(userChoice);
    else
        alert("Invalid input");
}
function playRound(userChoice){
    let computerChoice= getComputerChoice();
    if(computerChoice=="rock")
    {
        if(userChoice=="paper")
            {alert("Computer choice is "+computerChoice+", you win!");
             return "player";
            }
        else if(userChoice=="scissors")
            {alert("Computer choice is "+computerChoice+", Computer wins!")
             return "computer";
            }
        else
            alert("Computer choice is "+computerChoice+", its a draw!");
    }
    else if (computerChoice=="scissors")
    {
        if(userChoice=="paper")
            {alert("Computer choice is "+computerChoice+", Computer wins!")
             return "computer";
            }
        else if(userChoice=="scissors")
            alert("Computer choice is "+computerChoice+", its a draw!");
        else
            {alert("Computer choice is "+computerChoice+", you win!");
             return "player";
            }
    }
    else
    {
        if(userChoice=="paper")
            alert("Computer choice is "+computerChoice+", its a draw!");
        else if(userChoice=="scissors")
            {alert("Computer choice is "+computerChoice+", you win!");
             return "player";
            }
        else
            {alert("Computer choice is "+computerChoice+", Computer wins!")
             return "computer";
            };
    }
}
function game()
{
    let computer=0,
        player=0;
    for(let i=0; i<5; i++)
    {
        let userChoice= getUserChoice();
        let winner= playRound(userChoice);
        if (winner== "computer")
            computer++;
        else if (winner == "player")
            player++;
    }
    if(computer>player)
        alert("Overall winner is Computer!");
    else if(computer<player)
        alert("Overall winner is You!");
    else
        alert("Its a draw!");
}