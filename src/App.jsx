import React from "react";
import ReactDOM from "react-dom/client";
import  {Title,Header} from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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






const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

//console.log(container);//retrun object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); //convert object to h1
//React.createElement () is object that represents the DOM element. It takes three arguments: the type of element, the properties of the element, and the content of the element.
