import React, { useState, useRef, useEffect } from "react";
import "../../Styles/ZoomCards.css"
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from "./amazon.svg"
import flifkart from "./flifkart.svg"
import smartBazaar from "./smartBazaar.svg"
import Snooplay from "./Snooplay.svg"
import swiggy from "./swiggy.svg"
import whole9years from "./whole9years.svg"
import zapto from "./zapto.svg"
import Wishkey from "../../Components/Clients/Wishkey.png"
import image5 from "./Toys__R__Us_logo.svg.svg"
import image6 from "./VMM-1 1.svg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, FreeMode } from 'swiper/modules';
import Zepto from "./zepto-logo-vector_logoshape.png"
import RightSideCar from "./RightSideCar.png"
import LeftSideCar from "./LeftSideCar.png"
import Dmart from "./Dmart.png"
import MUMUSO from "./MUMUSO.png"
import lulu from "./lulu.png"
import image3 from "./619a4143-2b0f-40a7-b92f-4bf48d5bed8e-removebg-preview 1.svg"
import image2 from "./24Seven_logo.svg"
const ZoomCards = () => {
    const imageRef = useRef(null);
    const [width, setWidth] = useState('40%');
    const rightImageRef = useRef(null);
    const leftImageRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    // Handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY; // Get current scroll position
            setScrollPosition(scrollY); // Update state with scroll position
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll); // Cleanup on component unmount
        };
    }, []);

    // Calculate translateY dynamically based on scroll position
    const calculateTranslateY = (baseOffset, multiplier) => {
        return `${baseOffset + scrollPosition * multiplier}px`;
    };
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

    const Clients = [
        {
            link: "https://www.amazon.in/",
            img: amazon,

        },
        {
            link: "https://www.flipkart.com/",
            img: flifkart,

        },
        {
            link: "https://reliancesmartbazaar.com/",
            img: smartBazaar,
            color: "DC3739"
        },
        {
            link: "https://snooplay.in/",
            img: Snooplay,
            color: "D32A2A"
        },
        {
            link: "https://www.swiggy.com/",
            img: swiggy,
            color: "F15F34"
        },
        {
            link: "https://whole9yards.in/",
            img: whole9years,

        },
        {
            link: "https://www.zeptonow.com/",
            img: Zepto,

        },
        {
            img: image5,
            link: "https://www.toysrus.in/"
        },

        {
            img: image6,
            link: "https://www.vishalmegamart.com/"
        },
        {
            img: Dmart,
            link: "https://www.dmart.in/"
        },
        {
            img: lulu,
            link: "https://gcc.luluhypermarket.com/"
        },
        {
            img: MUMUSO,
            link: "https://www.mumuso.com/"
        },
        {
            link: "",
            img: Wishkey,
            color: "000000"
        },
        {
            img: image3,
            link: "https://wembleytoys.com/"
        },
        {
            img: image2,
            link: "https://www.24seventalent.com/"
        },

    ];

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
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div id="SeedoPersonal">
                    <div className="ImagesContainer">
                        <img
                            ref={rightImageRef}
                            className="parallax-image"
                            style={{
                                transform: `translateY(${calculateTranslateY(-200, 0.2)})`, // Right image moves downward
                                transition: "transform 0.1s linear",
                            }}
                            src={RightSideCar}
                            alt="Right Side Car"
                        />
                        <img
                            ref={leftImageRef}
                            className="parallax-image"
                            style={{
                                transform: `translateY(${calculateTranslateY(200, -0.2)})`, // Left image moves upward
                                transition: "transform 0.1s linear",
                            }}
                            src={LeftSideCar}
                            alt="Left Side Car"
                        />
                    </div>
                    <div>
                        {/* <h1 style={{ fontSize: "30px", margin: "0px" }} data-aos="fade-up"
                            data-aos-duration="1000">SEEDO</h1> */}
                        <p data-aos="fade-up"
                            data-aos-duration="1500"><b>At Seedo,</b> we believe in sparking <b>creativity and joy</b> with every toy we make. <br />Our collection of high-quality, safe, and affordable toys is crafted to inspire children’s imaginations while giving parents complete peace of mind.
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="SANSONGraphicContainer">
                    <div>
                        <h1 style={{ fontSize: "30px", color: "white", margin: "0px" }} data-aos="fade-up"
                            data-aos-duration="1000">Sanson Promotion Innovations LLP</h1>
                        <p data-aos="fade-up"
                            data-aos-duration="1500"> Sanson Promotion Innovations LLP is a prominent leader in consumer and trade promotions, trusted by major FMCG brands such as Unilever, Glaxo, Perfetti, Mondelez, and Britannia. As the parent company of Seedo, Sanson excels in collaborating with esteemed licensors like Disney, Marvel, Mattel, Pokémon, and Doraemon. With comprehensive expertise in conceptualization, product engineering, mass manufacturing, quality assurance, and logistics, Sanson consistently surpasses client expectations. <br /> This commitment to delivering high-quality products and innovative campaigns is reflected in Seedo's values as well.</p>
                    </div>
                </div>
            </div>
            <div className="AboutSeedoContent">
                {/* <div>
                    <p>Welcome to Seedo Toys</p>
                    <h1>SEEDO- Where Imagination Comes To Life!</h1>
                </div> */}
                <div>
                    <div>
                        {/* <img ref={imageRef} src={AboutUsSection} alt="" style={{
                            width,
                            // transition: 'width 0.2s ease',
                            height: '100%',
                            objectFit: 'cover',
                        }} /> */}
                        <div className="SectionHeadingContainer" style={{ paddingBottom: "0px" }}>
                            <h2 className="titleFont" data-aos="fade-up"
                                data-aos-duration="1000">Trusted Presence Across India</h2>

                        </div>
                        {/* <p data-aos="fade-up"
                            data-aos-duration="1500"><b>At Seedo Toys,</b> we believe in sparking <b>creativity and joy</b> with every toy we make. Our collection of high-quality, safe, and affordable toys is crafted to inspire children’s imaginations while giving parents complete peace of mind.
                        </p> */}
                        <p data-aos="fade-up"
                            data-aos-duration="1500">Proudly <b>available in 3000+ stores nationwide</b>, including General Trade and Modern Trade, we bring quality and innovation closer to you every day! <br />Additionaly, explore our presence across these<b> digital platforms:</b>
                        </p>
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
                    <h1 style={{ textAlign: "center" }}></h1>
                </div>
                {/* <div id="ClientSliderContainer"> */}
                <div id="ColorCorrectionsContainer">
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        freeMode={true}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        speed={800}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        modules={[Autoplay, FreeMode]}
                        className="mySwiper"
                        breakpoints={{
                            320: { // Mobile breakpoint (320px and up)
                                slidesPerView: 2, // Display 2 slides on mobile
                            },
                            768: { // Tablet breakpoint (768px and up)
                                slidesPerView: 3, // Display 3 slides on tablet
                            },
                            1024: { // Desktop breakpoint (1024px and up)
                                slidesPerView: 5, // Display 5 slides on desktop
                            },
                        }}
                    >
                        {Clients.map((item, index) => (
                            <SwiperSlide key={index} >
                                <Link to={item.link} target="_blank">
                                    <div className="GrayCardContainer">
                                        <img src={item.img} alt="" />
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* <Swiper
    slidesPerView={5} // Adjust based on screen size or requirement
    spaceBetween={30}
    loop={true} // Enable infinite scroll
    loopAdditionalSlides={5} // Increase the number of cloned slides
    autoplay={{
        delay: 100,
        disableOnInteraction: false,
    }}
    speed={2000} // Smooth scrolling speed
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
    breakpoints={{
        320: { // Mobile breakpoint (320px and up)
            slidesPerView: 2, // Display 2 slides on mobile
        },
        768: { // Tablet breakpoint (768px and up)
            slidesPerView: 3, // Display 3 slides on tablet
        },
        1024: { // Desktop breakpoint (1024px and up)
            slidesPerView: 5, // Display 5 slides on desktop
        },
    }}
>
    {Clients.map((item, index) => (
        <SwiperSlide key={index}>
            <Link to={item.link} target="_blank">
                <div className="GrayCardContainer">
                    <img src={item.img} alt="" />
                </div>
            </Link>
        </SwiperSlide>
    ))}
</Swiper> */}


                {/* </div> */}
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