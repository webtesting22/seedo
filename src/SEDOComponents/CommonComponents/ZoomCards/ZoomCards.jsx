import React, { useState, useRef, useEffect } from "react";
import "../../Styles/ZoomCards.css"
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, FreeMode, Navigation } from 'swiper/modules';
import RightSideCar from "./RightSideCar.png"
import LeftSideCar from "./LeftSideCar.png"
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
            img: "/Images/ProductClientLogos/Amazon.png",

        },
        {
            link: "https://www.flipkart.com/",
            img: "/Images/ProductClientLogos/Flipkart.png",

        },
        {
            link: "https://reliancesmartbazaar.com/",
            img: "/Images/ProductClientLogos/SmartSuperstore.png",
        },
        {
            link: "https://snooplay.in/",
            img: "/Images/ProductClientLogos/Snooplay.png",

        },
        {
            link: "https://www.swiggy.com/",
            img: "/Images/ProductClientLogos/Instamart.png",

        },
        {
            link: "https://whole9yards.in/",
            img: "/Images/ProductClientLogos/Whole9Yards.png",

        },
        {
            link: "https://www.zeptonow.com/",
            img: "/Images/ProductClientLogos/Zepto.png",

        },
        {
            img: "/Images/ProductClientLogos/ToysRusNew.png",
            link: "https://www.toysrus.in/"
        },

        {
            img: "/Images/ProductClientLogos/VishalMegamart.png",
            link: "https://www.vishalmegamart.com/"
        },
        {
            img: "/Images/ProductClientLogos/Dmart.png",
            link: "https://www.dmart.in/"
        },
        {
            img: "/Images/ProductClientLogos/LuLuNew.png",
            link: "https://gcc.luluhypermarket.com/"
        },
        {
            img: "/Images/ProductClientLogos/MuMuso.png",
            link: "https://www.mumuso.com/"
        },
        {
            link: "",
            img: "/Images/ProductClientLogos/WishkeyNew.png",
            color: "000000"
        },
        {
            link: "https://www.hamleys.in/",
            img: "/Images/ProductClientLogos/Hamleys.png",

        },
        {
            img: "/Images/ProductClientLogos/WembleyNew.png",
            link: "https://wembleytoys.com/"
        },
        {
            img: "/Images/ProductClientLogos/24Seven.png",
            link: "https://www.24seventalent.com/"
        },

    ];


    const CarousalImages = [
        {
            img: "/Images/SeedoCarousal1.jpg"
        },
        {
            img: "/Images/SeedoCarousal2.jpg"
        },
        {
            img: "/Images/SeedoCarousal3.jpg"
        },
        {
            img: "/Images/SeedoCarousal1.jpg"
        },
        {
            img: "/Images/SeedoCarousal2.jpg"
        },
        {
            img: "/Images/SeedoCarousal3.jpg"
        },

    ]
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
                    <div className="SkyAbsoluteImage">
                        <img src="/Images/ZoomCardsImages/cloud.png" alt="" />
                    </div>
                    <div className="AboutHomePageSwiperContainer">
                        <div>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={10}
                                centeredSlides={true}
                                loop={true}
                                speed={800}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                // pagination={{
                                //     clickable: true,
                                // }}
                                // navigation={true}
                                breakpoints={{
                                    320: { slidesPerView: 1, spaceBetween: 5 },  // Mobile
                                    480: { slidesPerView: 2, spaceBetween: 8 },  // Small tablets
                                    768: { slidesPerView: 3, spaceBetween: 10 }, // Tablets
                                }}
                                modules={[Autoplay, Pagination, Navigation, FreeMode]}
                                className="mySwiper"
                            >
                                {CarousalImages.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="AboutHomeCarousal">
                                            <div>
                                                <img src={item.img} alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    <div className="SeedoDetails">
                        {/* <h1 style={{ fontSize: "30px", margin: "0px" }} data-aos="fade-up"
                            data-aos-duration="1000">SEEDO</h1> */}
                        <p data-aos="fade-up"
                            data-aos-duration="1500">
                            <b>At Seedo</b>, from the house of <b>Sanson Promo Innovations LLP</b>- a product innovation company with 2 decades of consumer promotion for kids. Driven by innovation and strong technical control, we at Seedo have developed a range of high-quality toys, ensuring they are safe, affordable, and meet the highest standards in child safety. Seedo toys sparks children’s imagination while offering parents confidence in our craftsmanship. We are committed to becoming India's leading toy manufacturers and grown multi fold horizontally and vertically over the years. We are excited to share our collection and bring joy to kids everywhere!
                            {/* <b>At Seedo,</b> we believe in sparking <b>creativity and joy</b> with every toy we make. <br />Our collection of high-quality, safe, and affordable toys is crafted to inspire children’s imaginations while giving parents complete peace of mind. */}
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", position: "relative", }} id="ParentBox">
                <div className="BackSVG">
                    <img src="/Images/ZoomCardsImages/SansonImage.png" alt="" />
                </div>
                <div className="SANSONGraphicContainer" style={{ position: "sticky" }}>
                    <div>
                        <h1 style={{ fontSize: "30px", margin: "0px" }} data-aos="fade-up"
                            data-aos-duration="1000" >Sanson Promo Innovations LLP</h1>
                        <p data-aos="fade-up"
                            data-aos-duration="1500"> <b>Sanson Promo Innovations LLP</b> is a prominent leader in consumer and trade promotions, trusted by major FMCG brands such as Unilever, Glaxo, Perfetti, Mondelez, and Britannia. As the parent company of Seedo, Sanson excels in collaborating with esteemed licensors like Disney, Marvel, Mattel, Pokémon, and Doraemon. With comprehensive expertise in conceptualization, product engineering, mass manufacturing, quality assurance, and logistics, Sanson consistently surpasses client expectations. <br /> This commitment to delivering high-quality products and innovative campaigns is reflected in Seedo's values as well.</p>
                    </div>
                </div>
            </div>
            <div className="AboutSeedoContent">

                <div>
                    <div>

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