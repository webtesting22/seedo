import React from "react";
import "../../Styles/SeedoCertification.css"
import { Row, Col } from "antd";
import logo1 from "/Images/Logos/CE.webp"
import logo2 from "/Images/Logos/GEM.png"
import logo3 from "/Images/Logos/GMP.jpg"
import logo4 from "/Images/Logos/GulfConformity.jpg"
import logo5 from "/Images/Logos/ISO.png"
import logo6 from "/Images/Logos/Manak.png"
import logo7 from "/Images/Logos/MSME.png"
import logo8 from "/Images/Logos/ROHS.png"
import { Link } from "react-router-dom";
import MakeInIndia from "/Images/Logos/MakeInIndia.jpg"
import { FaArrowRight } from "react-icons/fa";
const SeedoCertification = () => {
    const CertificationLogoData = [
        {
            img: MakeInIndia,
            title: " Make in India",
            link: "https://www.makeinindia.com/"
        },
        {
            img: logo1,
            title: "Conformité Européenne",
            link: "https://ec.europa.eu/growth/single-market/ce-marking/"

        },
        {
            img: logo2,
            title: "Government E Marketplace",
            // link: "https://green-em.com/"
            link: "https://gem.gov.in/",
        },
        {
            img: logo3,
            title: "Good Manufacturing Practices",
            link: "https://www.who.int/teams/health-product-policy-and-standards/standards-and-specifications/norms-and-standards/gmp"
        },
        {
            img: logo4,
            title: "Gulf Conformity Mark",
            link: "https://www.gso.org.sa/en/conformity/gcc-conformity-mark/"
        },
        {
            img: logo5,
            title: "International Organization for Standardization",
            link: "https://www.iso.org/home.html"
        },
        {
            img: logo6,
            // title: "मानक : पथप्रदर्शक",
            title: "Bureau of Indian Standards",
            link: "https://www.bis.gov.in"
        },
        {
            img: logo7,
            title: "Ministry of Micro, Small and Medium Enterprises",
            link: "https://www.msme.gov.in"
        },
        {
            img: logo8,
            title: "Restriction of Hazardous Substances",
            link: "https://www.rohsguide.com"
        },
    ]
    return (
        <>

            <section id="SeedoCertificationContainer">
                {/* <div className="LeftSideContentContainer">
                    <h2 className="PrimaryHeading-black"><svg width="100%" style={{ fill: "#A5252B", color: "#A5252B" }} class="svg rotating-image" height="100%" viewBox="0 0 20 23" fill="red" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.01745 19.7867C8.01745 21.7867 9.29195 23.001 10 23.001C10.7081 23.001 11.9826 21.7867 11.9826 19.7867C11.9826 19.5724 10.2124 14.2867 10.1416 11.7867C12.195 13.0724 15.9477 17.2867 16.1601 17.3581C17.8594 18.3581 19.4879 17.8581 19.9128 17.2867C20.196 16.6438 19.842 14.9295 18.0718 13.9295C17.8594 13.7867 12.549 12.7153 10.2832 11.501C12.549 10.2867 17.8594 9.21526 18.0718 9.0724C19.842 8.0724 20.196 6.35812 19.9128 5.78669C19.4879 5.14383 17.8594 4.64383 16.1601 5.64383C15.9477 5.78669 12.195 9.92955 10.1416 11.2867C10.2124 8.71526 11.9826 3.57241 11.9826 3.21526C11.9826 1.21526 10.7081 0.000976562 10 0.000976562C9.29195 0.000976562 8.01745 1.21526 8.01745 3.21526C8.01745 3.50097 9.71678 8.71526 9.85839 11.2867C7.73423 9.92955 4.12315 5.78669 3.83993 5.64383C2.1406 4.64383 0.512072 5.14383 0.0872398 5.78669C-0.195982 6.35812 0.158045 8.0724 1.92818 9.0724C2.2114 9.21526 7.451 10.2867 9.64597 11.501C7.451 12.7153 2.2114 13.7867 1.92818 13.9295C0.158045 14.9295 -0.195982 16.6438 0.0872398 17.2867C0.512072 17.8581 2.1406 18.3581 3.83993 17.3581C4.05234 17.2153 7.73423 13.0724 9.85839 11.7867C9.71678 14.2867 8.01745 19.5724 8.01745 19.7867Z" fill="currentColor"></path>
                    </svg> Industrial Certification</h2>
                    <p>As strong advocates for local manufacturing, we
                        take pride in sourcing all our components from
                        within India. We fully support and align with Mr.
                        Narendra Modi's visions of promoting the
                        “Make In India" initiative, fostering economic
                        growth and self-reliance in our nation.</p>
                    <p>Passed Testing, Awaiting Certificate</p>
                </div> */}
                <div className="TopLinksContainer" style={{ padding: "0px" }}>
                    <div >
                        <Link to="/" className="breadcrumb-link" style={{ color: "#999", fontSize: "12px" }}>Home</Link>&nbsp;&nbsp; <span style={{ color: "#999", fontSize: "12px", display: "flex" }}><FaArrowRight /></span> &nbsp;&nbsp;
                        <Link to="/aboutSeedo" className="breadcrumb-link" style={{ color: "#999", fontSize: "12px" }}>About Us</Link>
                    </div>
                </div>

                <div className="LeftSideContentContainer" style={{ paddingTop: "5rem" }}>
                    {/* <h1>About SEDO</h1> */}
                    <div>
                        <p style={{ color: "#A5252B", textAlign: "center", marginBottom: "0px",fontSize:"16px" }}>All You Need is Fun!</p>
                        <h2 className="PrimaryHeading-black" style={{ color: "black", textAlign: "center" }}>
                            <svg width="100%" class="svg rotating-image" height="100%" viewBox="0 0 20 23" fill="red" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.01745 19.7867C8.01745 21.7867 9.29195 23.001 10 23.001C10.7081 23.001 11.9826 21.7867 11.9826 19.7867C11.9826 19.5724 10.2124 14.2867 10.1416 11.7867C12.195 13.0724 15.9477 17.2867 16.1601 17.3581C17.8594 18.3581 19.4879 17.8581 19.9128 17.2867C20.196 16.6438 19.842 14.9295 18.0718 13.9295C17.8594 13.7867 12.549 12.7153 10.2832 11.501C12.549 10.2867 17.8594 9.21526 18.0718 9.0724C19.842 8.0724 20.196 6.35812 19.9128 5.78669C19.4879 5.14383 17.8594 4.64383 16.1601 5.64383C15.9477 5.78669 12.195 9.92955 10.1416 11.2867C10.2124 8.71526 11.9826 3.57241 11.9826 3.21526C11.9826 1.21526 10.7081 0.000976562 10 0.000976562C9.29195 0.000976562 8.01745 1.21526 8.01745 3.21526C8.01745 3.50097 9.71678 8.71526 9.85839 11.2867C7.73423 9.92955 4.12315 5.78669 3.83993 5.64383C2.1406 4.64383 0.512072 5.14383 0.0872398 5.78669C-0.195982 6.35812 0.158045 8.0724 1.92818 9.0724C2.2114 9.21526 7.451 10.2867 9.64597 11.501C7.451 12.7153 2.2114 13.7867 1.92818 13.9295C0.158045 14.9295 -0.195982 16.6438 0.0872398 17.2867C0.512072 17.8581 2.1406 18.3581 3.83993 17.3581C4.05234 17.2153 7.73423 13.0724 9.85839 11.7867C9.71678 14.2867 8.01745 19.5724 8.01745 19.7867Z" fill="currentColor"></path>
                            </svg>Industrial Certification
                        </h2>
                        <p>As strong advocates for local manufacturing, we take pride in sourcing all our components from within India. We fully support and align with <b>Mr. Narendra Modi's visions of promoting the “Make In India" initiative, fostering economic growth and self-reliance</b> in our nation.</p>
                        {/* <button></button> */}
                    </div>
                </div>
                <br /><br />
                <div>
                    <Row>
                        {CertificationLogoData.map((item, index) => (
                            <Col lg={6} md={12} data-aos="fade-up"
                                data-aos-delay={index * 100} data-aos-duration="1000" >
                                <Link to={item.link} target="_blank" style={{ color: "black" }}>
                                    <div className="LogoContainer">
                                        <img src={item.img} alt="" />
                                        <p>{item.title}</p>
                                    </div>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
        </>
    )
}
export default SeedoCertification