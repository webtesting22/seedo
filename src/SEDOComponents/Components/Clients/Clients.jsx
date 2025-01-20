import React from "react";
import { Row, Col } from "antd";
import "../../Styles/ClientComponent.css"
import Amway from "/Images/Logos/Clientlogos/Amway.png"
import himalaya from "/Images/Logos/Clientlogos/himalaya.png"
import Haldiram from "/Images/Logos/Clientlogos/Haldiram.png"
import Perfetti from "/Images/Logos/Clientlogos/Perfetti.png"
import unilever from "/Images/Logos/Clientlogos/unilever.png"
import Pepsi from "/Images/Logos/Clientlogos/Pepsi.png"
import GSK from "/Images/Logos/Clientlogos/GSK.png"
import Britannia from "/Images/Logos/Clientlogos/Britannia.png"
import CartoonNetwork from "/Images/Logos/Clientlogos/CartoonNetwork.png"
import tomandjerry from "/Images/Logos/Clientlogos/tomandjerry.png"
import Disney from "/Images/Logos/Clientlogos/Disney.png"
import Marvel from "/Images/Logos/Clientlogos/Marvel.png"
import ChhotaBheem from "/Images/Logos/Clientlogos/ChhotaBheem.png"
import ToyStory3 from "/Images/Logos/Clientlogos/ToyStory3.png"
import Barbie from "/Images/Logos/Clientlogos/Barbie.png"
import doraemon from "/Images/Logos/Clientlogos/doraemon.png"
import amazon from "../../CommonComponents/ZoomCards/amazon.svg"
import flifkart from "../../CommonComponents/ZoomCards/flifkart.svg"
import smartBazaar from "../../CommonComponents/ZoomCards/smartBazaar.svg"
import Snooplay from "../../CommonComponents/ZoomCards/Snooplay.svg"
import swiggy from "../../CommonComponents/ZoomCards/swiggy.svg"
import whole9years from "../../CommonComponents/ZoomCards/whole9years.svg"
import Zepto from "../../CommonComponents/ZoomCards/Zepto.png"
import Whiskey from "../../CommonComponents/ZoomCards/Whiskey.svg"
import image1 from "./8d3a0f196563391.Y3JvcCwxODA3LDE0MTQsOTMsMA.svg"
import image2 from "./24Seven_logo.svg"
import image3 from "./619a4143-2b0f-40a7-b92f-4bf48d5bed8e-removebg-preview 1.svg"
import image4 from "./Ralleyz_Logo-02.svg"
import image5 from "./Toys__R__Us_logo.svg.svg"
import image6 from "./VMM-1 1.svg"
import Wishkey from "./Wishkey.png"
import { Link } from "react-router-dom";
import Dmart from "./Dmart.png"
import MUMUSO from "./MUMUSO.png"
import MRDIY from "./MRDIY.png"
import Blinkit from "./Blinkit.png"
import Hamleys from "./Hamleys_logo 1.png"
import lulu from "./lulu.png"
import Navigation from "../../CommonComponents/Navigation/Navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, FreeMode } from 'swiper/modules';
const Client = () => {
    const OfllineClients = [
        {
            img: image1
        },
        {
            img: image2,
        },
        {
            img: image3
        },
        {
            img: image4
        },
        {
            img: image5
        },
        {
            img: image6
        }
    ]
    const LogosData = [

        
       
        {
            img: CartoonNetwork,
            link: "https://www.cartoonnetwork.co.uk/"
        },
        {
            img: tomandjerry,
            link: "https://www.warnerbros.com/brands/tom-and-jerry",
        },
        {
            img: Disney,
            link: "https://www.disney.com"
        },
        {
            img: Marvel,
            link: "https://www.marvel.com"
        },
        {
            img: ChhotaBheem,
            link: "https://www.chhotabheem.com"
        },
        {
            img: ToyStory3,
            link: "https://www.pixar.com/toy-story-3"
        },
        {
            img: Barbie,
            link: "https://www.barbie.com"
        },
        {
            img: doraemon,
            link: "https://dora-world.com/"
        },
        {
            img: GSK,
            link: "https://www.gsk.com"
        },
        {
            img: Britannia,
            link: "https://www.britannia.co.in"
        },
        {
            img: Amway,
            link: "https://www.amway.com"
        },
        {
            img: himalaya,
            link: "https://www.himalayawellness.com"
        },
        {
            img: Haldiram,
            link: "https://www.haldirams.com"
        },
        {
            img: Perfetti,
            link: "https://www.perfettivanmelle.com"
        },
        {
            img: unilever,
            link: "https://www.unilever.com"
        },
        {
            img: Pepsi,
            link: "https://www.pepsi.com"
        },
    ]

    const Clients = [

        {
            img: image1
        },
        {
            img: Hamleys
        },
        {
            img: Blinkit
        },
        {
            img: MRDIY
        },
       
      
        {
            img: image4
        },
        {
            link: "https://www.zeptonow.com/",
            img: Zepto
        },
        {
            img: image5
        },
        
        {
            img: image6
        },
        {
            link: "https://www.amazon.in/",
            img: amazon
        },
        {
            link: "https://www.flipkart.com/",
            img: flifkart
        },
        {
            link: "https://reliancesmartbazaar.com/",
            img: smartBazaar
        },
        
        {
            link: "https://www.swiggy.com/",
            img: swiggy
        },
        // {
        //     link: "https://whole9yards.in/",
        //     img: whole9years
        // },

       
        
        {
            img: Dmart
        },
        {
            img: lulu
        },
        {
            img: MUMUSO
        },
       
        {
            link: "",
            img: Wishkey
        },
        {
            img: image3
        },
        {
            img: image2,
        },
        {
            link: "https://snooplay.in/",
            img: Snooplay
        },

    ];
    return (
        <>
            <div className="AboutUs">
                <Navigation />
            </div>
            <section id="ClientSection">
                <div className="headingHeaderContainer">
                    <h1 style={{ textAlign: "center", fontSize: "30px", backgroundColor: "#bc252b0a", marginTop: "80px" }}>Our Consumer Promotion Partners</h1>
                </div>
                <br /><br />
                <Row className="RowAdjustContainer">
                    {/* <div id="ClientSliderContainer"> */}
                    {Clients.map((item, index) => (
                        <Col lg={4} md={6} key={index} data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}>
                            <Link to={item.link} target="_blank">
                                <div className="CerticationCardGreyBox">
                                    <img src={item.img} alt="" />
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
                {/* <br /><br />
                <div className="headingHeaderContainer">
                    <h1 style={{ textAlign: "center", fontSize: "30px", backgroundColor: "#bc252b0a" }}>Offline Seedo</h1>
                </div>
                <br /><br /> */}
                {/* <Row className="RowAdjustContainer">
                    <div id="ClientSliderContainer">
                    {OfllineClients.map((item, index) => (
                        <Col lg={4} md={6} key={index} data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}>
                            <Link to={item.link} target="_blank">
                                <div className="CerticationCardGreyBox">
                                    <img src={item.img} alt="" />
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row> */}

                <section className="OURLEADERSHIPContainer">
                    <div className="LeaderShipHeaderContainer">
                        {/* <h1>Sanson Promotion Innovations LLP Clients</h1> */}
                        <h1>Our Trusted Partners</h1>
                    </div>
                    <div className="LeaderShipCardContainer">
                        <Row>
                            {LogosData.map((item, index) => (
                                <Col lg={4} md={6} key={index} data-aos="fade-up"
                                    data-aos-delay={`${index * 100}`}>
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

                <br /><br />
                {/* <div className="LeftSideContentContainer">
                    <h2 className="PrimaryHeading-black"><svg width="100%" class="svg rotating-image" height="100%" viewBox="0 0 20 23" fill="red" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.01745 19.7867C8.01745 21.7867 9.29195 23.001 10 23.001C10.7081 23.001 11.9826 21.7867 11.9826 19.7867C11.9826 19.5724 10.2124 14.2867 10.1416 11.7867C12.195 13.0724 15.9477 17.2867 16.1601 17.3581C17.8594 18.3581 19.4879 17.8581 19.9128 17.2867C20.196 16.6438 19.842 14.9295 18.0718 13.9295C17.8594 13.7867 12.549 12.7153 10.2832 11.501C12.549 10.2867 17.8594 9.21526 18.0718 9.0724C19.842 8.0724 20.196 6.35812 19.9128 5.78669C19.4879 5.14383 17.8594 4.64383 16.1601 5.64383C15.9477 5.78669 12.195 9.92955 10.1416 11.2867C10.2124 8.71526 11.9826 3.57241 11.9826 3.21526C11.9826 1.21526 10.7081 0.000976562 10 0.000976562C9.29195 0.000976562 8.01745 1.21526 8.01745 3.21526C8.01745 3.50097 9.71678 8.71526 9.85839 11.2867C7.73423 9.92955 4.12315 5.78669 3.83993 5.64383C2.1406 4.64383 0.512072 5.14383 0.0872398 5.78669C-0.195982 6.35812 0.158045 8.0724 1.92818 9.0724C2.2114 9.21526 7.451 10.2867 9.64597 11.501C7.451 12.7153 2.2114 13.7867 1.92818 13.9295C0.158045 14.9295 -0.195982 16.6438 0.0872398 17.2867C0.512072 17.8581 2.1406 18.3581 3.83993 17.3581C4.05234 17.2153 7.73423 13.0724 9.85839 11.7867C9.71678 14.2867 8.01745 19.5724 8.01745 19.7867Z" fill="currentColor"></path>
                    </svg> Trusted Partner</h2>
                </div>
                <br /><br />
                <Row>
                    <Col lg={24} md={24}>
                        <div className="SectionEdit">
                            <div>
                               
                            </div>
                        </div>
                    </Col>
                    <Col lg={24}>
                        <div className="LogosContainer">
                            <Row>
                                {LogosData.map((item, index) => (
                                    <Col lg={4} xs={12} md={8}>
                                        <Link to={item.link} target="_blank">
                                            <div className="ClientLogos">
                                                <img src={item.img} alt="" />
                                            </div></Link>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>
                </Row>
                <br /><br /> */}
                {/* <Row className="row-reverse">

                    <Col lg={10}>
                        <div className="LogosContainer">
                            <Row>
                                {LogoDataSecond.map((item, index) => (
                                    <Col lg={8} xs={12}>
                                        <div className="ClientLogos">
                                            <img src={item.img} alt="" />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>
                    <Col lg={14}>
                        <div className="SectionEdit">
                            <div>
                                <h2>Licensing Handled</h2>
                                <p>Committed to stringent standards, we
                                    have built a state-of-the-art manufacturing facility adhering to global benchmarks. Our facility features advanced
                                    automation and quality management
                                    systems, ensuring excellence throughout. Seedo Toys proudly offers a production capacity of 5 billion battery-operated toys annually within our 75,000
                                    square feet space. We deliver large
                                    quantities without compromising on
                                    quality, upholding the highest standards
                                    of craftsmanship and safety.</p>
                            </div>
                        </div>
                    </Col>
                </Row> */}
            </section>
        </>
    )
}
export default Client