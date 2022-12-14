// using form on first place get users name and store value
function getName() {
  var name = document.getElementById("name").value;
  localStorage.setItem('userName', name);
}

// on load of quiz game subject choice
function showName() {
  // retrieve users name and populate heading
  var updateName = localStorage.getItem('userName');
  document.getElementById("name-result").innerText=`Welcome ${updateName}!`;

  // get variables to show previous subject and show pass or fail
  let previousGame = localStorage.getItem('userChoice');
  let showResult = document.getElementById(previousGame);
  let previousScore = localStorage.getItem(previousGame);

  // if user got more than 3 show a tick next to subject if not display a cross
  if (previousScore >= 3){
    showResult.innerHTML = `${previousGame} <i class="fa-solid fa-check"></i>`;
  } else {
    showResult.innerHTML = `${previousGame} <i class="fa-regular fa-circle-xmark"></i>`;
  }
}

// save users subject choice into local storage and direct to quiz page
function chooseSubject(clicked_id){
  var usersChoice = (clicked_id);
  localStorage.setItem('userChoice', usersChoice);
  window.location.assign("start-quiz.html");
}

// put all questions into an array with their key being the subject
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
    question: "Which Louis was known as ???The Sun King of France????",
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
    choice3: "Charles VI???s decree in 1719",
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
  };

// pull ID's for quiz questions and answers
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choices'));

// Set variables
let currentQuestion = {};
let acceptingAnswer = false;
const maxQuestions = 5;
let counter = 0;

// Basic start game functions, get the users chosen subject out of local storage
function startGame(){
  counter = 0;
  score = 0;
  var userChoice = localStorage.getItem('userChoice');
  questions = questions[userChoice];
  newQuestion();
}

function newQuestion(){
  if(questions.length === 0 || counter >= maxQuestions){
    // If no questions left save score into local storage and end quiz
    let subject = localStorage.getItem('userChoice');
    localStorage.setItem(subject, score);
    return window.location.assign("end-quiz.html");
  }
  // randomise questions and insert into html
  counter++;
  const index = Math.floor(Math.random() * questions.length);
  currentQuestion = questions[index];
  question.innerText = currentQuestion.question;

  // randomise choices and insert into html
  choices.forEach( choice => {
  const number = choice.dataset['number'];
  choice.innerText = currentQuestion['choice' + number];

  choice.id = currentQuestion['choice' + number];
  });

  // remove question from questions array 
  questions.splice(index, 1);
  acceptingAnswer = true;
}

  // loop through possible choices to check if user is correct
  choices.forEach(choice => {
  choice.addEventListener("click", e => {
  if(!acceptingAnswer) return;
  acceptingAnswer = false;

  // set variables 
  const selectedChoice = e.target;
  const selectedAnswer = selectedChoice.dataset["number"];  
  var classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
  var correctAnswer = currentQuestion["choice"+4];
                                                
  // instant colour responce to show user they were correct
  if(classToApply === "correct") {
    incrementScore(correctBonus);

    selectedChoice.classList.add(classToApply);
    setTimeout(() => {
    selectedChoice.classList.remove(classToApply);
    }, 1000);
    setTimeout(() => {
    newQuestion(); 
    }, 1000);
    } else {

    // If incorrect, the correct answers will be displayed
    selectedChoice.classList.add(classToApply);
    setTimeout(() => {
    selectedChoice.classList.remove(classToApply);
    }, 2000);

    let correctElement = document.getElementById(correctAnswer);
    console.log(correctElement);
                                                  
    correctElement.classList.add("correct");                            
    setTimeout(() => {
    correctElement.classList.remove("correct");
    }, 2000);
    setTimeout(() => {
    newQuestion(); 
    }, 2000);
    }
  });
});

// Store and display score at top
const showScore = document.getElementById('score');
let score = 0;
const correctBonus = 1;

incrementScore = num => {
  score += num;
  showScore.innerText = score;
};

// Give user message at end of the quiz
function finalScore(){
  let completedSubject = localStorage.getItem('userChoice');
  let completedScore = localStorage.getItem(completedSubject);
  document.getElementById("result-message").innerText = `You scored: ${completedScore} out of 5!`;
}

// Button to take user to quiz homepage to choose another subject
function nextSubject(event){
    event.preventDefault();
    window.location.assign("quiz.html");
}