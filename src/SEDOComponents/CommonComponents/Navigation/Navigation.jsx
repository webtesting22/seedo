import React, { useState, useEffect } from "react";
import NavigationLinks from "./NavigationLinks";
import "../../Styles/Navigation.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { Drawer } from "antd"; // Import the Drawer component from Ant Design
import SeedoLogo from "/Images/SeedonewLogo.png";
const Navigation = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); // Track if navigation bar is scrolled
    const [scrollHeight, setScrollHeight] = useState(0); // Track the height of IncreaseBack

    const { pathname } = useLocation(); // Get the current path

    // Handle scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 300);

            // Check if the device is mobile (width <= 768px)
            const isMobile = window.innerWidth <= 768;
            const maxScroll = 300; // Adjust the range as per your preference
            const maxHeight = isMobile ? 70 : 80; // 70px for mobile, 80px for desktop
            const calculatedHeight = Math.min((scrollTop / maxScroll) * maxHeight, maxHeight);

            setScrollHeight(calculatedHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    // Determine link color based on page and scroll position
    const linkColor = pathname === "/" && !isScrolled ? "black" : "black";

    return (
        <section id="NavigationContainer">
            <div
                className="IncreaseBack"
                style={{
                    height: `${scrollHeight}px`,
                    width: "100%",
                    backgroundColor: "#F9D32B",
                    transition: "height 0.3s ease",
                }}
            ></div>
            <div
                className={`ContainerNavigation ${isScrolled ? "scrolled" : ""}`}
            >
                <div>
                    <div className={`NavigationLogo ${pathname === "/"}`}>
                        <Link to="/" className="logo-container">
                            <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/IZApK7nLpi7f8Corvtyx/seedo pro Video copy.png" alt="Logo" />
                        </Link>
                    </div>
                </div>
                <div style={{ display: "flex", gap: "30px" }} className="PcManuOnly">
                    {NavigationLinks.map((item, index) => (
                        <div key={index} style={{ marginBottom: "1rem" }} id="NavigationLink">
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
                </div>
                <div className="MenuToggle" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </div>
            </div>

            {/* Ant Design Drawer */}
            <div className="OnMoblilemenu">
                <Drawer
                    title={<img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/IZApK7nLpi7f8Corvtyx/seedo pro Video copy.png" alt="SEEDO Logo" style={{ height: "40px" }} />}
                    placement="right"
                    closable={true}
                    onClose={() => setMobileMenuOpen(false)}
                    open={isMobileMenuOpen}
                >
                    {NavigationLinks.map((item, index) => (
                        <div key={index} style={{ marginBottom: "1rem" }} id="NavigationLink">
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

            </div>
        </section>
    );
};

export default Navigation;
