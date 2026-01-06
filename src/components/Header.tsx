import { useState } from "react";

const Header = () => {
    let [btnNameReact, setBtnNameReact] = useState("Login");

    return(
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={new URL("../../assets/Cravory.png", import.meta.url).toString()}
                    alt="Cravory logo"
                />

            </div>
            <div className="nav-items">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>CONTACT US</li>
                    <li>CART</li>
                    <button 
                    className="login" 
                    onClick={()=>{
                        btnNameReact === "Login"
                        ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login");
                        }}>
                            {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
};
export default Header;