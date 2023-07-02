
import { getCurrentMousePosition as moveNoteBox } from "./FloatNote.js";
import  * as  domUtality   from "./ElementRefrence.js";

import { pageTerminal as PageControler } from "./PageControler.js";



const testRadioButton = document.getElementById('test')
const radiobutton = testRadioButton?.querySelectorAll('input');
const colorButtonGroup = document.getElementById('color-button-note-bk')





let APPCLORBACKGROUND : string;



const addColorToNote = (headSectioncolor: string, mainSectionColor: string)=>{
   const addNewNoteHead = document.querySelector('.add-new-head-section')!
   const addNewNoteSection = document.querySelector('.add-new-note-section')!
   if(APPCLORBACKGROUND === 'dark'){
       addNewNoteHead.style['background-color'] = headSectioncolor;
       addNewNoteSection.style['background-color'] = '#333333';
       addNewNoteSection.style['border-top'] = `3px; solid ${headSectioncolor}`;
   }else if(APPCLORBACKGROUND === 'light'){
      addNewNoteHead.style['background-color'] = headSectioncolor;
      addNewNoteSection.style['background-color'] = mainSectionColor;
   }
}


const getNoteColor = (e: any)=>{//S-A1
   addColorToNote(e.target.value, e.target.style['background-color']);
}

//const getValue = (event: any , callBack: (inputValue: string)=>{})=>{
   //console.log(event)
   //callBack(event.target.value)
//}

const upDateColorThem = (currentColorThem : string)=>{
   APPCLORBACKGROUND = currentColorThem
  console.log(currentColorThem)
  console.log(APPCLORBACKGROUND)
}


const getCurrentColorThem = (e: any)=>{//S-A1
  if(e.target.tagName === 'INPUT'){
   upDateColorThem(e.target.value)
  }
}




colorButtonGroup?.addEventListener('click' , getNoteColor)


testRadioButton?.addEventListener('click', getCurrentColorThem)


domUtality.getSingelDomElement('hold-button')?.addEventListener('mousedown', ()=>{
   window.addEventListener('mousemove', moveNoteBox)
})

domUtality.getSingelDomElement('hold-button')?.addEventListener('mouseup', ()=>{
   window.removeEventListener('mousemove', moveNoteBox)
})


domUtality.getSingelDomElement('close-drop-down-bt')?.addEventListener('click', ()=>{
   PageControler(domUtality.getSingelDomElement('drop-down-section'), 'open-drop-down', 'CLOSE')
})

domUtality.getSingelDomElement('option-button')?.addEventListener('click', ()=>{
   PageControler(domUtality.getSingelDomElement('drop-down-section'), 'open-drop-down', 'OPEN')
})


domUtality.getSingelDomElement('close-button')?.addEventListener('click', ()=>{
   PageControler(domUtality.getSingelDomElement('add-new-note-section'), 'opent-add-note-box', 'CLOSE')
})

domUtality.getSingelDomElement('add-new-note-button')?.addEventListener('click', ()=>{
   PageControler(domUtality.getSingelDomElement('add-new-note-section'), 'opent-add-note-box','OPEN')
})

domUtality.getSingelDomElement('back-button')?.addEventListener('click', ()=>{
   PageControler(domUtality.getSingelDomElement('settings-section'), 'opent-setting-section', 'CLOSE')
})

domUtality.getSingelDomElement('settings-button')?.addEventListener('click', ()=>{
   PageControler(domUtality.getSingelDomElement('settings-section'), 'opent-setting-section', 'OPEN')
})

