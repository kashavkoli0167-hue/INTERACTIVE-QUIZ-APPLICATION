const quizData = [
    {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks Text Mark Language",
      "None of these"
    ],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "Java", "Python"],
    answer: 1
  },
  {
    question: "Which language is used for web logic?",
    options: ["CSS", "HTML", "JavaScript", "SQL"],
    answer: 2
  },
  {
    question: "Which symbol is used for JavaScript comments?",
    options: ["<!-- -->", "//", "#", "**"],
    answer: 1
  },
  {
    question: "Which tag is used to add JavaScript in HTML?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    answer: 2
  },
  {
    question: "CSS stands for?",
    options: [
      "Creative Style Sheets",
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets"
    ],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionE = document.querySelector("#question");
const optionsE = document.querySelectorAll(".option");
const feedbackE = document.querySelector("#feedback");
const nextBtn = document.querySelector("#nextBtn");
const scoreE = document.querySelector("#score");

loadQuestion();

function loadQuestion(){
    feedbackE.textContent = "";
    nextBtn.style.display = "none";
   
    const currentData = quizData[currentQuestion];
    questionE.textContent = currentData.question;

    optionsE.forEach((btn,index) => {
        btn.textContent = currentData.options[index];
        btn.disabled = false;
        btn.classList.remove("correct","wrong");
        btn.style.display = "block";
    });

}

    function checkAnswer(selected){
    const correctAnswer = quizData[currentQuestion].answer;
    
    optionsE.forEach((btn, index) => {
        btn.disabled = true;

        if(index === correctAnswer){
            btn.classList.add("correct");
        }
        if(index === selected && selected !== correctAnswer){
            btn.classList.add("wrong");
        }
    });

    if(selected === correctAnswer){
        feedbackE.textContent = "Correct ✅";
        score++;
    } else {
        feedbackE.textContent = "Wrong ❌";
    }
    nextBtn.style.display = "block";
}

function nextQuestion(){
    currentQuestion++;
    if(currentQuestion < quizData.length){
        loadQuestion();
    } else{
        showResult();
    }
}

function showResult(){
    questionE.textContent = "Quiz Completed 🎉";
    document.querySelector(".options").style.display = "none";
    feedbackE.textContent = "";
    nextBtn.style.display = "none";

   scoreE.innerHTML = `
  Your Score: ${score}/${quizData.length} <br><br>
  <button onclick="restartQuiz()">Restart Quiz</button>
`;
}

function restartQuiz(){
    currentQuestion = 0;
    score = 0;
    scoreE.textContent= "";
    document.querySelector(".options").style.display = "block";
    loadQuestion();
}
