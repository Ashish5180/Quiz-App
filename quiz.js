const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "C++", "JavaScript", "Java"],
        answer: "JavaScript"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Mark Twain"],
        answer: "William Shakespeare"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    quizContainer.innerHTML = `
        <h2 class="text-xl font-semibold">${currentQuestion.question}</h2>
        <div class="space-y-2">
            ${currentQuestion.options.map(option => `
                <label class="block p-2 border rounded-lg cursor-pointer">
                    <input type="radio" name="option" value="${option}" class="mr-2">
                    ${option}
                </label>
            `).join('')}
        </div>
    `;
}

function showResult() {
    resultContainer.classList.remove('hidden');
    scoreElement.textContent = `You scored ${score} out of ${questions.length}!`;
}

nextButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert('Please select an option!');
        return;
    }

    const answer = selectedOption.value;
    if (answer === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        quizContainer.classList.add('hidden');
        nextButton.classList.add('hidden');
        showResult();
    }
});

restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.classList.remove('hidden');
    nextButton.classList.remove('hidden');
    resultContainer.classList.add('hidden');
    loadQuestion();
});

loadQuestion();
