import React  from "react";
import Navbar from "../../Components/Navbar/Navbar";
import NavBarMobile from "../../Components/Navbar/NavbarMobile";
import "./Header.scss";

const Header = () => {
    return (
        <>
            <div className="desktopHeader">
                <Navbar/>
            </div>
            <div className="mobileHeader">
                <NavBarMobile/>
            </div>
        </>
    );
};

export default Header;