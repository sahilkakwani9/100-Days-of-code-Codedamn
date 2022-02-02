//Questions array storing all the information about questions in json
const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];
//Global variables
let qno = 0;
let optionNo = 1;
let timer = 50;
//Function to Create the whole quiz
const constctQuiz = (optionNo) => {
  //changing the content inside the h1 using the questions array
  if (qno == 5){
    localStorage.setItem('timer', timer);
    window.location="./done.html";
  }
  document.getElementsByClassName("center")[0].innerHTML =
    questions[qno].questionText;
  //looping through the 4 option and changing its content dynamically.
  for (i = 0; i < 4; i++) {
    document.getElementsByClassName("choice")[i].innerHTML =
      questions[qno].options[i];
  }
  if (qno >= 1 && qno <= 5) {
    if (optionNo == questions[qno - 1].answer[0]) {
      document.querySelector("h3").innerHTML = "Correct!";
    }
    else{
      timer-=10;
      document.querySelector("h3").innerHTML = "Incorrect!";
    }
  }

  //incrementing the question number
  qno++;
};
//function to add timer inside the header
const addTimer = () => {
  let ele = document.getElementsByClassName("timer");
  setInterval(function () {
    ele[0].innerHTML = timer;
    if (timer != 0) {
      timer--;
    }
    if(timer <= 0){
      localStorage.setItem('timer', 0);
      window.location="./done.html";
    }
  }, 1000);
};

//adding event listeners to all the buttons and calling constrctQuiz function
// document.querySelectorAll('.choice').forEach(item => {
//     item.addEventListener('click', constctQuiz(optionNo));
//     optionNo++;
//   })

for (optionNo = 1; optionNo <= 4; optionNo++) {
  let button = document.querySelector("#btn" + optionNo);
  button.addEventListener("click", constctQuiz.bind(null, optionNo));
}

//calling these functions at the start of the webapp.
addTimer();
constctQuiz();

// let btn = document.getElementById('btn1');
// console.log(btn);
// btn.addEventListener('click',addTimer);
