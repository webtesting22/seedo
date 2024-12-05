import React from "react";
import "../../Styles/SeedoCertification.css"
import { Row, Col } from "antd";
import logo1 from "../../../../public/Images/Logos/CE.webp"
import logo2 from "../../../../public/Images/Logos/GEM.png"
import logo3 from "../../../../public/Images/Logos/GMP.jpg"
import logo4 from "../../../../public/Images/Logos/GulfConformity.jpg"
import logo5 from "../../../../public/Images/Logos/ISO.png"
import logo6 from "../../../../public/Images/Logos/Manak.png"
import logo7 from "../../../../public/Images/Logos/MSME.png"
import logo8 from "../../../../public/Images/Logos/ROHS.png"
import MakeInIndia from "../../../../public/Images/Logos/MakeInIndia.jpg"
const SeedoCertification = () => {
    const CertificationLogoData = [
        {
            img: MakeInIndia,
            title: " Make in India"
        },
        {
            img: logo1,
            title: "Conformité Européenne"

        },
        {
            img: logo2,
            title: "Green Environment Management"
        },
        {
            img: logo3,
            title: "Good Manufacturing Practices"
        },
        {
            img: logo4,
            title: "Gulf Conformity Mark"
        },
        {
            img: logo5,
            title: "International Organization for Standardization"
        },
        {
            img: logo6,
            title: "मानक : पथप्रदर्शक"
        },
        {
            img: logo7,
            title: "Ministry of Micro, Small and Medium Enterprises"
        },
        {
            img: logo8,
            title: "Restriction of Hazardous Substances"
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
                                <div className="LogoContainer">
                                    <img src={item.img} alt="" />
                                    <p>{item.title}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
        </>
    )
}
export default SeedoCertification