const Block = require('./Block');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    this.blocks = [
      new Block(-20, 20, 10, 10, 'red', 'black'),
      new Block(-20, 80, 10, 10, 'red', 'black'),
      new Block(-20, 140, 10, 10, 'red', 'black'),
      new Block(-20, 200, 10, 10, 'red', 'black'),
      new Block(-20, 260, 10, 10, 'red', 'black'),
      new Block(-20, 320, 10, 10, 'red', 'black'),
    ];

    this.badGuys1 = [
      new Block(620, 50, 10, 10, 'red', 'black'),
      new Block(620, 110, 10, 10, 'red', 'black'),
      new Block(620, 170, 10, 10, 'red', 'black'),
      new Block(620, 230, 10, 10, 'red', 'black'),
      new Block(620, 290, 10, 10, 'red', 'black'),
      new Block(620, 350, 10, 10, 'red', 'black')
    ];

    this.frog = [
      new Block(140, 570, 20, 20, 'blue', 'green'),
    ]
  }

  // draw one frame of our game
  animate() {
    const { canvas } = this.ctx;

    this.blocks.forEach( block => {
    block.dx = 1;

    if (block.isCollidingWith(this.frog[0])) {
        console.log('collision!!');
      } else {
        block.move();
      }
      
      block.draw(this.ctx);
    })

    this.badGuys1.forEach( block => {
    block.dx = -.5;

    if (block.isCollidingWith(this.frog[0])) {
        console.log('collision!!');
      } else {
        block.move();
      }
      
      block.draw(this.ctx);
    })

    this.frog.forEach( block => {
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

    this.frog.forEach( block => block.changeDirection(direction) );
  }

}