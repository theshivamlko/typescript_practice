// Drag & Drop Interfaces

namespace DDInterfaces1{ // not JS feature
    //will convert to object
    export interface Draggable {
        dragStartHandler(event: DragEvent): void;

        dragEndHandler(event: DragEvent): void;
    }

    export interface DragTarget {
        dragOverHandler(event: DragEvent): void;

        dropHandler(event: DragEvent): void;

        dragLeaveHandler(event: DragEvent): void;
    }

    export const var1: string = "Some Value";

    export class ABC {
        // Class definition here
    }

}