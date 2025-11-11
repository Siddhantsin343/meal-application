// Import
import React from "react";
import "./index.css"
import ReactDOM, { createRoot } from "react-dom/client"


// Route
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";

// Page Compontents
import Header from "./compontent/Header";
import Body from "./compontent/Body";
import Footer from "./compontent/Footer";
import About from "./compontent/About";
import Contact from "./compontent/Contact";
import Error from "./compontent/Error";
import RestaurantMenu from "./compontent/RestaurentMenu";



const App = ()=>(
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
)


const appRoute = createBrowserRouter([
    {
        path : "/",
        element: <App/>,
        children: [
            {
                path : "/",
                element: <Body/>
            },
            {
                path : "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element:<Contact/>
            }
        ],
        errorElement: <Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRoute}></RouterProvider>)