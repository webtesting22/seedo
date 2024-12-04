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

const SeedoCertification = () => {
    const CertificationLogoData = [
        {
            img: logo1
        },
        {
            img: logo2
        },
        {
            img: logo3
        },
        {
            img: logo4
        },
        {
            img: logo5
        },
        {
            img: logo6
        },
        {
            img: logo7
        },
        {
            img: logo8
        },
    ]
    return (
        <>
            <section id="SeedoCertificationContainer">
                <div className="LeftSideContentContainer">
                    <h2 className="PrimaryHeading-black">Industrial Certification</h2>
                    <p>Passed Testing, Awaiting Certificate</p>
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