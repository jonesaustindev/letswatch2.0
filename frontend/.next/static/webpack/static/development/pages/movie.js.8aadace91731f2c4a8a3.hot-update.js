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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-youtube */ "./node_modules/react-youtube/es/YouTube.js");
/* harmony import */ var _CreateLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CreateLike */ "./components/CreateLike.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _PleaseSignin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PleaseSignin */ "./components/PleaseSignin.js");
/* harmony import */ var _AddToLikes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AddToLikes */ "./components/AddToLikes.js");
/* harmony import */ var _ActorCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ActorCard */ "./components/ActorCard.js");
/* harmony import */ var _MovieImage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MovieImage */ "./components/MovieImage.js");
/* harmony import */ var _MovieVideos__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MovieVideos */ "./components/MovieVideos.js");
var _jsxFileName = "C:\\Users\\Other User\\Desktop\\fullStackProjects\\letswatch\\letswatch2.0\\frontend\\components\\MoviePage.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    query SINGLE_MOVIE_QUERY($id: ID) {\n        singleMovie(id: $id) {\n            id\n            poster_path\n            backdrop_path\n            overview\n            release_date\n            runtime\n            title\n            vote_average\n            credits {\n                cast {\n                    name\n                    character\n                    profile_path\n                }\n            }\n            videos {\n                results {\n                    name\n                    type\n                    key\n                }\n            }\n            images {\n                backdrops {\n                    file_path\n                }\n            }\n        }\n    }\n"]);

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
})(["position:relative;color:white;p,h3,h4,h5,h6{margin:0;padding:0;}h3{font-size:8vmin;line-height:1.2;margin-bottom:60px;}h4{font-size:1.3rem;}p{font-size:1rem;padding-top:1em;color:", ";}.movie-content{margin:auto;max-width:", ";padding:0.8em;}.overview-container{margin-top:100px;}.overview-container p{line-height:1.5rem;font-size:1.3rem;}.video-player{width:200px;}.like-button{position:absolute;bottom:0;right:0;margin-right:25px;margin-bottom:10px;padding:1.5em;}.unliked{color:white;a:hover{cursor:pointer;}}@media(max-width:", "){.release-date{margin-bottom:0;padding-bottom:0;}.full-overview{font-size:0.3rem;}.like-button{left:0;}}@media(min-width:", "){.short-overview{display:none;}}"], function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.maxWidth;
}, function (props) {
  return props.theme.smallBreak;
}, function (props) {
  return props.theme.smallBreak;
});
var MovieBody = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "MoviePage__MovieBody",
  componentId: "sc-8zwduz-2"
})(["background:white;"]);
var ActorContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "MoviePage__ActorContainer",
  componentId: "sc-8zwduz-3"
})(["max-width:", ";margin:auto;.actor-grid{display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));padding:20px;}h3{font-size:6.5vmin;text-align:center;padding-top:50px;margin:0;color:", ";}"], function (props) {
  return props.theme.maxWidth;
}, function (props) {
  return props.theme.mainColor;
});
var HR = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].hr.withConfig({
  displayName: "MoviePage__HR",
  componentId: "sc-8zwduz-4"
})(["border:0;height:1px;background-image:linear-gradient(to right,rgba(0,0,0,0),rgba(0,0,0,0.75),rgba(0,0,0,0));margin-top:80px;margin-bottom:80px;"]);
var ImagesContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "MoviePage__ImagesContainer",
  componentId: "sc-8zwduz-5"
})(["max-width:", ";margin:auto;.images-grid{display:grid;grid-gap:5px;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));padding:20px;}margin-bottom:50px;"], function (props) {
  return props.theme.maxWidth;
});
var VideosContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "MoviePage__VideosContainer",
  componentId: "sc-8zwduz-6"
})(["max-width:640px;margin:auto;.video-grid{@media(max-width:", "){grid-template-columns:repeat(auto-fill,minmax(320px,1fr));}display:grid;grid-gap:10px;padding:10px;}"], function (props) {
  return props.theme.smallBreak;
}); // const ActorGrid = styled.div`
//     display: grid;
//     grid-gap: 10px;
//     grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//     padding: 20px;
// `;

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
          lineNumber: 187
        },
        __self: this
      }, function (_ref) {
        var error = _ref.error,
            loading = _ref.loading,
            data = _ref.data;
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, "Error!");
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }, "Loading...");
        var movie = data.singleMovie;
        var backgroundUrl = "https://image.tmdb.org/t/p/original".concat(movie.backdrop_path);
        var posterUrl = "https://image.tmdb.org/t/p/original".concat(movie.poster_path);
        var backgroundStyle = {
          backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('".concat(backgroundUrl, "'"),
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: '750px'
        };
        var opts = {
          width: 'auto'
        };

        var _movie$videos$results = _slicedToArray(movie.videos.results, 1),
            videos = _movie$videos$results[0];

        var trailer = videos.type.includes('Trailer');
        console.log(trailer);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MoviePageContainer, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }, function (_ref2) {
          var me = _ref2.data.me;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 217
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MovieHeader, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 218
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: backgroundStyle,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 219
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "header-content",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 220
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "movie-content",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 221
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 222
            },
            __self: this
          }, movie.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 223
            },
            __self: this
          }, "User Rating ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 223
            },
            __self: this
          }, movie.vote_average * 10, "%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 224
            },
            __self: this
          }, movie.runtime, " minutes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "release-date",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 225
            },
            __self: this
          }, movie.release_date.slice(0, 4)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "overview-container",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 226
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "full-overview",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 227
            },
            __self: this
          }, movie.overview)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "video-player",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 232
            },
            __self: this
          }, movie.videos.results.map(function (video, index) {// if (video.type.includes('Trailer')) {
            //     video.slice(0, 1).map((video, index) => (
            //         <YouTube
            //             videoId={video.key}
            //             opts={opts}
            //             key={index}
            //         />
            //     ))
            // }
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "like-button",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 246
            },
            __self: this
          }, me && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 249
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddToLikes__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: movie.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 250
            },
            __self: this
          })), !me && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 256
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "signin",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 257
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            className: "unliked",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 258
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            class: "far fa-heart",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 258
            },
            __self: this
          }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MovieBody, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 265
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ActorContainer, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 266
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 267
            },
            __self: this
          }, "Top Billed Cast"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "actor-grid",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 268
            },
            __self: this
          }, movie.credits.cast.slice(0, 4).map(function (actor, index) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActorCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
              key: index,
              actor: actor,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 270
              },
              __self: this
            });
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HR, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 275
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImagesContainer, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 277
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "images-grid",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 278
            },
            __self: this
          }, movie.images.backdrops.slice(0, 10).map(function (image, index) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MovieImage__WEBPACK_IMPORTED_MODULE_11__["default"], {
              key: index,
              image: image,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 280
              },
              __self: this
            });
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VideosContainer, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 285
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "video-grid",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 286
            },
            __self: this
          }, movie.videos.results.slice(0, 1).map(function (video, index) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MovieVideos__WEBPACK_IMPORTED_MODULE_12__["default"], {
              key: index,
              video: video,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 288
              },
              __self: this
            });
          })))));
        }));
      });
    }
  }]);

  return MoviePage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MoviePage);


/***/ })

})
//# sourceMappingURL=movie.js.8aadace91731f2c4a8a3.hot-update.js.map