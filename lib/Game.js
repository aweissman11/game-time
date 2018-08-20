// Fix frog so that it is an object, not an array of one object.
// Landing spots at the top.
// persist successfull frog
// Only real landing spots, otherwise reset.
// Number of lives
// Lose life on reset
// Next level if all five spots are landed on.
// speed up logs and cars on next level.


const domtest = document.querySelector('.domtest');

const Block = require('./Block');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.lives = 5;
    this.level = 1;

    const { canvas } = this.ctx;

    this.frog = [
      new Block((canvas.width / 2) - 10.5, canvas.height - 53, 20, 20, '#00CC00', 'green'),
    ]

    this.landingSpots = [
      new Block(49, 7, 30, 30, 'rgba(0, 0, 0, 0)', 'blue'),
      new Block(143, 7, 30, 30, 'rgba(0, 0, 0, 0)', 'blue'),
      new Block(237, 7, 30, 30, 'rgba(0, 0, 0, 0)', 'blue'),
      new Block(331, 7, 30, 30, 'rgba(0, 0, 0, 0)', 'blue'),
      new Block(425, 7, 30, 30, 'rgba(0, 0, 0, 0)', 'blue'),
      new Block(519, 7, 30, 30, 'rgba(0, 0, 0, 0)', 'blue'),
    ]

    this.mediumLogs = [
      new Block(0, 56.4, 20, 100, 'brown', 'yellow'),
      new Block(240, 56.4, 20, 100, 'maroon', 'yellow'),
      new Block(480, 56.4, 20, 100, 'magenta', 'yellow'),
    ];

    this.twoTurtles = [
      new Block(0, 100.2, 20, 60, 'brown', 'yellow'),
      new Block(240, 100.2, 20, 60, 'maroon', 'yellow'),
      new Block(480, 100.2, 20, 60, 'magenta', 'yellow'),
    ];

    this.bigLogs = [
      new Block(0, 145.6, 20, 140, 'brown', 'yellow'),
      new Block(240, 145.6, 20, 140, 'maroon', 'yellow'),
      new Block(480, 145.6, 20, 140, 'magenta', 'yellow'),
    ];

    this.smallLogs = [
      new Block(60, 190.2, 20, 70, 'brown', 'yellow'),
      new Block(300, 190.2, 20, 70, 'maroon', 'yellow'),
      new Block(540, 190.2, 20, 70, 'magenta', 'yellow'),
    ];

    this.threeTurtles = [
      new Block(20, 234.8, 20, 90, 'brown', 'yellow'),
      new Block(260, 234.8, 20, 90, 'maroon', 'yellow'),
      new Block(500, 234.8, 20, 90, 'magenta', 'yellow'),
    ];

    this.yellowCars = [
      new Block(30, 502.4, 20, 20, 'yellow', 'black'),
      new Block(130, 502.4, 20, 20, 'yellow', 'black'),
      new Block(230, 502.4, 20, 20, 'yellow', 'black'),
      new Block(430, 502.4, 20, 20, 'yellow', 'black'),
      new Block(530, 502.4, 20, 20, 'yellow', 'black'),
    ];

    this.redCars = [
      new Block(650, 457.8, 20, 20, 'red', 'black'),
      new Block(450, 457.8, 20, 20, 'red', 'black'),
      new Block(250, 457.8, 20, 20, 'red', 'black'),
    ];

    this.aquaCars = [
      new Block(650, 413.2, 20, 40, 'aqua', 'black'),
      new Block(450, 413.2, 20, 40, 'aqua', 'black'),
      new Block(250, 413.2, 20, 40, 'aqua', 'black'),
    ];

    this.orangeCars = [
      new Block(630, 368.6, 20, 20, 'orange', 'black'),
      new Block(730, 368.6, 20, 20, 'orange', 'black'),
      new Block(830, 368.6, 20, 20, 'orange', 'black'),
    ];

    this.purpleCars = [
      new Block(490, 324, 20, 60, 'purple', 'black'),
      new Block(290, 324, 20, 60, 'purple', 'black'),
      new Block(590, 324, 20, 60, 'purple', 'black'),
    ];

  }

  // draw one frame of our game
  animate() {
    const { canvas } = this.ctx;

    this.drawCars(this.yellowCars, 1.5);
    this.drawCars(this.redCars, (-1.75));
    this.drawCars(this.aquaCars, 1);
    this.drawCars(this.orangeCars, -1);
    this.drawCars(this.purpleCars, .75);
    
    this.drawLogs(this.threeTurtles, -1);
    this.drawLogs(this.smallLogs, 1.5);
    this.drawLogs(this.bigLogs, 1);
    this.drawLogs(this.twoTurtles, -1);
    this.drawLogs(this.mediumLogs, .75);
    
    this.drawLandingSpots(this.landingSpots);

    this.controlFrog();
  }

  drawLandingSpots(arr) {
    arr.forEach( spot => {
      spot.draw(this.ctx);
    })
  }

  drawCars(arr, speed) {
    arr.forEach( block => {
      block.dx = speed;
      if (block.x >= 700) {
        block.x = -30;
      } else if (block.x <= -100) {
        block.x = 650;
      }
      
      block.move();
      block.draw(this.ctx);
    })
  }

  drawLogs(arr, speed) {
    arr.forEach( block => {
      block.dx = speed;
      if (block.x >= 700) {
        block.x = -30;
      } else if (block.x <= -100) {
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

      this.frogCollision(this.yellowCars);
      this.frogCollision(this.redCars);
      this.frogCollision(this.aquaCars);
      this.frogCollision(this.orangeCars);
      this.frogCollision(this.purpleCars);    
    })
  }

  frogCollision(arr) {
    const { canvas } = this.ctx;
    arr.forEach( guy => {
      if (guy.isCollidingWith(this.frog[0])) {
        console.log('BANG!!');

        this.frog[0].x = canvas.width / 2 - 10;
        this.frog[0].y = canvas.height - 53;
      }
    })
  }

  frogLanding() {
    const { canvas } = this.ctx;

    let onLog = 0;
    let speed = 0;

    this.threeTurtles.forEach( log => {
      if (log.isCollidingWith(this.frog[0])) {
        console.log('frogLanding');
        onLog++;
        speed = log.dx;
      }
    })

    this.smallLogs.forEach( log => {
      if (log.isCollidingWith(this.frog[0])) {
        console.log('frogLanding');
        onLog++;
        speed = log.dx;
      }
    })

    this.bigLogs.forEach( log => {
      if (log.isCollidingWith(this.frog[0])) {
        console.log('frogLanding');
        onLog++;
        speed = log.dx;
      }
    })

    this.twoTurtles.forEach( log => {
      if (log.isCollidingWith(this.frog[0])) {
        console.log('frogLanding');
        onLog++;
        speed = log.dx;
      }
    })

    this.mediumLogs.forEach( log => {
      if (log.isCollidingWith(this.frog[0])) {
        console.log('frogLanding');
        onLog++;
        speed = log.dx;
      }
    })

    this.landingSpots.forEach( spot => {
      if (spot.isCollidingWith(this.frog[0])) {
        console.log('WIN');
        spot.color = 'green';
      }
    })


    if (onLog > 0) {
      console.log('landed');
      this.frog[0].dx = speed;
    } else if (this.frog[0].y > 260) {
      this.frog[0].dx = 0;
    } else {
      console.log('water');
      this.frog[0].x = canvas.width / 2 - 10;
      this.frog[0].y = canvas.height - 53;
      this.frog[0].dx = 0;
    }
  }

  updateGameInfo() {

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
      this.frog[0].y += 44.6;
    } else if (e.key === 'ArrowUp' && this.frog[0].y > 40) {
      this.frog[0].y -= 44.6;
    } 
  }

  handleKeyUp(e) {
      const { canvas } = this.ctx;

      const direction = {
      dx: 0,
      dy: 0
    };

    if (e.key === 'ArrowDown' && this.frog[0].y < (canvas.height - 60)) {
      console.log('DOWN');
      console.log(this.frog[0].y)
      if (this.frog[0].y < 260) {
        this.frogLanding();
      } else if (this.frog[0].y > 260) {
        this.frog[0].dx = 0;
      }     
    } else if (e.key === 'ArrowUp') {
      console.log('UP');
      console.log(this.frog[0].y)
      if (this.frog[0].y < 260) {
        this.frogLanding();
      }
    }  else if (e.key === 'ArrowRight') {
      console.log('UP');
      console.log(this.frog[0].y)
      console.log('x:', this.frog[0].x)
      if (this.frog[0].y < 260) {
        this.frogLanding();
      } 
    }  else if (e.key === 'ArrowLeft') {
      console.log('UP');
      console.log(this.frog[0].y)
      console.log('x:', this.frog[0].x)

      if (this.frog[0].y < 260) {
        this.frogLanding();
      } 
    } 

  }

}



















