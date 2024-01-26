

// Note = ReactElement(Object) => Html(Browser understand)

import React from "react";
import ReactDOM from "react-dom";

/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++ (Execute File when changes occur)
 * BUNDLING
 * MINIFY
 * Cleaning our Code (Example - Remove Console.log)
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev [Example - npx parcel index.html --https]
 * Port Number [Example - If port number using in localhost then it will change in port number in another project running on localhost]
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */



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


const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      [ React.createElement("h1", {}, "I am a h1 tag"), React.createElement("h2", {}, "I am a h2 tag")]
    )
  );

  root.render(parent)
   console.log(parent)
  