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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/otodojo.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/otodojo.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --main-blue: #37d2ff;\\n    --main-black: #00000F;\\n    --main-pink: #a55069;\\n    --main-white: #FFFFF0;\\n}\\n\\nhtml {\\n    height: 100%;\\n    width: 100%;\\n    font-size: 2vw;\\n    overflow: hidden;\\n}\\n\\nbody {\\n    overflow: hidden;\\n    width: 100%;\\n    min-height: 100%;\\n    font-family: 'Roboto', sans-serif;\\n    background: radial-gradient(var(--main-blue), var(--main-white));\\n    /* background: radial-gradient(var(--main-black), var(--main-blue)); */\\n}\\n\\n#loadOverlay {\\n    display: none;\\n    overflow: hidden;\\n}\\n\\n.border {\\n    background: var(--main-blue);\\n    -webkit-clip-path: inset(0% 0% 0% 0%);\\n    clip-path: inset(0% 0% 0% 0%);\\n    overflow: hidden;\\n    z-index: 5;\\n    /* border: 4px solid var(--main-white); */\\n}\\n\\np {\\n    color: black;\\n}\\n\\n.container {\\n    width: 100%;\\n    overflow: hidden;\\n    height: 100%;\\n    justify-items: center;\\n    align-items: center;\\n    display: grid;\\n    grid-template-columns: 1fr 1fr 1fr;\\n    grid-template-rows: 10fr 1fr 4fr;\\n    grid-template-areas:\\n        \\\"screen screen screen\\\"\\n        \\\"textDisplay textDisplay textDisplay\\\"\\n        \\\"back play forward\\\";\\n}\\n\\n.back {\\n    grid-area: back;\\n    z-index: 10;\\n    /* border: 4px solid var(--main-white); */\\n    width: 100%;\\n    text-align: center;\\n}\\n\\n.forward {\\n    grid-area: forward;\\n    z-index: 10;\\n    /* border: 4px solid var(--main-white); */\\n    width: 100%;\\n    text-align: center;\\n}\\n\\n.forward, .back, .textDisplay, .play {\\n    display: none;\\n}\\n\\n.play {\\n    grid-area: play;\\n    z-index: 10;\\n    /* border: 4px solid var(--main-white); */\\n    width: 100%;\\n    text-align: center;\\n}\\n\\n.textDisplay {\\n    grid-area: textDisplay;\\n    z-index: 10;\\n    animation: slide-left 10s linear infinite;\\n    overflow: hidden;\\n    text-align: center;\\n}\\n\\n@keyframes slide-left {\\n    0% {\\n        transform: translate(50%, 0);\\n    }\\n\\n    100% {\\n        transform: translate(-50%, 0);\\n    }\\n}\\n\\n.screen {\\n    grid-area: screen;\\n    min-width: 70%;\\n    overflow: hidden;\\n    min-height: 80%;\\n}\\n\\nbutton {\\n    background: var(--main-pink);\\n    /* border: 2px solid var(--main-black); */\\n}\\n\\n#UXInstruction {\\n    position: absolute;\\n    margin: 0;\\n    padding: 0;\\n    top: 0;\\n    /* filter: blur(0); */\\n    /* left: 33%; */\\n    width: 80vmin;\\n    z-index: 1;\\n}\\n\\n#shape1,\\n#shape2,\\n#shape3,\\n#shape4,\\n#shape5 {\\n    position: absolute;\\n    z-index: 10;\\n    top: 0;\\n    left: 0;\\n    /* width: 100%;\\n    height: 100%; */\\n    transition: 0.9s;\\n    transition-property: transform;\\n    filter: opacity(0);\\n    overflow: hidden;\\n}\\n\\n/* ------------------ Useful ------------- */\\n.noselect {\\n    -webkit-touch-callout: none;\\n    /* iOS Safari */\\n    -webkit-user-select: none;\\n    /* Safari */\\n    -khtml-user-select: none;\\n    /* Konqueror HTML */\\n    -moz-user-select: none;\\n    /* Old versions of Firefox */\\n    -ms-user-select: none;\\n    /* Internet Explorer/Edge */\\n    user-select: none;\\n    /* Non-prefixed version, currently */\\n    /* supported by Chrome, Edge, Opera and Firefox */\\n}\\n\\n.disableSave {\\n    -webkit-user-select: none;\\n    -webkit-touch-callout: none;\\n    user-select: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/otodojo.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

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

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/otodojo.js":
/*!************************!*\
  !*** ./src/otodojo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _otodojo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otodojo.css */ \"./src/otodojo.css\");\n/* harmony import */ var _otodojoAudio_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otodojoAudio.js */ \"./src/otodojoAudio.js\");\n// import './main.css'\n\n\n\n// if user swipes up \n\n// if window resize we want to change the scope of the image positions\nlet rect, rectLeftQuarter = 0\nconst mainScreenElement = document.getElementById('mainScreen')\nrect = mainScreenElement.getBoundingClientRect()\nrectLeftQuarter = rect.right * 0.25\nconsole.log(rect, rectLeftQuarter)\n\nfunction updateImageZone() {\n    rect = mainScreenElement.getBoundingClientRect()\n    rectLeftQuarter = rect.right * 0.25\n}\nwindow.addEventListener(\"resize\", updateImageZone)\n\n// track mouse clicks\nlet mouseX, mouseY = 0\nlet mouseDown = false\nwindow.addEventListener('pointerdown', logKeyDown)\n\nfunction logKeyDown(e) {\n    mouseDown = true\n}\nwindow.addEventListener('pointerup', logKeyUp)\n\nfunction logKeyUp(e) {\n    mouseDown = false\n}\nwindow.addEventListener('pointermove', logKey)\n\nfunction logKey(e) {\n    mouseX = e.clientX - 100\n    mouseY = e.clientY - 100\n    if (mouseX < 0) mouseX = 0\n    if (mouseY < 0) mouseY = 0\n}\n\n// random int function\nfunction getRndInt(min, max) {\n    return Math.floor(Math.random() * (max - min + 1)) + min\n}\ndocument.getRndInt = getRndInt\n\nfunction map(value, oldRange, newRange) {\n    var newValue = (value - oldRange[0]) * (newRange[1] - newRange[0]) / (oldRange[1] - oldRange[0]) + newRange[0]\n    return Math.min(Math.max(newValue, newRange[0]), newRange[1])\n}\n\nconst shape1 = document.getElementById('shape1')\nconst shape2 = document.getElementById('shape2')\nconst shape3 = document.getElementById('shape3')\nconst shape4 = document.getElementById('shape4')\nconst shape5 = document.getElementById('shape5')\nconst shapes = [shape1, shape2, shape3, shape4, shape5]\n\nfunction shuffleShape(element) {\n    element.src = `/media/shapes/shape${getRndInt(1,13)}.png`\n}\ndocument.shuffleShape = shuffleShape\n\nshuffleShape(shape1)\nshuffleShape(shape2)\nshuffleShape(shape3)\nshuffleShape(shape4)\nshuffleShape(shape5)\n\nconst minusOrNotArray = ['', '-']\nlet zAxisValue = 0\n\nlet start, previousTimeStamp\nlet counter1 = 0\nlet freqValue0to100 = 0\nlet freqValue200to400 = 0\nlet freqValue600to800 = 0\nlet freqValue1000to1200 = 0\nlet freqValue2000to5000 = 0\nlet freqValues = [freqValue0to100, freqValue200to400, freqValue600to800, freqValue1000to1200, freqValue2000to5000]\nlet highestValue = 25\n// main animation function\nfunction step(timestamp) {\n    if (start === undefined) {\n        start = timestamp\n    }\n\n    // make sure some time has passed help reduce processing\n    if (timestamp != previousTimeStamp) {\n        // work out the average value per chunk of audio data \n        // it's split into a rough freuqncy range\n        _otodojoAudio_js__WEBPACK_IMPORTED_MODULE_1__.analyser.getByteFrequencyData(_otodojoAudio_js__WEBPACK_IMPORTED_MODULE_1__.dataArray)\n\n        if (freqValue0to100 > highestValue * 0.8) {\n            highestValue = freqValue0to100\n        }\n\n        // fft size is 4096 so I think 20,000Hz is across half that range?\n        freqValue0to100 = _otodojoAudio_js__WEBPACK_IMPORTED_MODULE_1__.dataArray.slice(0, 10).reduce((partialSum, a) => partialSum + a, 0) * 0.1\n        freqValue200to400 = _otodojoAudio_js__WEBPACK_IMPORTED_MODULE_1__.dataArray.slice(100, 200).reduce((partialSum, a) => partialSum + a, 0) * 0.01\n        freqValue600to800 = _otodojoAudio_js__WEBPACK_IMPORTED_MODULE_1__.dataArray.slice(600, 700).reduce((partialSum, a) => partialSum + a, 0) * 0.01\n        freqValue1000to1200 = _otodojoAudio_js__WEBPACK_IMPORTED_MODULE_1__.dataArray.slice(900, 1000).reduce((partialSum, a) => partialSum + a, 0) * 0.01\n        freqValue2000to5000 = _otodojoAudio_js__WEBPACK_IMPORTED_MODULE_1__.dataArray.slice(1200, 1300).reduce((partialSum, a) => partialSum + a, 0) * 0.01\n        freqValues = [freqValue0to100, freqValue200to400, freqValue600to800, freqValue1000to1200, freqValue2000to5000]\n\n        shapes[getRndInt(0, shapes.length - 1)].style.filter = `\n                                       opacity(${freqValue0to100*0.5}%) \n                                       saturate(${freqValues[getRndInt(0,freqValues.length-1)]*0.5}%)\n                                       blur(${Math.abs(highestValue*4-freqValue0to100*4)}px)`\n        if (mouseDown === true && _otodojoAudio_js__WEBPACK_IMPORTED_MODULE_1__.playButton.dataset.playing == \"true\") {\n            for (var i = 0; i < shapes.length; i++) {\n                shapes[i].style.transform = `rotate(0deg)\n                                             scale(1)\n                                             translate3d(${mouseX}px,${mouseY}px,0px)`\n                shapes[i].style.filter = `blur(0px)\n                                          opacity(0.9) \n                                          saturate(${freqValues[i]*0.5}%)\n                                          drop-shadow(${freqValue0to100}px ${freqValue200to400}px ${freqValue0to100}px white)`\n            }\n        }\n\n        if (counter1 > 5 && freqValue0to100 > highestValue * 0.955) {\n            if (mouseDown === false) {\n                shapes[getRndInt(0, shapes.length - 1)].style.transform = `rotate(${freqValue0to100 % 360}deg)\n                                                 scale(${getRndInt(0,20)*0.1})\n                                                 translate3d(${minusOrNotArray[getRndInt(0,1)]}${getRndInt(0,rect.right)}px,${minusOrNotArray[getRndInt(0,1)]}${getRndInt(0,rect.right)}px,0px)`\n                counter1 = 0\n            }\n\n        }\n    }\n    counter1++\n    previousTimeStamp = timestamp\n    window.requestAnimationFrame(step)\n}\n\nwindow.requestAnimationFrame(step)\n\n//# sourceURL=webpack:///./src/otodojo.js?");

/***/ }),

/***/ "./src/otodojoAudio.js":
/*!*****************************!*\
  !*** ./src/otodojoAudio.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AudioContext\": () => (/* binding */ AudioContext),\n/* harmony export */   \"UXInstruction\": () => (/* binding */ UXInstruction),\n/* harmony export */   \"analyser\": () => (/* binding */ analyser),\n/* harmony export */   \"audioContext\": () => (/* binding */ audioContext),\n/* harmony export */   \"audioElement\": () => (/* binding */ audioElement),\n/* harmony export */   \"bufferLength\": () => (/* binding */ bufferLength),\n/* harmony export */   \"dataArray\": () => (/* binding */ dataArray),\n/* harmony export */   \"playButton\": () => (/* binding */ playButton),\n/* harmony export */   \"track\": () => (/* binding */ track)\n/* harmony export */ });\n// use the web API to play and analyse the tracks\n\n// create the audio context \n\n// for legacy browsers\nconst AudioContext = window.AudioContext || window.webkitAudioContext\n\nconst audioContext = new AudioContext()\n\n// get the audio element\nconst audioElement = document.getElementById(\"parsingAPath\")\n\n// pass it into the audio context\nlet track = audioContext.createMediaElementSource(audioElement)\n\n// create the analyser node\nconst analyser = new AnalyserNode(audioContext)\nanalyser.fftSize = 4096\nanalyser.smoothingTimeConstant = 0.3\n\n// low pass filter\nconst lowPassFilter = new BiquadFilterNode(audioContext)\nlowPassFilter.frequency.value = 20\nlowPassFilter.type = 'lowpass'\n\nconst bufferLength = analyser.frequencyBinCount\nconst dataArray = new Uint8Array(bufferLength)\nanalyser.getByteTimeDomainData(dataArray)\n\n// connect to the output\n// track.connect(lowPassFilter)\ntrack.connect(analyser).connect(audioContext.destination)\n\n// follow this \n// https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode\n\n// Select our play button\nconst playButton = document.getElementById(\"playPause\")\nconst UXInstruction = document.getElementById(\"UXInstruction\")\n\nfunction togglePlay() {\n    // Check if context is in suspended state (autoplay policy)\n    if (audioContext.state === \"suspended\") {\n        audioContext.resume()\n    }\n\n    // Play or pause track depending on state\n    if (playButton.dataset.playing === \"false\") {\n        audioElement.play()\n        playButton.dataset.playing = \"true\"\n        UXInstruction.style.filter = `blur(100px)`\n        document.body.style.background = 'radial-gradient(var(--main-blue), var(--main-black))'\n    } else if (playButton.dataset.playing === \"true\") {\n        audioElement.pause()\n        playButton.dataset.playing = \"false\"\n        UXInstruction.style.filter = `blur(0px)`\n        document.body.style.background = 'radial-gradient(var(--main-blue), var(--main-white))'\n    }\n}\n\n// event = keyup or keydown\nwindow.addEventListener('keyup', event => {\n    if (event.code === 'Space') {\n        // play pause\n        togglePlay()\n    }\n})\n\naudioElement.addEventListener(\n    \"ended\",\n    () => {\n        playButton.dataset.playing = \"false\"\n    },\n    false\n)\n\n// if the user leaves the tab and it becomes inactive stop playing sound and video\nwindow.addEventListener(\"visibilitychange\", event => {\n    if (document.visibilityState != \"visible\") {\n        audioElement.pause()\n    }\n})\n\n// taken from https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android\nlet touchstartY = 0;\nlet touchendY = 0;\n\nconst slider = document.getElementById('mainScreen');\n\nfunction handleGesture() {\n  if (touchendY + 200 < touchstartY) {\n    togglePlay();\n  }\n}\n\nslider.addEventListener('touchstart', e => {\n  touchstartY = e.changedTouches[0].screenY;\n})\n\nslider.addEventListener('touchend', e => {\n  touchendY = e.changedTouches[0].screenY;\n  handleGesture();\n})\n\n//# sourceURL=webpack:///./src/otodojoAudio.js?");

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