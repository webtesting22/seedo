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
import WhiteLebelling from "./WhiteLebelling.jpg"
import ODMNew from "./ODMNew.jpg"
import BrandDiscribution from "./BrandDiscribution.jpg"
import odm from "./odm.jpg"
import OEM from "./OEM.jpg"
const OurServices = () => {
    const servicesData = [
        {
            title: "Seedo Brand Distribution",
            image:BrandDiscribution,
            description: "Seedo proudly designs, manufactures, and markets toys under its own distinguished brand with its presence across India, delivering innovative and high-quality products that inspire creativity and joy across the country."
        },
        {
            title: "Original Equipment Manufacturer (OEM)",
            image:OEM,
            description: "We specialize in Original Design Manufacturing, creating innovative products tailored to the clients' specifications. Our focus is on quality, customization, and delivering exceptional value to our partners."
        },
        {
            title: "Original Design Manufacturer (ODM)",
            image: ODMNew,
            description: "We specialize in producing high-quality products tailored to our clients' specifications, ensuring exceptional quality and performance while fostering strong partnerships for mutual growth & success."
        },
        {
            title: "White Labelling",
            image:WhiteLebelling,
            description: "We offer white-label solutions, allowing you to brand our high-quality products as your own, This enables you to expand your product range while maintaining your unique brand identity."
        },

    ]
    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="AboutUs">
                <Navigation />
            </div>
            {/* <div className="TopVideoContainer" style={{ paddingTop: "5rem" }}>
                <img src={TopBanner} alt="" />
              
            </div> */}
            <section className="OurServicesContainer">
                <div className="SectionHeadingContainer">
                    <h2 className="titleFont" data-aos="fade-up"
                        data-aos-duration="1000"> Our Offerings</h2>
                </div>
                {/* <div className="OurServicesParagraph">
                    <Row>
                        <Col lg={24}>
                            <div>
                                <div style={{ padding: "0px" }}>
                                    <h1 style={{ fontSize: "40px" }}>Our Services</h1>
                                </div>
                                <p>We offer these services, and we invite you to reach out for any inquiries. Please feel free to connect with us through the footer section or the "Contact Us" page. We look forward to hearing from you!</p>
                            </div>
                        </Col>
                        <Col lg={12}>
                        </Col>
                    </Row>
                </div> */}

                <div className="RowColumnsAdjustContainer">
                    <Row>
                        {servicesData.map((item, index) => (

                            <Col lg={12} md={12} style={{ width: "100%" }} key={index} data-aos="fade-up"
                                data-aos-delay={`${index * 100}`}>
                                <div>
                                    <div className="BlankGrayBoxContainer">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div>
                                        <h2>{item.title}</h2>
                                        <p>{item.description}</p>
                                        <br />
                                        {/* <div style={{ display: "flex", justifyContent: "end", padding: "0px" }}>
                                        <button className="KnowMorebtn">Read More</button>
                                    </div> */}
                                    </div>
                                </div>

                            </Col>
                            // <Col lg={12} md={24}>

                            // </Col>

                        ))}
                    </Row>
                </div>
            </section>
        </>
    )
}
export default OurServices