var questions = [
    {
        question: "The condition in an if / else statement is enclosed within ________?",
        answers: [
            { answer: "quotes", isCorrect: false },
            { answer: "curly brackets", isCorrect: false },
            { answer: "parentheses", isCorrect: true },
            { answer: "square brackets", isCorrect: false },
        ]
    },
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            { answer: "strings", isCorrect: false },
            { answer: "booleans", isCorrect: false },
            { answer: "alerts", isCorrect: true },
            { answer: "numbers", isCorrect: false },
        ]
    },
    {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        answers: [
            { answer: "commas", isCorrect: false },
            { answer: "curly brackets", isCorrect: false },
            { answer: "quotes", isCorrect: true },
            { answer: "parentheses", isCorrect: false },
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { answer: "JavaScript", isCorrect: false },
            { answer: "terminal/bash", isCorrect: false },
            { answer: "for loops", isCorrect: false },
            { answer: "console.log", isCorrect: true },
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store __________.",
        answers: [
            { answer: "numbers and strings", isCorrect: false },
            { answer: "other arrays", isCorrect: false },
            { answer: "booleans", isCorrect: false },
            { answer: "all of the above", isCorrect: true },
        ]
    },


]

var timerInterval;
var timer = document.getElementById('timer');
var secondsLeft = 60
var quiz = document.getElementById("quiz");
var h1 = document.getElementById('h1');
var p = document.getElementById('p');
var ol = document.getElementById("ol");
var currentQuestion = 0;


function start() {
   
    h1.textContent = "Coding Quiz Challenge";
    p.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answeres will penalize your scoretime by ten seconds!";

}
function check(correct) {
    if (!correct) {
        secondsLeft -= 10;
    }
    currentQuestion++;
    if(currentQuestion === questions.length){
        endGame()
    }else{
        display();
    }
}
function display() {
    h1.textContent = questions[currentQuestion].question;
    for (let i = 0; i < 4; i++) {
        var newButton = document.createElement("button");
        newButton.textContent = questions[currentQuestion].answers[i].answer;
        newButton.addEventListener("click", function () {
            check(questions[currentQuestion].answers[i].isCorrect);
        })
        ol.children[i].innerHTML = ""
        ol.children[i].appendChild(newButton);

    }

}

function setTime() {
    display();
    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Timer " + secondsLeft;


        if (secondsLeft === 0) {
            endGame()
        }

    }, 1000);
}

function endGame() {
    clearInterval(timerInterval);
    ol.remove(this);
    h1.textContent = "Game Over!";
    document.body.appendChild(h1);
    var hs = document.createElement('input');
    hs.setAttribute('type', 'text');
    hs.setAttribute('id', 'hs');
    hs.setAttribute('placeholder', 'enter initials')
    document.body.appendChild(hs);
    var hsB = document.createElement('button');
    hsB.textContent = "Save";
    document.body.appendChild(hsB);
    hsB.addEventListener('click', function () {
        var local = JSON.parse(localStorage.getItem('list')) || [];
        var userInput = document.getElementById('hs').value;
        var score = secondsLeft + " " + userInput;
        userInput.trim();
        // local.push(userInput);
        local.push(score)
        localStorage.setItem('list', JSON.stringify(local));
        window.location.href = 'score.html';
      });
}


function game() {
    document.getElementById('startBtn').remove(this);
    document.getElementById('p').remove(this);
    setTime();
}



document.getElementById('startBtn').addEventListener("click", game);
function inti() {
    start();
}
inti();

