const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Block extends GamePiece {
  constructor(x, y, height, width, color, borderColor, speed) {
    // invoke parent class constructor
    super(x, y, height, width, color);

    this.borderColor = borderColor;
    this.speed = speed;
  } 

  draw(ctx) {
    const {x, y, height, width, borderColor } = this;

    // call parent class draw function
    super.draw(ctx);

    // draw block border
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }
};