
export  const getSingelDomElement = (elementClassName: string)=>{
    return document.querySelector(`.${elementClassName}`)
}


export const getDomElementsByParentName = (parentId: string, elementNameOrClassName : string)=>{
    const parent =  document.getElementById(parentId)
    return parent?.querySelectorAll(elementNameOrClassName)
}
