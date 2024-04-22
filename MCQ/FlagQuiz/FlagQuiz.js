// Quiz questions and answers
const quizQuestions = [
    {
        question: "What flag is this country?",
        answers: ["Japan", "South Korea", "North Korea", "China"],
        correct: 0,
        image: "Flag_of_Japan.png" // Replace with the path or name of your quiz image
    },
    {
        question: "What flag is this country?",
        answers: ["Cambodia", "Thailand", "Laos", "Vietnam"],
        correct: 1,
        image: "Flag-Thailand.png"
    },
    {
        question: "What flag is this country?",
        answers: ["Russia", "North Korea", "Vietnam", "China"],
        correct: 3,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/640px-Flag_of_the_People%27s_Republic_of_China.svg.png"
    },
    {
        question: "What flag is this country?",
        answers: ["Laos", "Malaysia", "Cambodia", "Singapore"],
        correct: 2,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/640px-Flag_of_Cambodia.svg.png"
    }
];

let score = 0;
let currentQuestionIndex = 0;

function displayQuestion() {
    const questionObj = quizQuestions[currentQuestionIndex];
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
    <div class="question">
        <img src="${questionObj.image}" alt="Quiz Image" style="width:100%; height:auto;"> <!-- Display the image -->
        <p>${questionObj.question}</p>
    </div>
    ${questionObj.answers.map((answer, index) =>
        `<div class="answer" onclick="selectAnswer(${index})">${answer}</div>`
    ).join('')}
    `;
}

function selectAnswer(selectedIndex) {
    const questionObj = quizQuestions[currentQuestionIndex];
    const answers = document.querySelectorAll('.answer');
    answers.forEach((answer, index) => {
        answer.classList.remove('correct', 'wrong');
        if (index === questionObj.correct) {
            answer.classList.add('correct');
        } else if (index === selectedIndex) {
            answer.classList.add('wrong');
        }
    });

    if (selectedIndex === questionObj.correct) {
        score++;
    }

    setTimeout(() => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        } else {
            showScore();
        }
    }, 2000);
}

function showScore() {
    const scoreContainer = document.getElementById('score-container');
    scoreContainer.innerHTML = `Your Score: ${score}/${quizQuestions.length}`;
}

// Initialize the quiz
displayQuestion();