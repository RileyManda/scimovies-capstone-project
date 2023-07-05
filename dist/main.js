"use strict";
(self["webpackChunkjs_capstone_project"] = self["webpackChunkjs_capstone_project"] || []).push([[0],[
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _data_getTvShow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);


(0,_data_getTvShow_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

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
___CSS_LOADER_EXPORT___.push([module.id, `/* empty css file */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --white-color: #fff;
  --shadow-rgb-color: rgba(0, 0, 0, 0.1);
  --footer-bg-color: #377dc0;
  --button-color: #377dc0;
}

body {
  background-color: var(--white-bg-color);
}

.navbar-hambuger {
  display: flex;
  justify-content: space-between;
  background-color: #352315;
  margin-top: 40px;
}

.nav-barlogo-heading {
  font-family: cursive;
  color: bisque;
  font-size: 35px;
  margin-top: 5%;
  padding-left: 4rem;
}

.nav-ul {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 5rem;
  font-size: 25px;
  padding-right: 7rem;
}

.nav-lists a {
  text-decoration: none;
  color: #fff;
}

/* card START  */
#tvshow-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
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
  margin-bottom: 4px;
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
  background-color: var(--button-color);
  display: flex;
  justify-content: center;
  margin-top: 8px;
  margin-bottom: 12px;
  color: var(--white-color);
}

/* card END  */

/* Snackbar */
.snackbar {
  visibility: hidden;
  min-width: 250px;
  background-color: #333;
  color: #fff;
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
  background-color: var(--footer-bg-color);
  text-align: center;
  width: 100%;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white-color);
  height: 60px;
}

/* footer END  */
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
/* harmony import */ var _domView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);

/* harmony import */ var _utils_showSnackBar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);




var getEpisodes = function getEpisodes(genreId) {
  var url = "".concat(_api_config_js__WEBPACK_IMPORTED_MODULE_0__["default"], "?q=").concat(genreId);
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (allEpisodes) {
    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.saveListToStorage)(allEpisodes);
    (0,_domView_js__WEBPACK_IMPORTED_MODULE_1__["default"])(allEpisodes);
    (0,_utils_showSnackBar_js__WEBPACK_IMPORTED_MODULE_2__["default"])('Data fetched successfully!');
  })["catch"](function (error) {
    console.error('Error:', error);
    (0,_utils_showSnackBar_js__WEBPACK_IMPORTED_MODULE_2__["default"])('Error fetching data!');
=======
/* harmony import */ var _utils_showSnackBar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);



var getTvShows = function getTvShows(genreId) {
  var url = "".concat(_api_config_js__WEBPACK_IMPORTED_MODULE_0__.API_URL, "?q=").concat(genreId);
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (allTvShows) {
    (0,_domView_js__WEBPACK_IMPORTED_MODULE_1__["default"])(allTvShows);
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
/* harmony export */   ENV_API: () => (/* binding */ ENV_API)
/* harmony export */ });
var API_URL = 'https://api.tvmaze.com/shows';
var ENV_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uxztWhnvNrKziR8Z8l6A/likes/';

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_recordLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);

var displayTvShows = function displayTvShows(allEpisodes) {
  var tvshowList = document.getElementById('tvshow-list');
  allEpisodes.forEach(function (tvshow) {
    var card = document.createElement('div');
    card.classList.add('card');
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
    likeCount.textContent = '0';
    cardContent.appendChild(likeCount);
    var likes = 0;
    likeIcon.addEventListener('click', function (event) {
      var card = event.target.closest('.card');
      if (card) {
        var index = Array.from(card.parentNode.children).indexOf(card);
        likes += 1;
        likeCount.textContent = likes;
        likesText.textContent = "Likes ".concat(likes);
        (0,_utils_recordLikes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(index);
      }
    });
    likesText.textContent = "Likes ".concat(likes);
    card.appendChild(cardContent);
    var commentButton = document.createElement('button');
    commentButton.classList.add('comment-btn');
    commentButton.textContent = 'Comments';
    card.appendChild(commentButton);
    tvshowList.appendChild(card);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTvShows);

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

var API_URL = 'https://api.tvmaze.com/shows';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API_URL);

/* harmony import */ var _api_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _showSnackBar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);


var recordLikes = function recordLikes(itemId) {
  var url = "".concat(_api_config_js__WEBPACK_IMPORTED_MODULE_0__.ENV_API).concat(itemId, "/likes/");
  console.log('itemId:', itemId);
  fetch(url, {
    method: 'POST'
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log('Like recorded:', data);
    (0,_showSnackBar_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Likes recorded successfully!');
  })["catch"](function (error) {
    (0,_showSnackBar_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Error recording likes!', error);
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
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var displayEpisodes = function displayEpisodes(allEpisodes) {
  var tvshowList = document.getElementById('tvshow-list');
  allEpisodes.forEach(function (episode) {
    var card = document.createElement('div');
    card.classList.add('card');
    var imageContainer = document.createElement('div');
    imageContainer.classList.add('image');
    var imageLink = document.createElement('a');
    imageLink.href = episode.url;
    var image = document.createElement('img');
    image.src = episode.image.medium;
    image.alt = episode.name;
    imageLink.appendChild(image);
    imageContainer.appendChild(imageLink);
    card.appendChild(imageContainer);
    var cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    var title = document.createElement('div');
    title.classList.add('title');
    title.textContent = episode.name;
    cardContent.appendChild(title);
    var likeIcon = document.createElement('i');
    likeIcon.classList.add('fa-regular', 'fa-heart');
    cardContent.appendChild(likeIcon);
    card.appendChild(cardContent);
    var commentButton = document.createElement('button');
    commentButton.classList.add('comment-btn');
    commentButton.textContent = 'Comments';
    card.appendChild(commentButton);
    tvshowList.appendChild(card);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayEpisodes);

/***/ }),
/* 14 */
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
/* 15 */
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