"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkatelier"] = self["webpackChunkatelier"] || []).push([["client_src_components_productOverview_ImageGallery_jsx"],{

/***/ "./client/src/components/productOverview/ImageGallery.jsx":
/*!****************************************************************!*\
  !*** ./client/src/components/productOverview/ImageGallery.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _ImageNavButton_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageNavButton.jsx */ \"./client/src/components/productOverview/ImageNavButton.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/* eslint-disable react/prop-types */\n\n\n\n\nvar ImageGallery = /*#__PURE__*/function (_React$Component) {\n  _inherits(ImageGallery, _React$Component);\n\n  var _super = _createSuper(ImageGallery);\n\n  function ImageGallery(props) {\n    var _this;\n\n    _classCallCheck(this, ImageGallery);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      main: 0,\n      thumb: 0\n    };\n    _this.handleImageClick = _this.handleImageClick.bind(_assertThisInitialized(_this));\n    _this.handleNavClick = _this.handleNavClick.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(ImageGallery, [{\n    key: \"handleImageClick\",\n    value: function handleImageClick(index) {\n      var main = index + this.state.thumb;\n      this.setState({\n        main: main\n      });\n    }\n  }, {\n    key: \"handleNavClick\",\n    value: function handleNavClick(direction) {\n      if (direction === 'up') {\n        var thumb = this.state.thumb - 1;\n        this.setState({\n          thumb: thumb\n        });\n      } else if (direction === 'right') {\n        var main = this.state.main + 1;\n        this.setState({\n          main: main\n        });\n      } else if (direction === 'down') {\n        var _thumb = this.state.thumb + 1;\n\n        this.setState({\n          thumb: _thumb\n        });\n      } else if (direction === 'left') {\n        var _main = this.state.main - 1;\n\n        this.setState({\n          main: _main\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return !this.props.styles.length || !Object.keys(this.props.currentStyle).length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"figure\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n        className: \"gallery-img\",\n        alt: \"Loading gallery...\"\n      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"gallery\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"figure\", {\n        className: \"gallery-main\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n        src: this.props.currentStyle.photos[this.state.main].url,\n        className: \"gallery-img\",\n        \"data-testid\": \"gallery-img\",\n        alt: \"Main image\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"figure\", {\n        className: \"gallery-thumb-0\",\n        \"data-testid\": \"gallery-thumb-0\",\n        onClick: function onClick() {\n          return _this2.handleImageClick(0);\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n        src: this.props.currentStyle.photos[this.state.thumb].thumbnail_url,\n        className: \"gallery-thumb\",\n        \"data-testid\": \"gallery-thumb-img-0\",\n        alt: \"Thumbnail\"\n      })), this.props.currentStyle.photos[1] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"figure\", {\n        className: \"gallery-thumb-1\",\n        \"data-testid\": \"gallery-thumb-1\",\n        onClick: function onClick() {\n          return _this2.handleImageClick(1);\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n        src: this.props.currentStyle.photos[this.state.thumb + 1].thumbnail_url,\n        className: \"gallery-thumb\",\n        alt: \"Thumbnail\"\n      })), this.props.currentStyle.photos[2] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"figure\", {\n        className: \"gallery-thumb-2\",\n        \"data-testid\": \"gallery-thumb-2\",\n        onClick: function onClick() {\n          return _this2.handleImageClick(2);\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n        src: this.props.currentStyle.photos[this.state.thumb + 2].thumbnail_url,\n        className: \"gallery-thumb\",\n        alt: \"Thumbnail\"\n      })), this.props.currentStyle.photos[3] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"figure\", {\n        className: \"gallery-thumb-3\",\n        \"data-testid\": \"gallery-thumb-3\",\n        onClick: function onClick() {\n          return _this2.handleImageClick(3);\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n        src: this.props.currentStyle.photos[this.state.thumb + 3].thumbnail_url,\n        className: \"gallery-thumb\",\n        alt: \"Thumbnail\"\n      })), this.props.currentStyle.photos[4] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"figure\", {\n        className: \"gallery-thumb-4\",\n        \"data-testid\": \"gallery-thumb-4\",\n        onClick: function onClick() {\n          return _this2.handleImageClick(4);\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n        src: this.props.currentStyle.photos[this.state.thumb + 4].thumbnail_url,\n        className: \"gallery-thumb\",\n        alt: \"Thumbnail\"\n      })), this.props.currentStyle && this.state.main < this.props.currentStyle.photos.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"figure\", {\n        className: \"gallery-nav-right\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ImageNavButton_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        direction: \"right\",\n        icon: 'arrow-right',\n        onClick: this.handleNavClick\n      })), this.props.styles.length > 0 && this.state.main > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"figure\", {\n        className: \"gallery-nav-left\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ImageNavButton_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        direction: 'left',\n        icon: 'arrow-left',\n        onClick: this.handleNavClick\n      })), this.props.styles.length > 0 && this.state.thumb > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"figure\", {\n        className: \"gallery-nav-up\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ImageNavButton_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        direction: 'up',\n        icon: 'angle-up',\n        onClick: this.handleNavClick\n      })), this.props.currentStyle && this.state.thumb + 4 < this.props.currentStyle.photos.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"figure\", {\n        className: \"gallery-nav-down\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ImageNavButton_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        direction: 'down',\n        icon: 'angle-down',\n        onClick: this.handleNavClick\n      })));\n    }\n  }]);\n\n  return ImageGallery;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    styles: state.styleList,\n    currentStyle: state.currentStyle\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(ImageGallery));\n\n//# sourceURL=webpack://atelier/./client/src/components/productOverview/ImageGallery.jsx?");

/***/ }),

/***/ "./client/src/components/productOverview/ImageNavButton.jsx":
/*!******************************************************************!*\
  !*** ./client/src/components/productOverview/ImageNavButton.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* eslint-disable react/prop-types */\n\n\n\nvar ImageNavButton = function ImageNavButton(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n    className: \"gallery-nav\",\n    \"data-testid\": \"gallery-nav-\".concat(props.direction),\n    icon: props.icon,\n    size: \"2x\",\n    onClick: function onClick() {\n      return props.onClick(props.direction);\n    }\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageNavButton);\n\n//# sourceURL=webpack://atelier/./client/src/components/productOverview/ImageNavButton.jsx?");

/***/ })

}]);