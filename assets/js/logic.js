let nextButton = document.getElementById("nextB");
let prevButton = document.getElementById("prevB");
let visibleQuestion = document.getElementById("HTMLquestion");
let questionHistory = [];
let currentIndex = -1;

function nextQ() {
  let question = questionsArray[Math.floor(Math.random() * questionsArray.length)];
  visibleQuestion.textContent = question;
  questionHistory.push(question);
  currentIndex = questionHistory.length - 1;
  prevButton.style.display = "inline";
}

function prevQ() {
  if (currentIndex > 0) {
    currentIndex--;
    let oldQuestion = questionHistory[currentIndex];
    visibleQuestion.textContent = oldQuestion;
  }
}