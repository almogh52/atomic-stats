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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      _routes__WEBPACK_IMPORTED_MODULE_0___default.a.pushRoute(name, params = params, options);
    }
  }]);

  return AtomicRouter;
}();

/* harmony default export */ __webpack_exports__["default"] = (new AtomicRouter());

/***/ }),

/***/ "./components/base-page.js":
/*!*********************************!*\
  !*** ./components/base-page.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BasePage; });
/* harmony import */ var _components_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/page.js */ "./components/page.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var BasePage =
/*#__PURE__*/
function (_Component) {
  _inherits(BasePage, _Component);

  function BasePage() {
    _classCallCheck(this, BasePage);

    return _possibleConstructorReturn(this, (BasePage.__proto__ || Object.getPrototypeOf(BasePage)).apply(this, arguments));
  }

  _createClass(BasePage, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
    }
  }]);

  return BasePage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



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
/* harmony import */ var rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rmwc/TopAppBar */ "rmwc/TopAppBar");
/* harmony import */ var rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rmwc_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rmwc/TextField */ "rmwc/TextField");
/* harmony import */ var rmwc_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rmwc_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rmwc_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rmwc/Drawer */ "rmwc/Drawer");
/* harmony import */ var rmwc_Drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rmwc_Drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rmwc_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rmwc/List */ "rmwc/List");
/* harmony import */ var rmwc_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rmwc_List__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rmwc_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rmwc/Button */ "rmwc/Button");
/* harmony import */ var rmwc_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rmwc_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rmwc_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rmwc/Menu */ "rmwc/Menu");
/* harmony import */ var rmwc_Menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rmwc_Menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_page_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/page.scss */ "./styles/page.scss");
/* harmony import */ var _styles_page_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_page_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _atomic_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./atomic-router */ "./components/atomic-router.js");
/* harmony import */ var material_components_web_dist_material_components_web_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! material-components-web/dist/material-components-web.min.css */ "./node_modules/material-components-web/dist/material-components-web.min.css");
/* harmony import */ var material_components_web_dist_material_components_web_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(material_components_web_dist_material_components_web_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rmwc_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rmwc/Typography */ "rmwc/Typography");
/* harmony import */ var rmwc_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rmwc_Typography__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/almog/Desktop/atomic-stats 3/components/page.js";

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
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__["TopAppBar"], {
        theme: "primary",
        fixed: true,
        className: "atomic-app-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__["TopAppBarRow"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__["TopAppBarSection"], {
        alignStart: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__["TopAppBarNavigationIcon"], {
        theme: "primary",
        use: "menu",
        onClick: this.menuBtnPressed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__["TopAppBarTitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "Atomic Stats")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__["TopAppBarSection"], {
        alignEnd: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, this.props.user ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Menu__WEBPACK_IMPORTED_MODULE_6__["MenuAnchor"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        className: "atomic-auth-button",
        onClick: function onClick(evt) {
          return _this2.setState({
            'authMenu': !_this2.state.authMenu
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Button__WEBPACK_IMPORTED_MODULE_5__["ButtonIcon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "person"), this.props.user.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        id: "atomic-logout-form",
        action: "/logout",
        method: "POST",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Menu__WEBPACK_IMPORTED_MODULE_6__["Menu"], {
        className: "atomic-menu atomic-auth-menu",
        open: this.state.authMenu,
        onClose: function onClose(evt) {
          return _this2.setState({
            authMenu: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Menu__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
        onClick: function onClick() {
          document.getElementById("atomic-logout-form").submit();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, "Logout"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "atomic-auth-buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        className: "atomic-auth-button",
        onClick: function onClick() {
          return _atomic_router__WEBPACK_IMPORTED_MODULE_8__["default"].pushRoute("login");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Typography__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        use: "button",
        style: {
          color: "white",
          position: "relative",
          top: "2px",
          display: "inline-block",
          padding: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, "or"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        className: "atomic-auth-button",
        onClick: function onClick() {
          return _atomic_router__WEBPACK_IMPORTED_MODULE_8__["default"].pushRoute("register");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, "Register")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Drawer__WEBPACK_IMPORTED_MODULE_3__["Drawer"], {
        persistent: true,
        className: "atomic-drawer",
        open: this.state.persistentOpen,
        style: {
          zIndex: "1"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Drawer__WEBPACK_IMPORTED_MODULE_3__["DrawerToolbarSpacer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Drawer__WEBPACK_IMPORTED_MODULE_3__["DrawerContent"], {
        className: "atomic-drawer-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, "Friends")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, "My Stats")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, "My Profile"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListDivider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
        onClick: function onClick() {
          return _atomic_router__WEBPACK_IMPORTED_MODULE_8__["default"].pushRoute('news');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, "News")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
        onClick: function onClick() {
          return _atomic_router__WEBPACK_IMPORTED_MODULE_8__["default"].pushRoute('shop');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, "Shop")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__["TopAppBarFixedAdjust"], {
        className: "atomic-content-wrapper",
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "atomic-search-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TextField__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
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
          lineNumber: 150
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        raised: true,
        accent: true,
        theme: "secondary",
        className: "atomic-search-button",
        onClick: this.searchPlayer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Button__WEBPACK_IMPORTED_MODULE_5__["ButtonIcon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, "search"), "Search")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "atomic-content",
        style: {
          overflow: "hidden"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          flexGrow: "1",
          display: "flex",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
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
          lineNumber: 160
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Typography__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        use: "body2",
        style: {
          flexDirection: "row",
          color: "var(--mdc-theme-primary)",
          fontSize: "19px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, "\xA9 2018 Atomic Stats"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Typography__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        use: "caption",
        style: {
          flexDirection: "row",
          color: "var(--mdc-theme-primary)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, "This site is not affiliated with Epic Games.")))));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/*class AtomicIconRadioButton extends Component {
  constructor(props) {
    super(props);

    // Set toggled as false
    this.state = {toggled: this.props.selected === undefined ? false : this.props.selected};

    // Create a ref to the element and bind the function
    this.toggleElement = React.createRef();
    this.select = this.select.bind(this);
    this.deselect = this.deselect.bind(this);
  }

  select() {
    // If the button isn't toggled, toggle it
    if (this.state.toggled === false)
    {
      this.setState({toggled: true});
      ReactDOM.findDOMNode(this.toggleElement.current).style.color = this.props.selectedColor;

      // Call the group handler to handle the other radio buttons with the index of the button
      this.props.groupHandler(this.props.index);
    }
  }

  deselect() {
    this.setState({toggled: false});
    ReactDOM.findDOMNode(this.toggleElement.current).style.color = this.props.clearColor;
  }

  render() {
    return (
      <IconToggle ref={this.toggleElement}
        className="atomic-icon-radio-button"
        style={{color: this.state.toggled ? this.props.selectedColor : this.props.clearColor}}
        data-icon-inner-selector={this.props.iconSelector}
        on={{cssClass: this.props.icon}}
        off={{cssClass: this.props.icon}}
        onChange={this.select}>
        <i className={this.props.iconClass} />
      </IconToggle>
    )
  }
}

class AtomicIconRadioGroup extends Component {
  constructor(props) {
    super(props);

    // Bind 'this' to the function
    this.buttonToggled = this.buttonToggled.bind(this);
    this.getSelectedValue = this.getSelectedValue.bind(this);

    // Set the current option to not selected
    this.state = {
      currentOption: -1
    }

    // Create array of refs to hold the buttons
    this.buttonRefs = []
    for (var i = 0; i < this.props.info.length; i++)
    {
      this.buttonRefs[i] = React.createRef();
    }

    // If a selected index has been sent, toggle the button
    if (this.props.selectedIndex !== undefined) {
      // Set the current option to not selected
      this.state = {
        currentOption: this.props.selectedIndex
      }
    }
  }

  buttonToggled(index) {
    // If the current option isn't not selected, deselect the current option
    if (this.state.currentOption !== -1)
    {
      // Deselect the current button
      this.buttonRefs[this.state.currentOption].current.deselect();
    }

    // Set the new selected button index
    this.setState({currentOption: index});
  }

  getSelectedValue() {
    if (this.state.currentOption !== -1)
    {
      return this.props.info[this.state.currentOption].value;
    } else {
      return "None";
    }
  }

  render() {
    var buttons = []

    // Go through the buttons info that were given as a prop, for each one create a button
    for (var i = 0; i < this.props.info.length; i++)
    {
      // Create the button
      const iconRadioBtn = <AtomicIconRadioButton
                            ref={this.buttonRefs[i]}
                            key={i}
                            selected={this.state.currentOption === i}
                            clearColor={this.props.clearColor}
                            selectedColor={this.props.selectedColor}
                            iconSelector={this.props.info[i].iconSelector}
                            icon={this.props.info[i].icon}
                            iconClass={this.props.info[i].iconClass}
                            index={i}
                            groupHandler={this.buttonToggled}
                          />

      // Add the button to the list of buttons
      buttons.push(iconRadioBtn)
    }

    return(
      <div className={this.props.className + ' ' + "atomic-icon-radio-group"}>
        {buttons}
      </div>
    )
  }
}*/


/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./node_modules/material-components-web/dist/material-components-web.min.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/material-components-web/dist/material-components-web.min.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/obs.js":
/*!**********************!*\
  !*** ./pages/obs.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ObsOverlay; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/base-page */ "./components/base-page.js");
/* harmony import */ var rmwc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rmwc */ "rmwc");
/* harmony import */ var rmwc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rmwc__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_animated_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-animated-number */ "react-animated-number");
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
                    displayName = json.displayName;
                    stats = json.stats.alltime[query.platform].total;
                  }
                }).catch(function (ex) {});

              case 4:
                return _context.abrupt("return", {
                  displayName: displayName,
                  username: query.username,
                  platform: query.platform,
                  startStats: stats,
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
      newStats: Object.create(_this.props.startStats)
    };
    _this.updateStats = _this.updateStats.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ObsOverlay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var intervalId = setInterval(this.updateStats, 60000); // store intervalId in the state so it can be accessed later:

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
      if (!this.props.startStats) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        }, "Player not found!");
      } else {
        var _React$createElement, _React$createElement2, _React$createElement3, _React$createElement4, _React$createElement5;

        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "atomic-obs-overlay",
          style: {
            width: "270px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
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
            lineNumber: 81
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
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
            lineNumber: 83
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
          style: {
            color: "#42a5f5",
            fontFamily: "Burbank",
            fontSize: "40px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, "Wins:")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_animated_number__WEBPACK_IMPORTED_MODULE_5___default.a, (_React$createElement = {
          component: "text",
          value: this.state.newStats.wins - this.props.startStats.wins,
          style: {
            paddingRight: "10px",
            fontFamily: "Burbank",
            fontSize: "40px",
            color: "white"
          },
          duration: 1000
        }, _defineProperty(_React$createElement, "component", "span"), _defineProperty(_React$createElement, "stepPrecision", 0), _defineProperty(_React$createElement, "__source", {
          fileName: _jsxFileName,
          lineNumber: 86
        }), _React$createElement))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "atomic-obs-kd",
          style: {
            paddingTop: "8px",
            minWidth: "270px",
            display: "flex",
            justifyContent: "space-evenly"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
          style: {
            color: "#26c6da",
            fontFamily: "Burbank",
            fontSize: "40px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, "Overall K/D:")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_animated_number__WEBPACK_IMPORTED_MODULE_5___default.a, (_React$createElement2 = {
          component: "text",
          value: Number(this.state.newStats.kd),
          style: {
            paddingRight: "10px",
            fontFamily: "Burbank",
            fontSize: "40px",
            color: "white"
          },
          duration: 1000
        }, _defineProperty(_React$createElement2, "component", "span"), _defineProperty(_React$createElement2, "stepPrecision", 2), _defineProperty(_React$createElement2, "formatValue", function formatValue(n) {
          return n.toFixed(2);
        }), _defineProperty(_React$createElement2, "__source", {
          fileName: _jsxFileName,
          lineNumber: 100
        }), _React$createElement2))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
            lineNumber: 111
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
            lineNumber: 112
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
            lineNumber: 113
          }
        }, "K/D"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_animated_number__WEBPACK_IMPORTED_MODULE_5___default.a, (_React$createElement3 = {
          component: "text",
          value: this.div(this.state.newStats.kills - this.props.startStats.kills, this.state.newStats.matches - this.state.newStats.wins - (this.props.startStats.matches - this.props.startStats.wins)),
          style: {
            paddingTop: "5px",
            flexWrap: "row",
            fontFamily: "Burbank",
            fontSize: "34px",
            color: "white"
          },
          duration: 1000
        }, _defineProperty(_React$createElement3, "component", "span"), _defineProperty(_React$createElement3, "stepPrecision", 2), _defineProperty(_React$createElement3, "formatValue", function formatValue(n) {
          return n.toFixed(2);
        }), _defineProperty(_React$createElement3, "__source", {
          fileName: _jsxFileName,
          lineNumber: 114
        }), _React$createElement3))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "column"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
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
            lineNumber: 127
          }
        }, "Win %"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_animated_number__WEBPACK_IMPORTED_MODULE_5___default.a, (_React$createElement4 = {
          component: "text",
          value: this.div(this.state.newStats.wins - this.props.startStats.wins, this.state.newStats.matches - this.props.startStats.matches) * 100,
          style: {
            paddingTop: "5px",
            flexWrap: "row",
            fontFamily: "Burbank",
            fontSize: "34px",
            color: "white"
          },
          duration: 1000
        }, _defineProperty(_React$createElement4, "component", "span"), _defineProperty(_React$createElement4, "stepPrecision", 2), _defineProperty(_React$createElement4, "formatValue", function formatValue(n) {
          return n.toFixed(2) + "%";
        }), _defineProperty(_React$createElement4, "__source", {
          fileName: _jsxFileName,
          lineNumber: 128
        }), _React$createElement4))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "column"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
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
            lineNumber: 141
          }
        }, "Matches"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_animated_number__WEBPACK_IMPORTED_MODULE_5___default.a, (_React$createElement5 = {
          component: "text",
          value: this.state.newStats.matches - this.props.startStats.matches,
          style: {
            paddingTop: "5px",
            flexWrap: "row",
            fontFamily: "Burbank",
            fontSize: "34px",
            color: "white"
          },
          duration: 1000
        }, _defineProperty(_React$createElement5, "component", "span"), _defineProperty(_React$createElement5, "stepPrecision", 0), _defineProperty(_React$createElement5, "__source", {
          fileName: _jsxFileName,
          lineNumber: 142
        }), _React$createElement5)))));
      }
    }
  }]);

  return ObsOverlay;
}(_components_base_page__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Router = __webpack_require__(/*! nextjs-dynamic-routes */ "nextjs-dynamic-routes");

var NProgress = __webpack_require__(/*! nprogress */ "nprogress");

var router = module.exports = new Router();
router.add({
  name: 'player',
  pattern: '/player/:username/'
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

/***/ }),

/***/ "./styles/page.scss":
/*!**************************!*\
  !*** ./styles/page.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!****************************!*\
  !*** multi ./pages/obs.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/obs.js */"./pages/obs.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "nextjs-dynamic-routes":
/*!****************************************!*\
  !*** external "nextjs-dynamic-routes" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nextjs-dynamic-routes");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

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

/***/ }),

/***/ "react-animated-number":
/*!****************************************!*\
  !*** external "react-animated-number" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-animated-number");

/***/ }),

/***/ "rmwc":
/*!***********************!*\
  !*** external "rmwc" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rmwc");

/***/ }),

/***/ "rmwc/Button":
/*!******************************!*\
  !*** external "rmwc/Button" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rmwc/Button");

/***/ }),

/***/ "rmwc/Drawer":
/*!******************************!*\
  !*** external "rmwc/Drawer" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rmwc/Drawer");

/***/ }),

/***/ "rmwc/List":
/*!****************************!*\
  !*** external "rmwc/List" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rmwc/List");

/***/ }),

/***/ "rmwc/Menu":
/*!****************************!*\
  !*** external "rmwc/Menu" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rmwc/Menu");

/***/ }),

/***/ "rmwc/TextField":
/*!*********************************!*\
  !*** external "rmwc/TextField" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rmwc/TextField");

/***/ }),

/***/ "rmwc/TopAppBar":
/*!*********************************!*\
  !*** external "rmwc/TopAppBar" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rmwc/TopAppBar");

/***/ }),

/***/ "rmwc/Typography":
/*!**********************************!*\
  !*** external "rmwc/Typography" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rmwc/Typography");

/***/ })

/******/ });
//# sourceMappingURL=obs.js.map