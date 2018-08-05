webpackHotUpdate("static/development/pages/shop.js",{

/***/ "./pages/shop.js":
/*!***********************!*\
  !*** ./pages/shop.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return News; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/page */ "./components/page.js");
/* harmony import */ var _components_atomic_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/atomic-card */ "./components/atomic-card.js");
/* harmony import */ var rmwc_GridList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rmwc/GridList */ "./node_modules/rmwc/GridList/index.js");
/* harmony import */ var rmwc_GridList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rmwc_GridList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_rmwc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../node_modules/rmwc */ "./node_modules/rmwc/index.js");
/* harmony import */ var _node_modules_rmwc__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_rmwc__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/almog/Desktop/atomic-stats 3/pages/shop.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var News =
/*#__PURE__*/
function (_Component) {
  _inherits(News, _Component);

  function News() {
    _classCallCheck(this, News);

    return _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).apply(this, arguments));
  }

  _createClass(News, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_page__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          paddingLeft: "10px",
          paddingRight: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_atomic_card__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "atomic-featured-shop",
        title: "Featured",
        titleSize: "headline3",
        titleColor: "var(--mdc-theme-primary)",
        outlineColor: "var(--mdc-theme-primary)",
        backgroundColor: "var(--drawer-color)",
        width: "calc(100% - 8px)",
        maxWidth: "1100px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtomicFeaturedShopItem, {
        item: this.props.shop.featured[0],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var shop;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                shop = undefined;
                _context.next = 3;
                return node_fetch__WEBPACK_IMPORTED_MODULE_2___default()("https://atomic-api.herokuapp.com/shop").then(function (response) {
                  return response.json();
                }).then(function (json) {
                  if ('error' in json) {//stats = {displayName: "Unknown"};
                  } else {
                    shop = json;
                  }
                }).catch(function (ex) {//stats = {displayName: "Unknown"};
                });

              case 3:
                return _context.abrupt("return", {
                  shop: shop
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return News;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



var AtomicFeaturedShopItem =
/*#__PURE__*/
function (_Component2) {
  _inherits(AtomicFeaturedShopItem, _Component2);

  function AtomicFeaturedShopItem(props) {
    var _this;

    _classCallCheck(this, AtomicFeaturedShopItem);

    _this = _possibleConstructorReturn(this, (AtomicFeaturedShopItem.__proto__ || Object.getPrototypeOf(AtomicFeaturedShopItem)).call(this, props)); // Make 'this' work

    _this.colorForItem = _this.colorForItem.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AtomicFeaturedShopItem, [{
    key: "colorForItem",
    value: function colorForItem() {
      switch (this.props.item.rarity) {
        case 'uncommon':
          return "radial-gradient(#60aa3a,#175117)";

        case 'rare':
          return "radial-gradient(#49acf2,#143977)";

        case "epic":
          return "radial-gradient(#b15be2,#4b2483)";

        case "legendary":
          return "radial-gradient(#d37841,#78371d)";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: this.props.className ? this.props.className : "" + ' ' + "atomic-featured-shop-item",
        style: {
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "400px",
          width: "300px",
          background: this.colorForItem()
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          position: "absolute",
          bottom: "0",
          left: "0",
          zIndex: "1000",
          width: "300px",
          height: "85px",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        style: {
          color: "white",
          fontFamily: "Burbank",
          fontSize: "50px",
          letterSpacing: "1px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, this.props.item.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        style: {
          color: "white",
          fontFamily: "Burbank",
          fontSize: "25px",
          letterSpacing: "1px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, this.props.item.price), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://image.fnbr.co/price/icon_vbucks.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: this.props.item.image,
        style: {
          display: "block",
          width: this.props.item.image.includes("featured") ? "" : "300px",
          height: this.props.item.image.includes("featured") ? "100%" : "300px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }));
    }
  }]);

  return AtomicFeaturedShopItem;
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/shop")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=shop.js.7445b48a9bc1eb9af1f5.hot-update.js.map