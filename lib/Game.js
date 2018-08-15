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

  drawCars() {
    const { canvas } = this.ctx;

    this.blocks.forEach( block => {
      block.dx = 1;

      if (block.isCollidingWith(this.frog[0])) {
        console.log('collision!!');
        block.move();
      } 
      
      block.move();
      block.draw(this.ctx);
    })

    this.badGuys1.forEach( block => {
      block.dx = -.5;
      
      block.move();
      block.draw(this.ctx);
    })
  }

  controlFrog() {
    const { canvas } = this.ctx;

    this.frog.forEach( block => {
      const thisFrog = this.frog[0];
      if (thisFrog.x < 600 && thisFrog.x > 0 && thisFrog.y < 600 && thisFrog.y > 0) {

        block.move();
        block.draw(this.ctx);
      }

      this.badGuys1.forEach( guy => {
        if (guy.isCollidingWith(thisFrog)) {
          console.log('BANG!!');
          console.log(canvas);

          thisFrog.x = canvas.width / 2;
          thisFrog.y = canvas.height - 30;
        }
      })

    })
  }

  // draw one frame of our game
  animate() {
    const { canvas } = this.ctx;
    this.drawCars();
    this.controlFrog();
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

  handleKeyDown(e) {
      const direction = {
      dx: 0,
      dy: 0
    };

    if (e.key === 'ArrowRight' && this.frog[0].x < 501) {
      this.frog[0].x += 10;

    } else if (e.key === 'ArrowLeft' && this.frog[0].x > 79) {
      this.frog[0].x -= 10;

    } else if (e.key === 'ArrowDown' && this.frog[0].y < 511) {
      this.frog[0].y += 10;

    } else if (e.key === 'ArrowUp' && this.frog[0].y > 30) {
      this.frog[0].y -= 10;
    } 

    // this.frog.forEach( block => block.changeDirection(direction) );
  }

}