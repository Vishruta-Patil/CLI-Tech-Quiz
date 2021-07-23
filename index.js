const readlineSync = require('readline-sync');
const chalk = require('chalk');
const username = readlineSync.question(chalk.yellowBright("What is Your good name? "));
console.log(chalk.yellowBright("WELCOME" + " " + username) + "\n" + chalk.bold.green("Lets Play the TECH Quiz!!!\n"));
console.log(chalk.black.bgYellowBright("  Get all questions right and prove that you are Tech Enthusiast  \n"));


var questionList = [
  {
    question: "What technology is used to record cryptocurrency transactions?\n (a) Digital wallet\n (b) Mining\n (c) Blockchain\n (d) Token\nYour Answer: ",
    answer: "Blockchain"
  },

  {
    question: "What tool would you use to reduce the digital image size?\n (a) Filter\n (b) Brush\n (c) Rotate\n (d) Crop\nYour Answer: ",
    answer: "Crop"
  },

  {
    question: "Which tech buzzword is closely related to Artificial Intelligence (AI)?\n (a) Virtual reality\n (b) Machine learning\n (c) Cryptocurrency\n (d) Microservices\nYour Answer: ",
    answer: "Machine learning"
  },
  
  {
    question: "Which computer language is the most widely used?\n (a) C#\n (b) Swift\n (c) PHP\n (d) Java\nYour Answer: ",
    answer: "Java"
  },

  {
    question: "What technology is used to make telephone calls over the Internet possible?\n (a) Bluetooth\n (b) Ethernet\n (c) NFC\n (d) VoIP\nYour Answer: ",
    answer: "VoIP"
  }
]


var scoreList = [
  {
    name: "Varad",
    name_score: 2
  },
  {
    name: "saloni",
    name_score: 3
  }
]


var score = 0;

function quiz(question,answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer == answer) {
    score+=1;
    console.log(chalk.black.bold.bgGreen("\n  You are Right  ")) ;
    console.log(">>>> Your Current Score is ",score)
    
  }
  else {
    console.log(chalk.white.bold.bgRedBright("\n  You are Wrong  "));
    console.log("Correct answer: ",answer,"\n>>>> Your current Score is ",score);
  }
}


function playGame() {
  for (var i=0;i<questionList.length;i++) {
    quiz(questionList[i].question,questionList[i].answer); 
    console.log(chalk.yellow("---------------------------------------------------------------\n"))
  }
  console.log("\nYour Score is ", chalk.black.bold.bgYellowBright(" ",score," "));
}

playGame();


for (var j=0;j<scoreList.length;j++) {
  if (score>scoreList[j].name_score) {
    console.log("Congratulation!!! " + username + " You have scored Highest!!!!!\nSend Me the Screenshot so that I can update the high score\n")
    break;
  }
}

var playAgain = readlineSync.keyInYN("Do you want to play quiz again? ")
if (playAgain) {
  console.log(chalk.underline.bold.yellowBright("\nLets Play the Tech-Quiz Again"),"\n")
  score = 0
  playGame();
}
else 
  console.log(chalk.bold.yellowBright("\nThank you for playing the Tech-Quiz "));
