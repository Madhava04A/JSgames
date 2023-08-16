const playBoard = document.getElementById("grid");
const scoreResult = document.getElementById("result");
scoreResult.innerText = "0";
let cardsClicked = [];
let cardClickedId = [];
let cardsWon = [];


const cards = [
    {
        name: "pizza",
        imgSrc :'images/pizza.png'
    },
    {
        name: "cheeseburger",
        imgSrc :'images/cheeseburger.png'
    },
    {
        name: "fries",
        imgSrc :'images/fries.png'
    },
    {
        name: "hotdog",
        imgSrc :'images/hotdog.png'
    },
    {
        name: "milkshake",
        imgSrc :'images/milkshake.png'
    },
    {
        name: "ice-cream",
        imgSrc :'images/ice-cream.png'
    },
    {
        name: "pizza",
        imgSrc :'images/pizza.png'
    },
    {
        name: "cheeseburger",
        imgSrc :'images/cheeseburger.png'
    },
    {
        name: "fries",
        imgSrc :'images/fries.png'
    },
    {
        name: "hotdog",
        imgSrc :'images/hotdog.png'
    },
    {
        name: "milkshake",
        imgSrc :'images/milkshake.png'
    },
    {
        name: "ice-cream",
        imgSrc :'images/ice-cream.png'
    }
];

cards.sort(()=> 0.5 - Math.random());

// Board initial setup //

function initialBoard(){
    for(let i=0; i < 12; i++){
        const ele = document.createElement('img');
        ele.setAttribute('src', 'images/blank.png');
        ele.setAttribute('id', i);
        ele.setAttribute('class', 'card')
        ele.addEventListener('click', cardReveal);
        playBoard.append(ele);
    }
    
}

 // Card Matching Check code //

 function checkMatch(){
    const imgEle = document.querySelectorAll("img");
    let optionOne = cardClickedId[0];
    let optionTwo = cardClickedId[1];

    if(optionOne === optionTwo){
        imgEle[optionOne].setAttribute('src','images/blank.png');
        imgEle[optionTwo].setAttribute('src','images/blank.png');
        alert("you clicked the same card")
    } else if(cardsClicked[0] === cardsClicked[1]){
        alert("Cards Matched!, Keep it up");
        imgEle[optionOne].setAttribute('src','images/white.png');
        imgEle[optionTwo].setAttribute('src','images/white.png');
        imgEle[optionOne].removeEventListener('click',cardReveal);
        imgEle[optionTwo].removeEventListener('click',cardReveal);
        cardsWon.push(cardsClicked);
        scoreResult.innerText = `${cardsWon.length}`
        
    } else{
        imgEle[optionOne].setAttribute('src','images/blank.png');
        imgEle[optionTwo].setAttribute('src','images/blank.png');
        alert("sorry try again");
    }

    cardClickedId = [];
    cardsClicked = [];
    if(cardsWon.length === 6){
        alert("Congratulations you have won")
    }
}
 // Card Flip Event //

function cardReveal(){
    const cardId = this.getAttribute('id');
    cardsClicked.push(cards[cardId].name);
    cardClickedId.push(cardId);
    this.setAttribute('src',cards[cardId].imgSrc);
    if(cardsClicked.length === 2){
        setTimeout(checkMatch,500);
    }
    
    ;

}




initialBoard();
