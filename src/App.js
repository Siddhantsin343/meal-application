// Import
import React from "react";
import "./index.css"
import ReactDOM, { createRoot } from "react-dom/client"

// Page Compontents
import Header from "./compontent/Header";
import Body from "./compontent/Body";
import Footer from "./compontent/Footer";


const App = ()=>(
    <>
        <Header/>
        <Body/>
        <Footer/>
    </>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)