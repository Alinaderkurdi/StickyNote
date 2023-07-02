export const pageTerminal = (elementRefrence, elementCalss, operation) => {
    if (operation === 'OPEN') {
        elementRefrence === null || elementRefrence === void 0 ? void 0 : elementRefrence.classList.add(elementCalss);
    }
    else {
        elementRefrence === null || elementRefrence === void 0 ? void 0 : elementRefrence.classList.remove(elementCalss);
    }
};
