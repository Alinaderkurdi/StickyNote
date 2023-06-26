//just simpel function to test app animation!!

const settingButton = document.querySelector('.settings-button');
const addNewNoteButton = document.querySelector('.add-new-note-button');
const settingSection = document.querySelector('.settings-section');
const addNewNoteBox = document.querySelector('.add-new-note-section');
const deleteBox = document.querySelector('.delete-box');
const closeNoteBt = document.querySelector('.close-button');
const settingBackButton = document.querySelector('.back-button');
const opendraopdownButton = document.querySelector('.option-button');
const dropDownSection = document.querySelector('.drop-down-section');
const closeDropDown = document.querySelector('.close-drop-down-bt');
const testRadioButton = document.getElementById('test')
const radiobutton = testRadioButton?.querySelectorAll('input');

const upDateColorThem = (currentColorThem : string)=>{
  console.log(currentColorThem)
}


const getCurrentColorThem = (e: any)=>{
  if(e.target.tagName === 'INPUT'){
   upDateColorThem(e.target.value)
  }
}




const pageTerminal = (elementRefrence : any, elementCalss: string, operation: string)=>{
   if(operation === 'OPEN'){
      elementRefrence?.classList.add(elementCalss)
   }else{
      elementRefrence?.classList.remove(elementCalss)
   }
}


//
const createNestedElement = (nestElement, parentElement)=>{
   let {addOrNot , ...newElementObject} = nestElement
   let parentElementRefrense = parentElement;
   for(let i = 0 ; i < newElementObject.numberOfElement ; i++){
       const nestElementName = document.createElement(newElementObject.elementName)
       nestElementName.className = newElementObject.elementscalssName[i]
       nestElementName.textContent = newElementObject.elementsTextContent[i]
       parentElementRefrense.appendChild(nestElementName)

   }
   return parentElementRefrense;
}

const createNewElement = (
   NameElment:string,
   elementCalssName:string,
   elementText:string| null = null,
   CreateChildElementObject:object = {}
)=>{
   console.log(CreateChildElementObject)
 // const test = {...CreateChildElementObject}
  //console.log(test)
  let newElement =  document.createElement(NameElment)!
   newElement.className = elementCalssName
   newElement.textContent = elementText
   return CreateChildElementObject.addOrNot ? createNestedElement(CreateChildElementObject, newElement) : newElement
}


 
const createNoteHolder = ()=>{
  return createNewElement('li', 'singel-note', null, {
      addOrNot: true,
      elementName : 'p',
      numberOfElement : 2,
      elementscalssName : [
         'note-date',
         'content'
      ],
      elementsTextContent :[
         'hi',
         'someDumy test'
      ]
   } )

}


testRadioButton?.addEventListener('click', getCurrentColorThem)


closeDropDown?.addEventListener('click', ()=>{
   pageTerminal(dropDownSection, 'open-drop-down', 'CLOSE')
})

opendraopdownButton?.addEventListener('click', ()=>{
   pageTerminal(dropDownSection, 'open-drop-down', 'OPEN')
})


settingBackButton?.addEventListener('click', ()=>{
   pageTerminal(settingSection, 'opent-setting-section', 'CLOSE')
})


closeNoteBt?.addEventListener('click', ()=>{
   pageTerminal(addNewNoteBox, 'opent-add-note-box', 'CLOSE')
})


addNewNoteButton?.addEventListener('click', ()=>{
   pageTerminal(addNewNoteBox, 'opent-add-note-box','OPEN');
})


settingButton?.addEventListener('click', ()=>{
   pageTerminal(settingSection, 'opent-setting-section', 'OPEN');
})

