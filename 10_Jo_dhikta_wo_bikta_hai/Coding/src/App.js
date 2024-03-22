import React, { lazy, Suspense } from "react";
import ReactDOM  from "react-dom/client";
import logo from "../src/Images/logo.jpg";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

// chunking 
// code splitting
// dynamic bundling
// lazy loading
// on demand loading


const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
     return (
     <div className="app">
        <Header/>
        <Outlet/>
     </div>
     )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback="Loading.....   "><Grocery/></Suspense>
            },
            {
                path: "/contact",
                element: <Contact/> 
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error /> 
    },
    
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)


// Passing a props to a component is like passing an argument to function

// props destructuring => const {resName, cuisine} = props;
// so we can write either {resName, cuisine} or props as an argument

// Config Driven UI vvvvvvvvIMP