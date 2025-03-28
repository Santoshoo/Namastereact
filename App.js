import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("div", {}, [React.createElement("h1", {}, "Hello World!"),
    React.createElement("p", {}, "This is a paragraph")
]);
console.log(heading);//retrun object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);//convert object to h1
//React.createElement () is object that represents the DOM element. It takes three arguments: the type of element, the properties of the element, and the content of the element.

