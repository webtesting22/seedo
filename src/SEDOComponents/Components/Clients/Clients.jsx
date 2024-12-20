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
import { Link } from "react-router-dom";
const Client = () => {

    const LogosData = [

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
        {
            img: GSK,
            link: "https://www.gsk.com"
        },
        {
            img: Britannia,
            link: "https://www.britannia.co.in"
        },
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
        }
    ]

    // const LogoDataSecond = [

    // ]
    return (
        <>
            <section id="ClientSection">
                <div className="LeftSideContentContainer">
                    <h2 className="PrimaryHeading-black">Trusted Partner</h2>
                    {/* <p>Trusted Partner</p> */}
                </div>
                <br /><br />
                <Row>
                    <Col lg={24} md={24}>
                        <div className="SectionEdit">
                            <div>
                                {/* <h2>Clients Handled</h2> */}
                                {/* <p>Inspired by the "Make in India initiative"
                                    and the global interest in India as a
                                    manufacturing hub, we saw a significant opportunity in the toy industry,
                                    Driven by creativity and innovation, we
                                    spent six months developing a range
                                    of top-quality toys. Our commitment
                                    to safety and quality ensures our toys
                                    are affordable and meet the highest
                                    standards. Seedo Toys captivates children's imaginations while providing
                                    parents with confidence in our craftsmanship and design. We are excited
                                    to present our toy collection and bring
                                    joy to children everywhere.</p> */}
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
                <br /><br />
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