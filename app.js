/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game


var scores, roundScores, activePlayer, gamePlaying;


init();






/*function btn(){
    //Do something here
}

btn();


document.querySelector('btn-roll').addEventListener('click', function(){
    if (gamePlaying){
        //1. a random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    //2. Display the result
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png'; 
    
    //3. Update the round score if the rolled number was NOT a 1.
    if (dice !== 1){
        //Add score
        roundScore += dice;
        //this is equivalent to roundScore = roundScore + dice;
        document.querySelector('#current-' + activePlayer ).textContent = roundScore;
    }else{
        //next player
        nextPlayer();
        
    }
    }
    
});

//Anonymous Fuction, function that does not have a name, meaning it cannot be reused later in the code.convieniet for events listener method because that is the only time we need the function



document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){
        
         scores[activePlayer] += roundScore;
    
    
    document.querySelector('score- ' + activePlayer).textContent = scores[activePlayer]

    if (scores[activePlayer] >= 100){
       document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
       document.querySelector('.dice').style.display = 'none';
       document.querySelector('.player-'+ activePlayer + '-panel').classList.add(winner);
       document.querySelector('.player-'+ activePlayer + '-panel').classList.remove(winner);
       gamePlaying = false;
        
    }else{
        nextPlayer();
    }
    
  
    }
        
   
});

    function nextPlayer(){
        //Next Player
         activePlayer === 0 ? activePlayer = 1 :activePlayer= 0;
       
        roundScore=0;
        document.getElementById('current-0').textcontent = '0';
        document.getElementById('current-1').textcontent = '0';
        
        //document.querySelector(.player-0-panel).classList.remove('active');
        //document.querySelector(.player-1-panel).classList.add('active');
        //but only works one way. if player 0 rolls a 1 then the active class changes from player 0 to player 1 but if player 1 rolls a 1 it does not change active class from player 1 to player 0
        
        document.querySelector(.player-0-panel).classList.toggle('active');
        document.querySelector(.player-1-panel).classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
    }
document.querySelector('.btn-new').addEventListener('click', init );


function init (){
 scores = [0,0];
 roundScore = 0;
 activePlayer = 0;
 gamePlaying = true;
    
document.querySelector('.dice').style.display = 'none';

document.getElementById ('score-0').textContent='0';
document.getElementById ('score-1').textContent='0';
document.getElementById ('current-0').textContent='0';
document.getElementById ('current-1').textContent='0';
document.querySelector('#name-1') .textContent = 'Player 1';
document.querySelector('#name-2') .textContent = 'Player 2';  
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner'); 
document.querySelector('.player-0-panel').classList.remove('active');  
document.querySelector('.player-0-panel').classList.add('active'); 
document.querySelector('.player-1-panel').classList.remove('active'); 
}












