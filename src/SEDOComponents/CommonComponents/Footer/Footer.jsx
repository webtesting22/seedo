import React from "react";
import "../../Styles/Footer.css"
import { Row, Col } from "antd";
import SEEDOLogo from "/SEEDOLogo.png"
import { IoLocationSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import { LiaFacebookSquare } from "react-icons/lia";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import NavigationLinks from "../Navigation/NavigationLinks";
const Footer = () => {
    return (
        <>
            <section id="Footer">
                <div className="FooterAdjustContainer">
                    <Row>
                        <Col lg={8} md={12} style={{ width: "100%" }}>
                            <div className="ContactContainerandSocial">
                                <div>
                                    <p><b>Contact us:</b> 987644483</p>
                                    <p><b>Email:</b>  <Link to="mailto:info@seedotoys.com" target="_blank" style={{ color: "white" }}>info@seedotoys.com</Link></p>
                                    {/* <p><b>Privacy Policy</b></p>
                                    <p><b>Terms and Condition</b></p> */}
                                </div>

                            </div>
                        </Col>
                        <Col lg={8} md={12} style={{ width: "100%" }}>
                            <div className="LinksContainer">
                                <p><b>Navigations</b></p>
                                <ul>
                                    {NavigationLinks.map((item, index) => (
                                        <Link to={item.path} key={index}>
                                            <li >{item.link}</li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col lg={8} md={12} style={{ width: "100%" }}>
                            <div className="FooterAdressContainer">
                                <div>
                                    <p><b>Office:</b> B5/70, 1st Floor, Rama Road Industrial Area New Delhi, India 110015</p>
                                </div>
                                <div>
                                    {/* <p><b>Address</b></p> */}
                                    {/* <p>Plot No. 23, Sector-57, Phase-IV & <br /> Plot No. 139, Sector-56, Phase-V, <br /> HSIIDC Industrial Area/Estate, Kundli, Sonipat, Haryana-131028</p> */}
                                    <p><b>Unit 1:</b> Plot No. 23, Sector-57, Phase-IV, HSIIDC Industrial Area, Kundli, Sonipat, Haryana-131028</p>
                                    {/* <p></p> */}
                                </div>
                                <div>
                                    <p><b>Unit 2:</b> Plot No 139, Sector-56, Phase-V, HSIIDC Industrial Area, Kundli, Sonipat, Haryana-131028</p>
                                    {/* <p></p> */}
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* <hr style={{opacity:"0.4",border:"0.5px solid white"}}/> */}
                    <div className="CopywriteText">
                        <div style={{display:"flex",alignItems:"center"}}>
                            <p><b>Join Us</b> &nbsp;&nbsp;</p>
                            {/* <p><LiaFacebookSquare /></p> */}
                            <div>
                                <Link to="https://www.instagram.com/seedotoys/" target="_blank"><p style={{display:"flex",alignItems:"center"}}><CiInstagram style={{ color: "white",fontSize:"25px" }} /></p></Link>
                            </div>
                            {/* <p><FaXTwitter /></p> */}
                        </div>
                        <p style={{margin:"0px"}}>@2024 <Link to="https://www.outleadsolutions.com/" target="_blank">OutLead solutions.</Link> All rights reserved.</p>
                    </div>
                </div>
                {/* <h1>GET IN TOUCH</h1> */}
                {/* <div>
                    <Row>
                        <Col lg={10} md={24}>
                            <div className="FooterLogoContainer" style={{ paddingLeft: "0px" }}>
                              



                                <div className="FactoryContainer">
                                    <h2 style={{ marginBottom: "0px" }}>FACTORY</h2>
                                    <div className="AddressContainer">
                                        <div>
                                            <h3>UNIT 1</h3>
                                            <p>Plot No. 23, Sector-57, Phase-IV, HSIIDC Industrial Area, Kundli, Dist. Sonipat, Haryana, INDIA 131028</p>
                                        </div>
                                        <div>
                                            <h3>UNIT 2</h3>
                                            <p>Plot No. 139, Sector-56 Phase-V, HSIIDC Industrial Estate, Kundli, Dist. Sonipat, Haryana, INDIA 131028</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} md={12} xs={12}>
                            <div className="FooterLinksContainer">
                                <h2>Links</h2>
                                <div className="footerNavigation">
                              
                                    <Link to="/">Home</Link>
                                    <Link to="/aboutSeedo">About Us</Link>
                                    <Link to="/certification-and-client">Certifications and Clients</Link>
                                    <Link to="/products">Products</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={12} xs={12}>
                            <div className="FooterCategoriesContainer">
                                <h2>Categories</h2>
                                <p>Cars</p>
                                <p>Teddies</p>
                                <Link to="/Products">View More</Link>
                            </div>
                        </Col>
                        <Col lg={6} >
                            <div>
                                <div className="LinksContainer">
                                    <h2>Contact Us</h2>
                                    <div><LocationOnIcon /><Link to="https://maps.app.goo.gl/iTpGNmjCsHpCQwYw9" target="_blank">B5/70, 1st Floor, Rama Road Industrial Area, New Delhi, India -110015.</Link></div>
                                    <div><PhoneIcon /><Link to="tel:+919599036749" target="_blank">+91 95990 36749</Link></div>
                                    <div><MailIcon /><Link to="mailto:info@seedotoys.com" target="_blank">info@seedotoys.com</Link></div>
                                   
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <hr />
                <div className="CopyWriteText">
                    <p>© 2024 <Link to="https://www.outleadsolutions.com/" target="_blank" style={{ color: "white", textDecoration: "none" }}><b>OutLead Solutions.</b></Link> All rights reserved.</p>
                </div> */}
            </section>
        </>
    )
}
export default Footer;