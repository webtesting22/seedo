import React, { useEffect } from "react";
import "../../Styles/AboutSeedo.css";
import { Row, Col, Image } from "antd";
import SeedoPoster from "/Images/Banners/SeedoPoster.png"
import PhotosGrid from "../../CommonComponents/PhotosGrid/PhotosGrid";
import AboutContent from "../AboutContentPoint/AboutContent";
import { Link } from "react-router-dom";
import BannerAbout from "/BannerAbout.avif"
import Navigation from "../../CommonComponents/Navigation/Navigation";
import MissionVision from "../VisionMission/MissionVision";
import generative from "./generative .jpg"
import { FaArrowRight } from "react-icons/fa";
import BackBannerAbout from "./BackBannerAbout.svg"
import timelinepc from "./timelinepc.png"
import timelinemobile from "./timelinemobile.png"
import pngwing from "./Logos/pngwing.com.svg"
import logo from "./Logos/logo (1).svg"
import Perfetti from "./Logos/Perfetti_Van_Melle_logo.svg.svg"
import GSK from "./Logos/GSK_logo_2014.svg.svg"
import Vector from "./Logos/Vector (1).svg"
import TheHimalayaLogo from "./Logos/The_Himalaya_Drug_Company_logo.svg"
import Amway from "./Logos/Amway_(logo).svg.svg"
import CartoonNetwork from "/Images/Logos/Clientlogos/CartoonNetwork.png"
import tomandjerry from "/Images/Logos/Clientlogos/tomandjerry.png"
import Disney from "/Images/Logos/Clientlogos/Disney.png"
import Marvel from "/Images/Logos/Clientlogos/Marvel.png"
import ChhotaBheem from "/Images/Logos/Clientlogos/ChhotaBheem.png"
import ToyStory3 from "/Images/Logos/Clientlogos/ToyStory3.png"
import Barbie from "/Images/Logos/Clientlogos/Barbie.png"
import doraemon from "/Images/Logos/Clientlogos/doraemon.png"
import Pepsi from "/Images/Logos/Clientlogos/Pepsi.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import About1 from "./About1.svg"
import About2 from "./About2.svg"
import About3 from "./About3.svg"
import About5 from "./About5 1.svg"
import About7 from "./About7 1.svg"
import About10 from "./About10 1.svg"
import TopAboutUsWavesImage from "./TopAboutUsWavesImage.webp"
import SectionCurveImage from "./SectionCurveImage.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const AboutSeedo = () => {
    const ServicesCardData = [
        {
            title: "Infrastructure",
            content: "Our 150,000 sq. ft. manufacturing facility includes a 75,000 sq. ft. area dedicated to toy production. Equipped with state-of-the-art machinery and advanced automation technology, our facility supports a production capacity of 5 billion battery-operated toys annually, ensuring we can meet large-scale demand without compromising on quality or safety."
        },
        {
            title: "Productivity",
            content: "With a fully automated plant, Seedo achieves an annual production capacity of nearly 5 million battery-operated toys, employing the latest automation technologies to ensure efficient, high-quality manufacturing with precision and consistency."
        },
        {
            title: "Experience",
            content: "Our team is made up of skilled experts with extensive market experience and deep product knowledge, allowing us to create innovative toys that meet the highest standards of quality and customer satisfaction."
        },
        {
            title: "Quality and Affordability",
            content: "Seedo proves that high-quality products can also be affordable. By offering superior craftsmanship at budget-friendly prices, we challenge the norm and provide customers with excellent value, ensuring they get the best of both worlds—quality and affordability."
        },

        {
            title: "Make in india",
            content: "As strong advocates for local manufacturing, we take pride in sourcing all our components from within India. We fully support and align with Mr. Narendra Modi's vision of promoting the Make in India* initiative, fostering economic growth and self-reliance in our nation"
        },
    ]


    const LogosData = [
        {
            img: pngwing,
            link: "https://www.unilever.com/"
        },
        {
            img: logo,
            link: "https://www.uscindia.co.in/"
        },
        {
            img: Perfetti,
            link: "https://www.perfettivanmelle.com/"
        },
        {
            img: GSK,
            link: "https://www.gsk.com/en-gb/"
        },
        {
            img: Vector,
            link: "https://www.haldiram.com/"
        },
        {
            img: TheHimalayaLogo,
            link: "https://himalayawellness.in/"
        },
        {
            img: Amway,
            link: "https://www.amway.in/"
        },
        {
            img: Disney,
            link: "https://www.disney.in/"
        },
        {
            img: doraemon,
            link: "https://dora-world.com/"
        },
        {
            img: Barbie,
            link: "https://www.barbie.com"
        },
        {
            img: tomandjerry,
            link: "https://www.warnerbros.com/brands/tom-and-jerry",
        },
        {
            img: Pepsi,
            link: "https://www.pepsi.com"
        },
        {
            img: Marvel,
            link: "https://www.marvel.com"
        },
        {
            img: CartoonNetwork,
            link: "https://www.cartoonnetwork.co.uk/"
        },
        {
            img: ToyStory3,
            link: "https://www.pixar.com/toy-story-3"
        },
        {
            img: ChhotaBheem,
            link: "https://www.chhotabheem.com"
        },
    ]


    const VissionMissionData = [
        {
            title: "Mission",
            description: "To deliver high-quality, safe, and innovative toys that inspire creativity and confidence in children and parents alike."

        },
        {
            title: "Vision",
            description: "To become a leading toy manufacturer globally, Seedo aims to be recognized for excellence in product quality and innovation while integrating advanced technology into its offerings."
        },
        {
            title: "Purpose",
            description: "To foster children's imagination through engaging play experiences while ensuring parents' trust in our craftsmanship and commitment to safety."
        }
    ]
    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <div className="AboutUs">
                <Navigation />
            </div>
            <section id="AboutSEDOSection">
                <div className="SectionHeadingContainer">
                    <img src="/Images/AboutusTopNewBanner.jpg" alt="" style={{ width: "100%" }} loading="lazy"/>
                    <img src="/Images/NewBanners/MobileBanners/AboutUsTopMobile.png" alt="" style={{ width: "100%" }} loading="lazy"/>
                </div>
                
                {/* <div className="TopVideoContainer">
                    <img src={BackBannerAbout} alt="" />
                </div> */}
                <div className="AboutContentContainer">
                    {/* <img src={TopAboutUsWavesImage} alt="" /> */}
                    <div className="paddingContainer">

                        <div className="SectionHeadingContainer" style={{ paddingBottom: "0px" }}>
                            <h2 className="titleFont">About Us</h2>
                        </div>
                        <p data-aos="fade-up"
                            data-aos-duration="1500">Driven by innovation and strong technical control,
                            we at Seedo have developed a range of
                            high-quality toys, ensuring they are safe,
                            affordable, and meet the highest standards. Seedo
                            toys sparks children’s imagination while offering
                            parents confidence in our craftsmanship.
                            We are committed to becoming India's leading toy
                            manufacturers and aim for tenfold growth within
                            three years. We are excited to share our collection
                            and bring joy to kids everywhere!</p>
                        {/* <p>Seedo has recently expanded its capabilities by introducing pad painting and spray painting in early 2024, along with in-house PCB manufacturing to reduce reliance on imports from China. This strategic move has led to Seedo receiving "Make in India" certification, allowing them to begin global exports by January 2025.
                        </p> */}
                        {/* <p data-aos="fade-up"
                            data-aos-duration="1600">The company focuses on scalability, quality control, and volume handling, with plans to launch easy early-learning toys and STEM toys in early 2025. Currently, <b>Seedo operates over 3,000 stores</b> across various formats, including General Trade and Modern Trade. Following the successful establishment of their product line, they aim to <b>launch premium B2C stores post-2026</b> and have a national sales team covering General Trade throughout India.
                        </p> */}
                    </div>
                </div>
            </section>
            {/* <section className="founderSectionContainer">
                <Row>
                    <Col lg={14} style={{ width: "100%" }}>
                        <div className="FounderContent">
                            <h1>FOUNDER</h1>
                            <p>We offer these services, and we invite you to reach out for any inquiries. Please feel free to connect with us through the footer section or the "Contact Us" page. We look forward to hearing from you!We offer these services, and we invite you to reach out for any inquiries. Please feel free to connect with us through the footer section or the "Contact Us" page. We look forward to hearing from you!We offer these services, and we invite you to reach out for any inquiries. Please feel free to connect with us through the footer section or the </p>
                        </div>
                    </Col>
                    <Col lg={10} style={{ width: "100%" }}>
                        <div className="grayBoxContainer">

                        </div>
                    </Col>
                </Row>
            </section> */}
            <section className="OurJourneyContainer">
                {/* <div>
                    <h1>Our Journey </h1>
                </div> */}
                <div className="JourneyImageContainer">
                    <img src="/Images/NewUpdatedTimeline.png" alt="" />
                    <img src="/Images/AboutUsTimelineMobile.png" alt="" />
                </div>
            </section>
            <section className="MissionContainer">
                <div className="SectionHeadingContainer">
                    <h2 className="titleFont" style={{ position: "sticky", zIndex: "5" }}>Our Core Values and Objectives</h2>
                </div>
                <div className="BackSVG">
                    <svg width="1895" height="997" viewBox="0 0 1895 997" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M489 15.2177C394.5 -2.98877 212 -4.08235 0 74.7177V996.5H1895V18.2177C1888.83 23.8843 1864.8 39.2177 1818 55.2177C1739.67 78.551 1575.33 94.0308 1397 48.5C1373.5 42.5 1279.3 16.1177 1240.5 9.71766C1187.5 0.217663 1045.7 -14.9823 822.5 36.2177C745.5 53.8807 663.4 48.8177 489 15.2177Z" fill="#A0DEF7" />
                    </svg>
                </div>
                <div>
                    <Row>

                        <Col lg={12}>
                            {VissionMissionData.map((item, index) => (
                                <div className="VisionMissionDescriptionContainer" key={index} data-aos="fade-up"
                                    data-aos-delay={`${index * 100}`}>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>

                                </div>

                            ))}
                        </Col>
                        {/* <Col lg={12} md={24} style={{ width: "100%" }}>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                // autoplay={{
                                //     delay: 2000,
                                //     disableOnInteraction: false,
                                // }}
                                speed={600}
                                loop={true}
                                // pagination={{
                                //     clickable: true,
                                // }}
                                modules={[Autoplay, Pagination]}
                                className="mySwiper"
                                style={{ height: "100%" }}
                            >
                                {VissionMissionData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="VisionMissionDescriptionContainer">
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                        <br />
                                        <br />
                                    </SwiperSlide>
                                ))}
                                
                            </Swiper>
                        
                        </Col> */}


                        <Col lg={12} md={24}>

                            <div className="VisionMissionImageContainer">
                                <img src={SectionCurveImage} alt="" />
                            </div>
                        </Col>
                    </Row>
                </div>
                {/* <div className="gridContainer">
                    <Row>
                        <Col lg={8} md={12}>
                            <div>
                                <h2>Our Mission</h2>
                                <p>To deliver high-quality, safe, and innovative toys that inspire creativity and confidence in children and parents alike. </p>
                            </div>
                        </Col>
                        <Col lg={8} md={12}>
                            <div>
                                <h2>Our Vision</h2>
                                <p>To become a leading toy manufacturer globally, Seedo Toys aims to be recognized for excellence in product quality and innovation while integrating advanced technology into its offerings.</p>
                            </div>
                        </Col>
                        <Col lg={8} md={12}>
                            <div>
                                <h2>Our Purpose</h2>
                                <p>To foster children's imagination through engaging play experiences while ensuring parents' trust in our craftsmanship and commitment to safety.</p>
                            </div>
                        </Col>
                    </Row>
                </div> */}
            </section>
            {/* <section className="VisionContainer">
              
            </section>
            <section className="PurposeContainer">
                
            </section> */}
            {/* <section className="OURLEADERSHIPContainer">
                <div className="LeaderShipHeaderContainer">
                    <h1>Sanson Promotion Innovations LLP Clients</h1>
                    <h1>Our Trusted Partners</h1>
                </div>
                <div className="LeaderShipCardContainer">
                    <Row>
                        {LogosData.map((item, index) => (
                            <Col lg={4} md={6} key={index}  data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}>
                                <Link to={item.link} target="_blank">
                                    <div className="CerticationCardGreyBox">
                                        <img src={item.img} alt="" />
                                    </div>
                                </Link>
                            </Col>
                        ))}

                        <Col lg={8}>
                            <div className="LeaderShipCardContainerCard">
                                <div className="LeaderShipImageCardContainer">

                                </div>
                                <div className="LeaderShipContentCardContainer">
                                    <h5>DESIGNATION</h5>
                                    <p>We offer these services, and we invite you to reach out for any inquiries. Please feel free to connect with us through the footer section or the "Contact Us" page. We look forward to hearing from you!We offer these services, and </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="LeaderShipCardContainerCard">
                                <div className="LeaderShipImageCardContainer">

                                </div>
                                <div className="LeaderShipContentCardContainer">
                                    <h5>DESIGNATION</h5>
                                    <p>We offer these services, and we invite you to reach out for any inquiries. Please feel free to connect with us through the footer section or the "Contact Us" page. We look forward to hearing from you!We offer these services, and  </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="LeaderShipCardContainerCard">
                                <div className="LeaderShipImageCardContainer">

                                </div>
                                <div className="LeaderShipContentCardContainer">
                                    <h5>DESIGNATION</h5>
                                    <p>We offer these services, and we invite you to reach out for any inquiries. Please feel free to connect with us through the footer section or the "Contact Us" page. We look forward to hearing from you!We offer these services, and </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section> */}

            <div className="AjustCenterContainer">

                <div className="AdjustWidthSection">
                    <div className="SectionHeadingContainer">
                        <h2 className="titleFont" style={{ textAlign: "start" }}>In-House Spraying</h2>
                    </div>
                    <div>
                        <Row>
                            <Col lg={24}>
                                <div className="PendingGrayBox" data-aos="fade-up"
                                    data-aos-duration="1300">
                                    <div style={{ display: "flex", height: "100%" }} className="ImageAdjust">
                                        <Row style={{ width: "100%" }}>
                                              <Col lg={8} md={12}>

                                                <div>
                                                    <Image src="/Images/AboutUsFactoryImages/1.JPG" alt="" />
                                                </div>
                                            </Col>
                                              <Col lg={8} md={12}>
                                                <div style={{ height: "100%" }}>
                                                    <Image src="/Images/AboutUsFactoryImages/2.JPG" alt="" />
                                                </div>
                                            </Col>
                                              <Col lg={8} md={12}>
                                                <div style={{ height: "100%" }}>
                                                    <Image src="/Images/AboutUsFactoryImages/3.JPG" alt="" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>

                            <br />
                            <Col lg={24}>

                                <div className="AboutUsFactoryContainer"><p data-aos="fade-up"
                                    data-aos-duration="1400">At Seedo, we take pride in our
                                    in-house spraying capabilities, including
                                    pad printing, spray printing, tampo
                                    printing, and other finishing techniques.
                                    Our state-of-the-art facility is capable of
                                    spraying 3,00,000 toys per month,
                                    delivering stunning finishes such as
                                    high-gloss, anti-scratch, metallic, and
                                    pearl effects. All chemicals, coatings, and
                                    pigments used meet child safety
                                    standards, ensuring the highest safety for
                                    young users.</p></div>
                            </Col>
                        </Row>
                        {/* <div style={{ display: "flex", justifyContent: "center" }}>
                                <button>Read More</button>
                            </div> */}
                    </div>
                </div>
                <div className="AdjustWidthSection">
                    <div className="BackSVG">
                        <svg width="1895" height="997" viewBox="0 0 1895 997" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M489 15.2177C394.5 -2.98877 212 -4.08235 0 74.7177V996.5H1895V18.2177C1888.83 23.8843 1864.8 39.2177 1818 55.2177C1739.67 78.551 1575.33 94.0308 1397 48.5C1373.5 42.5 1279.3 16.1177 1240.5 9.71766C1187.5 0.217663 1045.7 -14.9823 822.5 36.2177C745.5 53.8807 663.4 48.8177 489 15.2177Z" fill="#A0DEF7" />
                        </svg>
                    </div>
                    <div className="SectionHeadingContainer">
                        <h2 className="titleFont" style={{ textAlign: "start" }}>Self-Reliant PCBs Manufacturing</h2>
                    </div>
                    <div>
                        <Row>
                            
                            <Col lg={24}><div style={{width:"100%"}}>
                                <div style={{ display: "flex", height: "100%" }} className="ImageAdjust" data-aos="fade-up"
                                    data-aos-duration="1400">
                                    <Row style={{ width: "100%" }}>
                                        <Col lg={8} md={12}>
                                            <div style={{width:"100%",height:"100%"}}>
                                                <Image src="/Images/AboutUsFactoryImages/4.JPG" alt=""  style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                                            </div>
                                        </Col>
                                        <Col lg={8} md={12}>
                                            <div>
                                                <Image src="/Images/AboutUsFactoryImages/5.JPG" alt="" />
                                            </div>
                                        </Col>
                                        <Col lg={8} md={12}>
                                            <div>
                                                <Image src="/Images/AboutUsFactoryImages/6.JPG" alt="" />
                                            </div>
                                        </Col>
                                    </Row>

                                </div>
                            </div>

                            </Col>
                            <Col lg={24}>
                                <div className="AboutUsFactoryContainer">
                                    <p data-aos="fade-up"
                                        data-aos-duration="1300">Seedo, in partnership with its strategic ally, has achieved a significant milestone by designing and producing its own PCBs, leveraging cutting-edge pick-and-place technology. Today, this innovation enables us to manufacture 50% of our PCBs in-house. Our PCB materials meet global safety standards, offering surge, voltage, and heat protection. They are phthalate-free, lead-free, and ROHS-compliant for international exports, ensuring both safety and reliability for our products.</p>
                                </div>
                            </Col>
                        </Row>
                        {/* <div style={{ display: "flex", justifyContent: "center" }}>
                                <button>Read More</button>
                            </div> */}
                    </div>
                </div>
            </div>
            {/* <MissionV¸¸¸¸ent /> */}
            {/* <PhotosGrid /> */}
            {/* <SeedoCertification />
            <Client /> */}

        </>
    );
};

export default AboutSeedo;
