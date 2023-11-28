// script.js

let timer;
let timeLeft = 60;
let currentQuestion = 1;
let score = 0;

function startQuiz() {
  document.getElementById('start-container').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block';
  timer = setInterval(updateTimer, 1000);
  showQuestion();
}

function updateTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    document.getElementById('time').innerText = timeLeft;
  } else {
    endQuiz();
  }
}

function showQuestion() {
  const questionText = getQuestionText(); 
  document.getElementById('question').innerText = 'Question ' + currentQuestion + ': ' + questionText;
}

function checkAnswer(isCorrect) {
  if (isCorrect) {
    score += 10;
    document.getElementById('feedback').innerText = 'Correct!';
  } else {
    timeLeft -= 10;
    document.getElementById('feedback').innerText = 'Incorrect!';
  }

  if (currentQuestion < 5) { 
    currentQuestion++;
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timer);
  document.getElementById('quiz-container').style.display = 'none';
  document.getElementById('end-container').style.display = 'block';
  document.getElementById('score').innerText = score;
}

function saveScore() {
    const initials = document.getElementById('initials').value;
  
    const scoreData = {
      initials: initials,
      score: score
    };
  
    fetch('https://example.com/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(scoreData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Score submitted successfully:', data);
    })
    .catch(error => {
      console.error('Error submitting score:', error);
    });
  }

function getQuestionText() {
  
  switch (currentQuestion) {
    case 1:
      return 'The CSS Box Model consists of the following components: margin, padding, border, and content.';
    case 2:
      return 'In JavaScript, variables declared with var are hoisted to the top of their scope.';
    case 3:
        return '<article>, <section>, and <nav> are examples of HTML5 semantic elements.'
    case 4:
        return 'Media queries in CSS are used to create responsive web designs that adapt to different screen sizes.'
    case 5:
        return 'The href command is ised to creaste a link in html.'
    default:
      return 'No more questions';
  }
}
