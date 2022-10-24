const myNode = document.querySelector("ul");
const myBody = document.querySelector("body");
const myNodeList = myNode.childNodes;
const furiousText = "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.";
const list = document.querySelectorAll('li');

const randInt = (listLength) => {
    return Math.floor(Math.random()*listLength) + 1;
};

const furiousNumberOne = (Node, element, myList) => {
    Node.insertBefore(element, myList[0]);
};

const removeDupes = (myList) => {
    let uniques = Array();
    for (let i = 0, len = myList.length; i < len; i++) {
        if (!uniques.includes(myList[i].innerText)) {
            uniques.push(myList[i].innerText);
        } else {
            myList[i].remove();
        };
        
    };
};

for (const element of list) {
    if (element.innerText == "Fast and Furious") {
        furiousNumberOne(myNode, element, list);
        element.classList.add(".important");
        element.addEventListener('click', () => {alert(furiousText)});
    } else {
        element.addEventListener('click', () => {alert(element.innerText)});
    };
};

removeDupes(list);

myBody.addEventListener('keyup', (event) => {
    switch (event.code) {
        case 'KeyR':
            console.log("KeyR Pressed"); 
            let randomList = document.querySelectorAll('li');

            for (const element of randomList) {
                if (element.innerText == "Fast and Furious") {
                    furiousNumberOne(myNode, element, randomList);
                } else {
                    myNode.insertBefore(element, randomList[randInt(randomList.length)]);
                };
            };
            break;
        case 'KeyD':
            console.log("KeyD Pressed"); 
            let cloneList = document.querySelectorAll('li');
            for (const element of cloneList) {
                if (element.innerText == "Fast and Furious") {
                    element.insertAdjacentElement("afterend", element.cloneNode(true));
                    break;
                };
            };

            break;
        default:
            console.log(event.code);
    } 
});

const myDiv = document.createElement("div");
const mySelect = document.createElement("select");
var option1 = document.createElement("option");
option1.value = "normal";
option1.innerText = "Normal franchises";
var option2 = document.createElement("option");
option2.value = "important";
option2.innerText = "Important franchises";

myBody.insertBefore(myDiv, myNode);
mySelect.appendChild(option1);
mySelect.appendChild(option2);
myDiv.appendChild(mySelect);


mySelect.addEventListener('change', (event) => {
    let changeList = document.querySelectorAll('li');
    if (event.target.value === "important") {
        for (const element of changeList) {
            let classes = Array.from(element.classList)
            if (!classes.includes(".important")) {
                element.style.visibility = "hidden";
            };
        };
    } else {
        for (const element of changeList) {
            element.style.visibility = "visible";
        };
    };
});
