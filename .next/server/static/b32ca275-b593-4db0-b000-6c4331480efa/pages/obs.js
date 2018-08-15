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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("rmwc/List");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("rmwc/TopAppBar");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("rmwc/Typography");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("rmwc/Button");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
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

/* harmony default export */ __webpack_exports__["a"] = (new AtomicRouter());

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("rmwc/Drawer");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("rmwc/Menu");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("rmwc/TextField");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var Router = __webpack_require__(17);

var NProgress = __webpack_require__(5);

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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasePage; });
/* harmony import */ var _components_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
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
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rmwc_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var rmwc_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rmwc_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rmwc_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var rmwc_Drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rmwc_Drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rmwc_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var rmwc_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rmwc_List__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rmwc_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var rmwc_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rmwc_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rmwc_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var rmwc_Menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rmwc_Menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_page_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var _styles_page_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_page_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _atomic_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
/* harmony import */ var material_components_web_dist_material_components_web_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18);
/* harmony import */ var material_components_web_dist_material_components_web_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(material_components_web_dist_material_components_web_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rmwc_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3);
/* harmony import */ var rmwc_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rmwc_Typography__WEBPACK_IMPORTED_MODULE_10__);
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

      _atomic_router__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].pushRoute('player', {
        username: playerName
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__["TopAppBar"], {
        theme: "primary",
        fixed: true,
        className: "atomic-app-bar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__["TopAppBarRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__["TopAppBarSection"], {
        alignStart: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__["TopAppBarNavigationIcon"], {
        theme: "primary",
        use: "menu",
        onClick: this.menuBtnPressed
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__["TopAppBarTitle"], null, "Atomic Stats")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__["TopAppBarSection"], {
        alignEnd: true
      }, this.props.user ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Menu__WEBPACK_IMPORTED_MODULE_6__["MenuAnchor"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        className: "atomic-auth-button",
        onClick: function onClick(evt) {
          return _this2.setState({
            'authMenu': !_this2.state.authMenu
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Button__WEBPACK_IMPORTED_MODULE_5__["ButtonIcon"], null, "person"), this.props.user.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        id: "atomic-logout-form",
        action: "/logout",
        method: "POST"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Menu__WEBPACK_IMPORTED_MODULE_6__["Menu"], {
        className: "atomic-menu atomic-auth-menu",
        open: this.state.authMenu,
        onClose: function onClose(evt) {
          return _this2.setState({
            authMenu: false
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Menu__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
        onClick: function onClick() {
          document.getElementById("atomic-logout-form").submit();
        }
      }, "Logout"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "atomic-auth-buttons"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        className: "atomic-auth-button",
        onClick: function onClick() {
          return _atomic_router__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].pushRoute("login");
        }
      }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Typography__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        use: "button",
        style: {
          color: "white",
          position: "relative",
          top: "2px",
          display: "inline-block",
          padding: "10px"
        }
      }, "or"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        className: "atomic-auth-button",
        onClick: function onClick() {
          return _atomic_router__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].pushRoute("register");
        }
      }, "Register")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Drawer__WEBPACK_IMPORTED_MODULE_3__["Drawer"], {
        persistent: true,
        className: "atomic-drawer",
        open: this.state.persistentOpen,
        style: {
          zIndex: "1"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Drawer__WEBPACK_IMPORTED_MODULE_3__["DrawerToolbarSpacer"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Drawer__WEBPACK_IMPORTED_MODULE_3__["DrawerContent"], {
        className: "atomic-drawer-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], null, "Friends")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], null, "My Stats")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], null, "My Profile"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListDivider"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
        onClick: function onClick() {
          return _atomic_router__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].pushRoute('news');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], null, "News")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
        onClick: function onClick() {
          return _atomic_router__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].pushRoute('shop');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], null, "Shop")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__["TopAppBarFixedAdjust"], {
        className: "atomic-content-wrapper",
        style: {
          display: "flex",
          flexDirection: "column"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "atomic-search-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TextField__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
        box: true,
        onKeyPress: function onKeyPress(e) {
          return e.key == "Enter" ? _this2.searchPlayer() : null;
        },
        invalid: this.state.invalid,
        ref: "searchField",
        id: "atomic-search-field",
        className: "atomic-text-field atomic-search-field",
        label: "Epic Games Username"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        raised: true,
        accent: true,
        theme: "secondary",
        className: "atomic-search-button",
        onClick: this.searchPlayer
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Button__WEBPACK_IMPORTED_MODULE_5__["ButtonIcon"], null, "search"), "Search")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "atomic-content",
        style: {
          overflow: "hidden"
        }
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          flexGrow: "1",
          display: "flex",
          alignItems: "flex-end"
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
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Typography__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        use: "body2",
        style: {
          flexDirection: "row",
          color: "var(--mdc-theme-primary)",
          fontSize: "19px"
        }
      }, "\xA9 2018 Atomic Stats"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Typography__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        use: "caption",
        style: {
          flexDirection: "row",
          color: "var(--mdc-theme-primary)"
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


/* harmony default export */ __webpack_exports__["a"] = (Page);

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports) {



/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("nextjs-dynamic-routes");

/***/ }),
/* 18 */
/***/ (function(module, exports) {



/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

module.exports = require("rmwc");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-animated-number");

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(42);


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ObsOverlay; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var rmwc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var rmwc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rmwc__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_animated_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var react_animated_number__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_animated_number__WEBPACK_IMPORTED_MODULE_5__);



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
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Player not found!");
      } else {
        var _React$createElement, _React$createElement2, _React$createElement3, _React$createElement4;

        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "atomic-obs-overlay",
          style: {
            width: "270px"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "atomic-obs-wins",
          style: {
            minWidth: "270px",
            display: "flex",
            justifyContent: "space-evenly"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
          className: "fas fa-trophy",
          style: {
            color: "#42a5f5",
            position: "relative",
            fontSize: "30px",
            top: "-3px",
            paddingRight: "20px"
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
          style: {
            color: "#42a5f5",
            fontFamily: "Burbank",
            fontSize: "40px"
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
        }, _defineProperty(_React$createElement, "component", "span"), _defineProperty(_React$createElement, "stepPrecision", 0), _React$createElement))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "atomic-obs-stats",
          style: {
            paddingTop: "15px",
            minWidth: "270px",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "column"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
          style: {
            color: "#d32f2f",
            flexDirection: "row",
            fontFamily: "Burbank",
            fontSize: "25px"
          }
        }, "K/D"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_animated_number__WEBPACK_IMPORTED_MODULE_5___default.a, (_React$createElement2 = {
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
        }, _defineProperty(_React$createElement2, "component", "span"), _defineProperty(_React$createElement2, "stepPrecision", 2), _defineProperty(_React$createElement2, "formatValue", function formatValue(n) {
          return n.toFixed(2);
        }), _React$createElement2))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "column"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
          style: {
            color: "#66bb6a",
            flexDirection: "row",
            fontFamily: "Burbank",
            fontSize: "25px"
          }
        }, "Win %"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_animated_number__WEBPACK_IMPORTED_MODULE_5___default.a, (_React$createElement3 = {
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
        }, _defineProperty(_React$createElement3, "component", "span"), _defineProperty(_React$createElement3, "stepPrecision", 2), _defineProperty(_React$createElement3, "formatValue", function formatValue(n) {
          return n.toFixed(2) + "%";
        }), _React$createElement3))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "column"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
          style: {
            color: "#ffa726",
            flexDirection: "row",
            fontFamily: "Burbank",
            fontSize: "25px"
          }
        }, "Matches"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_animated_number__WEBPACK_IMPORTED_MODULE_5___default.a, (_React$createElement4 = {
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
        }, _defineProperty(_React$createElement4, "component", "span"), _defineProperty(_React$createElement4, "stepPrecision", 0), _React$createElement4)))));
      }
    }
  }]);

  return ObsOverlay;
}(_components_base_page__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);



/***/ })
/******/ ]);