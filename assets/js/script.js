
// get name and progress to quiz
function getName(event){
    event.preventDefault();

    let userName = document.getElementById('name');
    console.log(userName)

    window.location.href="../../quiz.html";
    
    let addUsersName = document.getElementById('name-result')
    addUsersName.innerHTML = `<h2>${userName}</h2>`
}

// click on general knowledge to start that quiz

function startGeneral(event) {
    window.location.href="../../general.html";
}

let generalQuiz = document.getElementById('general');
generalQuiz.addEventListener('click', startGeneral);