/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	__webpack_require__(3);

	__webpack_require__(4);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Test = function Test() {
	    _classCallCheck(this, Test);

	    this.text = "hello world!";
	};

	var test = new Test();
	document.body.innerHTML = test.text;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	function test() {
	    for (var i = 0; i < 3; i++) {
	        console.log(i);
	    }
	    // console.log(i); 这个i访问不到
	    for (var j = 0; j < 3; j++) {
	        console.log(j);
	    }
	    console.log(j);
	    var PI = 3.1415926;
	    // PI = 6; 不可以重新赋值
	    console.log(PI);
	}
	test();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	// 解构赋值
	{
	    var a = void 0,
	        b = void 0;
	    a = 1;
	    b = 2;

	    console.log(a, b);
	}

	{
	    var _a = void 0,
	        _b = void 0,
	        rest = void 0;
	    _a = 1;
	    _b = 2;
	    rest = [3, 4, 5, 6];

	    console.log(_a, _b, rest);
	}

	{
	    var _a2 = 1;
	    var _b2 = 2;
	    var _ref = [_b2, _a2];
	    _a2 = _ref[0];
	    _b2 = _ref[1];

	    console.log(_a2, _b2);
	}

	{
	    var metaData = {
	        title: 'abc',
	        test: [{
	            title: "testTitle",
	            desc: "description"
	        }]
	    };

	    var estitle = metaData.title,
	        _metaData$test = _slicedToArray(metaData.test, 1),
	        entitle = _metaData$test[0].title;

	    console.log(estitle, entitle);
	}

/***/ })
/******/ ]);