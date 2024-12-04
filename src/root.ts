//top root file to render and call root div 

import './Style.scss'
import { getSingelDomElement } from './helpers/dom-refrence/dom-selector'
import app from './app'
const ROOT = document.querySelector('body')


const render = ()=> {
 // ROOT?.append(app())
 app()
}

render()

//aply all imported functions in or component in ROOT element 