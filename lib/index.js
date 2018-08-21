const Game = require('./Game');

const canvas = document.querySelector('#game');

const ctx = canvas.getContext('2d');
let game = new Game(ctx);

const startGame = document.querySelector('.start');

const lives = document.querySelector('.lives');
const spots = document.querySelector('.spots');
const level = document.querySelector('.level');
const points = document.querySelector('.points');
const startDiv = document.querySelector('.game-btn')



// Start animation loop
window.requestAnimationFrame(gameLoop);

function gameLoop () {

  game.checkLives();

  if (game.isOver()) {
    console.log('Game Over from Index');
    ctx.font = "80px Arial";
    ctx.fillText("Game Over", 30, 300);
    ctx.fillStyle = "red";
    startGame.style.visibility = "visible";
    startDiv.style.visibility = "visible";
    canvas.style.visibility = "hidden"
    game = new Game(ctx);


  } else if (game.paused) {
    // Game is paused;
    ctx.font = "120px Arial";
    ctx.fillText("Paused", 90, 300);
    ctx.fillStyle = "blue";

  } else {
    // clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw this frame
    game.animate();
  }

  level.innerHTML = game.returnLevel();
  points.innerHTML = game.returnPoints();
  lives.innerHTML = game.returnLives();
  spots.innerHTML = game.returnSpotsLeft();

  // prepare to draw next frame



  if (game.isOver()) {
    //gameOver
  } else {
    window.requestAnimationFrame(gameLoop)
    
  }
}

// Add key press event handler
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);
startDiv.addEventListener('click', startTheGame)

function handleKeyDown(e) {
  e.preventDefault();
  game.handleKeyDown(e);
}

function handleKeyUp(e) {
  e.preventDefault();
  game.handleKeyUp(e);
}

function updateGameInfo() {
  game.updateGameInfo();
}

function startTheGame(e) {
  startGame.style.visibility = "hidden";
  startDiv.style.visibility = "hidden";
  canvas.style.visibility = "visible"
}

