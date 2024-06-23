let questionHistory = []



let nextButton = document.getElementById('nextB');
//let prevButton = document.getElementById('prevB');
let visibleQuestion = document.getElementById('HTMLquestion')

function nextQ() {
    question = questionsArray[Math.floor(Math.random() * questionsArray.length)];
    visibleQuestion.textContent = question;
}


function prevB() {

}
// prevButton.addEventListener('click', function () {
//     // Retrieve the previously selected question
//     let previousQuestion = document.getElementById('HTMLquestion').innerHTML;
//     question = previousQuestion;
//     document.getElementById('HTMLquestion').textContent = question;

// })