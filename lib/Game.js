// Fix frog so that it is an object, not an array of one object.



const Block = require('./Block');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    const { canvas } = this.ctx;

    this.blocks = [
      new Block(30, 493, 20, 20, 'yellow', 'black'),
      new Block(130, 493, 20, 20, 'yellow', 'black'),
      new Block(230, 493, 20, 20, 'yellow', 'black'),
      new Block(430, 493, 20, 20, 'yellow', 'black'),
      new Block(530, 493, 20, 20, 'yellow', 'black'),
    ];

    this.blocks1 = [
      new Block(650, 439.5, 20, 20, 'red', 'black'),
      new Block(450, 439.5, 20, 20, 'red', 'black'),
      new Block(250, 439.5, 20, 20, 'red', 'black'),
      // new Block(650, 420, 20, 20, 'red', 'black'),
    ];

    this.blocks2 = [
      new Block(650, 439.5, 20, 20, 'red', 'black'),
      new Block(450, 439.5, 20, 20, 'red', 'black'),
      new Block(250, 439.5, 20, 20, 'red', 'black'),
      // new Block(650, 420, 20, 20, 'red', 'black'),
    ];

    this.badGuys1 = [
      new Block(630, 70, 20, 20, 'orange', 'black'),
      new Block(730, 170, 20, 20, 'orange', 'black'),
      new Block(830, 270, 20, 20, 'orange', 'black'),
    ];

    this.badGuys2 = [
      new Block(490, 170, 20, 20, 'purple', 'black'),
      new Block(590, 70, 20, 20, 'purple', 'black'),
    ];

    this.frog = [
      new Block((canvas.width / 2) - 10, canvas.height - 53, 20, 20, 'blue', 'green'),
    ]

  }

  // draw one frame of our game
  animate() {
    const { canvas } = this.ctx;
    this.controlFrog();
    this.drawCars(this.blocks, 1.5);
    this.drawCars(this.blocks1, (-1));
    this.drawCars(this.badGuys1, 1);
    this.drawCars(this.badGuys2, -.75);
  }

  drawCars(arr, speed) {
    arr.forEach( block => {
      block.dx = speed;
      if (block.x >= 700) {
        block.x = -30;
      } else if (block.x <= -100) {
        block.x = 650;
      }

      if (block.isCollidingWith(this.frog[0])) {
        console.log('collision!!');
        block.move();
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

      this.blocks.forEach( guy => {
        if (guy.isCollidingWith(thisFrog)) {
          console.log('BANG!!');
          console.log(canvas);

          thisFrog.x = canvas.width / 2 - 10;
          thisFrog.y = canvas.height - 53;
        }
      })

      this.blocks1.forEach( guy => {
        if (guy.isCollidingWith(thisFrog)) {
          console.log('BANG!!');
          console.log(canvas);

          thisFrog.x = canvas.width / 2 - 10;
          thisFrog.y = canvas.height - 53;
        }
      })

      this.badGuys1.forEach( guy => {
        if (guy.isCollidingWith(thisFrog)) {
          console.log('BANG!!');
          console.log(canvas);

          thisFrog.x = canvas.width / 2 - 10;
          thisFrog.y = canvas.height - 53;
        }
      })
      this.badGuys2.forEach( guy => {
        if (guy.isCollidingWith(thisFrog)) {
          console.log('BANG!!');
          console.log(canvas);

          thisFrog.x = canvas.width / 2 - 10;
          thisFrog.y = canvas.height - 53;
        }
      })

    })
  }

  frogCollision(arr) {
    arr.forEach( guy => {
      if (guy.isCollidingWith(thisFrog)) {
        console.log('BANG!!');
        console.log(canvas);

        thisFrog.x = canvas.width / 2 - 10;
        thisFrog.y = canvas.height - 53;
      }
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