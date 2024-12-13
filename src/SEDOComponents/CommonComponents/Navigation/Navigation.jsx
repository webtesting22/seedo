import React, { useState, useEffect } from "react";
import NavigationLinks from "./NavigationLinks";
import "../../Styles/Navigation.css"
import SEEDoLogo from "/SEEDOLogo.png"
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLogoVisible, setLogoVisible] = useState(false); // Track visibility of Navigation Logo

    const closeMenu = () => {
        setMobileMenuOpen(false);
    };
    const { pathname } = useLocation(); // Get the current path
    const linkColor = pathname === "/" ? "white" : "black"; // Determine color based on the current page
    useEffect(() => {
        if (pathname === "/") {
            // Logo visibility animation for the homepage
            const scrollingLogoContainer = document.querySelector(".ScrollingLogoContainer");

            const observer = new IntersectionObserver(
                ([entry]) => {
                    setLogoVisible(entry.isIntersecting);
                },
                { threshold: 0.6 } // Trigger when 60% of the element is visible
            );

            if (scrollingLogoContainer) {
                observer.observe(scrollingLogoContainer);
            }

            return () => {
                if (scrollingLogoContainer) {
                    observer.unobserve(scrollingLogoContainer);
                }
            };
        } else {
            // Ensure logo is always visible on other pages
            setLogoVisible(true);
        }
    }, [pathname]);

    return (
        <>
            <section id="NavigationContainer">
                <div className="ContainerNavigation">
                    <div>
                        <div className={`NavigationLogo ${pathname === "/" && !isLogoVisible ? "visible" : "hidden"}`}
                        >
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


                                }}>
                                 {item.link}
                                 </Link>
                            </span>
                        ))}
                    </div>
                </div>

            </section>
        </>
    )
}
export default Navigation