const Block = require('./Block');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    const { canvas } = this.ctx;

    this.blocks = [
      new Block(-30, 320, 20, 20, 'red', 'black'),
      new Block(-230, 320, 20, 20, 'red', 'black'),
      new Block(-430, 320, 20, 20, 'red', 'black'),
    ];

    this.blocks1 = [
      new Block(-30, 420, 20, 20, 'red', 'black'),
      new Block(-130, 420, 20, 20, 'red', 'black'),
      new Block(-440, 420, 20, 20, 'red', 'black'),
      new Block(-520, 420, 20, 20, 'red', 'black'),
    ];

    this.badGuys1 = [
      new Block(630, 370, 20, 20, 'red', 'black'),
      new Block(730, 370, 20, 20, 'red', 'black'),
      new Block(830, 370, 20, 20, 'red', 'black'),
    ];

    this.badGuys2 = [
      new Block(890, 470, 20, 20, 'red', 'black'),
      new Block(990, 470, 20, 20, 'red', 'black'),
    ];

    this.frog = [
      new Block(canvas.width / 2, canvas.height - 30, 20, 20, 'green', 'black'),
    ]

  }

  drawCars() {
    const { canvas } = this.ctx;

    this.blocks.forEach( block => {
      block.dx = 1;
      if (block.x === 650) {
        block.x = -30;
      }

      if (block.isCollidingWith(this.frog[0])) {
        console.log('collision!!');
        block.move();
      } 
      
      block.move();
      block.draw(this.ctx);
    })

    this.blocks1.forEach( block => {
      block.dx = 2;
      if (block.x === 650) {
        block.x = -30;
      }

      block.move();
      block.draw(this.ctx);
    })

    this.badGuys1.forEach( block => {
      block.dx = -1;
      if (block.x === -50) {
        block.x = 650;
      }

      block.move();
      block.draw(this.ctx);
    })

    this.badGuys2.forEach( block => {
      block.dx = -3;
      if (block.x === -70) {
        block.x = 650;
      }

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
      const { canvas } = this.ctx;

      const direction = {
      dx: 0,
      dy: 0
    };

    if (e.key === 'ArrowRight' && this.frog[0].x < (canvas.width - 60)) {
      this.frog[0].x += 50;

    } else if (e.key === 'ArrowLeft' && this.frog[0].x > 50) {
      this.frog[0].x -= 50;

    } else if (e.key === 'ArrowDown' && this.frog[0].y < (canvas.height - 60)) {
      this.frog[0].y += 50;

    } else if (e.key === 'ArrowUp' && this.frog[0].y > 60) {
      this.frog[0].y -= 50;
    } 

    // this.frog.forEach( block => block.changeDirection(direction) );
  }

}