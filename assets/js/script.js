// using form on first place get users name and store value
function getName(){
    var name = document.getElementById("name").value;
    localStorage.setItem('userName', name);

    window.location.assign("/quiz.html")
}

// on load of quiz game retrieve users name
function showName() {
    updateName = localStorage.getItem('userName')
    document.getElementById("name-result").innerText = `Welcome ${updateName}!`
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
const maxQuestions = 5;
let counter = 0;

// put all questions into values for their subject key 
let questions = { 
"generalKnowledge":[
    {
    question: "When was Hubba Bubba first introduced?",
    choice1: "1979",
    choice2: "1984",
    choice3: "1972",
    choice4: "1980",
    answer: 1,
},
{
    question: "What was Mountain Dew's original slogan?",
    choice1: "Give Me A Dew",
    choice2: "Do The Dew",
    choice3: "Yahoo! Mountain Dew... It'll tickle your innards!",
    choice4: "Get' that barefoot feelin'; drinkin'; Mountain Dew",
    answer: 3,
},
{
    question: "Who founded the Khan Academy?",
    choice1: "Ben Khan",
    choice2: "Kitt Khan",
    choice3: "Adel Khan",
    choice4: "Sal Khan",
    answer: 4,
},
{
    question: "Located in Chile, El Teniente is the world's largest underground mine for what metal?",
    choice1: "Iron",
    choice2: "Copper",
    choice3: "Nickel",
    choice4: "Silver",
    answer: 2,
},
{
    question: "Who invented the first ever chocolate bar, in 1847?",
    choice1: "Andrew Johnson",
    choice2: "John Cadbury",
    choice3: "John Tyler",
    choice4: "Joseph Fry",
    answer: 4,
}], 
"mythology":[
  {
  question: "The Hippogriff, not to be confused with the Griffon, is a magical creature with the front half of an eagle, and the back half of what?",
  choice1: "Lion",
  choice2: "Dragon",
  choice3: "Tiger",
  choice4: "Horse",
  answer: 4,
},
{
  question: "Who in Greek mythology, who led the Argonauts in search of the Golden Fleece?",
  choice1: "Castor",
  choice2: "Jason",
  choice3: "Daedalus",
  choice4: "Odysseus",
  answer: 2,
},
{
  question: "Hera is god of...",
  choice1: "War",
  choice2: "Sea",
  choice3: "Agriculture",
  choice4: "Marriage",
  answer: 4,
},
{
  question: "A minotaur is half human half what?",
  choice1: "Cow",
  choice2: "Horse",
  choice3: "Tiger",
  choice4: "Eagle",
  answer: 4,
},
{
  question: "In most traditions, who was the wife of Zeus?",
  choice1: "Aphrodite",
  choice2: "Athena",
  choice3: "Hera",
  choice4: "Hestia",
  answer: 3,
}],
"history":[
  {
  question: "The Battle of the Somme in World War I took place in which country?",
  choice1: "France",
  choice2: "Germany",
  choice3: "Italy",
  choice4: "Austria",
  answer: 1,
},
{
  question: "In which year did the Invasion of Kuwait by Iraq occur?",
  choice1: "1992",
  choice2: "1988",
  choice3: "1990",
  choice4: "1986",
  answer: 3,
},
{
  question: "What year did Australia become a federation?",
  choice1: "1910",
  choice2: "1899",
  choice3: "1911",
  choice4: "1901",
  answer: 4,
},
{
  question: "In what year was the M1911 pistol designed?",
  choice1: "1907",
  choice2: "1911",
  choice3: "1899",
  choice4: "1917",
  answer: 2,
},
{
  question: "Which Louis was known as ‘The Sun King of France’?",
  choice1: "Louis XIII",
  choice2: "Louis XV",
  choice3: "Louis XVI",
  choice4: "Louis XIV",
  answer: 4,
}],
"geography":[
  {
  question: "What is the largest city and commercial capital of Sri Lanka?",
  choice1: "Colombo",
  choice2: "Moratuwa",
  choice3: "Negombo",
  choice4: "Kandy",
  answer: 1,
},
{
  question: "What is the name of the capital of Turkey?",
  choice1: "Istanbul",
  choice2: "Izmir",
  choice3: "Ankara",
  choice4: "Bursa",
  answer: 3,
},
{
  question: "The prefix Sino- (As in Sino-American) is used to refer to what nationality?",
  choice1: "Japanese",
  choice2: "Russian",
  choice3: "Indian",
  choice4: "Chinese",
  answer: 4,
},
{
  question: "What event led to Liechenstein adding a crown to its flag?",
  choice1: "Coronation of Prince Johann I Joseph in 1805",
  choice2: "The 1936 Olympics",
  choice3: "Charles VI’s decree in 1719",
  choice4: "Signing of the 1862 Constitution of Liechtenstein",
  answer: 2,
},
{
  question: "How many timezones does Russia have?",
  choice1: "6",
  choice2: "24",
  choice3: "16",
  choice4: "11",
  answer: 4,
}]
}

// Game Functions
function startGame(){
  counter = 0;
  score = 0;
    // Getting users subject choice
  var userChoice = localStorage.getItem('userChoice');
  questions = questions[userChoice];
  newQuestion();
}

function newQuestion(){

  if(questions.length === 0 || counter >= maxQuestions){
    let subject = localStorage.getItem('userChoice');
    localStorage.setItem(subject, score);
    return window.location.assign("/end-quiz.html")
  }

counter++;
    const index = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[index];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
      const number = choice.dataset['number'];
      choice.innerText = currentQuestion['choice' + number]
    });

    questions.splice(index, 1);

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
    }, 1000);

    newQuestion(); 
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
function nextSubject(event){
    event.preventDefault();
    window.location.assign("/quiz.html")
}


// add tick/cross item to main quiz title after completion



// change welcome 'name' on homepage to well done message






