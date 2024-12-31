import React, { useEffect } from "react";
import "../../Styles/AboutSeedo.css";
import { Row, Col } from "antd";
import SeedoPoster from "/Images/Banners/SeedoPoster.png"
import PhotosGrid from "../../CommonComponents/PhotosGrid/PhotosGrid";
import AboutContent from "../AboutContentPoint/AboutContent";
import { Link } from "react-router-dom";
import BannerAbout from "/BannerAbout.avif"
import Navigation from "../../CommonComponents/Navigation/Navigation";
import MissionVision from "../VisionMission/MissionVision";
import generative from "./generative .jpg"
import { FaArrowRight } from "react-icons/fa";
const AboutSeedo = () => {
    const ServicesCardData = [
        {
            title: "Infrastructure",
            content: "Our 150,000 sq. ft. manufacturing facility includes a 75,000 sq. ft. area dedicated to toy production. Equipped with state-of-the-art machinery and advanced automation technology, our facility supports a production capacity of 5 billion battery-operated toys annually, ensuring we can meet large-scale demand without compromising on quality or safety."
        },
        {
            title: "Productivity",
            content: "With a fully automated plant, Seedo Toys achieves an annual production capacity of nearly 5 million battery-operated toys, employing the latest automation technologies to ensure efficient, high-quality manufacturing with precision and consistency."
        },
        {
            title: "Experience",
            content: "Our team is made up of skilled experts with extensive market experience and deep product knowledge, allowing us to create innovative toys that meet the highest standards of quality and customer satisfaction."
        },
        {
            title: "Quality and Affordability",
            content: "Seedo Toys proves that high-quality products can also be affordable. By offering superior craftsmanship at budget-friendly prices, we challenge the norm and provide customers with excellent value, ensuring they get the best of both worlds—quality and affordability."
        },

        {
            title: "Make in india",
            content: "As strong advocates for local manufacturing, we take pride in sourcing all our components from within India. We fully support and align with Mr. Narendra Modi's vision of promoting the Make in India* initiative, fostering economic growth and self-reliance in our nation"
        },
    ]
    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div id="AboutUs">
                <Navigation />
            </div>
            <section id="AboutSEDOSection">
                <div>
                    {/* <div className="BannerContainer">
                       
                        <img src={generative} alt="" />
                    </div> */}

                    <div className="TopLinksContainer">
                        <div >
                            <Link to="/" className="breadcrumb-link" style={{ color: "#999", fontSize: "12px" }}>Home</Link>&nbsp;&nbsp; <span style={{ color: "#999", fontSize: "12px", display: "flex" }}><FaArrowRight /></span> &nbsp;&nbsp;
                            <Link to="/aboutSeedo" className="breadcrumb-link" style={{ color: "#999", fontSize: "12px" }}>About Us</Link>
                        </div>
                    </div>

                    <div className="AboutUsContentContainer">
                        {/* <img src={Back} alt="" /> */}
                        {/* <div className="overlayContainersecond">

                        </div> */}
                        <Row>
                            <Col lg={24}>
                                <div className="LeftSideContentContainer">
                                    {/* <h1>About SEDO</h1> */}
                                    <div>
                                        <p style={{ color: "#A5252B", textAlign: "center", marginBottom: "0px" ,fontSize:"16px"}}>All You Need is Fun!</p>
                                        <h2 className="PrimaryHeading-black" style={{ color: "black", textAlign: "center" }}>
                                            <svg width="100%" class="svg rotating-image" height="100%" viewBox="0 0 20 23" fill="red" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.01745 19.7867C8.01745 21.7867 9.29195 23.001 10 23.001C10.7081 23.001 11.9826 21.7867 11.9826 19.7867C11.9826 19.5724 10.2124 14.2867 10.1416 11.7867C12.195 13.0724 15.9477 17.2867 16.1601 17.3581C17.8594 18.3581 19.4879 17.8581 19.9128 17.2867C20.196 16.6438 19.842 14.9295 18.0718 13.9295C17.8594 13.7867 12.549 12.7153 10.2832 11.501C12.549 10.2867 17.8594 9.21526 18.0718 9.0724C19.842 8.0724 20.196 6.35812 19.9128 5.78669C19.4879 5.14383 17.8594 4.64383 16.1601 5.64383C15.9477 5.78669 12.195 9.92955 10.1416 11.2867C10.2124 8.71526 11.9826 3.57241 11.9826 3.21526C11.9826 1.21526 10.7081 0.000976562 10 0.000976562C9.29195 0.000976562 8.01745 1.21526 8.01745 3.21526C8.01745 3.50097 9.71678 8.71526 9.85839 11.2867C7.73423 9.92955 4.12315 5.78669 3.83993 5.64383C2.1406 4.64383 0.512072 5.14383 0.0872398 5.78669C-0.195982 6.35812 0.158045 8.0724 1.92818 9.0724C2.2114 9.21526 7.451 10.2867 9.64597 11.501C7.451 12.7153 2.2114 13.7867 1.92818 13.9295C0.158045 14.9295 -0.195982 16.6438 0.0872398 17.2867C0.512072 17.8581 2.1406 18.3581 3.83993 17.3581C4.05234 17.2153 7.73423 13.0724 9.85839 11.7867C9.71678 14.2867 8.01745 19.5724 8.01745 19.7867Z" fill="currentColor"></path>
                                            </svg>About SEEDO
                                        </h2>
                                        <p>Sanson is a leading innovator in consumer and trade promotions, trusted by major FMCG brands in India such as
                                            Unilever, Glaxò, Perfetti, Mondelez, Britannia, and more.
                                            With extensive expertise in <b>collaborating with global
                                            brands and managing OEM licensors like Disney, Marvel,
                                            Mattel, Pokémon, and Doraemon,</b> we prioritise safety and
                                            quality throughout the entire product cycle.</p>
                                        {/* <button></button> */}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={24}>
                            <br />
                                <div className="AboutUsInsideCarBanner">
                                    <img src={generative} alt="" />
                                </div>
                            </Col>
                            <Col lg={24}>
                                <br /><br />
                                <br />
                                <Row style={{ overflow: "hidden",display:"flex",flexWrap:"wrap" }}>
                                    {ServicesCardData.map((item, index) => (
                                        <div id="WidthAjustContainer" data-aos="fade-left"
                                            data-aos-delay={index * 100} data-aos-duration="1000">
                                            <div className="ServicesStickyCards" key={index} >
                                                <Col lg={24} md={24} style={{width:"100%"}}>
                                                    <div className="AnimatedContent">
                                                        <div className="imageAnimation">
                                                            <svg width="100%" class="svg rotating-image" height="100%" viewBox="0 0 20 23" fill="red" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.01745 19.7867C8.01745 21.7867 9.29195 23.001 10 23.001C10.7081 23.001 11.9826 21.7867 11.9826 19.7867C11.9826 19.5724 10.2124 14.2867 10.1416 11.7867C12.195 13.0724 15.9477 17.2867 16.1601 17.3581C17.8594 18.3581 19.4879 17.8581 19.9128 17.2867C20.196 16.6438 19.842 14.9295 18.0718 13.9295C17.8594 13.7867 12.549 12.7153 10.2832 11.501C12.549 10.2867 17.8594 9.21526 18.0718 9.0724C19.842 8.0724 20.196 6.35812 19.9128 5.78669C19.4879 5.14383 17.8594 4.64383 16.1601 5.64383C15.9477 5.78669 12.195 9.92955 10.1416 11.2867C10.2124 8.71526 11.9826 3.57241 11.9826 3.21526C11.9826 1.21526 10.7081 0.000976562 10 0.000976562C9.29195 0.000976562 8.01745 1.21526 8.01745 3.21526C8.01745 3.50097 9.71678 8.71526 9.85839 11.2867C7.73423 9.92955 4.12315 5.78669 3.83993 5.64383C2.1406 4.64383 0.512072 5.14383 0.0872398 5.78669C-0.195982 6.35812 0.158045 8.0724 1.92818 9.0724C2.2114 9.21526 7.451 10.2867 9.64597 11.501C7.451 12.7153 2.2114 13.7867 1.92818 13.9295C0.158045 14.9295 -0.195982 16.6438 0.0872398 17.2867C0.512072 17.8581 2.1406 18.3581 3.83993 17.3581C4.05234 17.2153 7.73423 13.0724 9.85839 11.7867C9.71678 14.2867 8.01745 19.5724 8.01745 19.7867Z" fill="currentColor"></path>
                                                            </svg>
                                                            <h2>{item.title}</h2>
                                                        </div>
                                                        <p>{item.content}</p>
                                                    </div>
                                                </Col>
                                                {/* <Col lg={10} md={12}>
                                                    <div className="HoverableImage">
                                                        <img src={SeedoPoster} alt="" />
                                                    </div>

                                                </Col> */}
                                            </div>
                                        </div>
                                    ))}
                                </Row>
                            </Col>

                        </Row>
                    </div>
                </div>
            </section>
            <MissionVision />
            <AboutContent />
            {/* <PhotosGrid /> */}
            {/* <SeedoCertification />
            <Client /> */}

        </>
    );
};

export default AboutSeedo;
