const playerEl=document.getElementById("player");
const playerChoiceEl=document.getElementById("playerChoice");
const computerEl=document.getElementById("computer");
const computerChoiceEl=document.getElementById("computerChoice");
const resultTextEl=document.getElementById("resultText");

const playerRock=document.getElementById("playerRock");
const playerPaper=document.getElementById("playerPaper");
const playerScissors=document.getElementById("playerScissors");
const playerLizard=document.getElementById("playerLizard");
const playerSpock=document.getElementById("playerSpock");

const computerRock=document.getElementById("computerRock");
const computerPaper=document.getElementById("computerPaper");
const computerScissors=document.getElementById("computerScissors");
const computerLizard=document.getElementById("computerLizard");
const computerSpock=document.getElementById("computerSpock");

const allGameIcons=document.querySelectorAll(".far");

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let computerChoice='';

//function to clear selected class from icons
function clearSelected(){
  allGameIcons.forEach((icon)=>{
    icon.classList.remove("selected");
  })
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerRandomChoice(){
  const computerChoiceNumber=getRandomInt(0,4);
  const computerChoice=choices[Object.keys(choices)[computerChoiceNumber]].name;
  console.log(computerChoiceNumber,computerChoice.toLowerCase());
  displayComputerChoice(computerChoice.toLowerCase());
}

//function to check Result
function checkresult(){
  clearSelected();
  computerRandomChoice();
}

//function to set the computer Style

function displayComputerChoice(computerChoice){
  switch(computerChoice){
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent='---Rock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent='---Paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent='---Scissors';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent='---Lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent='---Spock';
      break;
    default:
      break;
    
  }
}


//function to style th selected item
function select(playerChoice){
  checkresult();
  switch(playerChoice){
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent='---Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent='---Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent='---Scissors';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent='---Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent='---Spock';
      break;
    default:
      break;
    
  }
}

