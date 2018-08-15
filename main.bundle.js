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

var Block = __webpack_require__(/*! ./Block */ "./lib/Block.js");

module.exports = function () {
  function Game(ctx) {
    _classCallCheck(this, Game);

    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    var canvas = this.ctx.canvas;


    this.blocks = [new Block(-20, 20, 10, 10, 'red', 'black'), new Block(-20, 80, 10, 10, 'red', 'black'), new Block(-20, 140, 10, 10, 'red', 'black'), new Block(-20, 200, 10, 10, 'red', 'black'), new Block(-20, 260, 10, 10, 'red', 'black'), new Block(-20, 320, 10, 10, 'red', 'black')];

    this.badGuys1 = [new Block(620, 50, 10, 10, 'red', 'black'), new Block(620, 110, 10, 10, 'red', 'black'), new Block(620, 170, 10, 10, 'red', 'black'), new Block(620, 230, 10, 10, 'red', 'black'), new Block(620, 290, 10, 10, 'red', 'black'), new Block(620, 350, 10, 10, 'red', 'black')];

    this.frog = [new Block(canvas.width / 2, canvas.height - 30, 20, 20, 'blue', 'green')];
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
        this.frog[0].x += 50;
      } else if (e.key === 'ArrowLeft' && this.frog[0].x > 50) {
        this.frog[0].x -= 50;
      } else if (e.key === 'ArrowDown' && this.frog[0].y < canvas.height - 60) {
        this.frog[0].y += 50;
      } else if (e.key === 'ArrowUp' && this.frog[0].y > 60) {
        this.frog[0].y -= 50;
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Jsb2NrLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWVQaWVjZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiYm9yZGVyQ29sb3IiLCJjdHgiLCJzdHJva2VTdHlsZSIsInN0cm9rZVJlY3QiLCJCbG9jayIsInBhdXNlZCIsImdhbWVPdmVyIiwiY2FudmFzIiwiYmxvY2tzIiwiYmFkR3V5czEiLCJmcm9nIiwiZm9yRWFjaCIsImJsb2NrIiwiZHgiLCJpc0NvbGxpZGluZ1dpdGgiLCJjb25zb2xlIiwibG9nIiwibW92ZSIsImRyYXciLCJ0aGlzRnJvZyIsImd1eSIsImRyYXdDYXJzIiwiY29udHJvbEZyb2ciLCJlIiwiZGlyZWN0aW9uIiwiZHkiLCJrZXkiLCJkeHYiLCJkeXYiLCJvYmplY3QiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiR2FtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJnYW1lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2FtZUxvb3AiLCJpc092ZXIiLCJjbGVhclJlY3QiLCJhbmltYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleURvd24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsWUFBWSxtQkFBQUMsQ0FBUSx1Q0FBUixDQUFsQjs7QUFFQTtBQUNBQyxPQUFPQyxPQUFQO0FBQUE7O0FBQ0UsaUJBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsTUFBbEIsRUFBMEJDLEtBQTFCLEVBQWlDQyxLQUFqQyxFQUF3Q0MsV0FBeEMsRUFBcUQ7QUFBQTs7QUFBQSw4R0FFN0NMLENBRjZDLEVBRTFDQyxDQUYwQyxFQUV2Q0MsTUFGdUMsRUFFL0JDLEtBRitCLEVBRXhCQyxLQUZ3QjtBQUNuRDs7O0FBR0EsVUFBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFKbUQ7QUFLcEQ7O0FBTkg7QUFBQTtBQUFBLHlCQVFPQyxHQVJQLEVBUVk7QUFBQSxVQUNETixDQURDLEdBQ29DLElBRHBDLENBQ0RBLENBREM7QUFBQSxVQUNFQyxDQURGLEdBQ29DLElBRHBDLENBQ0VBLENBREY7QUFBQSxVQUNLQyxNQURMLEdBQ29DLElBRHBDLENBQ0tBLE1BREw7QUFBQSxVQUNhQyxLQURiLEdBQ29DLElBRHBDLENBQ2FBLEtBRGI7QUFBQSxVQUNvQkUsV0FEcEIsR0FDb0MsSUFEcEMsQ0FDb0JBLFdBRHBCOztBQUdSOztBQUNBLHlHQUFXQyxHQUFYOztBQUVBO0FBQ0FBLFVBQUlDLFdBQUosR0FBa0JGLFdBQWxCO0FBQ0FDLFVBQUlFLFVBQUosQ0FBZVIsQ0FBZixFQUFrQkMsQ0FBbEIsRUFBcUJFLEtBQXJCLEVBQTRCRCxNQUE1QjtBQUNEO0FBakJIOztBQUFBO0FBQUEsRUFBcUNOLFNBQXJDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLElBQU1hLFFBQVEsbUJBQUFaLENBQVEsK0JBQVIsQ0FBZDs7QUFFQUMsT0FBT0MsT0FBUDtBQUNFLGdCQUFZTyxHQUFaLEVBQWlCO0FBQUE7O0FBQ2YsU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0ksTUFBTCxHQUFjLEtBQWQ7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEtBQWhCOztBQUhlLFFBS1BDLE1BTE8sR0FLSSxLQUFLTixHQUxULENBS1BNLE1BTE87OztBQU9mLFNBQUtDLE1BQUwsR0FBYyxDQUNaLElBQUlKLEtBQUosQ0FBVSxDQUFDLEVBQVgsRUFBZSxFQUFmLEVBQW1CLEVBQW5CLEVBQXVCLEVBQXZCLEVBQTJCLEtBQTNCLEVBQWtDLE9BQWxDLENBRFksRUFFWixJQUFJQSxLQUFKLENBQVUsQ0FBQyxFQUFYLEVBQWUsRUFBZixFQUFtQixFQUFuQixFQUF1QixFQUF2QixFQUEyQixLQUEzQixFQUFrQyxPQUFsQyxDQUZZLEVBR1osSUFBSUEsS0FBSixDQUFVLENBQUMsRUFBWCxFQUFlLEdBQWYsRUFBb0IsRUFBcEIsRUFBd0IsRUFBeEIsRUFBNEIsS0FBNUIsRUFBbUMsT0FBbkMsQ0FIWSxFQUlaLElBQUlBLEtBQUosQ0FBVSxDQUFDLEVBQVgsRUFBZSxHQUFmLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLEVBQTRCLEtBQTVCLEVBQW1DLE9BQW5DLENBSlksRUFLWixJQUFJQSxLQUFKLENBQVUsQ0FBQyxFQUFYLEVBQWUsR0FBZixFQUFvQixFQUFwQixFQUF3QixFQUF4QixFQUE0QixLQUE1QixFQUFtQyxPQUFuQyxDQUxZLEVBTVosSUFBSUEsS0FBSixDQUFVLENBQUMsRUFBWCxFQUFlLEdBQWYsRUFBb0IsRUFBcEIsRUFBd0IsRUFBeEIsRUFBNEIsS0FBNUIsRUFBbUMsT0FBbkMsQ0FOWSxDQUFkOztBQVNBLFNBQUtLLFFBQUwsR0FBZ0IsQ0FDZCxJQUFJTCxLQUFKLENBQVUsR0FBVixFQUFlLEVBQWYsRUFBbUIsRUFBbkIsRUFBdUIsRUFBdkIsRUFBMkIsS0FBM0IsRUFBa0MsT0FBbEMsQ0FEYyxFQUVkLElBQUlBLEtBQUosQ0FBVSxHQUFWLEVBQWUsR0FBZixFQUFvQixFQUFwQixFQUF3QixFQUF4QixFQUE0QixLQUE1QixFQUFtQyxPQUFuQyxDQUZjLEVBR2QsSUFBSUEsS0FBSixDQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLEVBQTRCLEtBQTVCLEVBQW1DLE9BQW5DLENBSGMsRUFJZCxJQUFJQSxLQUFKLENBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0IsRUFBcEIsRUFBd0IsRUFBeEIsRUFBNEIsS0FBNUIsRUFBbUMsT0FBbkMsQ0FKYyxFQUtkLElBQUlBLEtBQUosQ0FBVSxHQUFWLEVBQWUsR0FBZixFQUFvQixFQUFwQixFQUF3QixFQUF4QixFQUE0QixLQUE1QixFQUFtQyxPQUFuQyxDQUxjLEVBTWQsSUFBSUEsS0FBSixDQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLEVBQTRCLEtBQTVCLEVBQW1DLE9BQW5DLENBTmMsQ0FBaEI7O0FBU0EsU0FBS00sSUFBTCxHQUFZLENBQ1YsSUFBSU4sS0FBSixDQUFVRyxPQUFPVCxLQUFQLEdBQWUsQ0FBekIsRUFBNEJTLE9BQU9WLE1BQVAsR0FBZ0IsRUFBNUMsRUFBZ0QsRUFBaEQsRUFBb0QsRUFBcEQsRUFBd0QsTUFBeEQsRUFBZ0UsT0FBaEUsQ0FEVSxDQUFaO0FBSUQ7O0FBOUJIO0FBQUE7QUFBQSwrQkFnQ2E7QUFBQTs7QUFBQSxVQUNEVSxNQURDLEdBQ1UsS0FBS04sR0FEZixDQUNETSxNQURDOzs7QUFHVCxXQUFLQyxNQUFMLENBQVlHLE9BQVosQ0FBcUIsaUJBQVM7QUFDNUJDLGNBQU1DLEVBQU4sR0FBVyxFQUFYOztBQUVBLFlBQUlELE1BQU1FLGVBQU4sQ0FBc0IsTUFBS0osSUFBTCxDQUFVLENBQVYsQ0FBdEIsQ0FBSixFQUF5QztBQUN2Q0ssa0JBQVFDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FKLGdCQUFNSyxJQUFOO0FBQ0Q7O0FBRURMLGNBQU1LLElBQU47QUFDQUwsY0FBTU0sSUFBTixDQUFXLE1BQUtqQixHQUFoQjtBQUNELE9BVkQ7O0FBWUEsV0FBS1EsUUFBTCxDQUFjRSxPQUFkLENBQXVCLGlCQUFTO0FBQzlCQyxjQUFNQyxFQUFOLEdBQVcsQ0FBQyxHQUFaOztBQUVBRCxjQUFNSyxJQUFOO0FBQ0FMLGNBQU1NLElBQU4sQ0FBVyxNQUFLakIsR0FBaEI7QUFDRCxPQUxEO0FBTUQ7QUFyREg7QUFBQTtBQUFBLGtDQXVEZ0I7QUFBQTs7QUFBQSxVQUNKTSxNQURJLEdBQ08sS0FBS04sR0FEWixDQUNKTSxNQURJOzs7QUFHWixXQUFLRyxJQUFMLENBQVVDLE9BQVYsQ0FBbUIsaUJBQVM7QUFDMUIsWUFBTVEsV0FBVyxPQUFLVCxJQUFMLENBQVUsQ0FBVixDQUFqQjtBQUNBLFlBQUlTLFNBQVN4QixDQUFULEdBQWEsR0FBYixJQUFvQndCLFNBQVN4QixDQUFULEdBQWEsQ0FBakMsSUFBc0N3QixTQUFTdkIsQ0FBVCxHQUFhLEdBQW5ELElBQTBEdUIsU0FBU3ZCLENBQVQsR0FBYSxDQUEzRSxFQUE4RTs7QUFFNUVnQixnQkFBTUssSUFBTjtBQUNBTCxnQkFBTU0sSUFBTixDQUFXLE9BQUtqQixHQUFoQjtBQUNEOztBQUVELGVBQUtRLFFBQUwsQ0FBY0UsT0FBZCxDQUF1QixlQUFPO0FBQzVCLGNBQUlTLElBQUlOLGVBQUosQ0FBb0JLLFFBQXBCLENBQUosRUFBbUM7QUFDakNKLG9CQUFRQyxHQUFSLENBQVksUUFBWjtBQUNBRCxvQkFBUUMsR0FBUixDQUFZVCxNQUFaOztBQUVBWSxxQkFBU3hCLENBQVQsR0FBYVksT0FBT1QsS0FBUCxHQUFlLENBQTVCO0FBQ0FxQixxQkFBU3ZCLENBQVQsR0FBYVcsT0FBT1YsTUFBUCxHQUFnQixFQUE3QjtBQUNEO0FBQ0YsU0FSRDtBQVVELE9BbEJEO0FBbUJEOztBQUVEOztBQS9FRjtBQUFBO0FBQUEsOEJBZ0ZZO0FBQUEsVUFDQVUsTUFEQSxHQUNXLEtBQUtOLEdBRGhCLENBQ0FNLE1BREE7O0FBRVIsV0FBS2MsUUFBTDtBQUNBLFdBQUtDLFdBQUw7QUFDRDtBQXBGSDtBQUFBO0FBQUEsOEJBc0ZZO0FBQ1IsV0FBS2hCLFFBQUwsR0FBZ0IsSUFBaEI7QUFDRDtBQXhGSDtBQUFBO0FBQUEsNkJBMEZXO0FBQ1AsYUFBTyxLQUFLQSxRQUFaO0FBQ0Q7QUE1Rkg7QUFBQTtBQUFBLGtDQThGZ0I7QUFDWixXQUFLRCxNQUFMLEdBQWMsQ0FBQyxLQUFLQSxNQUFwQjtBQUNEO0FBaEdIO0FBQUE7QUFBQSxrQ0FrR2dCa0IsQ0FsR2hCLEVBa0dtQjtBQUFBLFVBQ0xoQixNQURLLEdBQ00sS0FBS04sR0FEWCxDQUNMTSxNQURLOzs7QUFHYixVQUFNaUIsWUFBWTtBQUNsQlgsWUFBSSxDQURjO0FBRWxCWSxZQUFJO0FBRmMsT0FBbEI7O0FBS0YsVUFBSUYsRUFBRUcsR0FBRixLQUFVLFlBQVYsSUFBMEIsS0FBS2hCLElBQUwsQ0FBVSxDQUFWLEVBQWFmLENBQWIsR0FBa0JZLE9BQU9ULEtBQVAsR0FBZSxFQUEvRCxFQUFvRTtBQUNsRSxhQUFLWSxJQUFMLENBQVUsQ0FBVixFQUFhZixDQUFiLElBQWtCLEVBQWxCO0FBRUQsT0FIRCxNQUdPLElBQUk0QixFQUFFRyxHQUFGLEtBQVUsV0FBVixJQUF5QixLQUFLaEIsSUFBTCxDQUFVLENBQVYsRUFBYWYsQ0FBYixHQUFpQixFQUE5QyxFQUFrRDtBQUN2RCxhQUFLZSxJQUFMLENBQVUsQ0FBVixFQUFhZixDQUFiLElBQWtCLEVBQWxCO0FBRUQsT0FITSxNQUdBLElBQUk0QixFQUFFRyxHQUFGLEtBQVUsV0FBVixJQUF5QixLQUFLaEIsSUFBTCxDQUFVLENBQVYsRUFBYWQsQ0FBYixHQUFrQlcsT0FBT1YsTUFBUCxHQUFnQixFQUEvRCxFQUFvRTtBQUN6RSxhQUFLYSxJQUFMLENBQVUsQ0FBVixFQUFhZCxDQUFiLElBQWtCLEVBQWxCO0FBRUQsT0FITSxNQUdBLElBQUkyQixFQUFFRyxHQUFGLEtBQVUsU0FBVixJQUF1QixLQUFLaEIsSUFBTCxDQUFVLENBQVYsRUFBYWQsQ0FBYixHQUFpQixFQUE1QyxFQUFnRDtBQUNyRCxhQUFLYyxJQUFMLENBQVUsQ0FBVixFQUFhZCxDQUFiLElBQWtCLEVBQWxCO0FBQ0Q7O0FBRUQ7QUFDRDtBQXhISDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBSCxPQUFPQyxPQUFQO0FBQ0UscUJBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsTUFBbEIsRUFBMEJDLEtBQTFCLEVBQWlDQyxLQUFqQyxFQUF3QztBQUFBOztBQUN0QyxTQUFLSixDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLYyxFQUFMLEdBQVUsQ0FBVjtBQUNBLFNBQUtZLEVBQUwsR0FBVSxDQUFWO0FBQ0EsU0FBS0UsR0FBTCxHQUFXLENBQVg7QUFDQSxTQUFLQyxHQUFMLEdBQVcsQ0FBWDtBQUNEOztBQVhIO0FBQUE7QUFBQSxvQ0Fha0JDLE1BYmxCLEVBYTBCO0FBQ3RCLGFBQ0UsS0FBS2xDLENBQUwsR0FBU2tDLE9BQU9sQyxDQUFQLEdBQVdrQyxPQUFPL0IsS0FBM0IsSUFDQSxLQUFLSCxDQUFMLEdBQVMsS0FBS0csS0FBZCxHQUFzQitCLE9BQU9sQyxDQUQ3QixJQUVBLEtBQUtDLENBQUwsR0FBU2lDLE9BQU9qQyxDQUFQLEdBQVdpQyxPQUFPaEMsTUFGM0IsSUFHQSxLQUFLRCxDQUFMLEdBQVMsS0FBS0MsTUFBZCxHQUF1QmdDLE9BQU9qQyxDQUpoQztBQU1EO0FBcEJIO0FBQUE7QUFBQSx3Q0FzQnNCa0MsV0F0QnRCLEVBc0JtQ0MsWUF0Qm5DLEVBc0JpRDtBQUM3QyxhQUNFLEtBQUtwQyxDQUFMLEdBQVMsQ0FBVCxJQUNBLEtBQUtBLENBQUwsR0FBUyxLQUFLRyxLQUFkLEdBQXNCZ0MsV0FEdEIsSUFFQSxLQUFLbEMsQ0FBTCxHQUFTLENBRlQsSUFHQSxLQUFLQSxDQUFMLEdBQVMsS0FBS0MsTUFBZCxHQUF1QmtDLFlBSnpCO0FBTUQ7QUE3Qkg7QUFBQTtBQUFBLHlCQStCTzlCLEdBL0JQLEVBK0JZO0FBQUEsVUFDQU4sQ0FEQSxHQUMrQixJQUQvQixDQUNBQSxDQURBO0FBQUEsVUFDR0MsQ0FESCxHQUMrQixJQUQvQixDQUNHQSxDQURIO0FBQUEsVUFDTUMsTUFETixHQUMrQixJQUQvQixDQUNNQSxNQUROO0FBQUEsVUFDY0MsS0FEZCxHQUMrQixJQUQvQixDQUNjQSxLQURkO0FBQUEsVUFDcUJDLEtBRHJCLEdBQytCLElBRC9CLENBQ3FCQSxLQURyQjs7O0FBR1JFLFVBQUkrQixTQUFKLEdBQWdCakMsS0FBaEI7QUFDQUUsVUFBSWdDLFFBQUosQ0FBYXRDLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CRSxLQUFuQixFQUEwQkQsTUFBMUI7QUFDRDtBQXBDSDtBQUFBO0FBQUEsMkJBc0NTO0FBQ0wsV0FBS0YsQ0FBTCxJQUFVLEtBQUtrQixFQUFMLEdBQVUsS0FBS2MsR0FBekI7QUFDQSxXQUFLL0IsQ0FBTCxJQUFVLEtBQUs2QixFQUFMLEdBQVUsS0FBS0csR0FBekI7QUFDRDtBQXpDSDtBQUFBO0FBQUEsb0NBMkNrQkosU0EzQ2xCLEVBMkM2QjtBQUN6QixXQUFLWCxFQUFMLEdBQVVXLFVBQVVYLEVBQXBCO0FBQ0EsV0FBS1ksRUFBTCxHQUFVRCxVQUFVQyxFQUFwQjtBQUNEO0FBOUNIO0FBQUE7QUFBQSxpQ0FnRGVELFNBaERmLEVBZ0QwQjtBQUN0QixXQUFLN0IsQ0FBTCxJQUFVNkIsVUFBVTdCLENBQXBCO0FBQ0EsV0FBS0MsQ0FBTCxJQUFTNEIsVUFBVTVCLENBQW5CO0FBQ0Q7QUFuREg7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1zQyxPQUFPLG1CQUFBMUMsQ0FBUSw2QkFBUixDQUFiOztBQUVBLElBQU1lLFNBQVM0QixTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQWY7QUFDQSxJQUFNbkMsTUFBTU0sT0FBTzhCLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLElBQU1DLE9BQU8sSUFBSUosSUFBSixDQUFTakMsR0FBVCxDQUFiOztBQUVBO0FBQ0FzQyxPQUFPQyxxQkFBUCxDQUE2QkMsUUFBN0I7O0FBRUEsU0FBU0EsUUFBVCxHQUFxQjs7QUFFbkIsTUFBSUgsS0FBS0ksTUFBTCxFQUFKLEVBQW1CO0FBQ2pCM0IsWUFBUUMsR0FBUixDQUFZLFdBQVo7QUFFRCxHQUhELE1BR087QUFDTDtBQUNBZixRQUFJMEMsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0JwQyxPQUFPVCxLQUEzQixFQUFrQ1MsT0FBT1YsTUFBekM7O0FBRUE7QUFDQXlDLFNBQUtNLE9BQUw7QUFDRDs7QUFFRDtBQUNBTCxTQUFPQyxxQkFBUCxDQUE2QkMsUUFBN0I7QUFDRDs7QUFFRDtBQUNBTixTQUFTVSxnQkFBVCxDQUEwQixTQUExQixFQUFxQ0MsYUFBckM7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QnZCLENBQXZCLEVBQTBCO0FBQ3hCZSxPQUFLUSxhQUFMLENBQW1CdkIsQ0FBbkI7QUFDRCxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZScpO1xuXG4vLyBleHRlbmQgR2FtZVBpZWNlIGNsYXNzXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEJsb2NrIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IsIGJvcmRlckNvbG9yKSB7XG4gICAgLy8gaW52b2tlIHBhcmVudCBjbGFzcyBjb25zdHJ1Y3RvclxuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKTtcblxuICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvcjtcbiAgfSBcblxuICBkcmF3KGN0eCkge1xuICAgIGNvbnN0IHt4LCB5LCBoZWlnaHQsIHdpZHRoLCBib3JkZXJDb2xvciB9ID0gdGhpcztcblxuICAgIC8vIGNhbGwgcGFyZW50IGNsYXNzIGRyYXcgZnVuY3Rpb25cbiAgICBzdXBlci5kcmF3KGN0eCk7XG5cbiAgICAvLyBkcmF3IGJsb2NrIGJvcmRlclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGJvcmRlckNvbG9yO1xuICAgIGN0eC5zdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG59IiwiY29uc3QgQmxvY2sgPSByZXF1aXJlKCcuL0Jsb2NrJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuXG4gICAgY29uc3QgeyBjYW52YXMgfSA9IHRoaXMuY3R4O1xuXG4gICAgdGhpcy5ibG9ja3MgPSBbXG4gICAgICBuZXcgQmxvY2soLTIwLCAyMCwgMTAsIDEwLCAncmVkJywgJ2JsYWNrJyksXG4gICAgICBuZXcgQmxvY2soLTIwLCA4MCwgMTAsIDEwLCAncmVkJywgJ2JsYWNrJyksXG4gICAgICBuZXcgQmxvY2soLTIwLCAxNDAsIDEwLCAxMCwgJ3JlZCcsICdibGFjaycpLFxuICAgICAgbmV3IEJsb2NrKC0yMCwgMjAwLCAxMCwgMTAsICdyZWQnLCAnYmxhY2snKSxcbiAgICAgIG5ldyBCbG9jaygtMjAsIDI2MCwgMTAsIDEwLCAncmVkJywgJ2JsYWNrJyksXG4gICAgICBuZXcgQmxvY2soLTIwLCAzMjAsIDEwLCAxMCwgJ3JlZCcsICdibGFjaycpLFxuICAgIF07XG5cbiAgICB0aGlzLmJhZEd1eXMxID0gW1xuICAgICAgbmV3IEJsb2NrKDYyMCwgNTAsIDEwLCAxMCwgJ3JlZCcsICdibGFjaycpLFxuICAgICAgbmV3IEJsb2NrKDYyMCwgMTEwLCAxMCwgMTAsICdyZWQnLCAnYmxhY2snKSxcbiAgICAgIG5ldyBCbG9jayg2MjAsIDE3MCwgMTAsIDEwLCAncmVkJywgJ2JsYWNrJyksXG4gICAgICBuZXcgQmxvY2soNjIwLCAyMzAsIDEwLCAxMCwgJ3JlZCcsICdibGFjaycpLFxuICAgICAgbmV3IEJsb2NrKDYyMCwgMjkwLCAxMCwgMTAsICdyZWQnLCAnYmxhY2snKSxcbiAgICAgIG5ldyBCbG9jayg2MjAsIDM1MCwgMTAsIDEwLCAncmVkJywgJ2JsYWNrJylcbiAgICBdO1xuXG4gICAgdGhpcy5mcm9nID0gW1xuICAgICAgbmV3IEJsb2NrKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLSAzMCwgMjAsIDIwLCAnYmx1ZScsICdncmVlbicpLFxuICAgIF1cblxuICB9XG5cbiAgZHJhd0NhcnMoKSB7XG4gICAgY29uc3QgeyBjYW52YXMgfSA9IHRoaXMuY3R4O1xuXG4gICAgdGhpcy5ibG9ja3MuZm9yRWFjaCggYmxvY2sgPT4ge1xuICAgICAgYmxvY2suZHggPSAuNTtcblxuICAgICAgaWYgKGJsb2NrLmlzQ29sbGlkaW5nV2l0aCh0aGlzLmZyb2dbMF0pKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjb2xsaXNpb24hIScpO1xuICAgICAgICBibG9jay5tb3ZlKCk7XG4gICAgICB9IFxuICAgICAgXG4gICAgICBibG9jay5tb3ZlKCk7XG4gICAgICBibG9jay5kcmF3KHRoaXMuY3R4KTtcbiAgICB9KVxuXG4gICAgdGhpcy5iYWRHdXlzMS5mb3JFYWNoKCBibG9jayA9PiB7XG4gICAgICBibG9jay5keCA9IC0uMjU7XG4gICAgICBcbiAgICAgIGJsb2NrLm1vdmUoKTtcbiAgICAgIGJsb2NrLmRyYXcodGhpcy5jdHgpO1xuICAgIH0pXG4gIH1cblxuICBjb250cm9sRnJvZygpIHtcbiAgICBjb25zdCB7IGNhbnZhcyB9ID0gdGhpcy5jdHg7XG5cbiAgICB0aGlzLmZyb2cuZm9yRWFjaCggYmxvY2sgPT4ge1xuICAgICAgY29uc3QgdGhpc0Zyb2cgPSB0aGlzLmZyb2dbMF07XG4gICAgICBpZiAodGhpc0Zyb2cueCA8IDYwMCAmJiB0aGlzRnJvZy54ID4gMCAmJiB0aGlzRnJvZy55IDwgNjAwICYmIHRoaXNGcm9nLnkgPiAwKSB7XG5cbiAgICAgICAgYmxvY2subW92ZSgpO1xuICAgICAgICBibG9jay5kcmF3KHRoaXMuY3R4KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5iYWRHdXlzMS5mb3JFYWNoKCBndXkgPT4ge1xuICAgICAgICBpZiAoZ3V5LmlzQ29sbGlkaW5nV2l0aCh0aGlzRnJvZykpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnQkFORyEhJyk7XG4gICAgICAgICAgY29uc29sZS5sb2coY2FudmFzKTtcblxuICAgICAgICAgIHRoaXNGcm9nLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgICAgICAgIHRoaXNGcm9nLnkgPSBjYW52YXMuaGVpZ2h0IC0gMzA7XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB9KVxuICB9XG5cbiAgLy8gZHJhdyBvbmUgZnJhbWUgb2Ygb3VyIGdhbWVcbiAgYW5pbWF0ZSgpIHtcbiAgICBjb25zdCB7IGNhbnZhcyB9ID0gdGhpcy5jdHg7XG4gICAgdGhpcy5kcmF3Q2FycygpO1xuICAgIHRoaXMuY29udHJvbEZyb2coKTtcbiAgfVxuXG4gIGVuZEdhbWUoKSB7XG4gICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gIH1cblxuICBpc092ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZU92ZXI7XG4gIH1cblxuICB0b2dnbGVQYXVzZSgpIHtcbiAgICB0aGlzLnBhdXNlZCA9ICF0aGlzLnBhdXNlZDtcbiAgfVxuXG4gIGhhbmRsZUtleURvd24oZSkge1xuICAgICAgY29uc3QgeyBjYW52YXMgfSA9IHRoaXMuY3R4O1xuXG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB7XG4gICAgICBkeDogMCxcbiAgICAgIGR5OiAwXG4gICAgfTtcblxuICAgIGlmIChlLmtleSA9PT0gJ0Fycm93UmlnaHQnICYmIHRoaXMuZnJvZ1swXS54IDwgKGNhbnZhcy53aWR0aCAtIDYwKSkge1xuICAgICAgdGhpcy5mcm9nWzBdLnggKz0gNTA7XG5cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dMZWZ0JyAmJiB0aGlzLmZyb2dbMF0ueCA+IDUwKSB7XG4gICAgICB0aGlzLmZyb2dbMF0ueCAtPSA1MDtcblxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nICYmIHRoaXMuZnJvZ1swXS55IDwgKGNhbnZhcy5oZWlnaHQgLSA2MCkpIHtcbiAgICAgIHRoaXMuZnJvZ1swXS55ICs9IDUwO1xuXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnICYmIHRoaXMuZnJvZ1swXS55ID4gNjApIHtcbiAgICAgIHRoaXMuZnJvZ1swXS55IC09IDUwO1xuICAgIH0gXG5cbiAgICAvLyB0aGlzLmZyb2cuZm9yRWFjaCggYmxvY2sgPT4gYmxvY2suY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbikgKTtcbiAgfVxuXG59IiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuZHggPSAwO1xuICAgIHRoaXMuZHkgPSAwO1xuICAgIHRoaXMuZHh2ID0gMTtcbiAgICB0aGlzLmR5diA9IDE7XG4gIH1cblxuICBpc0NvbGxpZGluZ1dpdGgob2JqZWN0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMueCA8IG9iamVjdC54ICsgb2JqZWN0LndpZHRoICYmIFxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA+IG9iamVjdC54ICYmXG4gICAgICB0aGlzLnkgPCBvYmplY3QueSArIG9iamVjdC5oZWlnaHQgJiZcbiAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0ID4gb2JqZWN0LnlcbiAgICApO1xuICB9XG5cbiAgaXNDb2xsaWRpbmdXaXRoV2FsbChjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMueCA8IDAgfHxcbiAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPiBjYW52YXNXaWR0aCB8fFxuICAgICAgdGhpcy55IDwgMCB8fCBcbiAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0ID4gY2FudmFzSGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjb25zdCB7IHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yIH0gPSB0aGlzO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgdGhpcy54ICs9IHRoaXMuZHggKiB0aGlzLmR4djtcbiAgICB0aGlzLnkgKz0gdGhpcy5keSAqIHRoaXMuZHl2O1xuICB9XG5cbiAgY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgIHRoaXMuZHggPSBkaXJlY3Rpb24uZHg7XG4gICAgdGhpcy5keSA9IGRpcmVjdGlvbi5keTtcbiAgfVxuXG4gIG1vdmVMb2NhdGlvbihkaXJlY3Rpb24pIHtcbiAgICB0aGlzLnggKz0gZGlyZWN0aW9uLng7XG4gICAgdGhpcy55ICs9ZGlyZWN0aW9uLnk7XG4gIH1cblxufSIsImNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL0dhbWUnKTtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUnKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG5cbi8vIFN0YXJ0IGFuaW1hdGlvbiBsb29wXG53aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcblxuZnVuY3Rpb24gZ2FtZUxvb3AgKCkge1xuXG4gIGlmIChnYW1lLmlzT3ZlcigpKSB7XG4gICAgY29uc29sZS5sb2coJ0dhbWUgT3ZlcicpO1xuXG4gIH0gZWxzZSB7XG4gICAgLy8gY2xlYXIgcHJldmlvdXMgZnJhbWVcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAvLyBkcmF3IHRoaXMgZnJhbWVcbiAgICBnYW1lLmFuaW1hdGUoKTtcbiAgfVxuXG4gIC8vIHByZXBhcmUgdG8gZHJhdyBuZXh0IGZyYW1lXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApXG59XG5cbi8vIEFkZCBrZXkgcHJlc3MgZXZlbnQgaGFuZGxlclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuXG5mdW5jdGlvbiBoYW5kbGVLZXlEb3duKGUpIHtcbiAgZ2FtZS5oYW5kbGVLZXlEb3duKGUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==