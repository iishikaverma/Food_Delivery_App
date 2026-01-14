import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    

    //If no dependency array => useEffect = called on every render.
    //If dependency array is empty = [] => useEffect is called only once on initial render.
    //If dependency array is [btnNameReact] => called everytime btnNameReact is updated.
    
    // useEffect(() => {
    //     console.log("useEffect called")
    // }, [])

    const onlineStatus = useOnlineStatus();

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
                    <li>Online Status:  {onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about"> ABOUT US </Link></li>
                    <li><Link to="/contact">CONTACT US</Link></li>
                    <li><Link to="/grocery">GROCERY</Link></li>                    
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