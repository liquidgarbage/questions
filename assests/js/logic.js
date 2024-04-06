
console.log(questionsArray)

let question = questionsArray[Math.floor(Math.random() * questionsArray.length)];
document.getElementById('HTMLquestion').innerHTML = question;

//mathrandom to generate array
//how to show array in html section

//question pops up with button next question then new question from the questionsArray pops up, selects random question

//on click next button math random in array
//addEventListener
let nextButton = document.getElementById('nextB');

nextButton.addEventListener('click', function () {
    console.log(question)
    questionsArray[Math.floor(Math.random() * questionsArray.length)];
    //splice new q in to old one
})