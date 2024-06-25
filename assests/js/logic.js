let nextButton = document.getElementById("nextB");
let prevButton = document.getElementById("prevQ");
let visibleQuestion = document.getElementById("HTMLquestion");
let questionHistory = [];

function nextQ() {
  question = questionsArray[Math.floor(Math.random() * questionsArray.length)];
  visibleQuestion.textContent = question;
  questionHistory.push(question);
  //questions added to questionHistory array
}

function prevQ() {
  oldQuestion = questionHistory.at(-2)  
  visibleQuestion.textContent = oldQuestion
}

//start button with description in <p> hide next and previous, show next and previous when pressed start and hide start.
