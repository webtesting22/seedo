import React, { useState } from "react";
import NavigationLinks from "./NavigationLinks";
import "../../Styles/Navigation.css"
import SEEDoLogo from "../../../../public/SEEDOLogo.png"
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const closeMenu = () => {
        setMobileMenuOpen(false);
    };
    const { pathname } = useLocation(); // Get the current path
    const linkColor = pathname === "/" ? "white" : "red"; // Determine color based on the current page

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

                                <Link to={item.path} style={{
                                    color: linkColor, // Apply determined color


                                }}> {console.log(item.path)}{item.link}</Link>
                            </span>
                        ))}
                    </div>
                </div>

            </section>
        </>
    )
}
export default Navigation