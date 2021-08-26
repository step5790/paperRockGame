"use strict";
let winner;
let userChoice;
let computerChoice;
const choices = ["rock", "paper", "scissors"];

start();

function start() {
  console.log("start");
  getPlayerChoice();
  // document.querySelector(".play").addEventListener("click", getPlayerChoice);
}

function getPlayerChoice() {
  console.log("getPlayerChoice");
  document
    .querySelector(".rock")
    .addEventListener("click", makeRandomComputerChoice);
  document
    .querySelector(".paper")
    .addEventListener("click", makeRandomComputerChoice);
  document
    .querySelector(".scissors")
    .addEventListener("click", makeRandomComputerChoice);
}

function makeRandomComputerChoice() {
  console.log("makeRandomComputerChoice");
  userChoice = this.classList.value;
  console.log("user choose " + userChoice);
  let randomNumber = Math.floor(Math.random() * 3);
  computerChoice = choices[randomNumber];
  console.log("computer choose " + computerChoice);
  showAnimations();
}

function showAnimations() {
  console.log("showAnimations");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  document
    .querySelector("#player1")
    .addEventListener("animationend", removeShake);
  document
    .querySelector("#player2")
    .addEventListener("animationend", removeShake);
  determineWinner();
}

function removeShake() {
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player1").classList.value = "";
  document.querySelector("#player1").offsetheight;
  document.querySelector("#player1").classList.add("player");
  document.querySelector("#player1").classList.add(userChoice);

  document.querySelector("#player2").classList.remove("shake");
  document.querySelector("#player2").classList.value = "";
  document.querySelector.offsetheight;
  document.querySelector("#player2").classList.add("player");
  document.querySelector("#player2").classList.add(computerChoice);
  console.log("userChoice");
}

function determineWinner() {
  console.log("determineWinner");

  if (winner === "rockscissors") {
    showLose();
  } else if (winner === "user") {
    showWin();
  } else {
    showDraw();
  }
}

function showWin() {
  console.log("showWin");
}

function showLose() {
  console.log("showLose");
}

function showDraw() {
  console.log("showDraw");
}
