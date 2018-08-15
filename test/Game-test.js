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
    const block = game.blocks[0];

    
    block.x = ctx.canvas.width;

    assert.isFalse(game.gameOver);

    game.handleBlock(block);

    assert.isTrue(game.gameOver);
  })

  it('should take properties', () => {})
  it('should end game', () => {})
  it('should collide with walls', () => {})
  it('should be able to move', () => {})
  it('should be able to changeDirection', () => {})
})