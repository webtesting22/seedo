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
import odm from "./odm.png"
import oem from "./oem.png"
import white from "./white label.png"
import SeedbrandIcon from "./SeedbrandIcon.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BackColorShade from "./BackColorShade.svg"
// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import MakeinIndia from "./Make-in-India-Logo-PNG-HD.svg"
import BestSellerProducts from "../../BestSellerProductList";
import ProductsBackShape from "./ProductsBackShape.svg"
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

        // BestSeller3,
        // BestSeller1,
        BestSeller2,
        BestSeller2,
        BestSeller2,
        BestSeller2,
        BestSeller2,
        BestSeller2,
        BestSeller2,
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


            <section className="OurBestsellers" >

                <div>
                    <div className="SectionHeadingContainer">
                        {/* <span>Best Sellers</span> */}
                        <h1 className="titleFont">Featured Collection</h1>
                    </div>
                    <div>
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={30}
                            freeMode={true}
                            loop={true}
                            // autoplay={{
                            //     delay: 2000,
                            //     disableOnInteraction: false,
                            // }}
                            navigation={true}
                            speed={700}
                            modules={[Autoplay, FreeMode, Navigation, Pagination]}
                            className="mySwiper"
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {BestSellerProducts.BestSeller.products.map((item, index) => (
                                <SwiperSlide key={item.id}>
                                    <Link to={item.link} style={{ textDecoration: "none", width: "100%" }}>
                                        <div className="BestSellerCardsContainer">
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    backgroundColor: `${item.colorCode}`,
                                                    borderRadius: "10px",
                                                    minHeight: "400px",
                                                    width: "100%",
                                                    overflow: "hidden",
                                                }}
                                            >
                                                {/* Default image */}
                                                <img
                                                    src={item.ProductImage[0]}
                                                    alt={item.name}
                                                    className={`BestSellerImage ${item.ProductImage[1] ? "DefaultImage" : "" // Add class only if hover image exists
                                                        }`}
                                                />

                                                {/* Hover image (only if available) */}
                                                {item.ProductImage[1] && (
                                                    <img
                                                        src={item.ProductImage[1]}
                                                        alt={item.name}
                                                        className="BestSellerImage hoverableImageImage"
                                                    />
                                                )}
                                            </div>
                                            <div style={{ width: "100%", height: "60px" }}>
                                                <h3 className="BestSellerTitle">{item.name}</h3>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </div>
            </section>
            <section className="ourServices">
                <div className="OurServicesSection">
                    <div className="BackSVG">
                        <svg width="1895" height="997" viewBox="0 0 1895 997" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M489 15.2177C394.5 -2.98877 212 -4.08235 0 74.7177V996.5H1895V18.2177C1888.83 23.8843 1864.8 39.2177 1818 55.2177C1739.67 78.551 1575.33 94.0308 1397 48.5C1373.5 42.5 1279.3 16.1177 1240.5 9.71766C1187.5 0.217663 1045.7 -14.9823 822.5 36.2177C745.5 53.8807 663.4 48.8177 489 15.2177Z" fill="#A0DEF7" />
                        </svg>
                    </div>

                    {/* <img src={BackColorShade} alt="" className="BackOverlayImage"/> */}
                    <div className="CardsContainer" style={{ width: "100%" }}>
                        <Row style={{ width: "100%" }}>
                            <Col lg={24} style={{ width: "100%" }}>
                                <div className="SectionHeadingContainer">
                                    <h1 className="titleFont">Our Offerings</h1>
                                </div>
                            </Col>
                            <Col lg={6} md={8} style={{ width: "100%" }}>
                                <Link to="/ourOfferings">
                                    <div className="GreyBox" data-aos="fade-up"
                                        data-aos-duration="1000">
                                        <img src="/Images/OurOfferingIcons/OEM.png" alt="" />
                                        <h4>Original Equipment <br /> Manufacturer (OEM)</h4>
                                        <p>Our expertise lies in producing high-quality products tailored to our client's...</p>
                                        {/* <p className="HidePara"></p> */}
                                        {/* <button><div>
                                            <FaArrowRightLong style={{ color: "black" }} /></div></button> */}
                                        {/* <p>We specialize in Original Design manufacturing, creating innovative products tailored to clients' specifications. Our focus is on quality, customization, and delivering exceptional value to our partners.</p> */}
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={6} md={8} style={{ width: "100%" }}>
                                <Link to="/ourOfferings">
                                    <div className="GreyBox" data-aos="fade-up"
                                        data-aos-duration="1200">
                                        <img src="/Images/OurOfferingIcons/ODM.png" alt="" />
                                        <h4>Original Design <br /> Manufacturer (ODM)</h4>
                                        <p >We focus on innovative design manufaturing, creating unique and effective products...</p>
                                        {/* <button><div>
                                            <FaArrowRightLong style={{ color: "black" }} /></div></button> */}
                                        {/* <p>We specialize in producing high-quality products tailored to our client's specifications, ensuring exceptional quality and performance while fostering
                                        strong partnerships for mutual growth success.
                                    </p> */}
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={6} md={8} style={{ width: "100%" }}>
                                <Link to="/ourOfferings">
                                    <div className="GreyBox" data-aos="fade-up"
                                        data-aos-duration="1500">
                                        <img src="/Images/OurOfferingIcons/WHITELABELING.png" alt="" />
                                        <h4 >White Labelling <br /> Solutions</h4>
                                        <p>Our white-label solutions allow you to brand our high-quality products...</p>
                                        {/* <button><div>
                                            <FaArrowRightLong style={{ color: "black" }} /></div></button> */}
                                        {/* <p>We offer white-label solutions, allowing you to brand our high-quality products as your own. This enables you to expand your product range while maintaining your unique brand identity.
                                    </p> */}
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={6} md={8} style={{ width: "100%" }}>
                                <Link to="/ourOfferings">
                                    <div className="GreyBox" data-aos="fade-up"
                                        data-aos-duration="1500">
                                        <img src="/Images/OurOfferingIcons/BRANDDISTRUBUTION.png" alt="" />
                                        <h4 >Seedo <br /> Brand Distribution</h4>
                                        <p>Seedo proudly designs, manufactures, and markets toys under its own...
                                        </p>
                                        {/* <button><div>
                                            <FaArrowRightLong style={{ color: "black" }} /></div></button> */}

                                    </div>
                                </Link>
                            </Col>

                        </Row>
                    </div>
                </div>

            </section>
            {/* <section className="OurBestsellers">
                <div className="OurServicesSection" style={{ padding: "0px" }}>
                    <div className="headingHeaderContainer">
                     
                    </div>
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
            </section> */}
        </>
    )
}
export default ImagesGallery