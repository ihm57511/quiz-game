var questions = [
    {question: "The condition in an if / else statement is enclosed within ________?",
        answers: [
            {answer: "quotes", isCorrect: false},
            {answer: "curly brackets", isCorrect: false},
            {answer: "parentheses", isCorrect: true},
            {answer: "square brackets", isCorrect: false},
        ]
    },
    {question: "Commonly used data types DO NOT include:",
        answers: [
            {answer: "strings", isCorrect: false},
            {answer: "booleans", isCorrect: false},
            {answer: "alerts", isCorrect: true},
            {answer: "numbers", isCorrect: false},
        ]
    },
    {question: "String values must be enclosed within ________ when being assigned to variables.",
        answers: [
            {answer: "commas", isCorrect: false},
            {answer: "curly brackets", isCorrect: false},
            {answer: "quotes", isCorrect: true},
            {answer: "parentheses", isCorrect: false},
        ]
    },
    {question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            {answer: "JavaScript", isCorrect: false},
            {answer: "terminal/bash", isCorrect: false},
            {answer: "for loops", isCorrect: false},
            {answer: "console.log", isCorrect: true},
        ]
    },
    {question: "Arrays in JavaScript can be used to store __________.",
        answers: [
            {answer: "numbers and strings", isCorrect: false},
            {answer: "other arrays", isCorrect: false},
            {answer: "booleans", isCorrect: false},
            {answer: "all of the above", isCorrect: true},
        ]
    },

        
]
var timer = document.getElementById('timer');
var secondsLeft = 60;
var quiz = document.getElementById("quiz");
// "Coding Quiz Challenge"
// "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answeres will penalize your scoretime by ten seconds!"
function start() {
    var h1 = document.getElementById('h1');
    h1.textContent = "Coding Quiz Challenge";
    document.body.appendChild(h1);
    var p = document.getElementById('p');
    p.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answeres will penalize your scoretime by ten seconds!";
    document.body.appendChild(p);
} 


function game() {
    document.getElementById('startBtn').remove(this);
    setTime();
    function setTime() {
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timer.textContent = "Timer " + secondsLeft;
      
          if(secondsLeft === 0) {
            clearInterval(timerInterval);
            h1.textContent = "Game Over!";
            document.body.appendChild(h1);
          }
      
        }, 1000);
    }
        
}
document.getElementById('startBtn').addEventListener("click", game);
function inti() {
    start();
}
inti();
// need function for cards
// start-card visible at load,
// at start button press, display change to none,
// card 1 then set to visible, 
// if button class correct pressed then { card display change to none, 
// next card display change to visible} 
// else {card display change to none, 
// next card display change to visible, add 10 sec penalty }
// need form for score submision