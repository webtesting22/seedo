import React, { useEffect } from "react";
import "./OurServices.css"
import Navigation from "../../CommonComponents/Navigation/Navigation";
import { Row, Col, Image } from "antd";
import About1 from "./About1.svg"
import About2 from "./About2.svg"
import About3 from "./About3.svg"
import About5 from "./About5 1.svg"
import About7 from "./About7 1.svg"
import About10 from "./About10 1.svg"
import TopBanner from "./TopBanner.svg"
import ODMBanner from "./ODMBanner.svg"
const OurServices = () => {
    const servicesData = [
        {
            title: "Original Equipment Manufacturer (OEM)",
            description: "Our expertise lies in producing high-quality products tailored to our client's specifications, ensuring exceptional quality and performance while fostering strong partnerships for mutual growth and success."
        },
        {
            title: "Original Design Manufacturer (ODM)",
            img: ODMBanner,
            description: "We focus on innovative design manufaturing, creating unique and effective products."
        },
        {
            title: "White Label",
            description: "Our white-label solutions allow you to brand our high-quality products as your own. This enables you to expand your product range while maintaining your unique brand identity."
        }
    ]
    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Navigation />
            {/* <div className="TopVideoContainer" style={{ paddingTop: "5rem" }}>
                <img src={TopBanner} alt="" />
              
            </div> */}
            <section className="OurServicesContainer">

                <div className="OurServicesParagraph">
                    <Row>
                        <Col lg={24}>
                            <div>
                                <div style={{ padding: "0px" }}>
                                    <h1 style={{ fontSize: "40px" }}>Our Services</h1>
                                </div>
                                <p>We offer these services, and we invite you to reach out for any inquiries. Please feel free to connect with us through the footer section or the "Contact Us" page. We look forward to hearing from you!We offer these services, and we invite you to reach out for any inquiries. Please feel free to connect with us through the footer section or the "Contact Us" page. We look forward to hearing from you!We offer these services, and we invite you to reach out for any inquiries. Please feel free to connect with us through the footer section or </p>
                            </div>
                        </Col>
                        {/* <Col lg={12}>
                        </Col> */}
                    </Row>
                </div>
                <div className="AjustCenterContainer">

                    <div className="AdjustWidthSection">
                        <div>
                            <h1>In house spraying</h1>
                        </div>
                        <div>
                            <Row>
                                <Col lg={12}>
                                    <div className="PendingGrayBox">
                                        <div style={{ display: "flex", height: "100%" }} className="ImageAdjust">
                                            <Row style={{ width: "100%" }}>
                                                <Col lg={8}>

                                                    <div>
                                                        <Image src={About3} alt="" />
                                                    </div>
                                                </Col>
                                                <Col lg={8}>
                                                    <div>
                                                        <Image src={About1} alt="" />
                                                    </div>
                                                </Col>
                                                <Col lg={8}>
                                                    <div>
                                                        <Image src={About2} alt="" />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>

                                <br />
                                <Col lg={12}>

                                    <p>At Seedo Toys, we take pride in our
                                        in-house spraying capabilities, including
                                        pad printing, spray printing, tampo
                                        printing, and other finishing techniques.
                                        Our state-of-the-art facility is capable of
                                        spraying 2,00,000 toys per month,
                                        delivering stunning finishes Such as
                                        high-gloss, anti-scratch, metallic, and
                                        pearl effects. All chemicals, coatings, and
                                        pigments used meet child safety
                                        standards, ensuring the highest safety for
                                        young users.</p>
                                </Col>
                            </Row>
                            {/* <div style={{ display: "flex", justifyContent: "center" }}>
                                <button>Read More</button>
                            </div> */}
                        </div>
                    </div>
                    <div className="AdjustWidthSection">
                        <div>
                            <h1>Self-Reliant PCBs Manufacturing</h1>
                        </div>
                        <div>
                            <Row>
                                <Col lg={12}>
                                    <p>Seedo Toys has made significant
                                        strides by designing and producing its
                                        own PCBs, manufactured with the latest
                                        pick-and-place technology. We produce
                                        150,000 to 200,000 PCBs monthly in
                                        our fully automated facility. Our PCB
                                        materials meet global safety standards,
                                        offering surge, voltage, and heat
                                        protection. They are phthalate-free,
                                        lead-free, and ROHS-compliant for
                                        international exports, ensuring both
                                        safety and reliability for our products.</p>
                                </Col>
                                <Col lg={12}><div className="PendingGrayBox">
                                    <div style={{ display: "flex", height: "100%" }} className="ImageAdjust">
                                        <Row style={{ width: "100%" }}>
                                            <Col lg={8}>
                                                <div>
                                                    <Image src={About5} alt="" />
                                                </div>
                                            </Col>
                                            <Col lg={8}>
                                                <div>
                                                    <Image src={About7} alt="" />
                                                </div>
                                            </Col>
                                            <Col lg={8}>
                                                <div>
                                                    <Image src={About10} alt="" />
                                                </div>
                                            </Col>
                                        </Row>

                                    </div>
                                </div>

                                </Col>
                            </Row>
                            {/* <div style={{ display: "flex", justifyContent: "center" }}>
                                <button>Read More</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="RowColumnsAdjustContainer">

                    {servicesData.map((item, index) => (
                        <Row>
                            <Col lg={12} md={24} style={{ width: "100%" }} key={index}>
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                    <br />
                                    {/* <div style={{ display: "flex", justifyContent: "end", padding: "0px" }}>
                                        <button className="KnowMorebtn">Read More</button>
                                    </div> */}
                                </div>
                            </Col>
                            <Col lg={12} md={24}>
                                <div className="BlankGrayBoxContainer">
                                    <img src={item.img} alt="" />
                                </div>
                            </Col>
                        </Row>
                    ))}

                </div>
            </section>
        </>
    )
}
export default OurServices