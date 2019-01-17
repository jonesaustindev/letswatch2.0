webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./containers/HomeContainer.js":
/*!*************************************!*\
  !*** ./containers/HomeContainer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_NowPlaying__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NowPlaying */ "./components/NowPlaying.js");
/* harmony import */ var _components_Popular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Popular */ "./components/Popular.js");
var _jsxFileName = "C:\\Users\\Other User\\Desktop\\fullStackProjects\\letswatch\\letswatch2.0\\frontend\\containers\\HomeContainer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "HomeContainer__Container",
  componentId: "sc-1xhmur5-0"
})(["max-width:", ";margin:auto;margin-top:100px;padding:10px;padding-bottom:100px;color:", ";.popular{margin-top:140px;}h3{margin-bottom:15px;}.popular h3{margin-bottom:15px;padding:0;}"], function (props) {
  return props.theme.maxWidth;
}, function (props) {
  return props.theme.mainColor;
});
var About = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "HomeContainer__About",
  componentId: "sc-1xhmur5-1"
})(["padding-top:100px;padding-bottom:100px;color:", ";background-color:", ";text-align:center;h5{font-size:1.9rem;}"], function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.mainColor;
});

var HomeContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(HomeContainer, _Component);

  function HomeContainer() {
    _classCallCheck(this, HomeContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(HomeContainer).apply(this, arguments));
  }

  _createClass(HomeContainer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Top Movies"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NowPlaying__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "popular",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Popular Titles"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Popular__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(About, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Join Today!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Create your Let's Watch account today. You will be able to keep track of all of your favorite movies in one place!")));
    }
  }]);

  return HomeContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HomeContainer);

/***/ })

})
//# sourceMappingURL=index.js.430aaf741de32096b774.hot-update.js.map