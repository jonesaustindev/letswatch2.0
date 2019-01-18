webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Other User\\Desktop\\fullStackProjects\\letswatch\\letswatch2.0\\frontend\\components\\ErrorMessage.js";



var ErrorStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ErrorMessage__ErrorStyle",
  componentId: "sc-1g0la7n-0"
})(["padding:1.5rem;margin:2rem 0;border:1px solid black;border-left:4px solid red;"]);

var ShowError = function ShowError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.results.errors.map(function (err, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ErrorStyle, {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        "data-test": "graphql-error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Oops!"), err.message.replace('GraphQL error: ', '')));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ErrorStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    "data-test": "graphql-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Oops!"), error.message.replace('GraphQL error: ', '')));
};

ShowError.defaultProps = {
  error: {}
};
ShowError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (ShowError);

/***/ })

})
//# sourceMappingURL=_app.js.1a1beb0ea17db0425c67.hot-update.js.map