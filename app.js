// Rock = 1
// Paper = 2 
// Scissors = 3

function play(playerChoice){
    let compChoice = Math.floor((Math.random() * 3) + 1);
    if (playerChoice == 1){
        if (playerChoice == compChoice){
            document.getElementById("message").innerHTML = '<p>Draw!</p>';
        } else if (playerChoice + 1 == compChoice){
            document.getElementById("message").innerHTML = '<p>You lose!</p>';
        } else if (playerChoice + 2 == compChoice){
            document.getElementById("message").innerHTML = '<p>You win!</p>';
        }
    } else if (playerChoice == 2){
        if (playerChoice > compChoice){
            document.getElementById("message").innerHTML = '<p>You win!</p>';
        } else if (playerChoice == compChoice){
            document.getElementById("message").innerHTML = '<p>Draw!</p>';
        } else if (playerChoice < compChoice){
            document.getElementById("message").innerHTML = '<p>You lose!</p>';
        }
    } else if (playerChoice == 3){
        if (playerChoice - 2 == compChoice){
            document.getElementById("message").innerHTML = '<p>You lose!</p>';
        } else if (playerChoice - 1 == compChoice){
            document.getElementById("message").innerHTML = '<p>You win!</p>';
        } else if (playerChoice == compChoice){
            document.getElementById("message").innerHTML = '<p>Draw!</p>';
        }
    }
}