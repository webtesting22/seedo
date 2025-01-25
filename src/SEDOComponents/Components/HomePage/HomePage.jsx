import React, { useEffect, useRef, useState } from "react";
import "../../Styles/HomePage.css";
import { Row, Col } from "antd";
import SEEDOLogo from "./NewSeedoLogo.png";
import SanSon from "./SanSon.png"
import gen8 from "./ gen8.jpg"
import HomePageCarousal from "./HomePageCarousal.jpeg"
import HomePageBanner from "./HomePageBanner.png"
import BackImageNew from "./BackImageNew.png"
import BackImage2 from "./BackImage2.png"
import BackImage3 from "./BackImage3.png"
import BackImageBack from "./BackImageBack.png"
// import landingPageVideo1 from "./Video/landingpageVideo.mp4"
// import landingPageVideo2 from "./Video/landingpageVideo2.mp4"
// import landingPageVideo3 from "./Video/landingpageVideo3.mp4"
// import landingPageVideo2 from "/Images/Video/landingPageVideo2.mp4"
// import landingPageVideo3 from "/Images/Video/landingPageVideo3.mp4"

const HomePage = () => {
    const imageRef = useRef(null);
    const sectionRef = useRef(null);  // Ref for the section to apply shadow effect
    const animationRef = useRef(null);
    const overlayRef = useRef(null);
    const [animationTriggered, setAnimationTriggered] = useState(false);
    const images = [
        // landingPageVideo1, landingPageVideo2, landingPageVideo3,
        // "https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // gen8,
        BackImageNew,
        // "https://images.unsplash.com/photo-1681351623149-91d23d44909b?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // "https://images.unsplash.com/photo-1485321586038-4cc99992a06f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        BackImageBack,
        // BackImage3
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 2 seconds

        return () => clearInterval(interval);
    }, [images.length]);
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
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    className={`carousel-image ${index === currentIndex ? "visible" : "hidden"
                                        }`}
                                />
                            ))}
                            {/* <img
                                ref={imageRef}
                                src={HomePageCarousal}
                                alt="Background"
                            />
                              <img
                                ref={imageRef}
                                src={HomePageCarousal}
                                alt="Background"
                            />
                              <img
                                ref={imageRef}
                                src={HomePageCarousal}
                                alt="Background"
                            />
                              <img
                                ref={imageRef}
                                src={HomePageCarousal}
                                alt="Background"
                            />
                             */}
                        </div>


                    </div>
                    <div className="HomePageContentContainer">
                        <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "0px" }}>
                            {/* <img src={SEEDOLogo} alt="" style={{ width: "300px", borderRadius: "16px" }} data-aos="fade-up"
                                data-aos-duration="1500" />
                            <h1 data-aos="fade-up"
                                data-aos-duration="2000">BREAK THE LIMIT</h1> */}
                            {/* <h1>Beyond Limits, Beyond Ordinary.</h1> */}
                            {/* <div className="HomeheadingContainer">
                                <h1>We Create For You!</h1>
                            </div>
                            <div className="BoxRowContainer">
                                <Row>

                                    <Col lg={12} md={24} style={{width:"100%"}}>
                                        <div className="SANSONGraphicContainer">
                                            <div>
                                                <h1>SANSON</h1>
                                                <p>to connect with us through the footer section or the "Contact Us" page. We look forward to hearing from you!We offer these services, and we invite you to reach out for any inquiries. Please feel free to connect with us through. do not copy the text</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={12} md={24} style={{width:"100%"}}>
                                        <div className="GrayElementBox">
                                            <h4>Graphic element</h4>
                                        </div>
                                    </Col>
                                </Row>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
