"use strict";
(self["webpackChunkjs_capstone_project"] = self["webpackChunkjs_capstone_project"] || []).push([[0],[
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _data_getTvShow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _data_fetchLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);



(0,_data_getTvShow_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_data_fetchLikes_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --white-color: #fff;
  --shadow-rgb-color: rgba(0, 0, 0, 0.1);
  --snackbar-background-color: #333;
  --logo-text-color: rgba(249, 245, 245, 1);
  --header-bg-color: #352315;
  --light-blue-theme: #3f729b;
  --dark-blue-theme: #1c2331;
}

body {
  background-color: var(--white-bg-color);
}

/* header */
.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-blue-theme);
  margin: 0;
  padding: 0 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-heading {
  font-family: cursive;
  color: var(--logo-text-color);
  font-size: 35px;
  margin-top: 5%;
  padding-left: 1rem;
  opacity: 0.8;
}

.logo-heading h1 {
  font-family: cursive;
  font-size: 35px;
  margin-top: 5%;
  padding-left: 1rem;
  color: var(--white-color);
}

.menu-container {
  flex-grow: 1;
}

.menu-list {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  font-size: 25px;
  padding-right: 7rem;
}

.menu-list-item a {
  text-decoration: none;
  color: var(--white-color);
}

/* header END */

/* card START  */
.tvshow-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-bottom: 10vh;
}

.card {
  flex-direction: column;
  background-color: var(--white-color);
  border-radius: 1px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  width: 200px;
  margin-right: 4px;
  margin-left: 4px;
  margin-top: 4px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.image {
  width: 100%;
  padding-bottom: 16px;
}

.image img {
  width: 100%;
  height: auto;
}

.card-content {
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 8px;
}

.title {
  margin-top: 8px;
  text-align: left;
  margin-bottom: 4px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.likes-text {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 8px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 4px;
}

.fa-heart {
  margin-top: -20px;
  margin-left: auto;
  margin-right: 4px;
  cursor: pointer;
}

.comment-btn {
  background-color: var(--dark-blue-theme);
  display: flex;
  justify-content: center;
  margin-top: 8px;
  margin-bottom: 12px;
  color: var(--white-color);
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 20px;
}

/* card END  */

/* Snackbar */
.snackbar {
  visibility: hidden;
  min-width: 250px;
  background-color: var(--snackbar-background-color);
  color: var(--white-color);
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
}

.show {
  visibility: visible;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }

  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }

  to {
    bottom: 0;
    opacity: 0;
  }
}

/* Snackbar  END */

/* footer start  */
.footer {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: var(--dark-blue-theme);
  text-align: left;
  width: 100%;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--white-color);
  height: 60px;
}

/* footer END  */

/* Animation and fx START  */
.card:hover {
  transform: translateY(-5px);
}

@keyframes float {
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(-100px);
    opacity: 0;
  }
}

.floating-heart {
  position: absolute;
  top: 0;
  left: 0;
  animation: float 2s ease-out forwards;
  pointer-events: none;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _view_domView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _utils_showSnackBar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);




var getTvShows = function getTvShows(genreId) {
  var url = "".concat(_api_config_js__WEBPACK_IMPORTED_MODULE_0__.API_URL, "?q=").concat(genreId);
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (allTvShows) {
    var sicifTvShows = allTvShows.slice(0, 30);
    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.saveListToStorage)(sicifTvShows);
    (0,_view_domView_js__WEBPACK_IMPORTED_MODULE_1__["default"])(sicifTvShows);
    (0,_utils_showSnackBar_js__WEBPACK_IMPORTED_MODULE_2__["default"])('Data fetched successfully!');
  })["catch"](function (error) {
    (0,_utils_showSnackBar_js__WEBPACK_IMPORTED_MODULE_2__["default"])('Error fetching data!', error);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTvShows);

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_URL: () => (/* binding */ API_URL),
/* harmony export */   APP_ID: () => (/* binding */ APP_ID),
/* harmony export */   ENV_API: () => (/* binding */ ENV_API)
/* harmony export */ });
var API_URL = 'https://api.tvmaze.com/shows';
var APP_ID = 'OseWeg6uuohMlLbtVJro';
var ENV_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_recordLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _displayLikesData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _utils_updateLikesCount_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _utils_itemsCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _utils_updateTvShowsCount_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);





var displayTvShows = function displayTvShows(allEpisodes) {
  var tvshowList = document.getElementById('tvshow-list');
  var countElements = document.getElementById('tvshows-count');
  var count = (0,_utils_itemsCounter_js__WEBPACK_IMPORTED_MODULE_3__["default"])(tvshowList);
  (0,_utils_updateTvShowsCount_js__WEBPACK_IMPORTED_MODULE_4__["default"])(count);
  countElements.textContent = "TvShows ".concat(count);
  (0,_utils_updateTvShowsCount_js__WEBPACK_IMPORTED_MODULE_4__["default"])(allEpisodes.length);
  allEpisodes.forEach(function (tvshow, index) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.dataset.itemId = index;
    var imageContainer = document.createElement('div');
    imageContainer.classList.add('image');
    var imageLink = document.createElement('a');
    imageLink.href = tvshow.url;
    var image = document.createElement('img');
    image.src = tvshow.image.medium;
    image.alt = tvshow.name;
    imageLink.appendChild(image);
    imageContainer.appendChild(imageLink);
    card.appendChild(imageContainer);
    var cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    var title = document.createElement('div');
    title.classList.add('title');
    title.textContent = tvshow.name;
    cardContent.appendChild(title);
    var likeIcon = document.createElement('i');
    likeIcon.classList.add('fa-regular', 'fa-heart');
    cardContent.appendChild(likeIcon);
    var likesText = document.createElement('div');
    likesText.classList.add('likes-text');
    cardContent.appendChild(likesText);

    // record likes
    var likeCount = document.createElement('span');
    // likeCount.textContent = '0';
    likeCount.classList.add('like-count');
    cardContent.appendChild(likeCount);
    var likes = 0;
    likeIcon.addEventListener('click', function (event) {
      var card = event.target.closest('.card');
      if (card) {
        var itemId = parseInt(card.dataset.itemId, 10);
        likes += 1;
        likesText.textContent = 'Yeepee!!';
        (0,_data_recordLikes_js__WEBPACK_IMPORTED_MODULE_0__.recordLikes)(itemId);
        (0,_utils_updateLikesCount_js__WEBPACK_IMPORTED_MODULE_2__["default"])(itemId);
        var heart = document.createElement('i');
        heart.classList.add('fas', 'fa-heart', 'floating-heart');
        card.appendChild(heart);
        setTimeout(function () {
          heart.remove();
          likesText.textContent = "Likes ".concat(likes);
        }, 1500);
      }
    });

    // record likes END
    card.appendChild(cardContent);
    var commentButton = document.createElement('button');
    commentButton.classList.add('comment-btn');
    commentButton.textContent = 'Comments';
    card.appendChild(commentButton);
    tvshowList.appendChild(card);
  });

  // Fetch and display likes data
  (0,_displayLikesData_js__WEBPACK_IMPORTED_MODULE_1__["default"])().then(function (likesData) {
    var likesTexts = document.querySelectorAll('.card .likes-text');
    likesTexts.forEach(function (likesText, index) {
      var _likesData$index;
      var likes = ((_likesData$index = likesData[index]) === null || _likesData$index === void 0 ? void 0 : _likesData$index.likes) || 0;
      likesText.textContent = "Likes ".concat(likes);
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTvShows);

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   recordLikes: () => (/* binding */ recordLikes)
/* harmony export */ });
/* harmony import */ var _api_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _utils_showSnackBar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _fetchLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _utils_updateLikesCount_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);




var recordLikes = function recordLikes(itemId) {
  var url = "".concat(_api_config_js__WEBPACK_IMPORTED_MODULE_0__.ENV_API).concat(_api_config_js__WEBPACK_IMPORTED_MODULE_0__.APP_ID, "/likes/");
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      item_id: itemId
    })
  }).then(function (response) {
    if (response.ok) {
      (0,_utils_showSnackBar_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Likes recorded successfully!');
      window.location.reload();
      return (0,_fetchLikes_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }
    throw new Error('Error recording likes!');
  }).then(function (likesData) {
    console.log('recordLikes.js beep bop:', likesData);
    return (0,_utils_updateLikesCount_js__WEBPACK_IMPORTED_MODULE_3__["default"])(itemId, likesData.likes); // Return the promise from updateLikesCount
  })["catch"](function (error) {
    (0,_utils_showSnackBar_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Error recording likes!', error);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (recordLikes);

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var showSnackbar = function showSnackbar(message) {
  var snackbar = document.getElementById('snackbar');
  snackbar.textContent = message;
  snackbar.classList.add('show');
  setTimeout(function () {
    snackbar.classList.remove('show');
  }, 3000);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showSnackbar);

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

var fetchLikes = function fetchLikes() {
  var url = "".concat(_api_config_js__WEBPACK_IMPORTED_MODULE_0__.ENV_API).concat(_api_config_js__WEBPACK_IMPORTED_MODULE_0__.APP_ID, "/likes");
  return fetch(url).then(function (response) {
    if (!response.ok) {
      throw new Error('Error fetching likes data');
    }
    return response.json();
  })["catch"](function (error) {
    throw error;
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchLikes);

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var updateLikesCount = function updateLikesCount(itemId, likes) {
  return new Promise(function (resolve, reject) {
    var card = document.querySelector("[data-item-id=\"".concat(itemId, "\"]"));
    if (card) {
      var likeCount = card.querySelector('.like-count');
      if (likeCount) {
        likeCount.textContent = likes;
        resolve();
        //   window.location.reload();
      } else {
        reject(new Error('Like count element not found'));
      }
    } else {
      reject(new Error('Card element not found'));
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateLikesCount);

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

var displayLikesData = function displayLikesData() {
  var url = "".concat(_api_config_js__WEBPACK_IMPORTED_MODULE_0__.ENV_API).concat(_api_config_js__WEBPACK_IMPORTED_MODULE_0__.APP_ID, "/likes");
  return new Promise(function (resolve, reject) {
    fetch(url).then(function (response) {
      if (!response.ok) {
        throw new Error('Error fetching likes data');
      }
      return response.json();
    }).then(function (data) {
      console.log(JSON.stringify(data));
      resolve(data);
    })["catch"](function (error) {
      console.error('Error fetching likes data:', error);
      reject(error); // Reject the promise with the error
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayLikesData);

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var countDomItems = function countDomItems(tvshowList) {
  if (!tvshowList) {
    return 0;
  }
  return tvshowList.children.length;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countDomItems);

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var updateTvShowsCount = function updateTvShowsCount(count) {
  try {
    var countElement = document.getElementById('tvshows-count');
    if (countElement) {
      countElement.textContent = "TvShows ".concat(count);
    } else {
      throw new Error('countElement not found');
    }
  } catch (error) {
    throw new Error('Error fetching likes data', error);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTvShowsCount);

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getListFromStorage: () => (/* binding */ getListFromStorage),
/* harmony export */   saveListToStorage: () => (/* binding */ saveListToStorage)
/* harmony export */ });
var _excluded = ["index"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var storageKey = 'scifi-tvshows';
var getListFromStorage = function getListFromStorage() {
  var items = JSON.parse(localStorage.getItem(storageKey));
  if (items) {
    return items.map(function (item, index) {
      return _objectSpread(_objectSpread({}, item), {}, {
        index: index + 1
      });
    });
  }
  return [];
};
var saveListToStorage = function saveListToStorage(items) {
  var itemsToSave = items.map(function (_ref) {
    var index = _ref.index,
      rest = _objectWithoutProperties(_ref, _excluded);
    return rest;
  });
  localStorage.setItem(storageKey, JSON.stringify(itemsToSave));
};

/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(0));
/******/ }
]);