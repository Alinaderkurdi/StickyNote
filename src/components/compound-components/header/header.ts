//this component is responsible for return a component 
// when it get called render ui and logic


import { elementCreator } from "../../../helpers/dom-refrence/element-creator/element-creator"

const header = ()=> {
   console.log(elementCreator(`<div> wow </div>`))
}


export default header