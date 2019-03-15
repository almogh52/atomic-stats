module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/atomic-router.js":
/*!*************************************!*\
  !*** ./components/atomic-router.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.configure({
  showSpinner: false
});

var AtomicRouter =
/*#__PURE__*/
function () {
  function AtomicRouter() {
    _classCallCheck(this, AtomicRouter);
  }

  _createClass(AtomicRouter, [{
    key: "pushRoute",
    value: function pushRoute(name) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 ? arguments[2] : undefined;
      // If the player is trying to route to another location while entering his player id, ignore requests
      if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined && window["__ATOMIC_USER__"] && window["__ATOMIC_USER__"].player_id == undefined) return;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      _routes__WEBPACK_IMPORTED_MODULE_0___default.a.pushRoute(name, params = params, options);
    }
  }]);

  return AtomicRouter;
}();

/* harmony default export */ __webpack_exports__["default"] = (new AtomicRouter());

/***/ }),

/***/ "./components/page.js":
/*!****************************!*\
  !*** ./components/page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rmwc_top_app_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rmwc/top-app-bar */ "@rmwc/top-app-bar");
/* harmony import */ var _rmwc_top_app_bar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rmwc_top_app_bar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rmwc_textfield__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rmwc/textfield */ "@rmwc/textfield");
/* harmony import */ var _rmwc_textfield__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rmwc_textfield__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rmwc_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rmwc/drawer */ "@rmwc/drawer");
/* harmony import */ var _rmwc_drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rmwc_drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _rmwc_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rmwc/list */ "@rmwc/list");
/* harmony import */ var _rmwc_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _rmwc_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rmwc/button */ "@rmwc/button");
/* harmony import */ var _rmwc_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_rmwc_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _rmwc_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rmwc/menu */ "@rmwc/menu");
/* harmony import */ var _rmwc_menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_rmwc_menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_page_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/page.scss */ "./styles/page.scss");
/* harmony import */ var _styles_page_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_page_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _atomic_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./atomic-router */ "./components/atomic-router.js");
/* harmony import */ var material_components_web_dist_material_components_web_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! material-components-web/dist/material-components-web.min.css */ "./node_modules/material-components-web/dist/material-components-web.min.css");
/* harmony import */ var material_components_web_dist_material_components_web_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(material_components_web_dist_material_components_web_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _rmwc_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @rmwc/typography */ "@rmwc/typography");
/* harmony import */ var _rmwc_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_rmwc_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/Users/almog/Desktop/atomic-stats/components/page.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }














var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page(props) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));
    _this.state = {
      persistentOpen: true,
      invalid: false,
      authMenu: false
    }; // This binding is necessary to make `this` work in the callback

    _this.menuBtnPressed = _this.menuBtnPressed.bind(_assertThisInitialized(_this));
    _this.searchPlayer = _this.searchPlayer.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Page, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "menuBtnPressed",
    value: function menuBtnPressed() {
      // Set the state of the drawer, if it is closed or it's undefined, open it
      if (this.state.persistentOpen === true) {
        this.setState({
          persistentOpen: false
        }); // Start animation to move the content left with the drawer

        document.querySelector('.atomic-content-wrapper').style.animationName = "move-left"; // Default padding

        document.querySelector('.atomic-content-wrapper').style.animationDuration = "200ms";
        document.querySelector('.atomic-content-wrapper').style.paddingLeft = "0px";
      } else {
        this.setState({
          persistentOpen: true
        }); // Start animation to move the content right with the drawer

        document.querySelector('.atomic-content-wrapper').style.animationName = "move-right"; // Default padding

        document.querySelector('.atomic-content-wrapper').style.animationDuration = "250ms";
        document.querySelector('.atomic-content-wrapper').style.paddingLeft = "239px";
      }
    }
  }, {
    key: "searchPlayer",
    value: function searchPlayer() {
      var playerName = this.refs.searchField.value;

      if (playerName.length === 0) {
        document.querySelector('.atomic-search-field input').focus();
        this.setState({
          invalid: true
        });
        return;
      }

      _atomic_router__WEBPACK_IMPORTED_MODULE_8__["default"].pushRoute('player', {
        username: playerName
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "atomic-app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_top_app_bar__WEBPACK_IMPORTED_MODULE_1__["TopAppBar"], {
        prominent: true,
        theme: "primary",
        fixed: true,
        className: "atomic-app-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_top_app_bar__WEBPACK_IMPORTED_MODULE_1__["TopAppBarRow"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_top_app_bar__WEBPACK_IMPORTED_MODULE_1__["TopAppBarSection"], {
        alignStart: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_top_app_bar__WEBPACK_IMPORTED_MODULE_1__["TopAppBarNavigationIcon"], {
        theme: "primary",
        icon: "menu",
        style: {
          margin: "auto 0"
        },
        onClick: this.menuBtnPressed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/idk.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_top_app_bar__WEBPACK_IMPORTED_MODULE_1__["TopAppBarSection"], {
        alignEnd: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, this.props.user ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_menu__WEBPACK_IMPORTED_MODULE_6__["MenuSurfaceAnchor"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        className: "atomic-white-ripple atomic-auth-button",
        onClick: function onClick(evt) {
          return _this2.setState({
            'authMenu': !_this2.state.authMenu
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_button__WEBPACK_IMPORTED_MODULE_5__["ButtonIcon"], {
        style: {
          display: "flex"
        },
        icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
          style: {
            fontSize: "19px"
          },
          icon: "user",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), "My Account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        id: "atomic-logout-form",
        action: "/auth/logout",
        method: "POST",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_menu__WEBPACK_IMPORTED_MODULE_6__["Menu"], {
        className: "atomic-menu atomic-auth-menu",
        open: this.state.authMenu,
        onClose: function onClose(evt) {
          return _this2.setState({
            authMenu: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_menu__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
        onClick: function onClick() {
          document.getElementById("atomic-logout-form").submit();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListItemGraphic"], {
        style: {
          display: "flex"
        },
        icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
          style: {
            color: "white",
            fontSize: "19px"
          },
          icon: "sign-out-alt",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), "Logout"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "atomic-auth-buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        className: "atomic-auth-button",
        onClick: function onClick() {
          return window.location = "/auth/google";
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_button__WEBPACK_IMPORTED_MODULE_5__["ButtonIcon"], {
        style: {
          display: "flex"
        },
        icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
          style: {
            fontSize: "19px"
          },
          icon: "sign-in-alt",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }), "Login with google")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_drawer__WEBPACK_IMPORTED_MODULE_3__["Drawer"], {
        dismissible: true,
        className: "atomic-drawer",
        open: this.state.persistentOpen,
        style: {
          zIndex: "1"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: "160px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_drawer__WEBPACK_IMPORTED_MODULE_3__["DrawerContent"], {
        className: "atomic-drawer-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
        onClick: function onClick() {
          return _atomic_router__WEBPACK_IMPORTED_MODULE_8__["default"].pushRoute('index');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListItemGraphic"], {
        style: {
          display: "flex"
        },
        icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
          style: {
            fontSize: "19px"
          },
          icon: "home",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListDivider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      })), this.props.user && this.props.user['player_id'] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
        onClick: function onClick() {
          return _atomic_router__WEBPACK_IMPORTED_MODULE_8__["default"].pushRoute('id', {
            id: _this2.props.user['player_id']
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListItemGraphic"], {
        style: {
          display: "flex"
        },
        icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
          style: {
            fontSize: "19px"
          },
          icon: "chart-pie",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, "My Stats")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListDivider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      })) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
        onClick: function onClick() {
          return _atomic_router__WEBPACK_IMPORTED_MODULE_8__["default"].pushRoute('leaderboard');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListItemGraphic"], {
        style: {
          display: "flex"
        },
        icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
          style: {
            fontSize: "19px"
          },
          icon: "award",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, "Leaderboard")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
        onClick: function onClick() {
          return _atomic_router__WEBPACK_IMPORTED_MODULE_8__["default"].pushRoute('shop');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListItemGraphic"], {
        style: {
          display: "flex"
        },
        icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
          style: {
            fontSize: "19px"
          },
          icon: "shopping-cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, "Item Shop")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
        onClick: function onClick() {
          return _atomic_router__WEBPACK_IMPORTED_MODULE_8__["default"].pushRoute('news');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListItemGraphic"], {
        style: {
          display: "flex"
        },
        icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
          style: {
            fontSize: "19px"
          },
          icon: "newspaper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, "News"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListDivider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }), this.props.user ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListGroupSubheader"], {
        className: "atomic-drawer-subheader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, "Shortcuts"), this.props.user.shortcuts.map(function (_ref, i) {
        var displayName = _ref.displayName,
            id = _ref.id;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
          key: i,
          onClick: function onClick() {
            return _atomic_router__WEBPACK_IMPORTED_MODULE_8__["default"].pushRoute('id', {
              id: id
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListItemGraphic"], {
          style: {
            display: "flex"
          },
          icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
            style: {
              fontSize: "19px"
            },
            icon: "user",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            }
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          }
        }, displayName));
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_menu__WEBPACK_IMPORTED_MODULE_6__["SimpleMenuSurface"], {
        className: "atomic-menu",
        handle: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListItemGraphic"], {
          style: {
            display: "flex"
          },
          icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
            style: {
              fontSize: "19px"
            },
            icon: "plus",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 184
            }
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_list__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          }
        }, "Add shortcut")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: '1rem',
          width: '12rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_typography__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        style: {
          color: "white"
        },
        use: "body1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, "Three easy steps to add a shortcut:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }), "\u2022 Search for your wanted shortcut player in the search", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }), "\u2022 Click the \"Add shortcut\" button under the player's name", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }), "\u2022 The new shortcut will appear here! \uD83D\uDE00")))) : null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_top_app_bar__WEBPACK_IMPORTED_MODULE_1__["TopAppBarFixedAdjust"], {
        className: "atomic-content-wrapper",
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "atomic-search-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_textfield__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
        box: true,
        onKeyPress: function onKeyPress(e) {
          return e.key == "Enter" ? _this2.searchPlayer() : null;
        },
        invalid: this.state.invalid,
        ref: "searchField",
        id: "atomic-search-field",
        className: "atomic-text-field atomic-search-field",
        label: "Epic Games Username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        raised: true,
        accent: true,
        theme: "secondary",
        className: "atomic-search-button",
        onClick: this.searchPlayer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_button__WEBPACK_IMPORTED_MODULE_5__["ButtonIcon"], {
        icon: "search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }), "Search")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "atomic-content",
        style: {
          overflow: "hidden"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          flexGrow: "1",
          display: "flex",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "atomic-footer",
        style: {
          width: "100%",
          marginTop: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "var(--drawer-color)",
          height: "50px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_typography__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        use: "body2",
        style: {
          flexDirection: "row",
          color: "var(--mdc-theme-primary)",
          fontSize: "19px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, "\xA9 2018 Atomic Stats"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_typography__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        use: "caption",
        style: {
          flexDirection: "row",
          color: "var(--mdc-theme-primary)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }, "Fortnite is a registered trademark of Epic Games.")))));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./node_modules/material-components-web/dist/material-components-web.min.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/material-components-web/dist/material-components-web.min.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AtomicApp; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/page */ "./components/page.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ "chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/global.scss */ "./styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/Users/almog/Desktop/atomic-stats/pages/_app.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faShoppingCart"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faNewspaper"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUsers"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faHome"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faChartPie"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSignOutAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSignInAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faAward"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPlus"]);
chart_js__WEBPACK_IMPORTED_MODULE_4___default.a.defaults.global.defaultFontFamily = "Dosis";
var isServer = typeof window === 'undefined';

var AtomicApp =
/*#__PURE__*/
function (_App) {
  _inherits(AtomicApp, _App);

  _createClass(AtomicApp, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                if (isServer) {
                  _context.next = 11;
                  break;
                }

                if (!window["__ATOMIC_USER__"] && ctx.req) window["__ATOMIC_USER__"] = ctx.req.user;
                return _context.abrupt("return", {
                  pageProps: pageProps,
                  user: window["__ATOMIC_USER__"]
                });

              case 11:
                return _context.abrupt("return", {
                  pageProps: pageProps,
                  user: ctx.req.user
                });

              case 12:
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

  function AtomicApp(props) {
    var _this;

    _classCallCheck(this, AtomicApp);

    _this = _possibleConstructorReturn(this, (AtomicApp.__proto__ || Object.getPrototypeOf(AtomicApp)).call(this, props));
    _this.state = {};

    if (_this.props && _this.props.user) {
      if (!isServer) window['__ATOMIC_USER__'] = _this.props.user;
      _this.state = {
        user: _this.props.user
      };
    }

    return _this;
  }

  _createClass(AtomicApp, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps; // If the page asked to have no layout, return without page layout

      if (pageProps && pageProps.noLayout) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, _extends({
          user: this.state.user
        }, pageProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        })));
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_page__WEBPACK_IMPORTED_MODULE_3__["default"], {
        user: this.state.user,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, _extends({
        user: this.state.user
      }, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }))));
    }
  }]);

  return AtomicApp;
}(next_app__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Router = __webpack_require__(/*! nextjs-dynamic-routes */ "nextjs-dynamic-routes");

var router = module.exports = new Router();
router.add({
  name: 'index',
  pattern: '/'
});
router.add({
  name: 'player',
  pattern: '/player/:username/'
});
router.add({
  name: 'id',
  pattern: '/id/:id/'
});
router.add({
  name: 'news',
  pattern: '/news'
});
router.add({
  name: 'shop',
  pattern: '/shop'
});
router.add({
  name: 'register',
  pattern: '/register'
});
router.add({
  name: 'login',
  pattern: '/login'
});
router.add({
  name: 'obs',
  pattern: '/obs/:platform/:username/'
});
router.add({
  name: 'post-register',
  pattern: '/post-register'
});
router.add({
  name: 'leaderboard',
  pattern: '/leaderboard'
});

/***/ }),

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/page.scss":
/*!**************************!*\
  !*** ./styles/page.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "@rmwc/button":
/*!*******************************!*\
  !*** external "@rmwc/button" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@rmwc/button");

/***/ }),

/***/ "@rmwc/drawer":
/*!*******************************!*\
  !*** external "@rmwc/drawer" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@rmwc/drawer");

/***/ }),

/***/ "@rmwc/list":
/*!*****************************!*\
  !*** external "@rmwc/list" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@rmwc/list");

/***/ }),

/***/ "@rmwc/menu":
/*!*****************************!*\
  !*** external "@rmwc/menu" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@rmwc/menu");

/***/ }),

/***/ "@rmwc/textfield":
/*!**********************************!*\
  !*** external "@rmwc/textfield" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@rmwc/textfield");

/***/ }),

/***/ "@rmwc/top-app-bar":
/*!************************************!*\
  !*** external "@rmwc/top-app-bar" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@rmwc/top-app-bar");

/***/ }),

/***/ "@rmwc/typography":
/*!***********************************!*\
  !*** external "@rmwc/typography" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@rmwc/typography");

/***/ }),

/***/ "chart.js":
/*!***************************!*\
  !*** external "chart.js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chart.js");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "nextjs-dynamic-routes":
/*!****************************************!*\
  !*** external "nextjs-dynamic-routes" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nextjs-dynamic-routes");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map