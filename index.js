var readlineSync = require('readline-sync');
var chalk = require('chalk');

const log = console.log;
var username = readlineSync.question("May I know your name? ");

log(chalk.blue(("👋Ｗｅｌｃｏｍｅ‌🙋")), username, "!!")

var score = 0;

//play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLocaleLowerCase() === answer) {
    score = score + 1;
    console.log(chalk.green("Yay😉!! I scored: ") + chalk.white(score));

  } else {
    score = score - 1;
    console.log(chalk.red("oops😕!! I was not able to answer this question: ") + chalk.white(score));
  }
}

var questions = [
  {
    question: "Where do I live? ",
    answer: "ahmedabad"
  },
  {
    question: "My favorite superhero would be? ",
    answer: "dad"
  },
  {
    question: "Where do I work? ",
    answer: "ciesto solutions"
  },
  {
    question: "Where is my hobby? ",
    answer: "coding"
  },
  {
    question: "Which is my favourite place",
    answer: "ahmedabad"
  },
  {
    question: "Which is my favourite show? ",
    answer: "tarak mehta ka ooltah chasma"
  },
  {
    question: "Which Language do i know in coding",
    answer: "htmlcssjs"
  },
  {
    question: "Which Language I want to learn  in coding",
    answer: "reacjsnodejs"
  },
  {
    question: "Which is favourite food of Nishtha",
    answer: "panipuri"
  },
  {
    question: "What she has done in Graduation",
    answer: "bca"
  }];

function game() {
  for (i = 0; i < questions.length; i++) {
    var newQuestion = questions[i];
    play(newQuestion.question, newQuestion.answer);
  }
}
game();

console.log("-------------------------------------")


console.log(chalk.underline.yellow("Hurrah😁!! You score is"), score)

