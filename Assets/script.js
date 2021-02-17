var quizContainer = document.querySelector('quiz');
var quizContainer = document.querySelector('getresults');
var question = document.querySelector('question');
var timer = document.querySelector('timer');
var answerA = document.querySelector("A");
var answerB = document.querySelector("B");
var answerC = document.querySelector("C");
var answerD = document.querySelector("D");
var score = document.querySelector("score");
var initials = document.querySelector("initials")
var scorecounter = document.querySelector("scorecounter");
var timer = document.querySelector("timer")


//questions
let question = [
    {
        question : "What does CSS stand for?",
        answerA : "Counter Style Sheet",
        answerB : "Cascading Sheet Style",
        answerC : "Cascading Style Sheets",
        answerD : "Count Sheet Style",
        correct : "C",
    },
    {
        question : "Is Java short for Javascript?",
        answerA : "No",
        answerB: "Yes",
        correct : "B",
    },
    {
        question: "How do you commit to github?",
        answerA : "git push",
        answerB : "git add .",
        answerC : "git pull",
        answerD : "git commit -m ",
        correct : "D",
    },
];

//variables 
let timer;
let score = 0;
//generate the question

//start quiz
function startGame() {
    isWin = false;
    timerCount = 10;
}
//check answer

//timer
var myfunc = setInterval(function() {
    // code goes here
    }, 1000)
//answer is correct

//incorrect answer
//if else statement, if answer is wrong, game over, else correct, continue 

//score
function init() {
    totalWins();
  }

//game over -lose

//game over-win
function winGame() {
    wordBlank.textContent = "You win! ";
    winCounter++
    startButton.disabled = false;
    setWins()
  }
//pop-up for initials 
function promptinitials() {
    var initials = window.prompt ("Game Over, write initials")}

//functions
let questions = 0;
function generateQuestion(){
    let q = question[questions];
    question.innerHTML = "<p>"+q.answerA+ "<p>";
    answerA.innerHTML = q.answerA
    answerB.innerHTML = q.answerB
    answerC.innerHTML = q.answerC
    answerD.innerHTML = q.answerD
}
function buildQuiz(){}
function getresults (){}
buildQuiz();
addEventListener("click", getresults)
function correctanswer (){}
function incorrectanswer (){}

//timer
function countdown() {
    var timeLeft = 5;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
          timerEl.textContent = timeLeft + ' seconds remaining';
          timeLeft--;
        } else if (timeLeft === 1) {
          timerEl.textContent = timeLeft + ' second remaining';
          timeLeft--;
        } else {
          timerEl.textContent = '';
          clearInterval(timeInterval);
          displayMessage();
        }