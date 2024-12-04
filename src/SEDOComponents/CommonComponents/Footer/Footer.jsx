import React from "react";
import "../../Styles/Footer.css"
import { Row, Col } from "antd";
import SEEDOLogo from "../../../../public/SEEDOLogo.png"
import { IoLocationSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <section id="Footer">
                <div>
                    <Row>
                        <Col lg={6}>
                            <div className="FooterLogoContainer" style={{ paddingLeft: "0px" }}>
                                <Link to="/"><img src={SEEDOLogo} alt="" /></Link>
                                <br />
                                <p>Lorem ipsum dolor sit amet consectetur. Id fames there are many vulputate eget dolor.</p>
                                <div className="LinksContainer">
                                    <div><IoLocationSharp /><span>B5/70, 1st Floor, Rama Road Industrial Area, New Delhi, India -110015.</span></div>
                                    <div><IoMdCall /><span>+91 95990 36749</span></div>
                                    <div><FaEnvelope /><span>info@seedotoys.com</span></div>
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