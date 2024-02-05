import React from "react";
import ReactDOM  from "react-dom/client";
import logo from "../src/Images/logo.jpg";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
/*
Header
    - Logo
    - Nav Items
Body
    - Search
    - ReataurantContainer
    - ReataurantCard
        - Image
        - Name of res, Star rating, cuisine, deleviry time
Footer
    - Copyright
    - Links
    - Contact info
    - Address
*/







const AppLayout = () => {
     return (
     <div className="app">
        <Header/>
        <Body/>
     </div>
     )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)


// Passing a props to a component is like passing an argument to function

// props destructuring => const {resName, cuisine} = props;
// so we can write either {resName, cuisine} or props as an argument

// Config Driven UI vvvvvvvvIMP