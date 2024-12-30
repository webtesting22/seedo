import React from "react";
import "../../Styles/AboutContent.css"
import { Row, Col } from "antd";
import Image1 from "/Images/Banners/About1.png"
import Image2 from "/Images/Banners/About2.png"
import Image3 from "/Images/Banners/About3.png"
import Image4 from "/Images/Banners/About4.png"
import Image5 from "/Images/Banners/About5.png"
import Image6 from "/Images/Banners/About6.png"
import Image7 from "/Images/Banners/About7.png"
import Image8 from "/Images/Banners/About8.png"
import Image9 from "/Images/Banners/About9.png"
import Image10 from "/Images/Banners/About10.png"
import Image11 from "/Images/Banners/About11.png"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const AboutContent = () => {

    const FirstImages = [
        {
            image: Image1
        },
        {
            image: Image2
        },
        {
            image: Image3
        },


    ]

    const SecondImages = [
        {
            image: Image3
        },
        {
            image: Image5
        },
        {
            image: Image6
        },
        {
            image: Image7
        },
        {
            image: Image8
        },
        {
            image: Image9
        },
        {
            image: Image10
        },
        {
            image: Image11
        },


    ]
    return (
        <>
            <section id="AboutContent">

                <h2 className="PrimaryHeading-black"> <svg width="100%" style={{ fill: "#A5252B", color: "#A5252B" }} class="svg rotating-image" height="100%" viewBox="0 0 20 23" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.01745 19.7867C8.01745 21.7867 9.29195 23.001 10 23.001C10.7081 23.001 11.9826 21.7867 11.9826 19.7867C11.9826 19.5724 10.2124 14.2867 10.1416 11.7867C12.195 13.0724 15.9477 17.2867 16.1601 17.3581C17.8594 18.3581 19.4879 17.8581 19.9128 17.2867C20.196 16.6438 19.842 14.9295 18.0718 13.9295C17.8594 13.7867 12.549 12.7153 10.2832 11.501C12.549 10.2867 17.8594 9.21526 18.0718 9.0724C19.842 8.0724 20.196 6.35812 19.9128 5.78669C19.4879 5.14383 17.8594 4.64383 16.1601 5.64383C15.9477 5.78669 12.195 9.92955 10.1416 11.2867C10.2124 8.71526 11.9826 3.57241 11.9826 3.21526C11.9826 1.21526 10.7081 0.000976562 10 0.000976562C9.29195 0.000976562 8.01745 1.21526 8.01745 3.21526C8.01745 3.50097 9.71678 8.71526 9.85839 11.2867C7.73423 9.92955 4.12315 5.78669 3.83993 5.64383C2.1406 4.64383 0.512072 5.14383 0.0872398 5.78669C-0.195982 6.35812 0.158045 8.0724 1.92818 9.0724C2.2114 9.21526 7.451 10.2867 9.64597 11.501C7.451 12.7153 2.2114 13.7867 1.92818 13.9295C0.158045 14.9295 -0.195982 16.6438 0.0872398 17.2867C0.512072 17.8581 2.1406 18.3581 3.83993 17.3581C4.05234 17.2153 7.73423 13.0724 9.85839 11.7867C9.71678 14.2867 8.01745 19.5724 8.01745 19.7867Z" fill="currentColor"></path>
                </svg>
                    Technology and Machinery</h2>
                <br />
                <Row>
                    <Col lg={14}>
                        <div className="ContentContainerCarousal">
                            <div>
                                <h2>In-House Spraying</h2>
                                <p>At Seedo Toys, we take pride in our in-house spraying capabilities, including pad printing, spray printing, tampo printing, and other finishing techniques. Our state-of-the-art facility is capable of spraying 200,000 toys per month, delivering stunning finishes such as high-gloss, anti-scratch, metallic, and pearl effects. All chemicals, coatings, and pigments used meet child safety standards, ensuring the highest safety for young users.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={10}>
                        <div id="swiperContainerFirst">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                // pagination={{
                                //     clickable: true,
                                // }}
                                // navigation={true}
                                speed={800}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {FirstImages.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={item.image} alt="" />
                                    </SwiperSlide>
                                ))}


                            </Swiper>
                        </div>
                    </Col>
                </Row>
                <Row className="row-reverse">

                    <Col lg={10}>
                        <div id="swiperContainerSecond">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                speed={800}
                                // pagination={{
                                //     clickable: true,
                                // }}
                                // navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {SecondImages.map((item, index) => (
                                    <SwiperSlide key={index}><img src={item.image} alt="" /></SwiperSlide>
                                ))}


                            </Swiper>
                        </div>
                    </Col>
                    <Col lg={14}>
                        <div className="ContentContainerCarousal ContentContainerCarousal2">
                            <div>
                                <br />
                                <h2>Self-Reliant PCB Manufacturing</h2>
                                <p>Seedo Toys has made significant strides by designing and producing its own PCBs, manufactured with the latest pick-and-place technology. We produce 150,000 to 200,000 PCBs monthly in our fully automated facility. Our PCB materials meet global safety standards, offering surge, voltage, and heat protection. They are phthalate-free, lead-free, and ROHS-compliant for international exports, ensuring both safety and reliability for our products.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}
export default AboutContent