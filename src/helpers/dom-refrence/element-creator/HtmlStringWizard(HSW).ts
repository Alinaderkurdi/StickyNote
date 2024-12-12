import tags from "./supported-tags/tags"


// HSF (HTML string format ) ==> `<div>hi</div>`
// HSW (HTML String Wizard ) the main library name 
// HC (HTML Constructor )  ==> the main returnd function to cretate Htlm 
// ie HTMLConstructor_HC(`div> hi {button()} </div>`) ==> inside of the button should call HC function and return 
// to its parent 




//this sections to create test functinos for regex 

//let str = "<div></div>";
//let pattern = "<div></div>";
//
//// Escape special characters in the pattern
//let escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//
//// Create a regex that matches the exact string
//let regex = new RegExp(`^${escapedPattern}$`);
//
//// Test the string
//let isExactMatch = regex.test(str);
//
//console.log(isExactMatch); // Output: true



const testpattern = /^[a-z]+$/ //to only expect lowercase characters






const reformatHSF = (HSF:string)=> {
   const removedSpaceHSF =  HSF.trimStart().trimEnd()
   return removedSpaceHSF
}



let  tagShape =  `<div></div>`


const matchTagPaatern = (removedSpaceHSF:string, HSFfirstLetter:string)=> {
   const escapedPattern = tagShape.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
   console.log(HSFfirstLetter)
   let testPatten = new RegExp(`^${escapedPattern}$`)// search amoung string

   const result =  testPatten.test(removedSpaceHSF)

   console.log(result)
}


const HSFsyntaxInspector = (HTMLstringformat_HSF:string)=> {
   const removedSpaceHSF = reformatHSF(HTMLstringformat_HSF)

   if(removedSpaceHSF[0] === '<' && testpattern.test(removedSpaceHSF[1])){
      matchTagPaatern(removedSpaceHSF,removedSpaceHSF[1])
   }else {

   }
}




export default function HTMLConstructor_HC(HTMLstringformat_HSF:string){
   const result =  HSFsyntaxInspector(HTMLstringformat_HSF)
   return result//this name should change !
}
