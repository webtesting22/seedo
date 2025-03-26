import React, { useState } from "react";
import { Row, Col } from "antd";
import "./ImagesGallery.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import BestSellerProducts from "../../BestSellerProductList";
const ImagesGallery = () => {
    const [selectedColors, setSelectedColors] = useState(
        BestSellerProducts.BestSeller.products.map(product =>
            product.colors?.[0] || { colorCode: "#FFF", ProductImage: product.ProductImage[0] }
        )
    );

    const handleColorChange = (index, color) => {
        const updatedColors = [...selectedColors];
        updatedColors[index] = color;
        setSelectedColors(updatedColors);
    };

    return (
        <>
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
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
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
                                    <div className="BestSellerCardsContainer">
                                        <Link to={item.link} style={{ textDecoration: "none", width: "100%" }}>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    background: selectedColors[index].colorCode,
                                                    borderRadius: "30px 30px 0px 0px",
                                                    minHeight: "400px",
                                                    width: "100%",
                                                    overflow: "hidden",
                                                }}
                                            >
                                                <img
                                                    src={selectedColors[index].ProductImage}
                                                    alt={item.name}
                                                    className="BestSellerImage"
                                                />
                                            </div>
                                        </Link>
                                        <div className="BestSellerCardHeading">
                                            <div>
                                                <h3 className="BestSellerTitle">{item.name}</h3>
                                                <p>{item.categoryName}</p>
                                            </div>
                                        </div>
                                        {/* Color Options */}
                                        <div className="color-options">
                                            {item.colors.map((color, colorIndex) => (
                                                <span
                                                    key={colorIndex}
                                                    className="color-circle"
                                                    style={{
                                                        background: color.colorCode,
                                                        border: selectedColors[index].colorName === color.colorName,
                                                        transition: "2s"
                                                    }}
                                                    onClick={() => handleColorChange(index, color)}
                                                ></span>
                                            ))}
                                        </div>
                                    </div>
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

        </>
    )
}
export default ImagesGallery

