import React from "react";
import { Row, Col } from "antd";
import "../../Styles/ClientComponent.css"
import Amway from "../../../../public/Images/Logos/Clientlogos/Amway.png"
import himalaya from "../../../../public/Images/Logos/Clientlogos/himalaya.png"
import Haldiram from "../../../../public/Images/Logos/Clientlogos/Haldiram.png"
import Perfetti from "../../../../public/Images/Logos/Clientlogos/Perfetti.png"
import unilever from "../../../../public/Images/Logos/Clientlogos/unilever.png"
import Pepsi from "../../../../public/Images/Logos/Clientlogos/Pepsi.png"
import GSK from "../../../../public/Images/Logos/Clientlogos/GSK.png"
import Britannia from "../../../../public/Images/Logos/Clientlogos/Britannia.png"
import CartoonNetwork from "../../../../public/Images/Logos/Clientlogos/CartoonNetwork.png"
import tomandjerry from "../../../../public/Images/Logos/Clientlogos/tomandjerry.png"
import Disney from "../../../../public/Images/Logos/Clientlogos/Disney.png"
import Marvel from "../../../../public/Images/Logos/Clientlogos/Marvel.png"
import ChhotaBheem from "../../../../public/Images/Logos/Clientlogos/ChhotaBheem.png"
import ToyStory3 from "../../../../public/Images/Logos/Clientlogos/ToyStory3.png"
import Barbie from "../../../../public/Images/Logos/Clientlogos/Barbie.png"
import doraemon from "../../../../public/Images/Logos/Clientlogos/doraemon.png"
const Client = () => {

    const LogosData = [
        {
            img: Amway
        },
        {
            img: himalaya
        },
        {
            img: Haldiram
        },
        {
            img: Perfetti
        },
        {
            img: unilever
        },
        {
            img: Pepsi
        },
        {
            img: GSK
        },
        {
            img: Britannia
        }
    ]

    const LogoDataSecond = [
        {
            img: CartoonNetwork
        },
        {
            img: tomandjerry
        },
        {
            img: Disney
        },
        {
            img: Marvel
        },
        {
            img: ChhotaBheem
        },
        {
            img: ToyStory3
        },
        {
            img: Barbie
        },
        {
            img: doraemon
        }
    ]
    return (
        <>
            <section id="ClientSection">
                <div className="LeftSideContentContainer">
                    <h2 className="PrimaryHeading-black">SEEDO Clients</h2>
                    <p>Trusted Partner</p>
                </div>
                <Row>
                    <Col lg={14}>
                        <div className="SectionEdit">
                            <div>
                                <h2>Clients Handled</h2>
                                <p>Inspired by the "Make in India initiative"
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
                                    joy to children everywhere.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={10}>
                        <div className="LogosContainer">
                            <Row>
                                {LogosData.map((item, index) => (
                                    <Col lg={8}>
                                        <div className="ClientLogos">
                                            <img src={item.img} alt="" />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>
                </Row>
                <br /><br />
                <Row>

                    <Col lg={10}>
                        <div className="LogosContainer">
                            <Row>
                                {LogoDataSecond.map((item, index) => (
                                    <Col lg={8}>
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
                </Row>
            </section>
        </>
    )
}
export default Client