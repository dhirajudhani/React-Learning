import React from "react";
import ReactDOM from "react-dom";

// note this react element is not a html element
// React.createElement => Object => HTML element (on render)

// create element using core react
const heading = React.createElement("h1", { id: "heading" }, "Heading");
console.log(heading);

// Jsx - is not HTMl in JS - HTML/XML like syntax

// create element using jsx

//JSX(Transpiled(convert) before it reaches the JS) -> PARCEL -> Babel(package)
const jsxHeading = (
  <h1 id="heading" tabIndex="5">
    Namaste React in Jsx 🚀
  </h1>
);
console.log(jsxHeading);

//JSX => Babel transpile to React.createElement => Object => HTML element (on render)

// React component
// Class Component -> OLD Way
// Functional Component -> NEW way

// React Functional Component -> just a normal js function

// a function returning a jsx element is a react functional component
const title = (<h1>React element in component</h1>)
const Title = () => {
  return <h1>Namste React functional component 🚀</h1>;
};

const number = 1000;

// Also called as Component Compostion  
const HeadingComponent2 = () => (
  <div id="container">
    <Title />
    {Title()}
    <h2>{number}</h2>
    <h2>{100+200}</h2>
    {title}
    <h1 className="heading">Namste React functional component 🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(HeadingComponent());
root.render(<HeadingComponent2/>)
