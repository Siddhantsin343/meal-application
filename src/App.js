import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./compontent/Header";

const App = ()=>(
    <>
        <Header/>
    </>
)
const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(<App/>)
const application = createBrowserRouter([])
root.render(<RouterProvider router={application}></RouterProvider>)