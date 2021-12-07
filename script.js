'use strict';

const goal = Math.trunc(Math.random()*20)+1
let score = 20

const decreaseScore = function(){
    score--
    if(score < 0){
        document.querySelector(".message").textContent = "You lost! Better luck next time."
    }
    else{
        document.querySelector('.score').textContent = score
    }
}

document.querySelector(".check").addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)

    if(!guess){
        document.querySelector(".message").textContent = "No input detected"
    } else if(guess < goal){
        document.querySelector(".message").textContent = "Too low!"
        decreaseScore()
    }else if(guess > goal){
        document.querySelector(".message").textContent = "Too high!"
        decreaseScore()
    }else{
        document.querySelector(".message").textContent = "🥳 Correct!"
    }
})
