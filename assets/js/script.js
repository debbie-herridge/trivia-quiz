// using form on first place get users name and store value
function getName(){
    var name = document.getElementById("name").value;
    sessionStorage.setItem('userName', name);
}

// on load of quiz game retrieve users name
function showName() {
    document.getElementById("name-result").innerText = sessionStorage.getItem('userName');
};


// save users subject choice
function chooseSubject(clicked_id){
  var usersChoice = (clicked_id);
  localStorage.setItem('userChoice', usersChoice);
  
  window.location.assign("/start-quiz.html")
}


// pull ID's for quiz questions and answers
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choices'));

// Set variables
let currentQuestion = {};
let acceptingAnswer = false;

let questions = { 
  "generalKnowledge":[
    {
    genQuestion: "When was Hubba Bubba first introduced?",
    choice1: "1979",
    choice2: "1984",
    choice3: "1972",
    choice4: "1980",
    answer: 1,
},
{
    genQuestion: "What was Mountain Dew's original slogan?",
    choice1: "Give Me A Dew",
    choice2: "Do The Dew",
    choice3: "Yahoo! Mountain Dew... It'll tickle your innards!",
    choice4: "Get' that barefoot feelin'; drinkin'; Mountain Dew",
    answer: 3,
},
{
    genQuestion: "Who founded the Khan Academy?",
    choice1: "Ben Khan",
    choice2: "Kitt Khan",
    choice3: "Adel Khan",
    choice4: "Sal Khan",
    answer: 4,
},
{
    genQuestion: "Located in Chile, El Teniente is the world's largest underground mine for what metal?",
    choice1: "Iron",
    choice2: "Copper",
    choice3: "Nickel",
    choice4: "Silver",
    answer: 2,
},
{
    genQuestion: "Who invented the first ever chocolate bar, in 1847?",
    choice1: "Andrew Johnson",
    choice2: "John Cadbury",
    choice3: "John Tyler",
    choice4: "Joseph Fry",
    answer: 4,
}]
}

const maxQuestions = 5;
let counter = 0;

// Game Functions
function startGame(){
  counter = 0;
  score = 0;
    // Getting users subject choice
  var userChoice = localStorage.getItem('userChoice');
  questions = [...questions[userChoice]];
  newQuestion();
}

function newQuestion(){

  if(questions.length === 0 || counter >= maxQuestions){
    localStorage.setItem('newScore', score);
    return window.location.assign("/end-quiz.html")
  }

counter++;
    const index = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[index];
    questions.innerText = currentQuestion.questions;

    choices.forEach( choice => {
      const number = choice.dataset['number'];
      choice.innerText = currentQuestion['choice' + number]
    });

    questions.splice(genIndex, 1);

    acceptingAnswer = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if(!acceptingAnswer) return;

    acceptingAnswer = false;

    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    
    const classToApply =
    selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if(classToApply === "correct") {
      incrementScore(correctBonus);
    }
  
    selectedChoice.parentElement.classList.add(classToApply);
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      newGenQuestion(); 
    }, 1000);
  });
});

// Store and display score
const showScore = document.getElementById('score')
let score = 0;
const correctBonus = 1;

incrementScore = num => {
  score += num;
  showScore.innerText = score;
};

const newScore = localStorage.getItem('')

// Give user message at end of the quiz
function saveGenScore(event){
    e.preventDefault();

}






// add tick/cross item to main quiz title after completion



// pop up well done note if passed all 4 sections - if not passed all three a pop up to say try again and see if you can get all four









