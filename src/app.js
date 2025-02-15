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
    width: '35vw',
    height: '80vh',
    borderRadius: '15px',
    position: 'relative',
    display: 'flex',
    // justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '25px 0',
    overflow: 'auto',
    // flexGrow: 1,
    // scrollBar
};

const addTaskButtonStyle = {
    width: '4rem',
    height: '4rem',
    borderRadius: '5rem',
    border: 'none',
    position: 'sticky',
    bottom: '10%',
    right: '10%',
    backgroundColor: 'orange',
    // zIndex: 1000,
    // color: 'rose'
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
applyStyles(parent, { ...parentStyle, flexDirection: 'column' });
applyStyles(document.body, { ...parentStyle, ...marginPaddingReset });
applyStyles(document.documentElement, { ...marginPaddingReset });

let applicationTitle = applyStyles(createHtmlElements('h2', applicationTitleId, {}, { ...applicationTitleProperties }));
parent.appendChild(applicationTitle);
let layoutWrapper = applyStyles(createHtmlElements('div', 'layoutWrapper', { className: 'scrollableContainer' }), { ...layoutWrapperStyle });
parent.appendChild(layoutWrapper);
applyPseudoStyles(layoutWrapper, {'::-webkit-scrollbar': { display: 'none' }});


let taskListItems = listTask();
console.log(taskListItems);
for (let item of taskListItems) {
    console.log(item);
    layoutWrapper.appendChild(item);
}

let addTaskButton = applyStyles(createHtmlElements('button', 'addTaskButton', { value: '+' }), { ...addTaskButtonStyle });
layoutWrapper.appendChild(addTaskButton);

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
            // console.log(styles, styleList[i], styles[styleList[i]]);
            styledElement.style[styleList[i]] = styles[styleList[i]];
        }
    }
    return styledElement;
}

function applyPseudoStyles (styleElement, pseudoStyles = {}) {
    // console.log(styleElement, pseudoStyles, document.styleSheets);
    const pseudoStyleList = Object.keys(pseudoStyles);
    const sheet = document.styleSheets[0];
    for (let i = 0; i < pseudoStyleList.length; i++) {
        const pseudoElement = pseudoStyleList[i];
        const pseudoElementStyle = pseudoStyles[pseudoElement];
        const selector = styleElement.id ? `#${styleElement.id}` : `.${styleElement.className}`;
        // console.log(pseudoElementStyle, cssRule);
        let newPseudoStyleRule = `${selector}${pseudoElement} {`;
        for (let property in pseudoElementStyle) {
            newPseudoStyleRule += `${property}: ${pseudoElementStyle[property]};`;
        }
        newPseudoStyleRule += '}';
        console.log(pseudoStyleList, pseudoStyles, styleElement, newPseudoStyleRule);
        sheet.insertRule(newPseudoStyleRule, sheet.cssRules.length);
    }
}

function listTask () {
    let taskList = [
        { task: 'Sample Text 1' },
        { task: 'Sample Text 2' },
        { task: 'Sample Text 3' },
        { task: 'Sample Text 4' },
        { task: 'Sample Text 5' },
        { task: 'Sample Text 6' },
        { task: 'Sample Text 7' },
        { task: 'Sample Text 8' },
        { task: 'Sample Text 9' },
        { task: 'Sample Text 10' },
        { task: 'Sample Text 11' },
        { task: 'Sample Text 12' },
        { task: 'Sample Text 1' },
        { task: 'Sample Text 2' },
        { task: 'Sample Text 3' },
        { task: 'Sample Text 4' },
        { task: 'Sample Text 5' },
        { task: 'Sample Text 6' },
        { task: 'Sample Text 7' },
        { task: 'Sample Text 8' },
        { task: 'Sample Text 9' },
        { task: 'Sample Text 10' },
        { task: 'Sample Text 11' },
        { task: 'Sample Text 12' },
        { task: 'Sample Text 1' },
        { task: 'Sample Text 2' },
        { task: 'Sample Text 3' },
        { task: 'Sample Text 4' },
        { task: 'Sample Text 5' },
        { task: 'Sample Text 6' },
        { task: 'Sample Text 7' },
        { task: 'Sample Text 8' },
        { task: 'Sample Text 9' },
        { task: 'Sample Text 10' },
        { task: 'Sample Text 11' },
        { task: 'Sample Text 12' },
        { task: 'Sample Text 1' },
        { task: 'Sample Text 2' },
        { task: 'Sample Text 3' },
        { task: 'Sample Text 4' },
        { task: 'Sample Text 5' },
        { task: 'Sample Text 6' },
        { task: 'Sample Text 7' },
        { task: 'Sample Text 8' },
        { task: 'Sample Text 9' },
        { task: 'Sample Text 10' },
        { task: 'Sample Text 11' },
        { task: 'Sample Text 12' }
    ];

    const taskElementList = taskList.map((item, index) => {
        const taskWrapperDivStyle = {
            margin: 0,
            padding: '10px',
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            width: '90%',
            // height: '1000px',
            backgroundColor: 'yellow',
            marginBottom: '0.5em',
            borderRadius: '0.3em',
        };
        let wrapperDiv = applyStyles(createHtmlElements('div', `item-${index}`), { ...taskWrapperDivStyle });

        const textElementStyles = {
            // color: 'white',
            textAlign: 'left',
            width: '100%',
            height: '100%',
            paddingLeft: '5%',
        };
        let textElement = applyStyles(createHtmlElements('span', `item-${index}-text`, {}, { textContent: item.task }), { ...textElementStyles });
        wrapperDiv.appendChild(textElement);
        return wrapperDiv;
    });

    return taskElementList;
}