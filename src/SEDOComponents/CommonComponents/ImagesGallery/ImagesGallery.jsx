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
import BestSeller1 from "./1.svg"
import BestSeller2 from "./2.svg"
import BestSeller3 from "./3.svg"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import MakeinIndia from "./Make-in-India-Logo-PNG-HD.svg"
const ImagesGallery = () => {
    const ImagesGalleryData = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
    ]

    const BestSellerdata = [

        BestSeller3,
        BestSeller1,
        BestSeller2,


    ]
    return (
        <>
            <section className="ImageGalleryContainer">
                {/* <Row>
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
                </Row> */}
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

                    <div className="CardsContainer" style={{ width: "100%" }}>
                        <Row style={{ width: "100%" }}>
                            <Col lg={6} style={{ width: "100%" }}>
                                <div className="headingHeaderContainer">
                                    <h1>Our Services</h1>
                                </div>
                            </Col>
                            <Col lg={6} md={12} style={{ width: "100%" }}>
                                <Link to="/ourservices">
                                    <div className="GreyBox">
                                        <h4>OEM</h4>
                                        {/* <p>We specialize in Original Design manufacturing, creating innovative products tailored to clients' specifications. Our focus is on quality, customization, and delivering exceptional value to our partners.</p> */}
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={6} md={12} style={{ width: "100%" }}>
                                <Link to="/ourservices">
                                    <div className="GreyBox">
                                        <h4>ODM</h4>
                                        {/* <p>We specialize in producing high-quality products tailored to our client's specifications, ensuring exceptional quality and performance while fostering
                                        strong partnerships for mutual growth success.
                                    </p> */}
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={6} md={12} style={{ width: "100%" }}>
                                <Link to="/ourservices">
                                    <div className="GreyBox">
                                        <h4>WHITE LABLE</h4>
                                        {/* <p>We offer white-label solutions, allowing you to brand our high-quality products as your own. This enables you to expand your product range while maintaining your unique brand identity.
                                    </p> */}
                                    </div>
                                </Link>
                            </Col>

                        </Row>
                    </div>
                </div>

            </section>

            <section className="OurBestsellers" >

                <div >
                    <div className="headingHeaderContainer">
                        <h1 style={{ textAlign: "center" }}>Our Bestsellers </h1>
                    </div>
                    <br />
                    <br />
                    <div>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            {BestSellerdata.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <img src={item} alt={`Best Seller ${index + 1}`} className="BestSellerImage" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
            <section className="OurBestsellers">
                <div className="OurServicesSection" style={{ paddingTop: "0px" }}>
                    {/* <div className="headingHeaderContainer">
                     
                    </div> */}
                    <Row>
                        <Col lg={12}>
                            <div>
                                <h1 >Certifications </h1>
                                <p style={{ fontSize: "18px" }}>As strong advocates for local manufacturing, we take pride in sourcing all our components from within India. We fully support and align with Mr. Narendra Modi's visions of promoting the “Make In India" initiative, fostering economic
                                    growth and self-reliance in our nation.</p>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div>
                                <img src={MakeinIndia} alt="" style={{ width: "80%" }} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}
export default ImagesGallery