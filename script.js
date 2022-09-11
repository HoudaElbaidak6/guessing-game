const radioButtons = document.querySelectorAll('input[name="lvl"]');
let instructions = document.getElementById("instructions");
let button = document.querySelector("button");
let essays = document.getElementById("chance");
let userGuess = document.getElementById("input");
let result = document.getElementById("results");
let audios=document.querySelectorAll("audio")
let numMax, numMin, chancenbr, nombreAleatoire;

function selection(min, max, chance) {
  instructions.textContent = `Enter a number btw ${min} and ${max}`;
  essays.textContent = `You have ${chance} chances to guess the right number`;
  let randomNumber = Math.floor(Math.random() * max) + min;
  numMin = min;
  numMax = max;
  chancenbr = chance;
  nombreAleatoire = randomNumber;
  result.innerText = "";
  nombreTrouve = false;
}

function easylvl() {
  selection(1, 10, 3);
}
function mlvl() {
  selection(1, 100, 5);
}
function hardlvl() {
  selection(1, 1000, 10);
}

function gameOver() {
  document.getElementById("gamArea").style.display = "none";
  document.getElementById("restart").style.display = "block";
}
function Restart() {
  selection();
  document.getElementById("gamArea").style.display = "block";
  document.getElementById("restart").style.display = "none";
}

function guessing() {
  console.log(nombreAleatoire);
  let userGuessValue = Number(userGuess.value);

  if (userGuessValue > nombreAleatoire) {
    result.innerText = `${userGuessValue} is high , enter a lower number`;
    chancenbr--;
  } else if (userGuessValue === nombreAleatoire) {
    result.innerText = "Good job !! ";
    result.style.color="green"
    nombreTrouve = true;
  } else {
    result.innerText = `${userGuessValue} is low , enter a higher number`;
    chancenbr--;
  }

  if (chancenbr === 0 && nombreTrouve === false) {
    result.innerText = "You lost ";
    result.style.color="red"
    audios[1].play();
    gameOver();
  }
  if (nombreTrouve === true) {
    result.innerText = "You won";
    result.style.color="green"
    audios[0].play();
    gameOver();
  }
  userGuess.value = "";
}

button.addEventListener("click", guessing);
document.getElementById("restart").addEventListener("click", Restart);
