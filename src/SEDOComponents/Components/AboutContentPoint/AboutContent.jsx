import React from "react";
import "../../Styles/AboutContent.css"
import { Row, Col } from "antd";
import Image1 from "../../../../public/Images/Banners/About1.png"
import Image2 from "../../../../public/Images/Banners/About2.png"
import Image3 from "../../../../public/Images/Banners/About3.png"
import Image4 from "../../../../public/Images/Banners/About4.png"
import Image5 from "../../../../public/Images/Banners/About5.png"
import Image6 from "../../../../public/Images/Banners/About6.png"
import Image7 from "../../../../public/Images/Banners/About7.png"
import Image8 from "../../../../public/Images/Banners/About8.png"
import Image9 from "../../../../public/Images/Banners/About9.png"
import Image10 from "../../../../public/Images/Banners/About10.png"
import Image11 from "../../../../public/Images/Banners/About11.png"
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
                <Row>
                    <Col lg={16}>
                        <div className="ContentContainerCarousal">
                            <div>
                                <h2>In-House Spraying</h2>
                                <p>At Seedo Toys, we take pride in our in-house spraying capabilities, including pad printing, spray printing, tampo printing, and other finishing techniques. Our state-of-the-art facility is capable of spraying 200,000 toys per month, delivering stunning finishes such as high-gloss, anti-scratch, metallic, and pearl effects. All chemicals, coatings, and pigments used meet child safety standards, ensuring the highest safety for young users.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8}>
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

                    <Col lg={8}>
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
                    <Col lg={16}>
                        <div className="ContentContainerCarousal ContentContainerCarousal2">
                            <div>
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