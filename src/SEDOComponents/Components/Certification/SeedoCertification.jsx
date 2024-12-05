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
            link:"https://gem.gov.in/",
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
            title:"Bureau of Indian Standards",
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
                <div className="LeftSideContentContainer">
                    <h2 className="PrimaryHeading-black">Industrial Certification</h2>
                    {/* <p>Passed Testing, Awaiting Certificate</p> */}
                </div>
                <br />
                <br />
                <div>
                    <Row>
                        {CertificationLogoData.map((item, index) => (
                            <Col lg={6} md={12} data-aos="fade-up"
                                data-aos-delay={index * 100} data-aos-duration="1000" >
                                <Link to={item.link} target="_blank" style={{color:"black"}}>
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