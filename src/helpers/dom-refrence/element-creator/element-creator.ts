import tags from "./supported-tags/tags";
import div from "./supported-tags/tags"



//const regexPattern = {
//  test: /^\s/
//}

//idea to test diffrernt scenario i can store all test patternt in object or array and test based on diffrernt pattern
//for same string and if detect invalid syntax for now return where error is occurred  

//this function is responsible for de


//const regex = /^</
//const regex = /^<\S/;


// HSF (HTML string format )
///HSW (HTML String Wizard )


const checkPattern = (pattern:string, str:string) => {
  // Escape special characters in the pattern
  const escapedPattern = pattern.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  
  // Create a regex for exact match
  const regex = new RegExp(`^${escapedPattern}$`);
  
  // Test the dynamic string
  return regex.test(str);
};

// Example usage
const pattern = "<div></div>";
const dynamicString1 = "div><div>";
//const dynamicString2 = "<span></span>";

console.log(checkPattern(pattern, dynamicString1)); // true
//console.log(checkPattern(pattern, dynamicString2)); // false


const reformatHSF = (HSF:string)=> {
  const removedSpaceHSF =  HSF.trimStart().trimEnd()
  return removedSpaceHSF
}



function createRegex(tage:string) {
  return new RegExp(`^<\\S*${tage}\\S*`);
}


const inValidSyntaxDetector = (HTMLstringformat:string)=> {//, tagName:string
  //console.log(HTMLstringformat)
 // if(/^<\S/.test(HTMLstringformat)){
 //   console.log('pass')
 //   // in this step 
 // }else {
 //   console.log(HTMLstringformat)
 // }
  console.log(createRegex('').test(HTMLstringformat))
}


//if the first character of the HSF is < and is not have any empty space check the tag name amoung 
// supported tags list 

//next step check the name amoung supported names

const checkValidHtml = (HTMLstringformat:string)=> {
  
  const removedSpaceHSF=  reformatHSF(HTMLstringformat)//step 1 
  const isValidSyntax = inValidSyntaxDetector(removedSpaceHSF)
  const tagName =  HTMLstringformat.substring(1,4) //this function should be dynamic to detect diffrernt tags !
 
  return {
   isValidTag : removedSpaceHSF.startsWith(tags[0].tagShape) && removedSpaceHSF.endsWith(tags[0].tagShape) ? true : false,
   tagName
  } 
}


export const elementCreator = (HTMLstringformat:string)=> {
  const { isValidTag, tagName } = checkValidHtml(HTMLstringformat)

  if(isValidTag){
    const createdTag =  document.createElement(tagName)
    return createdTag
  }
}
























//error detector for invalid syntax in string and provide fallback ui 
//a pattern to detect HTML tag amoung supported tag
//this pattern should first check out of the bigening of string it must start with valid tag
//< div > </div>
//a bunch of functions to check diffrent invalid syntax

//invalid syntax ---> <div | < div > | div> > | <Div>  ` <div> ` 



// console.log(HTMLstringformat[0])
//if(HTMLstringformat[0] !== '<'){
//  console.log('error!!!')
  //in this step should call function to show error where happend and the incorrect part!
//}else {
//  console.log('valid')
//}