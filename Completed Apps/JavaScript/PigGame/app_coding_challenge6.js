/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores, roundScore, activePlayer, gamePlaying;

function init() {
    gamePlaying = true;
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

init();

// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-0').textContent;
// console.log(x)

var lastRoll_dice1, lastRoll_dice2, lastRoll2_dice1, lastRoll2_dice2, total_of_3rolls_dice1, total_of_3rolls_dice2;

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // 1. random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // 2. display result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        // 3. update round score only if the rolled number was not 1
        
        if (dice1 + lastRoll_dice1 === 2 && dice2 + lastRoll_dice2 === 2) {
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else if (dice1 === 1 && dice2 === 1) {
            if (scores[activePlayer] >= 10) {
                scores[activePlayer] = scores[activePlayer] - 10;
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                roundScore = 0;
                document.querySelector('#current-' + activePlayer).textContent = '0';
            } else {
                nextPlayer();
            }
        } else if (dice1 === 1 || dice2 === 1) {
            roundScore = 0;
            document.querySelector('#current-' + activePlayer).textContent = '0';
            nextPlayer();
        } else if (dice1 + lastRoll_dice1 === 12 && dice2 + lastRoll_dice2 === 12) {
            // console.log('rolled two sixes')
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else if (dice1 === dice2) {
            roundScore += (dice1 * 2) + (dice2 * 2);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else if (dice1 >= 1 || dice2 >= 1) {
                roundScore += (dice1 + dice2);
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
        lastRoll_dice2 = dice2;
        lastRoll_dice1 = dice1;
        }   
});

document.querySelector('.btn-hold').addEventListener('click', function(){
        if (gamePlaying) {
            // 1. add current score to global score
            scores[activePlayer] += roundScore;   
            // 2. update current score
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            
            //this will take value from user and store final score
            var input = document.querySelector('.final-score').value;
            var winningScore;
            if (input) {
                winningScore = input;
            } else {
                winningScore = 100;
            }
            // 3. check if player wins the game
                if (scores[activePlayer] >= winningScore) {
                    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                    document.querySelector('#dice-1').style.display = 'none';
                    document.querySelector('#dice-2').style.display = 'none';
                    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                    gamePlaying = false;
                } else {
                    nextPlayer();
                }
        }  
})

function nextPlayer() {
    //next player Ternary Operator
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    // set score back to zero
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    // defining active player
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active'); 
    // different way but wont work if player 2 starts as active
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('#dice-1').style.display = 'block';
    document.querySelector('#dice-2').style.display = 'block';
}

document.querySelector('.btn-new').addEventListener('click', init);

function my_rules(){
    alert ("Rules!\n1. Input the total score you want to play until.\n2. if you roll 'doubles' your round score will double.\n3. if you roll a 'one' your round score will go to zero and you lose your turn.\n4. you can always 'hold' your round score to add to your total score.\n5.If you roll 'double 6's' twice in a row you will win the game!!\n6.If you roll 'double 1's' your overall score decreases by 10\nunless your overall score is less than 10 in which case\nyou just loser your turn.\n7. if your roll 'double 1's' twice in a row your overall score goes to 0!\nHave fun!");         
    }
