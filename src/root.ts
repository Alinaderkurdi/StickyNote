import './Style.scss'

import { getSingelDomElement } from './helpers/dom-refrence/dom-selector'
import { elementCreator } from './helpers/dom-refrence/element-creator/element-creator'
import app from './app'
//const ROOT_DOM =  getSingelDomElement('root')
const ROOT = getSingelDomElement('body')

const test = getSingelDomElement('div')
console.log(test)


const render = ()=> {
 // ROOT_DOM?.append(app())
}

render()

//aply all imported functions in or component in ROOT element 