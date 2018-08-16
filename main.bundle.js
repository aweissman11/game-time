/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Block.js":
/*!**********************!*\
  !*** ./lib/Block.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

// extend GamePiece class
module.exports = function (_GamePiece) {
  _inherits(Block, _GamePiece);

  function Block(x, y, height, width, color, borderColor) {
    _classCallCheck(this, Block);

    var _this = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, x, y, height, width, color));
    // invoke parent class constructor


    _this.borderColor = borderColor;
    return _this;
  }

  _createClass(Block, [{
    key: 'draw',
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          borderColor = this.borderColor;

      // call parent class draw function

      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'draw', this).call(this, ctx);

      // draw block border
      ctx.strokeStyle = borderColor;
      ctx.strokeRect(x, y, width, height);
    }
  }]);

  return Block;
}(GamePiece);

/***/ }),

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Fix frog so that it is an object, not an array of one object.


var Block = __webpack_require__(/*! ./Block */ "./lib/Block.js");

module.exports = function () {
  function Game(ctx) {
    _classCallCheck(this, Game);

    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    var canvas = this.ctx.canvas;


    this.blocks = [new Block(-20, 20, 30, 30, 'red', 'black'), new Block(-20, 80, 30, 30, 'red', 'black'), new Block(-20, 140, 30, 30, 'red', 'black'), new Block(-20, 200, 30, 30, 'red', 'black'), new Block(-20, 260, 30, 30, 'red', 'black'), new Block(-20, 320, 30, 30, 'red', 'black')];

    this.badGuys1 = [new Block(620, 50, 30, 30, 'red', 'black'), new Block(620, 110, 30, 30, 'red', 'black'), new Block(620, 170, 30, 30, 'red', 'black'), new Block(620, 230, 30, 30, 'red', 'black'), new Block(620, 290, 30, 30, 'red', 'black'), new Block(620, 350, 30, 30, 'red', 'black')];

    this.frog = [new Block(canvas.width / 2 - 10, canvas.height - 53, 20, 20, 'blue', 'green')];
  }

  _createClass(Game, [{
    key: 'drawCars',
    value: function drawCars() {
      var _this = this;

      var canvas = this.ctx.canvas;


      this.blocks.forEach(function (block) {
        block.dx = .5;

        if (block.isCollidingWith(_this.frog[0])) {
          console.log('collision!!');
          block.move();
        }

        block.move();
        block.draw(_this.ctx);
      });

      this.badGuys1.forEach(function (block) {
        block.dx = -.25;

        block.move();
        block.draw(_this.ctx);
      });
    }
  }, {
    key: 'controlFrog',
    value: function controlFrog() {
      var _this2 = this;

      var canvas = this.ctx.canvas;


      this.frog.forEach(function (block) {
        var thisFrog = _this2.frog[0];
        if (thisFrog.x < 600 && thisFrog.x > 0 && thisFrog.y < 600 && thisFrog.y > 0) {

          block.move();
          block.draw(_this2.ctx);
        }

        _this2.badGuys1.forEach(function (guy) {
          if (guy.isCollidingWith(thisFrog)) {
            console.log('BANG!!');
            console.log(canvas);

            thisFrog.x = canvas.width / 2;
            thisFrog.y = canvas.height - 30;
          }
        });

        _this2.blocks.forEach(function (guy) {
          if (guy.isCollidingWith(thisFrog)) {
            console.log('BANG!!');
            console.log(canvas);

            thisFrog.x = canvas.width / 2;
            thisFrog.y = canvas.height - 30;
          }
        });
      });
    }

    // draw one frame of our game

  }, {
    key: 'animate',
    value: function animate() {
      var canvas = this.ctx.canvas;

      this.drawCars();
      this.controlFrog();
    }
  }, {
    key: 'endGame',
    value: function endGame() {
      this.gameOver = true;
    }
  }, {
    key: 'isOver',
    value: function isOver() {
      return this.gameOver;
    }
  }, {
    key: 'togglePause',
    value: function togglePause() {
      this.paused = !this.paused;
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      var canvas = this.ctx.canvas;


      var direction = {
        dx: 0,
        dy: 0
      };

      if (e.key === 'ArrowRight' && this.frog[0].x < canvas.width - 60) {
        this.frog[0].x += 47;
      } else if (e.key === 'ArrowLeft' && this.frog[0].x > 50) {
        this.frog[0].x -= 47;
      } else if (e.key === 'ArrowDown' && this.frog[0].y < canvas.height - 60) {
        this.frog[0].y += 53.5;
      } else if (e.key === 'ArrowUp' && this.frog[0].y > 60) {
        this.frog[0].y -= 53.5;
      }

      // this.frog.forEach( block => block.changeDirection(direction) );
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./lib/GamePiece.js":
/*!**************************!*\
  !*** ./lib/GamePiece.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function GamePiece(x, y, height, width, color) {
    _classCallCheck(this, GamePiece);

    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = 0;
    this.dy = 0;
    this.dxv = 1;
    this.dyv = 1;
  }

  _createClass(GamePiece, [{
    key: "isCollidingWith",
    value: function isCollidingWith(object) {
      return this.x < object.x + object.width && this.x + this.width > object.x && this.y < object.y + object.height && this.y + this.height > object.y;
    }
  }, {
    key: "isCollidingWithWall",
    value: function isCollidingWithWall(canvasWidth, canvasHeight) {
      return this.x < 0 || this.x + this.width > canvasWidth || this.y < 0 || this.y + this.height > canvasHeight;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          color = this.color;


      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
    }
  }, {
    key: "move",
    value: function move() {
      this.x += this.dx * this.dxv;
      this.y += this.dy * this.dyv;
    }
  }, {
    key: "changeDirection",
    value: function changeDirection(direction) {
      this.dx = direction.dx;
      this.dy = direction.dy;
    }
  }, {
    key: "moveLocation",
    value: function moveLocation(direction) {
      this.x += direction.x;
      this.y += direction.y;
    }
  }]);

  return GamePiece;
}();

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Game = __webpack_require__(/*! ./Game */ "./lib/Game.js");

var canvas = document.querySelector('#game');
var ctx = canvas.getContext('2d');
var game = new Game(ctx);

// Start animation loop
window.requestAnimationFrame(gameLoop);

function gameLoop() {

  if (game.isOver()) {
    console.log('Game Over');
  } else {
    // clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw this frame
    game.animate();
  }

  // prepare to draw next frame
  window.requestAnimationFrame(gameLoop);
}

// Add key press event handler
document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(e) {
  game.handleKeyDown(e);
}

var elem = document.getElementById("myBar");
var startBtn = document.getElementById("start-btn");
startBtn.addEventListener('click', move);
function move() {
  var width = 1;
  var id = setInterval(frame, 600);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Jsb2NrLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWVQaWVjZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiYm9yZGVyQ29sb3IiLCJjdHgiLCJzdHJva2VTdHlsZSIsInN0cm9rZVJlY3QiLCJCbG9jayIsInBhdXNlZCIsImdhbWVPdmVyIiwiY2FudmFzIiwiYmxvY2tzIiwiYmFkR3V5czEiLCJmcm9nIiwiZm9yRWFjaCIsImJsb2NrIiwiZHgiLCJpc0NvbGxpZGluZ1dpdGgiLCJjb25zb2xlIiwibG9nIiwibW92ZSIsImRyYXciLCJ0aGlzRnJvZyIsImd1eSIsImRyYXdDYXJzIiwiY29udHJvbEZyb2ciLCJlIiwiZGlyZWN0aW9uIiwiZHkiLCJrZXkiLCJkeHYiLCJkeXYiLCJvYmplY3QiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiR2FtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJnYW1lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2FtZUxvb3AiLCJpc092ZXIiLCJjbGVhclJlY3QiLCJhbmltYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleURvd24iLCJlbGVtIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdGFydEJ0biIsImlkIiwic2V0SW50ZXJ2YWwiLCJmcmFtZSIsImNsZWFySW50ZXJ2YWwiLCJzdHlsZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFNQSxZQUFZLG1CQUFBQyxDQUFRLHVDQUFSLENBQWxCOztBQUVBO0FBQ0FDLE9BQU9DLE9BQVA7QUFBQTs7QUFDRSxpQkFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxNQUFsQixFQUEwQkMsS0FBMUIsRUFBaUNDLEtBQWpDLEVBQXdDQyxXQUF4QyxFQUFxRDtBQUFBOztBQUFBLDhHQUU3Q0wsQ0FGNkMsRUFFMUNDLENBRjBDLEVBRXZDQyxNQUZ1QyxFQUUvQkMsS0FGK0IsRUFFeEJDLEtBRndCO0FBQ25EOzs7QUFHQSxVQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUptRDtBQUtwRDs7QUFOSDtBQUFBO0FBQUEseUJBUU9DLEdBUlAsRUFRWTtBQUFBLFVBQ0ROLENBREMsR0FDb0MsSUFEcEMsQ0FDREEsQ0FEQztBQUFBLFVBQ0VDLENBREYsR0FDb0MsSUFEcEMsQ0FDRUEsQ0FERjtBQUFBLFVBQ0tDLE1BREwsR0FDb0MsSUFEcEMsQ0FDS0EsTUFETDtBQUFBLFVBQ2FDLEtBRGIsR0FDb0MsSUFEcEMsQ0FDYUEsS0FEYjtBQUFBLFVBQ29CRSxXQURwQixHQUNvQyxJQURwQyxDQUNvQkEsV0FEcEI7O0FBR1I7O0FBQ0EseUdBQVdDLEdBQVg7O0FBRUE7QUFDQUEsVUFBSUMsV0FBSixHQUFrQkYsV0FBbEI7QUFDQUMsVUFBSUUsVUFBSixDQUFlUixDQUFmLEVBQWtCQyxDQUFsQixFQUFxQkUsS0FBckIsRUFBNEJELE1BQTVCO0FBQ0Q7QUFqQkg7O0FBQUE7QUFBQSxFQUFxQ04sU0FBckMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7OztBQUlBLElBQU1hLFFBQVEsbUJBQUFaLENBQVEsK0JBQVIsQ0FBZDs7QUFFQUMsT0FBT0MsT0FBUDtBQUNFLGdCQUFZTyxHQUFaLEVBQWlCO0FBQUE7O0FBQ2YsU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0ksTUFBTCxHQUFjLEtBQWQ7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEtBQWhCOztBQUhlLFFBS1BDLE1BTE8sR0FLSSxLQUFLTixHQUxULENBS1BNLE1BTE87OztBQU9mLFNBQUtDLE1BQUwsR0FBYyxDQUNaLElBQUlKLEtBQUosQ0FBVSxDQUFDLEVBQVgsRUFBZSxFQUFmLEVBQW1CLEVBQW5CLEVBQXVCLEVBQXZCLEVBQTJCLEtBQTNCLEVBQWtDLE9BQWxDLENBRFksRUFFWixJQUFJQSxLQUFKLENBQVUsQ0FBQyxFQUFYLEVBQWUsRUFBZixFQUFtQixFQUFuQixFQUF1QixFQUF2QixFQUEyQixLQUEzQixFQUFrQyxPQUFsQyxDQUZZLEVBR1osSUFBSUEsS0FBSixDQUFVLENBQUMsRUFBWCxFQUFlLEdBQWYsRUFBb0IsRUFBcEIsRUFBd0IsRUFBeEIsRUFBNEIsS0FBNUIsRUFBbUMsT0FBbkMsQ0FIWSxFQUlaLElBQUlBLEtBQUosQ0FBVSxDQUFDLEVBQVgsRUFBZSxHQUFmLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLEVBQTRCLEtBQTVCLEVBQW1DLE9BQW5DLENBSlksRUFLWixJQUFJQSxLQUFKLENBQVUsQ0FBQyxFQUFYLEVBQWUsR0FBZixFQUFvQixFQUFwQixFQUF3QixFQUF4QixFQUE0QixLQUE1QixFQUFtQyxPQUFuQyxDQUxZLEVBTVosSUFBSUEsS0FBSixDQUFVLENBQUMsRUFBWCxFQUFlLEdBQWYsRUFBb0IsRUFBcEIsRUFBd0IsRUFBeEIsRUFBNEIsS0FBNUIsRUFBbUMsT0FBbkMsQ0FOWSxDQUFkOztBQVNBLFNBQUtLLFFBQUwsR0FBZ0IsQ0FDZCxJQUFJTCxLQUFKLENBQVUsR0FBVixFQUFlLEVBQWYsRUFBbUIsRUFBbkIsRUFBdUIsRUFBdkIsRUFBMkIsS0FBM0IsRUFBa0MsT0FBbEMsQ0FEYyxFQUVkLElBQUlBLEtBQUosQ0FBVSxHQUFWLEVBQWUsR0FBZixFQUFvQixFQUFwQixFQUF3QixFQUF4QixFQUE0QixLQUE1QixFQUFtQyxPQUFuQyxDQUZjLEVBR2QsSUFBSUEsS0FBSixDQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLEVBQTRCLEtBQTVCLEVBQW1DLE9BQW5DLENBSGMsRUFJZCxJQUFJQSxLQUFKLENBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0IsRUFBcEIsRUFBd0IsRUFBeEIsRUFBNEIsS0FBNUIsRUFBbUMsT0FBbkMsQ0FKYyxFQUtkLElBQUlBLEtBQUosQ0FBVSxHQUFWLEVBQWUsR0FBZixFQUFvQixFQUFwQixFQUF3QixFQUF4QixFQUE0QixLQUE1QixFQUFtQyxPQUFuQyxDQUxjLEVBTWQsSUFBSUEsS0FBSixDQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLEVBQTRCLEtBQTVCLEVBQW1DLE9BQW5DLENBTmMsQ0FBaEI7O0FBU0EsU0FBS00sSUFBTCxHQUFZLENBQ1YsSUFBSU4sS0FBSixDQUFXRyxPQUFPVCxLQUFQLEdBQWUsQ0FBaEIsR0FBcUIsRUFBL0IsRUFBbUNTLE9BQU9WLE1BQVAsR0FBZ0IsRUFBbkQsRUFBdUQsRUFBdkQsRUFBMkQsRUFBM0QsRUFBK0QsTUFBL0QsRUFBdUUsT0FBdkUsQ0FEVSxDQUFaO0FBSUQ7O0FBOUJIO0FBQUE7QUFBQSwrQkFnQ2E7QUFBQTs7QUFBQSxVQUNEVSxNQURDLEdBQ1UsS0FBS04sR0FEZixDQUNETSxNQURDOzs7QUFHVCxXQUFLQyxNQUFMLENBQVlHLE9BQVosQ0FBcUIsaUJBQVM7QUFDNUJDLGNBQU1DLEVBQU4sR0FBVyxFQUFYOztBQUVBLFlBQUlELE1BQU1FLGVBQU4sQ0FBc0IsTUFBS0osSUFBTCxDQUFVLENBQVYsQ0FBdEIsQ0FBSixFQUF5QztBQUN2Q0ssa0JBQVFDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FKLGdCQUFNSyxJQUFOO0FBQ0Q7O0FBRURMLGNBQU1LLElBQU47QUFDQUwsY0FBTU0sSUFBTixDQUFXLE1BQUtqQixHQUFoQjtBQUNELE9BVkQ7O0FBWUEsV0FBS1EsUUFBTCxDQUFjRSxPQUFkLENBQXVCLGlCQUFTO0FBQzlCQyxjQUFNQyxFQUFOLEdBQVcsQ0FBQyxHQUFaOztBQUVBRCxjQUFNSyxJQUFOO0FBQ0FMLGNBQU1NLElBQU4sQ0FBVyxNQUFLakIsR0FBaEI7QUFDRCxPQUxEO0FBTUQ7QUFyREg7QUFBQTtBQUFBLGtDQXVEZ0I7QUFBQTs7QUFBQSxVQUNKTSxNQURJLEdBQ08sS0FBS04sR0FEWixDQUNKTSxNQURJOzs7QUFHWixXQUFLRyxJQUFMLENBQVVDLE9BQVYsQ0FBbUIsaUJBQVM7QUFDMUIsWUFBTVEsV0FBVyxPQUFLVCxJQUFMLENBQVUsQ0FBVixDQUFqQjtBQUNBLFlBQUlTLFNBQVN4QixDQUFULEdBQWEsR0FBYixJQUFvQndCLFNBQVN4QixDQUFULEdBQWEsQ0FBakMsSUFBc0N3QixTQUFTdkIsQ0FBVCxHQUFhLEdBQW5ELElBQTBEdUIsU0FBU3ZCLENBQVQsR0FBYSxDQUEzRSxFQUE4RTs7QUFFNUVnQixnQkFBTUssSUFBTjtBQUNBTCxnQkFBTU0sSUFBTixDQUFXLE9BQUtqQixHQUFoQjtBQUNEOztBQUVELGVBQUtRLFFBQUwsQ0FBY0UsT0FBZCxDQUF1QixlQUFPO0FBQzVCLGNBQUlTLElBQUlOLGVBQUosQ0FBb0JLLFFBQXBCLENBQUosRUFBbUM7QUFDakNKLG9CQUFRQyxHQUFSLENBQVksUUFBWjtBQUNBRCxvQkFBUUMsR0FBUixDQUFZVCxNQUFaOztBQUVBWSxxQkFBU3hCLENBQVQsR0FBYVksT0FBT1QsS0FBUCxHQUFlLENBQTVCO0FBQ0FxQixxQkFBU3ZCLENBQVQsR0FBYVcsT0FBT1YsTUFBUCxHQUFnQixFQUE3QjtBQUNEO0FBQ0YsU0FSRDs7QUFVQSxlQUFLVyxNQUFMLENBQVlHLE9BQVosQ0FBcUIsZUFBTztBQUMxQixjQUFJUyxJQUFJTixlQUFKLENBQW9CSyxRQUFwQixDQUFKLEVBQW1DO0FBQ2pDSixvQkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDQUQsb0JBQVFDLEdBQVIsQ0FBWVQsTUFBWjs7QUFFQVkscUJBQVN4QixDQUFULEdBQWFZLE9BQU9ULEtBQVAsR0FBZSxDQUE1QjtBQUNBcUIscUJBQVN2QixDQUFULEdBQWFXLE9BQU9WLE1BQVAsR0FBZ0IsRUFBN0I7QUFDRDtBQUNGLFNBUkQ7QUFVRCxPQTVCRDtBQTZCRDs7QUFFRDs7QUF6RkY7QUFBQTtBQUFBLDhCQTBGWTtBQUFBLFVBQ0FVLE1BREEsR0FDVyxLQUFLTixHQURoQixDQUNBTSxNQURBOztBQUVSLFdBQUtjLFFBQUw7QUFDQSxXQUFLQyxXQUFMO0FBQ0Q7QUE5Rkg7QUFBQTtBQUFBLDhCQWdHWTtBQUNSLFdBQUtoQixRQUFMLEdBQWdCLElBQWhCO0FBQ0Q7QUFsR0g7QUFBQTtBQUFBLDZCQW9HVztBQUNQLGFBQU8sS0FBS0EsUUFBWjtBQUNEO0FBdEdIO0FBQUE7QUFBQSxrQ0F3R2dCO0FBQ1osV0FBS0QsTUFBTCxHQUFjLENBQUMsS0FBS0EsTUFBcEI7QUFDRDtBQTFHSDtBQUFBO0FBQUEsa0NBNEdnQmtCLENBNUdoQixFQTRHbUI7QUFBQSxVQUNMaEIsTUFESyxHQUNNLEtBQUtOLEdBRFgsQ0FDTE0sTUFESzs7O0FBR2IsVUFBTWlCLFlBQVk7QUFDbEJYLFlBQUksQ0FEYztBQUVsQlksWUFBSTtBQUZjLE9BQWxCOztBQUtGLFVBQUlGLEVBQUVHLEdBQUYsS0FBVSxZQUFWLElBQTBCLEtBQUtoQixJQUFMLENBQVUsQ0FBVixFQUFhZixDQUFiLEdBQWtCWSxPQUFPVCxLQUFQLEdBQWUsRUFBL0QsRUFBb0U7QUFDbEUsYUFBS1ksSUFBTCxDQUFVLENBQVYsRUFBYWYsQ0FBYixJQUFrQixFQUFsQjtBQUVELE9BSEQsTUFHTyxJQUFJNEIsRUFBRUcsR0FBRixLQUFVLFdBQVYsSUFBeUIsS0FBS2hCLElBQUwsQ0FBVSxDQUFWLEVBQWFmLENBQWIsR0FBaUIsRUFBOUMsRUFBa0Q7QUFDdkQsYUFBS2UsSUFBTCxDQUFVLENBQVYsRUFBYWYsQ0FBYixJQUFrQixFQUFsQjtBQUVELE9BSE0sTUFHQSxJQUFJNEIsRUFBRUcsR0FBRixLQUFVLFdBQVYsSUFBeUIsS0FBS2hCLElBQUwsQ0FBVSxDQUFWLEVBQWFkLENBQWIsR0FBa0JXLE9BQU9WLE1BQVAsR0FBZ0IsRUFBL0QsRUFBb0U7QUFDekUsYUFBS2EsSUFBTCxDQUFVLENBQVYsRUFBYWQsQ0FBYixJQUFrQixJQUFsQjtBQUVELE9BSE0sTUFHQSxJQUFJMkIsRUFBRUcsR0FBRixLQUFVLFNBQVYsSUFBdUIsS0FBS2hCLElBQUwsQ0FBVSxDQUFWLEVBQWFkLENBQWIsR0FBaUIsRUFBNUMsRUFBZ0Q7QUFDckQsYUFBS2MsSUFBTCxDQUFVLENBQVYsRUFBYWQsQ0FBYixJQUFrQixJQUFsQjtBQUNEOztBQUVEO0FBQ0Q7QUFsSUg7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQUgsT0FBT0MsT0FBUDtBQUNFLHFCQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLE1BQWxCLEVBQTBCQyxLQUExQixFQUFpQ0MsS0FBakMsRUFBd0M7QUFBQTs7QUFDdEMsU0FBS0osQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS2MsRUFBTCxHQUFVLENBQVY7QUFDQSxTQUFLWSxFQUFMLEdBQVUsQ0FBVjtBQUNBLFNBQUtFLEdBQUwsR0FBVyxDQUFYO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLENBQVg7QUFDRDs7QUFYSDtBQUFBO0FBQUEsb0NBYWtCQyxNQWJsQixFQWEwQjtBQUN0QixhQUNFLEtBQUtsQyxDQUFMLEdBQVNrQyxPQUFPbEMsQ0FBUCxHQUFXa0MsT0FBTy9CLEtBQTNCLElBQ0EsS0FBS0gsQ0FBTCxHQUFTLEtBQUtHLEtBQWQsR0FBc0IrQixPQUFPbEMsQ0FEN0IsSUFFQSxLQUFLQyxDQUFMLEdBQVNpQyxPQUFPakMsQ0FBUCxHQUFXaUMsT0FBT2hDLE1BRjNCLElBR0EsS0FBS0QsQ0FBTCxHQUFTLEtBQUtDLE1BQWQsR0FBdUJnQyxPQUFPakMsQ0FKaEM7QUFNRDtBQXBCSDtBQUFBO0FBQUEsd0NBc0JzQmtDLFdBdEJ0QixFQXNCbUNDLFlBdEJuQyxFQXNCaUQ7QUFDN0MsYUFDRSxLQUFLcEMsQ0FBTCxHQUFTLENBQVQsSUFDQSxLQUFLQSxDQUFMLEdBQVMsS0FBS0csS0FBZCxHQUFzQmdDLFdBRHRCLElBRUEsS0FBS2xDLENBQUwsR0FBUyxDQUZULElBR0EsS0FBS0EsQ0FBTCxHQUFTLEtBQUtDLE1BQWQsR0FBdUJrQyxZQUp6QjtBQU1EO0FBN0JIO0FBQUE7QUFBQSx5QkErQk85QixHQS9CUCxFQStCWTtBQUFBLFVBQ0FOLENBREEsR0FDK0IsSUFEL0IsQ0FDQUEsQ0FEQTtBQUFBLFVBQ0dDLENBREgsR0FDK0IsSUFEL0IsQ0FDR0EsQ0FESDtBQUFBLFVBQ01DLE1BRE4sR0FDK0IsSUFEL0IsQ0FDTUEsTUFETjtBQUFBLFVBQ2NDLEtBRGQsR0FDK0IsSUFEL0IsQ0FDY0EsS0FEZDtBQUFBLFVBQ3FCQyxLQURyQixHQUMrQixJQUQvQixDQUNxQkEsS0FEckI7OztBQUdSRSxVQUFJK0IsU0FBSixHQUFnQmpDLEtBQWhCO0FBQ0FFLFVBQUlnQyxRQUFKLENBQWF0QyxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQkUsS0FBbkIsRUFBMEJELE1BQTFCO0FBQ0Q7QUFwQ0g7QUFBQTtBQUFBLDJCQXNDUztBQUNMLFdBQUtGLENBQUwsSUFBVSxLQUFLa0IsRUFBTCxHQUFVLEtBQUtjLEdBQXpCO0FBQ0EsV0FBSy9CLENBQUwsSUFBVSxLQUFLNkIsRUFBTCxHQUFVLEtBQUtHLEdBQXpCO0FBQ0Q7QUF6Q0g7QUFBQTtBQUFBLG9DQTJDa0JKLFNBM0NsQixFQTJDNkI7QUFDekIsV0FBS1gsRUFBTCxHQUFVVyxVQUFVWCxFQUFwQjtBQUNBLFdBQUtZLEVBQUwsR0FBVUQsVUFBVUMsRUFBcEI7QUFDRDtBQTlDSDtBQUFBO0FBQUEsaUNBZ0RlRCxTQWhEZixFQWdEMEI7QUFDdEIsV0FBSzdCLENBQUwsSUFBVTZCLFVBQVU3QixDQUFwQjtBQUNBLFdBQUtDLENBQUwsSUFBUzRCLFVBQVU1QixDQUFuQjtBQUNEO0FBbkRIOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNc0MsT0FBTyxtQkFBQTFDLENBQVEsNkJBQVIsQ0FBYjs7QUFFQSxJQUFNZSxTQUFTNEIsU0FBU0MsYUFBVCxDQUF1QixPQUF2QixDQUFmO0FBQ0EsSUFBTW5DLE1BQU1NLE9BQU84QixVQUFQLENBQWtCLElBQWxCLENBQVo7QUFDQSxJQUFNQyxPQUFPLElBQUlKLElBQUosQ0FBU2pDLEdBQVQsQ0FBYjs7QUFFQTtBQUNBc0MsT0FBT0MscUJBQVAsQ0FBNkJDLFFBQTdCOztBQUVBLFNBQVNBLFFBQVQsR0FBcUI7O0FBRW5CLE1BQUlILEtBQUtJLE1BQUwsRUFBSixFQUFtQjtBQUNqQjNCLFlBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBRUQsR0FIRCxNQUdPO0FBQ0w7QUFDQWYsUUFBSTBDLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CcEMsT0FBT1QsS0FBM0IsRUFBa0NTLE9BQU9WLE1BQXpDOztBQUVBO0FBQ0F5QyxTQUFLTSxPQUFMO0FBQ0Q7O0FBRUQ7QUFDQUwsU0FBT0MscUJBQVAsQ0FBNkJDLFFBQTdCO0FBQ0Q7O0FBRUQ7QUFDQU4sU0FBU1UsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUNDLGFBQXJDOztBQUVBLFNBQVNBLGFBQVQsQ0FBdUJ2QixDQUF2QixFQUEwQjtBQUN4QmUsT0FBS1EsYUFBTCxDQUFtQnZCLENBQW5CO0FBQ0Q7O0FBR0QsSUFBSXdCLE9BQU9aLFNBQVNhLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBWDtBQUNBLElBQUlDLFdBQVdkLFNBQVNhLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBZjtBQUNBQyxTQUFTSixnQkFBVCxDQUEwQixPQUExQixFQUFtQzVCLElBQW5DO0FBQ0EsU0FBU0EsSUFBVCxHQUFnQjtBQUNkLE1BQUluQixRQUFRLENBQVo7QUFDQSxNQUFJb0QsS0FBS0MsWUFBWUMsS0FBWixFQUFtQixHQUFuQixDQUFUO0FBQ0EsV0FBU0EsS0FBVCxHQUFpQjtBQUNmLFFBQUl0RCxTQUFTLEdBQWIsRUFBa0I7QUFDaEJ1RCxvQkFBY0gsRUFBZDtBQUNELEtBRkQsTUFFTztBQUNMcEQ7QUFDQWlELFdBQUtPLEtBQUwsQ0FBV3hELEtBQVgsR0FBbUJBLFFBQVEsR0FBM0I7QUFDRDtBQUNGO0FBQ0YsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UnKTtcblxuLy8gZXh0ZW5kIEdhbWVQaWVjZSBjbGFzc1xubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBCbG9jayBleHRlbmRzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yLCBib3JkZXJDb2xvcikge1xuICAgIC8vIGludm9rZSBwYXJlbnQgY2xhc3MgY29uc3RydWN0b3JcbiAgICBzdXBlcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcik7XG5cbiAgICB0aGlzLmJvcmRlckNvbG9yID0gYm9yZGVyQ29sb3I7XG4gIH0gXG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjb25zdCB7eCwgeSwgaGVpZ2h0LCB3aWR0aCwgYm9yZGVyQ29sb3IgfSA9IHRoaXM7XG5cbiAgICAvLyBjYWxsIHBhcmVudCBjbGFzcyBkcmF3IGZ1bmN0aW9uXG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuXG4gICAgLy8gZHJhdyBibG9jayBib3JkZXJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBib3JkZXJDb2xvcjtcbiAgICBjdHguc3Ryb2tlUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxufSIsIi8vIEZpeCBmcm9nIHNvIHRoYXQgaXQgaXMgYW4gb2JqZWN0LCBub3QgYW4gYXJyYXkgb2Ygb25lIG9iamVjdC5cblxuXG5cbmNvbnN0IEJsb2NrID0gcmVxdWlyZSgnLi9CbG9jaycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHsgY2FudmFzIH0gPSB0aGlzLmN0eDtcblxuICAgIHRoaXMuYmxvY2tzID0gW1xuICAgICAgbmV3IEJsb2NrKC0yMCwgMjAsIDMwLCAzMCwgJ3JlZCcsICdibGFjaycpLFxuICAgICAgbmV3IEJsb2NrKC0yMCwgODAsIDMwLCAzMCwgJ3JlZCcsICdibGFjaycpLFxuICAgICAgbmV3IEJsb2NrKC0yMCwgMTQwLCAzMCwgMzAsICdyZWQnLCAnYmxhY2snKSxcbiAgICAgIG5ldyBCbG9jaygtMjAsIDIwMCwgMzAsIDMwLCAncmVkJywgJ2JsYWNrJyksXG4gICAgICBuZXcgQmxvY2soLTIwLCAyNjAsIDMwLCAzMCwgJ3JlZCcsICdibGFjaycpLFxuICAgICAgbmV3IEJsb2NrKC0yMCwgMzIwLCAzMCwgMzAsICdyZWQnLCAnYmxhY2snKSxcbiAgICBdO1xuXG4gICAgdGhpcy5iYWRHdXlzMSA9IFtcbiAgICAgIG5ldyBCbG9jayg2MjAsIDUwLCAzMCwgMzAsICdyZWQnLCAnYmxhY2snKSxcbiAgICAgIG5ldyBCbG9jayg2MjAsIDExMCwgMzAsIDMwLCAncmVkJywgJ2JsYWNrJyksXG4gICAgICBuZXcgQmxvY2soNjIwLCAxNzAsIDMwLCAzMCwgJ3JlZCcsICdibGFjaycpLFxuICAgICAgbmV3IEJsb2NrKDYyMCwgMjMwLCAzMCwgMzAsICdyZWQnLCAnYmxhY2snKSxcbiAgICAgIG5ldyBCbG9jayg2MjAsIDI5MCwgMzAsIDMwLCAncmVkJywgJ2JsYWNrJyksXG4gICAgICBuZXcgQmxvY2soNjIwLCAzNTAsIDMwLCAzMCwgJ3JlZCcsICdibGFjaycpXG4gICAgXTtcblxuICAgIHRoaXMuZnJvZyA9IFtcbiAgICAgIG5ldyBCbG9jaygoY2FudmFzLndpZHRoIC8gMikgLSAxMCwgY2FudmFzLmhlaWdodCAtIDUzLCAyMCwgMjAsICdibHVlJywgJ2dyZWVuJyksXG4gICAgXVxuXG4gIH1cblxuICBkcmF3Q2FycygpIHtcbiAgICBjb25zdCB7IGNhbnZhcyB9ID0gdGhpcy5jdHg7XG5cbiAgICB0aGlzLmJsb2Nrcy5mb3JFYWNoKCBibG9jayA9PiB7XG4gICAgICBibG9jay5keCA9IC41O1xuXG4gICAgICBpZiAoYmxvY2suaXNDb2xsaWRpbmdXaXRoKHRoaXMuZnJvZ1swXSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbGxpc2lvbiEhJyk7XG4gICAgICAgIGJsb2NrLm1vdmUoKTtcbiAgICAgIH0gXG4gICAgICBcbiAgICAgIGJsb2NrLm1vdmUoKTtcbiAgICAgIGJsb2NrLmRyYXcodGhpcy5jdHgpO1xuICAgIH0pXG5cbiAgICB0aGlzLmJhZEd1eXMxLmZvckVhY2goIGJsb2NrID0+IHtcbiAgICAgIGJsb2NrLmR4ID0gLS4yNTtcbiAgICAgIFxuICAgICAgYmxvY2subW92ZSgpO1xuICAgICAgYmxvY2suZHJhdyh0aGlzLmN0eCk7XG4gICAgfSlcbiAgfVxuXG4gIGNvbnRyb2xGcm9nKCkge1xuICAgIGNvbnN0IHsgY2FudmFzIH0gPSB0aGlzLmN0eDtcblxuICAgIHRoaXMuZnJvZy5mb3JFYWNoKCBibG9jayA9PiB7XG4gICAgICBjb25zdCB0aGlzRnJvZyA9IHRoaXMuZnJvZ1swXTtcbiAgICAgIGlmICh0aGlzRnJvZy54IDwgNjAwICYmIHRoaXNGcm9nLnggPiAwICYmIHRoaXNGcm9nLnkgPCA2MDAgJiYgdGhpc0Zyb2cueSA+IDApIHtcblxuICAgICAgICBibG9jay5tb3ZlKCk7XG4gICAgICAgIGJsb2NrLmRyYXcodGhpcy5jdHgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmJhZEd1eXMxLmZvckVhY2goIGd1eSA9PiB7XG4gICAgICAgIGlmIChndXkuaXNDb2xsaWRpbmdXaXRoKHRoaXNGcm9nKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdCQU5HISEnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhjYW52YXMpO1xuXG4gICAgICAgICAgdGhpc0Zyb2cueCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgICAgICAgdGhpc0Zyb2cueSA9IGNhbnZhcy5oZWlnaHQgLSAzMDtcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgdGhpcy5ibG9ja3MuZm9yRWFjaCggZ3V5ID0+IHtcbiAgICAgICAgaWYgKGd1eS5pc0NvbGxpZGluZ1dpdGgodGhpc0Zyb2cpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0JBTkchIScpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGNhbnZhcyk7XG5cbiAgICAgICAgICB0aGlzRnJvZy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICAgICAgICB0aGlzRnJvZy55ID0gY2FudmFzLmhlaWdodCAtIDMwO1xuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgfSlcbiAgfVxuXG4gIC8vIGRyYXcgb25lIGZyYW1lIG9mIG91ciBnYW1lXG4gIGFuaW1hdGUoKSB7XG4gICAgY29uc3QgeyBjYW52YXMgfSA9IHRoaXMuY3R4O1xuICAgIHRoaXMuZHJhd0NhcnMoKTtcbiAgICB0aGlzLmNvbnRyb2xGcm9nKCk7XG4gIH1cblxuICBlbmRHYW1lKCkge1xuICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICB9XG5cbiAgaXNPdmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVPdmVyO1xuICB9XG5cbiAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gIH1cblxuICBoYW5kbGVLZXlEb3duKGUpIHtcbiAgICAgIGNvbnN0IHsgY2FudmFzIH0gPSB0aGlzLmN0eDtcblxuICAgICAgY29uc3QgZGlyZWN0aW9uID0ge1xuICAgICAgZHg6IDAsXG4gICAgICBkeTogMFxuICAgIH07XG5cbiAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1JpZ2h0JyAmJiB0aGlzLmZyb2dbMF0ueCA8IChjYW52YXMud2lkdGggLSA2MCkpIHtcbiAgICAgIHRoaXMuZnJvZ1swXS54ICs9IDQ3O1xuXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93TGVmdCcgJiYgdGhpcy5mcm9nWzBdLnggPiA1MCkge1xuICAgICAgdGhpcy5mcm9nWzBdLnggLT0gNDc7XG5cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJyAmJiB0aGlzLmZyb2dbMF0ueSA8IChjYW52YXMuaGVpZ2h0IC0gNjApKSB7XG4gICAgICB0aGlzLmZyb2dbMF0ueSArPSA1My41O1xuXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnICYmIHRoaXMuZnJvZ1swXS55ID4gNjApIHtcbiAgICAgIHRoaXMuZnJvZ1swXS55IC09IDUzLjU7XG4gICAgfSBcblxuICAgIC8vIHRoaXMuZnJvZy5mb3JFYWNoKCBibG9jayA9PiBibG9jay5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKSApO1xuICB9XG5cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5keCA9IDA7XG4gICAgdGhpcy5keSA9IDA7XG4gICAgdGhpcy5keHYgPSAxO1xuICAgIHRoaXMuZHl2ID0gMTtcbiAgfVxuXG4gIGlzQ29sbGlkaW5nV2l0aChvYmplY3QpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy54IDwgb2JqZWN0LnggKyBvYmplY3Qud2lkdGggJiYgXG4gICAgICB0aGlzLnggKyB0aGlzLndpZHRoID4gb2JqZWN0LnggJiZcbiAgICAgIHRoaXMueSA8IG9iamVjdC55ICsgb2JqZWN0LmhlaWdodCAmJlxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBvYmplY3QueVxuICAgICk7XG4gIH1cblxuICBpc0NvbGxpZGluZ1dpdGhXYWxsKGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy54IDwgMCB8fFxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA+IGNhbnZhc1dpZHRoIHx8XG4gICAgICB0aGlzLnkgPCAwIHx8IFxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBjYW52YXNIZWlnaHRcbiAgICApXG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGNvbnN0IHsgeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IgfSA9IHRoaXM7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICB0aGlzLnggKz0gdGhpcy5keCAqIHRoaXMuZHh2O1xuICAgIHRoaXMueSArPSB0aGlzLmR5ICogdGhpcy5keXY7XG4gIH1cblxuICBjaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgdGhpcy5keCA9IGRpcmVjdGlvbi5keDtcbiAgICB0aGlzLmR5ID0gZGlyZWN0aW9uLmR5O1xuICB9XG5cbiAgbW92ZUxvY2F0aW9uKGRpcmVjdGlvbikge1xuICAgIHRoaXMueCArPSBkaXJlY3Rpb24ueDtcbiAgICB0aGlzLnkgKz1kaXJlY3Rpb24ueTtcbiAgfVxuXG59IiwiY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZScpO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZScpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcblxuLy8gU3RhcnQgYW5pbWF0aW9uIGxvb3BcbndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuXG5mdW5jdGlvbiBnYW1lTG9vcCAoKSB7XG5cbiAgaWYgKGdhbWUuaXNPdmVyKCkpIHtcbiAgICBjb25zb2xlLmxvZygnR2FtZSBPdmVyJyk7XG5cbiAgfSBlbHNlIHtcbiAgICAvLyBjbGVhciBwcmV2aW91cyBmcmFtZVxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgIC8vIGRyYXcgdGhpcyBmcmFtZVxuICAgIGdhbWUuYW5pbWF0ZSgpO1xuICB9XG5cbiAgLy8gcHJlcGFyZSB0byBkcmF3IG5leHQgZnJhbWVcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcClcbn1cblxuLy8gQWRkIGtleSBwcmVzcyBldmVudCBoYW5kbGVyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bik7XG5cbmZ1bmN0aW9uIGhhbmRsZUtleURvd24oZSkge1xuICBnYW1lLmhhbmRsZUtleURvd24oZSk7XG59XG5cblxudmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15QmFyXCIpO1xudmFyIHN0YXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1idG5cIikgICBcbnN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW92ZSk7XG5mdW5jdGlvbiBtb3ZlKCkge1xuICB2YXIgd2lkdGggPSAxO1xuICB2YXIgaWQgPSBzZXRJbnRlcnZhbChmcmFtZSwgNjAwKTtcbiAgZnVuY3Rpb24gZnJhbWUoKSB7XG4gICAgaWYgKHdpZHRoID49IDEwMCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpZHRoKys7IFxuICAgICAgZWxlbS5zdHlsZS53aWR0aCA9IHdpZHRoICsgJyUnOyBcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=