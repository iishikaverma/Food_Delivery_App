const Header = () => {
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
                </ul>
            </div>
        </div>
    )
};
export default Header;