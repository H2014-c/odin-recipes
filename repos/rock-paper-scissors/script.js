const choices = ["Rock","Paper","Scissors"]
let wins = 0
let losses = 0
let draw = 0
const inputs = document.querySelectorAll("input")

const player_results= document.getElementById("player")
const pc_results= document.getElementById("pc")




inputs.forEach((input) => {
    input.addEventListener("click",() => {
      alert(playRound(input.id,getComputerChoice()))
      player_results.innerText =`Player: ${wins}` 
      pc_results.innerText = `Computer: ${losses}`
      getWinner()
      player_results.innerText =`Player: ${wins}` 
      pc_results.innerText = `Computer: ${losses}`
    })
});


// functions
function getWinner(){
    if(wins === 5 | losses === 5){
        if(wins === 5){
            alert(`O vencedor foi o Player!`)   
        }
        else{
            alert(`O vencedor foi o Computador!`)
        }
        wins = 0
        losses = 0
      } 
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getComputerChoice(){
    return choices[getRndInteger(0,2)]
}
function playRound(playerChoice,computerChoice){
    switch(true){
        case playerChoice.toLowerCase() === computerChoice.toLowerCase():
            draw++
            return `Its a draw! ${computerChoice} equals ${playerChoice}!`
            break;
        case playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper":
            losses++
            return `You lose. ${computerChoice} beats ${playerChoice}!`
            break;
        case playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock":
            losses++
            return `You lose. ${computerChoice} beats ${playerChoice}!`
            break;
        case playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors":
            losses++
            return `You lose. ${computerChoice} beats ${playerChoice}!`
            break;
        default:
            wins++
            return `You win. ${playerChoice} beats ${computerChoice}!`
    }
}

