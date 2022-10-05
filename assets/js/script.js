// save name from inital form
let name = document.getElementById('name')

// Populate quiz home page with users name
let updateName = document.getElementById('name-result')
updateName.innerHTML = `<h1>Welcome ${name}!</h1>`







// use API to fill in quiz questions and answers
// general questions
// https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple

const genQuestion = document.getElementById('gen-question');
const genChoices = Array.from(document.getElementsByClassName('gen-choices'));
console.log(hello);









// give user score at end of the quiz



// add tick/cross item to main quiz title after completion



// pop up well done note if passed all 4 sections - if not passed all three a pop up to say try again and see if you can get all four