/**
 * Header
 *   -Logo
 *   -Nav Items
 * Body
 *   -Search Bar
 *   -Restaurant Container
 *      =>Restraunt Cards
 *        = Image
 *        = Name of Restraunt, Star Rating, Cuisine, Delivery Time
 * Footer
 *   -Copyrights
 *   -Links
 *   -Address
 *   -Contacts
 * 
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
};

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root container not found");
}
const root = ReactDOM.createRoot(container);

root.render(<AppLayout/>)