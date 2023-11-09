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
let resultDiv=document.getElementById('individualResult');
function playRound(userChoice){
    let computerChoice= getComputerChoice();

    if(computerChoice=="rock")
    {
        if(userChoice=="paper")
            {   resultDiv.textContent="Computer choice is "+computerChoice+", you win!";
                //alert("Computer choice is "+computerChoice+", you win!");
                return "player";
            }
        else if(userChoice=="scissors")
            {resultDiv.textContent="Computer choice is "+computerChoice+", Computer wins!";
                //alert("Computer choice is "+computerChoice+", Computer wins!")
             return "computer";
            }
        else
            resultDiv.textContent="Computer choice is "+computerChoice+", its a draw!";
            //alert("Computer choice is "+computerChoice+", its a draw!");
    }
    else if (computerChoice=="scissors")
    {
        if(userChoice=="paper")
            {resultDiv.textContent="Computer choice is "+computerChoice+", Computer wins!";
                //alert("Computer choice is "+computerChoice+", Computer wins!")
             return "computer";
            }
        else if(userChoice=="scissors")
            resultDiv.textContent="Computer choice is "+computerChoice+", its a draw!";
            //alert("Computer choice is "+computerChoice+", its a draw!");
        else
            {resultDiv.textContent="Computer choice is "+computerChoice+", you win!";
                //alert("Computer choice is "+computerChoice+", you win!");
             return "player";
            }
    }
    else
    {
        if(userChoice=="paper")
            resultDiv.textContent="Computer choice is "+computerChoice+", its a draw!";
            //alert("Computer choice is "+computerChoice+", its a draw!");
        else if(userChoice=="scissors")
            {resultDiv.textContent="Computer choice is "+computerChoice+", you win!";
                //alert("Computer choice is "+computerChoice+", you win!");
             return "player";
            }
        else
            {resultDiv.textContent="Computer choice is "+computerChoice+", Computer wins!";
                //alert("Computer choice is "+computerChoice+", Computer wins!")
             return "computer";
            };
    }
}
function game()
{
    /*let computer=0,
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
        alert("Its a draw!");*/
    let userChoice= getUserChoice();
    let winner= playRound(userChoice);
}
let buttons= document.querySelectorAll('button');
let scoreCount=document.getElementById('scoreCount');
let overallWinner=document.getElementById('overallWinner');
let computer=0,
    player=0,
    winner='',
    count=0;
buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        count++;
        if (count<5)
        {
        if(button.getAttribute('id')=="rock")
            winner=playRound("rock");
        else if(button.getAttribute('id')=="paper")
            winner=playRound("paper");
        else 
            winner=playRound("scissors");
        
            if(winner== "computer")
            computer++;
            else if(winner== "player")
                player++;
            scoreCount.textContent="Player score= "+player+"\n Computer score= "+computer;

            overallWinner.textContent="";
        }
        else{
            if(computer>player)
                overallWinner.textContent="Overall winner is Computer!";
            else if(computer<player)
                overallWinner.textContent="Overall winner is You!";
            else
            overallWinner.textContent="Overall Result: Draw!";
            computer=0, 
            player=0;
            resultDiv.textContent="";
            scoreCount.textContent="";
            count=0;
        }
    })
});