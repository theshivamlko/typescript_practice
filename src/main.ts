
import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";

import dash from 'lodash';


// or import like this
//import DragTarget = DDInterfaces1.DragTarget;
//import Draggable = DDInterfacesg1.Draggable;

// or import like this , namespace not needed
//import { Draggable, DragTarget } from './drag-drop-interfaces';

// or import like this ,put whole code in similar namespace label DDInterfaces1
// namespace DDInterfaces1{}





    new ProjectInput();
    new ProjectList('active');
    new ProjectList('finished');

    console.log(dash.shuffle([1,2,3]))

 

