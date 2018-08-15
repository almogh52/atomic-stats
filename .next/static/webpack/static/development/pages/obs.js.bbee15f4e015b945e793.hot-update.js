webpackHotUpdate("static/development/pages/obs.js",{

/***/ "./pages/obs.js":
/*!**********************!*\
  !*** ./pages/obs.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ObsOverlay; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/base-page */ "./components/base-page.js");
/* harmony import */ var rmwc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rmwc */ "./node_modules/rmwc/index.js");
/* harmony import */ var rmwc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rmwc__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_animated_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-animated-number */ "./node_modules/react-animated-number/build/index.js");
/* harmony import */ var react_animated_number__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_animated_number__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/almog/Desktop/atomic-stats 3/pages/obs.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var ObsOverlay =
/*#__PURE__*/
function (_BasePage) {
  _inherits(ObsOverlay, _BasePage);

  _createClass(ObsOverlay, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, stats, displayName;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                stats = undefined, displayName = undefined;
                _context.next = 4;
                return node_fetch__WEBPACK_IMPORTED_MODULE_2___default()("https://atomic-api.herokuapp.com/player/".concat(query.username)).then(function (response) {
                  return response.json();
                }).then(function (json) {
                  if ('error' in json) {//stats = {displayName: "Unknown"};
                  } else {
                    displayName = json.displayName; //stats = json.stats.alltime[query.platform].total;

                    stats = {
                      "score": 563892,
                      "matches": 2619,
                      "wins": 156,
                      "kills": 4626,
                      "time": 101,
                      "kd": "1.87",
                      "winrate": "5.92",
                      "kpm": "1.76",
                      "spm": "215.39"
                    };
                  }
                }).catch(function (ex) {});

              case 4:
                return _context.abrupt("return", {
                  displayName: displayName,
                  username: query.username,
                  platform: query.platform,
                  startStats: {
                    "score": 563892,
                    "matches": 2618,
                    "wins": 155,
                    "kills": 4618,
                    "time": 101,
                    "kd": "1.87",
                    "winrate": "5.92",
                    "kpm": "1.76",
                    "spm": "215.39"
                  },
                  noLayout: true
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function ObsOverlay(props) {
    var _this;

    _classCallCheck(this, ObsOverlay);

    _this = _possibleConstructorReturn(this, (ObsOverlay.__proto__ || Object.getPrototypeOf(ObsOverlay)).call(this, props));
    _this.state = {
      matches: 0,
      wins: 0,
      kills: 0,
      newStats: {
        "score": 563892,
        "matches": 2619,
        "wins": 156,
        "kills": 4626,
        "time": 101,
        "kd": "1.87",
        "winrate": "5.92",
        "kpm": "1.76",
        "spm": "215.39"
      }
    };
    console.log(_this.props.startStats);
    _this.updateStats = _this.updateStats.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ObsOverlay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var intervalId = setInterval(this.updateStats, 5000); // store intervalId in the state so it can be accessed later:

      this.setState({
        intervalId: intervalId
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // use intervalId from the state to clear the interval
      clearInterval(this.state.intervalId);
    }
  }, {
    key: "updateStats",
    value: function updateStats() {
      var _this2 = this;

      node_fetch__WEBPACK_IMPORTED_MODULE_2___default()("https://atomic-api.herokuapp.com/player/".concat(this.props.username)).then(function (response) {
        return response.json();
      }).then(function (json) {
        if ('error' in json) {//stats = {displayName: "Unknown"};
        } else {
          _this2.setState({
            newStats: json.stats.alltime[_this2.props.platform].total
          });
        }
      }).catch(function (ex) {});
    }
  }, {
    key: "div",
    value: function div(a, b) {
      return b == 0 ? a : a / b;
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props.startStats);
      console.log(this.newStats);

      if (!this.props.startStats) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }, "Player not found!");
      } else {
        var _React$createElement, _React$createElement2, _React$createElement3, _React$createElement4;

        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "atomic-obs-overlay",
          style: {
            width: "270px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "atomic-obs-wins",
          style: {
            minWidth: "270px",
            display: "flex",
            justifyContent: "space-evenly"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
          className: "fas fa-trophy",
          style: {
            color: "#42a5f5",
            position: "relative",
            fontSize: "30px",
            top: "-3px",
            paddingRight: "20px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
          style: {
            color: "#42a5f5",
            fontFamily: "Burbank",
            fontSize: "40px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }, "Wins:")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_animated_number__WEBPACK_IMPORTED_MODULE_5___default.a, (_React$createElement = {
          component: "text",
          value: this.newStats.wins - this.props.startStats.wins,
          style: {
            paddingRight: "10px",
            fontFamily: "Burbank",
            fontSize: "40px",
            color: "white"
          },
          duration: 1000
        }, _defineProperty(_React$createElement, "component", "span"), _defineProperty(_React$createElement, "stepPrecision", 0), _defineProperty(_React$createElement, "__source", {
          fileName: _jsxFileName,
          lineNumber: 92
        }), _React$createElement))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "atomic-obs-stats",
          style: {
            paddingTop: "15px",
            minWidth: "270px",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "column"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
          style: {
            color: "#d32f2f",
            flexDirection: "row",
            fontFamily: "Burbank",
            fontSize: "25px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }, "K/D"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_animated_number__WEBPACK_IMPORTED_MODULE_5___default.a, (_React$createElement2 = {
          component: "text",
          value: this.div(this.newStats.kills - this.props.startStats.kills, this.newStats.matches - this.newStats.wins - (this.props.startStats.matches - this.props.startStats.wins)),
          style: {
            paddingTop: "5px",
            flexWrap: "row",
            fontFamily: "Burbank",
            fontSize: "34px",
            color: "white"
          },
          duration: 1000
        }, _defineProperty(_React$createElement2, "component", "span"), _defineProperty(_React$createElement2, "stepPrecision", 2), _defineProperty(_React$createElement2, "formatValue", function formatValue(n) {
          return n.toFixed(2);
        }), _defineProperty(_React$createElement2, "__source", {
          fileName: _jsxFileName,
          lineNumber: 105
        }), _React$createElement2))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "column"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
          style: {
            color: "#66bb6a",
            flexDirection: "row",
            fontFamily: "Burbank",
            fontSize: "25px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        }, "Win %"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_animated_number__WEBPACK_IMPORTED_MODULE_5___default.a, (_React$createElement3 = {
          component: "text",
          value: this.div(this.newStats.wins - this.props.startStats.wins, this.newStats.matches - this.props.startStats.matches) * 100,
          style: {
            paddingTop: "5px",
            flexWrap: "row",
            fontFamily: "Burbank",
            fontSize: "34px",
            color: "white"
          },
          duration: 1000
        }, _defineProperty(_React$createElement3, "component", "span"), _defineProperty(_React$createElement3, "stepPrecision", 2), _defineProperty(_React$createElement3, "formatValue", function formatValue(n) {
          return n.toFixed(2) + "%";
        }), _defineProperty(_React$createElement3, "__source", {
          fileName: _jsxFileName,
          lineNumber: 119
        }), _React$createElement3))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "column"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
          style: {
            color: "#ffa726",
            flexDirection: "row",
            fontFamily: "Burbank",
            fontSize: "25px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        }, "Matches"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_animated_number__WEBPACK_IMPORTED_MODULE_5___default.a, (_React$createElement4 = {
          component: "text",
          value: this.newStats.matches - this.props.startStats.matches,
          style: {
            paddingTop: "5px",
            flexWrap: "row",
            fontFamily: "Burbank",
            fontSize: "34px",
            color: "white"
          },
          duration: 1000
        }, _defineProperty(_React$createElement4, "component", "span"), _defineProperty(_React$createElement4, "stepPrecision", 0), _defineProperty(_React$createElement4, "__source", {
          fileName: _jsxFileName,
          lineNumber: 133
        }), _React$createElement4)))));
      }
    }
  }]);

  return ObsOverlay;
}(_components_base_page__WEBPACK_IMPORTED_MODULE_3__["default"]);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/obs")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=obs.js.bbee15f4e015b945e793.hot-update.js.map