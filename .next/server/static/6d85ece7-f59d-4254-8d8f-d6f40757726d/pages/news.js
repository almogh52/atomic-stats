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
/******/ 	return __webpack_require__(__webpack_require__.s = 91);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleTag = __webpack_require__(38);

Object.defineProperty(exports, 'simpleTag', {
  enumerable: true,
  get: function get() {
    return _simpleTag.simpleTag;
  }
});

var _withRipple = __webpack_require__(39);

Object.defineProperty(exports, 'withRipple', {
  enumerable: true,
  get: function get() {
    return _withRipple.withRipple;
  }
});

var _withTheme = __webpack_require__(21);

Object.defineProperty(exports, 'withTheme', {
  enumerable: true,
  get: function get() {
    return _withTheme.withTheme;
  }
});

var _noop = __webpack_require__(41);

Object.defineProperty(exports, 'noop', {
  enumerable: true,
  get: function get() {
    return _noop.noop;
  }
});

var _randomId = __webpack_require__(10);

Object.defineProperty(exports, 'randomId', {
  enumerable: true,
  get: function get() {
    return _randomId.randomId;
  }
});

var _withFoundation = __webpack_require__(4);

Object.defineProperty(exports, 'withFoundation', {
  enumerable: true,
  get: function get() {
    return _withFoundation.withFoundation;
  }
});
Object.defineProperty(exports, 'syncFoundationProp', {
  enumerable: true,
  get: function get() {
    return _withFoundation.syncFoundationProp;
  }
});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("rmwc/List");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.IconRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(7);

var PropTypes = _interopRequireWildcard(_propTypes);

var _Provider = __webpack_require__(8);

var _Base = __webpack_require__(1);

var _utils = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var IconRoot = exports.IconRoot = (0, _Base.simpleTag)({ displayName: 'IconRoot', tag: 'i' });

var renderLigature = function renderLigature(_ref) {
  var content = _ref.content,
      rest = _objectWithoutProperties(_ref, ['content']);

  return React.createElement(
    IconRoot,
    rest,
    content
  );
};

var renderClassName = function renderClassName(_ref2) {
  var content = _ref2.content,
      rest = _objectWithoutProperties(_ref2, ['content']);

  return React.createElement(IconRoot, rest);
};

var renderUrl = function renderUrl(_ref3) {
  var content = _ref3.content,
      rest = _objectWithoutProperties(_ref3, ['content']);

  return React.createElement(IconRoot, Object.assign({}, rest, { tag: 'img', src: content }));
};

var renderComponent = function renderComponent(_ref4) {
  var content = _ref4.content,
      rest = _objectWithoutProperties(_ref4, ['content']);

  return React.createElement(
    IconRoot,
    rest,
    content
  );
};

var iconRenderMap = {
  ligature: renderLigature,
  className: renderClassName,
  url: renderUrl,
  component: renderComponent,
  auto: undefined
};

/**
 * An Icon component. Most of these options can be set once globally, read the documentation on Provider for more info.
 */
var Icon = exports.Icon = function (_React$PureComponent) {
  _inherits(Icon, _React$PureComponent);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.providerOptions = (0, _Provider.getProviderOptions)(this.context);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          use = _props.use,
          children = _props.children,
          render = _props.render,
          strategy = _props.strategy,
          prefix = _props.prefix,
          basename = _props.basename,
          rest = _objectWithoutProperties(_props, ['use', 'children', 'render', 'strategy', 'prefix', 'basename']);

      var _providerOptions = this.providerOptions,
          defaultBasename = _providerOptions.iconClassNameBase,
          defaultPrefix = _providerOptions.iconClassNamePrefix,
          defaultStrategy = _providerOptions.iconStrategy,
          defaultCustomRender = _providerOptions.iconRender;


      var content = use || children;
      var strategyToUse = (0, _utils.getIconStrategy)(content, strategy || null, defaultStrategy || null);
      var prefixToUse = prefix || defaultPrefix;
      var basenameToUse = basename === undefined ? defaultBasename : basename;
      var iconClassName = strategyToUse === 'className' && typeof content === 'string' ? '' + String(prefixToUse) + content : null;

      var renderToUse = strategyToUse === 'custom' ? render || defaultCustomRender : !!strategyToUse && iconRenderMap[strategyToUse] !== undefined ? iconRenderMap[strategyToUse] : undefined;

      if (!renderToUse) {
        console.error('Icon: rendering not implemented for ' + String(strategyToUse) + '.');
        return null;
      }

      //$FlowFixMe
      return renderToUse(Object.assign({}, rest, {
        content: content,
        className: (0, _classnames2.default)(basenameToUse, rest.className, iconClassName)
      }));
    }
  }]);

  return Icon;
}(React.PureComponent);

Object.defineProperty(Icon, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'Icon'
});
Object.defineProperty(Icon, 'defaultProps', {
  enumerable: true,
  writable: true,
  value: {
    use: undefined
  }
});
Object.defineProperty(Icon, 'contextTypes', {
  enumerable: true,
  writable: true,
  value: {
    RMWCOptions: PropTypes.object
  }
});
exports.default = Icon;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withFoundation = exports.syncFoundationProp = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************************
 * Utils
 ***********************************************************************/
var requestFrames = function requestFrames(callback, frameCount) {
  var currentFrame = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (currentFrame < frameCount) {
    window.requestAnimationFrame(function () {
      return requestFrames(callback, frameCount, currentFrame + 1);
    });
  } else {
    callback();
  }
};

/** Copies all known properties from source to target. This is being used in here for class merging. */
var copyProperties = function copyProperties(target, source) {
  var allPropertyNames = Object.getOwnPropertyNames(source);

  allPropertyNames.forEach(function (propertyName) {
    if (String(propertyName).match(
    // eslint-disable-next-line max-len
    /^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/)) {
      return;
    }
    var value = Object.getOwnPropertyDescriptor(source, propertyName);
    value !== undefined && Object.defineProperty(target, propertyName, value);
  });
};

/** Simplifies redundant checks for syncWithProps */
var syncFoundationProp = exports.syncFoundationProp = function syncFoundationProp(prop, foundationValue, callback) {
  if (prop !== undefined && prop !== foundationValue) {
    callback();
  }
};

/************************************************************************
 * HOC
 ***********************************************************************/
var withFoundation = exports.withFoundation = function withFoundation(_ref) {
  var FoundationConstructor = _ref.constructor,
      _ref$adapter = _ref.adapter,
      adapter = _ref$adapter === undefined ? {} : _ref$adapter,
      _ref$refs = _ref.refs,
      refs = _ref$refs === undefined ? ['root_'] : _ref$refs;

  var F = function (_React$Component) {
    _inherits(Foundation, _React$Component);

    function Foundation(props) {
      _classCallCheck(this, Foundation);

      var _this = _possibleConstructorReturn(this, (Foundation.__proto__ || Object.getPrototypeOf(Foundation)).call(this, props));

      _this.foundationRefs = refs.reduce(function (acc, r) {
        // Here we gracefully merge two refs together if one was passed down the chain
        var propName = props.elementRef && props.elementRef.refName_ === r ? 'elementRef' : r;

        acc[r] = function (ref) {
          // React will return a null ref when unmounting which will
          // in turn make our adapters error out. Make sure we only set a ref if its truthy.
          if (ref) {
            //$FlowFixMe
            _this[r] = ref;
            props[propName] && (typeof props === 'undefined' ? 'undefined' : _typeof(props)) === 'object' && props[propName](ref);
          }
        };

        // Store the refname on the object so we can reference it later and merge two of the same references together
        acc[r].refName_ = r;

        return acc;
      }, {});

      //$FlowFixMe
      _this.syncWithProps = _this.syncWithProps.bind(_this);
      return _this;
    }

    _createClass(Foundation, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.initFoundation();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this._safeSyncWithProps(nextProps);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var _this2 = this;

        this.destroyComponent();

        // We need to hold onto our refs until all child components are unmounted
        // Here we just wait a few frames and set them to null so garbage collection will take over.
        requestFrames(function () {
          refs.forEach(function (refName) {
            //$FlowFixMe
            _this2[refName] && (_this2[refName] = undefined);
          });
        }, 3);
      }
    }, {
      key: '_safeSyncWithProps',
      value: function _safeSyncWithProps(props) {
        this.foundation_ && this.syncWithProps(props);
      }
    }, {
      key: 'initFoundation',
      value: function initFoundation() {
        this.foundation_ = this.getDefaultFoundation();

        // bind custom adapter methods passed into the factory
        for (var handlerName in adapter) {
          var handler = adapter[handlerName];
          //$FlowFixMe
          this.foundation_.adapter_[handlerName] = handler.bind(this);
        }

        this.initialize();
        this.foundation_ && this.foundation_.init();
        this.initialSyncWithDOM();
        this._safeSyncWithProps(this.props);

        // this method should be deprecated in the future in favor of standard refs
        typeof this.props.apiRef === 'function' && this.props.apiRef(this);
      }
    }, {
      key: 'destroyComponent',
      value: function destroyComponent() {
        this.destroy();
        this.foundation_ && this.foundation_.destroy();
        this.foundation_ = null;
      }
    }, {
      key: 'syncWithProps',
      value: function syncWithProps(nextProps) {}
    }, {
      key: 'initialize',
      value: function initialize() {}
    }, {
      key: 'initialSyncWithDOM',
      value: function initialSyncWithDOM() {}
    }, {
      key: 'destroy',
      value: function destroy() {}
    }, {
      key: 'getDefaultFoundation',
      value: function getDefaultFoundation() {
        return {
          adapter_: {},
          init: function init() {},
          destroy: function destroy() {}
        };
      }

      /**
       * Fires a cross-browser-compatible custom event from the component root of the given type,
       */

    }, {
      key: 'emit',
      value: function emit(evtType, evtData) {
        var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var evt = void 0;
        if (typeof CustomEvent === 'function') {
          evt = new CustomEvent(evtType, {
            detail: evtData,
            bubbles: shouldBubble
          });
        } else {
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(evtType, shouldBubble, false, evtData);
        }

        var baseName = evtType.split(':').slice(-1).pop() || '';
        var propName = 'on' + baseName.charAt(0).toUpperCase() + baseName.slice(1);

        this.props[propName] && this.props[propName](evt);

        // MDC can change state internally, if we are triggering a handler, re-sync with our props
        this._safeSyncWithProps(this.props);

        return evt;
      }
    }, {
      key: 'listen',
      value: function listen(evtType, handler) {
        var root = this.root_;
        root && root.addEventListener(evtType, handler);
      }
    }, {
      key: 'unlisten',
      value: function unlisten(evtType, handler) {
        var root = this.root_;
        root && root.removeEventListener(evtType, handler);
      }
    }]);

    return Foundation;
  }(React.Component);

  copyProperties(F.prototype, FoundationConstructor.prototype);

  return F;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("rmwc/TopAppBar");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RMWCProvider = exports.getProviderOptions = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__(7);

var PropTypes = _interopRequireWildcard(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Default provider options


// prettier-ignore
// eslint-disable-next-line max-len
var providerDefaults = {
  buttonDefaultRipple: true,
  listItemDefaultRipple: true,
  iconClassNameBase: 'material-icons',
  iconClassNamePrefix: '',
  iconStrategy: 'auto',
  iconRender: undefined
};

// A function for safely getting context options
// this is so we can use the provider defaults even
// when RMWCProvider inst being used
var getProviderOptions = exports.getProviderOptions = function getProviderOptions(context) {
  return context && context.RMWCOptions ? context.RMWCOptions : providerDefaults;
};

/**
 * Provides default options for children
 * Prop override options in providerDefaults with the same name
 */

var RMWCProvider = exports.RMWCProvider = function (_React$Component) {
  _inherits(RMWCProvider, _React$Component);

  function RMWCProvider(props) {
    _classCallCheck(this, RMWCProvider);

    var _this = _possibleConstructorReturn(this, (RMWCProvider.__proto__ || Object.getPrototypeOf(RMWCProvider)).call(this, props));

    _this.options = _this.buildOptions(props);
    return _this;
  }

  _createClass(RMWCProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        RMWCOptions: this.options
      };
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      this.options = this.buildOptions(nextProps);
    }
  }, {
    key: 'buildOptions',
    value: function buildOptions(props) {
      return Object.assign({}, providerDefaults, props || {});
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return RMWCProvider;
}(React.Component);

Object.defineProperty(RMWCProvider, 'defaultProps', {
  enumerable: true,
  writable: true,
  value: providerDefaults
});
Object.defineProperty(RMWCProvider, 'childContextTypes', {
  enumerable: true,
  writable: true,
  value: {
    RMWCOptions: PropTypes.object
  }
});
exports.default = RMWCProvider;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.ButtonIcon = exports.ButtonRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__(7);

var PropTypes = _interopRequireWildcard(_propTypes);

var _Provider = __webpack_require__(8);

var _Base = __webpack_require__(1);

var _Icon = __webpack_require__(3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/****************************************************************
 * Private
 ****************************************************************/
var ButtonRoot = exports.ButtonRoot = (0, _Base.withRipple)({ surface: false })((0, _Base.simpleTag)({
  displayName: 'ButtonRoot',
  tag: 'button',
  defaultProps: {
    dense: false,
    raised: false,
    unelevated: false,
    outlined: false
  },
  consumeProps: ['dense', 'raised', 'unelevated', 'outlined', 'primary', 'accent', 'unbounded'],
  classNames: function classNames(props) {
    return ['mdc-button', {
      'mdc-button--dense': props.dense,
      'mdc-button--raised': props.raised,
      'mdc-button--unelevated': props.unelevated,
      'mdc-button--outlined': props.outlined
    }];
  }
}));

/****************************************************************
 * Public
 ****************************************************************/

/** An icon that goes inside of buttons. This is an instance of the Icon component. */
var ButtonIcon = exports.ButtonIcon = (0, _Base.simpleTag)({
  displayName: 'ButtonIcon',
  tag: _Icon.Icon,
  classNames: 'mdc-button__icon'
});

/**
 * The Button component. Buttons also accepts all of the props from the Ripple component.
 */

var Button = exports.Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.providerOptions = (0, _Provider.getProviderOptions)(this.context);
    }
  }, {
    key: 'render',
    value: function render() {
      var buttonDefaultRipple = this.providerOptions.buttonDefaultRipple;

      var _props = this.props,
          ripple = _props.ripple,
          rest = _objectWithoutProperties(_props, ['ripple']);

      var shouldRipple = ripple === undefined ? buttonDefaultRipple : ripple;

      return React.createElement(ButtonRoot, Object.assign({ ripple: shouldRipple }, rest));
    }
  }]);

  return Button;
}(React.Component);

Object.defineProperty(Button, 'defaultProps', {
  enumerable: true,
  writable: true,
  value: {
    ripple: true,
    raised: false,
    unelevated: false,
    outlined: false,
    dense: false
  }
});
Object.defineProperty(Button, 'contextTypes', {
  enumerable: true,
  writable: true,
  value: {
    RMWCOptions: PropTypes.object
  }
});
exports.default = Button;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Generates a pseudo random string for DOM ids
 * Will return 'test' in the NODE test-env so things like storyshots doesnt break.
 * */
var randomId = exports.randomId = function randomId(prefix) {
  var id =  false ? undefined : (Math.random() + Math.random() + 1).toString(36).substring(2);
  return prefix + '-' + id;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormField = exports.FormFieldRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _mdc = __webpack_require__(47);

var _Base = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormFieldRoot = exports.FormFieldRoot = (0, _Base.simpleTag)({
  displayName: 'FormFieldRoot',
  defaultProps: {
    alignEnd: undefined
  },
  classNames: function classNames(props) {
    return ['mdc-form-field', {
      'mdc-form-field--align-end': props.alignEnd
    }];
  },
  consumeProps: ['alignEnd']
});

var FormField = exports.FormField = function (_withFoundation) {
  _inherits(FormField, _withFoundation);

  function FormField() {
    _classCallCheck(this, FormField);

    return _possibleConstructorReturn(this, (FormField.__proto__ || Object.getPrototypeOf(FormField)).apply(this, arguments));
  }

  _createClass(FormField, [{
    key: 'render',
    value: function render() {
      //$FlowFixMe
      var _props = this.props,
          apiRef = _props.apiRef,
          rest = _objectWithoutProperties(_props, ['apiRef']);

      var root_ = this.foundationRefs.root_;

      return React.createElement(FormFieldRoot, Object.assign({}, rest, { elementRef: root_ }));
    }
  }]);

  return FormField;
}((0, _Base.withFoundation)({
  constructor: _mdc.MDCFormField,
  adapter: {}
}));

Object.defineProperty(FormField, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'FormField'
});
exports.default = FormField;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Button = __webpack_require__(9);

Object.keys(_Button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Button[key];
    }
  });
});

var _Card = __webpack_require__(42);

Object.keys(_Card).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Card[key];
    }
  });
});

var _Checkbox = __webpack_require__(45);

Object.keys(_Checkbox).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Checkbox[key];
    }
  });
});

var _Chip = __webpack_require__(48);

Object.keys(_Chip).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Chip[key];
    }
  });
});

var _Drawer = __webpack_require__(50);

Object.keys(_Drawer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Drawer[key];
    }
  });
});

var _Dialog = __webpack_require__(52);

Object.keys(_Dialog).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Dialog[key];
    }
  });
});

var _Elevation = __webpack_require__(54);

Object.keys(_Elevation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Elevation[key];
    }
  });
});

var _Fab = __webpack_require__(55);

Object.keys(_Fab).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Fab[key];
    }
  });
});

var _FloatingLabel = __webpack_require__(16);

Object.keys(_FloatingLabel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FloatingLabel[key];
    }
  });
});

var _FormField = __webpack_require__(11);

Object.keys(_FormField).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FormField[key];
    }
  });
});

var _GridList = __webpack_require__(56);

Object.keys(_GridList).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _GridList[key];
    }
  });
});

var _Grid = __webpack_require__(57);

Object.keys(_Grid).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Grid[key];
    }
  });
});

var _Icon = __webpack_require__(3);

Object.keys(_Icon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Icon[key];
    }
  });
});

var _IconToggle = __webpack_require__(58);

Object.keys(_IconToggle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IconToggle[key];
    }
  });
});

var _LineRipple = __webpack_require__(17);

Object.keys(_LineRipple).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _LineRipple[key];
    }
  });
});

var _LinearProgress = __webpack_require__(60);

Object.keys(_LinearProgress).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _LinearProgress[key];
    }
  });
});

var _List = __webpack_require__(15);

Object.keys(_List).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _List[key];
    }
  });
});

var _Menu = __webpack_require__(62);

Object.keys(_Menu).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Menu[key];
    }
  });
});

var _Radio = __webpack_require__(64);

Object.keys(_Radio).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Radio[key];
    }
  });
});

var _Ripple = __webpack_require__(23);

Object.keys(_Ripple).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Ripple[key];
    }
  });
});

var _Provider = __webpack_require__(8);

Object.keys(_Provider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Provider[key];
    }
  });
});

var _Select = __webpack_require__(66);

Object.keys(_Select).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Select[key];
    }
  });
});

var _Slider = __webpack_require__(68);

Object.keys(_Slider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Slider[key];
    }
  });
});

var _Snackbar = __webpack_require__(70);

Object.keys(_Snackbar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Snackbar[key];
    }
  });
});

var _Switch = __webpack_require__(73);

Object.keys(_Switch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Switch[key];
    }
  });
});

var _Tabs = __webpack_require__(74);

Object.keys(_Tabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Tabs[key];
    }
  });
});

var _TextField = __webpack_require__(76);

Object.keys(_TextField).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TextField[key];
    }
  });
});

var _Theme = __webpack_require__(78);

Object.keys(_Theme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Theme[key];
    }
  });
});

var _Toolbar = __webpack_require__(79);

Object.keys(_Toolbar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Toolbar[key];
    }
  });
});

var _Typography = __webpack_require__(81);

Object.keys(_Typography).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Typography[key];
    }
  });
});

var _require = __webpack_require__(82);

var version = _require.version;
exports.version = version;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("rmwc/Drawer");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("rmwc/Typography");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleListItem = exports.List = exports.ListDivider = exports.ListGroupSubheader = exports.ListGroup = exports.ListItemMeta = exports.ListItemGraphic = exports.ListItemSecondaryText = exports.ListItemText = exports.ListItem = exports.ListItemRoot = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__(7);

var PropTypes = _interopRequireWildcard(_propTypes);

var _Provider = __webpack_require__(8);

var _Base = __webpack_require__(1);

var _Icon = __webpack_require__(3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItemRoot = exports.ListItemRoot = (0, _Base.withRipple)()((0, _Base.simpleTag)({
  displayName: 'ListItemRoot',
  classNames: function classNames(props) {
    return ['mdc-list-item', {
      'mdc-list-item--selected': props.selected,
      'mdc-list-item--activated': props.activated
    }];
  },
  consumeProps: ['selected', 'activated', 'options'] //options is from the select element
}));

/**
 * The ListItem component.
 */

var ListItem = exports.ListItem = function (_React$Component) {
  _inherits(ListItem, _React$Component);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.providerOptions = (0, _Provider.getProviderOptions)(this.context);
    }
  }, {
    key: 'render',
    value: function render() {
      var listItemDefaultRipple = this.providerOptions.listItemDefaultRipple;

      var _props = this.props,
          ripple = _props.ripple,
          rest = _objectWithoutProperties(_props, ['ripple']);

      var shouldRipple = ripple === undefined ? listItemDefaultRipple : ripple;

      return React.createElement(ListItemRoot, Object.assign({ ripple: shouldRipple }, rest));
    }
  }]);

  return ListItem;
}(React.Component);

/** Text for the ListItem */


Object.defineProperty(ListItem, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'ListItem'
});
Object.defineProperty(ListItem, 'defaultProps', {
  enumerable: true,
  writable: true,
  value: {
    ripple: true
  }
});
Object.defineProperty(ListItem, 'contextTypes', {
  enumerable: true,
  writable: true,
  value: {
    RMWCOptions: PropTypes.object
  }
});
var ListItemText = exports.ListItemText = (0, _Base.simpleTag)({
  displayName: 'ListItemText',
  tag: 'span',
  classNames: 'mdc-list-item__text'
});

/** Secondary text for the ListItem */
var ListItemSecondaryText = exports.ListItemSecondaryText = (0, _Base.simpleTag)({
  displayName: 'ListItemSecondaryText',
  tag: 'span',
  classNames: 'mdc-list-item__secondary-text'
});

/** A graphic / icon for the ListItem */
var ListItemGraphic = exports.ListItemGraphic = (0, _Base.simpleTag)({
  displayName: 'ListItemGraphic',
  classNames: 'mdc-list-item__graphic',
  tag: _Icon.Icon
});

/** A meta icon for the ListItem. By default this is an icon component. If you need to render text, specify a tag="span" and basename="" to ensure proper rendering. See the examples above.*/
var ListItemMeta = exports.ListItemMeta = (0, _Base.simpleTag)({
  displayName: 'ListItemMeta',
  classNames: 'mdc-list-item__meta',
  tag: _Icon.Icon
});

/** A container to group ListItems */
var ListGroup = exports.ListGroup = (0, _Base.simpleTag)({
  displayName: 'ListGroup',
  classNames: 'mdc-list-group'
});

/** A subheader for the ListGroup */
var ListGroupSubheader = exports.ListGroupSubheader = (0, _Base.simpleTag)({
  displayName: 'ListGroupSubheader',
  classNames: 'mdc-list-group__subheader'
});

/** A divider for the List */
var ListDivider = exports.ListDivider = (0, _Base.simpleTag)({
  displayName: 'ListDivider',
  classNames: 'mdc-list-divider'
});

var List = exports.List = function (_simpleTag) {
  _inherits(List, _simpleTag);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'render',
    value: function render() {
      return _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'render', this).call(this);
    }
  }]);

  return List;
}((0, _Base.simpleTag)({
  displayName: 'List',
  defaultProps: {
    dense: undefined,
    twoLine: undefined,
    avatarList: undefined,
    nonInteractive: undefined
  },
  classNames: function classNames(props) {
    return ['mdc-list', {
      'mdc-list--dense': props.dense,
      'mdc-list--two-line': props.twoLine,
      'mdc-list--avatar-list': props.avatarList,
      'mdc-list--non-interactive': props.nonInteractive
    }];
  },
  consumeProps: ['dense', 'twoLine', 'avatarList', 'nonInteractive']
}));

var SimpleListItem = function SimpleListItem(_ref) {
  var text = _ref.text,
      secondaryText = _ref.secondaryText,
      graphic = _ref.graphic,
      meta = _ref.meta,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['text', 'secondaryText', 'graphic', 'meta', 'children']);

  return React.createElement(
    ListItem,
    rest,
    graphic !== undefined && React.createElement(
      ListItemGraphic,
      null,
      graphic
    ),
    React.createElement(
      ListItemText,
      null,
      text,
      secondaryText !== undefined && React.createElement(
        ListItemSecondaryText,
        null,
        secondaryText
      )
    ),
    meta !== undefined && React.createElement(
      ListItemMeta,
      null,
      meta
    ),
    children
  );
};

exports.SimpleListItem = SimpleListItem;
SimpleListItem.displayName = 'SimpleListItem';


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FloatingLabel = undefined;

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _Base = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//eslint-disable-next-line no-unused-vars
var FloatingLabel = exports.FloatingLabel = (0, _Base.simpleTag)({
  displayName: 'FloatingLabel',
  tag: 'label',
  classNames: 'mdc-floating-label'
});

exports.default = FloatingLabel;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineRipple = undefined;

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _Base = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// eslint-disable-next-line no-unused-vars
var LineRipple = exports.LineRipple = (0, _Base.simpleTag)({
  displayName: 'LineRipple',
  classNames: 'mdc-line-ripple'
});

exports.default = LineRipple;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("rmwc/Button");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Router = __webpack_require__(36);

var router = module.exports = new Router();
router.add({
  name: 'player',
  pattern: '/player/:username/:platform(pc|ps4|xb1)?'
});
router.add({
  name: 'news',
  pattern: '/news'
});
router.add({
  name: 'shop',
  pattern: '/shop'
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rmwc_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var rmwc_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rmwc_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rmwc_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var rmwc_Drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rmwc_Drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rmwc_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var rmwc_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rmwc_List__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rmwc_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var rmwc_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rmwc_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rmwc_Elevation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34);
/* harmony import */ var rmwc_Elevation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rmwc_Elevation__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_page_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35);
/* harmony import */ var _styles_page_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_page_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var material_components_web_dist_material_components_web_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37);
/* harmony import */ var material_components_web_dist_material_components_web_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(material_components_web_dist_material_components_web_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _node_modules_rmwc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12);
/* harmony import */ var _node_modules_rmwc__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_rmwc__WEBPACK_IMPORTED_MODULE_10__);
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

      _routes__WEBPACK_IMPORTED_MODULE_8___default.a.pushRoute('player', {
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
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__["TopAppBarTitle"], null, "Atomic Stats"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Drawer__WEBPACK_IMPORTED_MODULE_3__["Drawer"], {
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
          return _routes__WEBPACK_IMPORTED_MODULE_8___default.a.pushRoute('news');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], null, "News")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_TopAppBar__WEBPACK_IMPORTED_MODULE_1__["TopAppBarFixedAdjust"], {
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
        className: "atomic-search-field",
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_rmwc__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        use: "body2",
        style: {
          flexDirection: "row",
          color: "var(--mdc-theme-primary)",
          fontSize: "19px"
        }
      }, "\xA9 2018 Atomic Stats"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_rmwc__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTheme = exports.parseThemeOptions = undefined;

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _toDashCase = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Actually parses the theme options
 */
var parseThemeOptions = exports.parseThemeOptions = function parseThemeOptions(theme) {
  if (theme) {
    var themeItems = Array.isArray(theme) ? theme : theme.split(' ');
    return themeItems.map(function (v) {
      return 'mdc-theme--' + (0, _toDashCase.toDashCase)(v);
    });
  }
  return [];
};

/**
 * HOC that adds themeability to any component
 */
var withTheme = function withTheme(Component) {
  var HOC = function HOC(_ref) {
    var theme = _ref.theme,
        className = _ref.className,
        rest = _objectWithoutProperties(_ref, ['theme', 'className']);

    if (theme) {
      var classes = (0, _classnames2.default)(className, parseThemeOptions(theme));
      return React.createElement(Component, Object.assign({ className: classes }, rest));
    }

    return React.createElement(Component, Object.assign({ className: className }, rest));
  };

  HOC.displayName = 'withTheme';

  return HOC;
};
exports.withTheme = withTheme;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var toDashCase = exports.toDashCase = function toDashCase(str) {
  return str.replace(/([A-Z])/g, function ($1) {
    return '-' + $1.toLowerCase();
  });
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ripple = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(40);

var ReactDOM = _interopRequireWildcard(_reactDom);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _mdc = __webpack_require__(24);

var _withFoundation2 = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ripple = exports.Ripple = function (_withFoundation) {
  _inherits(Ripple, _withFoundation);

  function Ripple() {
    _classCallCheck(this, Ripple);

    return _possibleConstructorReturn(this, (Ripple.__proto__ || Object.getPrototypeOf(Ripple)).apply(this, arguments));
  }

  _createClass(Ripple, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Ripples can be used with many types of components
      // we need to use ReactDOM as an escape hatch to just find the DOMNode
      this.root_ = ReactDOM.findDOMNode(this);
      _get(Ripple.prototype.__proto__ || Object.getPrototypeOf(Ripple.prototype), 'componentDidMount', this).call(this);
    }
  }, {
    key: 'syncWithProps',
    value: function syncWithProps(nextProps) {
      var _this2 = this;

      // We dont know how React might have changed our dom node, re-grab it.
      this.root_ = ReactDOM.findDOMNode(this);

      // unbounded
      (0, _withFoundation2.syncFoundationProp)(nextProps.unbounded, this.unbounded, function () {
        return _this2.unbounded = !!nextProps.unbounded;
      });

      //disabled
      (0, _withFoundation2.syncFoundationProp)(nextProps.disabled, this.disabled, function () {
        return _this2.disabled = !!nextProps.disabled;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          primary = _props.primary,
          accent = _props.accent,
          unbounded = _props.unbounded,
          surface = _props.surface,
          apiRef = _props.apiRef,
          rest = _objectWithoutProperties(_props, ['children', 'className', 'primary', 'accent', 'unbounded', 'surface', 'apiRef']);

      var child = React.Children.only(children);

      var unboundedProp = unbounded ? { 'data-mdc-ripple-is-unbounded': true } : {};

      return React.cloneElement(child, Object.assign({}, child.props, rest, unboundedProp, {
        className: (0, _classnames2.default)(child.props.className, {
          'mdc-ripple-surface': surface !== undefined ? surface : true,
          'mdc-ripple-surface--primary': primary,
          'mdc-ripple-surface--accent': accent
        })
      }));
    }
  }]);

  return Ripple;
}((0, _withFoundation2.withFoundation)({
  constructor: _mdc.MDCRipple,
  adapter: {}
}));

Object.defineProperty(Ripple, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'Ripple'
});
exports.default = Ripple;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@material/ripple/dist/mdc.ripple");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIconStrategy = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Given content, tries to figure out an appropriate strategy for it
 */


// prettier-ignore
var processAutoStrategy = function processAutoStrategy(content) {
  // check for URLS
  if (typeof content === 'string' && (content.startsWith('/') || content.startsWith('http://') || content.startsWith('https://'))) {
    return 'url';
  }

  // handle JSX components
  if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object') {
    return 'component';
  }

  // we dont know what it is, default to ligature for compat with material icons
  return 'ligature';
};

/**
 * Get the actual icon strategy to use
 */
var getIconStrategy = exports.getIconStrategy = function getIconStrategy(content, strategy, defaultStrategy) {
  strategy = strategy || defaultStrategy;

  if (strategy === 'auto') {
    return processAutoStrategy(content);
  }

  return strategy;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotchedOutlineIdle = exports.NotchedOutline = undefined;

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NotchedOutline = exports.NotchedOutline = function NotchedOutline() {
  return React.createElement(
    "div",
    { className: "mdc-notched-outline" },
    React.createElement(
      "svg",
      null,
      React.createElement("path", { className: "mdc-notched-outline__path" })
    )
  );
};

var NotchedOutlineIdle = function NotchedOutlineIdle(_ref) {
  var rest = _objectWithoutProperties(_ref, []);

  return React.createElement("div", Object.assign({}, rest, { className: "mdc-notched-outline__idle" }));
};
exports.NotchedOutlineIdle = NotchedOutlineIdle;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("rmwc/TextField");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("rmwc/Card");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtomicCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rmwc_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var rmwc_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rmwc_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rmwc_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var rmwc_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rmwc_Card__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var AtomicCard =
/*#__PURE__*/
function (_Component) {
  _inherits(AtomicCard, _Component);

  function AtomicCard() {
    _classCallCheck(this, AtomicCard);

    return _possibleConstructorReturn(this, (AtomicCard.__proto__ || Object.getPrototypeOf(AtomicCard)).apply(this, arguments));
  }

  _createClass(AtomicCard, [{
    key: "render",
    value: function render() {
      var _ref;

      var polygon = "polygon(20px 0%, 100% 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 100%, 0% 20px)";
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.props.className ? this.props.className : "" + ' ' + "atomic-card",
        style: this.props.style
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Card__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        style: {
          maxWidth: this.props.maxWidth,
          width: this.props.width,
          backgroundColor: this.props.outlineColor,
          clipPath: polygon,
          WebkitClipPath: polygon,
          margin: "auto"
        },
        className: "atomic-outer-card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Card__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        style: {
          maxWidth: this.props.maxWidth,
          clipPath: polygon,
          WebkitClipPath: polygon,
          backgroundColor: this.props.backgroundColor,
          margin: "4px 4px"
        },
        className: "atomic-inner-card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "atomic-card-title",
        style: (_ref = {
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "8px"
        }, _defineProperty(_ref, "display", "flex"), _defineProperty(_ref, "alignItems", "center"), _defineProperty(_ref, "paddingLeft", "20px"), _defineProperty(_ref, "width", "100%"), _defineProperty(_ref, "height", "60px"), _defineProperty(_ref, "backgroundColor", "var(--mdc-theme-secondary)"), _ref)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Typography__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
        use: this.props.titleSize,
        style: {
          color: this.props.titleColor
        }
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rmwc_Typography__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
        use: "headline5",
        style: {
          marginRight: "35px",
          color: "white"
        }
      }, this.props.subtitle)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "atomic-card-content",
        style: {
          padding: "10px 10px"
        }
      }, this.props.children))));
    }
  }]);

  return AtomicCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("rmwc/Elevation");

/***/ }),
/* 35 */
/***/ (function(module, exports) {



/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("nextjs-dynamic-routes");

/***/ }),
/* 37 */
/***/ (function(module, exports) {



/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simpleTag = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _withTheme = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var simpleTag = function simpleTag(_ref) {
  var _class, _temp;

  var _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === undefined ? 'SimpleTag' : _ref$displayName,
      _ref$defaultProps = _ref.defaultProps,
      defaultProps = _ref$defaultProps === undefined ? {} : _ref$defaultProps,
      _ref$consumeProps = _ref.consumeProps,
      consumeProps = _ref$consumeProps === undefined ? [] : _ref$consumeProps,
      tag = _ref.tag,
      _ref$wrap = _ref.wrap,
      defaultWrap = _ref$wrap === undefined ? false : _ref$wrap,
      classNames = _ref.classNames;

  var defaultTag = tag || 'div';

  var S = (_temp = _class = function (_React$Component) {
    _inherits(SimpleTag, _React$Component);

    function SimpleTag() {
      _classCallCheck(this, SimpleTag);

      return _possibleConstructorReturn(this, (SimpleTag.__proto__ || Object.getPrototypeOf(SimpleTag)).apply(this, arguments));
    }

    _createClass(SimpleTag, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            tag = _props.tag,
            className = _props.className,
            _props$wrap = _props.wrap,
            wrap = _props$wrap === undefined ? false : _props$wrap,
            elementRef = _props.elementRef,
            theme = _props.theme,
            rest = _objectWithoutProperties(_props, ['tag', 'className', 'wrap', 'elementRef', 'theme']);

        // choose the tag we are going to render

        var Component = typeof defaultTag === 'function' && typeof tag === 'string' ? defaultTag : tag || defaultTag;

        // consume any props that shouldnt be passed along
        var safeRest = Object.assign({}, rest);
        consumeProps.forEach(function (p) {
          delete safeRest[p];
        });

        // sometimes we are extending a component, we can still honor a text based tag
        if (typeof defaultTag === 'function' && typeof tag === 'string') {
          safeRest.tag = tag;
        }

        // handle elementRefs
        if (elementRef) {
          // if the tag is a string, make our ref
          // otherwise pass elementRef along
          if (typeof Component === 'string') {
            safeRest.ref = elementRef;
          } else {
            safeRest.elementRef = elementRef;
          }
        }

        // generate the final classnames for the component
        var safeClassNames = (0, _classnames2.default)(className, (0, _withTheme.parseThemeOptions)(theme || null), typeof classNames === 'function' ? classNames(rest) : classNames);

        // handle wrapping components
        if (wrap || defaultWrap) {
          // sometimes we have undefined children
          if (!rest.children) return null;

          // make sure we delete our children here
          // so we dont recursively clone ourselves
          delete safeRest.children;
          var child = React.Children.only(rest.children);
          return React.cloneElement(child, Object.assign({}, child.props, safeRest, { className: safeClassNames }));
        }

        // default return
        return React.createElement(Component, Object.assign({ className: safeClassNames }, safeRest));
      }
    }]);

    return SimpleTag;
  }(React.Component), Object.defineProperty(_class, 'displayName', {
    enumerable: true,
    writable: true,
    value: displayName
  }), Object.defineProperty(_class, 'defaultProps', {
    enumerable: true,
    writable: true,
    value: Object.assign({}, defaultProps, {
      tag: defaultTag
    })
  }), Object.defineProperty(_class, 'isSimpleTag', {
    enumerable: true,
    writable: true,
    value: true
  }), _temp);

  return S;
};
exports.simpleTag = simpleTag;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRipple = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _Ripple = __webpack_require__(23);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * HOC that adds ripples to any component
 */
var withRipple = function withRipple() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      defaultUnbounded = _ref.unbounded,
      _ref$surface = _ref.surface,
      defaultSurface = _ref$surface === undefined ? true : _ref$surface;

  return function (Component) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      _createClass(_class, [{
        key: 'render',
        value: function render() {
          var _props = this.props,
              ripple = _props.ripple,
              rest = _objectWithoutProperties(_props, ['ripple']);

          if (ripple && !rest.cssOnly) {
            return React.createElement(
              _Ripple.Ripple,
              Object.assign({}, rest, {
                unbounded: rest.unbounded || defaultUnbounded,
                surface: rest.surface || defaultSurface
              }),
              React.createElement(Component, rest)
            );
          }

          return React.createElement(Component, rest);
        }
      }]);

      return _class;
    }(React.Component), Object.defineProperty(_class, 'displayName', {
      enumerable: true,
      writable: true,
      value: 'withRipple(' + (Component.displayName || 'Unknown') + ')'
    }), Object.defineProperty(_class, 'defaultProps', {
      enumerable: true,
      writable: true,
      value: {
        ripple: true
      }
    }), _temp;
  };
};
exports.withRipple = withRipple;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var noop = exports.noop = function noop() {};
exports.default = noop;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardAction = exports.CardActionIcons = exports.CardActionButtons = exports.CardActions = exports.CardPrimaryAction = exports.CardMediaContent = exports.CardMedia = exports.Card = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _Button = __webpack_require__(9);

var _Base = __webpack_require__(1);

var _IconButton = __webpack_require__(43);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** A Card Component */


/****************************************************************
 * Public
 ****************************************************************/
var Card = exports.Card = function (_simpleTag) {
  _inherits(Card, _simpleTag);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
    key: 'render',
    value: function render() {
      return _get(Card.prototype.__proto__ || Object.getPrototypeOf(Card.prototype), 'render', this).call(this);
    }
  }]);

  return Card;
}((0, _Base.simpleTag)({
  displayName: 'Card',
  classNames: function classNames(props) {
    return ['mdc-card', {
      'mdc-card--outlined': props.outlined
    }];
  },
  consumeProps: ['outlined']
}));

/** Media area that displays a custom background-image with background-size: cover */
var CardMedia = exports.CardMedia = function (_simpleTag2) {
  _inherits(CardMedia, _simpleTag2);

  function CardMedia() {
    _classCallCheck(this, CardMedia);

    return _possibleConstructorReturn(this, (CardMedia.__proto__ || Object.getPrototypeOf(CardMedia)).apply(this, arguments));
  }

  _createClass(CardMedia, [{
    key: 'render',
    value: function render() {
      return _get(CardMedia.prototype.__proto__ || Object.getPrototypeOf(CardMedia.prototype), 'render', this).call(this);
    }
  }]);

  return CardMedia;
}((0, _Base.simpleTag)({
  displayName: 'CardMedia',
  tag: 'section',
  classNames: function classNames(props) {
    return ['mdc-card__media', {
      'mdc-card__media--square': props.square,
      'mdc-card__media--16-9': props.sixteenByNine
    }];
  },
  consumeProps: ['square', 'sixteenByNine']
}));

/** An absolutely-positioned box the same size as the media area, for displaying a title or icon on top of the background-image */


var CardMediaContent = exports.CardMediaContent = (0, _Base.simpleTag)({
  displayName: 'CardMediaContent',
  classNames: 'mdc-card__media-content'
});

/** The main clickable area for the primary content of the card */
var CardPrimaryAction = exports.CardPrimaryAction = (0, _Base.withRipple)({ surface: false })((0, _Base.simpleTag)({
  displayName: 'CardPrimaryAction',
  classNames: 'mdc-card__primary-action'
}));

/** Row containing action buttons and/or icons */
var CardActions = exports.CardActions = function (_simpleTag3) {
  _inherits(CardActions, _simpleTag3);

  function CardActions() {
    _classCallCheck(this, CardActions);

    return _possibleConstructorReturn(this, (CardActions.__proto__ || Object.getPrototypeOf(CardActions)).apply(this, arguments));
  }

  _createClass(CardActions, [{
    key: 'render',
    value: function render() {
      return _get(CardActions.prototype.__proto__ || Object.getPrototypeOf(CardActions.prototype), 'render', this).call(this);
    }
  }]);

  return CardActions;
}((0, _Base.simpleTag)({
  displayName: 'CardActions',
  tag: 'section',
  classNames: function classNames(props) {
    return ['mdc-card__actions', { 'mdc-card__actions--full-bleed': props.fullBleed }];
  },
  consumeProps: ['fullBleed']
}));

/** A group of action buttons, displayed on the left side of the card (in LTR), adjacent to CardActionIcons */


var CardActionButtons = exports.CardActionButtons = (0, _Base.simpleTag)({
  displayName: 'CardActionButtons',
  classNames: 'mdc-card__action-buttons'
});

/** A group of supplemental action icons, displayed on the right side of the card (in LTR), adjacent to CardActionButtons */
var CardActionIcons = exports.CardActionIcons = (0, _Base.simpleTag)({
  displayName: 'CardActionIcons',
  classNames: 'mdc-card__action-icons'
});

var CardActionIcon = (0, _Base.simpleTag)({
  tag: _IconButton.IconButton,
  classNames: ['mdc-card__action', 'mdc-card__action--icon']
});

var CardActionButton = (0, _Base.simpleTag)({
  tag: _Button.Button,
  classNames: ['mdc-card__action', 'mdc-card__action--button']
});

/** A Card action Button. Depending on the props that are passed, this will either render an instance of the Button component, or the IconButton component. */

var CardAction = exports.CardAction = function (_React$Component) {
  _inherits(CardAction, _React$Component);

  function CardAction() {
    _classCallCheck(this, CardAction);

    return _possibleConstructorReturn(this, (CardAction.__proto__ || Object.getPrototypeOf(CardAction)).apply(this, arguments));
  }

  _createClass(CardAction, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isIcon = _props.isIcon,
          rest = _objectWithoutProperties(_props, ['isIcon']);

      var _props2 = this.props,
          onContent = _props2.onContent,
          offContent = _props2.offContent,
          use = _props2.use;

      return isIcon || onContent || offContent || use ? React.createElement(CardActionIcon, rest) : React.createElement(CardActionButton, rest);
    }
  }]);

  return CardAction;
}(React.Component);

Object.defineProperty(CardAction, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'CardAction'
});


CardAction.displayName = 'CardAction';


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = exports.IconButtonRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _mdc = __webpack_require__(44);

var _Icon = __webpack_require__(3);

var _utils = __webpack_require__(25);

var _Base = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconButtonRoot = exports.IconButtonRoot = (0, _Base.simpleTag)({
  displayName: 'IconButtonRoot',
  tag: _Icon.Icon,
  classNames: 'mdc-icon-button',
  defaultProps: {
    role: 'button',
    tabIndex: '0'
  }
});

var IconButton = exports.IconButton = function (_withFoundation) {
  _inherits(IconButton, _withFoundation);

  function IconButton() {
    _classCallCheck(this, IconButton);

    return _possibleConstructorReturn(this, (IconButton.__proto__ || Object.getPrototypeOf(IconButton)).apply(this, arguments));
  }

  _createClass(IconButton, [{
    key: 'isOn',


    /** Takes into account our checked prop */
    value: function isOn() {
      if (this.props.checked !== undefined) {
        return this.props.checked;
      }

      return this.foundation_ && this.on;
    }
  }, {
    key: 'initialize',
    value: function initialize() {
      this.ripple_ = this.initRipple_();
      _get(IconButton.prototype.__proto__ || Object.getPrototypeOf(IconButton.prototype), 'initialize', this).call(this);
    }
  }, {
    key: 'syncWithProps',
    value: function syncWithProps(nextProps) {
      var _this2 = this;

      // checked
      (0, _Base.syncFoundationProp)(nextProps.checked, this.on, function () {
        _this2.on = !!nextProps.checked;
        _this2.foundation_ && _this2.foundation_.refreshToggleData();
      });
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon() {
      var _props = this.props,
          use = _props.use,
          children = _props.children,
          onContent = _props.onContent,
          offContent = _props.offContent,
          onLabel = _props.onLabel,
          offLabel = _props.offLabel,
          checked = _props.checked,
          rest = _objectWithoutProperties(_props, ['use', 'children', 'onContent', 'offContent', 'onLabel', 'offLabel', 'checked']);

      var iconContent = this.isOn() && onContent ? onContent : offContent || use || children;
      var strategy = (0, _utils.getIconStrategy)(iconContent, 'auto', null);
      var opts = ['url', 'component'];
      if (opts.indexOf(strategy) !== -1) {
        return React.createElement(_Icon.Icon, Object.assign({}, rest, { use: iconContent }));
      }

      return iconContent;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          checked = _props2.checked,
          onContent = _props2.onContent,
          offContent = _props2.offContent,
          onLabel = _props2.onLabel,
          offLabel = _props2.offLabel,
          label = _props2.label,
          apiRef = _props2.apiRef,
          use = _props2.use,
          rest = _objectWithoutProperties(_props2, ['checked', 'onContent', 'offContent', 'onLabel', 'offLabel', 'label', 'apiRef', 'use']);

      var ariaPressed = this.isOn();
      var ariaLabel = label || offLabel;

      return React.createElement(IconButtonRoot, Object.assign({
        tag: 'button'
      }, rest, {
        use: this.renderIcon(),
        elementRef: this.foundationRefs.root_,
        'aria-label': ariaLabel,
        'aria-pressed': ariaPressed,
        'aria-hidden': 'true',
        'data-toggle-on-content': onContent,
        'data-toggle-on-label': onLabel,
        'data-toggle-off-content': offContent,
        'data-toggle-off-label': offLabel
      }));
    }
  }]);

  return IconButton;
}((0, _Base.withFoundation)({
  constructor: _mdc.MDCIconButtonToggle,
  adapter: {
    /**
     * A hack to get uncontrolled Icons to render
     * setText is only used to set the iconContent.
     * We are controlling the content through React
     * So here, we just use it as a queue to re-render
     */
    setText: function setText() {
      this.forceUpdate();
    }
  }
}));

Object.defineProperty(IconButton, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'IconButton'
});
exports.default = IconButton;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("@material/icon-button/dist/mdc.iconButton");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = exports.CheckboxLabel = exports.CheckboxMixedmark = exports.CheckboxCheckmarkPath = exports.CheckboxCheckmark = exports.CheckboxBackground = exports.CheckboxNativeControl = exports.CheckboxRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _mdc = __webpack_require__(46);

var _FormField = __webpack_require__(11);

var _FormField2 = _interopRequireDefault(_FormField);

var _Base = __webpack_require__(1);

var _withFoundation2 = __webpack_require__(4);

var _randomId = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxRoot = exports.CheckboxRoot = (0, _Base.simpleTag)({
  displayName: 'CheckboxRoot',
  classNames: function classNames(props) {
    return ['mdc-checkbox', {
      'mdc-checkbox--disabled': props.disabled
    }];
  },
  consumeProps: ['disabled']
});

var CheckboxNativeControl = exports.CheckboxNativeControl = (0, _Base.simpleTag)({
  displayName: 'CheckboxNativeControl',

  tag: 'input',
  classNames: 'mdc-checkbox__native-control',
  defaultProps: {
    type: 'checkbox'
  }
});

var CheckboxBackground = exports.CheckboxBackground = (0, _Base.simpleTag)({
  displayName: 'CheckboxBackground',
  classNames: 'mdc-checkbox__background'
});

var CheckboxCheckmark = exports.CheckboxCheckmark = (0, _Base.simpleTag)({
  displayName: 'CheckboxCheckmark',
  tag: 'svg',
  classNames: 'mdc-checkbox__checkmark',
  defaultProps: {
    viewBox: '0 0 24 24'
  }
});

var CheckboxCheckmarkPath = exports.CheckboxCheckmarkPath = (0, _Base.simpleTag)({
  displayName: 'CheckboxCheckmarkPath',
  tag: 'path',
  classNames: 'mdc-checkbox__checkmark-path',
  defaultProps: {
    fill: 'none',
    stroke: 'white',
    d: 'M1.73,12.91 8.1,19.28 22.79,4.59'
  }
});

var CheckboxMixedmark = exports.CheckboxMixedmark = (0, _Base.simpleTag)({
  displayName: 'CheckboxMixedmark',
  classNames: 'mdc-checkbox__mixedmark'
});

var CheckboxLabel = exports.CheckboxLabel = (0, _Base.simpleTag)({
  displayName: 'CheckboxLabel',
  tag: 'label'
});

/**
 * A Checkbox component
 */

var Checkbox = exports.Checkbox = function (_withFoundation) {
  _inherits(Checkbox, _withFoundation);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _this.generatedId = (0, _randomId.randomId)('checkbox');
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _get(Checkbox.prototype.__proto__ || Object.getPrototypeOf(Checkbox.prototype), 'componentDidMount', this).call(this);
      this.ripple_ = this.initRipple_();

      // Fixes bug #247
      // Basically we need to do the following hacks
      // - register syncWithProps so it runs on change
      // - deregister the original change handler and re-register so it
      //   runs after sync with props
      this.boundChangeHandler = function () {
        return _this2.syncWithProps(_this2.props);
      };

      this.foundation_ && this.foundation_.adapter_.deregisterChangeHandler(this.foundation_.changeHandler_);
      this.foundation_ && this.foundation_.adapter_.registerChangeHandler(this.boundChangeHandler);
      this.foundation_ && this.foundation_.adapter_.registerChangeHandler(this.foundation_.changeHandler_);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.foundation_ && this.foundation_.adapter_.deregisterChangeHandler(this.boundChangeHandler);
      _get(Checkbox.prototype.__proto__ || Object.getPrototypeOf(Checkbox.prototype), 'componentWillUnmount', this).call(this);
    }
  }, {
    key: 'syncWithProps',
    value: function syncWithProps(nextProps) {
      var _this3 = this;

      // checked
      (0, _withFoundation2.syncFoundationProp)(nextProps.checked, this.checked, function () {
        return _this3.checked = !!nextProps.checked;
      });

      // indeterminate
      (0, _withFoundation2.syncFoundationProp)(nextProps.indeterminate, this.indeterminate, function () {
        return _this3.indeterminate = !!nextProps.indeterminate;
      });

      // disabled
      (0, _withFoundation2.syncFoundationProp)(nextProps.disabled, this.disabled, function () {
        return _this3.disabled = !!nextProps.disabled;
      });

      // value
      (0, _withFoundation2.syncFoundationProp)(nextProps.value, this.value, function () {
        return _this3.value = nextProps.value;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$label = _props.label,
          label = _props$label === undefined ? '' : _props$label,
          id = _props.id,
          children = _props.children,
          checked = _props.checked,
          indeterminate = _props.indeterminate,
          apiRef = _props.apiRef,
          rest = _objectWithoutProperties(_props, ['label', 'id', 'children', 'checked', 'indeterminate', 'apiRef']);

      var root_ = this.foundationRefs.root_;

      var labelId = id || this.generatedId;

      var checkbox = React.createElement(
        CheckboxRoot,
        { elementRef: root_, disabled: rest.disabled },
        React.createElement(CheckboxNativeControl, Object.assign({ id: labelId, checked: checked }, rest)),
        React.createElement(
          CheckboxBackground,
          null,
          React.createElement(
            CheckboxCheckmark,
            null,
            React.createElement(CheckboxCheckmarkPath, null)
          ),
          React.createElement(CheckboxMixedmark, null)
        )
      );

      /**
       * We have to conditionally wrap our checkbox in a formfield
       * If we have a label
       */
      if (label.length || children) {
        return React.createElement(
          _FormField2.default,
          null,
          checkbox,
          React.createElement(
            CheckboxLabel,
            { id: labelId + 'label', htmlFor: labelId },
            label,
            children
          )
        );
      } else {
        return checkbox;
      }
    }
  }]);

  return Checkbox;
}((0, _withFoundation2.withFoundation)({
  constructor: _mdc.MDCCheckbox,
  adapter: {}
}));

Object.defineProperty(Checkbox, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'Checkbox'
});
exports.default = Checkbox;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@material/checkbox/dist/mdc.checkbox");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("@material/form-field/dist/mdc.formField");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleChip = exports.ChipSet = exports.ChipSetRoot = exports.ChipIcon = exports.ChipIconRoot = exports.ChipText = exports.ChipCheckmark = exports.Chip = exports.ChipRoot = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _Icon = __webpack_require__(3);

var _Base = __webpack_require__(1);

var _withFoundation3 = __webpack_require__(4);

var _mdc = __webpack_require__(49);

var _mdc2 = __webpack_require__(24);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** A chip component. */
var ChipRoot = exports.ChipRoot = (0, _Base.simpleTag)({
  displayName: 'ChipRoot',
  classNames: function classNames(props) {
    return ['mdc-chip', {
      'mdc-chip--selected': props.selected
    }];
  },
  consumeProps: ['selected']
});

var Chip = exports.Chip = function (_withFoundation) {
  _inherits(Chip, _withFoundation);

  function Chip() {
    _classCallCheck(this, Chip);

    return _possibleConstructorReturn(this, (Chip.__proto__ || Object.getPrototypeOf(Chip)).apply(this, arguments));
  }

  _createClass(Chip, [{
    key: 'initialize',
    value: function initialize() {
      this.leadingIcon_ = this.root_ && this.root_.querySelector('.mdc-chip__icon--leading');
      this.ripple_ = new _mdc2.MDCRipple(this.root_);
      _get(Chip.prototype.__proto__ || Object.getPrototypeOf(Chip.prototype), 'initialize', this).call(this);
    }
    //$FlowFixMe

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onInteraction = _props.onInteraction,
          onTrailingIconInteraction = _props.onTrailingIconInteraction,
          onRemoval = _props.onRemoval,
          apiRef = _props.apiRef,
          rest = _objectWithoutProperties(_props, ['onInteraction', 'onTrailingIconInteraction', 'onRemoval', 'apiRef']);

      var root_ = this.foundationRefs.root_;

      return React.createElement(ChipRoot, Object.assign({ tabIndex: 0 }, rest, { elementRef: root_ }));
    }
  }]);

  return Chip;
}((0, _withFoundation3.withFoundation)({
  constructor: _mdc.MDCChip,
  adapter: {}
}));

/** A checkmark for chip selection and filtering. */


Object.defineProperty(Chip, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'Chip'
});
var ChipCheckmark = exports.ChipCheckmark = function ChipCheckmark() {
  return React.createElement(
    'div',
    { className: 'mdc-chip__checkmark' },
    React.createElement(
      'svg',
      { className: 'mdc-chip__checkmark-svg', viewBox: '-2 -3 30 30' },
      React.createElement('path', {
        className: 'mdc-chip__checkmark-path',
        fill: 'none',
        stroke: 'black',
        d: 'M1.73,12.91 8.1,19.28 22.79,4.59'
      })
    )
  );
};

/** Text for a chip. */
var ChipText = exports.ChipText = (0, _Base.simpleTag)({
  displayName: 'ChipText',
  classNames: 'mdc-chip__text'
});

/** Icons inside of a chip. This is an instance of the Icon component. To make the icons interactive, add props tabIndex="0" and role="button". */
var ChipIconRoot = exports.ChipIconRoot = (0, _Base.simpleTag)({
  displayName: 'ChipIconRoot',
  tag: _Icon.Icon,
  defaultProps: {},
  classNames: function classNames(props) {
    return ['mdc-chip__icon', {
      'mdc-chip__icon--leading': props.leading,
      'mdc-chip__icon--trailing': props.trailing
    }];
  },
  consumeProps: ['trailing', 'leading']
});

var ChipIcon = exports.ChipIcon = function ChipIcon(props) {
  var hasInteractionHandler = Object.keys(props).some(function (p) {
    return p.startsWith('on');
  });
  var trailingProps = props.trailing || hasInteractionHandler ? { role: 'button', tabIndex: 0 } : {};

  return React.createElement(ChipIconRoot, Object.assign({}, trailingProps, props));
};

ChipIcon.displayName = 'ChipIcon';

var ChipSetRoot = exports.ChipSetRoot = (0, _Base.simpleTag)({
  displayName: 'ChipSetRoot',
  classNames: function classNames(props) {
    return ['mdc-chip-set', {
      'mdc-chip-set--choice': props.choice,
      'mdc-chip-set--filter': props.filter
    }];
  },
  consumeProps: ['filter', 'choice']
});

/** A container for multiple Chip components. */

var ChipSet = exports.ChipSet = function (_withFoundation2) {
  _inherits(ChipSet, _withFoundation2);

  function ChipSet() {
    _classCallCheck(this, ChipSet);

    return _possibleConstructorReturn(this, (ChipSet.__proto__ || Object.getPrototypeOf(ChipSet)).apply(this, arguments));
  }

  _createClass(ChipSet, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          apiRef = _props2.apiRef,
          rest = _objectWithoutProperties(_props2, ['apiRef']);

      var root_ = this.foundationRefs.root_;

      return React.createElement(ChipSetRoot, Object.assign({}, rest, { elementRef: root_ }));
    }
  }]);

  return ChipSet;
}((0, _withFoundation3.withFoundation)({
  constructor: _mdc.MDCChipSet,
  adapter: {}
}));

// handle leading and trailing icons
var renderChipIcon = function renderChipIcon(iconNode, props) {
  if (iconNode && typeof iconNode === 'string' || (typeof iconNode === 'undefined' ? 'undefined' : _typeof(iconNode)) === 'object' && iconNode.type !== ChipIcon) {
    return React.createElement(ChipIcon, Object.assign({ use: iconNode }, props));
  }

  return iconNode;
};

/** A non-standard abbreviated way for rendering chips. */
var SimpleChip = function SimpleChip(_ref) {
  var text = _ref.text,
      leadingIcon = _ref.leadingIcon,
      trailingIcon = _ref.trailingIcon,
      checkmark = _ref.checkmark,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['text', 'leadingIcon', 'trailingIcon', 'checkmark', 'children']);

  return React.createElement(
    Chip,
    rest,
    !!leadingIcon && renderChipIcon(leadingIcon, { leading: true }),
    !!checkmark && React.createElement(ChipCheckmark, null),
    React.createElement(
      ChipText,
      null,
      text,
      children
    ),
    !!trailingIcon && renderChipIcon(trailingIcon, { trailing: true })
  );
};

exports.SimpleChip = SimpleChip;
SimpleChip.displayName = 'SimpleChip';


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("@material/chips/dist/mdc.chips");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Drawer = exports.DrawerDrawer = exports.DrawerRoot = exports.DrawerContent = exports.DrawerToolbarSpacer = exports.DrawerHeader = exports.DrawerHeaderContent = exports.DrawerHeaderRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _Base = __webpack_require__(1);

var _List = __webpack_require__(15);

var _mdc = __webpack_require__(51);

var _withFoundation2 = __webpack_require__(4);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/***************************************************************************************
 * Drawer Headers
 ***************************************************************************************/
var DrawerHeaderRoot = exports.DrawerHeaderRoot = (0, _Base.simpleTag)({
  displayName: 'DrawerHeaderRoot',
  classNames: 'mdc-drawer__header'
});

var DrawerHeaderContent = exports.DrawerHeaderContent = (0, _Base.simpleTag)({
  displayName: 'DrawerHeaderContent',
  classNames: 'mdc-drawer__header-content'
});

/** A Header for Drawers */

var DrawerHeader = exports.DrawerHeader = function (_React$Component) {
  _inherits(DrawerHeader, _React$Component);

  function DrawerHeader() {
    _classCallCheck(this, DrawerHeader);

    return _possibleConstructorReturn(this, (DrawerHeader.__proto__ || Object.getPrototypeOf(DrawerHeader)).apply(this, arguments));
  }

  _createClass(DrawerHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      return React.createElement(
        DrawerHeaderRoot,
        rest,
        React.createElement(
          DrawerHeaderContent,
          null,
          children
        )
      );
    }
  }]);

  return DrawerHeader;
}(React.Component);

/** If you are using fixed a Toolbar, this provides space for it. */


var DrawerToolbarSpacer = exports.DrawerToolbarSpacer = (0, _Base.simpleTag)({
  displayName: 'DrawerToolbarSpacer',
  classNames: 'mdc-drawer__toolbar-spacer'
});

/***************************************************************************************
 * Drawer Content
 ***************************************************************************************/
/** Content for Drawers. Please note this is an instance of mdc-list by default. You can change this to a a non list container by specifying the tag as 'div' or anything else. */
var DrawerContent = exports.DrawerContent = (0, _Base.simpleTag)({
  displayName: 'DrawerContent',
  tag: _List.List,
  classNames: 'mdc-drawer__content'
});

/***************************************************************************************
 * Drawers
 ***************************************************************************************/
var DrawerRoot = exports.DrawerRoot = (0, _Base.simpleTag)({
  displayName: 'DrawerRoot',
  tag: 'aside',
  classNames: function classNames(props) {
    return ['mdc-drawer', {
      'mdc-drawer--permanent': props.permanent,
      'mdc-drawer--persistent': props.persistent,
      'mdc-drawer--temporary': props.temporary
    }];
  },
  consumeProps: ['permanent', 'persistent', 'temporary']
});

var DrawerDrawer = exports.DrawerDrawer = (0, _Base.simpleTag)({
  displayName: 'DrawerDrawer',
  tag: 'nav',
  classNames: 'mdc-drawer__drawer'
});

var slidableDrawerFactory = function slidableDrawerFactory(MDCConstructor, displayName) {
  var _class, _temp;

  return _temp = _class = function (_withFoundation) {
    _inherits(_class, _withFoundation);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'syncWithProps',
      value: function syncWithProps(nextProps) {
        var _this3 = this;

        // Open
        // MDC calls notify change before actually setting the Open value
        // which causes an infinite loop for reacts uni-directional data flow
        // The set timeout gives us a frame before we re-evaluate whether we are open
        setTimeout(function () {
          _this3.foundation_ && (0, _withFoundation2.syncFoundationProp)(nextProps.open, _this3.open, function () {
            return _this3.open = nextProps.open || false;
          });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props,
            children = _props2.children,
            onOpen = _props2.onOpen,
            onClose = _props2.onClose,
            open = _props2.open,
            rest = _objectWithoutProperties(_props2, ['children', 'onOpen', 'onClose', 'open']);

        var root_ = this.foundationRefs.root_;

        return React.createElement(
          DrawerRoot,
          Object.assign({ elementRef: root_ }, rest),
          React.createElement(
            DrawerDrawer,
            null,
            children
          )
        );
      }
    }]);

    return _class;
  }((0, _withFoundation2.withFoundation)({
    constructor: MDCConstructor,
    adapter: {}
  })), Object.defineProperty(_class, 'displayName', {
    enumerable: true,
    writable: true,
    value: displayName
  }), Object.defineProperty(_class, 'defaultProps', {
    enumerable: true,
    writable: true,
    value: {
      open: false,
      onOpen: _Base.noop,
      onClose: _Base.noop
    }
  }), _temp;
};

var TemporaryDrawer = slidableDrawerFactory(_mdc.MDCTemporaryDrawer, 'TemporaryDrawer');

var PersistentDrawer = slidableDrawerFactory(_mdc.MDCPersistentDrawer, 'PersistentDrawer');

var PermanentDrawer = function (_React$Component2) {
  _inherits(PermanentDrawer, _React$Component2);

  function PermanentDrawer() {
    _classCallCheck(this, PermanentDrawer);

    return _possibleConstructorReturn(this, (PermanentDrawer.__proto__ || Object.getPrototypeOf(PermanentDrawer)).apply(this, arguments));
  }

  _createClass(PermanentDrawer, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          children = _props3.children,
          onOpen = _props3.onOpen,
          onClose = _props3.onClose,
          rest = _objectWithoutProperties(_props3, ['children', 'onOpen', 'onClose']);

      return React.createElement(
        DrawerRoot,
        rest,
        children
      );
    }
  }]);

  return PermanentDrawer;
}(React.Component);

Object.defineProperty(PermanentDrawer, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'PermanentDrawer'
});
Object.defineProperty(PermanentDrawer, 'defaultProps', {
  enumerable: true,
  writable: true,
  value: {
    open: false,
    onOpen: _Base.noop,
    onClose: _Base.noop
  }
});
var Drawer = exports.Drawer = function Drawer(props) {
  if (props.persistent) {
    return React.createElement(PersistentDrawer, props);
  }

  if (props.temporary) {
    return React.createElement(TemporaryDrawer, props);
  }

  return React.createElement(PermanentDrawer, props);
};

Drawer.displayName = 'Drawer';


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("@material/drawer/dist/mdc.drawer");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleDialog = exports.Dialog = exports.DialogFooterButton = exports.DialogFooter = exports.DialogBody = exports.DialogHeaderTitle = exports.DialogHeader = exports.DialogSurface = exports.DialogBackdrop = exports.DialogRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _mdc = __webpack_require__(53);

var _Button = __webpack_require__(9);

var _Button2 = _interopRequireDefault(_Button);

var _Base = __webpack_require__(1);

var _withFoundation2 = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DialogRoot = exports.DialogRoot = (0, _Base.simpleTag)({
  displayName: 'DialogRoot',
  defaultProps: {
    role: 'alertdialog'
  },
  tag: 'aside',
  classNames: 'mdc-dialog'
});

/** The Dialog backdrop */
var DialogBackdrop = exports.DialogBackdrop = (0, _Base.simpleTag)({
  displayName: 'DialogBackdrop',
  classNames: 'mdc-dialog__backdrop'
});

/** The Dialog surface */
var DialogSurface = exports.DialogSurface = (0, _Base.simpleTag)({
  displayName: 'DialogSurface',
  classNames: 'mdc-dialog__surface'
});

/** The Dialog header */
var DialogHeader = exports.DialogHeader = (0, _Base.simpleTag)({
  displayName: 'DialogHeader',
  tag: 'header',
  classNames: 'mdc-dialog__header'
});

/** The Dialog title */
var DialogHeaderTitle = exports.DialogHeaderTitle = (0, _Base.simpleTag)({
  displayName: 'DialogHeaderTitle',
  tag: 'h2',
  classNames: 'mdc-dialog__header__title'
});

/** The Dialog body */
var DialogBody = exports.DialogBody = function (_simpleTag) {
  _inherits(DialogBody, _simpleTag);

  function DialogBody() {
    _classCallCheck(this, DialogBody);

    return _possibleConstructorReturn(this, (DialogBody.__proto__ || Object.getPrototypeOf(DialogBody)).apply(this, arguments));
  }

  _createClass(DialogBody, [{
    key: 'render',
    value: function render() {
      return _get(DialogBody.prototype.__proto__ || Object.getPrototypeOf(DialogBody.prototype), 'render', this).call(this);
    }
  }]);

  return DialogBody;
}((0, _Base.simpleTag)({
  tag: 'section',
  classNames: function classNames(props) {
    return ['mdc-dialog__body', {
      'mdc-dialog__body--scrollable': props.scrollable
    }];
  },
  consumeProps: ['scrollable']
}));

/** The Dialog footer */


Object.defineProperty(DialogBody, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'DialogBody'
});
var DialogFooter = exports.DialogFooter = (0, _Base.simpleTag)({
  displayName: 'DialogFooter',
  tag: 'footer',
  classNames: 'mdc-dialog__footer'
});

/** A Dialog footer button */
var DialogFooterButton = exports.DialogFooterButton = function (_simpleTag2) {
  _inherits(DialogFooterButton, _simpleTag2);

  function DialogFooterButton() {
    _classCallCheck(this, DialogFooterButton);

    return _possibleConstructorReturn(this, (DialogFooterButton.__proto__ || Object.getPrototypeOf(DialogFooterButton)).apply(this, arguments));
  }

  _createClass(DialogFooterButton, [{
    key: 'render',
    value: function render() {
      return _get(DialogFooterButton.prototype.__proto__ || Object.getPrototypeOf(DialogFooterButton.prototype), 'render', this).call(this);
    }
  }]);

  return DialogFooterButton;
}((0, _Base.simpleTag)({
  tag: _Button2.default,
  classNames: function classNames(props) {
    return ['mdc-dialog__footer__button', {
      'mdc-dialog__footer__button--cancel': props.cancel,
      'mdc-dialog__footer__button--accept': props.accept
    }];
  },
  defaultProps: {
    accept: false,
    cancel: false
  },
  consumeProps: ['accept', 'cancel']
}));

Object.defineProperty(DialogFooterButton, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'DialogFooterButton'
});

var Dialog = exports.Dialog = function (_withFoundation) {
  _inherits(Dialog, _withFoundation);

  function Dialog() {
    _classCallCheck(this, Dialog);

    return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
  }

  _createClass(Dialog, [{
    key: 'syncWithProps',
    value: function syncWithProps(nextProps) {
      var _this4 = this;

      // open
      (0, _withFoundation2.syncFoundationProp)(nextProps.open, this.open, function () {
        nextProps.open ? _this4.show() : _this4.close();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          open = _props.open,
          onAccept = _props.onAccept,
          onCancel = _props.onCancel,
          onClose = _props.onClose,
          apiRef = _props.apiRef,
          rest = _objectWithoutProperties(_props, ['open', 'onAccept', 'onCancel', 'onClose', 'apiRef']);

      var root_ = this.foundationRefs.root_;


      return React.createElement(DialogRoot, Object.assign({}, rest, { elementRef: root_ }));
    }
  }]);

  return Dialog;
}((0, _withFoundation2.withFoundation)({
  constructor: _mdc.MDCDialog,
  adapter: {
    notifyAccept: function notifyAccept() {
      var evt = this.emit(_mdc.MDCDialogFoundation.strings.ACCEPT_EVENT);
      this.props.onClose && this.props.onClose(evt);
    },
    notifyCancel: function notifyCancel() {
      var evt = this.emit(_mdc.MDCDialogFoundation.strings.CANCEL_EVENT);
      this.props.onClose && this.props.onClose(evt);
    }
  }
}));

Object.defineProperty(Dialog, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'Dialog'
});

/** A non-standard SimpleDialog component for ease of use. */
var SimpleDialog = exports.SimpleDialog = function (_React$Component) {
  _inherits(SimpleDialog, _React$Component);

  function SimpleDialog() {
    _classCallCheck(this, SimpleDialog);

    return _possibleConstructorReturn(this, (SimpleDialog.__proto__ || Object.getPrototypeOf(SimpleDialog)).apply(this, arguments));
  }

  _createClass(SimpleDialog, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          title = _props2.title,
          header = _props2.header,
          body = _props2.body,
          footer = _props2.footer,
          scrollable = _props2.scrollable,
          acceptLabel = _props2.acceptLabel,
          cancelLabel = _props2.cancelLabel,
          children = _props2.children,
          open = _props2.open,
          rest = _objectWithoutProperties(_props2, ['title', 'header', 'body', 'footer', 'scrollable', 'acceptLabel', 'cancelLabel', 'children', 'open']);

      return React.createElement(
        Dialog,
        Object.assign({ open: open }, rest),
        React.createElement(
          DialogSurface,
          null,
          (!!title || !!header) && React.createElement(
            DialogHeader,
            null,
            !!title && React.createElement(
              DialogHeaderTitle,
              null,
              title
            ),
            !!header && { header: header }
          ),
          (!!body || children) && React.createElement(
            DialogBody,
            { scrollable: scrollable },
            body,
            children
          ),
          (!!cancelLabel || !!acceptLabel) && React.createElement(
            DialogFooter,
            null,
            !!footer && { footer: footer },
            !!cancelLabel && React.createElement(
              DialogFooterButton,
              { cancel: true },
              cancelLabel
            ),
            !!acceptLabel && React.createElement(
              DialogFooterButton,
              { accept: true },
              acceptLabel
            )
          )
        ),
        React.createElement(DialogBackdrop, null)
      );
    }
  }]);

  return SimpleDialog;
}(React.Component);

Object.defineProperty(SimpleDialog, 'defaultProps', {
  enumerable: true,
  writable: true,
  value: {
    title: undefined,
    header: undefined,
    body: undefined,
    footer: undefined,
    scrollable: undefined,
    acceptLabel: 'Accept',
    cancelLabel: 'Cancel',
    open: false,
    onAccept: _Base.noop,
    onCancel: _Base.noop,
    onClose: _Base.noop,
    children: undefined
  }
});


/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("@material/dialog/dist/mdc.dialog");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Elevation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _Base = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line no-unused-vars


/**
 * The Elevation Component
 */
var Elevation = exports.Elevation = function (_simpleTag) {
  _inherits(Elevation, _simpleTag);

  function Elevation() {
    _classCallCheck(this, Elevation);

    return _possibleConstructorReturn(this, (Elevation.__proto__ || Object.getPrototypeOf(Elevation)).apply(this, arguments));
  }

  _createClass(Elevation, [{
    key: 'render',
    value: function render() {
      return _get(Elevation.prototype.__proto__ || Object.getPrototypeOf(Elevation.prototype), 'render', this).call(this);
    }
  }]);

  return Elevation;
}((0, _Base.simpleTag)({
  defaultProps: {
    z: 0,
    transition: false
  },
  tag: 'div',
  classNames: function classNames(props) {
    return ['mdc-elevation--z' + props.z, { 'mdc-elevation-transition': props.transition }];
  },
  consumeProps: ['z', 'transition']
}));

Object.defineProperty(Elevation, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'Elevation'
});
exports.default = Elevation;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fab = exports.FabLabel = exports.FabIcon = exports.FabRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__(7);

var PropTypes = _interopRequireWildcard(_propTypes);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = __webpack_require__(3);

var _Provider = __webpack_require__(8);

var _Base = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Private
 */

var FabRoot = exports.FabRoot = (0, _Base.withRipple)({ surface: false })((0, _Base.simpleTag)({
  displayName: 'FabRoot',
  tag: 'button',
  classNames: function classNames(props) {
    return ['mdc-fab', {
      'mdc-fab--mini': props.mini,
      'mdc-fab--exited': props.exited,
      'mdc-fab--extended': props.label
    }];
  },
  defaultProps: {
    cssOnly: false,
    mini: false
  },
  consumeProps: ['mini', 'cssOnly', 'exited', 'label', 'icon']
}));

var FabIcon = exports.FabIcon = (0, _Base.simpleTag)({
  displayName: 'FabIcon',
  tag: _Icon.Icon,
  classNames: 'mdc-fab__icon'
});

var FabLabel = exports.FabLabel = (0, _Base.simpleTag)({
  displayName: 'FabLabel',
  classNames: 'mdc-fab__label'
});

/**
 * Public
 */
/** A floating action button component */

var Fab = exports.Fab = function (_React$Component) {
  _inherits(Fab, _React$Component);

  function Fab() {
    _classCallCheck(this, Fab);

    return _possibleConstructorReturn(this, (Fab.__proto__ || Object.getPrototypeOf(Fab)).apply(this, arguments));
  }

  _createClass(Fab, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.providerOptions = (0, _Provider.getProviderOptions)(this.context);
    }
  }, {
    key: 'render',
    value: function render() {
      var buttonDefaultRipple = this.providerOptions.buttonDefaultRipple;

      var _props = this.props,
          ripple = _props.ripple,
          className = _props.className,
          children = _props.children,
          icon = _props.icon,
          label = _props.label,
          rest = _objectWithoutProperties(_props, ['ripple', 'className', 'children', 'icon', 'label']);

      var shouldRipple = ripple === undefined ? buttonDefaultRipple : ripple;
      var classes = (0, _classnames2.default)(this.providerOptions.iconClassNamePrefix, className);

      return React.createElement(
        FabRoot,
        Object.assign({
          className: classes,
          ripple: shouldRipple,
          label: label
        }, rest),
        React.createElement(
          FabIcon,
          null,
          children || icon
        ),
        !!label && React.createElement(
          FabLabel,
          null,
          label
        )
      );
    }
  }]);

  return Fab;
}(React.Component);

Object.defineProperty(Fab, 'contextTypes', {
  enumerable: true,
  writable: true,
  value: {
    RMWCOptions: PropTypes.object
  }
});
Object.defineProperty(Fab, 'defaultProps', {
  enumerable: true,
  writable: true,
  value: {
    ripple: true
  }
});
exports.default = Fab;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridList = exports.GridTileTitleSupportText = exports.GridTileTitle = exports.GridTileIcon = exports.GridTileSecondary = exports.GridTile = exports.GridTilePrimaryContent = exports.GridTilePrimary = exports.GridListTiles = exports.GridListRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _Icon = __webpack_require__(3);

var _Icon2 = _interopRequireDefault(_Icon);

var _Base = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GridListRoot = exports.GridListRoot = (0, _Base.simpleTag)({
  displayName: 'GridListRoot',
  classNames: function classNames(props) {
    return ['mdc-grid-list', _defineProperty({
      'mdc-grid-list--tile-gutter-1': props.tileGutter1,
      'mdc-grid-list--header-caption': props.headerCaption,
      'mdc-grid-list--twoline-caption': props.twolineCaption,
      'mdc-grid-list--with-icon-align-start': props.withIconAlignStart
    }, 'mdc-grid-list--tile-aspect-' + (props.tileAspect || ''), props.tileAspect)];
  },
  defaultProps: {
    tileGutter1: false,
    headerCaption: false,
    twolineCaption: false,
    withIconAlignStart: false,
    tileAspect: '1x1'
  },
  consumeProps: ['tileGutter1', 'headerCaption', 'twolineCaption', 'withIconAlignStart', 'tileAspect']
});

var GridListTiles = exports.GridListTiles = (0, _Base.simpleTag)({
  displayName: 'GridListTiles',
  tag: 'ul',
  classNames: 'mdc-grid-list__tiles'
});

/** The primary content for a Grid tile */
var GridTilePrimary = exports.GridTilePrimary = (0, _Base.simpleTag)({
  displayName: 'GridTilePrimary',
  classNames: 'mdc-grid-tile__primary'
});

var GridTilePrimaryContent = exports.GridTilePrimaryContent = (0, _Base.simpleTag)({
  displayName: 'GridTilePrimaryContent',
  classNames: 'mdc-grid-tile__primary-content',
  defaultProps: {
    wrap: true
  }
});
/****************************************************************
 * Public
 ****************************************************************/

/** A grid tile  */
var GridTile = exports.GridTile = (0, _Base.simpleTag)({
  displayName: 'GridTile',
  tag: 'li',
  classNames: 'mdc-grid-tile'
});

/** The secondary content for a Grid tile */
var GridTileSecondary = exports.GridTileSecondary = (0, _Base.simpleTag)({
  displayName: 'GridTileSecondary',
  tag: 'span',
  classNames: 'mdc-grid-tile__secondary'
});

/** The icon for a Grid tile. This is an instance of Icon and can take all of the same props. */
var GridTileIcon = exports.GridTileIcon = (0, _Base.simpleTag)({
  displayName: 'GridTileIcon',
  tag: _Icon2.default,
  classNames: 'mdc-grid-tile__icon'
});

/** The title for a Grid tile */
var GridTileTitle = exports.GridTileTitle = (0, _Base.simpleTag)({
  displayName: 'GridTileTitle',
  tag: 'span',
  classNames: 'mdc-grid-tile__title'
});

/** Supporting Text for the Grid Tile */
var GridTileTitleSupportText = exports.GridTileTitleSupportText = (0, _Base.simpleTag)({
  displayName: 'GridTileTitleSupportText',
  tag: 'span',
  classNames: 'mdc-grid-tile__support-text'
});

/**
 * Grid List Component
 */

var GridList = exports.GridList = function (_React$Component) {
  _inherits(GridList, _React$Component);

  function GridList() {
    _classCallCheck(this, GridList);

    return _possibleConstructorReturn(this, (GridList.__proto__ || Object.getPrototypeOf(GridList)).apply(this, arguments));
  }

  _createClass(GridList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      return React.createElement(
        GridListRoot,
        rest,
        React.createElement(
          GridListTiles,
          null,
          children
        )
      );
    }
  }]);

  return GridList;
}(React.Component);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = exports.GridInner = exports.GridCell = exports.GridRoot = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _Base = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GridRoot = exports.GridRoot = (0, _Base.simpleTag)({
  displayName: 'GridRoot',
  classNames: function classNames(props) {
    var _ref;

    return ['mdc-layout-grid', (_ref = {}, _defineProperty(_ref, 'mdc-layout-grid__cell--align-' + (props.align || ''), props.align !== undefined), _defineProperty(_ref, 'mdc-layout-grid--fixed-column-width', props.fixedColumnWidth), _ref)];
  },
  consumeProps: ['fixedColumnWidth', 'align']
});

/** A Grid cell */
var GridCell = exports.GridCell = function (_simpleTag) {
  _inherits(GridCell, _simpleTag);

  function GridCell() {
    _classCallCheck(this, GridCell);

    return _possibleConstructorReturn(this, (GridCell.__proto__ || Object.getPrototypeOf(GridCell)).apply(this, arguments));
  }

  _createClass(GridCell, [{
    key: 'render',
    value: function render() {
      return _get(GridCell.prototype.__proto__ || Object.getPrototypeOf(GridCell.prototype), 'render', this).call(this);
    }
  }]);

  return GridCell;
}((0, _Base.simpleTag)({
  displayName: 'GridCell',
  defaultProps: {
    span: undefined,
    phone: undefined,
    tablet: undefined,
    desktop: undefined,
    order: undefined
  },
  classNames: function classNames(props) {
    var _ref2;

    return ['mdc-layout-grid__cell', (_ref2 = {}, _defineProperty(_ref2, 'mdc-layout-grid__cell--order-' + (props.order || ''), props.order !== undefined), _defineProperty(_ref2, 'mdc-layout-grid__cell--align-' + (props.align || ''), props.align !== undefined), _defineProperty(_ref2, 'mdc-layout-grid__cell--span-' + (props.span || ''), props.span !== undefined), _defineProperty(_ref2, 'mdc-layout-grid__cell--span-' + (props.phone || '') + '-phone', props.phone !== undefined), _defineProperty(_ref2, 'mdc-layout-grid__cell--span-' + (props.tablet || '') + '-tablet', props.tablet !== undefined), _defineProperty(_ref2, 'mdc-layout-grid__cell--span-' + (props.desktop || '') + '-desktop', props.desktop !== undefined), _ref2)];
  },
  consumeProps: ['span', 'phone', 'tablet', 'desktop', 'order', 'align']
}));

/** By default, an inner grid component is included inside of <Grid>. Use GridInner when doing nested Grids. */


var GridInner = exports.GridInner = (0, _Base.simpleTag)({
  displayName: 'GridInner',
  classNames: 'mdc-layout-grid__inner'
});

/** A Grid component */
var Grid = function Grid(_ref3) {
  var children = _ref3.children,
      rest = _objectWithoutProperties(_ref3, ['children']);

  var child = children;
  var needsInnerGrid = !(child && (typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object' && (child.type || {}).displayName === 'GridInner');
  return React.createElement(
    GridRoot,
    rest,
    !!needsInnerGrid ? React.createElement(
      GridInner,
      null,
      children
    ) : children
  );
};

exports.Grid = Grid;
Grid.displayName = 'Grid';


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconToggle = exports.IconToggleRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _mdc = __webpack_require__(59);

var _Icon = __webpack_require__(3);

var _Base = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconToggleRoot = exports.IconToggleRoot = (0, _Base.simpleTag)({
  displayName: 'IconToggleRoot',
  tag: _Icon.Icon,
  classNames: 'mdc-icon-toggle',
  defaultProps: {
    role: 'button',
    tabIndex: '0'
  }
});

var IconToggle = exports.IconToggle = function (_withFoundation) {
  _inherits(IconToggle, _withFoundation);

  function IconToggle() {
    _classCallCheck(this, IconToggle);

    return _possibleConstructorReturn(this, (IconToggle.__proto__ || Object.getPrototypeOf(IconToggle)).apply(this, arguments));
  }

  _createClass(IconToggle, [{
    key: 'initialize',
    value: function initialize() {
      this.ripple_ = this.initRipple_();
      _get(IconToggle.prototype.__proto__ || Object.getPrototypeOf(IconToggle.prototype), 'initialize', this).call(this);
    }
  }, {
    key: 'syncWithProps',
    value: function syncWithProps(nextProps) {
      var _this2 = this;

      // checked
      (0, _Base.syncFoundationProp)(nextProps.checked, this.on, function () {
        return _this2.on = !!nextProps.checked;
      });

      // disabled
      (0, _Base.syncFoundationProp)(nextProps.disabled, this.disabled, function () {
        return _this2.disabled = !!nextProps.disabled;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          checked = _props.checked,
          on = _props.on,
          off = _props.off,
          apiRef = _props.apiRef,
          rest = _objectWithoutProperties(_props, ['checked', 'on', 'off', 'apiRef']);

      var ariaPressed = checked !== undefined ? !!checked : false;
      var toggleOnJSON = JSON.stringify(on);
      var toggleOffJSON = JSON.stringify(off);

      return React.createElement(IconToggleRoot, Object.assign({}, rest, {
        elementRef: this.foundationRefs.root_,
        'data-toggle-on': toggleOnJSON,
        'data-toggle-off': toggleOffJSON,
        'aria-pressed': ariaPressed
      }));
    }
  }]);

  return IconToggle;
}((0, _Base.withFoundation)({
  constructor: _mdc.MDCIconToggle,
  adapter: {}
}));

Object.defineProperty(IconToggle, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'IconToggle'
});
Object.defineProperty(IconToggle, 'defaultProps', {
  enumerable: true,
  writable: true,
  value: {
    onChange: _Base.noop,
    on: undefined,
    off: undefined,
    checked: undefined
  }
});
exports.default = IconToggle;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("@material/icon-toggle/dist/mdc.iconToggle");

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinearProgress = exports.LinearProgressBarInner = exports.LinearProgressSecondaryBar = exports.LinearProgressPrimaryBar = exports.LinearProgressBuffer = exports.LinearProgressBufferingDots = exports.LinearProgressRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _mdc = __webpack_require__(61);

var _Base = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint-disable max-len */

/* eslint-enable max-len */


var LinearProgressRoot = exports.LinearProgressRoot = (0, _Base.simpleTag)({
  displayName: 'LinearProgressRoot',
  tag: 'nav',
  classNames: function classNames(props) {
    return ['mdc-linear-progress', {
      'mdc-linear-progress--indeterminate': !props.determinate,
      'mdc-linear-progress--reversed': props.reversed
    }];
  },
  defaultProps: {
    role: 'progressbar',
    determinate: true,
    reversed: false,
    accent: false
  },
  consumeProps: ['determinate', 'reversed', 'accent']
});

var LinearProgressBufferingDots = exports.LinearProgressBufferingDots = (0, _Base.simpleTag)({
  displayName: 'LinearProgressBufferingDots',
  classNames: 'mdc-linear-progress__buffering-dots'
});

var LinearProgressBuffer = exports.LinearProgressBuffer = (0, _Base.simpleTag)({
  displayName: 'LinearProgressBuffer',
  classNames: 'mdc-linear-progress__buffer'
});

var LinearProgressPrimaryBar = exports.LinearProgressPrimaryBar = (0, _Base.simpleTag)({
  displayName: 'LinearProgressPrimaryBar',
  classNames: 'mdc-linear-progress__bar mdc-linear-progress__primary-bar'
});

var LinearProgressSecondaryBar = exports.LinearProgressSecondaryBar = (0, _Base.simpleTag)({
  displayName: 'LinearProgressSecondaryBar',
  classNames: 'mdc-linear-progress__bar mdc-linear-progress__secondary-bar'
});

var LinearProgressBarInner = exports.LinearProgressBarInner = (0, _Base.simpleTag)({
  displayName: 'LinearProgressBarInner',
  classNames: 'mdc-linear-progress__bar-inner'
});

var LinearProgress = exports.LinearProgress = function (_withFoundation) {
  _inherits(LinearProgress, _withFoundation);

  function LinearProgress() {
    _classCallCheck(this, LinearProgress);

    return _possibleConstructorReturn(this, (LinearProgress.__proto__ || Object.getPrototypeOf(LinearProgress)).apply(this, arguments));
  }

  _createClass(LinearProgress, [{
    key: 'syncWithProps',
    value: function syncWithProps(nextProps) {
      var _this2 = this;

      // progress
      (0, _Base.syncFoundationProp)(nextProps.progress, this.progress, function () {
        return _this2.progress = nextProps.progress;
      });

      // buffer
      (0, _Base.syncFoundationProp)(nextProps.buffer, this.buffer, function () {
        return _this2.buffer = nextProps.buffer;
      });

      // determinate
      (0, _Base.syncFoundationProp)(nextProps.determinate, this.determinate, function () {
        return _this2.determinate = nextProps.determinate;
      });

      // reversed
      (0, _Base.syncFoundationProp)(nextProps.reversed, this.reversed, function () {
        return _this2.reversed = nextProps.reversed;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          progress = _props.progress,
          buffer = _props.buffer,
          rest = _objectWithoutProperties(_props, ['progress', 'buffer']);

      var root_ = this.foundationRefs.root_;

      return React.createElement(
        LinearProgressRoot,
        Object.assign({ elementRef: root_ }, rest),
        React.createElement(LinearProgressBufferingDots, null),
        React.createElement(LinearProgressBuffer, null),
        React.createElement(
          LinearProgressPrimaryBar,
          null,
          React.createElement(LinearProgressBarInner, null)
        ),
        React.createElement(
          LinearProgressSecondaryBar,
          null,
          React.createElement(LinearProgressBarInner, null)
        )
      );
    }
  }]);

  return LinearProgress;
}((0, _Base.withFoundation)({
  constructor: _mdc.MDCLinearProgress,
  adapter: {}
}));

Object.defineProperty(LinearProgress, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'LinearProgress'
});
Object.defineProperty(LinearProgress, 'defaultProps', {
  enumerable: true,
  writable: true,
  value: {
    progress: 0,
    buffer: undefined,
    determinate: true,
    reversed: false
  }
});
exports.default = LinearProgress;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("@material/linear-progress/dist/mdc.linearProgress");

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleMenu = exports.Menu = exports.MenuAnchor = exports.MenuItem = exports.MenuItems = exports.MenuRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _mdc = __webpack_require__(63);

var _List = __webpack_require__(15);

var _Base = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/****************************************************************
 * Private
 ****************************************************************/
var MenuRoot = exports.MenuRoot = (0, _Base.simpleTag)({
  displayName: 'MenuRoot',
  classNames: function classNames(props) {
    return ['mdc-menu'];
  },
  defaultProps: {
    tabIndex: '-1'
  }
});

var MenuItems = exports.MenuItems = (0, _Base.simpleTag)({
  displayName: 'MenuItems',
  tag: _List.List,
  classNames: 'mdc-list mdc-menu__items',
  defaultProps: {
    role: 'menu',
    'aria-hidden': 'true'
  }
});

/****************************************************************
 * Public
 ****************************************************************/

/** This is just the ListItem component exported from the Menu module for convenience. You can use `ListItem` or `SimpleListItem` components from the List section as long as you add `role="menuitem"` and `tabIndex="0"` to the components for accessibility. */

var MenuItem = exports.MenuItem = function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  function MenuItem() {
    _classCallCheck(this, MenuItem);

    return _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).apply(this, arguments));
  }

  _createClass(MenuItem, [{
    key: 'render',
    value: function render() {
      return React.createElement(_List.ListItem, Object.assign({ role: 'menuitem', tabIndex: 0 }, this.props));
    }
  }]);

  return MenuItem;
}(React.Component);

/** A Menu Anchor. When using the anchorCorner prop of Menu, you must set MenuAnchors position to absolute. */


Object.defineProperty(MenuItem, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'MenuItem'
});
var MenuAnchor = exports.MenuAnchor = (0, _Base.simpleTag)({
  displayName: 'MenuAnchor',
  classNames: 'mdc-menu-anchor'
});

var ANCHOR_CORNER_MAP = {
  bottomEnd: 'BOTTOM_END',
  bottomLeft: 'BOTTOM_LEFT',
  bottomRight: 'BOTTOM_RIGHT',
  bottomStart: 'BOTTOM_START',
  topEnd: 'TOP_END',
  topLeft: 'TOP_LEFT',
  topRight: 'TOP_RIGHT',
  topStart: 'TOP_START'
};

// prettier-ignore

/** A menu component */
var Menu = exports.Menu = function (_withFoundation) {
  _inherits(Menu, _withFoundation);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: 'syncWithProps',
    value: function syncWithProps(nextProps) {
      var _this3 = this;

      // open
      // timeout corrects an issue the synchronicity of the events from MDCMenu
      setTimeout(function () {
        (0, _Base.syncFoundationProp)(nextProps.open, _this3.open, function () {
          _this3.open = !!nextProps.open;
        });
      });

      // anchorCorner
      if (this.foundation_ && nextProps.anchorCorner !== undefined && _mdc.MDCMenuFoundation.Corner[ANCHOR_CORNER_MAP[nextProps.anchorCorner]] !== this.foundation_.anchorCorner_) {
        this.setAnchorCorner(_mdc.MDCMenuFoundation.Corner[ANCHOR_CORNER_MAP[nextProps.anchorCorner]]);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          open = _props.open,
          onClose = _props.onClose,
          onCancel = _props.onCancel,
          onSelected = _props.onSelected,
          anchorCorner = _props.anchorCorner,
          rest = _objectWithoutProperties(_props, ['children', 'open', 'onClose', 'onCancel', 'onSelected', 'anchorCorner']);

      var root_ = this.foundationRefs.root_;


      return React.createElement(
        MenuRoot,
        Object.assign({}, rest, { elementRef: root_ }),
        React.createElement(
          MenuItems,
          null,
          children
        )
      );
    }
  }]);

  return Menu;
}((0, _Base.withFoundation)({
  constructor: _mdc.MDCMenu,
  adapter: {
    registerBodyClickHandler: function registerBodyClickHandler(handler) {
      // Corrects a sync issue with MDC, it was registering even though the menu was closed
      // This has to do with the necessity to sync the foundation and react whenever an event fires
      // $FlowFixMe
      this.open && document.body.addEventListener('click', handler);
    },
    notifySelected: function notifySelected(evtData) {
      var evt = this.emit(_mdc.MDCMenuFoundation.strings.SELECTED_EVENT, {
        index: evtData.index,
        item: this.items[evtData.index]
      });
      this.props.onClose && this.props.onClose(evt);
    },
    notifyCancel: function notifyCancel() {
      var evt = this.emit(_mdc.MDCMenuFoundation.strings.CANCEL_EVENT, {});
      this.props.onClose && this.props.onClose(evt);
    }
  }
}));

Object.defineProperty(Menu, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'Menu'
});

/**
 * A Simplified menu component that allows you to pass a handle element and will automatically control the open state and add a MenuAnchor
 */
var SimpleMenu = exports.SimpleMenu = function (_React$Component2) {
  _inherits(SimpleMenu, _React$Component2);

  function SimpleMenu() {
    var _ref;

    var _temp, _this4, _ret;

    _classCallCheck(this, SimpleMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this4 = _possibleConstructorReturn(this, (_ref = SimpleMenu.__proto__ || Object.getPrototypeOf(SimpleMenu)).call.apply(_ref, [this].concat(args))), _this4), Object.defineProperty(_this4, 'state', {
      enumerable: true,
      writable: true,
      value: {
        open: false
      }
    }), _temp), _possibleConstructorReturn(_this4, _ret);
  }

  _createClass(SimpleMenu, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.syncWithOpenProp(this.props.open);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.syncWithOpenProp(nextProps.open);
    }
  }, {
    key: 'syncWithOpenProp',
    value: function syncWithOpenProp(open) {
      if (open !== undefined && this.state.open !== open) {
        this.setState({ open: open });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _props2 = this.props,
          handle = _props2.handle,
          onClose = _props2.onClose,
          children = _props2.children,
          _props2$rootProps = _props2.rootProps,
          rootProps = _props2$rootProps === undefined ? {} : _props2$rootProps,
          open = _props2.open,
          rest = _objectWithoutProperties(_props2, ['handle', 'onClose', 'children', 'rootProps', 'open']);

      var wrappedHandle = React.cloneElement(handle, Object.assign({}, handle.props, {
        onClick: function onClick(evt) {
          _this5.setState({ open: true });
          if (handle.props.onClick) {
            handle.props.onClick(evt);
          }
        }
      }));

      var wrappedOnClose = function wrappedOnClose(evt) {
        _this5.setState({ open: open || false });
        if (onClose) {
          onClose(evt);
        }
      };

      return React.createElement(
        MenuAnchor,
        rootProps,
        React.createElement(
          Menu,
          Object.assign({}, rest, { onClose: wrappedOnClose, open: this.state.open }),
          children
        ),
        wrappedHandle
      );
    }
  }]);

  return SimpleMenu;
}(React.Component);

Object.defineProperty(SimpleMenu, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'SimpleMenu'
});


/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("@material/menu/dist/mdc.menu");

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = exports.RadioLabel = exports.RadioInnerCircle = exports.RadioOuterCircle = exports.RadioBackground = exports.RadioNativeControl = exports.RadioRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _mdc = __webpack_require__(65);

var _FormField = __webpack_require__(11);

var _FormField2 = _interopRequireDefault(_FormField);

var _Base = __webpack_require__(1);

var _randomId = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioRoot = exports.RadioRoot = (0, _Base.simpleTag)({
  displayName: 'RadioRoot',
  classNames: function classNames(props) {
    return ['mdc-radio', { 'mdc-radio--disabled': props.disabled }];
  }
});

var RadioNativeControl = exports.RadioNativeControl = (0, _Base.simpleTag)({
  displayName: 'RadioNativeControl',
  tag: 'input',
  classNames: 'mdc-radio__native-control',
  defaultProps: {
    type: 'radio'
  }
});

var RadioBackground = exports.RadioBackground = (0, _Base.simpleTag)({
  displayName: 'RadioBackground',
  classNames: 'mdc-radio__background'
});

var RadioOuterCircle = exports.RadioOuterCircle = (0, _Base.simpleTag)({
  displayName: 'RadioOuterCircle',
  classNames: 'mdc-radio__outer-circle'
});

var RadioInnerCircle = exports.RadioInnerCircle = (0, _Base.simpleTag)({
  displayName: 'RadioInnerCircle',
  classNames: 'mdc-radio__inner-circle'
});

var RadioLabel = exports.RadioLabel = (0, _Base.simpleTag)({
  displayName: 'RadioLabel',
  tag: 'label'
});

var Radio = exports.Radio = function (_withFoundation) {
  _inherits(Radio, _withFoundation);

  function Radio(props) {
    _classCallCheck(this, Radio);

    var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));

    _this.generatedId = (0, _randomId.randomId)('radio');
    return _this;
  }

  _createClass(Radio, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(Radio.prototype.__proto__ || Object.getPrototypeOf(Radio.prototype), 'componentDidMount', this).call(this);
      this.ripple_ = this.initRipple_();
    }
  }, {
    key: 'syncWithProps',
    value: function syncWithProps(nextProps) {
      var _this2 = this;

      // checked
      (0, _Base.syncFoundationProp)(nextProps.checked, this.checked, function () {
        return _this2.checked = !!nextProps.checked;
      });

      // disabled
      (0, _Base.syncFoundationProp)(nextProps.disabled, this.disabled, function () {
        return _this2.disabled = !!nextProps.disabled;
      });

      // value
      (0, _Base.syncFoundationProp)(nextProps.value, this.value, function () {
        return _this2.value = nextProps.value;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$label = _props.label,
          label = _props$label === undefined ? '' : _props$label,
          id = _props.id,
          children = _props.children,
          apiRef = _props.apiRef,
          rest = _objectWithoutProperties(_props, ['label', 'id', 'children', 'apiRef']);

      var labelId = id || this.generatedId;
      var root_ = this.foundationRefs.root_;


      var radio = React.createElement(
        RadioRoot,
        { elementRef: root_, disabled: rest.disabled },
        React.createElement(RadioNativeControl, Object.assign({ id: labelId }, rest)),
        React.createElement(
          RadioBackground,
          null,
          React.createElement(RadioOuterCircle, null),
          React.createElement(RadioInnerCircle, null)
        )
      );

      /**
       * We have to conditionally wrap our radio in a FormField
       * If we have a label
       */
      if (label.length || children) {
        return React.createElement(
          _FormField2.default,
          null,
          radio,
          React.createElement(
            RadioLabel,
            { id: labelId + 'label', htmlFor: labelId },
            label,
            children
          )
        );
      } else {
        return radio;
      }
    }
  }]);

  return Radio;
}((0, _Base.withFoundation)({
  constructor: _mdc.MDCRadio,
  adapter: {}
}));

Object.defineProperty(Radio, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'Radio'
});
exports.default = Radio;


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("@material/radio/dist/mdc.radio");

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = exports.SelectNativeControl = exports.SelectBottomLine = exports.SelectSelectedText = exports.SelectSurface = exports.SelectRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _mdc = __webpack_require__(67);

var _Base = __webpack_require__(1);

var _FloatingLabel = __webpack_require__(16);

var _LineRipple = __webpack_require__(17);

var _NotchedOutline = __webpack_require__(26);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectRoot = exports.SelectRoot = (0, _Base.simpleTag)({
  displayName: 'SelectRoot',
  classNames: function classNames(props) {
    return ['mdc-select', {
      'mdc-select--outlined': props.outlined,
      'mdc-select--box': props.box
    }];
  },
  consumeProps: ['box', 'outlined'],
  defaultProps: {
    role: 'listbox'
  }
});

var SelectSurface = exports.SelectSurface = (0, _Base.simpleTag)({
  displayName: 'SelectSurface',
  classNames: 'mdc-select__surface'
});

var SelectSelectedText = exports.SelectSelectedText = (0, _Base.simpleTag)({
  displayName: 'SelectSelectedText',
  classNames: 'mdc-select__selected-text'
});

var SelectBottomLine = exports.SelectBottomLine = (0, _Base.simpleTag)({
  displayName: 'SelectBottomLine',
  classNames: 'mdc-select__bottom-line'
});

var SelectNativeControl = exports.SelectNativeControl = (0, _Base.simpleTag)({
  displayName: 'SelectNativeControl',
  tag: 'select',
  classNames: 'mdc-select__native-control'
});

/**
 * Takes multiple structures for options and returns [{label: 'label', value: 'value', ...rest}]
 */
var createSelectOptions = function createSelectOptions(options) {
  // preformatted array
  if (Array.isArray(options) && options[0] && _typeof(options[0]) === 'object') {
    return options.map(function (opt) {
      if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) !== 'object') {
        throw new Error('Encountered non object for Select ' + opt);
      }
      return Object.assign({}, opt, { options: createSelectOptions(opt.options) });
    });
  }

  // simple array
  if (Array.isArray(options)) {
    return options.map(function (value) {
      return { value: value, label: value };
    });
  }

  // value => label objects
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    return Object.keys(options).map(function (value) {
      return {
        value: value,
        label: options[value]
      };
    });
  }

  // default, just return
  return options;
};

var Select = exports.Select = function (_withFoundation) {
  _inherits(Select, _withFoundation);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
  }

  _createClass(Select, [{
    key: 'syncWithProps',
    value: function syncWithProps(nextProps) {
      var _this2 = this;

      //disabled
      (0, _Base.syncFoundationProp)(nextProps.disabled, this.disabled, function () {
        return _this2.disabled = !!nextProps.disabled;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          placeholder = _props.placeholder,
          children = _props.children,
          value = _props.value,
          outlined = _props.outlined,
          _props$label = _props.label,
          label = _props$label === undefined ? '' : _props$label,
          _props$options = _props.options,
          options = _props$options === undefined ? [] : _props$options,
          box = _props.box,
          className = _props.className,
          _props$rootProps = _props.rootProps,
          rootProps = _props$rootProps === undefined ? {} : _props$rootProps,
          apiRef = _props.apiRef,
          rest = _objectWithoutProperties(_props, ['placeholder', 'children', 'value', 'outlined', 'label', 'options', 'box', 'className', 'rootProps', 'apiRef']);

      var root_ = this.foundationRefs.root_;

      var selectOptions = createSelectOptions(options);

      return React.createElement(
        SelectRoot,
        Object.assign({}, rootProps, {
          box: box,
          outlined: outlined,
          elementRef: root_,
          className: className
        }),
        React.createElement(
          SelectNativeControl,
          Object.assign({}, rest, {
            value: value,
            defaultValue: value !== undefined ? undefined : ''
          }),
          (!!placeholder || placeholder === '') && React.createElement(
            'option',
            { value: '', disabled: placeholder === '' },
            placeholder
          ),
          selectOptions && selectOptions.map(function (_ref, i) {
            var label = _ref.label,
                options = _ref.options,
                option = _objectWithoutProperties(_ref, ['label', 'options']);

            if (options) {
              return React.createElement(
                'optgroup',
                { label: label, key: label },
                options.map(function (_ref2, i) {
                  var label = _ref2.label,
                      option = _objectWithoutProperties(_ref2, ['label']);

                  return React.createElement(
                    'option',
                    Object.assign({ key: label }, option, { value: option.value }),
                    label
                  );
                })
              );
            }

            return React.createElement(
              'option',
              Object.assign({ key: label }, option, { value: option.value }),
              label
            );
          }),
          children
        ),
        React.createElement(
          _FloatingLabel.FloatingLabel,
          null,
          label
        ),
        !!outlined && React.createElement(_NotchedOutline.NotchedOutline, null),
        !!outlined ? React.createElement(_NotchedOutline.NotchedOutlineIdle, null) : React.createElement(_LineRipple.LineRipple, null)
      );
    }
  }]);

  return Select;
}((0, _Base.withFoundation)({
  constructor: _mdc.MDCSelect,
  adapter: {
    getValue: function getValue() {
      var value = this.nativeControl_.value;
      return value === '' && this.props.placeholder ? ' ' : value;
    }
  }
}));

Object.defineProperty(Select, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'Select'
});
exports.default = Select;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("@material/select/dist/mdc.select");

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = exports.SliderFocusRing = exports.SliderThumb = exports.SliderPinValueMarker = exports.SliderPin = exports.SliderThumbContainer = exports.SliderTrackMarkerContainer = exports.SliderTrack = exports.SliderTrackContainer = exports.SliderRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _mdc = __webpack_require__(69);

var _Base = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderRoot = exports.SliderRoot = (0, _Base.simpleTag)({
  displayName: 'SliderRoot',
  classNames: function classNames(props) {
    return ['mdc-slider', {
      'mdc-slider--discrete': props.discrete,
      'mdc-slider--display-markers': props.displayMarkers && props.discrete
    }];
  },
  consumeProps: ['discrete', 'displayMarkers']
});

var SliderTrackContainer = exports.SliderTrackContainer = (0, _Base.simpleTag)({
  displayName: 'SliderTrackContainer',
  classNames: 'mdc-slider__track-container'
});

var SliderTrack = exports.SliderTrack = (0, _Base.simpleTag)({
  displayName: 'SliderTrack',
  classNames: 'mdc-slider__track'
});

var SliderTrackMarkerContainer = exports.SliderTrackMarkerContainer = (0, _Base.simpleTag)({
  displayName: 'SliderTrackMarkerContainer',
  classNames: 'mdc-slider__track-marker-container'
});

var SliderThumbContainer = exports.SliderThumbContainer = (0, _Base.simpleTag)({
  displayName: 'SliderThumbContainer',
  classNames: 'mdc-slider__thumb-container'
});

var SliderPin = exports.SliderPin = (0, _Base.simpleTag)({
  displayName: 'SliderPin',
  classNames: 'mdc-slider__pin'
});

var SliderPinValueMarker = exports.SliderPinValueMarker = (0, _Base.simpleTag)({
  displayName: 'SliderPinValueMarker',
  tag: 'span',
  classNames: 'mdc-slider__pin-value-marker'
});

var SliderThumb = exports.SliderThumb = function SliderThumb() {
  return React.createElement(
    'svg',
    { className: 'mdc-slider__thumb', width: '21', height: '21' },
    React.createElement('circle', { cx: '10.5', cy: '10.5', r: '7.875' })
  );
};

var SliderFocusRing = exports.SliderFocusRing = (0, _Base.simpleTag)({
  displayName: 'SliderFocusRing',
  classNames: 'mdc-slider__focus-ring'
});

var Slider = exports.Slider = function (_withFoundation) {
  _inherits(Slider, _withFoundation);

  function Slider() {
    _classCallCheck(this, Slider);

    return _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
  }

  _createClass(Slider, [{
    key: 'syncWithProps',
    value: function syncWithProps(nextProps) {
      var _this2 = this;

      // value
      (0, _Base.syncFoundationProp)(nextProps.value, this.value, function () {
        return _this2.value = nextProps.value;
      });

      // max
      (0, _Base.syncFoundationProp)(nextProps.max, this.max, function () {
        return _this2.max = nextProps.max !== undefined ? +nextProps.max : _this2.max;
      });

      // min
      (0, _Base.syncFoundationProp)(nextProps.min, this.min, function () {
        return _this2.min = nextProps.min !== undefined ? +nextProps.min : _this2.min;
      });

      // step
      (0, _Base.syncFoundationProp)(nextProps.step, this.step, function () {
        return _this2.step = nextProps.step !== undefined ? +nextProps.step : _this2.step;
      });

      // disabled
      (0, _Base.syncFoundationProp)(nextProps.disabled, this.disabled, function () {
        return _this2.disabled = !!nextProps.disabled;
      });

      // discrete
      (0, _Base.syncFoundationProp)(nextProps.discrete, this.discrete, function () {
        return _this2.discrete = !!nextProps.discrete;
      });

      //eslint-disable-next-line eqeqeq
      if (this.discrete && this.foundation_ && this.foundation_.getStep() == 0) {
        this.step = 1;
      }

      // displayMarkers
      (0, _Base.syncFoundationProp)(nextProps.displayMarkers, this.displayMarkers, function () {
        _this2.displayMarkers = !!nextProps.displayMarkers;
        window.requestAnimationFrame(function () {
          return _this2.foundation_ && _this2.foundation_.setupTrackMarker();
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          min = _props.min,
          max = _props.max,
          discrete = _props.discrete,
          displayMarkers = _props.displayMarkers,
          step = _props.step,
          disabled = _props.disabled,
          onChange = _props.onChange,
          onInput = _props.onInput,
          children = _props.children,
          apiRef = _props.apiRef,
          rest = _objectWithoutProperties(_props, ['value', 'min', 'max', 'discrete', 'displayMarkers', 'step', 'disabled', 'onChange', 'onInput', 'children', 'apiRef']);

      var _foundationRefs = this.foundationRefs,
          root_ = _foundationRefs.root_,
          thumbContainer_ = _foundationRefs.thumbContainer_,
          track_ = _foundationRefs.track_,
          pinValueMarker_ = _foundationRefs.pinValueMarker_,
          trackMarkerContainer_ = _foundationRefs.trackMarkerContainer_;


      if (displayMarkers && !discrete) {
        console.warn('The \'displayMarkers\' prop on rmwc Slider will\n        only work in conjunction with the \'discrete\' prop');
      }

      var dataStep = step ? { 'data-step': step } : {};

      return React.createElement(
        SliderRoot,
        Object.assign({
          tabIndex: '0'
          //eslint-disable-next-line jsx-a11y/role-has-required-aria-props
          , role: 'slider',
          'aria-valuemax': max,
          'aria-valuenow': value,
          'aria-label': 'Select Value',
          elementRef: root_,
          discrete: discrete,
          displayMarkers: displayMarkers
        }, disabled ? { 'aria-disabled': disabled } : {}, dataStep, rest),
        React.createElement(
          SliderTrackContainer,
          null,
          React.createElement(SliderTrack, { elementRef: track_ }),
          displayMarkers && React.createElement(SliderTrackMarkerContainer, { elementRef: trackMarkerContainer_ })
        ),
        React.createElement(
          SliderThumbContainer,
          { elementRef: thumbContainer_ },
          discrete && React.createElement(
            SliderPin,
            null,
            React.createElement(SliderPinValueMarker, { elementRef: pinValueMarker_ })
          ),
          React.createElement(SliderThumb, null),
          React.createElement(SliderFocusRing, null)
        ),
        children
      );
    }
  }, {
    key: 'discrete',
    get: function get() {
      return !!(this.foundation_ && this.foundation_.isDiscrete_);
    },
    set: function set(isDiscrete) {
      if (this.foundation_) {
        this.foundation_.isDiscrete_ = isDiscrete;
      }
    }
  }, {
    key: 'displayMarkers',
    get: function get() {
      return !!this.foundation_ && this.foundation_.hasTrackMarker_;
    },
    set: function set(isDisplayMarkers) {
      if (this.foundation_) {
        this.foundation_.hasTrackMarker_ = isDisplayMarkers;
      }
    }
  }]);

  return Slider;
}((0, _Base.withFoundation)({
  constructor: _mdc.MDCSlider,
  refs: ['root_', 'thumbContainer_', 'track_', 'pinValueMarker_', 'trackMarkerContainer_'],
  adapter: {}
}));

Object.defineProperty(Slider, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'Slider'
});
exports.default = Slider;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("@material/slider/dist/mdc.slider");

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Snackbar = exports.SnackbarActionButton = exports.SnackbarActionWrapper = exports.SnackbarText = exports.SnackbarRoot = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _mdc = __webpack_require__(71);

var _mdc2 = __webpack_require__(72);

var _Button = __webpack_require__(9);

var _Button2 = _interopRequireDefault(_Button);

var _Base = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Shows in browser notifications
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SnackbarRoot = exports.SnackbarRoot = (0, _Base.simpleTag)({
  displayName: 'SnackbarRoot',
  classNames: function classNames(props) {
    return ['mdc-snackbar', {
      'mdc-snackbar--align-start': props.alignStart
    }];
  },
  defaultProps: {
    alignStart: false,
    'aria-live': 'assertive',
    'aria-atomic': true,
    'aria-hidden': true
  },
  consumeProps: ['alignStart']
});

var SnackbarText = exports.SnackbarText = (0, _Base.simpleTag)({
  displayName: 'SnackbarText',
  classNames: 'mdc-snackbar__text'
});

var SnackbarActionWrapper = exports.SnackbarActionWrapper = (0, _Base.simpleTag)({
  displayName: 'SnackbarActionWrapper',
  classNames: 'mdc-snackbar__action-wrapper'
});

var SnackbarActionButton = exports.SnackbarActionButton = (0, _Base.simpleTag)({
  displayName: 'SnackbarActionButton',
  tag: _Button2.default,
  classNames: 'mdc-snackbar__action-button'
});

/**
 * A Snackbar component for notifications.
 */

var Snackbar = exports.Snackbar = function (_withFoundation) {
  _inherits(Snackbar, _withFoundation);

  function Snackbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Snackbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Snackbar.__proto__ || Object.getPrototypeOf(Snackbar)).call.apply(_ref, [this].concat(args))), _this), Object.defineProperty(_this, 'isShowing_', {
      enumerable: true,
      writable: true,
      value: false
    }), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Snackbar, [{
    key: 'syncWithProps',
    value: function syncWithProps(nextProps) {
      var _this2 = this;

      (0, _Base.syncFoundationProp)(nextProps.dismissesOnAction, this.dismissesOnAction, function () {
        return _this2.dismissesOnAction = nextProps.dismissesOnAction;
      });

      (0, _Base.syncFoundationProp)(nextProps.show, this.isShowing, function () {
        var message = nextProps.message,
            timeout = nextProps.timeout,
            actionHandler = nextProps.actionHandler,
            actionText = nextProps.actionText,
            multiline = nextProps.multiline,
            actionOnBottom = nextProps.actionOnBottom;


        _this2.show({
          message: message,
          timeout: timeout,
          actionHandler: actionHandler,
          actionText: actionText || ' ',
          multiline: multiline,
          actionOnBottom: actionOnBottom
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          show = _props.show,
          message = _props.message,
          timeout = _props.timeout,
          actionHandler = _props.actionHandler,
          actionText = _props.actionText,
          multiline = _props.multiline,
          actionOnBottom = _props.actionOnBottom,
          dismissesOnAction = _props.dismissesOnAction,
          onHide = _props.onHide,
          onShow = _props.onShow,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['show', 'message', 'timeout', 'actionHandler', 'actionText', 'multiline', 'actionOnBottom', 'dismissesOnAction', 'onHide', 'onShow', 'children']);

      var root_ = this.foundationRefs.root_;


      var isJSX = (typeof message === 'undefined' ? 'undefined' : _typeof(message)) === 'object';
      var snackbarTextStyle = {};
      if (isJSX) {
        snackbarTextStyle.display = 'none';
      }

      var snackbarActionWrapperStyle = !actionText ? {
        display: 'none'
      } : {};

      /**
       * The double SnackbarText below is a hack to allow for rendering JSX
       * The real message gets rendered in the hidden container, and the second one is
       * ignored and shows th rendered content :)
       */
      return React.createElement(
        SnackbarRoot,
        Object.assign({}, rest, { elementRef: root_ }),
        React.createElement(SnackbarText, { style: snackbarTextStyle }),
        isJSX && React.createElement(
          SnackbarText,
          null,
          message
        ),
        React.createElement(
          SnackbarActionWrapper,
          { style: snackbarActionWrapperStyle },
          React.createElement(SnackbarActionButton, null)
        ),
        children
      );
    }
  }, {
    key: 'isShowing',
    get: function get() {
      return this.isShowing_;
    },
    set: function set(isShowing) {
      this.isShowing_ = isShowing;
    }
  }]);

  return Snackbar;
}((0, _Base.withFoundation)({
  constructor: _mdc.MDCSnackbar,
  adapter: {
    removeClass: function removeClass(className) {
      // only remove if we still have a reference to our root.
      this.root_ && this.root_.classList.remove(className);
    },
    registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
      // only add if we still have a reference to our root.
      this.root_ && this.root_.addEventListener((0, _mdc2.getCorrectEventName)(window, 'transitionend'), handler);
    }
  }
}));

Object.defineProperty(Snackbar, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'Snackbar'
});
Object.defineProperty(Snackbar, 'defaultProps', {
  enumerable: true,
  writable: true,
  value: {
    show: false,
    onHide: _Base.noop,
    onShow: _Base.noop,
    message: undefined,
    timeout: undefined,
    actionHandler: undefined,
    actionText: undefined,
    multiline: false,
    actionOnBottom: false,
    dismissesOnAction: true
  }
});
exports.default = Snackbar;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("@material/snackbar/dist/mdc.snackbar");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("@material/animation/dist/mdc.animation");

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switch = exports.SwitchLabel = exports.SwitchKnob = exports.SwitchBackground = exports.SwitchNativeControl = exports.SwitchRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _FormField = __webpack_require__(11);

var _FormField2 = _interopRequireDefault(_FormField);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _Base = __webpack_require__(1);

var _randomId = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwitchRoot = exports.SwitchRoot = (0, _Base.simpleTag)({
  displayName: 'SwitchRoot',
  classNames: function classNames(props) {
    return ['mdc-switch', {
      'mdc-switch--disabled': props.disabled
    }];
  },
  consumeProps: ['disabled']
});

var SwitchNativeControl = exports.SwitchNativeControl = (0, _Base.simpleTag)({
  displayName: 'SwitchNativeControl',
  tag: 'input',
  classNames: 'mdc-switch__native-control',
  defaultProps: {
    type: 'checkbox'
  }
});

var SwitchBackground = exports.SwitchBackground = (0, _Base.simpleTag)({
  displayName: 'SwitchBackground',
  classNames: 'mdc-switch__background'
});

var SwitchKnob = exports.SwitchKnob = (0, _Base.simpleTag)({
  displayName: 'SwitchKnob',
  classNames: 'mdc-switch__knob'
});

var SwitchLabel = exports.SwitchLabel = (0, _Base.simpleTag)({
  displayName: 'SwitchLabel',
  tag: 'label',
  classNames: 'mdc-switch-label'
});

var Switch = exports.Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch(props) {
    _classCallCheck(this, Switch);

    var _this = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

    _this.generatedId = (0, _randomId.randomId)('switch');
    return _this;
  }

  _createClass(Switch, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$label = _props.label,
          label = _props$label === undefined ? '' : _props$label,
          id = _props.id,
          children = _props.children,
          _props$rootProps = _props.rootProps,
          rootProps = _props$rootProps === undefined ? {} : _props$rootProps,
          rest = _objectWithoutProperties(_props, ['label', 'id', 'children', 'rootProps']);

      var labelId = id || this.generatedId;
      var hasLabel = label.length || children;

      var switchTag = React.createElement(
        SwitchRoot,
        Object.assign({}, !hasLabel ? rootProps : {}, {
          disabled: rest.disabled,
          className: (0, _classnames2.default)(hasLabel || rootProps.className)
        }),
        React.createElement(SwitchNativeControl, Object.assign({ id: labelId }, rest)),
        React.createElement(
          SwitchBackground,
          null,
          React.createElement(SwitchKnob, null)
        )
      );

      /**
       * We have to conditionally wrap our checkbox in a formfield
       * If we have a label
       */
      if (hasLabel) {
        return React.createElement(
          _FormField2.default,
          Object.assign({}, rootProps, { className: rootProps.className }),
          switchTag,
          React.createElement(
            SwitchLabel,
            { id: labelId + 'label', htmlFor: labelId },
            label,
            children
          )
        );
      } else {
        return switchTag;
      }
    }
  }]);

  return Switch;
}(React.Component);

Object.defineProperty(Switch, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'Switch'
});
exports.default = Switch;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabBarScroller = exports.TabBar = exports.TabIconText = exports.TabIcon = exports.Tab = exports.TabBarScrollerScrollFrame = exports.TabBarScrollerIndicatorInner = exports.TabBarScrollerIndicator = exports.TabBarScrollerRoot = exports.TabBarIndicator = exports.TabBarRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _mdc = __webpack_require__(75);

var _Icon = __webpack_require__(3);

var _Base = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function recursiveMap(children, fn) {
  return React.Children.map(children,
  //$FlowFixMe
  function (child) {
    if (!React.isValidElement(child)) {
      return child;
    }

    if ('children' in child.props) {
      //$FlowFixMe
      child = React.cloneElement(child, {
        children: recursiveMap(child.props.children, fn)
      });
    }

    return fn(child);
  });
}

var TabBarRoot = exports.TabBarRoot = (0, _Base.simpleTag)({
  displayName: 'TabBarRoot',
  tag: 'nav',
  classNames: function classNames(props) {
    return ['mdc-tab-bar', {
      'mdc-tab-bar-scroller__scroll-frame__tabs': props.isTabScroller
    }];
  },
  consumeProps: ['isTabScroller']
});

var TabBarIndicator = exports.TabBarIndicator = (0, _Base.simpleTag)({
  displayName: 'TabBarIndicator',
  tag: 'span',
  classNames: 'mdc-tab-bar__indicator'
});

var TabBarScrollerRoot = exports.TabBarScrollerRoot = (0, _Base.simpleTag)({
  displayName: 'TabBarScrollerRoot',
  tag: 'div',
  classNames: 'mdc-tab-bar-scroller'
});

var TabBarScrollerIndicator = exports.TabBarScrollerIndicator = (0, _Base.simpleTag)({
  displayName: 'TabBarScrollerIndicatorBack',
  tag: 'div',
  classNames: function classNames(props) {
    return ['mdc-tab-bar-scroller__indicator', {
      'mdc-tab-bar-scroller__indicator--back': props.back,
      'mdc-tab-bar-scroller__indicator--forward': props.forward
    }];
  },
  consumeProps: ['forward', 'back']
});

var TabBarScrollerIndicatorInner = exports.TabBarScrollerIndicatorInner = (0, _Base.simpleTag)({
  displayName: 'TabBarScrollerIndicatorInner',
  tag: _Icon.Icon,
  classNames: 'mdc-tab-bar-scroller__indicator__inner'
});

var TabBarScrollerScrollFrame = exports.TabBarScrollerScrollFrame = (0, _Base.simpleTag)({
  displayName: 'TabBarScrollerScrollFrameEl',
  tag: 'div',
  classNames: 'mdc-tab-bar-scroller__scroll-frame'
});

/******************************************************
 * Public
 *******************************************************/

/** A Tab component */
var Tab = exports.Tab = (0, _Base.simpleTag)({
  displayName: 'Tab',
  classNames: 'mdc-tab'
});

/** A Tab icon. This is an instance of the Icon component. */
var TabIcon = exports.TabIcon = (0, _Base.simpleTag)({
  displayName: 'TabIcon',
  tag: _Icon.Icon,
  classNames: 'mdc-tab__icon'
});

/** Text that goes under a Tab icon */
var TabIconText = exports.TabIconText = (0, _Base.simpleTag)({
  displayName: 'TabIconText',
  tag: 'span',
  classNames: 'mdc-tab__icon-text'
});

/** The TabBar component */

var TabBar = exports.TabBar = function (_withFoundation) {
  _inherits(TabBar, _withFoundation);

  function TabBar() {
    _classCallCheck(this, TabBar);

    return _possibleConstructorReturn(this, (TabBar.__proto__ || Object.getPrototypeOf(TabBar)).apply(this, arguments));
  }

  _createClass(TabBar, [{
    key: 'syncWithProps',
    value: function syncWithProps(nextProps) {
      var _this2 = this;

      (0, _Base.syncFoundationProp)(nextProps.activeTabIndex, this.activeTabIndex, function () {
        return _this2.activeTabIndex = nextProps.activeTabIndex !== undefined ? nextProps.activeTabIndex : _this2.activeTabIndex;
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      _get(TabBar.prototype.__proto__ || Object.getPrototypeOf(TabBar.prototype), 'componentDidMount', this).call(this);

      // This corrects an issue where passing in 0 or no activeTabIndex
      // causes the first tab of the set to not be active
      if (this.props.activeTabIndex === 0 || this.props.activeTabIndex === undefined) {
        window.requestAnimationFrame(function () {
          _this3.foundation_ && _this3.foundation_.adapter_.setTabActiveAtIndex(0, true);
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      // Children changing is a pain...
      // We have to perform a lot of cleanup and sometimes we have to reinit
      var childrenDidChange = prevProps && prevProps.children && this.props && this.props.children && JSON.stringify(React.Children.map(prevProps.children, function (child) {
        return 'key' in child && child.key;
      })) !== JSON.stringify(React.Children.map(this.props.children, function (child) {
        return 'key' in child && child.key;
      }));

      var tabsLengthMismatch = React.Children.toArray(this.props.children).length !== this.tabs.length;

      if (childrenDidChange || tabsLengthMismatch) {
        this.tabs.forEach(function (mdcTab) {
          mdcTab.foundation_ && mdcTab.foundation_.destroy();
        });
        this.tabs_ = this.gatherTabs_(function (el) {
          return new _mdc.MDCTab(el);
        });
        this.layout();
        this.syncWithProps(this.props);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          activeTabIndex = _props.activeTabIndex,
          apiRef = _props.apiRef,
          rest = _objectWithoutProperties(_props, ['children', 'activeTabIndex', 'apiRef']);

      var root_ = this.foundationRefs.root_;


      return React.createElement(
        TabBarRoot,
        Object.assign({}, rest, { elementRef: root_ }),
        children,
        React.createElement(TabBarIndicator, null)
      );
    }
  }]);

  return TabBar;
}((0, _Base.withFoundation)({
  constructor: _mdc.MDCTabBar,
  adapter: {}
}));

Object.defineProperty(TabBar, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'TabBar'
});

/** The TabBar Scroll container */
var TabBarScroller = exports.TabBarScroller = function (_withFoundation2) {
  _inherits(TabBarScroller, _withFoundation2);

  function TabBarScroller() {
    _classCallCheck(this, TabBarScroller);

    return _possibleConstructorReturn(this, (TabBarScroller.__proto__ || Object.getPrototypeOf(TabBarScroller)).apply(this, arguments));
  }

  _createClass(TabBarScroller, [{
    key: 'initialize',
    value: function initialize() {
      var _this5 = this;

      _get(TabBarScroller.prototype.__proto__ || Object.getPrototypeOf(TabBarScroller.prototype), 'initialize', this).call(this, function () {
        return _this5.tabBarApi;
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.layout();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      var _props2 = this.props,
          children = _props2.children,
          indicatorForward = _props2.indicatorForward,
          indicatorBack = _props2.indicatorBack,
          rest = _objectWithoutProperties(_props2, ['children', 'indicatorForward', 'indicatorBack']);

      var root_ = this.foundationRefs.root_;

      var newChildren = recursiveMap(children, function (child) {
        if (child.type.displayName && child.type.displayName === 'TabBar') {
          return React.cloneElement(child, Object.assign({}, child.props, {
            isTabScroller: true,
            ref: function ref(tabBarApi) {
              return _this6.tabBarApi = tabBarApi;
            }
          }));
        }

        return child;
      });

      return React.createElement(
        TabBarScrollerRoot,
        Object.assign({}, rest, { elementRef: root_ }),
        React.createElement(
          TabBarScrollerIndicator,
          { back: true },
          React.createElement(TabBarScrollerIndicatorInner, { use: indicatorBack })
        ),
        React.createElement(
          TabBarScrollerScrollFrame,
          null,
          newChildren
        ),
        React.createElement(
          TabBarScrollerIndicator,
          { forward: true },
          React.createElement(TabBarScrollerIndicatorInner, { use: indicatorForward })
        )
      );
    }
  }]);

  return TabBarScroller;
}((0, _Base.withFoundation)({
  constructor: _mdc.MDCTabBarScroller,
  adapter: {}
}));

Object.defineProperty(TabBarScroller, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'TabBarScroller'
});
Object.defineProperty(TabBarScroller, 'defaultProps', {
  enumerable: true,
  writable: true,
  value: {
    indicatorForward: React.createElement(
      'svg',
      {
        style: { fill: 'currentColor' },
        height: '24',
        viewBox: '0 0 24 24',
        width: '24'
      },
      React.createElement('path', { d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' }),
      React.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
    ),
    indicatorBack: React.createElement(
      'svg',
      {
        style: { fill: 'currentColor' },
        height: '24',
        viewBox: '0 0 24 24',
        width: '24'
      },
      React.createElement('path', { d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' }),
      React.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
    )
  }
});


/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("@material/tabs/dist/mdc.tabs");

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = exports.TextFieldIcon = exports.TextFieldHelperText = exports.TextFieldTextarea = exports.TextFieldInput = exports.TextFieldRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _mdc = __webpack_require__(77);

var _Base = __webpack_require__(1);

var _Icon = __webpack_require__(3);

var _LineRipple = __webpack_require__(17);

var _FloatingLabel = __webpack_require__(16);

var _NotchedOutline = __webpack_require__(26);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextFieldRoot = exports.TextFieldRoot = (0, _Base.simpleTag)({
  displayName: 'TextFieldRoot',
  classNames: function classNames(props) {
    return ['mdc-text-field', 'mdc-text-field--upgraded', {
      'mdc-text-field--textarea': props.textarea,
      'mdc-text-field--fullwidth': props.fullwidth,
      'mdc-text-field--box': props.box,
      'mdc-text-field--outlined': props.outlined,
      'mdc-text-field--dense': props.dense,
      'mdc-text-field--invalid': props.invalid,
      'mdc-text-field--disabled': props.disabled,
      'mdc-text-field--with-leading-icon': props.withLeadingIcon,
      'mdc-text-field--with-trailing-icon': props.withTrailingIcon
    }];
  },
  consumeProps: ['textarea', 'box', 'fullwidth', 'outlined', 'dense', 'invalid', 'disabled', 'withLeadingIcon', 'withTrailingIcon']
});

var TextFieldInput = exports.TextFieldInput = (0, _Base.simpleTag)({
  displayName: 'TextFieldInput',
  tag: 'input',
  classNames: 'mdc-text-field__input',
  defaultProps: {
    type: 'text'
  }
});

var TextFieldTextarea = exports.TextFieldTextarea = (0, _Base.simpleTag)({
  displayName: 'TextFieldTextarea',
  tag: 'textarea',
  classNames: 'mdc-text-field__input'
});

/**
 * A help text component
 */
var TextFieldHelperText = exports.TextFieldHelperText = function (_simpleTag) {
  _inherits(TextFieldHelperText, _simpleTag);

  function TextFieldHelperText() {
    _classCallCheck(this, TextFieldHelperText);

    return _possibleConstructorReturn(this, (TextFieldHelperText.__proto__ || Object.getPrototypeOf(TextFieldHelperText)).apply(this, arguments));
  }

  _createClass(TextFieldHelperText, [{
    key: 'render',
    value: function render() {
      return _get(TextFieldHelperText.prototype.__proto__ || Object.getPrototypeOf(TextFieldHelperText.prototype), 'render', this).call(this);
    }
  }]);

  return TextFieldHelperText;
}((0, _Base.simpleTag)({
  displayName: 'TextFieldHelperText',
  tag: 'p',
  classNames: function classNames(props) {
    return ['mdc-text-field-helper-text', {
      'mdc-text-field-helper-text--persistent': props.persistent,
      'mdc-text-field-helper-text--validation-msg': props.validationMsg
    }];
  },
  consumeProps: ['persistent', 'validationMsg']
}));

/**
 * An Icon in a TextField
 */
var TextFieldIcon = exports.TextFieldIcon = function (_simpleTag2) {
  _inherits(TextFieldIcon, _simpleTag2);

  function TextFieldIcon() {
    _classCallCheck(this, TextFieldIcon);

    return _possibleConstructorReturn(this, (TextFieldIcon.__proto__ || Object.getPrototypeOf(TextFieldIcon)).apply(this, arguments));
  }

  _createClass(TextFieldIcon, [{
    key: 'render',
    value: function render() {
      return _get(TextFieldIcon.prototype.__proto__ || Object.getPrototypeOf(TextFieldIcon.prototype), 'render', this).call(this);
    }
  }]);

  return TextFieldIcon;
}((0, _Base.simpleTag)({
  tag: _Icon.Icon,
  classNames: 'mdc-text-field__icon'
}));

Object.defineProperty(TextFieldIcon, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'TextFieldIcon'
});

var TextField = exports.TextField = function (_withFoundation) {
  _inherits(TextField, _withFoundation);

  function TextField() {
    _classCallCheck(this, TextField);

    return _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).apply(this, arguments));
  }

  _createClass(TextField, [{
    key: 'syncWithProps',
    value: function syncWithProps(nextProps) {
      var _this4 = this;

      // invalid | valid
      (0, _Base.syncFoundationProp)(nextProps.invalid, !this.valid, function () {
        return _this4.valid = !nextProps.invalid;
      });

      // value
      (0, _Base.syncFoundationProp)(nextProps.value, !this.value, function () {
        _this4.value = nextProps.value;
      });

      // disabled
      (0, _Base.syncFoundationProp)(nextProps.disabled, this.disabled, function () {
        return _this4.disabled = !!nextProps.disabled;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$label = _props.label,
          label = _props$label === undefined ? '' : _props$label,
          className = _props.className,
          inputRef = _props.inputRef,
          box = _props.box,
          outlined = _props.outlined,
          fullwidth = _props.fullwidth,
          dense = _props.dense,
          invalid = _props.invalid,
          disabled = _props.disabled,
          withLeadingIcon = _props.withLeadingIcon,
          withTrailingIcon = _props.withTrailingIcon,
          children = _props.children,
          textarea = _props.textarea,
          _props$rootProps = _props.rootProps,
          rootProps = _props$rootProps === undefined ? {} : _props$rootProps,
          apiRef = _props.apiRef,
          rest = _objectWithoutProperties(_props, ['label', 'className', 'inputRef', 'box', 'outlined', 'fullwidth', 'dense', 'invalid', 'disabled', 'withLeadingIcon', 'withTrailingIcon', 'children', 'textarea', 'rootProps', 'apiRef']);

      var root_ = this.foundationRefs.root_;


      var tagProps = Object.assign({}, rest, {
        disabled: disabled,
        elementRef: inputRef,
        id: rest['id'] || (0, _Base.randomId)('text-field')
      });

      var tag = textarea ? React.createElement(TextFieldTextarea, tagProps) : React.createElement(TextFieldInput, tagProps);

      // handle leading and trailing icons
      var renderIcon = function renderIcon(iconNode) {
        if (iconNode && typeof iconNode === 'string' || iconNode.type && iconNode.type.displayName !== TextFieldIcon.displayName) {
          return React.createElement(TextFieldIcon, { use: iconNode });
        }

        return iconNode;
      };

      return React.createElement(
        TextFieldRoot,
        Object.assign({}, rootProps, {
          invalid: invalid,
          withLeadingIcon: !!withLeadingIcon,
          withTrailingIcon: !!withTrailingIcon,
          textarea: textarea,
          box: box,
          dense: dense,
          disabled: disabled,
          outlined: outlined,
          fullwidth: fullwidth,
          elementRef: root_,
          className: className
        }),
        !!withLeadingIcon && renderIcon(withLeadingIcon),
        children,
        tag,
        !!label && React.createElement(
          _FloatingLabel.FloatingLabel,
          { htmlFor: tagProps.id },
          label
        ),
        !!withTrailingIcon && renderIcon(withTrailingIcon),
        !!outlined && React.createElement(_NotchedOutline.NotchedOutline, null),
        !!outlined ? React.createElement(_NotchedOutline.NotchedOutlineIdle, null) : React.createElement(_LineRipple.LineRipple, null)
      );
    }
  }]);

  return TextField;
}((0, _Base.withFoundation)({
  constructor: _mdc.MDCTextField,
  adapter: {}
}));

Object.defineProperty(TextField, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'TextField'
});
exports.default = TextField;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("@material/textfield/dist/mdc.textfield");

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeProvider = exports.Theme = undefined;

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _Base = __webpack_require__(1);

var _toDashCase = __webpack_require__(22);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// prettier-ignore
var ThemeRoot = (0, _Base.simpleTag)({
  tag: 'span'
});

/**
 * A Theme Component.
 */
var Theme = function Theme(_ref) {
  var use = _ref.use,
      rest = _objectWithoutProperties(_ref, ['use']);

  return React.createElement(ThemeRoot, Object.assign({ theme: use }, rest));
};

exports.Theme = Theme;
Theme.displayName = 'Theme';

/** A ThemeProvider. This sets theme colors for its child tree. */
var ThemeProvider = function ThemeProvider(_ref2) {
  var options = _ref2.options,
      _ref2$style = _ref2.style,
      style = _ref2$style === undefined ? {} : _ref2$style,
      rest = _objectWithoutProperties(_ref2, ['options', 'style']);

  var processedColors = Object.keys(options).reduce(function (acc, key) {
    var val = options[key];
    acc['--mdc-theme-' + (0, _toDashCase.toDashCase)(key)] = val;
    return acc;
  }, {});

  // Casting styles to avoid TSX error
  //$FlowFixMe
  var tsxSafeStyle = style;

  var themeStyles = Object.assign({}, tsxSafeStyle, processedColors);
  return React.createElement('div', Object.assign({}, rest, { style: themeStyles }));
};

exports.ThemeProvider = ThemeProvider;
ThemeProvider.displayName = 'ThemeProvider';


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toolbar = exports.ToolbarIcon = exports.ToolbarMenuIcon = exports.ToolbarFixedAdjust = exports.ToolbarRow = exports.ToolbarSection = exports.ToolbarTitle = exports.ToolbarRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _mdc = __webpack_require__(80);

var _Icon = __webpack_require__(3);

var _Base = __webpack_require__(1);

var _withFoundation2 = __webpack_require__(4);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolbarRoot = exports.ToolbarRoot = (0, _Base.simpleTag)({
  tag: 'header',
  classNames: function classNames(props) {
    return ['mdc-toolbar', {
      'mdc-toolbar--fixed': props.fixed,
      'mdc-toolbar--waterfall': props.waterfall,
      'mdc-toolbar--fixed-lastrow-only': props.fixedLastrowOnly,
      'mdc-toolbar--flexible': props.flexible,
      'mdc-toolbar--flexible-default-behavior': props.flexibleDefaultBehavior
    }];
  },
  defaultProps: {
    fixed: false,
    waterfall: false,
    fixedLastrowOnly: false,
    flexible: false,
    flexibleDefaultBehavior: false
  },
  consumeProps: ['fixed', 'waterfall', 'fixedLastrowOnly', 'flexible', 'flexibleDefaultBehavior']
});

/** A Toolbar title  */
var ToolbarTitle = exports.ToolbarTitle = (0, _Base.simpleTag)({
  displayName: 'ToolbarTitle',
  classNames: 'mdc-toolbar__title'
});

var ToolbarSection = exports.ToolbarSection = function (_simpleTag) {
  _inherits(ToolbarSection, _simpleTag);

  function ToolbarSection() {
    _classCallCheck(this, ToolbarSection);

    return _possibleConstructorReturn(this, (ToolbarSection.__proto__ || Object.getPrototypeOf(ToolbarSection)).apply(this, arguments));
  }

  _createClass(ToolbarSection, [{
    key: 'render',
    value: function render() {
      return _get(ToolbarSection.prototype.__proto__ || Object.getPrototypeOf(ToolbarSection.prototype), 'render', this).call(this);
    }
  }]);

  return ToolbarSection;
}((0, _Base.simpleTag)({
  tag: 'section',
  classNames: function classNames(props) {
    return ['mdc-toolbar__section', {
      'mdc-toolbar__section--align-start': props.alignStart,
      'mdc-toolbar__section--align-end': props.alignEnd,
      'mdc-toolbar__section--shrink-to-fit': props.shrinkToFit
    }];
  },
  defaultProps: {
    alignStart: false,
    alignEnd: false,
    shrinkToFit: false
  },
  consumeProps: ['alignStart', 'alignEnd', 'shrinkToFit']
}));

/** A Toolbar row  */


Object.defineProperty(ToolbarSection, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'ToolbarSection'
});
var ToolbarRow = exports.ToolbarRow = (0, _Base.simpleTag)({
  displayName: 'ToolbarRow',
  classNames: 'mdc-toolbar__row'
});

/**
 * This component can be placed after a fixed Toolbar component to fill in the space.
 */
var ToolbarFixedAdjust = exports.ToolbarFixedAdjust = (0, _Base.simpleTag)({
  displayName: 'ToolbarFixedAdjust',
  classNames: 'mdc-toolbar-fixed-adjust'
});

/**
 * A Menu Icon For the Toolbar. This is an instance of the Icon component.
 */
var ToolbarMenuIcon = exports.ToolbarMenuIcon = (0, _Base.simpleTag)({
  displayName: 'ToolbarMenuIcon',
  tag: _Icon.Icon,
  classNames: 'mdc-toolbar__menu-icon'
});

/**
 * A standard Icon for toolbar actions. This is an instance of the Icon component.
 */
var ToolbarIcon = exports.ToolbarIcon = (0, _Base.simpleTag)({
  displayName: 'ToolbarIcon',
  tag: _Icon.Icon,
  classNames: 'mdc-toolbar__icon'
});

var Toolbar = exports.Toolbar = function (_withFoundation) {
  _inherits(Toolbar, _withFoundation);

  function Toolbar() {
    _classCallCheck(this, Toolbar);

    return _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).apply(this, arguments));
  }

  _createClass(Toolbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(Toolbar.prototype.__proto__ || Object.getPrototypeOf(Toolbar.prototype), 'componentDidMount', this).call(this);
      if (this.root_ && this.root_.nextSibling && (this.root_.nextSibling.getAttribute('class') || '').includes('mdc-toolbar-fixed-adjust')) {
        this.fixedAdjustElement = this.root_.nextSibling;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var rest = _objectWithoutProperties(this.props, []);

      var root_ = this.foundationRefs.root_;

      return React.createElement(ToolbarRoot, Object.assign({ elementRef: root_ }, rest));
    }
  }]);

  return Toolbar;
}((0, _withFoundation2.withFoundation)({
  constructor: _mdc.MDCToolbar,
  adapter: {}
}));

Object.defineProperty(Toolbar, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'Toolbar'
});


/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("@material/toolbar/dist/mdc.toolbar");

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Typography = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _Base = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line no-unused-vars


/**
 * The Typography Component
 */
var Typography = exports.Typography = function (_simpleTag) {
  _inherits(Typography, _simpleTag);

  function Typography() {
    _classCallCheck(this, Typography);

    return _possibleConstructorReturn(this, (Typography.__proto__ || Object.getPrototypeOf(Typography)).apply(this, arguments));
  }

  _createClass(Typography, [{
    key: 'render',
    value: function render() {
      return _get(Typography.prototype.__proto__ || Object.getPrototypeOf(Typography.prototype), 'render', this).call(this);
    }
  }]);

  return Typography;
}((0, _Base.simpleTag)({
  displayName: 'Typography',
  defaultProps: {
    use: undefined
  },
  tag: 'span',
  classNames: function classNames(props) {
    return [_defineProperty({}, 'mdc-typography--' + props.use, props.use)];
  },
  consumeProps: ['use']
}));

exports.default = Typography;


/***/ }),
/* 82 */
/***/ (function(module) {

module.exports = {"_args":[["rmwc@1.8.3","/Users/almog/Desktop/atomic-stats 3"]],"_from":"rmwc@1.8.3","_id":"rmwc@1.8.3","_inBundle":false,"_integrity":"sha512-TDJEJ6n4G2sSpjqc7hY+nHidBOTEtBABN9pnn6u0IU6+LXdBAiKqB5F03n0ivlMRDwoh5ld0pZCuGnxCFMBV/A==","_location":"/rmwc","_phantomChildren":{"loose-envify":"1.4.0","object-assign":"4.1.1"},"_requested":{"type":"version","registry":true,"raw":"rmwc@1.8.3","name":"rmwc","escapedName":"rmwc","rawSpec":"1.8.3","saveSpec":null,"fetchSpec":"1.8.3"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/rmwc/-/rmwc-1.8.3.tgz","_spec":"1.8.3","_where":"/Users/almog/Desktop/atomic-stats 3","author":{"name":"James Friedman"},"bugs":{"url":"https://github.com/jamesmfriedman/rmwc/issues","email":"me@jamesmfriedman.com"},"dependencies":{"classnames":"^2.2.5","hyperform":"^0.9.9","material-components-web":"0.37.x","mutation-observer":"^1.0.3","prop-types":"^15.6.1"},"description":"A thin React wrapper for Material Design (Web) Components","devDependencies":{"@storybook/addon-actions":"^3.3.15","@storybook/addon-knobs":"^3.3.15","@storybook/react":"^3.3.15","@types/classnames":"^2.2.4","@types/material-components-web":"^0.35.0","@types/prop-types":"^15.5.3","@types/react":"^16.4.1","@types/react-dom":"^16.0.6","babel-cli":"^6.26.0","babel-eslint":"^8.2.3","babel-preset-es2015":"^6.24.1","css-to-string-loader":"^0.1.3","enzyme":"^3.3.0","enzyme-adapter-react-15":"^1.0.5","enzyme-adapter-react-16":"^1.1.1","eslint":"^4.19.1","eslint-config-react-app":"^2.1.0","eslint-plugin-flowtype":"^2.46.3","eslint-plugin-import":"^2.11.0","eslint-plugin-jsx-a11y":"^5.1.1","eslint-plugin-react":"^7.7.0","flow-bin":"^0.74.0","generate-changelog":"^1.7.0","normalize.css":"^7.0.0","prettier-eslint":"^8.8.1","prismjs":"^1.9.0","react":"^16.2.0","react-app-rewired":"^1.5.2","react-docgen":"^2.21.0","react-dom":"^16.2.0","react-hot-loader":"^4.0.1","react-markdown-loader":"git+https://github.com/jamesmfriedman/react-markdown-loader.git#master","react-router-dom":"^4.3.1","react-scripts":"^1.1.4","storybook":"^1.0.0","typescript":"^2.9.2"},"homepage":"https://jamesmfriedman.github.io/rmwc/","jest":{"resolver":"./scripts/jest-resolver.js","collectCoverageFrom":["src/**/*.{js}","!src/**/*.flow.js","!src/**/*.story.js","!src/index.js","!src/rmwc.js","!src/Base/testPolyfill.js","!src/Base/utils/DocumentComponent.js","!src/Base/utils/story-with-state.js","!src/docs/*","!<rootDir>/node_modules/"]},"keywords":["rmwc","react","react-material","material-design","react-mdc","react-material-design"],"license":"MIT","main":"index.js","name":"rmwc","peerDependencies":{"react":"^15.x.x || ^16.x.x","react-dom":"^15.x.x || ^16.x.x"},"private":false,"repository":{"type":"git","url":"git+https://github.com/jamesmfriedman/rmwc.git"},"scripts":{"build":"npm run build:code && npm run build:lib && npm run build:docs","build:code":"node scripts/build-code.js","build:docs":"npm run docgen && react-app-rewired build && rm -R docs && mv build docs","build:lib":"node scripts/build-lib.js","changelog":"changelog","clean":"node scripts/clean.js","deploy:docs":"npm run build:docs && git add docs -f && git commit -m 'Deploying docs' && git push --force && npm run clean","docgen":"export NODE_ENV=development && react-docgen ./src --exclude=/\\.\\(story\\|docs\\|spec\\)\\.js/ --pretty --resolver ./scripts/docgen-resolver.js -o ./src/docs/docgen.json","flow":"flow","postpublish":"npm run clean","postversion":"git push && git push --tags","prepublishOnly":"npm run build","pretest":"node scripts/pretest.js","preversion":"npm test -- --coverage","start":"react-app-rewired start","storybook":"start-storybook -p 6006","test":"flow && npm run build:code && node scripts/test.js","test:coverage":"react-app-rewired test --env=jsdom --coverage","test:watch":"react-app-rewired test --env=jsdom","version":"npm run changelog && git add CHANGELOG.md && npm run build:lib && git add -A lib && npm run build && git add docs -f"},"types":"index.d.ts","version":"1.8.3"};

/***/ }),
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(92);


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return News; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _components_atomic_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30);
/* harmony import */ var rmwc_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var rmwc_List__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rmwc_List__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_rmwc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _node_modules_rmwc__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_rmwc__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_news_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93);
/* harmony import */ var _styles_news_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_news_scss__WEBPACK_IMPORTED_MODULE_7__);


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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_page__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          paddingLeft: "10px",
          paddingRight: "10px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_atomic_card__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
        className: "atomic-news",
        title: "News",
        titleSize: "headline3",
        titleColor: "var(--mdc-theme-primary)",
        outlineColor: "var(--mdc-theme-primary)",
        backgroundColor: "var(--drawer-color)",
        width: "calc(100% - 8px)",
        maxWidth: "1100px"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rmwc_List__WEBPACK_IMPORTED_MODULE_5__["List"], null, this.props.news.map(function (message, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtomicNewsTile, {
          key: i,
          image: message.image,
          title: message.title,
          description: message.description
        });
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var news;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                news = undefined;
                _context.next = 3;
                return node_fetch__WEBPACK_IMPORTED_MODULE_2___default()("https://atomic-api.herokuapp.com/news").then(function (response) {
                  return response.json();
                }).then(function (json) {
                  if ('error' in json) {//stats = {displayName: "Unknown"};
                  } else {
                    news = json;
                  }
                }).catch(function (ex) {//stats = {displayName: "Unknown"};
                });

              case 3:
                return _context.abrupt("return", {
                  news: news
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



var AtomicNewsTile =
/*#__PURE__*/
function (_Component2) {
  _inherits(AtomicNewsTile, _Component2);

  function AtomicNewsTile() {
    _classCallCheck(this, AtomicNewsTile);

    return _possibleConstructorReturn(this, (AtomicNewsTile.__proto__ || Object.getPrototypeOf(AtomicNewsTile)).apply(this, arguments));
  }

  _createClass(AtomicNewsTile, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: this.props.className ? this.props.className : "" + ' ' + "atomic-news-tile",
        style: {
          paddingTop: "25px",
          overflow: "hidden"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          display: "inline-block",
          verticalAlign: "top",
          maxHeight: "210px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: this.props.image
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          display: "inline-block",
          paddingTop: "20px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_node_modules_rmwc__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        style: {
          color: "var(--mdc-theme-primary)"
        },
        use: "headline3"
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_node_modules_rmwc__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        style: {
          position: "absolute",
          color: "white",
          paddingRight: "325px"
        },
        use: "headline4"
      }, this.props.description)));
    }
  }]);

  return AtomicNewsTile;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/***/ }),
/* 93 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);