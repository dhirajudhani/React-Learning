// Note = ReactElement(Object) => Html(Browser understand)
// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//   },
//   "Hello World in React!"
// );
// console.log(heading); // React element is normal js object
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// Nested Dom
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am a h1 tag")
//   )
// );
// root.render(parent)
// console.log(parent)
// Nested + sbilings
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag")
]));
root.render(parent);
console.log(parent);

//# sourceMappingURL=index.c7924748.js.map
