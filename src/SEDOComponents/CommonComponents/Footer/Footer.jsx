import React from "react";
import "../../Styles/Footer.css"
import { Row, Col } from "antd";
import SEEDOLogo from "../../../../public/SEEDOLogo.png"
import { IoLocationSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
const Footer = () => {
    return (
        <>
            <section id="Footer">
                <div>
                    <Row>
                        <Col lg={8} md={24}>
                            <div className="FooterLogoContainer" style={{ paddingLeft: "0px" }}>
                                <Link to="/"><img src={SEEDOLogo} alt="" /></Link>
                                <br />
                                {/* <p>Lorem ipsum dolor sit amet consectetur. Id fames there are many vulputate eget dolor.</p> */}

                            </div>
                        </Col>
                        <Col lg={4} md={12} xs={12}>
                            <div className="FooterLinksContainer">
                                <h2>Links</h2>
                                <div className="footerNavigation">
                                    {/* <a>Home</a> */}
                                    <Link to="/">Home</Link>
                                    <Link to="/aboutSeedo">About Us</Link>
                                    <Link to="/certification-and-client">Certifications and Clients</Link>
                                    <Link to="/products">Products</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={12} xs={12}>
                            <div className="FooterCategoriesContainer">
                                <h2>Categories</h2>
                                <p>Cars</p>
                                <p>Teddies</p>
                                <Link to="/Products">View More</Link>
                            </div>
                        </Col>
                        <Col lg={8} >
                            <div>
                                <div className="LinksContainer">
                                    <h2>Contact Us</h2>

                                    <div><LocationOnIcon /><Link to="https://maps.app.goo.gl/iTpGNmjCsHpCQwYw9" target="_blank">B5/70, 1st Floor, Rama Road Industrial Area, New Delhi, India -110015.</Link></div>
                                    <div><PhoneIcon /><Link to="tel:+919599036749" target="_blank">+91 95990 36749</Link></div>
                                    <div><MailIcon /><Link to="mailto:info@seedotoys.com" target="_blank">info@seedotoys.com</Link></div>
                                    {/* <div><IoLocationSharp  /><span>B5/70, 1st Floor, Rama Road Industrial Area, New Delhi, India -110015.</span></div> */}
                                    {/* <div><IoMdCall /><span>+91 95990 36749</span></div> */}
                                    {/* <div><FaEnvelope /><span>info@seedotoys.com</span></div> */}
                                    {/* <div><span>+000-1234-55000</span></div> */}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <hr />
                <div className="CopyWriteText">
                    <p>© 2024 <Link to="https://www.outleadsolutions.com/" target="_blank" style={{color:"white",textDecoration:"none"}}><b>OutLead Solutions.</b></Link> All rights reserved.</p>
                </div>
            </section>
        </>
    )
}
export default Footer;