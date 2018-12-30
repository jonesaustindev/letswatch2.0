webpackHotUpdate("static\\development\\pages\\movie.js",{

/***/ "./components/MovieCard.js":
/*!*********************************!*\
  !*** ./components/MovieCard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "C:\\Users\\Other User\\Desktop\\fullStackProjects\\letswatch\\letswatch2.0\\frontend\\components\\MovieCard.js";

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
  var data = _taggedTemplateLiteral(["\n    query MOVIE_CARD_QUERY($id: ID) {\n        singleMovie(id: $id) {\n            id\n            poster_path\n            overview\n            release_date\n            title\n            vote_average\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Card = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "MovieCard__Card",
  componentId: "sc-1wc2p49-0"
})(["position:static;max-height:445px;width:300px;overflow:hidden;background:#000;box-shadow:", ";margin-top:20px;margin-bottom:20px;.movie-card .poster{position:relative;overflow:hidden;}.movie-card .poster:before{position:absolute;content:'';bottom:-300px;left:0;width:100%;height:100%;background:linear-gradient(0deg,#000 40%,transparent);transition:0.5s;z-index:1;}.movie-card:hover .poster:before{bottom:0;}.movie-card .poster img{width:100%;transition:0.5s;}.movie-card:hover .poster img{filter:blur(2px);transform:translateY(-40px);}.movie-details{position:absolute;padding:20px;width:100%;height:100%;bottom:-450px;left:0;box-sizing:border-box;transition:0.7s;z-index:2;color:#f7f7f7;}.movie-card:hover .movie-details{bottom:0;}.movie-details h3{margin:0;padding:0;padding-bottom:5px;font-size:1.2rem;font-weight:700;}.movie-details h5{font-size:1.1rem;}.movie-details h6{font-size:1rem;}.movie-card p{font-size:0.9rem;}.movie-card-overview{padding-top:18px;}.movie-card-overview p{margin-bottom:2px;}.view-more{text-decoration:none;color:#f7f7f7;}.view-more:hover{color:#f7f7f7;}"], function (props) {
  return props.theme.boxShadow;
});
var MOVIE_CARD_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());

var MovieCard =
/*#__PURE__*/
function (_Component) {
  _inherits(MovieCard, _Component);

  function MovieCard() {
    _classCallCheck(this, MovieCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(MovieCard).apply(this, arguments));
  }

  _createClass(MovieCard, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: MOVIE_CARD_QUERY,
        variables: {
          id: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, function (_ref) {
        var error = _ref.error,
            loading = _ref.loading,
            data = _ref.data;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, "Loading...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, "Error: ", error);
        var movie = data.singleMovie;
        var posterUrl = "https://image.tmdb.org/t/p/original".concat(movie.poster_path);
        var overview = movie.overview.substring(0, 100) + '...';
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "movie-card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "poster",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          alt: "movie-poster",
          src: posterUrl,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "movie-details",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          className: "card-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        }, movie.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
          className: "card-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, "User Rating ", movie.vote_average * 10, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
          className: "card-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }, movie.release_date.slice(0, 4))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "movie-card-overview",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, overview)))));
      });
    }
  }]);

  return MovieCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MovieCard);

/***/ })

})
//# sourceMappingURL=movie.js.102ca9af53b39f06f644.hot-update.js.map