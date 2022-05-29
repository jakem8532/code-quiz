const startButton = document.getElementById("start-btn")
const startPage = document.getElementById("start-page")
const questionsPage = document.getElementById("question-container")
const endQuizPage = document.getElementById("final-page")
const nextBtn = document.getElementById("next-btn")
const endBtn = document.getElementById("end-btn")
const questionEl = document.getElementById("question")
const answersEl = document.getElementById("answers")
const correctAnswer = document.getElementById("correct")
const wrongAnswer = document.getElementById("wrong")

let shuffledQuestions = undefined
let currentQuestionIndex = undefined
let correctAnswerCounter = 0


startButton.addEventListener("click", startQuiz)
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
    nextBtn.classList.add('hide')
    correctAnswer.classList.add('hide')
    wrongAnswer.classList.add('hide')
})

function startQuiz() {
    startButton.classList.add('hide')
    startPage.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    console.log(questions)
    questionsPage.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    resetForm()
    if (shuffledQuestions.length > currentQuestionIndex) {
        showQuestion(shuffledQuestions[currentQuestionIndex])
    }else {
        endQuiz()
    }
} 

function resetForm() {
    while (answersEl.firstChild) {
        answersEl.removeChild
        (answersEl.firstChild)
    }
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answersEl.appendChild(button)
    });
}

function selectAnswer(event) {
    const selectedButton = event.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answersEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(correct) {
        correctAnswer.classList.remove("hide")
        correctAnswerCounter++
    }else {
        wrongAnswer.classList.remove("hide")
    }
    nextBtn.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }else {
        element.classList.add('wrong')
    }

}


function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function endQuiz() {
    questionsPage.classList.add('hide')
    endQuizPage.classList.remove('hide')
    endBtn.classList.remove('hide')
    let endQuizHeading = document.createElement("p")
    let ScorePercentage = Math.floor((correctAnswerCounter/6) * 100)
    endQuizHeading.innerText = "Your quiz has concluded, you have scored " + ScorePercentage + "% in your test."
    endQuizPage.appendChild(endQuizHeading)
}
const questions = [
    {
        question: "Which JavaScript code would you use to add an event listener to a button?",
        answers: [
            {text: "getElementById", correct: false},
            {text: "addEventLister", correct: true},
            {text: "for loop", correct: false},
            {text: "querySelector", correct: false},
        ]
    },

    {
        question: "What element would you use to change the color of the background color in CSS",
        answers: [
            {text: "background-color:", correct: true},
            {text: "color:", correct: false},
            {text: "border-color:", correct: false},
            {text: "bg-color:", correct: false},
        ]
    },

    {
        question: "What HTML element would you use to create a button?",
        answers: [
            {text: "<a>", correct: false},
            {text: "<btn>", correct: false},
            {text: "<section>", correct: false},
            {text: "<button>", correct: true},
        ]
    },

    {
        question: "Which display code would you use if you were looking to put it inline with other elements on the page?",
        answers: [
            {text: "display: inline", correct: true},
            {text: "display: block", correct: false},
            {text: "display: flex", correct: false},
            {text: "display: none", correct: false}
        ]
    },

    {
        question: "Which method of javascript would display a window on your screen with your preferred message?",
        answers: [
            {text: "console.log()", correct: false},
            {text: "document.write()", correct: false},
            {text: "window.alert()", correct: true},
            {text: "None of the above", correct: false}
        ]
    },

    {
        question: "If I wanted to create a variable that is unchangable in JavaScript, which would I use?",
        answers: [
            {text: "var", correct: false},
            {text: "let", correct: false},
            {text: "const", correct: true},
            {text: "All of the above", correct: false}
        ]
    }
]