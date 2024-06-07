let nextButton = document.getElementById('nextB');

nextButton.addEventListener('click', function () {
    question = questionsArray[Math.floor(Math.random() * questionsArray.length)];
    document.getElementById('HTMLquestion').innerHTML = question;
})


// let prevButton = document.getElementById('prevB');
// prevButton.addEventListener('click', function () {
//     // Retrieve the previously selected question
//     let previousQuestion = document.getElementById('HTMLquestion').innerHTML;
//     question = previousQuestion;
//     document.getElementById('HTMLquestion').innerHTML = question;

// })