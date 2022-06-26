const cardArray =[
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: ' images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: ' images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]
console.log(cardArray);

cardArray.sort(() => 0.5 - Math.random())
let cardChosen = [];
let cardsChosenids = [];
let cardsWon = [];
const resultDisplay = document.querySelector('#result');

const gridDisplay = document.querySelector('#grid');

let i = 0;
function createBoard(){
    cardArray.forEach(function(cardImg){
      
        const card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id', i)
        i = i+1;
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card);

    })
}
function checkMatch()
{
     const matchcards = document.querySelectorAll('#grid img')
     let optionIdOne = cardsChosenids[0];
     let optionIdTwo = cardsChosenids[1];
     console.log(cardsChosenids);
     if(optionIdOne === optionIdTwo)
     {
        alert('You have clicked the same image');

     }
     else if(cardChosen[0] == cardChosen[1]){
        alert('Its a Match');
        matchcards[optionIdOne].setAttribute('src','images/white.png');
        matchcards[optionIdTwo].setAttribute('src','images/white.png');
        matchcards[optionIdOne].removeEventListener('click',flipCard)
        matchcards[optionIdTwo].removeEventListener('click',flipCard)
        cardsWon.push(cardChosen) 
        console.log(cardsWon)
    }else 
    {
        matchcards[optionIdOne].setAttribute('src','images/blank.png');
        matchcards[optionIdTwo].setAttribute('src','images/blank.png');
        alert('Try Again');
    }

    resultDisplay.innerHTML = cardsWon.length;
    cardChosen = [];
    cardsChosenids = [];
    if(cardsWon.length == (cardArray.length)/2){
        resultDisplay.innerHTML = 'Congratulations You Won'
    }
}
createBoard();  
function flipCard(){
   let cardId = this.getAttribute('data-id');
   cardChosen.push(cardArray[cardId].name);
   cardsChosenids.push(cardId)
   this.setAttribute('src',cardArray[cardId].img)
   if(cardChosen.length ===2){
    setTimeout(checkMatch,500)
   }
}