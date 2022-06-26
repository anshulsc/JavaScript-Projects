const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const scores = document.querySelector('#score');

let result = 0;
let hitPosition;
let counterTimer = 60;
let timerId = null

function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole');
    })

    let randomSquares = squares[Math.floor(Math.random() * 9)];
    console.log(randomSquares)
    console.log(Math.floor(Math.random() * 9))
    randomSquares.classList.add('mole');
    hitPosition = randomSquares.id;
    
} 

squares.forEach( square =>{
    square.addEventListener('mousedown' ,() =>{
        if(square.id == hitPosition){
            result++
            scores.textContent = result;
            hitPosition = null;
        }
    })
})
function moveMole(){
  
    timerId = setInterval(randomSquare,500)
}
moveMole();
function countDown(){
    
    counterTimer--; 
    timeLeft.innerHTML = counterTimer
    if(counterTimer === 0){
        clearInterval(countdownTimerID);
        clearInterval(timerId)
        alert('Game Over... Your Score is ' + result)
    }
}
 let countdownTimerID = setInterval( countDown,1000)