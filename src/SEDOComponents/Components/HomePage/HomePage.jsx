import React, { useEffect, useRef, useState } from "react";
import "../../Styles/HomePage.css";
import { Row, Col } from "antd";
import SEEDOLogo from "/SEEDOLogo.png";
import SanSon from "./SanSon.png"
const HomePage = () => {
    const imageRef = useRef(null);
    const sectionRef = useRef(null);  // Ref for the section to apply shadow effect
    const animationRef = useRef(null);
    const overlayRef = useRef(null);
    const [animationTriggered, setAnimationTriggered] = useState(false);
    // Parallax Effect and Darkening Effect on Scroll
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const imageElement = imageRef.current;
        const overlayElement = overlayRef.current;

        // Parallax effect
        if (imageElement) {
            imageElement.style.transform = `translateY(${scrollTop * 0.5}px)`; // Parallax effect
        }

        // Adjust the opacity of the overlay based on scroll
        if (overlayElement) {
            const opacity = Math.min(0.50 + scrollTop / 500, 0.8);  // Adjust opacity based on scroll, max value is 0.8
            overlayElement.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
        }
    };

    useEffect(() => {
        // Parallax Effect and Darkening Effect on Scroll
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animationTriggered) {
                    setAnimationTriggered(true); // Trigger animation only once
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the element is visible
        );

        if (animationRef.current) {
            observer.observe(animationRef.current);
        }

        return () => {
            if (animationRef.current) {
                observer.unobserve(animationRef.current);
            }
        };
    }, [animationTriggered]);

    return (
        <>
            <section id="HomepageContainer" ref={sectionRef}> {/* Add ref here */}
                <div>
                    <div>
                        <div className="blackoverlay" ref={overlayRef}></div> {/* Apply ref here */}
                        <div id="BackImageOverlay">
                            <img
                                ref={imageRef}
                                src="https://images.unsplash.com/photo-1652014492117-e062baed36f8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Background"
                            />
                        </div>


                    </div>
                    <div className="HomePageContentContainer">
                        <div style={{ width: "100%" }}>
                            <div className="HomeheadingContainer">
                                <h1>We Create For You!</h1>
                            </div>
                            <div className="BoxRowContainer">
                                <Row>

                                    <Col lg={12} md={24}>
                                        <div className="SANSONGraphicContainer">
                                            <div>
                                                <h1>SANSON</h1>
                                                <p>to connect with us through the footer section or the "Contact Us" page. We look forward to hearing from you!We offer these services, and we invite you to reach out for any inquiries. Please feel free to connect with us through. do not copy the text</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={12} md={24}>
                                        <div className="GrayElementBox">
                                            <h4>Graphic element</h4>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
