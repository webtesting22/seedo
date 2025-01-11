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
            title: "White Labelling",
            description: "Our white-label solutions allow you to brand our high-quality products as your own. This enables you to expand your product range while maintaining your unique brand identity."
        }
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
            <h1>Our Services</h1>
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

                            <Col lg={8} md={12} style={{ width: "100%" }} key={index} data-aos="fade-up"
                                data-aos-delay={`${index * 100}`}>
                                <div>
                                    <div className="BlankGrayBoxContainer">
                                        <img src={item.img} alt="" />
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