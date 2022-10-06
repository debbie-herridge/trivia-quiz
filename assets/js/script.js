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
let genAccepting = true;
let genScore = 0;
let genCounter = 0;
let genQuestions = [
    {
        "genQuestion": "When was Hubba Bubba first introduced?",
        "correct_answer": "1979",
        "incorrect_answers": [
          "1984",
          "1972",
          "1980"
        ]
      },
      {
        "genQuestion": "What was Mountain Dew&#039;s original slogan?",
        "correct_answer": "Yahoo! Mountain Dew... It&#039;ll tickle your innards!",
        "incorrect_answers": [
          "Give Me A Dew",
          "Do The Dew",
          "Get&#039; that barefoot feelin&#039; drinkin&#039; Mountain Dew"
        ]
      },
      {
        "genQuestion": "Who founded the Khan Academy?",
        "correct_answer": "Sal Khan",
        "incorrect_answers": [
          "Ben Khan",
          "Kitt Khan",
          "Adel Khan"
        ]
      },
      {
        "genQuestion": "Located in Chile, El Teniente is the world&#039;s largest underground mine for what metal?",
        "correct_answer": "Copper",
        "incorrect_answers": [
          "Iron",
          "Nickel",
          "Silver"
        ]
      },
      {
        "genQuestion": "Who invented the first ever chocolate bar, in 1847?",
        "correct_answer": "Joseph Fry",
        "incorrect_answers": [
          "Andrew Johnson",
          "John Cadbury",
          "John Tyler"
        ]
      }
]

const genCorrectBonus = 1;
const genMaxQuestions = 5;

function startGenGame(){
    genCounter = 0;
    genScore = 0;
    genQuestions = [...genQuestions];
    console.log(genQuestions);
    newGenQuestion();
}

function newGenQuestion(){
    genCounter++;
    const genIndex = Math.floor(Math.random() * genQuestions.length);
    genCurrentQuestion = genQuestions[genIndex];
    genQuestion.innerText = genCurrentQuestion.genQuestion;
}



startGenGame();







// give user score at end of the quiz



// add tick/cross item to main quiz title after completion



// pop up well done note if passed all 4 sections - if not passed all three a pop up to say try again and see if you can get all four