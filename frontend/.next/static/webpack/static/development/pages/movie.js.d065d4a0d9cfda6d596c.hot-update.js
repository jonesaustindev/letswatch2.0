webpackHotUpdate("static\\development\\pages\\movie.js",{

/***/ "./components/MoviePage.js":
/*!*********************************!*\
  !*** ./components/MoviePage.js ***!
  \*********************************/
/*! exports provided: default, SINGLE_MOVIE_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_MOVIE_QUERY", function() { return SINGLE_MOVIE_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _CreateLike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreateLike */ "./components/CreateLike.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _components_PleaseSignin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PleaseSignin */ "./components/PleaseSignin.js");
/* harmony import */ var _components_AddToLikes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AddToLikes */ "./components/AddToLikes.js");
var _jsxFileName = "C:\\Users\\Other User\\Desktop\\fullStackProjects\\letswatch\\letswatch2.0\\frontend\\components\\MoviePage.js";

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
  var data = _taggedTemplateLiteral(["\n    query SINGLE_MOVIE_QUERY($id: ID) {\n        singleMovie(id: $id) {\n            id\n            poster_path\n            backdrop_path\n            overview\n            release_date\n            runtime\n            title\n            vote_average\n            credits {\n                cast {\n                    name\n                }\n            }\n            videos {\n                results {\n                    name\n                    type\n                }\n            }\n            images {\n                backdrops {\n                    file_path\n                }\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var SINGLE_MOVIE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var MoviePageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "MoviePage__MoviePageContainer",
  componentId: "sc-8zwduz-0"
})(["margin:0;padding:0;"]);
var MovieHeader = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "MoviePage__MovieHeader",
  componentId: "sc-8zwduz-1"
})(["color:white;h3{margin:0;padding-top:15px;}.movie-content{margin:auto;max-width:", ";}"], function (props) {
  return props.theme.maxWidth;
});

var MoviePage =
/*#__PURE__*/
function (_Component) {
  _inherits(MoviePage, _Component);

  function MoviePage() {
    _classCallCheck(this, MoviePage);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoviePage).apply(this, arguments));
  }

  _createClass(MoviePage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: SINGLE_MOVIE_QUERY,
        variables: {
          id: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, function (_ref) {
        var error = _ref.error,
            loading = _ref.loading,
            data = _ref.data;
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, "Error!");
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, "Loading...");
        var movie = data.singleMovie;
        var backgroundUrl = "https://image.tmdb.org/t/p/original".concat(movie.backdrop_path);
        var backgroundStyle = {
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('".concat(backgroundUrl, "'"),
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: '750px'
        };
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MoviePageContainer, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, function (_ref2) {
          var me = _ref2.data.me;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MovieHeader, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: backgroundStyle,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "header-content",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            },
            __self: this
          }, movie.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            },
            __self: this
          }, movie.release_date.slice(0, 4)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "movie-content",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }, "User Rating ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }, movie.vote_average * 10, "%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            },
            __self: this
          }, movie.runtime, " runtime"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          }, me && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AddToLikes__WEBPACK_IMPORTED_MODULE_7__["default"], {
            id: movie.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            },
            __self: this
          })), !me && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            },
            __self: this
          }, "Like"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            },
            __self: this
          }, movie.overview), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            },
            __self: this
          }, movie.poster_path, " poster path"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            },
            __self: this
          }, movie.backdrop_path, " backdrop path"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113
            },
            __self: this
          }, movie.credits.cast.slice(0, 6).map(function (actor, index) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
              key: index,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              },
              __self: this
            }, actor.name);
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 119
            },
            __self: this
          }, movie.videos.results.map(function (video, index) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
              key: index,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 121
              },
              __self: this
            }, video.name);
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 125
            },
            __self: this
          }, movie.images.backdrops.map(function (image, index) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
              key: index,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 127
              },
              __self: this
            }, image.file_path);
          })));
        }));
      });
    }
  }]);

  return MoviePage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MoviePage);


/***/ })

})
//# sourceMappingURL=movie.js.d065d4a0d9cfda6d596c.hot-update.js.map