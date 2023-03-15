const computerPlay = ()=> {
   const guessNumber =  Math.floor(Math.random()*3)
   const guessValues = ['rock', 'paper', 'scissors']

   return guessValues[guessNumber]
}

const playRound = (computerGuess, playerGuess ) => {
   if (playerGuess === "paper" || playerGuess === "scissors" || playerGuess === "rock") {
      const gameReport =  computerGuess === playerGuess ? 
                    "You win" : "You lose"
      return (gameReport)
   }else{
      return alert("Input must be paper, rock or scissors")
   }
   
}

function games(){
   let computerScore = 0
   let playerScore = 0
   
   alert(`Welcome to this game. You make a guess from the options and play
      against the computer. It last five rounds. Lets begin.`)
   for (let i = 0; i < 5; i++) {
   const userInput =  prompt(
      `Please type in any one of these as your guess:
      1. Paper. 2. Scissors. 3. Rock`).toLowerCase().trim()
   let result = playRound(computerPlay(), userInput) 

   if (result ==="You win" ) {
      computerScore++
      alert(`${result}!!!😄 Computer Score: ${computerScore}; Player Score: ${playerScore} 
      You have ${4 - i} rounds left`)
   }else if(result === "You lose"){
      playerScore++
      alert(`${result}!!!😢 Computer Score: ${computerScore}; Player Score: ${playerScore} 
      You have ${4 - i} rounds left`)
   }
 }
 alert("Game Over thank you for playing")
}
games()









