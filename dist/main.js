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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n  background-color: #f1f2f5;\\r\\n}\\r\\n\\r\\n.main-list {\\r\\n  width: 40%;\\r\\n  background-color: #fff;\\r\\n  margin: 2rem auto;\\r\\n  border-radius: 3px;\\r\\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\\r\\n}\\r\\n\\r\\n.today,\\r\\n.add-new,\\r\\n.todo-item {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  border-bottom: 2px solid #f1f2f5;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.todo-item,\\r\\n.add-new {\\r\\n  min-height: 66px;\\r\\n}\\r\\n\\r\\n.todo-item:last-of-type {\\r\\n  border-bottom: 2px solid #fff;\\r\\n}\\r\\n\\r\\n.today-content {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  height: 66px;\\r\\n  border-bottom: 2px solid #f1f2f5;\\r\\n}\\r\\n\\r\\n.white-height {\\r\\n  display: flex;\\r\\n  min-height: 4rem;\\r\\n}\\r\\n\\r\\n.clear {\\r\\n  height: 68px;\\r\\n  line-height: 68px;\\r\\n  background-color: #e8e8e9;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#clear-text {\\r\\n  text-decoration: none;\\r\\n  color: rgb(24, 24, 24);\\r\\n  padding: 0.5rem;\\r\\n}\\r\\n\\r\\n#clear-text:hover {\\r\\n  color: #36b0e9;\\r\\n  transform: scale(1.4);\\r\\n  transition: 0.4s;\\r\\n}\\r\\n\\r\\n#new-item {\\r\\n  font-size: 1rem;\\r\\n  line-height: 3rem;\\r\\n  border: none;\\r\\n  width: 90%;\\r\\n}\\r\\n\\r\\n.no-outline {\\r\\n  padding: 0 1rem;\\r\\n}\\r\\n\\r\\n.no-outline:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.check-description {\\r\\n  display: flex;\\r\\n  align-content: center;\\r\\n  column-gap: 0.5rem;\\r\\n  width: 90%;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  resize: none;\\r\\n  overflow: hidden;\\r\\n  width: 100%;\\r\\n  line-height: 1.5rem;\\r\\n  word-wrap: break-word;\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n  font-style: italic;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.view {\\r\\n  width: 100%;\\r\\n  margin: 0 0.5rem;\\r\\n  padding-top: 0.5rem;\\r\\n}\\r\\n\\r\\n.fa-square,\\r\\n.fa-check {\\r\\n  cursor: pointer;\\r\\n  padding: 0.5rem 1rem 1rem 1rem;\\r\\n}\\r\\n\\r\\n.fa-level-down-alt {\\r\\n  transform: rotate(90deg);\\r\\n  position: absolute;\\r\\n  right: calc(30%);\\r\\n  padding: 1rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.fa-sync,\\r\\n.fa-ellipsis-v,\\r\\n.fa-trash-alt {\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.fa-sync:hover {\\r\\n  color: rgb(105, 223, 105);\\r\\n  transition: 0.4s;\\r\\n  transform: rotate(360deg);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.fa-trash-alt:hover {\\r\\n  color: rgb(212, 58, 58);\\r\\n  transform: scale(1.25);\\r\\n  transition: all 0.2s;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.heading {\\r\\n  padding-left: 1rem;\\r\\n  font-weight: 600;\\r\\n  font-size: 1.4rem;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist-testing/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist-testing/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist-testing/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist-testing/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist-testing/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist-testing/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist-testing/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist-testing/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist-testing/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist-testing/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addNew.js":
/*!***********************!*\
  !*** ./src/addNew.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewItem\": () => (/* binding */ addNewItem),\n/* harmony export */   \"context\": () => (/* binding */ context),\n/* harmony export */   \"displayStored\": () => (/* binding */ displayStored)\n/* harmony export */ });\n/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./status.js */ \"./src/status.js\");\n/* harmony import */ var _removeItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeItem.js */ \"./src/removeItem.js\");\n\r\n\r\n\r\nfunction ToDoItem(description, completed = false, index = 0) {\r\n  this.description = description;\r\n  this.completed = completed;\r\n  this.index = index;\r\n}\r\n\r\nconst enter = document.querySelector('.fa-level-down-alt');\r\nlet toDoDivsAll = document.querySelectorAll('.todo-item');\r\nconst fullList = document.querySelector('.full-list');\r\nconst newItem = document.getElementById('new-item');\r\nlet toDoText = document.querySelectorAll('.todo');\r\nlet numberIndex = 0;\r\nlet itemText = '';\r\n\r\nfunction hitEnter() {\r\n  enter.addEventListener('click', () => {\r\n    newItem.value = '';\r\n  });\r\n}\r\n\r\nfunction context() {\r\n  toDoDivsAll = document.querySelectorAll('.todo-item');\r\n  numberIndex = toDoDivsAll.length;\r\n  const toDoDiv = document.createElement('div');\r\n  toDoDiv.classList.add('todo-item', 'white-height');\r\n  toDoDiv.setAttribute('data-id', `${numberIndex}`);\r\n  toDoDiv.innerHTML = `\r\n  <div class='check-description'>\r\n    <i class='far fa-square' data-id='${numberIndex}'></i>\r\n    <i class='fas fa-check' data-id='${numberIndex}'></i>\r\n    <div class='view'>\r\n      <label class='label' for='${numberIndex}'></label>\r\n      <textarea class='todo' title='description' maxlength='128' id='${numberIndex}'></textarea>\r\n    </div>\r\n  </div>\r\n  <i class='fas fa-ellipsis-v' data-id='${numberIndex}'></i>\r\n  <i class=\"far fa-trash-alt hide\" data-id='${numberIndex}'></i>\r\n  `;\r\n  fullList.appendChild(toDoDiv);\r\n}\r\n\r\nfunction addNewItem() {\r\n  const onFocusOut = () => {\r\n    itemText = newItem.value;\r\n    if (itemText !== '') {\r\n      newItem.value = '';\r\n      hitEnter();\r\n      context();\r\n      toDoText = document.querySelectorAll('.todo');\r\n      const textArea = toDoText[numberIndex];\r\n      textArea.innerText = itemText;\r\n      _status_js__WEBPACK_IMPORTED_MODULE_0__.toDoItems.push(new ToDoItem(itemText, false, numberIndex));\r\n      localStorage.setItem('toDoList', JSON.stringify(_status_js__WEBPACK_IMPORTED_MODULE_0__.toDoItems));\r\n      toDoDivsAll = document.querySelectorAll('.todo-item');\r\n      numberIndex = toDoDivsAll.length;\r\n      (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.showItems)();\r\n      (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.checkButton)();\r\n      (0,_removeItem_js__WEBPACK_IMPORTED_MODULE_1__.editToDo)([textArea]);\r\n    }\r\n  };\r\n  newItem.addEventListener('keyup', ({ key }) => {\r\n    if (key === 'Enter') {\r\n      onFocusOut();\r\n    }\r\n  });\r\n  newItem.addEventListener('focusout', onFocusOut);\r\n}\r\n\r\nfunction displayStored() {\r\n  for (let i = 0; i < _status_js__WEBPACK_IMPORTED_MODULE_0__.toDoItems.length; i += 1) {\r\n    context();\r\n    toDoText = document.querySelectorAll('.todo');\r\n    toDoText[i].innerText = _status_js__WEBPACK_IMPORTED_MODULE_0__.toDoItems[i].description;\r\n    (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.showItems)();\r\n    (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.checkButton)();\r\n  }\r\n  addNewItem();\r\n  numberIndex = _status_js__WEBPACK_IMPORTED_MODULE_0__.toDoItems.length;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist-testing/./src/addNew.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status.js */ \"./src/status.js\");\n/* harmony import */ var _addNew_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addNew.js */ \"./src/addNew.js\");\n/* harmony import */ var _removeItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeItem.js */ \"./src/removeItem.js\");\n\r\n\r\n\r\n\r\n\r\nfunction main() {\r\n  (0,_status_js__WEBPACK_IMPORTED_MODULE_1__.getStatus)();\r\n  (0,_addNew_js__WEBPACK_IMPORTED_MODULE_2__.displayStored)();\r\n  (0,_removeItem_js__WEBPACK_IMPORTED_MODULE_3__.editToDo)();\r\n  (0,_removeItem_js__WEBPACK_IMPORTED_MODULE_3__.clearCompleted)();\r\n}\r\n\r\nmain();\r\n\n\n//# sourceURL=webpack://todolist-testing/./src/index.js?");

/***/ }),

/***/ "./src/removeItem.js":
/*!***************************!*\
  !*** ./src/removeItem.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearCompleted\": () => (/* binding */ clearCompleted),\n/* harmony export */   \"editToDo\": () => (/* binding */ editToDo)\n/* harmony export */ });\n/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./status.js */ \"./src/status.js\");\n\r\n\r\nlet textFields = document.querySelectorAll('.todo');\r\nlet dotsIcon = document.querySelectorAll('.fa-ellipsis-v');\r\nlet trashIcon = document.querySelectorAll('.fa-trash-alt');\r\nlet allDivs = document.querySelectorAll('.todo-item');\r\nlet label = document.querySelectorAll('.label');\r\nlet checkBtn = document.querySelectorAll('.fa-square');\r\nlet checkMark = document.querySelectorAll('.fa-check');\r\nlet fieldId;\r\n\r\nfunction getCurrent() {\r\n  textFields = document.querySelectorAll('.todo');\r\n  dotsIcon = document.querySelectorAll('.fa-ellipsis-v');\r\n  trashIcon = document.querySelectorAll('.fa-trash-alt');\r\n  allDivs = document.querySelectorAll('.todo-item');\r\n  label = document.querySelectorAll('.label');\r\n  checkBtn = document.querySelectorAll('.fa-square');\r\n  checkMark = document.querySelectorAll('.fa-check');\r\n}\r\n\r\nfunction sortToDo(fieldId) {\r\n  getCurrent();\r\n  const unsortedItems = (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.getStatus)();\r\n  for (let i = fieldId; i < unsortedItems.length; i += 1) {\r\n    unsortedItems[i].index = i;\r\n    allDivs[i].setAttribute('data-id', i);\r\n    checkBtn[i].setAttribute('data-id', i);\r\n    checkMark[i].setAttribute('data-id', i);\r\n    dotsIcon[i].setAttribute('data-id', i);\r\n    trashIcon[i].setAttribute('data-id', i);\r\n    label[i].setAttribute('for', i);\r\n    textFields[i].setAttribute('id', i);\r\n  }\r\n  localStorage.setItem('toDoList', JSON.stringify(unsortedItems));\r\n  (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.getStatus)();\r\n}\r\n\r\nfunction editToDo(textFieldsLocal) {\r\n  textFields = document.querySelectorAll('.todo');\r\n  if (textFieldsLocal === undefined) {\r\n    textFieldsLocal = textFields;\r\n  }\r\n  // Select a todo item field\r\n  textFieldsLocal.forEach((field) => {\r\n    field.addEventListener('click', () => {\r\n      fieldId = +field.getAttribute('id');\r\n      const listItem = field.parentNode.parentNode.parentNode;\r\n      const dotsIcon = listItem.querySelector('.fa-ellipsis-v');\r\n      const trashIcon = listItem.querySelector('.fa-trash-alt');\r\n      listItem.style.backgroundColor = 'lightyellow';\r\n      field.style.backgroundColor = 'lightyellow';\r\n      dotsIcon.classList.add('hide');\r\n      trashIcon.classList.remove('hide');\r\n      // Delete function\r\n      trashIcon.addEventListener('mousedown', () => {\r\n        const storedItems = (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.getStatus)();\r\n        listItem.remove();\r\n        storedItems.splice(fieldId, 1);\r\n        localStorage.setItem('toDoList', JSON.stringify(storedItems));\r\n        sortToDo(fieldId);\r\n        (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.showItems)();\r\n        fieldId = undefined;\r\n      });\r\n      // Edit todo item\r\n      field.addEventListener('keyup', () => {\r\n        const storedItems = (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.getStatus)();\r\n        const editedString = listItem.querySelector('.todo').value;\r\n        storedItems[fieldId].description = editedString;\r\n        localStorage.setItem('toDoList', JSON.stringify(storedItems));\r\n      });\r\n      // Toggle the background and icons on focus\r\n      field.addEventListener('focusout', () => {\r\n        listItem.style.backgroundColor = 'white';\r\n        field.style.backgroundColor = 'white';\r\n        dotsIcon.classList.remove('hide');\r\n        trashIcon.classList.add('hide');\r\n      });\r\n    });\r\n  });\r\n}\r\n\r\nfunction clearCompleted() {\r\n  const btnClear = document.getElementById('clear-text');\r\n  btnClear.addEventListener('click', () => {\r\n    const markedItems = (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.getStatus)();\r\n    for (let i = 0; i < markedItems.length; i += 1) {\r\n      if (markedItems[i].completed === true) {\r\n        getCurrent();\r\n        allDivs[i].remove();\r\n        markedItems.splice(i, 1);\r\n        localStorage.setItem('toDoList', JSON.stringify(markedItems));\r\n        (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.getStatus)();\r\n        sortToDo(i);\r\n        (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.showItems)();\r\n        i -= 1;\r\n      }\r\n    }\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todolist-testing/./src/removeItem.js?");

/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkButton\": () => (/* binding */ checkButton),\n/* harmony export */   \"getStatus\": () => (/* binding */ getStatus),\n/* harmony export */   \"showItems\": () => (/* binding */ showItems),\n/* harmony export */   \"toDoItems\": () => (/* binding */ toDoItems)\n/* harmony export */ });\nconst toDoItems = [];\r\n\r\nlet checkBtn = document.querySelectorAll('.fa-square');\r\nlet checkMark = document.querySelectorAll('.fa-check');\r\nlet toDoText = document.querySelectorAll('.todo');\r\nlet markId;\r\nlet btnId;\r\n\r\nfunction getStatus() {\r\n  if (localStorage.length === 0) {\r\n    localStorage.clear();\r\n  } else {\r\n    const storedToDoList = JSON.parse(localStorage.getItem('toDoList'));\r\n    toDoItems.length = 0;\r\n    toDoItems.push(...storedToDoList);\r\n  }\r\n  return toDoItems;\r\n}\r\n\r\nfunction showItems() {\r\n  const currentItems = getStatus();\r\n  checkBtn = document.querySelectorAll('.fa-square');\r\n  checkMark = document.querySelectorAll('.fa-check');\r\n  toDoText = document.querySelectorAll('.todo');\r\n  for (let i = 0; i < checkBtn.length; i += 1) {\r\n    if (currentItems[i].completed) {\r\n      checkMark[i].style.display = 'block';\r\n      checkMark[i].style.color = '#36B0E9';\r\n      checkBtn[i].style.display = 'none';\r\n      toDoText[i].style.textDecoration = 'line-through';\r\n      toDoText[i].style.color = 'lightgrey';\r\n    } else {\r\n      checkMark[i].style.display = 'none';\r\n      checkBtn[i].style.display = 'block';\r\n      toDoText[i].style.textDecoration = 'none';\r\n      toDoText[i].style.color = 'black';\r\n    }\r\n  }\r\n}\r\n\r\nfunction checkButton() {\r\n  const btn = checkBtn[checkBtn.length - 1];\r\n  btn.addEventListener('click', () => {\r\n    btnId = btn.getAttribute('data-id');\r\n    toDoItems[+btnId].completed = true;\r\n    localStorage.setItem('toDoList', JSON.stringify(toDoItems));\r\n    showItems();\r\n  });\r\n  const mark = checkMark[checkMark.length - 1];\r\n  mark.addEventListener('click', () => {\r\n    markId = mark.getAttribute('data-id');\r\n    toDoItems[+markId].completed = false;\r\n    localStorage.setItem('toDoList', JSON.stringify(toDoItems));\r\n    showItems();\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todolist-testing/./src/status.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;