import React, { useEffect } from "react";
import "../../Styles/AboutSeedo.css";
import { Row, Col } from "antd";
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
            content: "With a fully automated plant, Seedo Toys achieves an annual production capacity of nearly 5 million battery-operated toys, employing the latest automation technologies to ensure efficient, high-quality manufacturing with precision and consistency."
        },
        {
            title: "Experience",
            content: "Our team is made up of skilled experts with extensive market experience and deep product knowledge, allowing us to create innovative toys that meet the highest standards of quality and customer satisfaction."
        },
        {
            title: "Quality and Affordability",
            content: "Seedo Toys proves that high-quality products can also be affordable. By offering superior craftsmanship at budget-friendly prices, we challenge the norm and provide customers with excellent value, ensuring they get the best of both worlds—quality and affordability."
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
            title: "MISSION",
            description: "To deliver high-quality, safe, and innovative toys that inspire creativity and confidence in children and parents alike."

        },
        {
            title: "VISION",
            description: "To become a leading toy manufacturer globally, Seedo Toys aims to be recognized for excellence in product quality and innovation while integrating advanced technology into its offerings."
        },
        {
            title: "PURPOSE",
            description: "To foster children's imagination through engaging play experiences while ensuring parents' trust in our craftsmanship and commitment to safety."
        }
    ]
    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div id="AboutUs">
                <Navigation />
            </div>
            <section id="AboutSEDOSection">
                {/* <div>
                    <div className="BannerContainer">
                       
                        <img src={generative} alt="" />
                    </div>

                    <div className="TopLinksContainer">
                        <div >
                            <Link to="/" className="breadcrumb-link" style={{ color: "#999", fontSize: "12px" }}>Home</Link>&nbsp;&nbsp; <span style={{ color: "#999", fontSize: "12px", display: "flex" }}><FaArrowRight /></span> &nbsp;&nbsp;
                            <Link to="/aboutSeedo" className="breadcrumb-link" style={{ color: "#999", fontSize: "12px" }}>About Us</Link>
                        </div>
                </div> */}

                {/* <div className="AboutUsContentContainer"> */}
                {/* <img src={Back} alt="" /> */}
                {/* <div className="overlayContainersecond">

                        </div> */}
                {/* <Row>
                            <Col lg={24}>
                                <div className="LeftSideContentContainer">
                                   
                                    <div>
                                        <p style={{ color: "#A5252B", textAlign: "center", marginBottom: "0px", fontSize: "16px" }}>All You Need is Fun!</p>
                                        <h2 className="PrimaryHeading-black" style={{ color: "black", textAlign: "center" }}>
                                            <svg width="100%" class="svg rotating-image" height="100%" viewBox="0 0 20 23" fill="red" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.01745 19.7867C8.01745 21.7867 9.29195 23.001 10 23.001C10.7081 23.001 11.9826 21.7867 11.9826 19.7867C11.9826 19.5724 10.2124 14.2867 10.1416 11.7867C12.195 13.0724 15.9477 17.2867 16.1601 17.3581C17.8594 18.3581 19.4879 17.8581 19.9128 17.2867C20.196 16.6438 19.842 14.9295 18.0718 13.9295C17.8594 13.7867 12.549 12.7153 10.2832 11.501C12.549 10.2867 17.8594 9.21526 18.0718 9.0724C19.842 8.0724 20.196 6.35812 19.9128 5.78669C19.4879 5.14383 17.8594 4.64383 16.1601 5.64383C15.9477 5.78669 12.195 9.92955 10.1416 11.2867C10.2124 8.71526 11.9826 3.57241 11.9826 3.21526C11.9826 1.21526 10.7081 0.000976562 10 0.000976562C9.29195 0.000976562 8.01745 1.21526 8.01745 3.21526C8.01745 3.50097 9.71678 8.71526 9.85839 11.2867C7.73423 9.92955 4.12315 5.78669 3.83993 5.64383C2.1406 4.64383 0.512072 5.14383 0.0872398 5.78669C-0.195982 6.35812 0.158045 8.0724 1.92818 9.0724C2.2114 9.21526 7.451 10.2867 9.64597 11.501C7.451 12.7153 2.2114 13.7867 1.92818 13.9295C0.158045 14.9295 -0.195982 16.6438 0.0872398 17.2867C0.512072 17.8581 2.1406 18.3581 3.83993 17.3581C4.05234 17.2153 7.73423 13.0724 9.85839 11.7867C9.71678 14.2867 8.01745 19.5724 8.01745 19.7867Z" fill="currentColor"></path>
                                            </svg>About SEEDO
                                        </h2>
                                        <p>Sanson is a leading innovator in consumer and trade promotions, trusted by major FMCG brands in India such as
                                            Unilever, Glaxò, Perfetti, Mondelez, Britannia, and more.
                                            With extensive expertise in <b>collaborating with global
                                                brands and managing OEM licensors like Disney, Marvel,
                                                Mattel, Pokémon, and Doraemon,</b> we prioritise safety and
                                            quality throughout the entire product cycle.</p>
                               
                                    </div>
                                </div>
                            </Col>
                            <Col lg={24}>
                                <br />
                                <div className="AboutUsInsideCarBanner">
                                    <img src={generative} alt="" />
                                </div>
                            </Col>
                            <Col lg={24}>
                                <br /><br />
                                <br />
                                <Row style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}>
                                    {ServicesCardData.map((item, index) => (
                                        <div id="WidthAjustContainer" data-aos="fade-left"
                                            data-aos-delay={index * 100} data-aos-duration="1000">
                                            <div className="ServicesStickyCards" key={index} >
                                                <Col lg={24} md={24} style={{ width: "100%" }}>
                                                    <div className="AnimatedContent">
                                                        <div className="imageAnimation">
                                                            <svg width="100%" class="svg rotating-image" height="100%" viewBox="0 0 20 23" fill="red" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.01745 19.7867C8.01745 21.7867 9.29195 23.001 10 23.001C10.7081 23.001 11.9826 21.7867 11.9826 19.7867C11.9826 19.5724 10.2124 14.2867 10.1416 11.7867C12.195 13.0724 15.9477 17.2867 16.1601 17.3581C17.8594 18.3581 19.4879 17.8581 19.9128 17.2867C20.196 16.6438 19.842 14.9295 18.0718 13.9295C17.8594 13.7867 12.549 12.7153 10.2832 11.501C12.549 10.2867 17.8594 9.21526 18.0718 9.0724C19.842 8.0724 20.196 6.35812 19.9128 5.78669C19.4879 5.14383 17.8594 4.64383 16.1601 5.64383C15.9477 5.78669 12.195 9.92955 10.1416 11.2867C10.2124 8.71526 11.9826 3.57241 11.9826 3.21526C11.9826 1.21526 10.7081 0.000976562 10 0.000976562C9.29195 0.000976562 8.01745 1.21526 8.01745 3.21526C8.01745 3.50097 9.71678 8.71526 9.85839 11.2867C7.73423 9.92955 4.12315 5.78669 3.83993 5.64383C2.1406 4.64383 0.512072 5.14383 0.0872398 5.78669C-0.195982 6.35812 0.158045 8.0724 1.92818 9.0724C2.2114 9.21526 7.451 10.2867 9.64597 11.501C7.451 12.7153 2.2114 13.7867 1.92818 13.9295C0.158045 14.9295 -0.195982 16.6438 0.0872398 17.2867C0.512072 17.8581 2.1406 18.3581 3.83993 17.3581C4.05234 17.2153 7.73423 13.0724 9.85839 11.7867C9.71678 14.2867 8.01745 19.5724 8.01745 19.7867Z" fill="currentColor"></path>
                                                            </svg>
                                                            <h2>{item.title}</h2>
                                                        </div>
                                                        <p>{item.content}</p>
                                                    </div>
                                                </Col>
                                               
                                            </div>
                                        </div>
                                    ))}
                                </Row>
                            </Col>

                        </Row> */}
                {/* </div>
                </div> */}


                {/* <div className="TopVideoContainer">
                    <img src={BackBannerAbout} alt="" />
                </div> */}
                <div className="AboutContentContainer">
                    <div className="paddingContainer">
                        <h1>About us</h1>
                        <p>Seedo has recently expanded its capabilities by introducing pad painting and spray painting in early 2024, along with in-house PCB manufacturing to reduce reliance on imports from China. This strategic move has led to Seedo receiving "Make in India" certification, allowing them to begin global exports by January 2025.
                        </p>
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
                    <img src={timelinepc} alt="" />
                    <img src={timelinemobile} alt="" />
                </div>
            </section>
            <section className="MissionContainer">
                <div>
                    <Row>

                        <Col lg={12} md={24} style={{ width: "100%" }}>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                speed={600}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
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
                        
                        </Col>


                        <Col lg={12} md={24}>
                        <br />
                        <br />
                            <div className="VisionMissionImageContainer">
                                <img src="https://images.unsplash.com/photo-1681351623149-91d23d44909b?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
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
            <section className="OURLEADERSHIPContainer">
                <div className="LeaderShipHeaderContainer">
                    <h1>Sanson Promotion Innovations LLP clients</h1>
                </div>
                <div className="LeaderShipCardContainer">
                    <Row>
                        {LogosData.map((item, index) => (
                            <Col lg={4} md={6}>
                                <Link to={item.link} target="_blank">
                                    <div className="CerticationCardGreyBox">
                                        <img src={item.img} alt="" />
                                    </div>
                                </Link>
                            </Col>
                        ))}

                        {/* <Col lg={8}>
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
                        </Col> */}
                    </Row>
                </div>
            </section>
            {/* <MissionV¸¸¸¸ent /> */}
            {/* <PhotosGrid /> */}
            {/* <SeedoCertification />
            <Client /> */}

        </>
    );
};

export default AboutSeedo;
