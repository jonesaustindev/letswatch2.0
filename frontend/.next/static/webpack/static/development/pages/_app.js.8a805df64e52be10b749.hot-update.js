webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Likes.js":
/*!*****************************!*\
  !*** ./components/Likes.js ***!
  \*****************************/
/*! exports provided: default, USER_LIKES_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LIKES_QUERY", function() { return USER_LIKES_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_PleaseSignin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PleaseSignin */ "./components/PleaseSignin.js");
/* harmony import */ var _MovieCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MovieCard */ "./components/MovieCard.js");
var _jsxFileName = "C:\\Users\\Other User\\Desktop\\fullStackProjects\\letswatch\\letswatch2.0\\frontend\\components\\Likes.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    query USER_LIKES_QUERY {\n        likeListItems {\n            id\n            like\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var USER_LIKES_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());
var LikesContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Likes__LikesContainer",
  componentId: "sc-16r3n2g-0"
})(["max-width:", ";margin:auto;h3{color:", ";}.actor-grid{display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));padding:20px;}"], function (props) {
  return props.theme.maxWidth;
}, function (props) {
  return props.theme.mainColor;
});

var Likes =
/*#__PURE__*/
function (_Component) {
  _inherits(Likes, _Component);

  function Likes() {
    _classCallCheck(this, Likes);

    return _possibleConstructorReturn(this, _getPrototypeOf(Likes).apply(this, arguments));
  }

  _createClass(Likes, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PleaseSignin__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: USER_LIKES_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            loading = _ref.loading,
            error = _ref.error;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, "Loading...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, "Error: ", error.message);
        var likedMovies = data.likeListItems;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LikesContainer, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, "Your Liked Movies"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "actor-grid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, likedMovies.map(function (movie, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MovieCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
            key: index,
            id: movie.like,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          });
        }))));
      })));
    }
  }]);

  return Likes;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Likes);


/***/ })

})
//# sourceMappingURL=_app.js.8a805df64e52be10b749.hot-update.js.map