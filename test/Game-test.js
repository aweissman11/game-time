// Game-test.js
const { assert } = require('chai');
const Game = require('../lib/Game');

const ctx = {
  canvas: {
    width: 600,
    height: 600
  }
}



describe('Game', () => {
  it('should end the game if blocks collides with wall', () => {
    const game = new Game(ctx);
  })

  it('should have properties', () => {
    const game = new Game(ctx);

    assert.equal(game.lives, 5);
    assert.equal(game.level, 1);
    assert.equal(game.spotsLeft, 6);
    assert.equal(game.gameSpeed, 1);
    assert.equal(game.points, 0);
  })

  it('should end game', () => {
    const game = new Game(ctx);

    game.endGame();
    assert.equal(game.gameOver, true);
  })

  it('should lose a life on collision with a car', () => {
    const game = new Game(ctx);

    game.yellowCars[0].x = 100;
    game.yellowCars[0].y = 100;
    game.frog[0].x = 100;    
    game.frog[0].y = 100;    
    game.frogCollision(game.yellowCars);
    assert.equal(game.lives, 4);
  })

  it('should lose a life if it lands on water', () => {
    const game = new Game(ctx);

    game.frog[0].x = 140;
    game.frog[0].y = 230;
    game.frogLanding();
    assert.equal(game.lives, 4);


  })

  it('should earn 100 points if frog lands in right spot at the top', () => {
    const game = new Game(ctx);

    game.frog[0].x = 49;
    game.frog[0].y = 7;
    game.frogLanding();

    assert.equal(game.points, 100);
  })

})



















