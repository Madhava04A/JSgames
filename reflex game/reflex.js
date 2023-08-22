const scoreBoard = document.getElementById("score");
const placer = document.querySelectorAll(".hole");
const mole = document.createElement('img');
mole.setAttribute('src','image/mole.jpg');
mole.setAttribute('id','mole');
let score = 0; // score counter
const timer = document.getElementById("timer");
// remove mole after the game from the board //
function removeMole(){
    placer.forEach(place => {
        place.innerHTML = "";
})
}

let time = 15;
    function stpWatch(){
        time--;
        timer.innerText = time;
    }
    
// function for mole to pop up randomly //
function molePop(){
    const random = Math.floor(9 * Math.random());
    placer[random].appendChild(mole);
}

// Logic of the game //
function gameLogic(){
    scoreBoard.innerText = 0;
    setTimeout(clearGame,15500);
    const stopW = setInterval(stpWatch,1000);
    const myGame = setInterval(molePop,999)
    function clearGame(){
        clearInterval(myGame);
        clearInterval(stopW);
        time = 15;
        removeMole();
        alert("Your Score is " + score)
    }
}

// event listener to confirm the hit on the mole //
mole.addEventListener('click', ()=>{ 
    score++;
    scoreBoard.innerText = score;  
})



