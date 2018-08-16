// Fix frog so that it is an object, not an array of one object.



const Block = require('./Block');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    const { canvas } = this.ctx;

    this.blocks = [
      new Block(-20, 20, 30, 30, 'red', 'black'),
      new Block(-20, 80, 30, 30, 'red', 'black'),
      new Block(-20, 140, 30, 30, 'red', 'black'),
      new Block(-20, 200, 30, 30, 'red', 'black'),
      new Block(-20, 260, 30, 30, 'red', 'black'),
      new Block(-20, 320, 30, 30, 'red', 'black'),
    ];

    this.badGuys1 = [
      new Block(620, 50, 30, 30, 'red', 'black'),
      new Block(620, 110, 30, 30, 'red', 'black'),
      new Block(620, 170, 30, 30, 'red', 'black'),
      new Block(620, 230, 30, 30, 'red', 'black'),
      new Block(620, 290, 30, 30, 'red', 'black'),
      new Block(620, 350, 30, 30, 'red', 'black')
    ];

    this.frog = [
      new Block((canvas.width / 2) - 10, canvas.height - 53, 20, 20, 'blue', 'green'),
    ]

  }

  drawCars() {
    const { canvas } = this.ctx;

    this.blocks.forEach( block => {
      block.dx = .5;

      if (block.isCollidingWith(this.frog[0])) {
        console.log('collision!!');
        block.move();
      } 
      
      block.move();
      block.draw(this.ctx);
    })

    this.badGuys1.forEach( block => {
      block.dx = -.25;
      
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

      this.blocks.forEach( guy => {
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
      const { canvas } = this.ctx;

      const direction = {
      dx: 0,
      dy: 0
    };

    if (e.key === 'ArrowRight' && this.frog[0].x < (canvas.width - 60)) {
      this.frog[0].x += 47;

    } else if (e.key === 'ArrowLeft' && this.frog[0].x > 50) {
      this.frog[0].x -= 47;

    } else if (e.key === 'ArrowDown' && this.frog[0].y < (canvas.height - 60)) {
      this.frog[0].y += 53.5;

    } else if (e.key === 'ArrowUp' && this.frog[0].y > 60) {
      this.frog[0].y -= 53.5;
    } 

    // this.frog.forEach( block => block.changeDirection(direction) );
  }

}