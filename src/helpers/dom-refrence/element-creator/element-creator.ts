import div from "./supported-tags/div"



const checkValidHtml = (str:string)=> {
   const tagName =  str.substring(1,4)
   return {
    isValidTag : str.startsWith(div.tag) && str.endsWith(div.end) ? true : false,
    tagName
   } 
}


export const elementCreator = (structure:string)=> {
   const {isValidTag, tagName } = checkValidHtml(structure)
  if(isValidTag){
    const createdTag =  document.createElement(tagName)
    return createdTag
  }
}




//a pattern to detect HTML tag amoung supported tag
//this pattern should first check out of the bigening of string it must start with valid tag
//< div > </div>
//a bunch of functions to check diffrent invalid syntax

//invalid syntax ---> <div | < div > | div> > | <Div>  ` <div> ` 