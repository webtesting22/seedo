import React from "react";
import "../../Styles/Footer.css"
import { Row, Col } from "antd";
import SEEDOLogo from "../../../../public/SEEDOLogo.png"
import { IoLocationSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <section id="Footer">
                <div>
                    <Row>
                        <Col lg={6}>
                            <div className="FooterLogoContainer" style={{ paddingLeft: "0px" }}>
                                <img src={SEEDOLogo} alt="" />
                                <br />
                                <p>Lorem ipsum dolor sit amet consectetur. Id fames there are many vulputate eget dolor.</p>
                                <div className="LinksContainer">
                                    <div><IoLocationSharp /><span>6391 Elgin St. Celina, Delaware 10299</span></div>
                                    <div><IoMdCall /><span>+000-1234-456789</span></div>
                                    <div><FaEnvelope /><span>toyup@gmail.com</span></div>
                                    {/* <div><span>+000-1234-55000</span></div> */}
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div>
                                <h2>Products</h2>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div>
                                <h2>Customer Support</h2>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div>
                                <h2>Subscribe Our NewsLetter</h2>
                            </div>
                        </Col>
                    </Row>
                </div>
                <hr />
                <div className="CopyWriteText">
                    <p>© 2024 OutLead Solutions. All rights reserved.</p>
                </div>
            </section>
        </>
    )
}
export default Footer;