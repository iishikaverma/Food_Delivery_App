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

import ReactDOM from "react-dom/client";
import "./index.css";




const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={new URL("assets/Cravory.png", import.meta.url).toString()}
                    alt="Cravory logo"
                />

            </div>
            <div className="nav-items">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>CONTACT US</li>
                    <li>CART</li>
                </ul>
            </div>
        </div>
    )
};

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <h3>Urban Tadka</h3>
        </div>
    )
};

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
            </div>
        </div>
    )
};

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