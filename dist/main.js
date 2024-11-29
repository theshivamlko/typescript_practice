// or import like this, with namespace
/// <reference path="models/drag-drop-interfaces.ts"/>
/// <reference path="models/project-module.ts"/>
/// <reference path="state/project-state.ts"/>
/// <reference path="utils/validation.ts"/>
/// <reference path="decorator/auto-bind.ts"/>
/// <reference path="components/project-input.ts"/>
/// <reference path="components/project-items.ts"/>
/// <reference path="components/project-list.ts"/>
import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";
// or import like this
//import DragTarget = DDInterfaces1.DragTarget;
//import Draggable = DDInterfaces1.Draggable;
// or import like this , namespace not needed
//import { Draggable, DragTarget } from './drag-drop-interfaces';
// or import like this ,put whole code in similar namespace label DDInterfaces1
// namespace DDInterfaces1{}
new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
