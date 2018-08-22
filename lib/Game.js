// refactor key code events from lesson
// New Game BTN that does not refresh the page
// Game over text
// Show points after game
// Points persist?
// fade in and out background??
// Fix CSS
// Arrow keys when no game is happening.



const Block = require('./Block');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.lives = 5;
    this.level = 1;
    this.spotsLeft = 6;
    this.gameSpeed = 1;
    this.points = 0;

    this.seeThrough = 'rgba(0, 0, 0, 0)';

    const { canvas } = this.ctx;

    this.frog = [
      new Block((canvas.width / 2) - 10.5, 
        canvas.height - 53, 20, 20, '#00CC00', 'green'),
    ];

    this.landingSpots = [
      new Block(49, 7, 30, 30, this.seeThrough, 'blue'),
      new Block(143, 7, 30, 30, this.seeThrough, 'blue'),
      new Block(237, 7, 30, 30, this.seeThrough, 'blue'),
      new Block(331, 7, 30, 30, this.seeThrough, 'blue'),
      new Block(425, 7, 30, 30, this.seeThrough, 'blue'),
      new Block(519, 7, 30, 30, this.seeThrough, 'blue'),
    ];



    this.mediumLogs = [
      new Block(0, 56.4, 20, 100, '#cc6633', 'black'),
      new Block(240, 56.4, 20, 100, '#cc6633', 'black'),
      new Block(480, 56.4, 20, 100, '#cc6633', 'black'),
    ];

    this.twoTurtles = [
      new Block(0, 100.2, 20, 60, '#53d319', '#ffff01'),
      new Block(240, 100.2, 20, 60, '#53d319', '#ffff01'),
      new Block(480, 100.2, 20, 60, '#53d319', '#ffff01'),
    ];

    this.bigLogs = [
      new Block(0, 145.6, 20, 140, '#cc6633', 'black'),
      new Block(240, 145.6, 20, 140, '#cc6633', 'black'),
      new Block(480, 145.6, 20, 140, '#cc6633', 'black'),
    ];

    this.smallLogs = [
      new Block(60, 190.2, 20, 70, '#cc6633', 'black'),
      new Block(300, 190.2, 20, 70, '#cc6633', 'black'),
      new Block(540, 190.2, 20, 70, '#cc6633', 'black'),
    ];

    this.threeTurtles = [
      new Block(20, 234.8, 20, 90, '#53d319', '#ffff01'),
      new Block(260, 234.8, 20, 90, '#53d319', '#ffff01'),
      new Block(500, 234.8, 20, 90, '#53d319', '#ffff01'),
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
    this.drawCars(this.yellowCars, this.gameSpeed + .5);
    this.drawCars(this.redCars, (this.gameSpeed - 2.75));
    this.drawCars(this.aquaCars, this.gameSpeed);
    this.drawCars(this.orangeCars, this.gameSpeed - 2);
    this.drawCars(this.purpleCars, this.gameSpeed - .25);
    
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
    });
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
    });
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
    });
  }

  controlFrog() {
    this.frog.forEach( block => {
      const thisFrog = this.frog[0];

      if (thisFrog.x < 600 && thisFrog.x > 0 
        && thisFrog.y < 600 && thisFrog.y > 0) {
        block.move();
        block.draw(this.ctx);
      }

      this.frogCollision(this.yellowCars);
      this.frogCollision(this.redCars);
      this.frogCollision(this.aquaCars);
      this.frogCollision(this.orangeCars);
      this.frogCollision(this.purpleCars);    
    });
  }

  frogCollision(arr) {
    const { canvas } = this.ctx;

    arr.forEach( guy => {
      if (guy.isCollidingWith(this.frog[0])) {
        console.log('BANG!!');
        if (this.lives > 0) {
          this.frog[0].x = canvas.width / 2 - 10;
          this.frog[0].y = canvas.height - 53;        
          this.lives--;
          console.log('lives:', this.lives);
        } else {
          console.log('Out of lives');
        }
        
      }
    });

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
    });

    this.smallLogs.forEach( log => {
      if (log.isCollidingWith(this.frog[0])) {
        console.log('frogLanding');
        onLog++;
        speed = log.dx;
      }
    });

    this.bigLogs.forEach( log => {
      if (log.isCollidingWith(this.frog[0])) {
        console.log('frogLanding');
        onLog++;
        speed = log.dx;
      }
    });

    this.twoTurtles.forEach( log => {
      if (log.isCollidingWith(this.frog[0])) {
        console.log('frogLanding');
        onLog++;
        speed = log.dx;
      }
    });

    this.mediumLogs.forEach( log => {
      if (log.isCollidingWith(this.frog[0])) {
        console.log('frogLanding');
        onLog++;
        speed = log.dx;
      }
    });

    this.landingSpots.forEach( spot => {
      if (spot.isCollidingWith(this.frog[0])) {
        console.log('WIN');
        spot.color = 'green';
        this.lives++;

        this.safeLanding();
      }
    });


    if (onLog > 0) {
      console.log('landed');
      this.frog[0].dx = speed;
    } else if (this.frog[0].y > 260) {
      this.frog[0].dx = 0;
    } else {
      console.log('water');
      this.lives--;
      console.log('lives:', this.lives);
      this.frog[0].x = canvas.width / 2 - 10;
      this.frog[0].y = canvas.height - 53;
      this.frog[0].dx = 0;
    }
  }

  safeLanding() {
    if (this.spotsLeft > 1) {
      this.spotsLeft--;
      this.points += 100;
    } else if (this.spotsLeft <= 1) {
      this.spotsLeft = 6;
      this.gameSpeed += 1.5;
      this.level += 1;
      this.points *= 1.5;
    }
  }

  levelUp() {

  }

  newGame() {
    this.lives = 5;
    this.points = 0;
    this.level = 1;
    this.spotsLeft = 6;
  }

  returnLevel() {
    return this.level;
  }

  returnPoints() {
    return this.points;
  }

  returnLives() {
    return this.lives;
  }

  returnSpotsLeft() {
    return this.spotsLeft;
  }

  checkLives() {
    if (this.lives <= 0) {
      this.endGame();
    }
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

    if (e.key === 'ArrowRight' && this.frog[0].x < (canvas.width - 60)) {
      this.frog[0].x += 47;
    } else if (e.key === 'ArrowLeft' && this.frog[0].x > 50) {
      this.frog[0].x -= 47;
    } else if (e.key === 'ArrowDown' && this.frog[0].y < (canvas.height - 60)) {
      this.frog[0].y += 44.6;
    } else if (e.key === 'ArrowUp' && this.frog[0].y > 40) {
      this.frog[0].y -= 44.6;
    } else if (e.key === 'p') {
      this.paused = !this.paused;
    } else if (e.key === 'k') {
      this.endGame();
    }
  }

  handleKeyUp(e) {
    const { canvas } = this.ctx;

    if (e.key === 'ArrowDown' && this.frog[0].y < (canvas.height - 60)) {
      console.log('DOWN');
      console.log(this.frog[0].y);
      if (this.frog[0].y < 260) {
        this.frogLanding();
      } else if (this.frog[0].y > 260) {
        this.frog[0].dx = 0;
      }     
    } else if (e.key === 'ArrowUp') {
      console.log('UP');
      console.log(this.frog[0].y);
      if (this.frog[0].y < 260) {
        this.frogLanding();
      }
    }  else if (e.key === 'ArrowRight') {
      console.log('UP');
      console.log(this.frog[0].y);
      console.log('x:', this.frog[0].x);
      if (this.frog[0].y < 260) {
        this.frogLanding();
      } 
    }  else if (e.key === 'ArrowLeft') {
      console.log('UP');
      console.log(this.frog[0].y);
      console.log('x:', this.frog[0].x);

      if (this.frog[0].y < 260) {
        this.frogLanding();
      } 
    } 

  }

};



















