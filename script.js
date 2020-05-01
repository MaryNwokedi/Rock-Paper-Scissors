//Variables
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const reset = document.querySelector(".reset");
const compChoice = ['rock', 'paper', 'scissors']
const displayResult = document.querySelector(".result");
const resultDetails = document.querySelector(".result-details");


//Event listener
rock.addEventListener("click", rockFunction);
paper.addEventListener("click", paperFunction);
scissors.addEventListener("click", scissorsFunction);
reset.addEventListener("click", removeItems);


//Function

function rockFunction() {
  var num = Math.floor(Math.random() * Math.floor(compChoice.length));
  if (compChoice[num] === compChoice[0]) {
    displayResult.innerHTML = 'Draw!';
    resultDetails.innerHTML = 'Computer Chose ' + compChoice[num] + '!';
    displayResult.style.backgroundColor = "grey";
  } else if (compChoice[num] === compChoice[1]) {
    displayResult.innerHTML = 'You loose!';
    resultDetails.innerHTML = 'Computer Chose ' + compChoice[num] + '!';
    displayResult.style.backgroundColor = "red";
  } else if (compChoice[num] === compChoice[2]) {
    displayResult.innerHTML = 'You win!';
    resultDetails.innerHTML = 'Computer Chose ' + compChoice[num] + '!';
    displayResult.style.backgroundColor = "green";
  }
}

function paperFunction() {
  var num1 = Math.floor(Math.random() * Math.floor(compChoice.length));
  if (compChoice[num1] === compChoice[0]) {
    displayResult.innerHTML = 'You win!';
    resultDetails.innerHTML = 'Computer Chose ' + compChoice[num1] + '!';
    displayResult.style.backgroundColor = "green";
  } else if (compChoice[num1] === compChoice[1]) {
    displayResult.innerHTML = 'Draw!';
    resultDetails.innerHTML = 'Computer Chose ' + compChoice[num1] + '!';
    displayResult.style.backgroundColor = "grey";
  } else if (compChoice[num1] === compChoice[2]) {
    displayResult.innerHTML = 'You loose!';
    resultDetails.innerHTML = 'Computer Chose ' + compChoice[num1] + '!';
    displayResult.style.backgroundColor = "red";
  }
}

function scissorsFunction() {
  var num2 = Math.floor(Math.random() * Math.floor(compChoice.length));
  if (compChoice[num2] === compChoice[0]) {
    displayResult.innerHTML = 'You loose!';
    resultDetails.innerHTML = 'Computer Chose ' + compChoice[num2] + '!';
    displayResult.style.backgroundColor = "red";
  } else if (compChoice[num2] === compChoice[1]) {
    displayResult.innerHTML = 'You win!';
    resultDetails.innerHTML = 'Computer Chose ' + compChoice[num2] + '!';
    displayResult.style.backgroundColor = "green";
  } else if (compChoice[num2] === compChoice[2]) {
    displayResult.innerHTML = 'You Draw!';
    resultDetails.innerHTML = 'Computer Chose ' + compChoice[num2] + '!';
    displayResult.style.backgroundColor = "grey";
  }
}

function removeItems() {
  displayResult.innerHTML = '';
  resultDetails.innerHTML = '';
}