// Fix frog so that it is an object, not an array of one object.



const Block = require('./Block');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    const { canvas } = this.ctx;

    this.frog = [
      new Block((canvas.width / 2) - 10.5, canvas.height - 53, 20, 20, '#00CC00', 'green'),
    ]

    this.threeTurtles = [
      new Block(0, 234.8, 20, 100, 'brown', 'yellow'),
      new Block(240, 234.8, 20, 100, 'maroon', 'yellow'),
      new Block(480, 234.8, 20, 100, 'magenta', 'yellow'),
    ];

    this.smallLogs = [
      new Block(0, 190.2, 20, 100, 'brown', 'yellow'),
      new Block(240, 190.2, 20, 100, 'maroon', 'yellow'),
      new Block(480, 190.2, 20, 100, 'magenta', 'yellow'),
    ];

    this.bigLogs = [
      new Block(0, 145.6, 20, 100, 'brown', 'yellow'),
      new Block(240, 145.6, 20, 100, 'maroon', 'yellow'),
      new Block(480, 145.6, 20, 100, 'magenta', 'yellow'),
    ];

    this.twoTurtles = [
      new Block(0, 100.2, 20, 100, 'brown', 'yellow'),
      new Block(240, 100.2, 20, 100, 'maroon', 'yellow'),
      new Block(480, 100.2, 20, 100, 'magenta', 'yellow'),
    ];

    this.mediumLogs = [
      new Block(0, 56.4, 20, 100, 'brown', 'yellow'),
      new Block(240, 56.4, 20, 100, 'maroon', 'yellow'),
      new Block(480, 56.4, 20, 100, 'magenta', 'yellow'),
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
    this.drawCars(this.redCars, (-1));
    this.drawCars(this.aquaCars, 1);
    this.drawCars(this.orangeCars, -1);
    this.drawCars(this.purpleCars, .75);
    
    this.drawLogs(this.threeTurtles, -1);
    this.drawLogs(this.smallLogs, 1);
    this.drawLogs(this.bigLogs, 1);
    this.drawLogs(this.twoTurtles, -1);
    this.drawLogs(this.mediumLogs, 1);
    
    this.controlFrog();
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



      // this.frogLanding(this.threeTurtles);
      // this.frogLanding(this.smallLogs);
      // this.frogLanding(this.bigLogs);
      // this.frogLanding(this.twoTurtles);
      // this.frogLanding(this.mediumLogs);
      
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



    // const { canvas } = this.ctx;
    // // this.frog[0].dx = 0;
    // let onLog = false;
    // let speed = 0;
    // let onLogs = 0;
    
    // .forEach( log => {
    //   if (this.frog[0].y < 260 && log.isCollidingWith(this.frog[0])) {
    //     console.log('boom');
    //     console.log(this.yellowCars);
    //     this.frog[0].dx = log.dx;
    //     onLogs--;
    //     // onLogs.push(onLog);
    //   } else if (this.frog[0].y > 260) {
    //     this.frog[0].dx = 0;
    //     // console.log('NO');
    //     // onLogs.push(onLog);
    //   } else if (this.frog[0].y < 260 && !log.isCollidingWith(this.frog[0])) {
    //     console.log('no boom');
    //     onLogs++;
    //   }

    // })


    // console.log(onLogs);

    // if (this.frog[0].y < 260 && onLogs < 1) {
    //     this.frog[0].x = canvas.width / 2 - 10;
    //     this.frog[0].y = canvas.height - 53;
    // }
    
    // let colides = arr.every( guy => {
      // if (this.frog[0].y < 260 && guy.isCollidingWith(this.frog[0])) {
    //     console.log('if');
    //     speed = guy.dx;
    //     return true;
    //   }
    // })

    // arr.forEach( log => {
    //   if (this.frog[0].y < 260) {
    //   console.log('false: ', colides);
    //     // console.log('works');
    //   }
      
    // })


    
    // arr.forEach( log => {
    //   if (this.frog[0].y < 260 && log.isCollidingWith(this.frog[0])) {
    //     onLog = true;
    //     speed = log.dx;
    //     // this.frog[0].dx = log.dx;
    //   } 

    //   if (onLog && this.frog[0].y < 260) {
    //     console.log('true');
    //     this.frog[0].dx = speed;
    //   } else if (onLog === false && this.frog[0].y < 260) {
    //     console.log('false');
    //     this.frog[0].dx = 0;
    //   }
    // })

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
    } else if (e.key === 'ArrowUp' && this.frog[0].y > 40) {
      console.log('UP');
      console.log(this.frog[0].y)
      if (this.frog[0].y < 260 && this.frog[0].y > 61) {
        this.frogLanding();
      } else if (this.frog[0].y < 60) {
        this.frog[0].dx = 0;

      }
    }  else if (e.key === 'ArrowRight' && this.frog[0].y > 40) {
      console.log('UP');
      console.log(this.frog[0].y)
      if (this.frog[0].y < 260) {
        this.frogLanding();
      } 
    }  else if (e.key === 'ArrowLeft' && this.frog[0].y > 40) {
      console.log('UP');
      console.log(this.frog[0].y)
      if (this.frog[0].y < 260) {
        this.frogLanding();
      } 
    } 

    // this.frog.forEach( block => block.changeDirection(direction) );
  }

}