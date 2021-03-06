const Game = require('./Game');
const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const gameOverScore = document.querySelector('.game-over');
const gameScore = document.querySelector('.score');
const level = document.querySelector('.level');
const lives = document.querySelector('.lives');
const points = document.querySelector('.points');
const startDiv = document.querySelector('.game-btn');
let game = new Game(ctx);

window.requestAnimationFrame(gameLoop);

function gameLoop () {
  game.checkLives();
  if (game.isOver()) {
    ctx.font = "80px Arial";
    ctx.fillText("Game Over", 30, 300);
    ctx.fillStyle = "red";
    startDiv.style.visibility = "visible";
    canvas.style.visibility = "hidden";
    gameOverScore.style.visibility = "visible";
    gameScore.innerHTML = game.points;    
    game = new Game(ctx);
  } else if (game.paused) {
    ctx.font = "120px Arial";
    ctx.fillText("Paused", 90, 300);
    ctx.fillStyle = "#27d50b";
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.animate();
  }
  level.innerHTML = game.returnLevel();
  points.innerHTML = game.returnPoints();
  lives.innerHTML = game.returnLives();
  window.requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);
startDiv.addEventListener('click', startTheGame);

function handleKeyDown(e) {
  e.preventDefault();
  if (!game.paused) {
    game.handleKeyDown(e);
  }
}

function handleKeyUp(e) {
  e.preventDefault();
  if (!game.paused) {
    game.handleKeyUp(e);
  }
}

function startTheGame() {
  game.newGame();
  startDiv.style.visibility = "hidden";
  canvas.style.visibility = "visible";
  gameOverScore.style.visibility = "hidden";
}