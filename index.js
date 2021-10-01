// need to create timer

var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.querySelector('.restart');
var quitBtn = document.querySelector('.quit');
var timeLeft, timeInterval;
var triviaQuestions = [{
        question: 'Inside which HTML element do we put the Javascript?',
        options: ['<js>', 'javascript>', '<scripting>', '<script>'],
        correctAnswer: '<script>'
    },
    {
        question: 'What is the correct Javascript syntax to change the content of the html elemtn below?',
        options: ['document.getElementById("demo").innerHTML="Hello World!"!;', 'document.getElement("p").innterHTML= "Hello World!;"', 'document.getElementByName("p").innterHTML="Hello World!;"', '#demo.innerHTML= "Hello World!";'],
        correctAnswer: 'document.getElementById("demo").innerHTML="Hello World!"!;'

    },
    {
        question: 'Where is the correct place to insert a Javascript?',
        options: ['The <head> Section', 'Both the <head> section and the <body> section', 'The <body> section'],
        correctAnswer: 'The body section'
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"',
        options: ['<script name="xxx.js">', '<script src = "xxx.js">', '<script href="xxx.js"'],
        correctAnswer: '<script src = "xxx.js">'
    },



]


// var message =

// var words = message.split(' ');

startBtn.addEventListener("click", countdown)

function countdown() {
    timeLeft = 60;
    timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
}


function displayMessage() {
    var wordCount = 0;


    var msgInterval = setInterval(function () {
        if (words[wordCount] === undefined) {
            clearInterval(msgInterval);
        } else {
            window.prompt("Game Over")
            // Display one word of the message
            //   mainEl.textContent = words[wordCount];
            //   wordCount++;
        }
    }, 1000);
}

var displayDiv = document.getElementById('displayDiv')

var questionText, optionsText;
var currentText = 0;
var userScore = 0;
var timeRemaining;

function updateQuiz() {
    quesionText = triviaQuestions[currentIndex].question;
    var questionPara = document.createElement('p');
    questionPara.textContent = questionText;
    displayDiv.appendChild(questionPara);

    for (var i = 0; i < 4; i++) {
        var optionsBtn = document.createElement('button');
        optionsText = triviaQuestions[currentIndex].options[i];
        optionsBtn.textContent = optionsText;
        displayDiv.appendChild(optionsBtn);

        optionsBtn.addEventListener('click', function () {
            if (optionsBtn.textContent === triviaQuestions[currentIndex].correctAnswer) {
                console.log('You got it right!');
                userScore++;
            } else {
                console.log('You got it wrong!');
                timeRemaining -= 10;


            }
        });
}

}



// countdown();






// Need to create box/card
// Need to create questions inside boxes
// Need to understand the math and code involved to subtract time if answer is incorrect
// Need to understand code in javascript to stop game is time hits zero
// Need to save score and score is counted