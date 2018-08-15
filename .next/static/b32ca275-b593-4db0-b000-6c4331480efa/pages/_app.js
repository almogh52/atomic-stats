module.exports=__NEXT_REGISTER_PAGE("/_app",function(){return{page:(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{101:function(e,t,r){e.exports=r(417)},415:function(e,t,r){e.exports=r(416)},416:function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return y});var n=r(5),o=r.n(n),u=r(101),a=r.n(u),i=r(0),c=r.n(i),l=r(139);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&h(e.prototype,t),r&&h(e,r),e}var y=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state={},r.props&&r.props.user&&(r.state={user:r.props.user}),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a),d(t,null,[{key:"getInitialProps",value:function(){var e=function(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var u=e.apply(t,r);function a(e,t){try{var r=u[e](t),a=r.value}catch(e){return void o(e)}r.done?n(a):Promise.resolve(a).then(i,c)}function i(e){a("next",e)}function c(e){a("throw",e)}i()})}}(o.a.mark(function e(t){var r,n,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.Component,n=t.ctx,u={},!r.getInitialProps){e.next=6;break}return e.next=5,r.getInitialProps(n);case 5:u=e.sent;case 6:if(!n.req||!n.req.user){e.next=10;break}return e.abrupt("return",{pageProps:u,user:n.req.user});case 10:return e.abrupt("return",{pageProps:u});case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),d(t,[{key:"render",value:function(){var e=this.props,t=e.Component,r=e.pageProps;return r&&r.noLayout?c.a.createElement(u.Container,null,c.a.createElement(t,p({user:this.state.user},r))):c.a.createElement(u.Container,null,c.a.createElement(l.a,{user:this.state.user},c.a.createElement(t,p({user:this.state.user},r))))}}]),t}()},417:function(e,t,r){"use strict";var n=r(37),o=r(13);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=_,t.Container=t.default=void 0;var u=o(r(5)),a=o(r(82)),i=o(r(418)),c=o(r(56)),l=o(r(42)),s=o(r(18)),p=o(r(19)),f=o(r(43)),h=o(r(44)),d=n(r(0)),y=o(r(8)),v=o(r(164)),b=r(41),m=r(63),g=function(e){function t(){return(0,s.default)(this,t),(0,f.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,p.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,m.makePublicRouterInstance)(this.props.router),_containerProps:(0,c.default)({},this.props)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,r=e.Component,n=e.pageProps,o=_(t);return d.default.createElement(P,null,d.default.createElement(r,(0,i.default)({},n,{url:o})))}}],[{key:"getInitialProps",value:function(){var e=(0,a.default)(u.default.mark(function e(t){var r,n,o;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.Component,t.router,n=t.ctx,e.next=3,(0,b.loadGetInitialProps)(r,n);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(d.Component);t.default=g,Object.defineProperty(g,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"App"}),Object.defineProperty(g,"childContextTypes",{configurable:!0,enumerable:!0,writable:!0,value:{_containerProps:y.default.any,headManager:y.default.object,router:y.default.object}});var P=function(e){function t(){return(0,s.default)(this,t),(0,f.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=this.props.hash;if(e){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"shouldComponentUpdate",value:function(e){return!(0,v.default)(this.props,e)}},{key:"render",value:function(){var e=this.props.children;return d.default.createElement(d.default.Fragment,null,e)}}]),t}(d.Component);t.Container=P,Object.defineProperty(P,"contextTypes",{configurable:!0,enumerable:!0,writable:!0,value:{_containerProps:y.default.any}});var w=(0,b.execOnce)(function(){0});function _(e){var t=e.pathname,r=e.asPath,n=e.query;return{get query(){return w(),n},get pathname(){return w(),t},get asPath(){return w(),r},back:function(){w(),e.back()},push:function(t,r){return w(),e.push(t,r)},pushTo:function(t,r){w();var n=r?t:null,o=r||t;return e.push(n,o)},replace:function(t,r){return w(),e.replace(t,r)},replaceTo:function(t,r){w();var n=r?t:null,o=r||t;return e.replace(n,o)}}}},418:function(e,t,r){var n=r(127);function o(){return e.exports=o=n||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}e.exports=o}},[[415,1,0,2]]]).default}});