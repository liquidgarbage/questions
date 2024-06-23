let nextButton = document.getElementById('nextB');
let prevButton = document.getElementById('prevQ');
let visibleQuestion = document.getElementById('HTMLquestion')
let questionHistory = []


function nextQ() {
    question = questionsArray[Math.floor(Math.random() * questionsArray.length)];
    visibleQuestion.textContent = question;
    //questions added to questionHistory array 
}


function prevQ() {
//gets q from questionHistory 
//in reverse order
//shows on visibleQuestion
}


//start button with description in <p> hide next and previous, show next and previous when pressed start and hide start.  