const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach( possibleChoice => possibleChoice.addEventListener('click',(e)=>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice; 
    generateComputerChoice();
    getResult();
    resultDisplay.innerHTML = result;
} ))
function generateComputerChoice()
{
    const randomNumber = Math.floor(Math.random()*3) + 1; // or you can use possibleChoices.length in place of 3
    
    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'paper'
    }
    if(randomNumber === 3){
        computerChoice = 'scissor'
    }

    computerChoiceDisplay.innerHTML = computerChoice; 
}
function getResult(){
    if(computerChoice === userChoice){
        result = 'its a draw'
    }
    if(computerChoice === 'rock' &&  userChoice === 'paper'){
        result = 'You Win'
    }
    if(computerChoice === 'rock' &&  userChoice === 'scissor'){
        result = 'You Lose'
    }
    if(computerChoice === 'paper' &&  userChoice === 'scissor'){
        result = 'You Win'
    }
    if(computerChoice === 'paper' &&  userChoice === 'rock'){
        result = 'You Win'
    }
    if(computerChoice === 'scissor' &&  userChoice === 'rock'){
        result = 'You Win'
    }
    if(computerChoice === 'scissor' &&  userChoice === 'paper'){
        result = 'You Lose'
    }
}