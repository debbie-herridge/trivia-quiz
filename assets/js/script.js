// using form on first place get users name and store value
function getName(){
    var name = document.getElementById("name").value;
    sessionStorage.setItem('userName', name);
}

// on load of quiz game retrieve users name
function showName() {
    document.getElementById("name-result").innerText = sessionStorage.getItem('userName');
};


// use API to fill in quiz questions and answers
// general questions
// https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple

const genQuestion = document.getElementById('gen-question');
const genChoices = Array.from(document.getElementsByClassName('gen-choices'));

let genCurrentQuestion = {};
let genAccepting = false;
let genScore = 0;
let genCounter = 0;
let genQuestions = [
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
      }
]

const CorrectBonus = 1;
const MaxQuestions = 5;

function startGenGame(){
    genCounter = 0;
    genScore = 0;
    genQuestions = [...genQuestions];
    console.log(genQuestions);
    newGenQuestion();
}

function newGenQuestion(){

    if(genQuestions.length === 0 || genCounter >= MaxQuestions){
      return window.location.assign("/quiz.html")
    }

    genCounter++;
    const genIndex = Math.floor(Math.random() * genQuestions.length);
    genCurrentQuestion = genQuestions[genIndex];
    genQuestion.innerText = genCurrentQuestion.genQuestion;

    genChoices.forEach( choice => {
      const number = choice.dataset['number'];
      choice.innerText = genCurrentQuestion['choice' + number]
    });

    genQuestions.splice(genIndex, 1);

    genAccepting = true;
};

genChoices.forEach(choice => {
  choice.addEventListener("click", e => {
    if(!genAccepting) return;

    genAccepting = false;

    const genSelectedChoice = e.target;
    const genSelectedAnswer = genSelectedChoice.dataset["number"];
    
    const genClassToApply =
      genSelectedAnswer == genCurrentQuestion.answer ? "correct" : "incorrect";
  
    genSelectedChoice.parentElement.classList.add(genClassToApply);
    setTimeout(() => {
      genSelectedChoice.parentElement.classList.remove(genClassToApply);
      newGenQuestion(); 
    }, 1000);
  });
});



startGenGame();







// give user score at end of the quiz



// add tick/cross item to main quiz title after completion



// pop up well done note if passed all 4 sections - if not passed all three a pop up to say try again and see if you can get all four