var _a, _b, _c, _d, _e, _f, _g, _h;
import { getCurrentMousePosition as moveNoteBox } from "./FloatNote.js";
import * as domUtality from "./ElementRefrence.js";
import { pageTerminal as PageControler } from "./PageControler.js";
const testRadioButton = document.getElementById('test');
const radiobutton = testRadioButton === null || testRadioButton === void 0 ? void 0 : testRadioButton.querySelectorAll('input');
const colorButtonGroup = document.getElementById('color-button-note-bk');
let APPCLORBACKGROUND;
const addColorToNote = (headSectioncolor, mainSectionColor) => {
    const addNewNoteHead = document.querySelector('.add-new-head-section');
    const addNewNoteSection = document.querySelector('.add-new-note-section');
    if (APPCLORBACKGROUND === 'dark') {
        addNewNoteHead.style['background-color'] = headSectioncolor;
        addNewNoteSection.style['background-color'] = '#333333';
        addNewNoteSection.style['border-top'] = `3px; solid ${headSectioncolor}`;
    }
    else if (APPCLORBACKGROUND === 'light') {
        addNewNoteHead.style['background-color'] = headSectioncolor;
        addNewNoteSection.style['background-color'] = mainSectionColor;
    }
};
const getNoteColor = (e) => {
    addColorToNote(e.target.value, e.target.style['background-color']);
};
//const getValue = (event: any , callBack: (inputValue: string)=>{})=>{
//console.log(event)
//callBack(event.target.value)
//}
const upDateColorThem = (currentColorThem) => {
    APPCLORBACKGROUND = currentColorThem;
    console.log(currentColorThem);
    console.log(APPCLORBACKGROUND);
};
const getCurrentColorThem = (e) => {
    if (e.target.tagName === 'INPUT') {
        upDateColorThem(e.target.value);
    }
};
colorButtonGroup === null || colorButtonGroup === void 0 ? void 0 : colorButtonGroup.addEventListener('click', getNoteColor);
testRadioButton === null || testRadioButton === void 0 ? void 0 : testRadioButton.addEventListener('click', getCurrentColorThem);
(_a = domUtality.getSingelDomElement('hold-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('mousedown', () => {
    window.addEventListener('mousemove', moveNoteBox);
});
(_b = domUtality.getSingelDomElement('hold-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', moveNoteBox);
});
(_c = domUtality.getSingelDomElement('close-drop-down-bt')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
    PageControler(domUtality.getSingelDomElement('drop-down-section'), 'open-drop-down', 'CLOSE');
});
(_d = domUtality.getSingelDomElement('option-button')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {
    PageControler(domUtality.getSingelDomElement('drop-down-section'), 'open-drop-down', 'OPEN');
});
(_e = domUtality.getSingelDomElement('close-button')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', () => {
    PageControler(domUtality.getSingelDomElement('add-new-note-section'), 'opent-add-note-box', 'CLOSE');
});
(_f = domUtality.getSingelDomElement('add-new-note-button')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', () => {
    PageControler(domUtality.getSingelDomElement('add-new-note-section'), 'opent-add-note-box', 'OPEN');
});
(_g = domUtality.getSingelDomElement('back-button')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', () => {
    PageControler(domUtality.getSingelDomElement('settings-section'), 'opent-setting-section', 'CLOSE');
});
(_h = domUtality.getSingelDomElement('settings-button')) === null || _h === void 0 ? void 0 : _h.addEventListener('click', () => {
    PageControler(domUtality.getSingelDomElement('settings-section'), 'opent-setting-section', 'OPEN');
});
