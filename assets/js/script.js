
// // get name and progress to quiz
// function getName(event){
//     event.preventDefault();

//     let userName = document.getElementById('name');
//     console.log(userName)

//     window.location.href="../../quiz.html";
    
//     let addUsersName = document.getElementById('name-result')
//     addUsersName.innerHTML = `<h2>${userName}</h2>`
// }

// // load general knowledge page to start that quiz

// function startGeneral(event) {
//     window.onload = sendApiRequest
//     async function sendApiRequest(){
//         let response = await fetch(`https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple`);
//         console.log(response)
        
//     }

// }


let user = document.getElementById('username');
let pass = document.getElementById('password');

// Now you can get their values
console.log(user.value);
console.log(pass.value);