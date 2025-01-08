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
import amazon from "./amazon.svg"
import flifkart from "./flifkart.svg"
import smartBazaar from "./smartBazaar.svg"
import Snooplay from "./Snooplay.svg"
import swiggy from "./swiggy.svg"
import whole9years from "./whole9years.svg"
import zapto from "./zapto.svg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Row, Col } from "antd";
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import AboutUsSection from "./AboutUsSection.png"
import Zepto from "./Zepto.png"

const ZoomCards = () => {
    const imageRef = useRef(null);
    const [width, setWidth] = useState('40%');

    useEffect(() => {
        const handleScroll = () => {
            if (imageRef.current) {
                const rect = imageRef.current.getBoundingClientRect();
                const scrollFactor = Math.min(Math.max((window.innerHeight - rect.top) / window.innerHeight, 0), 1);
                const newWidth = 40 + scrollFactor * 30; // 40% to 100%
                setWidth(`${newWidth}%`);
            }
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.addEventListener('scroll', handleScroll);
                } else {
                    window.removeEventListener('scroll', handleScroll);
                }
            },
            { threshold: 0.1 }
        );

        if (imageRef.current) observer.observe(imageRef.current);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // const [hoveredItem, setHoveredItem] = useState(null);

    // const items = [
    //     { item: "Item 1", heading: "Brainy Bear", image: Teddy, Category: "Early Learning Toys" },
    //     { item: "Item 4", heading: "Jet Series", image: JetSeries, Category: "RC Car" },
    //     { item: "Item 5", heading: "Racing Series", image: Racingseries, Category: "Racing Series" },
    //     { item: "Item 5", heading: "Drift Series", image: DriftSeries, Category: "Drift Series" },
    //     { item: "Item 5", heading: "Construction Series", image: Construction, Category: "Construction Series" },
    //     { item: "Item 5", heading: "New launches", image: NewLaunches, Category: "New Launches" },
    // ];

    return (
        <>
            {/* <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="SANSONGraphicContainer">
                    <div>
                        <h1 style={{ fontSize: "40px", color: "white", margin: "0px" }}>Sanson Promotion Innovations LLP</h1>
                        <p>Sanson Promo Innovations LLP is a prominent leader in consumer and trade promotions, trusted by major FMCG brands such as Unilever, Glaxo, Perfetti, Mondelez, and Britannia. The company excels in collaborating with esteemed licensors like Disney, Marvel, Mattel, Pokémon, and Doraemon. With comprehensive expertise in conceptualization, product engineering, mass manufacturing, quality assurance, and logistics, Sanson consistently surpasses client expectations.This commitment to delivering high-quality products and innovative campaigns not only fosters brand loyalty but also drives significant business growth.</p>
                    </div>
                </div>
            </div> */}
            <div className="AboutSeedoContent">
                <div>
                    <p>Welcome to Seedo Toys</p>
                    <h1>Where Imagination Comes to Life!</h1>
                </div>
                <div>
                    <div>
                        <img ref={imageRef} src={AboutUsSection} alt="" style={{
                            width,
                            // transition: 'width 0.2s ease',
                            height: '100%',
                            objectFit: 'cover',
                        }} />
                        <p><b>At Seedo Toys,</b> we believe in sparking <b>creativity and joy</b> with every toy we make. Our collection of high-quality, safe, and affordable toys is crafted to inspire children’s imaginations while giving <b>parents complete peace of mind</b>.
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="SANSONGraphicContainer">
                    <div>
                        <h1 style={{ fontSize: "40px", color: "white", margin: "0px" }}>Sanson Promotion Innovations LLP</h1>
                        <p>Sanson Promo Innovations LLP is a prominent leader in consumer and trade promotions, trusted by major FMCG brands such as Unilever, Glaxo, Perfetti, Mondelez, and Britannia. The company excels in collaborating with esteemed licensors like Disney, Marvel, Mattel, Pokémon, and Doraemon. With comprehensive expertise in conceptualization, product engineering, mass manufacturing, quality assurance, and logistics, Sanson consistently surpasses client expectations.This commitment to delivering high-quality products and innovative campaigns not only fosters brand loyalty but also drives significant business growth.</p>
                    </div>
                </div>
            </div>
            <section id="ZoomCardsContainer">

                {/* <Row>
                    <Col lg={12}>
                        <div className="headingHeaderContainer" style={{ padding: "0px" }}>
                            <h1>Trusted Presence <b>Across India</b></h1>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div>
                            <p style={{ fontSize: "18px" }}>Proudly available in 3000+ stores nationwide, bringing quality and innovation closer to you every day!</p>
                            <Link to="/aboutSeedo"><button className="KnowMorebtn">Know More</button></Link>
                        </div>
                    </Col>
                </Row> */}
                <div className="headingHeaderContainer">
                    <h1 style={{ textAlign: "center" }}>Where to Find Us?</h1>
                </div>
                <div id="ClientSliderContainer">
                    <Swiper
                        slidesPerView={5} // Adjust based on screen size or requirement
                        spaceBetween={30}
                        loop={true} // Enable infinite scroll
                        autoplay={{
                            delay: 100,
                            disableOnInteraction: false,
                        }}
                        speed={2000} // Smooth scrolling speed
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {/* {items.map((item, index) => ( */}
                        <SwiperSlide >
                            <Link to="https://www.amazon.in/" target="_blank">
                                <div className="GrayCardContainer">
                                    <img src={amazon} alt="" />
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide  >
                            <Link to="https://www.flipkart.com/" target="_blank">
                                <div className="GrayCardContainer">
                                    <img src={flifkart} alt="" />
                                </div>
                            </Link>
                        </SwiperSlide >
                        <SwiperSlide >
                            <Link to="https://reliancesmartbazaar.com/" target="_blank">
                                <div className="GrayCardContainer">
                                    <img src={smartBazaar} alt="" />
                                </div>
                            </Link >
                        </SwiperSlide >
                        <SwiperSlide >
                            <Link to="https://snooplay.in/" target="_blank">
                                <div className="GrayCardContainer">
                                    <img src={Snooplay} alt="" />
                                </div>
                            </Link >
                        </SwiperSlide >
                        <SwiperSlide >
                            <Link to="https://www.swiggy.com/" target="_blank">
                                <div className="GrayCardContainer">
                                    <img src={swiggy} alt="" />
                                </div>
                            </Link >
                        </SwiperSlide >
                        <SwiperSlide >
                            <Link to="https://whole9yards.in/" target="_blank">
                                <div className="GrayCardContainer">
                                    <img src={whole9years} alt="" />
                                </div>
                            </Link >
                        </SwiperSlide >
                        <SwiperSlide >
                            <Link to="https://www.zeptonow.com/" target="_blank">
                                <div className="GrayCardContainer">
                                    <img src={Zepto} alt="" />
                                </div>
                            </Link >
                        </SwiperSlide >


                        {/* ))} */}
                    </Swiper>

                </div>
                {/* < img src={ZoomBackImage} alt="" className="BackoverlayImage" /> */}
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
                </div > */}

            </section>
        </>
    )
}
export default ZoomCards;