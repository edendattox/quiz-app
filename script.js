const Questions = [
  {
    question: "What is the name of Draco Malfoy's son?",
    choice1: "Scorpius",
    choice2: "Lucius",
    choice3: "Diego",
    choice4: "Severus",
    ans: "ans1",
  },

  {
    question: "What creature does Dumbledore have as a pet?",
    choice1: "Efreet",
    choice2: "Fey",
    choice3: "Troll",
    choice4: "Phoenix",
    ans: "ans4",
  },

  {
    question: "What is Voldemort's final horcrux?",
    choice1: "A mirror",
    choice2: "A snake",
    choice3: "A brooch",
    choice4: "Harry Potter",
    ans: "ans2",
  },

  {
    question:
      "Who takes over as headmaster of Hogwarts after Dumbledore's death?",
    choice1: "Voldemort",
    choice2: "Narcissa Black",
    choice3: "Professor Trelawny",
    choice4: "Professor Snape",
    ans: "ans4",
  },

  {
    question:
      "Who killed Deatheater Antonin Dolohov during the Battle of Hogwarts?",
    choice1: "Professor Flitwick",
    choice2: "Ron Weasley",
    choice3: "Falling Debris",
    choice4: "A Troll",
    ans: "ans1",
  },
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
  const questionList = Questions[questionCount];

  question.innerText = questionList.question;

  option1.innerText = questionList.choice1;
  option2.innerText = questionList.choice2;
  option3.innerText = questionList.choice3;
  option4.innerText = questionList.choice4;
};

loadQuestion();

const getCheckedAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach((curAnsElem) => curAnsElem.checked = false);
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckedAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer === Questions[questionCount].ans) {
    score++;
  };

  questionCount++;
  deselectAll();

  if (questionCount < Questions.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
    <h3> You Scored ${score}/${Questions.length}</h3>
    <button class="btn" onclick="location.reload()">Play again </button>
    `;

    showScore.classList.remove('scoreArea');
  }
});
