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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var _styles_page_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/page.scss */ "./styles/page.scss");
/* harmony import */ var _styles_page_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_page_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var material_components_web_dist_material_components_web_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! material-components-web/dist/material-components-web.min.css */ "./node_modules/material-components-web/dist/material-components-web.min.css");
/* harmony import */ var material_components_web_dist_material_components_web_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(material_components_web_dist_material_components_web_min_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/almog/Desktop/atomic-stats-fixed/components/page.js";

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
      invalid: false
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

      _routes__WEBPACK_IMPORTED_MODULE_7___default.a.pushRoute('player', {
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
          lineNumber: 80
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__["TopAppBar"], {
        theme: "primary",
        fixed: true,
        className: "atomic-app-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__["TopAppBarRow"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__["TopAppBarSection"], {
        alignStart: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__["TopAppBarNavigationIcon"], {
        theme: "primary",
        use: "menu",
        onClick: this.menuBtnPressed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__["TopAppBarTitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "Atomic Stats"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Drawer__WEBPACK_IMPORTED_MODULE_3__["Drawer"], {
        persistent: true,
        className: "atomic-drawer",
        open: this.state.persistentOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mdc-drawer__toolbar-spacer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Drawer__WEBPACK_IMPORTED_MODULE_3__["DrawerContent"], {
        className: "atomic-drawer-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "Friends")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, "My Stats")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "My Profile"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__["TopAppBarFixedAdjust"], {
        className: "atomic-content-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "atomic-search-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TextField__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
        box: true,
        onKeyPress: function onKeyPress(e) {
          return e.key == "Enter" ? _this2.searchPlayer() : null;
        },
        invalid: this.state.invalid,
        ref: "searchField",
        id: "atomic-search-field",
        className: "atomic-search-field",
        label: "Epic Games Username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        raised: true,
        accent: true,
        theme: "secondary",
        className: "atomic-search-button",
        onClick: this.searchPlayer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Button__WEBPACK_IMPORTED_MODULE_5__["ButtonIcon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, "search"), "Search")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "atomic-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, this.props.children)));
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

/***/ "./pages/player.js":
/*!*************************!*\
  !*** ./pages/player.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_page_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/page.js */ "./components/page.js");
/* harmony import */ var _styles_player_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/player.scss */ "./styles/player.scss");
/* harmony import */ var _styles_player_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_player_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rmwc_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rmwc/Select */ "rmwc/Select");
/* harmony import */ var rmwc_Select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rmwc_Select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rmwc_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rmwc/Typography */ "rmwc/Typography");
/* harmony import */ var rmwc_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rmwc_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rmwc_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rmwc/Card */ "rmwc/Card");
/* harmony import */ var rmwc_Card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rmwc_Card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rmwc_GridList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rmwc/GridList */ "rmwc/GridList");
/* harmony import */ var rmwc_GridList__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rmwc_GridList__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rmwc_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rmwc/Dialog */ "rmwc/Dialog");
/* harmony import */ var rmwc_Dialog__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rmwc_Dialog__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rmwc_Ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rmwc/Ripple */ "rmwc/Ripple");
/* harmony import */ var rmwc_Ripple__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rmwc_Ripple__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/Users/almog/Desktop/atomic-stats-fixed/pages/player.js";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
          backgroundColor: ['#00b0ff', '#76ff03', '#ff9100']
        }]
      };
      var modes = {
        'Solo': this.props.stats.stats[this.state.seasonRange][this.state.platform].solo[key],
        'Duo': this.props.stats.stats[this.state.seasonRange][this.state.platform].duo[key],
        'Squad': this.props.stats.stats[this.state.seasonRange][this.state.platform].squad[key] // Add to the data only the data that isn't 0

      };

      for (var mode in modes) {
        if (modes[mode] != 0) {
          console.log(data);
          data.labels.push(mode);
          data.datasets[0].data.push(modes[mode]);
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
          backgroundColor: ['#00b0ff', '#76ff03', '#ff9100']
        }]
      };
      var modes = {
        'Solo': this.props.stats.stats[this.state.seasonRange][this.state.platform].solo[key],
        'Duo': this.props.stats.stats[this.state.seasonRange][this.state.platform].duo[key],
        'Squad': this.props.stats.stats[this.state.seasonRange][this.state.platform].squad[key] // Add to the data only the data that isn't 0

      };

      for (var mode in modes) {
        if (modes[mode] != 0) {
          console.log(data);
          data.labels.push(mode);
          data.datasets[0].data.push(modes[mode]);
        }
      }

      return data;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.stats === undefined) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_page_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
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
        statChart = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_11__["Doughnut"], {
          data: this.createDoughnutData(this.state.chartData),
          legend: {
            labels: {
              fontColor: "#ffffff"
            }
          },
          options: {
            tooltips: {
              callbacks: {
                label: function label(tooltipItem, data) {
                  var value = data.datasets[0].data[tooltipItem.index];
                  value = value.toString();
                  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  return value;
                }
              }
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          }
        });
      } else if (this.state.chartType === 'bar') {
        statChart = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_11__["Bar"], {
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
            lineNumber: 186
          }
        });
      }

      var kdChartMax = Math.ceil(Math.max(this.props.stats.stats[this.state.seasonRange][this.state.platform].solo['kd'], this.props.stats.stats[this.state.seasonRange][this.state.platform].duo['kd'], this.props.stats.stats[this.state.seasonRange][this.state.platform].squad['kd']) / 10) * 10;
      var matches;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_page_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Dialog__WEBPACK_IMPORTED_MODULE_9__["Dialog"], {
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
          lineNumber: 197
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Dialog__WEBPACK_IMPORTED_MODULE_9__["DialogSurface"], {
        style: {
          backgroundColor: "var(--mdc-theme-secondary)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Dialog__WEBPACK_IMPORTED_MODULE_9__["DialogHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Dialog__WEBPACK_IMPORTED_MODULE_9__["DialogHeaderTitle"], {
        style: {
          color: "white"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, this.state.chartTitle)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Dialog__WEBPACK_IMPORTED_MODULE_9__["DialogBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, statChart), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Dialog__WEBPACK_IMPORTED_MODULE_9__["DialogFooter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Dialog__WEBPACK_IMPORTED_MODULE_9__["DialogFooterButton"], {
        accept: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, "Close"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Dialog__WEBPACK_IMPORTED_MODULE_9__["DialogBackdrop"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          paddingLeft: "10px",
          paddingRight: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtomicCard, {
        className: "atomic-player-total-stats-card",
        title: this.props.stats.displayName,
        titleSize: "headline3",
        titleColor: "var(--mdc-theme-primary)",
        outlineColor: "var(--mdc-theme-primary)",
        backgroundColor: "var(--drawer-color)",
        width: "calc(100% - 8px)",
        maxWidth: "970px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "atomic-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
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
          lineNumber: 218
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
          lineNumber: 237
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
        className: "atomic-divider",
        style: {
          marginTop: "68px",
          marginBottom: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "atomic-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_GridList__WEBPACK_IMPORTED_MODULE_8__["GridList"], {
        tileAspect: "3x2",
        style: {
          display: "flex"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
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
          lineNumber: 251
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
          lineNumber: 252
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
          lineNumber: 253
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
          lineNumber: 254
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
          lineNumber: 255
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Typography__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        style: {
          paddingLeft: "15px",
          color: "#9e9e9e"
        },
        use: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
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
          lineNumber: 261
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtomicModeStatsCard, {
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
          lineNumber: 262
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtomicModeStatsCard, {
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
          lineNumber: 263
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtomicModeStatsCard, {
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
          lineNumber: 264
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
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtomicCard, {
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
          lineNumber: 275
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_GridList__WEBPACK_IMPORTED_MODULE_8__["GridList"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
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
            lineNumber: 278
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
          lineNumber: 290
        }
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: this.props.className ? this.props.className : "" + ' ' + "atomic-stat-mini-tile",
        style: _objectSpread({}, this.props.style),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Ripple__WEBPACK_IMPORTED_MODULE_10__["Ripple"], {
        onClick: this.props.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
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
          lineNumber: 295
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Typography__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        use: "body1",
        style: {
          paddingLeft: "5px",
          color: "white"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        }
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Typography__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        use: "body2",
        style: {
          paddingRight: "5px",
          color: this.props.color
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Ripple__WEBPACK_IMPORTED_MODULE_10__["Ripple"], {
        onClick: this.props.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_GridList__WEBPACK_IMPORTED_MODULE_8__["GridTile"], {
        style: {
          width: "180px"
        },
        className: this.props.className ? this.props.className : "" + ' ' + "atomic-stat-tile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_GridList__WEBPACK_IMPORTED_MODULE_8__["GridTilePrimary"], {
        style: {
          backgroundColor: "var(--mdc-theme-secondary)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
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
          lineNumber: 312
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Typography__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        use: "headline4",
        style: {
          color: "var(--mdc-theme-primary)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        }
      }, numberWithCommas(this.props.value)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_GridList__WEBPACK_IMPORTED_MODULE_8__["GridTileSecondary"], {
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
          lineNumber: 316
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Typography__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        use: "headline5",
        style: {
          color: 'var(--mdc-theme-secondary)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }, this.props.title))));
    }
  }]);

  return AtomicStatTile;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var AtomicCard =
/*#__PURE__*/
function (_Component5) {
  _inherits(AtomicCard, _Component5);

  function AtomicCard() {
    _classCallCheck(this, AtomicCard);

    return _possibleConstructorReturn(this, (AtomicCard.__proto__ || Object.getPrototypeOf(AtomicCard)).apply(this, arguments));
  }

  _createClass(AtomicCard, [{
    key: "render",
    value: function render() {
      var _ref4;

      var polygon = "polygon(20px 0%, 100% 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 100%, 0% 20px)";
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: this.props.className ? this.props.className : "" + ' ' + "atomic-card",
        style: this.props.style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Card__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        style: {
          maxWidth: this.props.maxWidth,
          width: this.props.width,
          backgroundColor: this.props.outlineColor,
          clipPath: polygon,
          WebkitClipPath: polygon,
          margin: "auto"
        },
        className: "atomic-outer-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Card__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        style: {
          maxWidth: this.props.maxWidth,
          clipPath: polygon,
          WebkitClipPath: polygon,
          backgroundColor: this.props.backgroundColor,
          margin: "4px 4px"
        },
        className: "atomic-inner-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "atomic-card-title",
        style: (_ref4 = {
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "8px"
        }, _defineProperty(_ref4, "display", "flex"), _defineProperty(_ref4, "alignItems", "center"), _defineProperty(_ref4, "paddingLeft", "20px"), _defineProperty(_ref4, "width", "100%"), _defineProperty(_ref4, "height", "60px"), _defineProperty(_ref4, "backgroundColor", "var(--mdc-theme-secondary)"), _ref4),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Typography__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        use: this.props.titleSize,
        style: {
          color: this.props.titleColor
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        }
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_Typography__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        use: "headline5",
        style: {
          marginRight: "35px",
          color: "white"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        }
      }, this.props.subtitle)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "atomic-card-content",
        style: {
          padding: "10px 10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        }
      }, this.props.children))));
    }
  }]);

  return AtomicCard;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

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
  name: 'player',
  pattern: '/player/:username/:platform(pc|ps4|xb1)?'
});

/***/ }),

/***/ "./styles/page.scss":
/*!**************************!*\
  !*** ./styles/page.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/player.scss":
/*!****************************!*\
  !*** ./styles/player.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/player.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/player.js */"./pages/player.js");


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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "rmwc/Button":
/*!******************************!*\
  !*** external "rmwc/Button" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rmwc/Button");

/***/ }),

/***/ "rmwc/Card":
/*!****************************!*\
  !*** external "rmwc/Card" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rmwc/Card");

/***/ }),

/***/ "rmwc/Dialog":
/*!******************************!*\
  !*** external "rmwc/Dialog" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rmwc/Dialog");

/***/ }),

/***/ "rmwc/Drawer":
/*!******************************!*\
  !*** external "rmwc/Drawer" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rmwc/Drawer");

/***/ }),

/***/ "rmwc/GridList":
/*!********************************!*\
  !*** external "rmwc/GridList" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rmwc/GridList");

/***/ }),

/***/ "rmwc/List":
/*!****************************!*\
  !*** external "rmwc/List" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rmwc/List");

/***/ }),

/***/ "rmwc/Ripple":
/*!******************************!*\
  !*** external "rmwc/Ripple" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rmwc/Ripple");

/***/ }),

/***/ "rmwc/Select":
/*!******************************!*\
  !*** external "rmwc/Select" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rmwc/Select");

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
//# sourceMappingURL=player.js.map