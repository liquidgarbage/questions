let nextButton = document.getElementById('nextB');

nextButton.addEventListener('click', function () {
    question = questionsArray[Math.floor(Math.random() * questionsArray.length)];
    document.getElementById('HTMLquestion').innerHTML = question;
})