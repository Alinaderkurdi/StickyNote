import { getSingelDomElement } from "./ElementRefrence.js";

const moveNoteBox = (xPosition:number, yPosition:number)=>{
   let xPos = (xPosition - 83).toString();
   let yPos = (yPosition - 105).toString();
   getSingelDomElement('add-new-note-section').style.top = `${yPos}px`;
   getSingelDomElement('add-new-note-section').style.left = `${xPos}px`;
}


export const getCurrentMousePosition = (e: any)=>{
    moveNoteBox(
       e.clientX,
       e.clientY
    )
}
 