var quiz = document.querySelector('quiz');
var quizContainer = document.querySelector('getresults');
var question = document.querySelector('#Question');
var answerA = document.querySelector("A");
var answerB = document.querySelector("B");
var answerC = document.querySelector("C");
var answerD = document.querySelector("D");
var score = document.querySelector("score");
var initials = document.querySelector("initials");
var scorecounter = document.querySelector("scorecounter");
var timerh2 = document.querySelector("#timer");
var startButton = document.querySelector('.startbutton')


//questions
var quiz = [
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
        answerA : "Yes",
        answerB: "No",
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
var i=0
function ShowQuestion (){
    //loop through array of questions 
    var curQ = quiz[i]
    question.textContent = curQ.question
    //curQ.answerA

    //no for loop
}

let timer = 5;
console.log(timerh2)
function startGame() {
    var t= setInterval(
        timerupdate, 1000
    )
    ShowQuestion()

}
// i++ to show question again
//check answer

startButton.addEventListener("click",startGame)

var runtimer = function(){
    setInterval(
    timer--
    , 1000)
    timerh2.textContent = timer
}
var timerupdate = function(){
    timer--
    timerh2.textContent = timer
}
document.getElementById("timer").addEventListener("click", function(event){
    event.preventDefault()
    {once: true}
  });

//answer is correct

//incorrect answer
//if else statement, if answer is wrong, game over, else correct, continue 
//if user clicks on correct answer, next question
//else wrong answer, game over

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
// function countdown() {
//     var timeLeft = 5;

    //var timeInterval = setInterval(function () {}
      //  if (timeLeft > 1) {
        //   timerEl.textContent = timeLeft + ' seconds remaining';
        //   timeLeft--;
        // } else if (timeLeft === 1) {
        //   timerEl.textContent = timeLeft + ' second remaining';
        //   timeLeft--;
        // } else {
        //   timerEl.textContent = '';
        //   clearInterval(timeInterval);
        //   displayMessage();
        // }