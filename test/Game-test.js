// Game-test.js
const { assert } = require('chai');
const Game = require('../lib/Game');

const ctx = {
  canvas: {
    width: 600,
    height: 600,
  }
};

describe('Game', () => {
  let game;
  beforeEach(() => {
    game = new Game(ctx);
  });

  it('should end the game if blocks collides with wall', () => {
  });

  it('should have properties', () => {
    assert.equal(game.lives, 5);
    assert.equal(game.level, 1);
    assert.equal(game.spotsLeft, 6);
    assert.equal(game.gameSpeed, 1);
    assert.equal(game.points, 0);
  });

  it('should end game', () => {
    game.endGame();
    assert.equal(game.gameOver, true);
  });

  it('should lose a life on collision with a car', () => {
    game.yellowCars[0].x = 100;
    game.yellowCars[0].y = 100;
    game.frog[0].x = 100;    
    game.frog[0].y = 100;    
    game.frogCollision(game.yellowCars);
    assert.equal(game.lives, 4);
  });

  it('should lose a life if it lands on water', () => {
    game.frog[0].x = 140;
    game.frog[0].y = 230;
    game.frogLanding();
    assert.equal(game.lives, 4);
  });

  it('should earn 100 points if frog lands in right spot at the top', () => {
    game.frog[0].x = 49;
    game.frog[0].y = 7;
    game.frogLanding();
    assert.equal(game.points, 100);
  });

  it('should always start a new game fresh', () => {
    game.lives = 2;
    game.points = 100;
    game.level = 4;

    game.newGame();
    assert.equal(game.lives, 5);
    assert.equal(game.points, 0);
    assert.equal(game.level, 1);
  });

  it('should check if you are out of lives and end the game if you are', () => {
    assert.equal(game.gameOver, false);
    game.checkLives();
    assert.equal(game.gameOver, false);
    game.lives = 0;
    game.checkLives();
    assert.equal(game.gameOver, true);
  });

  it('should be able to pause', () => {
    assert.equal(game.paused, false);
    game.togglePause();
    assert.equal(game.paused, true);
  });
});