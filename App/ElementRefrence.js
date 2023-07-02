export const getSingelDomElement = (elementClassName) => {
    return document.querySelector(`.${elementClassName}`);
};
export const getDomElementsByParentName = (parentId, elementNameOrClassName) => {
    const parent = document.getElementById(parentId);
    return parent === null || parent === void 0 ? void 0 : parent.querySelectorAll(elementNameOrClassName);
};
