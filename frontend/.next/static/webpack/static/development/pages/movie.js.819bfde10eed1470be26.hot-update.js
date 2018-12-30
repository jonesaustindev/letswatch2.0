webpackHotUpdate("static\\development\\pages\\movie.js",{

/***/ "./components/AddToLikes.js":
/*!**********************************!*\
  !*** ./components/AddToLikes.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Likes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Likes */ "./components/Likes.js");
var _jsxFileName = "C:\\Users\\Other User\\Desktop\\fullStackProjects\\letswatch\\letswatch2.0\\frontend\\components\\AddToLikes.js";

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
  var data = _taggedTemplateLiteral(["\n    mutation addToLikes($like: String!) {\n        addToLikes(like: $like) {\n            id\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var LikedBtn = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "AddToLikes__LikedBtn",
  componentId: "sc-1ubppgj-0"
})(["color:red;"]);
var NotLikedBtn = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "AddToLikes__NotLikedBtn",
  componentId: "sc-1ubppgj-1"
})(["color:blue;"]);
var ADD_TO_LIKES_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var AddToLikes =
/*#__PURE__*/
function (_Component) {
  _inherits(AddToLikes, _Component);

  function AddToLikes() {
    _classCallCheck(this, AddToLikes);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddToLikes).apply(this, arguments));
  }

  _createClass(AddToLikes, [{
    key: "render",
    value: function render() {
      var id = this.props.id;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: ADD_TO_LIKES_MUTATION,
        variables: {
          like: id
        },
        refetchQueries: [{
          query: _Likes__WEBPACK_IMPORTED_MODULE_4__["USER_LIKES_QUERY"]
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, function (addToLikes) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
          query: _Likes__WEBPACK_IMPORTED_MODULE_4__["USER_LIKES_QUERY"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, function (_ref) {
          var data = _ref.data,
              loading = _ref.loading,
              error = _ref.error;
          if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          }, "Loading...");
          if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          }, "Error: ", error.message);
          var movieId = id.toString();
          var currentUserLikes = data.likeListItems.map(function (movie) {
            return movie.like;
          });
          var checkedLikes = currentUserLikes.includes(movieId);
          console.log(movieId);
          console.log(currentUserLikes);
          console.log(checkedLikes);

          if (checkedLikes == false) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NotLikedBtn, {
              onClick: addToLikes,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              },
              __self: this
            }, "Like");
          }

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LikedBtn, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, "Like");
        });
      });
    }
  }]);

  return AddToLikes;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AddToLikes);

/***/ })

})
//# sourceMappingURL=movie.js.819bfde10eed1470be26.hot-update.js.map