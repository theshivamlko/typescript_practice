/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/base-components.ts":
/*!*******************************************!*\
  !*** ./src/components/base-components.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component)
/* harmony export */ });
// Component Base Class
class Component {
    constructor(templateId, hostElementId, insertAtStart, newElementId) {
        this.templateElement = document.getElementById(templateId);
        this.hostElement = document.getElementById(hostElementId);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        if (newElementId) {
            this.element.id = newElementId;
        }
        this.attach(insertAtStart);
    }
    attach(insertAtBeginning) {
        this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element);
    }
}


/***/ }),

/***/ "./src/components/project-input.ts":
/*!*****************************************!*\
  !*** ./src/components/project-input.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectInput: () => (/* binding */ ProjectInput)
/* harmony export */ });
/* harmony import */ var _state_project_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/project-state */ "./src/state/project-state.ts");
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/validation */ "./src/utils/validation.ts");
/* harmony import */ var _base_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-components */ "./src/components/base-components.ts");
/* harmony import */ var _decorator_auto_bind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorator/auto-bind */ "./src/decorator/auto-bind.ts");
/// <reference path="base-components.ts"/>
/// <reference path="../decorator/auto-bind.ts"/>
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// ProjectInput Class
class ProjectInput extends _base_components__WEBPACK_IMPORTED_MODULE_2__.Component {
    constructor() {
        super('project-input', 'app', true, 'user-input');
        this.titleInputElement = this.element.querySelector('#title');
        this.descriptionInputElement = this.element.querySelector('#description');
        this.peopleInputElement = this.element.querySelector('#people');
        this.configure();
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }
    renderContent() {
    }
    gatherUserInput() {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        const titleValidatable = {
            value: enteredTitle,
            required: true
        };
        const descriptionValidatable = {
            value: enteredDescription,
            required: true,
            minLength: 5
        };
        const peopleValidatable = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5
        };
        if (!(0,_utils_validation__WEBPACK_IMPORTED_MODULE_1__.validate)(titleValidatable) ||
            !(0,_utils_validation__WEBPACK_IMPORTED_MODULE_1__.validate)(descriptionValidatable) ||
            !(0,_utils_validation__WEBPACK_IMPORTED_MODULE_1__.validate)(peopleValidatable)) {
            alert('Invalid input, please try again!');
            return;
        }
        else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }
    clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            _state_project_state__WEBPACK_IMPORTED_MODULE_0__.projectState.addProject(title, desc, people);
            this.clearInputs();
        }
    }
}
__decorate([
    _decorator_auto_bind__WEBPACK_IMPORTED_MODULE_3__.autobind
], ProjectInput.prototype, "submitHandler", null);


/***/ }),

/***/ "./src/components/project-items.ts":
/*!*****************************************!*\
  !*** ./src/components/project-items.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectItem: () => (/* binding */ ProjectItem)
/* harmony export */ });
/* harmony import */ var _base_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-components */ "./src/components/base-components.ts");
/* harmony import */ var _decorator_auto_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator/auto-bind */ "./src/decorator/auto-bind.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// ProjectItem Class
class ProjectItem extends _base_components__WEBPACK_IMPORTED_MODULE_0__.Component {
    get persons() {
        if (this.project.people === 1) {
            return '1 person';
        }
        else {
            return `${this.project.people} persons`;
        }
    }
    constructor(hostId, project) {
        super('single-project', hostId, false, project.id);
        this.project = project;
        this.configure();
        this.renderContent();
    }
    dragStartHandler(event) {
        event.dataTransfer.setData('text/plain', this.project.id);
        event.dataTransfer.effectAllowed = 'move';
    }
    dragEndHandler(_) {
        console.log('DragEnd');
    }
    configure() {
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dragEndHandler);
    }
    renderContent() {
        this.element.querySelector('h2').textContent = this.project.title;
        this.element.querySelector('h3').textContent = this.persons + ' assigned';
        this.element.querySelector('p').textContent = this.project.description;
    }
}
__decorate([
    _decorator_auto_bind__WEBPACK_IMPORTED_MODULE_1__.autobind
], ProjectItem.prototype, "dragStartHandler", null);


/***/ }),

/***/ "./src/components/project-list.ts":
/*!****************************************!*\
  !*** ./src/components/project-list.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectList: () => (/* binding */ ProjectList)
/* harmony export */ });
/* harmony import */ var _base_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-components */ "./src/components/base-components.ts");
/* harmony import */ var _decorator_auto_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator/auto-bind */ "./src/decorator/auto-bind.ts");
/* harmony import */ var _models_project_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/project-module */ "./src/models/project-module.ts");
/* harmony import */ var _components_project_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/project-items */ "./src/components/project-items.ts");
/* harmony import */ var _state_project_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/project-state */ "./src/state/project-state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// ProjectList Class
class ProjectList extends _base_components__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor(type) {
        super('project-list', 'app', false, `${type}-projects`);
        this.type = type;
        this.assignedProjects = [];
        this.configure();
        this.renderContent();
    }
    dragOverHandler(event) {
        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            event.preventDefault();
            const listEl = this.element.querySelector('ul');
            listEl.classList.add('droppable');
        }
    }
    dropHandler(event) {
        const prjId = event.dataTransfer.getData('text/plain');
        _state_project_state__WEBPACK_IMPORTED_MODULE_4__.projectState.moveProject(prjId, this.type === 'active' ? _models_project_module__WEBPACK_IMPORTED_MODULE_2__.ProjectStatus.Active : _models_project_module__WEBPACK_IMPORTED_MODULE_2__.ProjectStatus.Finished);
    }
    dragLeaveHandler(_) {
        const listEl = this.element.querySelector('ul');
        listEl.classList.remove('droppable');
    }
    configure() {
        this.element.addEventListener('dragover', this.dragOverHandler);
        this.element.addEventListener('dragleave', this.dragLeaveHandler);
        this.element.addEventListener('drop', this.dropHandler);
        _state_project_state__WEBPACK_IMPORTED_MODULE_4__.projectState.addListener((projects) => {
            const relevantProjects = projects.filter(prj => {
                if (this.type === 'active') {
                    return prj.status === _models_project_module__WEBPACK_IMPORTED_MODULE_2__.ProjectStatus.Active;
                }
                return prj.status === _models_project_module__WEBPACK_IMPORTED_MODULE_2__.ProjectStatus.Finished;
            });
            this.assignedProjects = relevantProjects;
            this.renderProjects();
        });
    }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul').id = listId;
        this.element.querySelector('h2').textContent =
            this.type.toUpperCase() + ' PROJECTS';
    }
    renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`);
        listEl.innerHTML = '';
        for (const prjItem of this.assignedProjects) {
            new _components_project_items__WEBPACK_IMPORTED_MODULE_3__.ProjectItem(this.element.querySelector('ul').id, prjItem);
        }
    }
}
__decorate([
    _decorator_auto_bind__WEBPACK_IMPORTED_MODULE_1__.autobind
], ProjectList.prototype, "dragOverHandler", null);
__decorate([
    _decorator_auto_bind__WEBPACK_IMPORTED_MODULE_1__.autobind
], ProjectList.prototype, "dropHandler", null);
__decorate([
    _decorator_auto_bind__WEBPACK_IMPORTED_MODULE_1__.autobind
], ProjectList.prototype, "dragLeaveHandler", null);


/***/ }),

/***/ "./src/decorator/auto-bind.ts":
/*!************************************!*\
  !*** ./src/decorator/auto-bind.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   autobind: () => (/* binding */ autobind)
/* harmony export */ });
// autobind decorator
function autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}


/***/ }),

/***/ "./src/models/project-module.ts":
/*!**************************************!*\
  !*** ./src/models/project-module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   ProjectStatus: () => (/* binding */ ProjectStatus)
/* harmony export */ });
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
class Project {
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
}


/***/ }),

/***/ "./src/state/project-state.ts":
/*!************************************!*\
  !*** ./src/state/project-state.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectState: () => (/* binding */ ProjectState),
/* harmony export */   projectState: () => (/* binding */ projectState)
/* harmony export */ });
/* harmony import */ var _models_project_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project-module */ "./src/models/project-module.ts");

class State {
    constructor() {
        this.listeners = [];
    }
    addListener(listenerFn) {
        this.listeners.push(listenerFn);
    }
}
class ProjectState extends State {
    constructor() {
        super();
        this.projects = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
    addProject(title, description, numOfPeople) {
        const newProject = new _models_project_module__WEBPACK_IMPORTED_MODULE_0__.Project(Math.random().toString(), title, description, numOfPeople, _models_project_module__WEBPACK_IMPORTED_MODULE_0__.ProjectStatus.Active);
        this.projects.push(newProject);
        this.updateListeners();
    }
    moveProject(projectId, newStatus) {
        const project = this.projects.find(prj => prj.id === projectId);
        if (project && project.status !== newStatus) {
            project.status = newStatus;
            this.updateListeners();
        }
    }
    updateListeners() {
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}
const projectState = ProjectState.getInstance();


/***/ }),

/***/ "./src/utils/validation.ts":
/*!*********************************!*\
  !*** ./src/utils/validation.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validate: () => (/* binding */ validate)
/* harmony export */ });
function validate(validatableInput) {
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if (validatableInput.minLength != null &&
        typeof validatableInput.value === 'string') {
        isValid =
            isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if (validatableInput.maxLength != null &&
        typeof validatableInput.value === 'string') {
        isValid =
            isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    if (validatableInput.min != null &&
        typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    if (validatableInput.max != null &&
        typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    return isValid;
}


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_project_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/project-input */ "./src/components/project-input.ts");
/* harmony import */ var _components_project_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/project-list */ "./src/components/project-list.ts");


// or import like this
//import DragTarget = DDInterfaces1.DragTarget;
//import Draggable = DDInterfacesg1.Draggable;
// or import like this , namespace not needed
//import { Draggable, DragTarget } from './drag-drop-interfaces';
// or import like this ,put whole code in similar namespace label DDInterfaces1
// namespace DDInterfaces1{}
new _components_project_input__WEBPACK_IMPORTED_MODULE_0__.ProjectInput();
new _components_project_list__WEBPACK_IMPORTED_MODULE_1__.ProjectList('active');
new _components_project_list__WEBPACK_IMPORTED_MODULE_1__.ProjectList('finished');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMkRBQU8sNERBQTRELGlFQUFhO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04wRDtBQUNGO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx3QkFBd0I7QUFDbkM7QUFDQTtBQUNBLElBQUksbUVBQVk7QUFDaEIsSUFBSSxpRUFBVztBQUNmLElBQUksaUVBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X3ByYWN0aWNlLy4vc3JjL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnRzLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfcHJhY3RpY2UvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWlucHV0LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfcHJhY3RpY2UvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWl0ZW1zLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfcHJhY3RpY2UvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWxpc3QudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9wcmFjdGljZS8uL3NyYy9kZWNvcmF0b3IvYXV0by1iaW5kLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfcHJhY3RpY2UvLi9zcmMvbW9kZWxzL3Byb2plY3QtbW9kdWxlLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfcHJhY3RpY2UvLi9zcmMvc3RhdGUvcHJvamVjdC1zdGF0ZS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X3ByYWN0aWNlLy4vc3JjL3V0aWxzL3ZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9wcmFjdGljZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X3ByYWN0aWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X3ByYWN0aWNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9wcmFjdGljZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R5cGVzY3JpcHRfcHJhY3RpY2UvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb21wb25lbnQgQmFzZSBDbGFzc1xuZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IodGVtcGxhdGVJZCwgaG9zdEVsZW1lbnRJZCwgaW5zZXJ0QXRTdGFydCwgbmV3RWxlbWVudElkKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGVtcGxhdGVJZCk7XG4gICAgICAgIHRoaXMuaG9zdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChob3N0RWxlbWVudElkKTtcbiAgICAgICAgY29uc3QgaW1wb3J0ZWROb2RlID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0aGlzLnRlbXBsYXRlRWxlbWVudC5jb250ZW50LCB0cnVlKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gaW1wb3J0ZWROb2RlLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICBpZiAobmV3RWxlbWVudElkKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSBuZXdFbGVtZW50SWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hdHRhY2goaW5zZXJ0QXRTdGFydCk7XG4gICAgfVxuICAgIGF0dGFjaChpbnNlcnRBdEJlZ2lubmluZykge1xuICAgICAgICB0aGlzLmhvc3RFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChpbnNlcnRBdEJlZ2lubmluZyA/ICdhZnRlcmJlZ2luJyA6ICdiZWZvcmVlbmQnLCB0aGlzLmVsZW1lbnQpO1xuICAgIH1cbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJiYXNlLWNvbXBvbmVudHMudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vZGVjb3JhdG9yL2F1dG8tYmluZC50c1wiLz5cbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IHByb2plY3RTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9wcm9qZWN0LXN0YXRlXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZSB9IGZyb20gXCIuLi91dGlscy92YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9iYXNlLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IGF1dG9iaW5kIH0gZnJvbSBcIi4uL2RlY29yYXRvci9hdXRvLWJpbmRcIjtcbi8vIFByb2plY3RJbnB1dCBDbGFzc1xuZXhwb3J0IGNsYXNzIFByb2plY3RJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdwcm9qZWN0LWlucHV0JywgJ2FwcCcsIHRydWUsICd1c2VyLWlucHV0Jyk7XG4gICAgICAgIHRoaXMudGl0bGVJbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25JbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIHRoaXMucGVvcGxlSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZW9wbGUnKTtcbiAgICAgICAgdGhpcy5jb25maWd1cmUoKTtcbiAgICB9XG4gICAgY29uZmlndXJlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5zdWJtaXRIYW5kbGVyKTtcbiAgICB9XG4gICAgcmVuZGVyQ29udGVudCgpIHtcbiAgICB9XG4gICAgZ2F0aGVyVXNlcklucHV0KCkge1xuICAgICAgICBjb25zdCBlbnRlcmVkVGl0bGUgPSB0aGlzLnRpdGxlSW5wdXRFbGVtZW50LnZhbHVlO1xuICAgICAgICBjb25zdCBlbnRlcmVkRGVzY3JpcHRpb24gPSB0aGlzLmRlc2NyaXB0aW9uSW5wdXRFbGVtZW50LnZhbHVlO1xuICAgICAgICBjb25zdCBlbnRlcmVkUGVvcGxlID0gdGhpcy5wZW9wbGVJbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgICAgIGNvbnN0IHRpdGxlVmFsaWRhdGFibGUgPSB7XG4gICAgICAgICAgICB2YWx1ZTogZW50ZXJlZFRpdGxlLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25WYWxpZGF0YWJsZSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBlbnRlcmVkRGVzY3JpcHRpb24sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIG1pbkxlbmd0aDogNVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwZW9wbGVWYWxpZGF0YWJsZSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiArZW50ZXJlZFBlb3BsZSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiA1XG4gICAgICAgIH07XG4gICAgICAgIGlmICghdmFsaWRhdGUodGl0bGVWYWxpZGF0YWJsZSkgfHxcbiAgICAgICAgICAgICF2YWxpZGF0ZShkZXNjcmlwdGlvblZhbGlkYXRhYmxlKSB8fFxuICAgICAgICAgICAgIXZhbGlkYXRlKHBlb3BsZVZhbGlkYXRhYmxlKSkge1xuICAgICAgICAgICAgYWxlcnQoJ0ludmFsaWQgaW5wdXQsIHBsZWFzZSB0cnkgYWdhaW4hJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW2VudGVyZWRUaXRsZSwgZW50ZXJlZERlc2NyaXB0aW9uLCArZW50ZXJlZFBlb3BsZV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYXJJbnB1dHMoKSB7XG4gICAgICAgIHRoaXMudGl0bGVJbnB1dEVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbklucHV0RWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLnBlb3BsZUlucHV0RWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgICBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHVzZXJJbnB1dCA9IHRoaXMuZ2F0aGVyVXNlcklucHV0KCk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHVzZXJJbnB1dCkpIHtcbiAgICAgICAgICAgIGNvbnN0IFt0aXRsZSwgZGVzYywgcGVvcGxlXSA9IHVzZXJJbnB1dDtcbiAgICAgICAgICAgIHByb2plY3RTdGF0ZS5hZGRQcm9qZWN0KHRpdGxlLCBkZXNjLCBwZW9wbGUpO1xuICAgICAgICAgICAgdGhpcy5jbGVhcklucHV0cygpO1xuICAgICAgICB9XG4gICAgfVxufVxuX19kZWNvcmF0ZShbXG4gICAgYXV0b2JpbmRcbl0sIFByb2plY3RJbnB1dC5wcm90b3R5cGUsIFwic3VibWl0SGFuZGxlclwiLCBudWxsKTtcbiIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL2Jhc2UtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgYXV0b2JpbmQgfSBmcm9tIFwiLi4vZGVjb3JhdG9yL2F1dG8tYmluZFwiO1xuLy8gUHJvamVjdEl0ZW0gQ2xhc3NcbmV4cG9ydCBjbGFzcyBQcm9qZWN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgZ2V0IHBlcnNvbnMoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2plY3QucGVvcGxlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gJzEgcGVyc29uJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLnByb2plY3QucGVvcGxlfSBwZXJzb25zYDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihob3N0SWQsIHByb2plY3QpIHtcbiAgICAgICAgc3VwZXIoJ3NpbmdsZS1wcm9qZWN0JywgaG9zdElkLCBmYWxzZSwgcHJvamVjdC5pZCk7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuY29uZmlndXJlKCk7XG4gICAgICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xuICAgIH1cbiAgICBkcmFnU3RhcnRIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgdGhpcy5wcm9qZWN0LmlkKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XG4gICAgfVxuICAgIGRyYWdFbmRIYW5kbGVyKF8pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0RyYWdFbmQnKTtcbiAgICB9XG4gICAgY29uZmlndXJlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5kcmFnU3RhcnRIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLmRyYWdFbmRIYW5kbGVyKTtcbiAgICB9XG4gICAgcmVuZGVyQ29udGVudCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyJykudGV4dENvbnRlbnQgPSB0aGlzLnByb2plY3QudGl0bGU7XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdoMycpLnRleHRDb250ZW50ID0gdGhpcy5wZXJzb25zICsgJyBhc3NpZ25lZCc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdwJykudGV4dENvbnRlbnQgPSB0aGlzLnByb2plY3QuZGVzY3JpcHRpb247XG4gICAgfVxufVxuX19kZWNvcmF0ZShbXG4gICAgYXV0b2JpbmRcbl0sIFByb2plY3RJdGVtLnByb3RvdHlwZSwgXCJkcmFnU3RhcnRIYW5kbGVyXCIsIG51bGwpO1xuIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vYmFzZS1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBhdXRvYmluZCB9IGZyb20gXCIuLi9kZWNvcmF0b3IvYXV0by1iaW5kXCI7XG5pbXBvcnQgeyBQcm9qZWN0U3RhdHVzIH0gZnJvbSBcIi4uL21vZGVscy9wcm9qZWN0LW1vZHVsZVwiO1xuaW1wb3J0IHsgUHJvamVjdEl0ZW0gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9qZWN0LWl0ZW1zXCI7XG5pbXBvcnQgeyBwcm9qZWN0U3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvcHJvamVjdC1zdGF0ZVwiO1xuLy8gUHJvamVjdExpc3QgQ2xhc3NcbmV4cG9ydCBjbGFzcyBQcm9qZWN0TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IodHlwZSkge1xuICAgICAgICBzdXBlcigncHJvamVjdC1saXN0JywgJ2FwcCcsIGZhbHNlLCBgJHt0eXBlfS1wcm9qZWN0c2ApO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmFzc2lnbmVkUHJvamVjdHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb25maWd1cmUoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDb250ZW50KCk7XG4gICAgfVxuICAgIGRyYWdPdmVySGFuZGxlcihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyICYmIGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXSA9PT0gJ3RleHQvcGxhaW4nKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgbGlzdEVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG4gICAgICAgICAgICBsaXN0RWwuY2xhc3NMaXN0LmFkZCgnZHJvcHBhYmxlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZHJvcEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcHJqSWQgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuICAgICAgICBwcm9qZWN0U3RhdGUubW92ZVByb2plY3QocHJqSWQsIHRoaXMudHlwZSA9PT0gJ2FjdGl2ZScgPyBQcm9qZWN0U3RhdHVzLkFjdGl2ZSA6IFByb2plY3RTdGF0dXMuRmluaXNoZWQpO1xuICAgIH1cbiAgICBkcmFnTGVhdmVIYW5kbGVyKF8pIHtcbiAgICAgICAgY29uc3QgbGlzdEVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG4gICAgICAgIGxpc3RFbC5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wcGFibGUnKTtcbiAgICB9XG4gICAgY29uZmlndXJlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLmRyYWdPdmVySGFuZGxlcik7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZUhhbmRsZXIpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuZHJvcEhhbmRsZXIpO1xuICAgICAgICBwcm9qZWN0U3RhdGUuYWRkTGlzdGVuZXIoKHByb2plY3RzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWxldmFudFByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKHByaiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByai5zdGF0dXMgPT09IFByb2plY3RTdGF0dXMuQWN0aXZlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcHJqLnN0YXR1cyA9PT0gUHJvamVjdFN0YXR1cy5GaW5pc2hlZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5hc3NpZ25lZFByb2plY3RzID0gcmVsZXZhbnRQcm9qZWN0cztcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUHJvamVjdHMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IGxpc3RJZCA9IGAke3RoaXMudHlwZX0tcHJvamVjdHMtbGlzdGA7XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpLmlkID0gbGlzdElkO1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaDInKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICB0aGlzLnR5cGUudG9VcHBlckNhc2UoKSArICcgUFJPSkVDVFMnO1xuICAgIH1cbiAgICByZW5kZXJQcm9qZWN0cygpIHtcbiAgICAgICAgY29uc3QgbGlzdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy50eXBlfS1wcm9qZWN0cy1saXN0YCk7XG4gICAgICAgIGxpc3RFbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZm9yIChjb25zdCBwcmpJdGVtIG9mIHRoaXMuYXNzaWduZWRQcm9qZWN0cykge1xuICAgICAgICAgICAgbmV3IFByb2plY3RJdGVtKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpLmlkLCBwcmpJdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbl9fZGVjb3JhdGUoW1xuICAgIGF1dG9iaW5kXG5dLCBQcm9qZWN0TGlzdC5wcm90b3R5cGUsIFwiZHJhZ092ZXJIYW5kbGVyXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgYXV0b2JpbmRcbl0sIFByb2plY3RMaXN0LnByb3RvdHlwZSwgXCJkcm9wSGFuZGxlclwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGF1dG9iaW5kXG5dLCBQcm9qZWN0TGlzdC5wcm90b3R5cGUsIFwiZHJhZ0xlYXZlSGFuZGxlclwiLCBudWxsKTtcbiIsIi8vIGF1dG9iaW5kIGRlY29yYXRvclxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9iaW5kKF8sIF8yLCBkZXNjcmlwdG9yKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxNZXRob2QgPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIGNvbnN0IGFkakRlc2NyaXB0b3IgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgY29uc3QgYm91bmRGbiA9IG9yaWdpbmFsTWV0aG9kLmJpbmQodGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gYm91bmRGbjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGFkakRlc2NyaXB0b3I7XG59XG4iLCJleHBvcnQgdmFyIFByb2plY3RTdGF0dXM7XG4oZnVuY3Rpb24gKFByb2plY3RTdGF0dXMpIHtcbiAgICBQcm9qZWN0U3RhdHVzW1Byb2plY3RTdGF0dXNbXCJBY3RpdmVcIl0gPSAwXSA9IFwiQWN0aXZlXCI7XG4gICAgUHJvamVjdFN0YXR1c1tQcm9qZWN0U3RhdHVzW1wiRmluaXNoZWRcIl0gPSAxXSA9IFwiRmluaXNoZWRcIjtcbn0pKFByb2plY3RTdGF0dXMgfHwgKFByb2plY3RTdGF0dXMgPSB7fSkpO1xuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIHBlb3BsZSwgc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucGVvcGxlID0gcGVvcGxlO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQcm9qZWN0LCBQcm9qZWN0U3RhdHVzIH0gZnJvbSBcIi4uL21vZGVscy9wcm9qZWN0LW1vZHVsZVwiO1xuY2xhc3MgU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIH1cbiAgICBhZGRMaXN0ZW5lcihsaXN0ZW5lckZuKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXJGbik7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFByb2plY3RTdGF0ZSBleHRlbmRzIFN0YXRlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFByb2plY3RTdGF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG4gICAgYWRkUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIG51bU9mUGVvcGxlKSB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCksIHRpdGxlLCBkZXNjcmlwdGlvbiwgbnVtT2ZQZW9wbGUsIFByb2plY3RTdGF0dXMuQWN0aXZlKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICB0aGlzLnVwZGF0ZUxpc3RlbmVycygpO1xuICAgIH1cbiAgICBtb3ZlUHJvamVjdChwcm9qZWN0SWQsIG5ld1N0YXR1cykge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0cy5maW5kKHByaiA9PiBwcmouaWQgPT09IHByb2plY3RJZCk7XG4gICAgICAgIGlmIChwcm9qZWN0ICYmIHByb2plY3Quc3RhdHVzICE9PSBuZXdTdGF0dXMpIHtcbiAgICAgICAgICAgIHByb2plY3Quc3RhdHVzID0gbmV3U3RhdHVzO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMaXN0ZW5lcnMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGZvciAoY29uc3QgbGlzdGVuZXJGbiBvZiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgICAgICAgbGlzdGVuZXJGbih0aGlzLnByb2plY3RzLnNsaWNlKCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IHByb2plY3RTdGF0ZSA9IFByb2plY3RTdGF0ZS5nZXRJbnN0YW5jZSgpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbGlkYXRhYmxlSW5wdXQpIHtcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XG4gICAgaWYgKHZhbGlkYXRhYmxlSW5wdXQucmVxdWlyZWQpIHtcbiAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWQgJiYgdmFsaWRhdGFibGVJbnB1dC52YWx1ZS50b1N0cmluZygpLnRyaW0oKS5sZW5ndGggIT09IDA7XG4gICAgfVxuICAgIGlmICh2YWxpZGF0YWJsZUlucHV0Lm1pbkxlbmd0aCAhPSBudWxsICYmXG4gICAgICAgIHR5cGVvZiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICBpc1ZhbGlkID1cbiAgICAgICAgICAgIGlzVmFsaWQgJiYgdmFsaWRhdGFibGVJbnB1dC52YWx1ZS5sZW5ndGggPj0gdmFsaWRhdGFibGVJbnB1dC5taW5MZW5ndGg7XG4gICAgfVxuICAgIGlmICh2YWxpZGF0YWJsZUlucHV0Lm1heExlbmd0aCAhPSBudWxsICYmXG4gICAgICAgIHR5cGVvZiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICBpc1ZhbGlkID1cbiAgICAgICAgICAgIGlzVmFsaWQgJiYgdmFsaWRhdGFibGVJbnB1dC52YWx1ZS5sZW5ndGggPD0gdmFsaWRhdGFibGVJbnB1dC5tYXhMZW5ndGg7XG4gICAgfVxuICAgIGlmICh2YWxpZGF0YWJsZUlucHV0Lm1pbiAhPSBudWxsICYmXG4gICAgICAgIHR5cGVvZiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZCAmJiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlID49IHZhbGlkYXRhYmxlSW5wdXQubWluO1xuICAgIH1cbiAgICBpZiAodmFsaWRhdGFibGVJbnB1dC5tYXggIT0gbnVsbCAmJlxuICAgICAgICB0eXBlb2YgdmFsaWRhdGFibGVJbnB1dC52YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWQgJiYgdmFsaWRhdGFibGVJbnB1dC52YWx1ZSA8PSB2YWxpZGF0YWJsZUlucHV0Lm1heDtcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFByb2plY3RJbnB1dCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdC1pbnB1dFwiO1xuaW1wb3J0IHsgUHJvamVjdExpc3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3QtbGlzdFwiO1xuLy8gb3IgaW1wb3J0IGxpa2UgdGhpc1xuLy9pbXBvcnQgRHJhZ1RhcmdldCA9IERESW50ZXJmYWNlczEuRHJhZ1RhcmdldDtcbi8vaW1wb3J0IERyYWdnYWJsZSA9IERESW50ZXJmYWNlc2cxLkRyYWdnYWJsZTtcbi8vIG9yIGltcG9ydCBsaWtlIHRoaXMgLCBuYW1lc3BhY2Ugbm90IG5lZWRlZFxuLy9pbXBvcnQgeyBEcmFnZ2FibGUsIERyYWdUYXJnZXQgfSBmcm9tICcuL2RyYWctZHJvcC1pbnRlcmZhY2VzJztcbi8vIG9yIGltcG9ydCBsaWtlIHRoaXMgLHB1dCB3aG9sZSBjb2RlIGluIHNpbWlsYXIgbmFtZXNwYWNlIGxhYmVsIERESW50ZXJmYWNlczFcbi8vIG5hbWVzcGFjZSBEREludGVyZmFjZXMxe31cbm5ldyBQcm9qZWN0SW5wdXQoKTtcbm5ldyBQcm9qZWN0TGlzdCgnYWN0aXZlJyk7XG5uZXcgUHJvamVjdExpc3QoJ2ZpbmlzaGVkJyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=