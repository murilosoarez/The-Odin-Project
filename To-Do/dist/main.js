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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n\n\nvar projects = []\n\nasync function DOMInteraction() {\n    startNewProject()\n}\n\nfunction startNewProject() {\n\n    class Project {\n        constructor (name, icon, tasks = []) {\n            this.name = name \n            this.icon = icon\n            this.tasks = tasks\n        }\n    }\n\n    const form = document.querySelector('form')\n\n    function getProjectForm() {\n\n        function addNewProject() {\n\n            const title = document.querySelector('#project').value \n            const icon = document.querySelector('select').value \n\n            const li = document.createElement('li')\n            li.textContent = icon\n\n            const button = document.createElement('button')\n            button.className = 'Project-Page'\n            button.id = title\n            button.innerHTML = title\n\n            li.append(button)\n\n            document.querySelector('ul').append(li)\n            projects.push(new Project(title, icon))\n            form.reset()\n\n        }\n\n        addNewProject()\n        openNewProject(projects)\n\n    }\n\n    const submit = document.querySelector('#submit')\n    submit.addEventListener('click', (e) => { \n        e.preventDefault()\n        getProjectForm() \n    })\n\n}\n\nfunction openNewProject(projects) {\n\n    const pages = document.querySelectorAll('.Project-Page')\n    const content = document.querySelector('.Right')\n    const rendering = (0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.render)()\n\n    for (let i = 0; i < pages.length; i++) {\n\n        pages[i].addEventListener('click', () =>{ \n            deleteContent(content)\n            rendering.project(projects[i].name, projects[i].icon, projects[i].tasks)\n        })\n\n    }\n\n}\n\nfunction deleteContent(content) {\n    while (content.hasChildNodes()) {\n        content.removeChild(content.firstChild)\n    }\n}\n\n\ndocument.addEventListener('DOMContentLoaded', DOMInteraction)\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\nfunction render() {\n    const content = document.querySelector('.Right')\n\n    // Renderiza a página de projeto\n    const project = (name, icon, tasks) => {\n\n        function createTitle() {\n            const h1 = document.createElement('h1')\n            h1.textContent = icon + name\n            content.append(h1)\n        }\n\n        function createInput() {\n\n            const form = document.createElement('form')\n            const section = document.createElement('section')\n\n            const label = document.createElement('label')\n            label.textContent = 'Insira a sua tarefa: '\n\n            const input = document.createElement('input')\n            input.setAttribute('type', 'text')\n            input.id = 'task'\n\n            const submit = document.createElement('input')\n            submit.setAttribute('type', 'submit')\n            submit.id = 'add-task'\n\n            section.append(label, input, submit)\n            form.append(section)\n            content.append(form)\n\n        }\n\n        function createTask() {\n\n            const section = document.createElement('section')\n            const label = document.createElement('label')\n            const task = document.createElement('input')\n\n            const input = document.querySelector('#task')\n            task.setAttribute('type', 'checkbox')\n            label.textContent = input.value\n\n            section.append(task, label)\n            content.append(section)\n\n            tasks.push({ data: section, done: 0 })\n\n        }\n\n        function renderTask(tasks) {\n            for (let i = 0; i < tasks.length; i++) {\n                content.append(tasks[i].data)\n            }\n        }\n          \n\n        createTitle()\n        createInput()\n        renderTask(tasks)\n      \n\n        const submit = document.querySelector('#add-task')\n        submit.addEventListener('click', (e) => {\n            e.preventDefault()\n            createTask()\n        })\n    }\n\n    return { project }\n}\n\n\n\n//# sourceURL=webpack://to-do/./src/modules/render.js?");

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