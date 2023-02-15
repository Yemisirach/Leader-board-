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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/add.js */ \"./src/modules/add.js\");\n\r\n\r\nconst add = new _modules_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nconst booksContainer = document.createElement(\"ul\");\r\nbooksContainer.classList = \"book-list\";\r\nconst heading = document.querySelector(\"h1\");\r\nconst mainContainer = document.querySelector(\"main\");\r\n\r\nlet allBooks = [];\r\nif (JSON.stringify(localStorage.getItem(\"book-List\") === null)) {\r\n  JSON.stringify(localStorage.setItem(\"book-List\", []));\r\n}\r\nif (JSON.stringify(localStorage.getItem(\"id\") === null)) {\r\n  JSON.stringify(localStorage.setItem(\"id\", JSON.stringify(0)));\r\n}\r\n\r\n// book list\r\nconst domDisplay = () => {\r\n  heading.innerText = \"All Awesome Books\";\r\n  booksContainer.innerHTML = \"\";\r\n  mainContainer.innerHTML = \"\";\r\n  allBooks = JSON.parse(localStorage.getItem(\"book-List\"));\r\n  allBooks.forEach((book) => {\r\n    const bookTitle = book.name;\r\n    const bookAuthor = book.author;\r\n    const bookId = book.id;\r\n    const removeBtn = document.createElement(\"button\");\r\n    removeBtn.innerText = \"Remove\";\r\n    removeBtn.addEventListener(\"click\", (e) => {\r\n      const { id } = e.target.parentNode;\r\n      remove.remove(id);\r\n      domDisplay();\r\n    });\r\n    const newBook = document.createElement(\"li\");\r\n    newBook.classList = \"book-bg\";\r\n    const newTitle = document.createElement(\"p\");\r\n    newTitle.innerHTML = `\"${bookTitle}\" by ${bookAuthor}`;\r\n    newBook.id = bookId;\r\n    newBook.appendChild(newTitle);\r\n    newBook.appendChild(removeBtn);\r\n    booksContainer.appendChild(newBook);\r\n    booksContainer.id = \"book-container\";\r\n    mainContainer.appendChild(booksContainer);\r\n  });\r\n};\r\n\r\n// list.addEventListener(\"click\", () => {\r\n//   domDisplay();\r\n// });\r\n\r\n// Add form page\r\naddBook.addEventListener(\"click\", (e) => {\r\n  e.preventDefault();\r\n  heading.innerHTML = \"Add a New Book\";\r\n  mainContainer.innerHTML = \"\";\r\n  const form = document.createElement(\"form\");\r\n  form.classList += \"book-form\";\r\n  //   titleInput\r\n  const titleInput = document.createElement(\"input\");\r\n  titleInput.classList += \"form-control\";\r\n  titleInput.type = \"text\";\r\n  titleInput.name = \"bookname\";\r\n  titleInput.id = \"title\";\r\n  titleInput.placeholder = \"Title\";\r\n  form.appendChild(titleInput);\r\n  //   authorInput\r\n  const authorInput = document.createElement(\"input\");\r\n  authorInput.classList += \"form-control\";\r\n  authorInput.type = \"text\";\r\n  authorInput.name = \"authorname\";\r\n  authorInput.id = \"author\";\r\n  authorInput.placeholder = \"Author\";\r\n  form.appendChild(authorInput);\r\n  //   addInput\r\n  const addBtn = document.createElement(\"button\");\r\n  addBtn.classList += \"add-Btn\";\r\n  addBtn.type = \"button\";\r\n  addBtn.innerText = \"Add\";\r\n  addBtn.id = \"btn\";\r\n  form.appendChild(addBtn);\r\n  allBooks = JSON.parse(JSON.stringify(localStorage.getItem(\"book-List\")));\r\n\r\n  mainContainer.appendChild(form);\r\n\r\n  addBtn.addEventListener(\"click\", () => {\r\n    add.add(titleInput.value, authorInput.value);\r\n    titleInput.value = \"\";\r\n    authorInput.value = \"\";\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Add)\n/* harmony export */ });\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ \"./src/modules/list.js\");\n\r\n\r\nlet allBooks;\r\nclass Add {\r\n  add = (bookTitle, bookAuthor) => {\r\n    if (!(bookTitle.length < 3 || bookAuthor.length < 3)) {\r\n      let id = JSON.parse(localStorage.getItem(\"id\"));\r\n      id += 1;\r\n      localStorage.setItem(\"id\", JSON.stringify(id));\r\n      const newBook = new _list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](id, bookTitle, bookAuthor);\r\n      if (localStorage.getItem(\"book-List\").length !== 0) {\r\n        allBooks = JSON.parse(localStorage.getItem(\"book-List\"));\r\n      } else {\r\n        allBooks = [];\r\n      }\r\n      allBooks.unshift(newBook);\r\n      localStorage.setItem(\"book-List\", JSON.stringify(allBooks));\r\n    }\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/add.js?");

/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Book)\n/* harmony export */ });\nclass Book {\r\n  constructor(id, name, author) {\r\n    this.id = id;\r\n    this.name = name;\r\n    this.author = author;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/list.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;