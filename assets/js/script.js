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











// give user score at end of the quiz
let score = 0


// add tick/cross item to main quiz title after completion



// pop up well done note if passed all 4 sections - if not passed all three a pop up to say try again and see if you can get all four