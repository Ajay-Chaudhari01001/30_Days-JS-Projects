const quizDB = [
    {
        question: "Q1: The brain of any computer system is?",
        a: "ALU",
        b: "Memory",
        c: "CPU",
        d: "Control Unit",
        ans: "ans3"
    },
    {
        question: "Q2: Which of the following languages is more suited to a structured program?",
        a: "FORTRAN",
        b: "PASCAL",
        c: "BASIC",
        d: "None Of the above",
        ans: "ans3"
    },
    {
        question: "Q3: Who is the father of Computers?",
        a: "James Gosling",
        b: "Charles Babbage",
        c: "Dennis Ritchie",
        d: "Bjarne Stroustrup",
        ans: "ans2"
    },
    {
        question: "Q4: What is the full form of CPU?",
        a: "Computer Processing Unit",
        b: "Computer Principle Unit",
        c: "Central Processing Unit",
        d: "Control Processing Unit",
        ans: "ans3"
    },
    {
        question: "Q5: Which of the following computer language is written in binary codes only?",
        a: "pascal",
        b: "machine language",
        c: "C",
        d: "C#",
        ans: "ans2"
    },
    {
        question: "Q6: Which of the following language does the computer understand?",
        a: "Computer understands only C Language",
        b: "Computer understands only Assembly Language",
        c: "Computer understands only Binary Language",
        d: "Computer understands only BASIC",
        ans: "ans3"
    },
    {
        question: "Q7: Which of the following is the smallest unit of data in a computer?",
        a: "Bit",
        b: "KB",
        c: "Nibble",
        d: "Byte",
        ans: "ans1"
    },
    {
        question: "Q8: Which of the following is not a type of computer code?",
        a: "EDIC",
        b: "ASCII",
        c: "BCD",
        d: "EBCDIC",
        ans: "ans1"
    },
    {
        question: "Q9: Which of the following is designed to control the operations of a computer?",
        a: "User",
        b: "Application Software",
        c: "System Software",
        d: "Utility Software",
        ans: "ans3"
    },
    {
        question: "Q10: Which of the following are physical devices of a computer?",
        a: "Hardware",
        b: "Software",
        c: "System Software",
        d: "Package",
        ans: "ans1"
    }
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();


const getCheckAnser = () => {
    let answer;

    // return id of which option selected by user
    answers.forEach((curruntAnsElm) => {
        if (curruntAnsElm.checked) {
            answer = curruntAnsElm.id;
        }
    });

    return answer;
};

const deselectAll = () => {
    answers.forEach((curruntAnsElm) => {
        curruntAnsElm.checked = false;
    });
}

submit.addEventListener("click", () => {

    const checkAnswer = getCheckAnser();
    console.log(checkAnswer);

    if (checkAnswer) {

        if (checkAnswer === quizDB[questionCount].ans) {
            score++;
        };

        // automatic checked radio are remove by deselectAll function
        deselectAll();

        questionCount++;

        if (questionCount < quizDB.length) {
            loadQuestion();
        } else {

            showScore.innerHTML = `

            <h3> Your Scored ${score}/${quizDB.length}</h3>
            <button class="btn" onclick="location.reload()">Repeat</button>
        `

            showScore.classList.remove("scoreArea");
        }
    }


});
