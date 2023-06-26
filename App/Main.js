"use strict";
//just simpel function to test app animation!!
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
const testRadioButton = document.getElementById('test');
const radiobutton = testRadioButton === null || testRadioButton === void 0 ? void 0 : testRadioButton.querySelectorAll('input');
const upDateColorThem = (currentColorThem) => {
    console.log(currentColorThem);
};
const getCurrentColorThem = (e) => {
    if (e.target.tagName === 'INPUT') {
        upDateColorThem(e.target.value);
    }
};
const pageTerminal = (elementRefrence, elementCalss, operation) => {
    if (operation === 'OPEN') {
        elementRefrence === null || elementRefrence === void 0 ? void 0 : elementRefrence.classList.add(elementCalss);
    }
    else {
        elementRefrence === null || elementRefrence === void 0 ? void 0 : elementRefrence.classList.remove(elementCalss);
    }
};
//
const createNestedElement = (nestElement, parentElement) => {
    let { addOrNot } = nestElement, newElementObject = __rest(nestElement, ["addOrNot"]);
    let parentElementRefrense = parentElement;
    for (let i = 0; i < newElementObject.numberOfElement; i++) {
        const nestElementName = document.createElement(newElementObject.elementName);
        nestElementName.className = newElementObject.elementscalssName[i];
        nestElementName.textContent = newElementObject.elementsTextContent[i];
        parentElementRefrense.appendChild(nestElementName);
    }
    return parentElementRefrense;
};
const createNewElement = (NameElment, elementCalssName, elementText = null, CreateChildElementObject = {}) => {
    console.log(CreateChildElementObject);
    // const test = {...CreateChildElementObject}
    //console.log(test)
    let newElement = document.createElement(NameElment);
    newElement.className = elementCalssName;
    newElement.textContent = elementText;
    return CreateChildElementObject.addOrNot ? createNestedElement(CreateChildElementObject, newElement) : newElement;
};
const createNoteHolder = () => {
    return createNewElement('li', 'singel-note', null, {
        addOrNot: true,
        elementName: 'p',
        numberOfElement: 2,
        elementscalssName: [
            'note-date',
            'content'
        ],
        elementsTextContent: [
            'hi',
            'someDumy test'
        ]
    });
};
testRadioButton === null || testRadioButton === void 0 ? void 0 : testRadioButton.addEventListener('click', getCurrentColorThem);
closeDropDown === null || closeDropDown === void 0 ? void 0 : closeDropDown.addEventListener('click', () => {
    pageTerminal(dropDownSection, 'open-drop-down', 'CLOSE');
});
opendraopdownButton === null || opendraopdownButton === void 0 ? void 0 : opendraopdownButton.addEventListener('click', () => {
    pageTerminal(dropDownSection, 'open-drop-down', 'OPEN');
});
settingBackButton === null || settingBackButton === void 0 ? void 0 : settingBackButton.addEventListener('click', () => {
    pageTerminal(settingSection, 'opent-setting-section', 'CLOSE');
});
closeNoteBt === null || closeNoteBt === void 0 ? void 0 : closeNoteBt.addEventListener('click', () => {
    pageTerminal(addNewNoteBox, 'opent-add-note-box', 'CLOSE');
});
addNewNoteButton === null || addNewNoteButton === void 0 ? void 0 : addNewNoteButton.addEventListener('click', () => {
    pageTerminal(addNewNoteBox, 'opent-add-note-box', 'OPEN');
});
settingButton === null || settingButton === void 0 ? void 0 : settingButton.addEventListener('click', () => {
    pageTerminal(settingSection, 'opent-setting-section', 'OPEN');
});
