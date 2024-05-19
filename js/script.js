'use strict'
 
/*setting score*/

const scoreP1 = document.getElementById('score-0');
const scoreP2 = document.getElementById('score-1');

/*selecting current score*/
 
const cScoreP1 = document.getElementById('c-score-0');
const cScoreP2 = document.getElementById('c-score-1');

/*selecting dice*/

const diceE1 = document.querySelector('.dice');

/*selecting buttons*/ 

const newBtn = document.querySelector('.btn-new');
const rollBtn = document.querySelector('.btn-roll');
const holdBtn = document.querySelector('.btn-hold');

/*selecting players*/

const player1 = document.querySelector('.player-0');
const player2 = document.querySelector('.player-1');
 
//resetting score  

scoreP1.textContent=0;
scoreP2.textContent=0;
let currentScore = 0;
let activePlayer = 0;
let score=[0,0];
let playing=true;

/*rolling dice*/

rollBtn.addEventListener('click',function(){
    if (playing){
        const dice = Math.trunc(Math.random() * 6) + 1;
    

        /*display dice*/
      diceE1.classList.remove('hidden');
      diceE1.src = `/images/dice-${dice}.jpeg`;
  
      //check for rolled
      
      if (dice!==1){
              currentScore += dice;
              document.getElementById(`c-score-${activePlayer}`).textContent =currentScore;
              
      }else{
           
          document.getElementById(`c-score-${activePlayer}`).textContent = 0;
          activePlayer = activePlayer === 0 ? 1 : 0;
          player1.classList.toggle('active-player');
          player2.classList.toggle('active-player');
      
      }
    }
   
});

/*hold functionality*/

holdBtn.addEventListener('click', function(){
    
    /*add current score to active player*/

    if(playing){
        score[activePlayer] += currentScore;    //score[1]+ currentscore
        document.getElementById(`score-${activePlayer}`).textContent = score[activePlayer];
       
        //winner check

        if (score[activePlayer] >= 20){
            
            //finishing the game
            
            playing = false;
            diceE1.classList.add('hidden');
            document.querySelector(`.player-${activePlayer}`).classList.add('winner-player');
            document.querySelector(` .player-${activePlayer}`).classList.remove('active-player');
        }else{
             
        document.getElementById(`c-score-${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player1.classList.toggle('active-player');
        player2.classList.toggle('active-player');
        currentScore = 0;
        }
    }
});

//new game btn functionality

 
newBtn.addEventListener('click', function(){
    currentScore = 0;
    activePlayer = 0;
     score=[0,0];
     playing=true;
     scoreP1.textContent=0;
     scoreP2.textContent=0;
     cScoreP1.textContent=0;
     cScoreP2.textContent=0;
     diceE1.classList.add('hidden');
     player1.classList.remove('winner-player');
     player2.classList.remove('winner-player');
     player1.classList.add('active-player');
     player2.classList.remove('active-player');
});

