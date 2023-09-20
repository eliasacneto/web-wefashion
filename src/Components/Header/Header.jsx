import React  from "react";
import Navbar from "./Navbar/Navbar";
import NavBarMobile from "./Navbar/NavbarMobile";
import "./Header.scss";

const Header = () => {
    return (
        <>
            <div className="desktop">
                <Navbar/>
            </div>
            <div className="mobile">
                <NavBarMobile/>
            </div>
        </>
    );
};

export default Header;