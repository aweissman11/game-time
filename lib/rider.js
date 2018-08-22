const Block = require('./Block');

// extend GamePiece class
module.exports = class Rider extends Block {
  constructor(x, y, height, width, color, borderColor) {
    // invoke parent class constructor
    super(x, y, height, width, color, borderColor);

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