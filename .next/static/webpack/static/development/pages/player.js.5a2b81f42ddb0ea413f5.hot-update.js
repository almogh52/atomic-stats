webpackHotUpdate("static/development/pages/player.js",{

/***/ "./pages/player.js":
/*!*************************!*\
  !*** ./pages/player.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/page */ "./components/page.js");
/* harmony import */ var _styles_player_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/player.scss */ "./styles/player.scss");
/* harmony import */ var _styles_player_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_player_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rmwc_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rmwc/Select */ "./node_modules/rmwc/Select/index.js");
/* harmony import */ var rmwc_Select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rmwc_Select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rmwc_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rmwc/Typography */ "./node_modules/rmwc/Typography/index.js");
/* harmony import */ var rmwc_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rmwc_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rmwc_GridList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rmwc/GridList */ "./node_modules/rmwc/GridList/index.js");
/* harmony import */ var rmwc_GridList__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rmwc_GridList__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rmwc_Dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rmwc/Dialog */ "./node_modules/rmwc/Dialog/index.js");
/* harmony import */ var rmwc_Dialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rmwc_Dialog__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rmwc_Ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rmwc/Ripple */ "./node_modules/rmwc/Ripple/index.js");
/* harmony import */ var rmwc_Ripple__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rmwc_Ripple__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _components_atomic_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/atomic-card */ "./components/atomic-card.js");

var _jsxFileName = "/Users/almog/Desktop/atomic-stats 3/pages/player.js";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }













var numberWithCommas = function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

var doughnutCallbacks = {
  label: function label(tooltipItem, data) {
    var dataset = data.datasets[tooltipItem.datasetIndex];

    var meta = dataset._meta[Object.keys(dataset._meta)[0]];

    var total = meta.total;
    var currentValue = dataset.data[tooltipItem.index];
    var percentage = parseFloat((currentValue / total * 100).toFixed(1)); // Add commas

    currentValue = currentValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return currentValue + ' (' + percentage + '%)';
  },
  title: function title(tooltipItem, data) {
    return data.labels[tooltipItem[0].index];
  }
};

var Player =
/*#__PURE__*/
function (_Component) {
  _inherits(Player, _Component);

  _createClass(Player, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var res, query, stats;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res = _ref.res, query = _ref.query;
                stats = undefined;
                _context.next = 4;
                return node_fetch__WEBPACK_IMPORTED_MODULE_2___default()("https://atomic-api.herokuapp.com/player/".concat(query.username)).then(function (response) {
                  return response.json();
                }).then(function (json) {
                  if ('error' in json) {//stats = {displayName: "Unknown"};
                  } else {
                    stats = json;
                  }
                }).catch(function (ex) {//stats = {displayName: "Unknown"};
                });

              case 4:
                return _context.abrupt("return", {
                  stats: stats
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

  function Player(props) {
    var _this;

    _classCallCheck(this, Player);

    _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));
    _this.state = {
      seasonRange: 'alltime',
      platform: 'pc',
      chartData: undefined,
      chartType: undefined,
      chartTitle: undefined
    }; // This binding is necessary to make `this` work in the callback

    _this.createDoughnutData = _this.createDoughnutData.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Player, [{
    key: "createDoughnutData",
    value: function createDoughnutData(key) {
      var data = {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: []
        }]
      };
      var modes = {
        'Solo': {
          value: this.props.stats.stats[this.state.seasonRange][this.state.platform].solo[key],
          color: '#00b0ff'
        },
        'Duo': {
          value: this.props.stats.stats[this.state.seasonRange][this.state.platform].duo[key],
          color: '#76ff03'
        },
        'Squad': {
          value: this.props.stats.stats[this.state.seasonRange][this.state.platform].squad[key],
          color: '#ff9100'
        } // Add to the data only the data that isn't 0

      };

      for (var mode in modes) {
        if (modes[mode].value != 0) {
          data.labels.push(mode);
          data.datasets[0].data.push(modes[mode].value);
          data.datasets[0].backgroundColor.push(modes[mode].color);
        }
      }

      return data;
    }
  }, {
    key: "createBarData",
    value: function createBarData(key) {
      var data = {
        labels: [],
        datasets: [{
          data: [],
          borderColor: '#ffffff',
          borderWidth: 2,
          backgroundColor: []
        }]
      };
      var modes = {
        'Solo': {
          value: this.props.stats.stats[this.state.seasonRange][this.state.platform].solo[key],
          color: '#00b0ff'
        },
        'Duo': {
          value: this.props.stats.stats[this.state.seasonRange][this.state.platform].duo[key],
          color: '#76ff03'
        },
        'Squad': {
          value: this.props.stats.stats[this.state.seasonRange][this.state.platform].squad[key],
          color: '#ff9100'
        } // Add to the data only the data that isn't 0

      };

      for (var mode in modes) {
        if (modes[mode].value != 0) {
          data.labels.push(mode);
          data.datasets[0].data.push(modes[mode].value);
          data.datasets[0].backgroundColor.push(modes[mode].color);
        }
      }

      return data;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.stats === undefined) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_page__WEBPACK_IMPORTED_MODULE_3__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          }
        }, "Player not found!"));
      }

      var platformSelect = []; // Add only the platforms that the user is playing on

      if (this.props.stats.stats[this.state.seasonRange].pc !== undefined) platformSelect.push({
        label: 'PC',
        value: 'pc'
      });
      if (this.props.stats.stats[this.state.seasonRange].ps4 !== undefined) platformSelect.push({
        label: 'PlayStation 4',
        value: 'ps4'
      });
      if (this.props.stats.stats[this.state.seasonRange].xb1 !== undefined) platformSelect.push({
        label: 'Xbox One',
        value: 'xb1'
      }); // Get the played platforms

      var platforms = platformSelect.map(function (plat) {
        return plat.value;
      }); // If the selected platform isn't one of them, change it to one of them to prevent crash

      if (!platforms.includes(this.state.platform)) {
        this.state.platform = platformSelect[0].value;
      }

      var statChart;

      if (this.state.chartType === 'doughnut') {
        statChart = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__["Doughnut"], {
          data: this.createDoughnutData(this.state.chartData),
          legend: {
            labels: {
              fontColor: "#ffffff"
            }
          },
          options: {
            tooltips: {
              callbacks: doughnutCallbacks
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          }
        });
      } else if (this.state.chartType === 'bar') {
        statChart = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__["Bar"], {
          data: this.createBarData(this.state.chartData),
          legend: {
            display: false,
            fontColor: "#ffffff"
          },
          options: {
            scales: {
              xAxes: [{
                ticks: {
                  fontColor: "white"
                },
                gridLines: {
                  color: "#424242"
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  max: this.state.chartBarMax ? this.state.chartBarMax : 100,
                  fontColor: "white"
                },
                gridLines: {
                  color: "#424242"
                }
              }]
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          }
        });
      }

      var kdChartMax = Math.ceil(Math.max(this.props.stats.stats[this.state.seasonRange][this.state.platform].solo['kd'], this.props.stats.stats[this.state.seasonRange][this.state.platform].duo['kd'], this.props.stats.stats[this.state.seasonRange][this.state.platform].squad['kd']) / 10) * 10;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_page__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Dialog__WEBPACK_IMPORTED_MODULE_8__["Dialog"], {
        open: this.state.chartData !== undefined,
        onClose: function onClose(evt) {
          return _this2.setState({
            chartData: undefined,
            chartType: undefined,
            chartTitle: undefined
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Dialog__WEBPACK_IMPORTED_MODULE_8__["DialogSurface"], {
        style: {
          backgroundColor: "var(--mdc-theme-secondary)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Dialog__WEBPACK_IMPORTED_MODULE_8__["DialogHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Dialog__WEBPACK_IMPORTED_MODULE_8__["DialogHeaderTitle"], {
        style: {
          color: "white"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, this.state.chartTitle)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Dialog__WEBPACK_IMPORTED_MODULE_8__["DialogBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, statChart), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Dialog__WEBPACK_IMPORTED_MODULE_8__["DialogFooter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Dialog__WEBPACK_IMPORTED_MODULE_8__["DialogFooterButton"], {
        accept: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }, "Close"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Dialog__WEBPACK_IMPORTED_MODULE_8__["DialogBackdrop"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          paddingLeft: "10px",
          paddingRight: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_atomic_card__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "atomic-player-total-stats-card",
        title: this.props.stats.displayName,
        titleSize: "headline3",
        titleColor: "var(--mdc-theme-primary)",
        outlineColor: "var(--mdc-theme-primary)",
        backgroundColor: "var(--drawer-color)",
        width: "calc(100% - 8px)",
        maxWidth: "1150px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "atomic-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Select__WEBPACK_IMPORTED_MODULE_5__["Select"], {
        className: "atomic-select atomic-season-range-select",
        box: true,
        value: this.state.seasonRange,
        onChange: function onChange(evt) {
          return _this2.setState({
            seasonRange: evt.target.value
          });
        },
        label: "Season Range",
        options: [{
          label: 'All Seasons',
          value: 'alltime',
          color: "black"
        }, {
          label: 'Season 5',
          value: 'weekly',
          color: "black"
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Select__WEBPACK_IMPORTED_MODULE_5__["Select"], {
        className: "atomic-select atomic-platform-select",
        box: true,
        value: this.state.platform,
        onChange: function onChange(evt) {
          return _this2.setState({
            platform: evt.target.value
          });
        },
        label: "Platform",
        style: {
          minWidth: "140px"
        },
        options: platformSelect,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
        className: "atomic-divider",
        style: {
          marginTop: "68px",
          marginBottom: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "atomic-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_GridList__WEBPACK_IMPORTED_MODULE_7__["GridList"], {
        tileAspect: "3x2",
        style: {
          display: "flex"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtomicStatTile, {
        onClick: function onClick() {
          return _this2.setState({
            chartData: 'score',
            chartType: 'doughnut',
            chartTitle: "Score"
          });
        },
        title: "Score",
        value: this.props.stats.stats[this.state.seasonRange][this.state.platform].total.score,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtomicStatTile, {
        onClick: function onClick() {
          return _this2.setState({
            chartData: 'matches',
            chartType: 'doughnut',
            chartTitle: "Matches"
          });
        },
        title: "Matches",
        value: this.props.stats.stats[this.state.seasonRange][this.state.platform].total.matches,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtomicStatTile, {
        onClick: function onClick() {
          return _this2.setState({
            chartData: 'wins',
            chartType: 'doughnut',
            chartTitle: "Wins"
          });
        },
        title: "Wins",
        value: this.props.stats.stats[this.state.seasonRange][this.state.platform].total.wins,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtomicStatTile, {
        onClick: function onClick() {
          return _this2.setState({
            chartData: 'kills',
            chartType: 'doughnut',
            chartTitle: "Kills"
          });
        },
        title: "Kills",
        value: this.props.stats.stats[this.state.seasonRange][this.state.platform].total.kills,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtomicStatTile, {
        onClick: function onClick() {
          return _this2.setState({
            chartData: 'kd',
            chartType: 'bar',
            chartTitle: "K/D Ratio",
            chartBarMax: kdChartMax
          });
        },
        title: "K/D Ratio",
        value: this.props.stats.stats[this.state.seasonRange][this.state.platform].total.kd,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtomicStatTile, {
        onClick: function onClick() {
          return _this2.setState({
            chartData: 'winrate',
            chartType: 'bar',
            chartTitle: "Win %",
            chartBarMax: 100
          });
        },
        title: "Win %",
        value: this.props.stats.stats[this.state.seasonRange][this.state.platform].total.winrate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Typography__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        style: {
          paddingLeft: "15px",
          color: "#9e9e9e"
        },
        use: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }, "Tip: Click on the stat for detailed chart!"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "atomic-player-stats",
        style: {
          paddingTop: "50px",
          display: "flex",
          justifyContent: "space-evenly"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtomicModeStatsCard, {
        tops: ['10', '25'],
        keys: {
          score: "Score",
          wins: "Wins",
          kills: "Kills",
          kd: "K/D",
          winrate: "Win%",
          top10: "Top 10",
          top25: "Top 25",
          kpm: "Kills per Match",
          spm: "Score per Match"
        },
        title: "Solo",
        stats: this.props.stats.stats[this.state.seasonRange][this.state.platform].solo,
        color: "#00b0ff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtomicModeStatsCard, {
        tops: ['5', '12'],
        keys: {
          score: "Score",
          wins: "Wins",
          kills: "Kills",
          kd: "K/D",
          winrate: "Win%",
          top5: "Top 5",
          top12: "Top 12",
          kpm: "Kills per Match",
          spm: "Score per Match"
        },
        title: "Duo",
        stats: this.props.stats.stats[this.state.seasonRange][this.state.platform].duo,
        color: "#76ff03",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtomicModeStatsCard, {
        tops: ['3', '6'],
        keys: {
          score: "Score",
          wins: "Wins",
          kills: "Kills",
          kd: "K/D",
          winrate: "Win%",
          top3: "Top 3",
          top6: "Top 6",
          kpm: "Kills per Match",
          spm: "Score per Match"
        },
        title: "Squad",
        stats: this.props.stats.stats[this.state.seasonRange][this.state.platform].squad,
        color: "#ff9100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }))));
    }
  }]);

  return Player;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



var AtomicModeStatsCard =
/*#__PURE__*/
function (_Component2) {
  _inherits(AtomicModeStatsCard, _Component2);

  function AtomicModeStatsCard() {
    _classCallCheck(this, AtomicModeStatsCard);

    return _possibleConstructorReturn(this, (AtomicModeStatsCard.__proto__ || Object.getPrototypeOf(AtomicModeStatsCard)).apply(this, arguments));
  }

  _createClass(AtomicModeStatsCard, [{
    key: "createData",
    value: function createData() {
      var _keys;

      var data = {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: []
        }]
      };
      var top1 = 'Top ' + this.props.tops[0];
      var top2 = 'Top ' + this.props.tops[1];
      var keys = (_keys = {
        'Defeats': {
          value: this.props.stats.matches - this.props.stats.wins - (this.props.stats['top' + this.props.tops[0]] - this.props.stats.wins) - (this.props.stats['top' + this.props.tops[1]] - this.props.stats['top' + this.props.tops[0]] - this.props.stats.wins),
          color: '#f44336'
        },
        'Wins': {
          value: this.props.stats.wins,
          color: "#2196f3"
        }
      }, _defineProperty(_keys, top1, {
        value: this.props.stats['top' + this.props.tops[0]] - this.props.stats.wins,
        color: "#4caf50"
      }), _defineProperty(_keys, top2, {
        value: this.props.stats['top' + this.props.tops[1]] - this.props.stats['top' + this.props.tops[0]],
        color: "#ff9800"
      }), _keys); // Add to the data only the data that isn't 0

      for (var key in keys) {
        if (keys[key].value != 0) {
          data.labels.push(key);
          data.datasets[0].data.push(keys[key].value);
          data.datasets[0].backgroundColor.push(keys[key].color);
        }
      }

      return data;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_atomic_card__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: this.props.className ? this.props.className : "" + ' ' + "atomic-mode-stats-card",
        title: this.props.title,
        subtitle: numberWithCommas(this.props.stats.matches) + " Matches",
        titleSize: "headline4",
        titleColor: this.props.color,
        outlineColor: this.props.color,
        backgroundColor: "var(--drawer-color)",
        width: "350px",
        maxWidth: "970px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__["Doughnut"], {
        style: {
          paddingBottom: "10px"
        },
        data: this.createData(),
        legend: {
          labels: {
            fontColor: "#ffffff"
          }
        },
        options: {
          layout: {
            padding: {
              bottom: 10
            }
          },
          tooltips: {
            callbacks: doughnutCallbacks
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
        className: "atomic-stat-divider",
        style: {
          borderColor: this.props.color
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_GridList__WEBPACK_IMPORTED_MODULE_7__["GridList"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        }
      }, Object.entries(this.props.keys).map(function (_ref2, i) {
        var _ref3 = _slicedToArray(_ref2, 2),
            key = _ref3[0],
            name = _ref3[1];

        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtomicStatMiniTile, {
          key: i,
          noBorder: i == Object.entries(_this3.props.keys).length - 1,
          color: _this3.props.color,
          title: name,
          value: _this3.props.stats[key],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 323
          }
        });
      })));
    }
  }]);

  return AtomicModeStatsCard;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var AtomicStatMiniTile =
/*#__PURE__*/
function (_Component3) {
  _inherits(AtomicStatMiniTile, _Component3);

  function AtomicStatMiniTile() {
    _classCallCheck(this, AtomicStatMiniTile);

    return _possibleConstructorReturn(this, (AtomicStatMiniTile.__proto__ || Object.getPrototypeOf(AtomicStatMiniTile)).apply(this, arguments));
  }

  _createClass(AtomicStatMiniTile, [{
    key: "render",
    value: function render() {
      var divider = this.props.noBorder ? "" : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
        className: "atomic-stat-divider",
        style: {
          borderColor: this.props.color
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        }
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: this.props.className ? this.props.className : "" + ' ' + "atomic-stat-mini-tile",
        style: _objectSpread({}, this.props.style),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Ripple__WEBPACK_IMPORTED_MODULE_9__["Ripple"], {
        onClick: this.props.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          minWidth: "320px",
          height: "35px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Typography__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        use: "body1",
        style: {
          paddingLeft: "5px",
          color: "white"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        }
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Typography__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        use: "body2",
        style: {
          paddingRight: "5px",
          color: this.props.color
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        }
      }, numberWithCommas(this.props.value)))), divider);
    }
  }]);

  return AtomicStatMiniTile;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var AtomicStatTile =
/*#__PURE__*/
function (_Component4) {
  _inherits(AtomicStatTile, _Component4);

  function AtomicStatTile() {
    _classCallCheck(this, AtomicStatTile);

    return _possibleConstructorReturn(this, (AtomicStatTile.__proto__ || Object.getPrototypeOf(AtomicStatTile)).apply(this, arguments));
  }

  _createClass(AtomicStatTile, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Ripple__WEBPACK_IMPORTED_MODULE_9__["Ripple"], {
        onClick: this.props.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_GridList__WEBPACK_IMPORTED_MODULE_7__["GridTile"], {
        style: {
          width: "180px"
        },
        className: this.props.className ? this.props.className : "" + ' ' + "atomic-stat-tile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_GridList__WEBPACK_IMPORTED_MODULE_7__["GridTilePrimary"], {
        style: {
          backgroundColor: "var(--mdc-theme-secondary)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          minHeight: "78px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Typography__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        use: "headline4",
        style: {
          color: "var(--mdc-theme-primary)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        }
      }, numberWithCommas(this.props.value)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_GridList__WEBPACK_IMPORTED_MODULE_7__["GridTileSecondary"], {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "17px",
          paddingLeft: "0px",
          paddingRight: "0px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Typography__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        use: "headline5",
        style: {
          color: 'var(--mdc-theme-secondary)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        }
      }, this.props.title))));
    }
  }]);

  return AtomicStatTile;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/player")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=player.js.5a2b81f42ddb0ea413f5.hot-update.js.map