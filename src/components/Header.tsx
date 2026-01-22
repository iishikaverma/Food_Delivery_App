import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    

    //If no dependency array => useEffect = called on every render.
    //If dependency array is empty = [] => useEffect is called only once on initial render.
    //If dependency array is [btnNameReact] => called everytime btnNameReact is updated.
    
    // useEffect(() => {
    //     console.log("useEffect called")
    // }, [])

    const onlineStatus = useOnlineStatus();

    // const {loggedInUser} = useContext(UserContext);

    const cartItems = useSelector((store: any) => store.cart.items)
    console.log(cartItems)

    return(
        <div className="flex justify-between items-center px-10 py-3.5 bg-[#fffaf5] shadow-[0_4px_14px_rgba(54,33,15,0.08)]">
            <div className="logo-container">
                <img
                    className ="w-25 h-25 object-contain rounded-full m-2.5 p-2.5"
                    src={new URL("../../assets/Cravory.png", import.meta.url).toString()}
                    alt="Cravory logo"
                />

            </div>

            <div className="nav-items">
                <ul className="flex items-center px-0 py-5 list-none text-xl font-semibold gap-7 mx-0 my-3.5 p-0 text-[#36210f]">
                    <li className="text-base font-semibold text-[#36210f] relative">
                        Online Status:  {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="text-base font-semibold text-[#36210f] cursor-pointer relative transition-colors_0.2_ease hover:text-[#ec5600]">
                        <Link to="/">HOME</Link>
                    </li>
                    <li className="text-base font-semibold text-[#36210f] cursor-pointer relative transition-colors_0.2_ease hover:text-[#ec5600]">
                        <Link to="/about"> ABOUT US </Link>
                    </li>
                    <li className="text-base font-semibold text-[#36210f] cursor-pointer relative transition-colors_0.2_ease hover:text-[#ec5600]">
                        <Link to="/contact">CONTACT US</Link>
                    </li>
                    <li className="text-base font-semibold text-[#36210f] cursor-pointer relative transition-colors_0.2_ease hover:text-[#ec5600]">
                        <Link to="/grocery">GROCERY</Link>
                    </li>                    
                    <li className="text-2xl cursor-pointer relative transition-colors_0.2_ease">
                        <Link to="/cart">🛒 {cartItems.length}</Link>
                    </li>
                    <button 
                    className="px-4.5 py-2.5 font-semibold border border-[#36210f] cursor-pointer rounded-[20px] bg-transparent text-[#ec5600] text-[14px] transition-all duration-250 ease-in-out 
                                hover:bg-[#36210f] hover:text-white hover:shadow-[0_6px_16px_rgba(212,112,45,0.35)] hover:-translate-y-0.5 active:translate-y-0
                                active:shadow-[0_3px_8px_rgba(212,112,45,0.35)]" 
                    onClick={()=>{
                        btnNameReact === "Login"
                        ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login");
                        }}>
                            {btnNameReact}
                    </button>

                    {/* <li className="text-base font-bold text-[#36210f]">Hi, {loggedInUser}</li> */}
                </ul>
            </div>
        </div>
    )
};
export default Header;