/**
 * Defining ID variables
 */
const applicationTitleId = 'app-title';

/**
 * Defining style variables
*/
const marginPaddingReset = {
    margin: 0,
    padding: 0
};
const parentStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
};

const layoutWrapperStyle = {
    backgroundColor: 'red',
    width: '40vw',
    height: '80vh'
};

/**
 * Defining propety variables
 */
const applicationTitleProperties = {
    textContent: "Simple Notepad",
};

/**
 * Handling html elements
 */
const parent = document.getElementById('app-container');        //parent container
applyStyles(parent, { ...parentStyle });
applyStyles(document.body, { ...parentStyle, ...marginPaddingReset });
applyStyles(document.documentElement, { ...marginPaddingReset });

let applicationTitle = applyStyles(createHtmlElements('h2', applicationTitleId, {}, { ...applicationTitleProperties }));
parent.appendChild(applicationTitle);
let layoutWrapper = applyStyles(createHtmlElements('div', 'layoutWrapper'), { ...layoutWrapperStyle });
parent.appendChild(layoutWrapper);

function createHtmlElements (elementName, elementId, attributes = {}, properties = {}) {
    let newElement = document.createElement(elementName);
    newElement.setAttribute('id', elementId);
    let attributesList = Object.keys(attributes);
    if (attributesList.length > 0) {
        for (i = 0; i < attributesList.length; i++) {
            newElement.setAttribute(attributesList[i], attributes[attributesList[i]]);
        }
    }
    const propertiesList = Object.keys(properties);
    if (propertiesList.length > 0) {
        for (i = 0; i < propertiesList.length; i++) {
            newElement[propertiesList[i]] = properties[propertiesList[i]];
        }
    }
    return newElement;
}

function applyStyles (styleElement, styles = {}) {
    const styleList = Object.keys(styles);
    let styledElement = styleElement;
    if (styleList.length > 0) {
        for (i = 0; i < styleList.length; i++) {
            console.log(styles, styleList[i], styles[styleList[i]]);
            styledElement.style[styleList[i]] = styles[styleList[i]];
        }
    }
    return styledElement;
}