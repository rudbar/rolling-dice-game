var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

//make the rolling dice invisible at the beginning of the game
document.querySelector('.dice').style.display = 'none';

//set all the scores to 0
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

document.querySelector('.btn-roll').addEventListener('click', function() {

    // 1. Generate a random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = "dice-" + dice + ".png";

});





































//dice = Math.floor(Math.random() * 6) + 1;

//document.querySelector('#current-' + activePlayer).textContent = dice;

//var x = document.querySelector('#score-1').textContent;
//console.log(x);

