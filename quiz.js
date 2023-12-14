let htmlQuiz = [
    {
      question: "What does HTML stand for _______________ ?",
      options: [
        "Hyper Text Markup Language",
        "Hot Mail",
        "How to Make Lasagna",
        "None of these",
      ],
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      question: "How many tags are in a regular element?",
      options: ["2 tag", "1 tag", "3 tag", "4 tag"],
      correctAnswer: "2 tag",
    },
    {
      question:
        "What is the difference between an opening tag and a closing tag?",
      options: [
        "Opening tag has a / in front",
        "Closing tag has a / in front",
        "There is no difference",
        "There is major difference",
      ],
      correctAnswer: "Closing tag has a / in front",
    },
    {
      question: "< br / > What type of tag is this?",
      options: ["Break tag", "A broken one", "An opening tag", "An spacing tag"],
      correctAnswer: "Break tag",
    },
    {
      question: "< body > Is this an opening tag or a closing tag?",
      options: [
        "Opening",
        "Closing",
        "Opening n Closing",
        "Both Opening n Closing",
      ],
      correctAnswer: "Opening",
    },
    {
      question: "< / body > Is this an opening tag or a closing tag?",
      options: [
        "Opening",
        "Closing",
        "Opening n Closing",
        "Both Opening n Closing",
      ],
      correctAnswer: "Closing",
    },
    {
      question: "Where is the meta tag only found?",
      options: [
        "The last page",
        "The home page",
        "The second page",
        "None of these",
      ],
      correctAnswer: "The home page",
    },
  
    {
      question: "Which of the following is an example of an empty element?",
      options: ["< img / >", "< img > < / img >", "< / img >", "None of these"],
      correctAnswer: "< img / >",
    },
    {
      question: "What should values always be enclosed in?",
      options: ["Quotation marks", "Commas", "Parenthesis", "< >"],
      correctAnswer: "Quotation marks",
    },
    {
      question: "Where do all items for the same website need to be saved?",
      options: [
        "In the same folder",
        "Where ever is fine",
        "In different folders",
        "In new files",
      ],
      correctAnswer: "In the same folder",
    },
  
    {
      question:
        "What is always a welcome page, and explains the purpose or topic of the site?",
      options: ["Page 4", "Hompage", "Table of contents", "None of these"],
      correctAnswer: "Homepage",
    },
    {
      question: "What does View Source do?",
      options: [
        "Nothing",
        "Brings up a note pad with the HTML code already used for the site.",
        "Open a new website.",
        "Both B and C",
      ],
      correctAnswer:
        "Brings up a note pad with the HTML code already used for the site.",
    },
  ];
  
  
  let quizDisplay = document.getElementById("quizDisplay");
  let currentQuestionNumber = document.getElementById("currentQuestionNumber");
  let totalQuestionNumber = document.getElementById("totalQuestionNumber");
  
  let displayQuestion = document.getElementById("displayQuestion");
  let optionParent = document.getElementById("optionParent");
  let resultDisplay = document.getElementById("resultDisplay");
  let percentage = document.getElementById("percentage");
  let indexValue = 0;
  let marks = 0;
  
  function showQuestion() {
    displayQuestion.innerHTML = htmlQuiz[indexValue].question;
  
    for (var i = 0; i < htmlQuiz[indexValue].options.length; i++) {
      var optionValue = htmlQuiz[indexValue].options[i];
      var correctValue = htmlQuiz[indexValue].correctAnswer;
  
      optionParent.innerHTML += `<button onclick="checkAnswer(${optionValue},${correctValue})"
            class="btn p-3 text-white rounded-pill bg-danger m-2">${htmlQuiz[indexValue].options[i]}
            </button>`;
    }
    totalQuestionNumber.innerHTML = htmlQuiz.length;
    currentQuestionNumber.innerHTML = indexValue + 1;
  }
  showQuestion();
  
  function checkAnswer(optionValue, correctValue) {
    if (optionValue === correctValue) {
      marks++;
      console.log(marks);
    } else {
      nextQuestion();
    }
  }
  
  function nextQuestion() {
    optionParent.innerHTML = "";
    if (indexValue + 1 === htmlQuiz.length) {
      resultDisplay.style.display = "block";
      quizDisplay.style.display = "none";
  
      let totalPercentage = (marks / htmlQuiz.length) * 100;
      percentage.innerHTML = totalPercentage;
    } else {
      indexValue++;
  
      showQuestion();
    }
  }
  