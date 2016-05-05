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
/***/ function(module, exports, __webpack_require__) {

	/**
	 AUTHOR: Joe Barbercheck
	 VERSION: 1.0
	 CREATED: 2-12-16
	 ASSIGNMENT: Text Adventure
	 Main
	 */

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _FileIO = __webpack_require__(1);

	var _FileIO2 = _interopRequireDefault(_FileIO);

	var _TestUser = __webpack_require__(2);

	var _TestUser2 = _interopRequireDefault(_TestUser);

	var _Transaction = __webpack_require__(3);

	var _Transaction2 = _interopRequireDefault(_Transaction);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var main = function () {
	    function main() {
	        _classCallCheck(this, main);

	        this.reset();
	        this.clickHandler();
	        this.sideButtons();
	    }

	    _createClass(main, [{
	        key: "reset",
	        value: function reset() {
	            document.getElementById("name").style.visibility = "hidden";
	            document.getElementById("pin").style.visibility = "hidden";
	            document.getElementById("button").style.visibility = "visible";
	            document.getElementById("button2").style.visibility = "hidden";
	            document.getElementById("checkingDeposit").style.visibility = "hidden";
	            document.getElementById("savingsDeposit").style.visibility = "hidden";
	            document.getElementById("depositValue").style.visibility = "hidden";
	        }
	    }, {
	        key: "clickHandler",
	        value: function clickHandler() {
	            document.getElementById("button").addEventListener("click", function () {
	                new _FileIO2.default.pullInfo("public/data/infoBox.csv", main.setInfoBoxData);
	            });
	        }
	    }, {
	        key: "sideButtons",
	        value: function sideButtons() {
	            document.getElementById("deposit").addEventListener("click", function () {
	                var transaction = _Transaction2.default.deposit(_TestUser2.default.checking, _TestUser2.default.savings);
	            });
	            document.getElementById("cancel").addEventListener("click", function () {
	                window.alert("Jokes on you comrade! Communism can only pay for so much, what would you rather have? food or a cancel button? DO YOUR PART! ");;
	            });
	            document.getElementById("withdraw").addEventListener("click", function () {
	                var transaction = _Transaction2.default.withdraw(_TestUser2.default.checking, _TestUser2.default.savings);
	            });
	            document.getElementById("transfer").addEventListener("click", function () {
	                var transaction = _Transaction2.default.transfer(_TestUser2.default.checking, _TestUser2.default.savings);
	            });
	        }
	    }], [{
	        key: "setInfoBoxData",
	        value: function setInfoBoxData(finalData) {
	            main.boxData = finalData;
	            main.enterInfo();
	        }
	    }, {
	        key: "enterInfo",
	        value: function enterInfo() {
	            var name = void 0;
	            var pin = void 0;
	            document.getElementById("infoBox").innerHTML = main.boxData[0][1];
	            document.getElementById("name").style.visibility = "visible";
	            document.getElementById("pin").style.visibility = "visible";
	            document.getElementById("button").addEventListener("click", function () {
	                document.getElementById("button").style.visibility = "hidden";
	                document.getElementById("button2").style.visibility = "visible";
	                pin = document.getElementById("pin").value;
	                name = document.getElementById("name").value;
	                new _TestUser2.default(name, pin, main.showAccountData);
	            });
	        }
	    }, {
	        key: "showAccountData",
	        value: function showAccountData(correctUser, userName) {
	            document.getElementById("button2").addEventListener("click", function () {
	                document.getElementById("button2").style.visibility = "hidden";
	                document.getElementById("pin").style.visibility = "hidden";
	                console.log(correctUser);
	                document.getElementById("infoBox").innerHTML = main.boxData[0][2] + userName + "<br><br>" + "Your checking balance is:" + _TestUser2.default.checking + "<br><br>" + "Your savings balance is:" + _TestUser2.default.savings;
	                document.getElementById("name").style.visibility = "hidden";
	            });
	        }
	    }]);

	    return main;
	}();

	window.onload = function () {
	    new main();
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 AUTHOR: Joe Barbercheck
	 VERSION: 1.0
	 CREATED: 2-12-16
	 ASSIGNMENT: Text Adventure
	 File I/O
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FileIO = function () {
	    function FileIO() {
	        _classCallCheck(this, FileIO);
	    }

	    _createClass(FileIO, null, [{
	        key: "pullInfo",
	        value: function pullInfo(filePath, callback) {
	            var request = new XMLHttpRequest();
	            request.open("GET", filePath, true);
	            request.send();
	            request.onload = function () {
	                var COLUMNS = 10;
	                var data = void 0,
	                    middleData = void 0,
	                    finalData = [];
	                if (request.readyState === 4 && request.status === 200) {
	                    data = request.responseText.split(/\n/);
	                }
	                for (var i = 0; i < data.length; i++) {
	                    middleData = data[i].split(/,/);
	                    finalData[i] = []; //makes it an MD array
	                    for (var j = 0; j < COLUMNS; j++) {
	                        finalData[i][j] = middleData[j];
	                    }
	                }
	                callback(finalData);
	            };
	        }
	    }]);

	    return FileIO;
	}();

	exports.default = FileIO;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 AUTHOR: Joe Barbercheck
	 VERSION: 1.0
	 CREATED: 2-12-16
	 ASSIGNMENT: Text Adventure
	 TestUser
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _FileIO = __webpack_require__(1);

	var _FileIO2 = _interopRequireDefault(_FileIO);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TestUser = function () {
	    function TestUser(name, pin, callback) {
	        _classCallCheck(this, TestUser);

	        TestUser.userName = name;
	        TestUser.userPin = pin;
	        new _FileIO2.default.pullInfo("public/data/users.csv", TestUser.testData);
	        callback(TestUser.correctUser, TestUser.userName);
	    }

	    _createClass(TestUser, null, [{
	        key: "testData",
	        value: function testData(finalData) {
	            var LENGTH = finalData.length;
	            for (var i = 0; i < LENGTH; i++) {
	                if (TestUser.userName == finalData[i][0] && TestUser.userPin == finalData[i][1]) {
	                    TestUser.checking = finalData[i][2];
	                    TestUser.savings = finalData[i][3];
	                    TestUser.correctUser = true;
	                }
	            }
	        }
	    }]);

	    return TestUser;
	}();

	exports.default = TestUser;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 AUTHOR: Joe Barbercheck
	 VERSION: 1.0
	 CREATED: 2-12-16
	 ASSIGNMENT: Text Adventure
	 Main
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _FileIO = __webpack_require__(1);

	var _FileIO2 = _interopRequireDefault(_FileIO);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Transaction = function () {
	    function Transaction() {
	        _classCallCheck(this, Transaction);
	    }

	    _createClass(Transaction, null, [{
	        key: "deposit",
	        value: function deposit(checking, savings) {
	            Transaction.checking = checking;
	            Transaction.savings = savings;
	            new _FileIO2.default.pullInfo("public/data/infoBox.csv", Transaction.setDepositInfo);
	        }
	    }, {
	        key: "setDepositInfo",
	        value: function setDepositInfo(finalData) {
	            Transaction.boxData = finalData;
	            document.getElementById("infoBox").innerHTML = finalData[1][0];
	            document.getElementById("checkingDeposit").style.visibility = "visible";
	            document.getElementById("savingsDeposit").style.visibility = "visible";
	            document.getElementById("depositValue").style.visibility = "visible";
	            document.getElementById("deposit").addEventListener("click", function () {
	                if (document.getElementById("savingsDeposit").checked) {
	                    Transaction.depositSavings = document.getElementById("depositValue").value;
	                    Transaction.savings = parseInt(Transaction.savings) + parseInt(Transaction.depositSavings);
	                    window.alert("Comrade! Remember this number, it is your new savings balance!    " + Transaction.savings);
	                } else if (document.getElementById("checkingDeposit").checked) {
	                    Transaction.depositChecking = document.getElementById("depositValue").value;
	                    Transaction.checking = parseInt(Transaction.checking) + parseInt(Transaction.depositChecking);
	                    window.alert("Comrade! Remember this number, it is your new checking balance!    " + Transaction.checking);
	                }
	            });
	        }
	    }, {
	        key: "withdraw",
	        value: function withdraw(checking, savings) {
	            Transaction.checking = checking;
	            Transaction.savings = savings;
	            new _FileIO2.default.pullInfo("public/data/infoBox.csv", Transaction.setWithdrawInfo);
	        }
	    }, {
	        key: "setWithdrawInfo",
	        value: function setWithdrawInfo(finalData) {
	            Transaction.boxData = finalData;
	            document.getElementById("infoBox").innerHTML = finalData[1][1];
	            document.getElementById("checkingDeposit").style.visibility = "visible";
	            document.getElementById("savingsDeposit").style.visibility = "visible";
	            document.getElementById("depositValue").style.visibility = "visible";
	            document.getElementById("withdraw").addEventListener("click", function () {
	                if (document.getElementById("savingsDeposit").checked) {
	                    Transaction.depositSavings = document.getElementById("depositValue").value;
	                    Transaction.savings = parseInt(Transaction.savings) - parseInt(Transaction.depositSavings);
	                    window.alert("Comrade! Remember this number, it is your new savings balance!    " + Transaction.savings);
	                } else if (document.getElementById("checkingDeposit").checked) {
	                    Transaction.depositChecking = document.getElementById("depositValue").value;
	                    Transaction.checking = parseInt(Transaction.checking) - parseInt(Transaction.depositChecking);
	                    window.alert("Comrade! Remember this number, it is your new checking balance!    " + Transaction.checking);
	                }
	            });
	        }
	    }]);

	    return Transaction;
	}();

	exports.default = Transaction;

/***/ }
/******/ ]);