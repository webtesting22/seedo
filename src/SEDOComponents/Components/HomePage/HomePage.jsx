import React, { useEffect, useRef, useState } from "react";
import "../../Styles/HomePage.css";
import { Row, Col } from "antd";
import SEEDOLogo from "/SEEDOLogo.png";
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
                    <div className="blackoverlay" ref={overlayRef}></div> {/* Apply ref here */}
                    <div id="BackImageOverlay">
                        <img
                            ref={imageRef}
                            src="https://images.unsplash.com/photo-1632060203819-4a605c798db3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Background"
                        />
                    </div>
                    <div id="ContentContainer">
                        <Row style={{ width: "100%" }}>
                            <Col lg={24} md={24} style={{ width: "100%" }}>
                                <div className="ScrollingLogoContainer">
                                    <div>
                                    <img src={SEEDOLogo} alt="" />
                                    <h2>BREAK THE LIMIT</h2>
                                    </div>
                                </div>
                                {/* <div>
                                    <div id="MainUniqHeading">
                                        <span data-aos="fade-up"
                                            data-aos-duration="1000">Play World</span>
                                        <span data-aos="fade-up"
                                            data-aos-duration="1200">Toy Land</span>
                                        <span data-aos="fade-up"
                                            data-aos-duration="1500">Whimsy</span>
                                    </div>
                                    <div
                                        className="TaglineContainer"
                                        ref={animationRef} // Attach ref for Intersection Observer
                                    >
                                        <p style={{ color: "#ffdf22" }}><b>SANSON PROMO INNOVATIONS LLP</b></p>
                                        <hr />
                                        {animationTriggered && (
                                            <TypeAnimation
                                                sequence={[
                                                    "Unleash Joy, Spark Creativity, and Build Endless Adventures – Your Ultimate Toy Haven Awaits!", // Text
                                                    3000, // Pause for 2s
                                                ]}
                                                wrapper="p"
                                                speed={50} // Typing speed
                                                className="paragraph"
                                            />
                                        )}
                                        <div className="ButtonsContainer">
                                            <Link to="/aboutSeedo"><button className="buttonStylefirst">About Company</button></Link>
                                            <button className="buttonStyleSecond">See the categories</button>
                                        </div>
                                    </div>
                                </div> */}
                            </Col>
                            <Col lg={6} md={24} style={{ width: "100%" }}></Col>
                        </Row>
                        <div className="AnimatedSVGContainer">
                            <div>
                                <svg width="100%" class="svg rotating-image" height="100%" viewBox="0 0 20 23" fill="red" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.01745 19.7867C8.01745 21.7867 9.29195 23.001 10 23.001C10.7081 23.001 11.9826 21.7867 11.9826 19.7867C11.9826 19.5724 10.2124 14.2867 10.1416 11.7867C12.195 13.0724 15.9477 17.2867 16.1601 17.3581C17.8594 18.3581 19.4879 17.8581 19.9128 17.2867C20.196 16.6438 19.842 14.9295 18.0718 13.9295C17.8594 13.7867 12.549 12.7153 10.2832 11.501C12.549 10.2867 17.8594 9.21526 18.0718 9.0724C19.842 8.0724 20.196 6.35812 19.9128 5.78669C19.4879 5.14383 17.8594 4.64383 16.1601 5.64383C15.9477 5.78669 12.195 9.92955 10.1416 11.2867C10.2124 8.71526 11.9826 3.57241 11.9826 3.21526C11.9826 1.21526 10.7081 0.000976562 10 0.000976562C9.29195 0.000976562 8.01745 1.21526 8.01745 3.21526C8.01745 3.50097 9.71678 8.71526 9.85839 11.2867C7.73423 9.92955 4.12315 5.78669 3.83993 5.64383C2.1406 4.64383 0.512072 5.14383 0.0872398 5.78669C-0.195982 6.35812 0.158045 8.0724 1.92818 9.0724C2.2114 9.21526 7.451 10.2867 9.64597 11.501C7.451 12.7153 2.2114 13.7867 1.92818 13.9295C0.158045 14.9295 -0.195982 16.6438 0.0872398 17.2867C0.512072 17.8581 2.1406 18.3581 3.83993 17.3581C4.05234 17.2153 7.73423 13.0724 9.85839 11.7867C9.71678 14.2867 8.01745 19.5724 8.01745 19.7867Z" fill="currentColor"></path>
                                </svg>
                                <h2 className="SecondaryHeading">About Sanson Promo Innovations LLP</h2>
                                <p className="paragraph"><b>Sanson Promo Innovations LLP</b> is a leader in consumer and trade promotions, trusted by top FMCG brands like Unilever, Glaxo, Perfetti, Mondelez, and Britannia. We specialize in collaborating with renowned licensors such as Disney, Marvel, Mattel, Pokémon, and Doraemon. Our end-to-end expertise includes conceptualization, product engineering, mass manufacturing, quality assurance, and logistics. This comprehensive approach ensures that we consistently exceed client expectations, delivering high-quality products and innovative campaigns that foster brand loyalty and drive business growth.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default HomePage;
