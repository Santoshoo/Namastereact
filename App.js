import React from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement("h1", {
//     id:"title",
//     key:"h1"
// },"Heading is parcel");
// //create an h1 element with empty object as properties and "Heading is parcel" as content


// const heading2 = React.createElement(
//   "h1",
//   {
//     id: "title",
//     key: "h2",
//   },
//   "Heading is parcel"
// );

// const container=React.createElement(
//     "div",
//     {
//         id: "container",
//         key: "div",
//     },
//     [heading,
//     heading2]
// )
//react element:just a object
const heading =(
  <h1 id="h1">hhhh</h1>
)

//react component

const Header=()=>{
  return (
    <div>
      {heading}
      <h1>This is react component</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
};


//console.log(container);//retrun object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);//convert object to h1
//React.createElement () is object that represents the DOM element. It takes three arguments: the type of element, the properties of the element, and the content of the element.

