import React, { useRef, useState, useEffect } from "react";
import "../../Styles/HomePage.css";
import landingPageVideo1 from "./Video/die cast .mp4";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HomePage = () => {
    const [fadeIn, setFadeIn] = useState(true); // State to control fade-in effect
    const videoRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const mediaItem = { type: "video", src: landingPageVideo1 };
    const headingColors = ["#EB920E", "#417453", "#C85F3F", "#045A75", "#909090"];

    // Function to handle video end and restart with fade-out and fade-in effect
    const handleVideoEnd = () => {
        setFadeIn(false); // Start fade-out effect
        setTimeout(() => {
            setFadeIn(true); // Start fade-in effect after the video ends
            videoRef.current.play(); // Play the video again
        }, 500); // Delay for the fade-out transition
    };

    useEffect(() => {
        const currentVideo = videoRef.current;
        if (currentVideo) {
            currentVideo.onended = handleVideoEnd; // Call handleVideoEnd when the video finishes
        }
    }, []);

    const CarousalImages = [
        {
            img: "/Images/HomePageCarousalImages/Carousal1.jpeg",
            mobileImage: "/Images/HomePageCarousalImages/MobileBanners/Carousal1.png",
            heading: "SEEDO",
            tagline: "BREAK THE LIMIT!"
        },
        {
            img: "/Images/HomePageCarousalImages/Carousal3.jpeg",
            mobileImage: "/Images/HomePageCarousalImages/MobileBanners/Carousal3.png",
            heading: "SEEDO",
            tagline: "BREAK THE LIMIT!"
        },
        {
            img: "/Images/HomePageCarousalImages/Carousal2.png",
            mobileImage: "/Images/HomePageCarousalImages/MobileBanners/Carousal2.png",
            heading: "SEEDO",
            tagline: "BREAK THE LIMIT!"
        },

        {
            img: "/Images/HomePageCarousalImages/Carousal5.jpeg",
            mobileImage: "/Images/HomePageCarousalImages/MobileBanners/Carousal5.png",
            heading: "SEEDO",
            tagline: "BREAK THE LIMIT!"
        },
        {
            img: "/Images/HomePageCarousalImages/Carousal4.jpeg",
            mobileImage: "/Images/HomePageCarousalImages/MobileBanners/Carousal4.png",
            heading: "SEEDO",
            tagline: "BREAK THE LIMIT!"
        },
    ]
    return (
        <section id="HomepageContainer">
            <div className="carousel-container">
                {/* <div className="blackoverlay">

                </div> */}
                <div style={{ height: "100%", width: "100%" }} id="HomePageNewCarousal">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        speed={800}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                        style={{ height: "100%" }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    >
                        {CarousalImages.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div style={{ height: "100%" }}>
                                    <div className="SwiperImageHomePage">
                                        <picture>
                                            {/* Mobile image */}
                                            <source media="(max-width: 768px)" srcSet={item.mobileImage} />
                                            {/* Desktop image */}
                                            <img src={item.img} alt="carousel" />
                                        </picture>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="HomePageHeadingContainer">
                        <div>
                            <h1 style={{ color: headingColors[activeIndex], transition: ".5s" }}>SEEDO</h1>
                            <p>BREAK THE LIMIT!</p>
                            <button>View catalog</button>
                        </div>
                    </div>
                    {/* <video
                        ref={videoRef}
                        src={mediaItem.src}
                        className={`carousel-video ${fadeIn ? "fade-in" : "fade-out"}`}
                        autoPlay
                        playsInline
                        muted
                        loop={false} // We don't loop the video, instead we handle it manually
                    /> */}
                </div>
            </div>
        </section>
    );
};

export default HomePage;
