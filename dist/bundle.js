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

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usersData\": () => (/* binding */ usersData)\n/* harmony export */ });\nconst usersData = [\r\n  {\r\n    fullName: 'Jenny Wilson',\r\n    gender: 'female',\r\n    age: 37,\r\n    contentTopics: 'Music, TV, Film & Animation',\r\n    socialMedia: ['facebook', 'instagram', 'twitter']\r\n  },\r\n  {\r\n    fullName: 'Courtney Henry',\r\n    gender: 'female',\r\n    age: 23,\r\n    contentTopics: 'Arts, Culture & Society',\r\n    socialMedia: ['facebook', 'instagram', 'twitter']\r\n  },\r\n  {\r\n    fullName: 'Savannah Nguyen',\r\n    gender: 'male',\r\n    age: 28,\r\n    contentTopics: 'Culinary & Food',\r\n    socialMedia: ['youtube', 'facebook']\r\n  },\r\n  {\r\n    fullName: 'Jenny Wilson',\r\n    gender: 'female',\r\n    age: 37,\r\n    contentTopics: 'Travelling & Outdoors',\r\n    socialMedia: ['youtube', 'instagram', 'pinterest']\r\n  },\r\n  {\r\n    fullName: 'Cameron Williamson',\r\n    gender: 'male',\r\n    age: 23,\r\n    contentTopics: 'Education, Science & Teсhno...',\r\n    socialMedia: ['instagram']\r\n  },\r\n  {\r\n    fullName: 'Kristin Watson',\r\n    gender: 'female',\r\n    age: 21,\r\n    contentTopics: 'Culinary & Food',\r\n    socialMedia: ['youtube', 'instagram', 'twitter']\r\n  },\r\n  {\r\n    fullName: 'Wade Warren',\r\n    gender: 'female',\r\n    age: 48,\r\n    contentTopics: 'Education',\r\n    socialMedia: ['instagram', 'facebook']\r\n  },\r\n  {\r\n    fullName: 'Darrell Steward',\r\n    gender: 'male',\r\n    age: 21,\r\n    contentTopics: 'Travelling & Outdoors',\r\n    socialMedia: ['instagram', 'facebook', 'tik-tok']\r\n  },\r\n  {\r\n    fullName: 'National Geographic',\r\n    gender: 'TV Channel',\r\n    contentTopics: 'TV, Film & Animation',\r\n    socialMedia: ['instagram', 'facebook', 'twitter']\r\n  },\r\n  {\r\n    fullName: 'Samsung US',\r\n    gender: 'Brand',\r\n    contentTopics: 'Product Reviewing',\r\n    socialMedia: ['facebook', 'instagram', 'twitter']\r\n  },\r\n  {\r\n    fullName: 'CGTN',\r\n    gender: 'TV Channel',\r\n    contentTopics: 'Travelling & Outdoors',\r\n    socialMedia: ['instagram', 'facebook', 'pinterest']\r\n  },\r\n  {\r\n    fullName: 'Puma',\r\n    gender: 'Brand',\r\n    contentTopics: 'Sport & Athletics',\r\n    socialMedia: ['instagram', 'facebook', 'tik-tok']\r\n  },\r\n  {\r\n    fullName: 'Nike',\r\n    gender: 'Brand',\r\n    contentTopics: 'Sport & Athletics',\r\n    socialMedia: ['instagram', 'facebook', 'twitter']\r\n  },\r\n  {\r\n    fullName: 'Adidas',\r\n    gender: 'Brand',\r\n    contentTopics: 'Sport & Athletics',\r\n    socialMedia: ['instagram', 'facebook', 'youtube']\r\n  },\r\n  {\r\n    fullName: 'Asics',\r\n    gender: 'Brand',\r\n    contentTopics: 'Sport & Athletics',\r\n    socialMedia: ['instagram', 'facebook', 'twitter']\r\n  },\r\n  {\r\n    fullName: 'New Balance',\r\n    gender: 'Brand',\r\n    contentTopics: 'Sport & Athletics',\r\n    socialMedia: ['instagram', 'facebook', 'twitter']\r\n  },\r\n  {\r\n    fullName: 'Under Armor',\r\n    gender: 'Brand',\r\n    contentTopics: 'Sport & Athletics',\r\n    socialMedia: ['instagram', 'facebook', 'twitter']\r\n  },\r\n  {\r\n    fullName: 'Mercedes',\r\n    gender: 'Brand',\r\n    contentTopics: 'Sport & Athletics',\r\n    socialMedia: ['instagram', 'facebook', 'twitter']\r\n  },\r\n  {\r\n    fullName: 'BMW',\r\n    gender: 'Brand',\r\n    contentTopics: 'Sport & Athletics',\r\n    socialMedia: ['instagram', 'facebook', 'twitter']\r\n  },\r\n  {\r\n    fullName: 'Tesla',\r\n    gender: 'Brand',\r\n    contentTopics: 'Sport & Athletics',\r\n    socialMedia: ['instagram', 'facebook', 'twitter']\r\n  },\r\n]\r\n\n\n//# sourceURL=webpack://test/./data.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./data.js\");\n\r\n\r\nconst container = document.querySelector('.container');\r\n\r\nfunction renderCards() {\r\n  let postIndex = 1;\r\n\r\n  _data__WEBPACK_IMPORTED_MODULE_0__.usersData.forEach((data, key) => {\r\n    const {fullName, gender, age, contentTopics, socialMedia} = data\r\n\r\n    const card = `\r\n      <div class=\"card\">\r\n        <div class=\"posts\">\r\n          <img class=\"post-img\" src=\"./assets/posts/${postIndex++}.png\" alt=\"\">\r\n          <img class=\"post-img\" src=\"./assets/posts/${postIndex++}.png\" alt=\"\">\r\n        </div>\r\n        <a class=\"link\" href=\"#\">\r\n          <div class=\"avatar\">\r\n            <img class=\"avatar-img\" src=\"./assets/avatars/${++key}.jpg\" alt=\"\">\r\n          </div>\r\n          <div class=\"personal-data\">\r\n            <h2 class=\"full-name\">${fullName}</h2>\r\n            <div>\r\n              <span class=\"gender\">${gender}</span><span class=\"age\">${age ? `, ${age}` : ''}</span>\r\n            </div>\r\n            <p class=\"content-topics\">${contentTopics}</p>\r\n          </div>\r\n          <hr>\r\n        </a>\r\n        <div class=\"social-handle\">${renderSocialMedia(socialMedia)}\r\n        </div>\r\n      </div>\r\n    `\r\n\r\n    container.innerHTML = container.innerHTML + card\r\n  })\r\n}\r\n\r\n\r\n\r\nfunction renderSocialMedia(arr) {\r\n  let socialHandle = '';\r\n\r\n  arr.forEach((value) => {\r\n     const socialMediaData = `\r\n       <div class=\"handle\">\r\n         <img class=\"social-icon\" src=\"./assets/icon-${value}.svg\" alt=\"${value}\">\r\n         <p>188.4M</p>\r\n       </div>\r\n     `\r\n     socialHandle += socialMediaData\r\n  })\r\n\r\n  return socialHandle\r\n}\r\n\r\nrenderCards()\r\n\n\n//# sourceURL=webpack://test/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;