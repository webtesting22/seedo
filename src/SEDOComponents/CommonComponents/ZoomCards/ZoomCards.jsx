import React, { useState, useRef, useEffect } from "react";
import "../../Styles/ZoomCards.css"
import Teddy from "/Images/Products/Teddy.png"
import JetSeries from "/Images/Products/JetSeries.png"
import Racingseries from "/Images/Products/Racingseries.png"
import DriftSeries from "/Images/Products/DriftSeries.png"
import Construction from "/Images/Products/Construction.png"
import NewLaunches from "/Images/Products/NewLaunches.png"
import ZoomBackImage from "/Images/Banners/ZoomBackImage.jpg"
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const ZoomCards = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const items = [
        { item: "Item 1", heading: "Brainy Bear", image: Teddy, Category: "Early Learning Toys" },
        { item: "Item 4", heading: "Jet Series", image: JetSeries, Category: "RC Car" },
        { item: "Item 5", heading: "Racing Series", image: Racingseries, Category: "Racing Series" },
        { item: "Item 5", heading: "Drift Series", image: DriftSeries, Category: "Drift Series" },
        { item: "Item 5", heading: "Construction Series", image: Construction, Category: "Construction Series" },
        { item: "Item 5", heading: "New launches", image: NewLaunches, Category: "New Launches" },
    ];

    return (
        <>
            <section id="ZoomCardsContainer">
                <div className="headingHeaderContainer">
                    <h1>Where to buy?</h1>
                </div>
                <div>
                    <Swiper
                        slidesPerView={6} // Adjust based on screen size or requirement
                        spaceBetween={30}
                        loop={true} // Enable infinite scroll
                        autoplay={{
                            delay: 100,
                            disableOnInteraction: false,
                        }}
                        speed={3000} // Smooth scrolling speed
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {/* {items.map((item, index) => ( */}
                        <SwiperSlide >
                            <div className="GrayCardContainer">

                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="GrayCardContainer">

                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="GrayCardContainer">

                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="GrayCardContainer">

                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="GrayCardContainer">

                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="GrayCardContainer">

                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="GrayCardContainer">

                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="GrayCardContainer">

                            </div>
                        </SwiperSlide>

                        {/* ))} */}
                    </Swiper>
                    <br /><br />
                    <Swiper
                        slidesPerView={6} // Adjust based on screen size or requirement
                        spaceBetween={30}
                        loop={true} // Enable infinite scroll
                        autoplay={{
                            delay: 100,
                            disableOnInteraction: false,
                            reverseDirection: true, 
                        }}
                        speed={3000} // Smooth scrolling speed
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {/* {items.map((item, index) => ( */}
                        <SwiperSlide >
                            <div className="GrayCardContainer">

                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="GrayCardContainer">

                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="GrayCardContainer">

                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="GrayCardContainer">

                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="GrayCardContainer">

                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="GrayCardContainer">

                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="GrayCardContainer">

                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="GrayCardContainer">

                            </div>
                        </SwiperSlide>

                        {/* ))} */}
                    </Swiper>
                </div>
                {/* <img src={ZoomBackImage} alt="" className="BackoverlayImage" /> */}
                {/* <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" data-aos="fade-right"
                        data-aos-offset="300" data-aos-duration="500"
                        data-aos-easing="ease-in-sine">Playful Creations </h1>
                    <hr />
                    <p> <Link to="/products"> See All Toys &nbsp;<FaArrowRightLong /></Link></p>
                </div>
                <ul className="avatars" data-aos="fade-up"
                    data-aos-duration="500">
                    {items.map((item, index) => (
                
                        <>

                            <Link to="/products">
                                <li
                                    key={index}
                                    className={hoveredItem === index ? "hovered" : ""}
                                    onMouseEnter={() => setHoveredItem(index)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    <img src={item.image} alt="" />
                                    <div className="icon"></div>
                                    <p style={{ color: "black" }}>{item.Category}</p>
                                </li></Link>
                        </>
                      
                    ))}
                </ul> */}
                {/* <div className="ViewMoreBtn">
                    <Link to="/products" style={{ textDecoration: "none" }}><button className="buttonStyleSecond">Explore Toys World</button></Link>
                </div> */}

            </section>
        </>
    )
}
export default ZoomCards