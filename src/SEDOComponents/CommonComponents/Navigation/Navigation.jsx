import React, { useState } from "react";
import NavigationLinks from "./NavigationLinks";
import "../../Styles/Navigation.css"
import SEEDoLogo from "../../../../public/SEEDOLogo.png"
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
const Navigation = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const closeMenu = () => {
        setMobileMenuOpen(false);
    };
    return (
        <>
            <section id="NavigationContainer">
                <div className="ContainerNavigation">
                    <div>
                        <div className="NavigationLogo">
                            <Link to="/"> <img src={SEEDoLogo} alt="" /></Link>
                        </div>
                    </div>
                    <div className="MenuToggle" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </div>
                    <div className={`SidePanel ${isMobileMenuOpen ? "show" : ""}`}>
                        {NavigationLinks.map((item, index) => (
                            <span key={index} onClick={closeMenu}>
                                <Link to={item.path}>{item.link}</Link>
                            </span>
                        ))}
                    </div>
                </div>

            </section>
        </>
    )
}
export default Navigation