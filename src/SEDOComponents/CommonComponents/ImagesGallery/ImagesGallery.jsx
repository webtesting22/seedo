import React from "react";
import { Row, Col } from "antd";
import "./ImagesGallery.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import image1 from "./1.png"
import image2 from "./2.png"
import image3 from "./3.png"
import image4 from "./4.png"
import image5 from "./5.png"
import image6 from "./6.png"

const ImagesGallery = () => {
    const ImagesGalleryData = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
    ]
    return (
        <>
            <section className="ImageGalleryContainer">
                <Row>
                    <Col lg={12} md={24}>
                        <div className="StoryGrayContainer">
                            <h1>STORY</h1>
                        </div>
                    </Col>
                    <Col lg={12} md={24}>
                        <div className="RightSideImageContainerGray">
                            <h1>IMAGE</h1>
                        </div>
                    </Col>
                </Row>
                {/* <div>
                    <p style={{ marginBottom: "0px", textAlign: "center" }}>@SEEDOToys</p>
                    <h2 style={{ marginTop: "0px", textAlign: "center" }}>We're on Instagram!</h2>
                </div>
                <br />
                <div className="ImagesContainer">
                    <Row>
                        {ImagesGalleryData.map((item, index) => (
                            <Col lg={4} md={6} key={index}>
                                <div className="GalleryCardImage">
                                    <img src={item} alt={`Gallery Image ${index + 1}`} />
                                </div>
                            </Col>
                        ))}

                    </Row>
                    <br />
                    <div style={{ display: "flex", justifyContent: "center", width: "100%" }} className="InsideContainer">
                        <Link to="https://www.instagram.com/seedotoys/" target="_blank"><button><FaArrowRightLong /></button></Link>
                    </div>
                </div> */}
            </section>
            <section className="ourServices">
                <div className="OurServicesSection">
                    <div className="headingHeaderContainer">
                        <h1>OUR Services</h1>
                    </div>
                    <div className="CardsContainer">
                        <Row>
                            <Col lg={8} md={12} style={{width:"100%"}}>
                                <div className="GreyBox">
                                    <p>OEM</p>
                                </div>
                            </Col>
                            <Col lg={8} md={12} style={{width:"100%"}}>
                                <div className="GreyBox">
                                    <p>OEM</p>
                                </div>
                            </Col>
                            <Col lg={8} md={12} style={{width:"100%"}}>
                                <div className="GreyBox">
                                    <p>OEM</p>
                                </div>
                            </Col>

                        </Row>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ImagesGallery