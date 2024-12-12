  //this component is responsible for return a component 
// when it get called render ui and logic
import HTMLConstructor_HC from "../../../helpers/dom-refrence/element-creator/HtmlStringWizard(HSW)"


const header = ()=> {
  // console.log(elementCreator(`<div> wow </div>`))
  console.log(HTMLConstructor_HC(`<div></div>`))
  console.log(HTMLConstructor_HC(`<button> clic ME </button>`))
}


export default header


//just to rember ! what i need
// a header(`<header></header>`)