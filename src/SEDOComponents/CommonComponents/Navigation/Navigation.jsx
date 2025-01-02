import React, { useState, useEffect } from "react";
import NavigationLinks from "./NavigationLinks";
import "../../Styles/Navigation.css";
import SEEDoLogo from "/SEEDOLogo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { Drawer } from "antd"; // Import the Drawer component from Ant Design

const Navigation = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLogoVisible, setLogoVisible] = useState(false); // Track visibility of Navigation Logo

    const { pathname } = useLocation(); // Get the current path
    const linkColor = pathname === "/" ? "black" : "black"; // Determine color based on the current page

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
                        <div className={`NavigationLogo ${pathname === "/"}`}>
                            <Link to="/">
                                <img src={SEEDoLogo} alt="Logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="MenuToggle" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </div>
                </div>

                {/* Ant Design Drawer */}
                <Drawer
                    title="Menu"
                    placement="right"
                    closable={true}
                    onClose={() => setMobileMenuOpen(false)}
                    open={isMobileMenuOpen}
                >
                    {NavigationLinks.map((item, index) => (
                        <div key={index} style={{ marginBottom: "1rem" }}>
                            <Link
                                to={item.path}
                                style={{
                                    color: linkColor, // Apply determined color
                                    textDecoration: "none",
                                }}
                                onClick={() => setMobileMenuOpen(false)} // Close drawer on link click
                            >
                                {item.link}
                            </Link>
                        </div>
                    ))}
                </Drawer>
            </section>
        </>
    );
};

export default Navigation;
