/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Mobile Styles */\\r\\n@media only screen and (max-width: 500px) {\\r\\n  .about {\\r\\n    display: none;\\r\\n    padding: 4vw;\\r\\n    margin: 4vw;\\r\\n    z-index: 9;\\r\\n    text-align: left;\\r\\n    height: 100%;\\r\\n    width: 90%;\\r\\n    color: white;\\r\\n  }\\r\\n  p {\\r\\n    font-size: calc(1em + 2vw);\\r\\n  }\\r\\n\\r\\n  #catImage {\\r\\n    height: 90%;\\r\\n    width: 90%;\\r\\n  }\\r\\n  #draggableDivCat, #draggableDivAbout {\\r\\n    padding: inherit;\\r\\n    background-color: rgba(0,0,150,1);\\r\\n    box-shadow: 0 4px 8px 0 rgba(255, 0, 255, 1), 0 8px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n  }\\r\\n}\\r\\n/*===============================================================*/\\r\\n/* Tablet Styles */\\r\\n@media only screen and (min-width: 501px) and (max-width: 960px) {\\r\\n  .about {\\r\\n    display: none;\\r\\n    padding: 4vw;\\r\\n    margin: 4vw;\\r\\n    z-index: 9;\\r\\n    text-align: left;\\r\\n    height: 100%;\\r\\n    width: 90%;\\r\\n    color: white;\\r\\n  }\\r\\n  #catImage {\\r\\n    height: 90%;\\r\\n    width: 90%;\\r\\n    margin: 3%;\\r\\n  }\\r\\n  #draggableDivCat, #draggableDivAbout {\\r\\n    padding: inherit;\\r\\n    background-color: rgba(0,0,150,1);\\r\\n    box-shadow: 0 4px 8px 0 rgba(255, 0, 255, 1), 0 8px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n  }\\r\\n\\r\\n}\\r\\n/*===============================================================*/\\r\\n/* Desktop Styles */\\r\\n@media only screen and (min-width: 961px) {\\r\\n  #draggableDivCat, #draggableDivCatHeader {\\r\\n    top: 15%;\\r\\n    left: 50%;\\r\\n  }\\r\\n  #draggableDivAbout, #draggableDivAboutHeader {\\r\\n    top: 15%;\\r\\n    left: 1%;\\r\\n  }\\r\\n  #draggableDivCat, #draggableDivAbout {\\r\\n    background-color: rgba(0,0,150,0.6);\\r\\n    box-shadow: 0 4px 8px 0 rgba(255, 0, 255, 1), 0 8px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n    padding-bottom: 3vw;\\r\\n  }\\r\\n\\r\\n  #draggableDivAbout {\\r\\n    display: none;\\r\\n    position: absolute;\\r\\n    z-index: 9;\\r\\n    text-align: left;\\r\\n    width: 40vw;\\r\\n    color: white;\\r\\n  }\\r\\n  #draggableDivAboutHeader {\\r\\n    text-align: center;\\r\\n    cursor: move;\\r\\n    padding: 0;\\r\\n    z-index: 10;\\r\\n    color: white;\\r\\n  }\\r\\n\\r\\n  #draggableDivCat {\\r\\n    display: none;\\r\\n    position: absolute;\\r\\n    z-index: 9;\\r\\n    text-align: left;\\r\\n    width: 600px;\\r\\n    color: white;\\r\\n  }\\r\\n  #draggableDivCatHeader {\\r\\n    text-align: center;\\r\\n    padding: 0;\\r\\n    cursor: move;\\r\\n    z-index: 10;\\r\\n    color: white;\\r\\n  }\\r\\n  #catImage {\\r\\n    height: 90%;\\r\\n    width: 90%;\\r\\n  }\\r\\n\\r\\n  p {\\r\\n    font-size: calc(0.5em + 0.5vw);\\r\\n  }\\r\\n}\\r\\n/*===============================================================*/\\r\\n/* Main styles */\\r\\n@media screen and (min-width: 50em) {\\r\\n  html {\\r\\n    font-size: 2vw;\\r\\n  }\\r\\n  #catImage {\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n    margin: 5%;\\r\\n  }\\r\\n}\\r\\nbody {\\r\\n  background-color: black;\\r\\n  margin: 0;\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: white;\\r\\n  font-weight: 700;\\r\\n}\\r\\na:hover {\\r\\n  color: rgba(255, 0, 255, 1);\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-weight: 700;\\r\\n  font-size: 5vw;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  color: white;\\r\\n  margin: 4%;\\r\\n  background-color: rgba(0,0,0,0);\\r\\n  box-shadow: 0 4px 8px 0 rgba(200, 200, 200, 1), 0 8px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n}\\r\\n\\r\\ncanvas {\\r\\n    position: absolute;\\r\\n    left: 10%;\\r\\n    top: 15%;\\r\\n    z-index: -1;\\r\\n    height: 80%;\\r\\n    width: 80%;\\r\\n    box-shadow: 1px 1px 1px 1px rgba(255, 255, 255, 1), 1px 1px 1px 1px rgba(0, 0, 0, 0.19);\\r\\n}\\r\\n\\r\\niframe {\\r\\n  width: 32px;\\r\\n  height: 32px;\\r\\n  margin: 0 0 0 3vw;\\r\\n}\\r\\n/* For right left arrow buttons */\\r\\ni {\\r\\n  border: solid white;\\r\\n  border-width: 0 5px 5px 0;\\r\\n  display: inline-block;\\r\\n  padding: 7px;\\r\\n  margin: 2px;\\r\\n}\\r\\n#previousButton {\\r\\n  float: left;\\r\\n  padding: 5px;\\r\\n  margin: 2px;\\r\\n}\\r\\n#nextButton {\\r\\n  margin: 2px;\\r\\n  padding: 5px;\\r\\n  float: right;\\r\\n}\\r\\n\\r\\n.right {\\r\\n  transform: rotate(-45deg);\\r\\n  -webkit-transform: rotate(-45deg);\\r\\n}\\r\\n\\r\\n.left {\\r\\n  transform: rotate(135deg);\\r\\n  -webkit-transform: rotate(135deg);\\r\\n}\\r\\n/*================================*/\\r\\n\\r\\n.navbar-default .navbar-brand {\\r\\n color:white;\\r\\n background-color: rgba(0, 0, 0, 0);\\r\\n margin: 0 0 0 1vw;\\r\\n}\\r\\n\\r\\n.navbar-default .navbar-brand:hover {\\r\\n  color: rgba(255, 0, 255, 1);\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n  color: white;\\r\\n  background-color: rgba(0, 0, 0, 1);\\r\\n  border: 0px solid rgba(0,0,0,0);\\r\\n  margin: 0 0 0 3vw;\\r\\n}\\r\\n\\r\\n.navbar-default .navbar-nav > li > a {\\r\\n  color:white;\\r\\n  margin: 0 0 0 2vw;\\r\\n}\\r\\n\\r\\n.navbar-default .navbar-nav > li > a:hover {\\r\\n  color: rgba(255, 0, 255, 1);\\r\\n}\\r\\n\\r\\n.row {\\r\\n  margin: 0px;\\r\\n}\\r\\n.navbar-collapse {\\r\\n  padding-right: 7%;\\r\\n  padding-left: 7%;\\r\\n}\\r\\n\\r\\n#draggableDivCatHeader, #draggableDivAboutHeader {\\r\\n  font-size: 2em;\\r\\n  font-weight: 700;\\r\\n  padding-bottom: 2vw;\\r\\n  margin-bottom: 2vw;\\r\\n  box-shadow: 0 4px 8px 0 rgba(255, 0, 255, 1), 0 8px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n}\\r\\n\\r\\n#innerBorder {\\r\\n  box-shadow: 0 4px 8px 0 rgba(255, 0, 255, 1), 0 8px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n  margin: 2%;\\r\\n  padding: 4%;\\r\\n}\\r\\n\\r\\n#catMT002, #catMT003, #catMT004, #catMTUSB01, #catMTWL001, #catMTUSB002, #catMT005 {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/otodojo.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/otodojo.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n    overflow: hidden;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.container {\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr 1fr 5fr 1fr 1fr 1fr;\\r\\n    grid-template-rows: 1fr 1fr 1fr 5fr 1fr 1fr 1fr;\\r\\n    gap: 0px 0px;\\r\\n    grid-auto-flow: row;\\r\\n    grid-template-areas:\\r\\n        \\\". . . . . . .\\\"\\r\\n        \\\". . . . . . .\\\"\\r\\n        \\\". . . . . . .\\\"\\r\\n        \\\". . . Screen . . .\\\"\\r\\n        \\\". hud hud . . . .\\\"\\r\\n        \\\". hud hud . . . .\\\"\\r\\n        \\\". . . . . . .\\\";\\r\\n}\\r\\n\\r\\n#shape1 {\\r\\n    z-index: -1;\\r\\n    position: absolute;\\r\\n}\\r\\n\\r\\n#shape2 {\\r\\n    z-index: -1;\\r\\n    position: absolute;\\r\\n}\\r\\n\\r\\n#shape3 {\\r\\n    z-index: -1;\\r\\n    position: absolute;\\r\\n}\\r\\n\\r\\n#shape4 {\\r\\n    z-index: -1;\\r\\n    position: absolute;\\r\\n}\\r\\n\\r\\n#hud {\\r\\n    color: white;\\r\\n    z-index: 2;\\r\\n    border-radius: 48px 0px 58px;\\r\\n    border: 1px solid #0090FF;\\r\\n    grid-area: hud;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/otodojo.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = []; // return the list of modules as css string\r\n\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n\r\n      content += cssWithMappingToString(item);\r\n\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n\r\n      return content;\r\n    }).join(\"\");\r\n  }; // import a list of modules into the list\r\n\r\n\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n\r\n    var alreadyImportedModules = {};\r\n\r\n    if (dedupe) {\r\n      for (var k = 0; k < this.length; k++) {\r\n        var id = this[k][0];\r\n\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n\r\n    for (var _k = 0; _k < modules.length; _k++) {\r\n      var item = [].concat(modules[_k]);\r\n\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n\r\n      list.push(item);\r\n    }\r\n  };\r\n\r\n  return list;\r\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/main.css?");

/***/ }),

/***/ "./src/otodojo.css":
/*!*************************!*\
  !*** ./src/otodojo.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_otodojo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./otodojo.css */ \"./node_modules/css-loader/dist/cjs.js!./src/otodojo.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_otodojo_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_otodojo_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_otodojo_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_otodojo_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/otodojo.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar stylesInDOM = [];\r\n\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n\r\n  return result;\r\n}\r\n\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n\r\n    identifiers.push(identifier);\r\n  }\r\n\r\n  return identifiers;\r\n}\r\n\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n\r\n  return updater;\r\n}\r\n\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n\r\n      var _index = getIndexByIdentifier(_identifier);\r\n\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar memo = {};\r\n/* istanbul ignore next  */\r\n\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\r\n\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n\r\n    memo[target] = styleTarget;\r\n  }\r\n\r\n  return memo[target];\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n\r\n  target.appendChild(style);\r\n}\r\n\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\n\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\n\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n\r\n  css += obj.css;\r\n\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n\r\n  var sourceMap = obj.sourceMap;\r\n\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  } // For old IE\r\n\r\n  /* istanbul ignore if  */\r\n\r\n\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\n\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction domAPI(options) {\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\n\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/otodojo.js":
/*!************************!*\
  !*** ./src/otodojo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _otodojo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otodojo.css */ \"./src/otodojo.css\");\n/* harmony import */ var _otodojoAudio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otodojoAudio.js */ \"./src/otodojoAudio.js\");\n\r\n\r\n\r\n\r\n// random int function\r\nfunction getRndInt(min, max) {\r\n    return Math.floor(Math.random() * (max - min + 1)) + min\r\n}\r\n\r\nfunction map(value, oldRange, newRange) {\r\n    var newValue = (value - oldRange[0]) * (newRange[1] - newRange[0]) / (oldRange[1] - oldRange[0]) + newRange[0];\r\n    return Math.min(Math.max(newValue, newRange[0]), newRange[1]);\r\n}\r\n\r\nconst shape1 = document.getElementById('shape1')\r\nconst shape2 = document.getElementById('shape2')\r\nconst shape3 = document.getElementById('shape3')\r\nconst shape4 = document.getElementById('shape4')\r\n\r\nshape1.src = `/media/shapes/shape${getRndInt(1,10)}.png`\r\nshape2.src = `/media/shapes/shape${getRndInt(1,10)}.png`\r\nshape3.src = `/media/shapes/shape${getRndInt(1,10)}.png`\r\nshape4.src = `/media/shapes/shape${getRndInt(1,10)}.png`\r\n\r\n// for generating biased random numbers for the blur\r\nconst blurValues = {\r\n    '0': 0,\r\n    '-1': 0,\r\n    '-2': 1,\r\n    '-3': 2,\r\n    '-4': 4,\r\n    '-5': 8,\r\n    '-6': 16\r\n}\r\nconst blurValuesLength = Object.keys(blurValues).length\r\nlet blurValue = 0\r\n\r\nfunction shapeMover(shape, lowFreqValue, midFreqValue, midHighFreqValue) {\r\n    // this function moves and randomizes some \r\n    // of the parameters for each shape\r\n    const freqValues = [lowFreqValue, midFreqValue, midHighFreqValue]\r\n    let screenWidth = screen.width\r\n    let screenHeight = screen.height\r\n    shape.style.transform = `translateX(${getRndInt(0, screenWidth * 0.5)}px) \r\n                             translateY(${getRndInt(0, screenHeight * 0.5)}px)\r\n                             rotate(${getRndInt(0, screenWidth * 0.77)}deg)\r\n                             scale(${map(freqValues[getRndInt(0,freqValues.length)], [0,255], [0,7])})`\r\n}\r\n\r\nshapeMover(shape1)\r\nshapeMover(shape2)\r\nshapeMover(shape3)\r\nshapeMover(shape4)\r\n\r\nlet start, previousTimeStamp\r\nlet counter1 = 0,\r\n    counter2 = 0,\r\n    counter3 = 0,\r\n    counter4 = 0\r\n\r\n// main animation function\r\nfunction step(timestamp) {\r\n    if (start === undefined) {\r\n        start = timestamp\r\n    }\r\n\r\n    const elapsed = timestamp - start\r\n\r\n    _otodojoAudio_js__WEBPACK_IMPORTED_MODULE_2__.analyser.getByteFrequencyData(_otodojoAudio_js__WEBPACK_IMPORTED_MODULE_2__.dataArray)\r\n\r\n    // work out the average value per chunk of audio data \r\n    // it's split into a rough freuqncy range\r\n    let lowFreqValue = _otodojoAudio_js__WEBPACK_IMPORTED_MODULE_2__.dataArray.slice(3, 6).reduce((partialSum, a) => partialSum + a, 0) / 4\r\n    let midFreqValue = _otodojoAudio_js__WEBPACK_IMPORTED_MODULE_2__.dataArray.slice(200, 400).reduce((partialSum, a) => partialSum + a, 0) / 200\r\n    let midHighFreqValue = _otodojoAudio_js__WEBPACK_IMPORTED_MODULE_2__.dataArray.slice(500, 600).reduce((partialSum, a) => partialSum + a, 0) / 200\r\n    let highFreqValue = _otodojoAudio_js__WEBPACK_IMPORTED_MODULE_2__.dataArray.slice(700, 1200).reduce((partialSum, a) => partialSum + a, 0) / 600\r\n\r\n    if (midFreqValue > 50) {\r\n        shape1.style.opacity = '0.9'\r\n        shape3.style.opacity = '0.9'\r\n    } else {\r\n        shape1.style.opacity = `${map(midFreqValue, [0,100], [0,2])}`\r\n        shape3.style.opacity = `${map(midFreqValue, [0,100], [0,2])}`\r\n    }\r\n    \r\n    if (midHighFreqValue > 50) {\r\n        shape2.style.opacity = '0.9'   \r\n    } else {\r\n        shape2.style.opacity = `${map(midHighFreqValue, [0,255], [0,2])}`\r\n    }\r\n    \r\n    if (highFreqValue > 50) {\r\n        shape4.style.opacity = '0.9'\r\n    } else {\r\n        shape4.style.opacity = `${map(highFreqValue, [0,100], [0,2])}`\r\n    }\r\n\r\n    // when there's low frequencies thumps trigger shape moves\r\n    if (timestamp != previousTimeStamp) {\r\n        if (lowFreqValue > 10 && counter1 > 20) {\r\n            shapeMover(shape1, lowFreqValue, midFreqValue, midHighFreqValue)\r\n            counter1 = 0\r\n        }\r\n        if (midHighFreqValue > 20 && counter2 > 30) {\r\n            shapeMover(shape2, lowFreqValue, midFreqValue, midHighFreqValue)\r\n            counter2 = 0\r\n        }\r\n        if (lowFreqValue > 30 && counter3 > 10) {\r\n            shapeMover(shape3, lowFreqValue, midFreqValue, midHighFreqValue)\r\n            counter3 = 0\r\n        }\r\n        if (lowFreqValue > 30 && counter4 > 15) {\r\n            shapeMover(shape4, lowFreqValue, midFreqValue, midHighFreqValue)\r\n            counter4 = 0\r\n        }\r\n    }\r\n\r\n    counter1++\r\n    counter2++\r\n    counter3++\r\n    counter4++\r\n    previousTimeStamp = timestamp\r\n    window.requestAnimationFrame(step)\r\n\r\n}\r\n\r\nwindow.requestAnimationFrame(step)\n\n//# sourceURL=webpack:///./src/otodojo.js?");

/***/ }),

/***/ "./src/otodojoAudio.js":
/*!*****************************!*\
  !*** ./src/otodojoAudio.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AudioContext\": () => (/* binding */ AudioContext),\n/* harmony export */   \"analyser\": () => (/* binding */ analyser),\n/* harmony export */   \"audioContext\": () => (/* binding */ audioContext),\n/* harmony export */   \"bufferLength\": () => (/* binding */ bufferLength),\n/* harmony export */   \"dataArray\": () => (/* binding */ dataArray),\n/* harmony export */   \"track\": () => (/* binding */ track)\n/* harmony export */ });\n// use the web API to play and analyse the tracks\r\n\r\n// create the audio context \r\n\r\n// for legacy browsers\r\nconst AudioContext = window.AudioContext || window.webkitAudioContext\r\n\r\nconst audioContext = new AudioContext()\r\n\r\n// get the audio element\r\nconst audioElement = document.getElementById(\"oneWayOrAnother\")\r\n\r\n// pass it into the audio context\r\nconst track = audioContext.createMediaElementSource(audioElement)\r\n\r\n// create the analyser node\r\nconst analyser = new AnalyserNode(audioContext)\r\nanalyser.fftSize = 16384\r\nanalyser.smoothingTimeConstant = 0.9;\r\n\r\nconst bufferLength = analyser.frequencyBinCount\r\nconst dataArray = new Uint8Array(bufferLength)\r\nanalyser.getByteTimeDomainData(dataArray)\r\n\r\n// connect to the output\r\ntrack.connect(analyser).connect(audioContext.destination)\r\n\r\n// follow this \r\n// https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode\r\n\r\n// Select our play button\r\nconst playButton = document.getElementById(\"playPause\")\r\n\r\nplayButton.addEventListener(\r\n    \"click\",\r\n    () => {\r\n        // Check if context is in suspended state (autoplay policy)\r\n        if (audioContext.state === \"suspended\") {\r\n            audioContext.resume()\r\n        }\r\n\r\n        // Play or pause track depending on state\r\n        if (playButton.dataset.playing === \"false\") {\r\n            audioElement.play()\r\n            playButton.dataset.playing = \"true\"\r\n        } else if (playButton.dataset.playing === \"true\") {\r\n            audioElement.pause()\r\n            playButton.dataset.playing = \"false\"\r\n        }\r\n    },\r\n    false\r\n)\r\n\r\naudioElement.addEventListener(\r\n    \"ended\",\r\n    () => {\r\n      playButton.dataset.playing = \"false\"\r\n    },\r\n    false\r\n  )\n\n//# sourceURL=webpack:///./src/otodojoAudio.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/otodojo.js");
/******/ 	
/******/ })()
;