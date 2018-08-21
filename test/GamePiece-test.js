// GamePiece-test.js
const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece');

describe('GamePiece', () => {
  let gamepiece;

  beforeEach(() => {
    gamepiece = new GamePiece(30, 30, 10, 10, 'green');    
  })
  it('should take properties', () => {
    //Setup
    //Execution

    //Assertion
    assert.deepEqual(gamepiece, {
      x: 30,
      y: 30,
      height: 10,
      width: 10,
      color: 'green',
      dx: 0,
      dy: 0,
      dxv: 1,
      dyv: 1
    })
    //Tear Down
  })
  it('should collide with a second gamepiece that occupies the same space', () => {
    //Setup
    const gamepiece2 = new GamePiece(35, 35, 10, 10, 'red');
    
    //Execution
    const isColliding = gamepiece.isCollidingWith(gamepiece2);
    assert.equal(isColliding, true)
    //Assertion
  })
  it('should not collide with a second gamepiece that does not occupy the same space', () => {
    //Setup
    const gamepiece2 = new GamePiece(55, 55, 10, 10, 'red');
    
    //Execution
    const isColliding = gamepiece.isCollidingWith(gamepiece2);
    assert.equal(isColliding, false)
    //Assertion
  })
  it('should collide with walls', () => {
    const leftWall = new GamePiece(-10, 10, 10, 10, 'red');
    const rightWall = new GamePiece(610, 10, 10, 10, 'red');
    const cieling = new GamePiece(10, -10, 10, 10, 'red');
    const floor = new GamePiece(10, 610, 10, 10, 'red');

    const isCollidingLeft = leftWall.isCollidingWithWall(600, 600);
    const isCollidingRight = rightWall.isCollidingWithWall(600, 600);
    const isCollidingTop = cieling.isCollidingWithWall(600, 600);
    const isCollidingBottom = floor.isCollidingWithWall(600, 600);

    assert.equal(isCollidingLeft, true);
    assert.equal(isCollidingRight, true);
    assert.equal(isCollidingTop, true);
    assert.equal(isCollidingBottom, true);
  })
  it('should only collide with walls if it hits them', () => {
    const isNotColliding = gamepiece.isCollidingWithWall(600, 600);

    assert.equal(isNotColliding, false);
  })
  it('should be able to move', () => {})
  it('should be able to changeDirection', () => {})
})

















