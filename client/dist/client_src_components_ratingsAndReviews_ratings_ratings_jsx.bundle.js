"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkatelier"] = self["webpackChunkatelier"] || []).push([["client_src_components_ratingsAndReviews_ratings_ratings_jsx"],{

/***/ "./client/src/actions/ratingsAndReviews/changeFilters.js":
/*!***************************************************************!*\
  !*** ./client/src/actions/ratingsAndReviews/changeFilters.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst changeFilters = (filters) => ({\n  type: 'CHANGE_FILTERS',\n  filters,\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeFilters);\n\n\n//# sourceURL=webpack://atelier/./client/src/actions/ratingsAndReviews/changeFilters.js?");

/***/ }),

/***/ "./client/src/components/ratingsAndReviews/ratings/productBreakdown.jsx":
/*!******************************************************************************!*\
  !*** ./client/src/components/ratingsAndReviews/ratings/productBreakdown.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ratingsAndReviews.module.css */ \"./client/src/components/ratingsAndReviews/ratingsAndReviews.module.css\");\n/* harmony import */ var _productBreakdownBar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productBreakdownBar.jsx */ \"./client/src/components/ratingsAndReviews/ratings/productBreakdownBar.jsx\");\n/* eslint-disable react/prop-types */\n\n\n\n\n\nvar ProductBreakdown = function ProductBreakdown(_ref) {\n  var reviewMeta = _ref.reviewMeta;\n  var options = {\n    Size: ['Too small', '1⁄2 a size too small', 'Perfect', '1⁄2 a size too big', 'Too wide'],\n    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],\n    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'OK', 'Comfortable', 'Perfect'],\n    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],\n    Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],\n    Fit: ['Runs Tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"product-breakdown\"]\n  }, reviewMeta.characteristics && Object.keys(reviewMeta.characteristics).map(function (key) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_productBreakdownBar_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: key,\n      characteristic: key,\n      options: options[key],\n      point: reviewMeta.characteristics[key].value\n    });\n  }));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    reviewMeta: state.reviewMeta\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(ProductBreakdown));\n\n//# sourceURL=webpack://atelier/./client/src/components/ratingsAndReviews/ratings/productBreakdown.jsx?");

/***/ }),

/***/ "./client/src/components/ratingsAndReviews/ratings/productBreakdownBar.jsx":
/*!*********************************************************************************!*\
  !*** ./client/src/components/ratingsAndReviews/ratings/productBreakdownBar.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ratingsAndReviews.module.css */ \"./client/src/components/ratingsAndReviews/ratingsAndReviews.module.css\");\n/* eslint-disable react/prop-types */\n\n\n\n\nvar ProductBreakdownBar = function ProductBreakdownBar(_ref) {\n  var characteristic = _ref.characteristic,\n      options = _ref.options,\n      point = _ref.point;\n  var marginLeft = parseInt(point - 1, 10).toFixed(2) * 23;\n  var optionsToDisplay = [options[0], options[2], options[4]];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"product-breakdown-characteristic\"]\n  }, characteristic, \":\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"product-breakdown-container\"]\n  }, optionsToDisplay.map(function (option) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      key: option,\n      style: {\n        width: '95%',\n        height: '10px',\n        backgroundColor: '#dcdcdc'\n      },\n      className: _ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"product-breakdown-option-\".concat(options.indexOf(option))]\n    });\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"product-breakdown-indicator-0\"]\n  }, options[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"product-breakdown-indicator-1\"]\n  }, options[4]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n    icon: \"caret-down\",\n    size: \"2x\",\n    className: _ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"product-breakdown-caret-down\"],\n    style: {\n      marginLeft: \"\".concat(marginLeft, \"%\")\n    }\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductBreakdownBar);\n\n//# sourceURL=webpack://atelier/./client/src/components/ratingsAndReviews/ratings/productBreakdownBar.jsx?");

/***/ }),

/***/ "./client/src/components/ratingsAndReviews/ratings/ratings.jsx":
/*!*********************************************************************!*\
  !*** ./client/src/components/ratingsAndReviews/ratings/ratings.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _common_starRating_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/starRating.jsx */ \"./client/src/components/common/starRating.jsx\");\n/* harmony import */ var _starBreakdown_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./starBreakdown.jsx */ \"./client/src/components/ratingsAndReviews/ratings/starBreakdown.jsx\");\n/* harmony import */ var _productBreakdown_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productBreakdown.jsx */ \"./client/src/components/ratingsAndReviews/ratings/productBreakdown.jsx\");\n/* harmony import */ var _ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ratingsAndReviews.module.css */ \"./client/src/components/ratingsAndReviews/ratingsAndReviews.module.css\");\n/* eslint-disable react/prop-types */\n\n\n\n\n\n\n\nvar Ratings = function Ratings(_ref) {\n  var reviews = _ref.reviews,\n      reviewMeta = _ref.reviewMeta;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_5__[\"default\"][\"ratings-container\"]\n  }, reviews.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, \"No Reviews Available\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, reviewMeta.ratingScore && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_5__[\"default\"][\"rating-summary\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_5__[\"default\"][\"rating-score\"]\n  }, reviewMeta.ratingScore), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_starRating_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    rating: reviewMeta.ratingScore\n  })), reviewMeta.recommendationRate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_5__[\"default\"][\"rating-recommendation\"]\n  }, reviewMeta.recommendationRate, \"% of reviews recommend this product\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_starBreakdown_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_productBreakdown_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    reviews: state.reviews,\n    reviewMeta: state.reviewMeta\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(Ratings));\n\n//# sourceURL=webpack://atelier/./client/src/components/ratingsAndReviews/ratings/ratings.jsx?");

/***/ }),

/***/ "./client/src/components/ratingsAndReviews/ratings/starBreakdown.jsx":
/*!***************************************************************************!*\
  !*** ./client/src/components/ratingsAndReviews/ratings/starBreakdown.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ratingsAndReviews.module.css */ \"./client/src/components/ratingsAndReviews/ratingsAndReviews.module.css\");\n/* harmony import */ var _starBreakdownBar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./starBreakdownBar.jsx */ \"./client/src/components/ratingsAndReviews/ratings/starBreakdownBar.jsx\");\n/* harmony import */ var _actions_ratingsAndReviews_changeFilters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/ratingsAndReviews/changeFilters */ \"./client/src/actions/ratingsAndReviews/changeFilters.js\");\n/* harmony import */ var _actions_ratingsAndReviews_changeReviews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions/ratingsAndReviews/changeReviews */ \"./client/src/actions/ratingsAndReviews/changeReviews.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/* eslint-disable class-methods-use-this */\n\n/* eslint-disable react/prop-types */\n\n\n\n\n\n\n\nvar StarBreakdown = /*#__PURE__*/function (_React$Component) {\n  _inherits(StarBreakdown, _React$Component);\n\n  var _super = _createSuper(StarBreakdown);\n\n  function StarBreakdown(props) {\n    var _this;\n\n    _classCallCheck(this, StarBreakdown);\n\n    _this = _super.call(this, props);\n    _this.onFilter = _this.onFilter.bind(_assertThisInitialized(_this));\n    _this.onRemoveFilter = _this.onRemoveFilter.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(StarBreakdown, [{\n    key: \"onFilter\",\n    value: function onFilter(e) {\n      var rating = e.target.parentNode.className.split(' ')[1];\n\n      if (!['1', '2', '3', '4', '5'].includes(rating)) {\n        var _e$target$parentNode$ = e.target.parentNode.parentNode.className.split(' ');\n\n        var _e$target$parentNode$2 = _slicedToArray(_e$target$parentNode$, 2);\n\n        rating = _e$target$parentNode$2[1];\n      }\n\n      var filters = _toConsumableArray(this.props.filters);\n\n      if (!filters.includes(rating)) {\n        filters.push(rating);\n      } else {\n        filters.splice(filters.indexOf(rating), 1);\n      }\n\n      filters = filters.filter(function (filter) {\n        return filter;\n      });\n      var reviews;\n\n      if (filters.length === 0) {\n        reviews = this.props.reviews;\n      } else {\n        reviews = this.props.reviews.filter(function (review) {\n          return filters.includes(review.rating.toString());\n        });\n      }\n\n      var reviewsToLoad = this.props.loadedReviews.length > 2 ? this.props.loadedReviews.length : 2;\n      var loadedReviews = reviews.slice(0, reviewsToLoad);\n      var remainingReviews = reviews.filter(function (review) {\n        return !loadedReviews.includes(review);\n      });\n      this.props.handleFilterReview(loadedReviews, remainingReviews);\n      this.props.handleAddFilter(filters);\n    }\n  }, {\n    key: \"onRemoveFilter\",\n    value: function onRemoveFilter() {\n      this.props.handleAddFilter([]);\n      var reviewsToLoad = this.props.loadedReviews.length > 2 ? this.props.loadedReviews.length : 2;\n      var loadedReviews = this.props.reviews.slice(0, reviewsToLoad);\n      var remainingReviews = this.props.reviews.filter(function (review) {\n        return !loadedReviews.includes(review);\n      });\n      this.props.handleFilterReview(loadedReviews, remainingReviews);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          reviewMeta = _this$props.reviewMeta,\n          filters = _this$props.filters;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, reviewMeta.ratings && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: _ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"star-breakdown\"]\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"b\", null, \"Ratings Breakdown\")), filters.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        style: {\n          fontStyle: 'italic',\n          color: '#92a4b3'\n        }\n      }, \"Filters Applied: \", filters.map(function (filter) {\n        return \"\".concat(filter, \" stars \");\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        onClick: this.onRemoveFilter,\n        style: {\n          textDecoration: 'underline',\n          fontStyle: 'italic',\n          color: '#92a4b3',\n          cursor: 'pointer'\n        }\n      }, \"Remove Filters\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        \"data-testid\": \"5-star\",\n        onClick: this.onFilter,\n        className: \"\".concat(_ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"star-breakdown-div\"], \" 5\")\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        style: {\n          marginRight: '10px'\n        }\n      }, \"5 Stars\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_starBreakdownBar_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        barStyle: {\n          width: \"\".concat(reviewMeta.ratings['5'] / reviewMeta.totalReviews * 100 || 0, \"%\")\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, reviewMeta.ratings['5'] || 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        \"data-testid\": \"4-star\",\n        onClick: this.onFilter,\n        className: \"\".concat(_ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"star-breakdown-div\"], \" 4\")\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        style: {\n          marginRight: '10px'\n        }\n      }, \"4 Stars\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_starBreakdownBar_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        barStyle: {\n          width: \"\".concat(reviewMeta.ratings['4'] / reviewMeta.totalReviews * 100 || 0, \"%\")\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, reviewMeta.ratings['4'] || 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        \"data-testid\": \"3-star\",\n        onClick: this.onFilter,\n        className: \"\".concat(_ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"star-breakdown-div\"], \" 3\")\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        style: {\n          marginRight: '10px'\n        }\n      }, \"3 Stars\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_starBreakdownBar_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        barStyle: {\n          width: \"\".concat(reviewMeta.ratings['3'] / reviewMeta.totalReviews * 100 || 0, \"%\")\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, reviewMeta.ratings['3'] || 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        \"data-testid\": \"2-star\",\n        onClick: this.onFilter,\n        className: \"\".concat(_ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"star-breakdown-div\"], \" 2\")\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        style: {\n          marginRight: '10px'\n        }\n      }, \"2 Stars\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_starBreakdownBar_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        barStyle: {\n          width: \"\".concat(reviewMeta.ratings['2'] / reviewMeta.totalReviews * 100 || 0, \"%\")\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, reviewMeta.ratings['2'] || 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        \"data-testid\": \"1-star\",\n        onClick: this.onFilter,\n        className: \"\".concat(_ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"star-breakdown-div\"], \" 1\")\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        style: {\n          marginRight: '16px'\n        }\n      }, \"1 Star \", ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_starBreakdownBar_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        barStyle: {\n          width: \"\".concat(reviewMeta.ratings['1'] / reviewMeta.totalReviews * 100 || 0, \"%\")\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, reviewMeta.ratings['1'] || 0)))));\n    }\n  }]);\n\n  return StarBreakdown;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    reviews: state.reviews,\n    reviewMeta: state.reviewMeta,\n    filters: state.filters,\n    loadedReviews: state.loadedReviews,\n    remainingReviews: state.remainingReviews\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    handleAddFilter: function handleAddFilter(filters) {\n      dispatch((0,_actions_ratingsAndReviews_changeFilters__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(filters));\n    },\n    handleFilterReview: function handleFilterReview(loadedReviews, remainingReviews) {\n      dispatch((0,_actions_ratingsAndReviews_changeReviews__WEBPACK_IMPORTED_MODULE_5__.changeLoadedReviews)(loadedReviews));\n      dispatch((0,_actions_ratingsAndReviews_changeReviews__WEBPACK_IMPORTED_MODULE_5__.changeRemainingReviews)(remainingReviews));\n    }\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(StarBreakdown));\n\n//# sourceURL=webpack://atelier/./client/src/components/ratingsAndReviews/ratings/starBreakdown.jsx?");

/***/ }),

/***/ "./client/src/components/ratingsAndReviews/ratings/starBreakdownBar.jsx":
/*!******************************************************************************!*\
  !*** ./client/src/components/ratingsAndReviews/ratings/starBreakdownBar.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ratingsAndReviews.module.css */ \"./client/src/components/ratingsAndReviews/ratingsAndReviews.module.css\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* eslint-disable react/prop-types */\n\n\n\nvar StarBreakdownBar = function StarBreakdownBar(_ref) {\n  var _ref$barStyle = _ref.barStyle,\n      barStyle = _ref$barStyle === void 0 ? {\n    width: '50%'\n  } : _ref$barStyle;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"star-breakdown-bar-container\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"star-breakdown-bar\"],\n    style: _objectSpread(_objectSpread({}, barStyle), {}, {\n      height: '10px',\n      backgroundColor: '#b1d2b0ff',\n      borderRadius: '10px'\n    })\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarBreakdownBar);\n\n//# sourceURL=webpack://atelier/./client/src/components/ratingsAndReviews/ratings/starBreakdownBar.jsx?");

/***/ })

}]);