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
var countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();


//questions
let question = [
    {
        question : "How do you do this?",
        answerA : "I dont know",
        answerB : "I'm not sure",
        answerC : "Perhaps I know",
        answerD : "I have no clue",
        correct : "C",
    },
    {
        question : "How many fingers am I holding up?",
        answerA : "How am I supposed to know?",
        answerB: "4",
        answerC: "I don't know",
        answerD: "6",
        correct : "B",
    },
    {
        question: "How hard was this homework?",
        answerA : "easy",
        answerB : "kind of hard",
        answerC : "very hard",
        answerD : "I passed out",
        correct : "D"
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
    var initials = window.prompt ("Game Over, write initials")

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
