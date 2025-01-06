import React from "react";
import "./OurServices.css"
import Navigation from "../../CommonComponents/Navigation/Navigation";
import { Row, Col } from "antd";
const OurServices = () => {
    const servicesData = [
        {
            title: "OEM",
            description: "We specialize in producing high-quality products tailored to our client's specifications, ensuring exceptional quality and performance while fostering strong partnerships for mutual growth and success."
        },
        {
            title: "ODM",
            description: "We specialize in Original Design manufacturing, creating innovative products tailored to clients' specifications. Our focus is on quality, customization, and delivering exceptional value to our partners."
        },
        {
            title: "White label",
            description: "We offer white-label solutions, allowing you to brand our high-quality products as your own. This enables you to expand your product range while maintaining your unique brand identity."
        }
    ]
    return (
        <>
            <Navigation />
            <section className="OurServicesContainer">
                <div>
                    <h1>OUR SERVICES</h1>
                </div>
                <div>
                    <Row>
                        <Col lg={12}>
                            <div>
                                <p>We offer these services, and we invite you to reach out for any inquiries. Please feel free to connect with us through the footer section or the "Contact Us" page. We look forward to hearing from you!We offer these services, and we invite you to reach out for any inquiries. Please feel free to connect with us through the footer section or the "Contact Us" page. We look forward to hearing from you!We offer these services, and we invite you to reach out for any inquiries. Please feel free to connect with us through the footer section or </p>
                            </div>
                        </Col>
                        <Col lg={12}>
                        </Col>
                    </Row>
                </div>
                <br /><br /><br />
                <div className="AjustCenterContainer">
                    <div className="AdjustWidthSection">
                        <div>
                            <h1>PBSs</h1>
                        </div>
                        <div>
                            <div className="PendingGrayBox">

                            </div>
                            <br />
                            <p>We offer these services, and we invite you to reach out for any inquiries. Please feel free to connect with us through the footer section or the "Contact Us" page. We look forward to hearing from you!We offer these services, and we invite you to reach out for any inquiries. Please feel free to connect with us through the footer section or the "Contact Us" page. We look forward to hearing from you!We offer these services, and we invite you to reach out for any inquiries. Please feel free to connect with us through the footer section or </p>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <button>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="AdjustWidthSection">
                        <div>
                            <h1>In house spraying</h1>
                        </div>
                        <div>
                            <div className="PendingGrayBox">

                            </div>
                            <br />
                            <p>We offer these services, and we invite you to reach out for any inquiries. Please feel free to connect with us through the footer section or the "Contact Us" page. We look forward to hearing from you!We offer these services, and we invite you to reach out for any inquiries. Please feel free to connect with us through the footer section or the "Contact Us" page. We look forward to hearing from you!We offer these services, and we invite you to reach out for any inquiries. Please feel free to connect with us through the footer section or </p>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <button>Read More</button>
                            </div>
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
                                    <div style={{ display: "flex", justifyContent: "end", padding: "0px" }}>
                                        <button>Read More</button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12} md={24}>
                                <div className="BlankGrayBoxContainer">

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