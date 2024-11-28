"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("Hello World");
// working with numbers
function add(n1, n2) {
    return n1 + n2;
}
const number1 = 5;
const number2 = 2.8;
let number3 = '5';
let number3_1 = '5'; // once set string is set for other var update
console.log(add(number1, number2));
console.log(typeof number1);
console.log(typeof number2);
console.log(typeof number3);
const number4 = '5';
const number5 = true;
console.log(number4);
console.log(number5);
console.log(typeof number5);
console.log(typeof number5);
// Objects
const person = {
    name: "Shivam",
    age: 30
};
const p1 = {
    name: "Shivam",
    age: 30
};
console.log(person);
console.log(typeof person); // type object
console.log(person.name); // type object
const person2 = {
    name: "Shivam",
    age: 30
};
console.log(person2);
console.log(typeof person2);
const person3 = {
    name: "Shivam",
    age: 30
};
console.log(person3);
console.log(typeof person3);
// Arrays
console.log("Arrays ==========");
const person6 = {
    name: "Shivam",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    ranks: ['A+', 'S', 1]
};
console.log(person6);
console.log(typeof person6.hobbies);
console.log(typeof person6.ranks);
let favorite;
favorite = ["A", "B"];
favorite.push("C");
console.log(favorite);
console.log(favorite.length);
for (const i of favorite)
    console.log(i.toLowerCase());
console.log("Tuple ==========");
// Tuple
// Tuple is like a Record in Dart
let tuple = [1, "A"];
let tuple2;
// tuple.push(true) can accept given init type fo values only
console.log(tuple);
// you cannot assign values to tuple elements separately after the initial declaration
tuple2 = [200, "Q"];
const [var1, var2] = tuple2;
console.log(tuple2);
console.log(var1);
var myEnum;
(function (myEnum) {
    myEnum[myEnum["LOADING"] = 0] = "LOADING";
    myEnum[myEnum["RESULT"] = 2] = "RESULT";
    myEnum[myEnum["ERROR"] = 3] = "ERROR";
})(myEnum || (myEnum = {}));
// Default values are 0,1,2 , can be changes
console.log(myEnum);
console.log(myEnum.LOADING);
console.log(myEnum[1]);
// Any
let myArray1 = [1, "A", false];
console.log(myArray1);
console.log(myArray1[1]);
console.log(typeof myArray1[1]);
console.log(typeof myArray1);
console.log(typeof myArray1);
// Union type , ensures type safety
// To tell we are fine either data type ,number or string
// check2 will only accept given 2 values only
function combine(inp1, check, check2) {
    if (typeof inp1 === 'number') {
        console.log(inp1 + inp1);
    }
    else {
        console.log(inp1 + inp1);
    }
    if (check === "as-number") {
        console.log(+inp1 + +inp1); // + garantee as Number, if string then + return NaN
    }
    else if (check === "as-text") {
    }
}
combine("2", "as-number", "as-number");
combine(2, "as-text", "as-number");
const var7 = 100;
console.log(var7);
const p = { name: 'A', age: 1 };
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
// Functions
function add2(n1, n2) {
    return n1 + n2;
}
console.log('add2 ' + add2(2, 3));
let combineValues = add;
console.log(combineValues(1, 5));
let combineValues2;
combineValues2 = add;
let combineValues3;
// combineValues3=add // error
// Callback
function handler(n1, onClick) {
    let res = n1 + n1;
    let s = onClick(res);
    console.log(s);
}
handler("b", (s) => {
    console.log(s);
    return s;
});
const var12 = function () {
};
const var13 = () => {
};
const var14 = () => console.log("Inline func");
// b has default arguments, start from right
const var15 = (s, b = "B") => {
    console.log(s + b);
};
var15(1);
const var16 = (s, b) => {
    console.log(`${s} ${b}`);
};
var16(10);
var16(10, "CC");
// unknown
let var9;
let var10;
var9 = "A";
var9 = 11;
var10 = "B";
var10 = 10;
console.log(var9);
console.log(typeof var9);
console.log(var10);
console.log(typeof var10);
// never
function error(e) {
    throw { message: e };
}
try {
    var c = error("Some error");
    console.log(c);
}
catch (e) {
    console.log(e);
}
console.log("2222");
var var11 = 100; // once assigned type is fixed
() => {
    let old = "AAA";
};
// SPread
var list1 = [1, 2, 3];
var list2 = [...list1];
const map1 = { a: "A" };
const map2 = { ...map1 };
console.log(map2);
const var17 = (...numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
};
var17(1, 2, 3, 34, 4, 5);
// Classes
class Department {
    n;
    name = "DEFAULT VALUE";
    salary = 0;
    //    constructor() {
    //        console.log(`Department constructor1 ${this} ${this.name}`)
    //    }
    constructor(n) {
        this.n = n;
        this.name = n;
        console.log(`Department constructor2 ${this} ${this.name}`);
    }
}
var department = new Department("AA");
console.log(`department ${department.name}`);
//copy obj
const departmentCopy = { name: department.name };
console.log(`departmentCopy ${departmentCopy.name}`);
// Shared value in instances
const departmentCopy2 = { obj: department };
department.name = "BB";
console.log(`departmentCopy2 ${departmentCopy2.obj.name}`);
class ITDepartment extends Department {
    constructor() {
        super("IT");
    }
    display() {
        console.log(`display ${this.name}`);
    }
}
const itDepart = new ITDepartment();
console.log(`display ${itDepart.name}`);
const emp1 = {
    startDate: new Date(),
    name: 'MAX',
    privilage: ["AND"]
};
const emp2 = {
    startDate: new Date(),
    name: 'MAX'
};
console.log(`emp1 ${emp1.name} ${emp1.startDate}`);
function add3(e) {
    if ('privilage' in e) {
        return `Admin: ${e.privilage}`;
    }
    if ('startDate' in e) {
        return `Employee:`;
    }
    return "";
}
console.log(add3(emp1));
// Type cast
// Number to String
let num = 42;
let str = num.toString();
// String to Number
let strNum = "42";
let numFromStr = Number(strNum);
console.log(numFromStr);
// Integer to Float
let intNum = 42;
let floatNum = intNum + 0.01; // Explicit type assertion 0.00 not adding
console.log((floatNum));
// Float to Integer (Truncation)
let floatNum2 = 42.5;
let intNum2 = Math.floor(floatNum2);
console.log(intNum2);
const errorBag = {
    id: "111",
    email: 'shivam@gmail.com',
};
// To check later
//function sum(a: string, b: string): string;
//function sum(a: number, b: string): string;
//function sum(a: ElevatedEmployee2, b: ElevatedEmployee2): any {
//    if ('props' in a) {
//        return "${a.toString()}" + "${b.toString()}";
//    } else if ('props3' in a) {
//        return "2222";
//    } else {
//        const a1: ElevatedEmployee2 = {
//            name: 'John Doe',
//            startDate: new Date()
//        };
//        return a1;
//    }
//}
//
//console.log(sum(1, "2"));
//console.log(sum("1", "2"));
//sum(emp2, emp2);
const userData = {
    id: '1',
    job: { title: "CEO" }
};
// console.log(userData?.abc ?? 'default value')
let user1;
const user2 = '';
var user4 = user1 || 'DEFAULT'; // here user1 is undefined so default
var user5 = user2 || 'DEFAULT'; // here user1 is empty so default
var user6 = user2 ?? 'DEFAULT'; // here user1 is empty so default
console.log(user1 ?? 'user1 default value'); // check null or undefined
console.log(user2 ?? 'user2 default value');
console.log(user4 ?? 'user4 default value');
console.log(user5 ?? 'user5 default value');
console.log(user6 ?? 'user6 default value');
// Generics
const names = ['MAX', 'Mannual'];
names.forEach((s) => {
    console.log(`names ${s}`);
});
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("DONE");
    }, 1000);
});
promise.then((r) => {
    console.log(`promise ${r}`);
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: "Shivam" }, { age: "31" });
console.log(`promise ${mergeObj.age} ${typeof mergeObj}`);
function countAndPrint(element) {
    let description = 'Got no value';
    if (element.length > 0) {
        description = `Got ${element.length} value`;
    }
    return [element, description];
}
function extract(obj, key) {
    return 'Value: ' + obj[key];
}
console.log(extract({ name: 'Max' }, "name"));
function createCourseGoal(title, description, date) {
    // Make compulsory param as partial to be initialized later
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.date = date;
    return courseGoal;
}
var course1 = createCourseGoal('Shivam', 'string', new Date());
console.log(`course1 ${course1.title} ${course1.date}`);
// Readonly
const names2 = ['A', 'B'];
// Decorator
//function  Logger(target:Function){
function Logger(param) {
    return function (target) {
        console.log('Logger...'); // prints first before Person2()
        console.log(target);
        console.log(param);
    };
}
function Log(target, property) {
    console.log("Log...");
    console.log(property);
    console.log(target);
}
let Person2 = class Person2 {
    name = 'Decorator';
    constructor() {
        console.log('Creating person object...');
    }
};
__decorate([
    Log
], Person2.prototype, "name", void 0);
Person2 = __decorate([
    Logger('PARAM1')
], Person2);
const pers = new Person2();
console.log(pers);
// Drag & Drop Interfaces
var DDInterfaces1;
(function (DDInterfaces1) {
    DDInterfaces1.var1 = "Some Value";
    class ABC {
    }
    DDInterfaces1.ABC = ABC;
})(DDInterfaces1 || (DDInterfaces1 = {}));
var DDInterfaces1;
(function (DDInterfaces1) {
    let ProjectStatus;
    (function (ProjectStatus) {
        ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
        ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
    })(ProjectStatus = DDInterfaces1.ProjectStatus || (DDInterfaces1.ProjectStatus = {}));
    class Project {
        id;
        title;
        description;
        people;
        status;
        constructor(id, title, description, people, status) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.people = people;
            this.status = status;
        }
    }
    DDInterfaces1.Project = Project;
})(DDInterfaces1 || (DDInterfaces1 = {}));
var DDInterfaces1;
(function (DDInterfaces1) {
    class State {
        listeners = [];
        addListener(listenerFn) {
            this.listeners.push(listenerFn);
        }
    }
    class ProjectState extends State {
        projects = [];
        static instance;
        constructor() {
            super();
        }
        static getInstance() {
            if (this.instance) {
                return this.instance;
            }
            this.instance = new ProjectState();
            return this.instance;
        }
        addProject(title, description, numOfPeople) {
            const newProject = new DDInterfaces1.Project(Math.random().toString(), title, description, numOfPeople, DDInterfaces1.ProjectStatus.Active);
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
    DDInterfaces1.ProjectState = ProjectState;
    DDInterfaces1.projectState = ProjectState.getInstance();
})(DDInterfaces1 || (DDInterfaces1 = {}));
var DDInterfaces1;
(function (DDInterfaces1) {
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
    DDInterfaces1.validate = validate;
})(DDInterfaces1 || (DDInterfaces1 = {}));
var DDInterfaces1;
(function (DDInterfaces1) {
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
    DDInterfaces1.autobind = autobind;
})(DDInterfaces1 || (DDInterfaces1 = {}));
var DDInterfaces1;
(function (DDInterfaces1) {
    // Component Base Class
    class Component {
        templateElement;
        hostElement;
        element;
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
    DDInterfaces1.Component = Component;
})(DDInterfaces1 || (DDInterfaces1 = {}));
/// <reference path="base-components.ts"/>
/// <reference path="../decorator/auto-bind.ts"/>
/// <reference path="../utils/validation.ts>
/// <reference path="../state/project-state.ts>
var DDInterfaces1;
(function (DDInterfaces1) {
    // ProjectInput Class
    class ProjectInput extends DDInterfaces1.Component {
        titleInputElement;
        descriptionInputElement;
        peopleInputElement;
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
            if (!DDInterfaces1.validate(titleValidatable) ||
                !DDInterfaces1.validate(descriptionValidatable) ||
                !DDInterfaces1.validate(peopleValidatable)) {
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
                DDInterfaces1.projectState.addProject(title, desc, people);
                this.clearInputs();
            }
        }
    }
    __decorate([
        DDInterfaces1.autobind
    ], ProjectInput.prototype, "submitHandler", null);
    DDInterfaces1.ProjectInput = ProjectInput;
})(DDInterfaces1 || (DDInterfaces1 = {}));
/// <reference path="base-components.ts"/>
/// <reference path="../decorator/auto-bind.ts"/>
/// <reference path="../models/drag-drop-interfaces.ts"/>
var DDInterfaces1;
(function (DDInterfaces1) {
    // ProjectItem Class
    class ProjectItem extends DDInterfaces1.Component {
        project;
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
        DDInterfaces1.autobind
    ], ProjectItem.prototype, "dragStartHandler", null);
    DDInterfaces1.ProjectItem = ProjectItem;
})(DDInterfaces1 || (DDInterfaces1 = {}));
/// <reference path="base-components.ts"/>
/// <reference path="../decorator/auto-bind.ts"/>
/// <reference path="../state/project-state.ts>
/// <reference path="../models/drag-drop-interfaces.ts>
var DDInterfaces1;
(function (DDInterfaces1) {
    // ProjectList Class
    class ProjectList extends DDInterfaces1.Component {
        type;
        assignedProjects;
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
            DDInterfaces1.projectState.moveProject(prjId, this.type === 'active' ? DDInterfaces1.ProjectStatus.Active : DDInterfaces1.ProjectStatus.Finished);
        }
        dragLeaveHandler(_) {
            const listEl = this.element.querySelector('ul');
            listEl.classList.remove('droppable');
        }
        configure() {
            this.element.addEventListener('dragover', this.dragOverHandler);
            this.element.addEventListener('dragleave', this.dragLeaveHandler);
            this.element.addEventListener('drop', this.dropHandler);
            DDInterfaces1.projectState.addListener((projects) => {
                const relevantProjects = projects.filter(prj => {
                    if (this.type === 'active') {
                        return prj.status === DDInterfaces1.ProjectStatus.Active;
                    }
                    return prj.status === DDInterfaces1.ProjectStatus.Finished;
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
                new DDInterfaces1.ProjectItem(this.element.querySelector('ul').id, prjItem);
            }
        }
    }
    __decorate([
        DDInterfaces1.autobind
    ], ProjectList.prototype, "dragOverHandler", null);
    __decorate([
        DDInterfaces1.autobind
    ], ProjectList.prototype, "dropHandler", null);
    __decorate([
        DDInterfaces1.autobind
    ], ProjectList.prototype, "dragLeaveHandler", null);
    DDInterfaces1.ProjectList = ProjectList;
})(DDInterfaces1 || (DDInterfaces1 = {}));
/// <reference path="models/drag-drop-interfaces.ts"/>
/// <reference path="models/project-module.ts"/>
/// <reference path="state/project-state.ts"/>
/// <reference path="utils/validation.ts"/>
/// <reference path="decorator/auto-bind.ts"/>
/// <reference path="components/project-input.ts"/>
/// <reference path="components/project-items.ts"/>
/// <reference path="components/project-list.ts"/>
// or import like this
// or import like this
//import DragTarget = DDInterfaces1.DragTarget;
//import Draggable = DDInterfaces1.Draggable;
// or import like this , namespace not needed
//import { Draggable, DragTarget } from './drag-drop-interfaces';
// or import like this ,put whole code in similar namespace label DDInterfaces1
// namespace DDInterfaces1{}
var DDInterfaces1;
(function (DDInterfaces1) {
    new DDInterfaces1.ProjectInput();
    new DDInterfaces1.ProjectList('active');
    new DDInterfaces1.ProjectList('finished');
})(DDInterfaces1 || (DDInterfaces1 = {}));
