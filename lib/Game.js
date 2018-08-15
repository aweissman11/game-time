const Block = require('./Block');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    this.blocks = [
      new Block(20, 20, 10, 10, 'red', 'black'),
      new Block(40, 50, 10, 10, 'red', 'black'),
      new Block(60, 80, 10, 10, 'red', 'black'),
      new Block(80, 110, 10, 10, 'red', 'black'),
      new Block(100, 140, 10, 10, 'red', 'black'),
      new Block(120, 170, 10, 10, 'red', 'black'),
      new Block(140, 200, 10, 10, 'red', 'black'),
      new Block(160, 230, 10, 10, 'red', 'black'),
      new Block(180, 260, 10, 10, 'red', 'black'),
      new Block(200, 290, 10, 10, 'red', 'black'),
      new Block(220, 320, 10, 10, 'red', 'black'),
      new Block(240, 350, 10, 10, 'red', 'black')
    ];

    this.blocks2 = [
      new Block(140, 570, 20, 20, 'blue', 'green'),
    ]
  }

  // draw one frame of our game
  animate() {
    const { canvas } = this.ctx;

    this.blocks.forEach( block => {
    block.dx = 1;
    if (block.isCollidingWith(this.blocks2[0])) {
        console.log('collision!!');
      } else {
        block.move();
      }
      
      block.draw(this.ctx);
    })

    this.blocks2.forEach( block => {
      block.move();
      block.draw(this.ctx);
    })

  }

  endGame() {
    this.gameOver = true;
  }

  isOver() {
    return this.gameOver;
  }

  togglePause() {
    this.paused = !this.paused;
  }

  handleKeyPress(e) {
      const direction = {
      dx: 0,
      dy: 0
    };

    if (e.key === 'ArrowRight') {
      console.log('right');
      direction.dx += 4;

    } else if (e.key === 'ArrowLeft') {
      console.log('left');
      direction.dx = -4;

    } else if (e.key === 'ArrowDown') {
      console.log('down');
      direction.dy = 4;

    } else if (e.key === 'ArrowUp') {
      console.log('up');
      direction.dy = -4;
    } 

    this.blocks2.forEach( block => block.changeDirection(direction) );
  }

}