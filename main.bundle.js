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


    this.frog = [new Block(canvas.width / 2 - 10.5, canvas.height - 53, 20, 20, '#00CC00', 'green')];

    this.bigLogs = [new Block(0, 234.8, 20, 100, 'brown', 'yellow'), new Block(240, 234.8, 20, 100, 'maroon', 'yellow'), new Block(480, 234.8, 20, 100, 'magenta', 'yellow')];

    this.yellowCars = [new Block(30, 502.4, 20, 20, 'yellow', 'black'), new Block(130, 502.4, 20, 20, 'yellow', 'black'), new Block(230, 502.4, 20, 20, 'yellow', 'black'), new Block(430, 502.4, 20, 20, 'yellow', 'black'), new Block(530, 502.4, 20, 20, 'yellow', 'black')];

    this.redCars = [new Block(650, 457.8, 20, 20, 'red', 'black'), new Block(450, 457.8, 20, 20, 'red', 'black'), new Block(250, 457.8, 20, 20, 'red', 'black')];

    this.aquaCars = [new Block(650, 413.2, 20, 40, 'aqua', 'black'), new Block(450, 413.2, 20, 40, 'aqua', 'black'), new Block(250, 413.2, 20, 40, 'aqua', 'black')];

    this.orangeCars = [new Block(630, 368.6, 20, 20, 'orange', 'black'), new Block(730, 368.6, 20, 20, 'orange', 'black'), new Block(830, 368.6, 20, 20, 'orange', 'black')];

    this.purpleCars = [new Block(490, 324, 20, 60, 'purple', 'black'), new Block(290, 324, 20, 60, 'purple', 'black'), new Block(590, 324, 20, 60, 'purple', 'black')];
  }

  // draw one frame of our game


  _createClass(Game, [{
    key: 'animate',
    value: function animate() {
      var canvas = this.ctx.canvas;


      this.drawCars(this.yellowCars, 1.5);
      this.drawCars(this.redCars, -1);
      this.drawCars(this.aquaCars, 1);
      this.drawCars(this.orangeCars, -1);
      this.drawCars(this.purpleCars, .75);

      this.drawLogs(this.bigLogs, 1);

      this.controlFrog();
    }
  }, {
    key: 'drawCars',
    value: function drawCars(arr, speed) {
      var _this = this;

      arr.forEach(function (block) {
        block.dx = speed;
        if (block.x >= 700) {
          block.x = -30;
        } else if (block.x <= -100) {
          block.x = 650;
        }

        block.move();
        block.draw(_this.ctx);
      });
    }
  }, {
    key: 'drawLogs',
    value: function drawLogs(arr, speed) {
      var _this2 = this;

      arr.forEach(function (block) {
        block.dx = speed;
        if (block.x >= 700) {
          block.x = -30;
        } else if (block.x <= -100) {
          block.x = 650;
        }

        block.move();
        block.draw(_this2.ctx);
      });
    }
  }, {
    key: 'controlFrog',
    value: function controlFrog() {
      var _this3 = this;

      var canvas = this.ctx.canvas;


      this.frog.forEach(function (block) {
        var thisFrog = _this3.frog[0];
        if (thisFrog.x < 600 && thisFrog.x > 0 && thisFrog.y < 600 && thisFrog.y > 0) {

          block.move();
          block.draw(_this3.ctx);
        }

        _this3.frogCollision(_this3.yellowCars);
        _this3.frogCollision(_this3.redCars);
        _this3.frogCollision(_this3.aquaCars);
        _this3.frogCollision(_this3.orangeCars);
        _this3.frogCollision(_this3.purpleCars);

        _this3.frogLanding(_this3.bigLogs);
      });
    }
  }, {
    key: 'frogCollision',
    value: function frogCollision(arr) {
      var _this4 = this;

      var canvas = this.ctx.canvas;

      arr.forEach(function (guy) {
        if (guy.isCollidingWith(_this4.frog[0])) {
          console.log('BANG!!');

          _this4.frog[0].x = canvas.width / 2 - 10;
          _this4.frog[0].y = canvas.height - 53;
        }
      });
    }
  }, {
    key: 'frogLanding',
    value: function frogLanding(arr) {
      var _this5 = this;

      var canvas = this.ctx.canvas;
      // this.frog[0].dx = 0;

      arr.forEach(function (guy) {
        if (_this5.frog[0].y < 260 && guy.isCollidingWith(_this5.frog[0])) {
          console.log(guy.isCollidingWith(_this5.frog[0]));
          console.log(_this5.frog[0].y);
          _this5.frog[0].dx = 1;
        } else if (guy.isCollidingWith(_this5.frog[0]) === false && _this5.frog[0].y < 260) {
          console.log(guy.isCollidingWith(_this5.frog[0]));
          _this5.frog[0].x = canvas.width / 2 - 10;
          _this5.frog[0].y = canvas.height - 53;
        } else if (_this5.frog[0].y > 259) {
          _this5.frog[0].dx = 0;
        }
      });
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
        console.log(this.frog[0].y);
        console.log(this.frog[0].dx);

        this.frog[0].y += 44.6;
      } else if (e.key === 'ArrowUp' && this.frog[0].y > 40) {
        console.log(this.frog[0].y);
        this.frog[0].y -= 44.6;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Jsb2NrLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWVQaWVjZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiYm9yZGVyQ29sb3IiLCJjdHgiLCJzdHJva2VTdHlsZSIsInN0cm9rZVJlY3QiLCJCbG9jayIsInBhdXNlZCIsImdhbWVPdmVyIiwiY2FudmFzIiwiZnJvZyIsImJpZ0xvZ3MiLCJ5ZWxsb3dDYXJzIiwicmVkQ2FycyIsImFxdWFDYXJzIiwib3JhbmdlQ2FycyIsInB1cnBsZUNhcnMiLCJkcmF3Q2FycyIsImRyYXdMb2dzIiwiY29udHJvbEZyb2ciLCJhcnIiLCJzcGVlZCIsImZvckVhY2giLCJibG9jayIsImR4IiwibW92ZSIsImRyYXciLCJ0aGlzRnJvZyIsImZyb2dDb2xsaXNpb24iLCJmcm9nTGFuZGluZyIsImd1eSIsImlzQ29sbGlkaW5nV2l0aCIsImNvbnNvbGUiLCJsb2ciLCJlIiwiZGlyZWN0aW9uIiwiZHkiLCJrZXkiLCJkeHYiLCJkeXYiLCJvYmplY3QiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiR2FtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJnYW1lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2FtZUxvb3AiLCJpc092ZXIiLCJjbGVhclJlY3QiLCJhbmltYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleURvd24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QUwsR0FBVVcsVUFBVVgsRUFBcEI7QUFDQSxXQUFLWSxFQUFMLEdBQVVELFVBQVVDLEVBQXBCO0FBQ0Q7QUE5Q0g7QUFBQTtBQUFBLGlDQWdEZUQsU0FoRGYsRUFnRDBCO0FBQ3RCLFdBQUt0QyxDQUFMLElBQVVzQyxVQUFVdEMsQ0FBcEI7QUFDQSxXQUFLQyxDQUFMLElBQVNxQyxVQUFVckMsQ0FBbkI7QUFDRDtBQW5ESDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTStDLE9BQU8sbUJBQUFuRCxDQUFRLDZCQUFSLENBQWI7O0FBRUEsSUFBTWUsU0FBU3FDLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZjtBQUNBLElBQU01QyxNQUFNTSxPQUFPdUMsVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0EsSUFBTUMsT0FBTyxJQUFJSixJQUFKLENBQVMxQyxHQUFULENBQWI7O0FBRUE7QUFDQStDLE9BQU9DLHFCQUFQLENBQTZCQyxRQUE3Qjs7QUFFQSxTQUFTQSxRQUFULEdBQXFCOztBQUVuQixNQUFJSCxLQUFLSSxNQUFMLEVBQUosRUFBbUI7QUFDakJyQixZQUFRQyxHQUFSLENBQVksV0FBWjtBQUVELEdBSEQsTUFHTztBQUNMO0FBQ0E5QixRQUFJbUQsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0I3QyxPQUFPVCxLQUEzQixFQUFrQ1MsT0FBT1YsTUFBekM7O0FBRUE7QUFDQWtELFNBQUtNLE9BQUw7QUFDRDs7QUFFRDtBQUNBTCxTQUFPQyxxQkFBUCxDQUE2QkMsUUFBN0I7QUFDRDs7QUFFRDtBQUNBTixTQUFTVSxnQkFBVCxDQUEwQixTQUExQixFQUFxQ0MsYUFBckM7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QnZCLENBQXZCLEVBQTBCO0FBQ3hCZSxPQUFLUSxhQUFMLENBQW1CdkIsQ0FBbkI7QUFDRCxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZScpO1xuXG4vLyBleHRlbmQgR2FtZVBpZWNlIGNsYXNzXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEJsb2NrIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IsIGJvcmRlckNvbG9yKSB7XG4gICAgLy8gaW52b2tlIHBhcmVudCBjbGFzcyBjb25zdHJ1Y3RvclxuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKTtcblxuICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvcjtcbiAgfSBcblxuICBkcmF3KGN0eCkge1xuICAgIGNvbnN0IHt4LCB5LCBoZWlnaHQsIHdpZHRoLCBib3JkZXJDb2xvciB9ID0gdGhpcztcblxuICAgIC8vIGNhbGwgcGFyZW50IGNsYXNzIGRyYXcgZnVuY3Rpb25cbiAgICBzdXBlci5kcmF3KGN0eCk7XG5cbiAgICAvLyBkcmF3IGJsb2NrIGJvcmRlclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGJvcmRlckNvbG9yO1xuICAgIGN0eC5zdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG59IiwiLy8gRml4IGZyb2cgc28gdGhhdCBpdCBpcyBhbiBvYmplY3QsIG5vdCBhbiBhcnJheSBvZiBvbmUgb2JqZWN0LlxuXG5cblxuY29uc3QgQmxvY2sgPSByZXF1aXJlKCcuL0Jsb2NrJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuXG4gICAgY29uc3QgeyBjYW52YXMgfSA9IHRoaXMuY3R4O1xuXG4gICAgdGhpcy5mcm9nID0gW1xuICAgICAgbmV3IEJsb2NrKChjYW52YXMud2lkdGggLyAyKSAtIDEwLjUsIGNhbnZhcy5oZWlnaHQgLSA1MywgMjAsIDIwLCAnIzAwQ0MwMCcsICdncmVlbicpLFxuICAgIF1cblxuICAgIHRoaXMuYmlnTG9ncyA9IFtcbiAgICAgIG5ldyBCbG9jaygwLCAyMzQuOCwgMjAsIDEwMCwgJ2Jyb3duJywgJ3llbGxvdycpLFxuICAgICAgbmV3IEJsb2NrKDI0MCwgMjM0LjgsIDIwLCAxMDAsICdtYXJvb24nLCAneWVsbG93JyksXG4gICAgICBuZXcgQmxvY2soNDgwLCAyMzQuOCwgMjAsIDEwMCwgJ21hZ2VudGEnLCAneWVsbG93JyksXG4gICAgXTtcblxuICAgIHRoaXMueWVsbG93Q2FycyA9IFtcbiAgICAgIG5ldyBCbG9jaygzMCwgNTAyLjQsIDIwLCAyMCwgJ3llbGxvdycsICdibGFjaycpLFxuICAgICAgbmV3IEJsb2NrKDEzMCwgNTAyLjQsIDIwLCAyMCwgJ3llbGxvdycsICdibGFjaycpLFxuICAgICAgbmV3IEJsb2NrKDIzMCwgNTAyLjQsIDIwLCAyMCwgJ3llbGxvdycsICdibGFjaycpLFxuICAgICAgbmV3IEJsb2NrKDQzMCwgNTAyLjQsIDIwLCAyMCwgJ3llbGxvdycsICdibGFjaycpLFxuICAgICAgbmV3IEJsb2NrKDUzMCwgNTAyLjQsIDIwLCAyMCwgJ3llbGxvdycsICdibGFjaycpLFxuICAgIF07XG5cbiAgICB0aGlzLnJlZENhcnMgPSBbXG4gICAgICBuZXcgQmxvY2soNjUwLCA0NTcuOCwgMjAsIDIwLCAncmVkJywgJ2JsYWNrJyksXG4gICAgICBuZXcgQmxvY2soNDUwLCA0NTcuOCwgMjAsIDIwLCAncmVkJywgJ2JsYWNrJyksXG4gICAgICBuZXcgQmxvY2soMjUwLCA0NTcuOCwgMjAsIDIwLCAncmVkJywgJ2JsYWNrJyksXG4gICAgXTtcblxuICAgIHRoaXMuYXF1YUNhcnMgPSBbXG4gICAgICBuZXcgQmxvY2soNjUwLCA0MTMuMiwgMjAsIDQwLCAnYXF1YScsICdibGFjaycpLFxuICAgICAgbmV3IEJsb2NrKDQ1MCwgNDEzLjIsIDIwLCA0MCwgJ2FxdWEnLCAnYmxhY2snKSxcbiAgICAgIG5ldyBCbG9jaygyNTAsIDQxMy4yLCAyMCwgNDAsICdhcXVhJywgJ2JsYWNrJyksXG4gICAgXTtcblxuICAgIHRoaXMub3JhbmdlQ2FycyA9IFtcbiAgICAgIG5ldyBCbG9jayg2MzAsIDM2OC42LCAyMCwgMjAsICdvcmFuZ2UnLCAnYmxhY2snKSxcbiAgICAgIG5ldyBCbG9jayg3MzAsIDM2OC42LCAyMCwgMjAsICdvcmFuZ2UnLCAnYmxhY2snKSxcbiAgICAgIG5ldyBCbG9jayg4MzAsIDM2OC42LCAyMCwgMjAsICdvcmFuZ2UnLCAnYmxhY2snKSxcbiAgICBdO1xuXG4gICAgdGhpcy5wdXJwbGVDYXJzID0gW1xuICAgICAgbmV3IEJsb2NrKDQ5MCwgMzI0LCAyMCwgNjAsICdwdXJwbGUnLCAnYmxhY2snKSxcbiAgICAgIG5ldyBCbG9jaygyOTAsIDMyNCwgMjAsIDYwLCAncHVycGxlJywgJ2JsYWNrJyksXG4gICAgICBuZXcgQmxvY2soNTkwLCAzMjQsIDIwLCA2MCwgJ3B1cnBsZScsICdibGFjaycpLFxuICAgIF07XG5cbiAgfVxuXG4gIC8vIGRyYXcgb25lIGZyYW1lIG9mIG91ciBnYW1lXG4gIGFuaW1hdGUoKSB7XG4gICAgY29uc3QgeyBjYW52YXMgfSA9IHRoaXMuY3R4O1xuXG4gICAgdGhpcy5kcmF3Q2Fycyh0aGlzLnllbGxvd0NhcnMsIDEuNSk7XG4gICAgdGhpcy5kcmF3Q2Fycyh0aGlzLnJlZENhcnMsICgtMSkpO1xuICAgIHRoaXMuZHJhd0NhcnModGhpcy5hcXVhQ2FycywgMSk7XG4gICAgdGhpcy5kcmF3Q2Fycyh0aGlzLm9yYW5nZUNhcnMsIC0xKTtcbiAgICB0aGlzLmRyYXdDYXJzKHRoaXMucHVycGxlQ2FycywgLjc1KTtcbiAgICBcbiAgICB0aGlzLmRyYXdMb2dzKHRoaXMuYmlnTG9ncywgMSk7XG4gICAgXG4gICAgdGhpcy5jb250cm9sRnJvZygpO1xuICB9XG5cbiAgZHJhd0NhcnMoYXJyLCBzcGVlZCkge1xuICAgIGFyci5mb3JFYWNoKCBibG9jayA9PiB7XG4gICAgICBibG9jay5keCA9IHNwZWVkO1xuICAgICAgaWYgKGJsb2NrLnggPj0gNzAwKSB7XG4gICAgICAgIGJsb2NrLnggPSAtMzA7XG4gICAgICB9IGVsc2UgaWYgKGJsb2NrLnggPD0gLTEwMCkge1xuICAgICAgICBibG9jay54ID0gNjUwO1xuICAgICAgfVxuICAgICAgXG4gICAgICBibG9jay5tb3ZlKCk7XG4gICAgICBibG9jay5kcmF3KHRoaXMuY3R4KTtcbiAgICB9KVxuICB9XG5cbiAgZHJhd0xvZ3MoYXJyLCBzcGVlZCkge1xuICAgIGFyci5mb3JFYWNoKCBibG9jayA9PiB7XG4gICAgICBibG9jay5keCA9IHNwZWVkO1xuICAgICAgaWYgKGJsb2NrLnggPj0gNzAwKSB7XG4gICAgICAgIGJsb2NrLnggPSAtMzA7XG4gICAgICB9IGVsc2UgaWYgKGJsb2NrLnggPD0gLTEwMCkge1xuICAgICAgICBibG9jay54ID0gNjUwO1xuICAgICAgfVxuICAgICAgXG4gICAgICBibG9jay5tb3ZlKCk7XG4gICAgICBibG9jay5kcmF3KHRoaXMuY3R4KTtcbiAgICB9KVxuICB9XG5cbiAgY29udHJvbEZyb2coKSB7XG4gICAgY29uc3QgeyBjYW52YXMgfSA9IHRoaXMuY3R4O1xuXG4gICAgdGhpcy5mcm9nLmZvckVhY2goIGJsb2NrID0+IHtcbiAgICAgIGNvbnN0IHRoaXNGcm9nID0gdGhpcy5mcm9nWzBdO1xuICAgICAgaWYgKHRoaXNGcm9nLnggPCA2MDAgJiYgdGhpc0Zyb2cueCA+IDAgJiYgdGhpc0Zyb2cueSA8IDYwMCAmJiB0aGlzRnJvZy55ID4gMCkge1xuXG4gICAgICAgIGJsb2NrLm1vdmUoKTtcbiAgICAgICAgYmxvY2suZHJhdyh0aGlzLmN0eCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZnJvZ0NvbGxpc2lvbih0aGlzLnllbGxvd0NhcnMpO1xuICAgICAgdGhpcy5mcm9nQ29sbGlzaW9uKHRoaXMucmVkQ2Fycyk7XG4gICAgICB0aGlzLmZyb2dDb2xsaXNpb24odGhpcy5hcXVhQ2Fycyk7XG4gICAgICB0aGlzLmZyb2dDb2xsaXNpb24odGhpcy5vcmFuZ2VDYXJzKTtcbiAgICAgIHRoaXMuZnJvZ0NvbGxpc2lvbih0aGlzLnB1cnBsZUNhcnMpO1xuXG4gICAgICB0aGlzLmZyb2dMYW5kaW5nKHRoaXMuYmlnTG9ncyk7XG4gICAgfSlcbiAgfVxuXG4gIGZyb2dDb2xsaXNpb24oYXJyKSB7XG4gICAgY29uc3QgeyBjYW52YXMgfSA9IHRoaXMuY3R4O1xuICAgIGFyci5mb3JFYWNoKCBndXkgPT4ge1xuICAgICAgaWYgKGd1eS5pc0NvbGxpZGluZ1dpdGgodGhpcy5mcm9nWzBdKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnQkFORyEhJyk7XG5cbiAgICAgICAgdGhpcy5mcm9nWzBdLnggPSBjYW52YXMud2lkdGggLyAyIC0gMTA7XG4gICAgICAgIHRoaXMuZnJvZ1swXS55ID0gY2FudmFzLmhlaWdodCAtIDUzO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmcm9nTGFuZGluZyhhcnIpIHtcbiAgICBjb25zdCB7IGNhbnZhcyB9ID0gdGhpcy5jdHg7XG4gICAgLy8gdGhpcy5mcm9nWzBdLmR4ID0gMDtcbiAgICBhcnIuZm9yRWFjaCggZ3V5ID0+IHtcbiAgICAgIGlmICh0aGlzLmZyb2dbMF0ueSA8IDI2MCAmJiBndXkuaXNDb2xsaWRpbmdXaXRoKHRoaXMuZnJvZ1swXSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coZ3V5LmlzQ29sbGlkaW5nV2l0aCh0aGlzLmZyb2dbMF0pKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZyb2dbMF0ueSk7XG4gICAgICAgIHRoaXMuZnJvZ1swXS5keCA9IDE7XG4gICAgICB9IGVsc2UgaWYgKGd1eS5pc0NvbGxpZGluZ1dpdGgodGhpcy5mcm9nWzBdKSA9PT0gZmFsc2UgJiYgdGhpcy5mcm9nWzBdLnkgPCAyNjApIHtcbiAgICAgICAgY29uc29sZS5sb2coZ3V5LmlzQ29sbGlkaW5nV2l0aCh0aGlzLmZyb2dbMF0pKVxuICAgICAgICB0aGlzLmZyb2dbMF0ueCA9IGNhbnZhcy53aWR0aCAvIDIgLSAxMDtcbiAgICAgICAgdGhpcy5mcm9nWzBdLnkgPSBjYW52YXMuaGVpZ2h0IC0gNTM7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZnJvZ1swXS55ID4gMjU5KSB7XG4gICAgICAgIHRoaXMuZnJvZ1swXS5keCA9IDA7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGVuZEdhbWUoKSB7XG4gICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gIH1cblxuICBpc092ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZU92ZXI7XG4gIH1cblxuICB0b2dnbGVQYXVzZSgpIHtcbiAgICB0aGlzLnBhdXNlZCA9ICF0aGlzLnBhdXNlZDtcbiAgfVxuXG4gIGhhbmRsZUtleURvd24oZSkge1xuICAgICAgY29uc3QgeyBjYW52YXMgfSA9IHRoaXMuY3R4O1xuXG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB7XG4gICAgICBkeDogMCxcbiAgICAgIGR5OiAwXG4gICAgfTtcblxuICAgIGlmIChlLmtleSA9PT0gJ0Fycm93UmlnaHQnICYmIHRoaXMuZnJvZ1swXS54IDwgKGNhbnZhcy53aWR0aCAtIDYwKSkge1xuICAgICAgdGhpcy5mcm9nWzBdLnggKz0gNDc7XG5cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dMZWZ0JyAmJiB0aGlzLmZyb2dbMF0ueCA+IDUwKSB7XG4gICAgICB0aGlzLmZyb2dbMF0ueCAtPSA0NztcblxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nICYmIHRoaXMuZnJvZ1swXS55IDwgKGNhbnZhcy5oZWlnaHQgLSA2MCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZnJvZ1swXS55KTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZnJvZ1swXS5keCk7XG5cbiAgICAgIHRoaXMuZnJvZ1swXS55ICs9IDQ0LjY7XG5cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcgJiYgdGhpcy5mcm9nWzBdLnkgPiA0MCkge1xuICAgICAgY29uc29sZS5sb2codGhpcy5mcm9nWzBdLnkpO1xuICAgICAgdGhpcy5mcm9nWzBdLnkgLT0gNDQuNjtcbiAgICB9IFxuXG4gICAgLy8gdGhpcy5mcm9nLmZvckVhY2goIGJsb2NrID0+IGJsb2NrLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pICk7XG4gIH1cblxufSIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLmR4ID0gMDtcbiAgICB0aGlzLmR5ID0gMDtcbiAgICB0aGlzLmR4diA9IDE7XG4gICAgdGhpcy5keXYgPSAxO1xuICB9XG5cbiAgaXNDb2xsaWRpbmdXaXRoKG9iamVjdCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnggPCBvYmplY3QueCArIG9iamVjdC53aWR0aCAmJiBcbiAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPiBvYmplY3QueCAmJlxuICAgICAgdGhpcy55IDwgb2JqZWN0LnkgKyBvYmplY3QuaGVpZ2h0ICYmXG4gICAgICB0aGlzLnkgKyB0aGlzLmhlaWdodCA+IG9iamVjdC55XG4gICAgKTtcbiAgfVxuXG4gIGlzQ29sbGlkaW5nV2l0aFdhbGwoY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnggPCAwIHx8XG4gICAgICB0aGlzLnggKyB0aGlzLndpZHRoID4gY2FudmFzV2lkdGggfHxcbiAgICAgIHRoaXMueSA8IDAgfHwgXG4gICAgICB0aGlzLnkgKyB0aGlzLmhlaWdodCA+IGNhbnZhc0hlaWdodFxuICAgIClcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3QgeyB4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciB9ID0gdGhpcztcblxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIHRoaXMueCArPSB0aGlzLmR4ICogdGhpcy5keHY7XG4gICAgdGhpcy55ICs9IHRoaXMuZHkgKiB0aGlzLmR5djtcbiAgfVxuXG4gIGNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICB0aGlzLmR4ID0gZGlyZWN0aW9uLmR4O1xuICAgIHRoaXMuZHkgPSBkaXJlY3Rpb24uZHk7XG4gIH1cblxuICBtb3ZlTG9jYXRpb24oZGlyZWN0aW9uKSB7XG4gICAgdGhpcy54ICs9IGRpcmVjdGlvbi54O1xuICAgIHRoaXMueSArPWRpcmVjdGlvbi55O1xuICB9XG5cbn0iLCJjb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lJyk7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lJyk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuXG4vLyBTdGFydCBhbmltYXRpb24gbG9vcFxud2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG5cbmZ1bmN0aW9uIGdhbWVMb29wICgpIHtcblxuICBpZiAoZ2FtZS5pc092ZXIoKSkge1xuICAgIGNvbnNvbGUubG9nKCdHYW1lIE92ZXInKTtcblxuICB9IGVsc2Uge1xuICAgIC8vIGNsZWFyIHByZXZpb3VzIGZyYW1lXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy8gZHJhdyB0aGlzIGZyYW1lXG4gICAgZ2FtZS5hbmltYXRlKCk7XG4gIH1cblxuICAvLyBwcmVwYXJlIHRvIGRyYXcgbmV4dCBmcmFtZVxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKVxufVxuXG4vLyBBZGQga2V5IHByZXNzIGV2ZW50IGhhbmRsZXJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcblxuZnVuY3Rpb24gaGFuZGxlS2V5RG93bihlKSB7XG4gIGdhbWUuaGFuZGxlS2V5RG93bihlKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=