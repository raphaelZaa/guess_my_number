'use strict';

let goal = Math.trunc(Math.random()*20)+1
let score = 20
let highscore = 0
let lost = false

//decreases the score and handles lost conditions
const decreaseScore = function(){
    if(score <= 0){
        document.querySelector(".message").textContent = "You lost! Better luck next time."
        document.querySelector('body').style.backgroundColor = "#cf1f19"
        document.querySelector('.number').textContent = goal
        lost = true
    }
    else{
        score--
        document.querySelector('.score').textContent = score
    }
}

//Reset the page to default values
document.querySelector(".again").addEventListener('click', function(){
    score = 20
    goal = Math.trunc(Math.random()*20)+1
    lost = false
    document.querySelector('body').style.backgroundColor = "#222"
    document.querySelector(".number").style.width = '15rem'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.score').textContent = score
    document.querySelector('.guess').value = ''
    document.querySelector(".message").textContent = "Start guessing..."
})


//Processes the guess
document.querySelector(".check").addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)
    
    if(lost){
        document.querySelector(".message").textContent = "Sorry you've already lost."
    }else if(!guess){
        document.querySelector(".message").textContent = "No input detected"
    }else if(guess > 20){
        document.querySelector(".message").textContent = "Guess out of bounds!"
    }else if(guess === goal){
        document.querySelector('.number').textContent = goal
        document.querySelector("body").style.backgroundColor = "#60b347"
        document.querySelector(".number").style.width = '30rem'
        document.querySelector(".message").textContent = "🥳 Correct!"
        if(highscore < score){
            document.querySelector('.highscore').textContent = score
            highscore = score
        }
    } else {
        document.querySelector(".message").textContent = guess < goal ? "Too low!" : "Too high!" 
        decreaseScore()
    }
})
