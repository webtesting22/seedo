import React, { useState, useEffect, useRef } from "react";
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
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import CarDoodle from "./Car doodle.svg"

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Start animation when image is visible
                }
            },
            {
                threshold: 0.5, // Trigger when 50% of the image is in view
            }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);
    return (
        <>
            <section id="Footer">
                <div className="BackSVG">
                    <svg width="1895" height="997" viewBox="0 0 1895 997" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M489 15.2177C394.5 -2.98877 212 -4.08235 0 74.7177V996.5H1895V18.2177C1888.83 23.8843 1864.8 39.2177 1818 55.2177C1739.67 78.551 1575.33 94.0308 1397 48.5C1373.5 42.5 1279.3 16.1177 1240.5 9.71766C1187.5 0.217663 1045.7 -14.9823 822.5 36.2177C745.5 53.8807 663.4 48.8177 489 15.2177Z" fill="#A0DEF7" />
                    </svg>
                </div>
                <div className="FooterAdjustContainer">
                    <Row>
                        <Col lg={6} style={{ width: "100%" }}>
                            <div>
                                <img src={SEEDOLogo} alt="" style={{ width: "125px", borderRadius: "10px", marginTop: "25px" }} />
                                <h1 style={{ fontSize: "18px", fontWeight: "500" }}>Break the Limit</h1>
                            </div>
                        </Col>
                        <Col lg={5} md={12} style={{ width: "100%" }}>
                            <div className="ContactContainerandSocial">

                                <div>
                                    <p><b>Contact Us</b> </p>
                                    <div style={{ display: "flex", flexDirection: "Column", gap: "10px" }}>
                                        <Link to="mailto:info@seedotoys.com" target="_blank" > <FaRegEnvelope /> &nbsp;&nbsp;info@seedotoys.com</Link>
                                        <Link><MdOutlinePhone />&nbsp;&nbsp;</Link>
                                    </div>
                                    {/* <p><b>Privacy Policy</b></p>
                                    <p><b>Terms and Condition</b></p> */}
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                                    <p><b>Follow Us</b> &nbsp;&nbsp;</p>
                                    {/* <p><LiaFacebookSquare /></p> */}
                                    <div>
                                        <Link to="https://www.instagram.com/seedotoys/" target="_blank"><p style={{ margin: "0px" }}><CiInstagram /></p></Link>
                                    </div>
                                    {/* <p><FaXTwitter /></p> */}
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={12} style={{ width: "100%" }}>
                            <div className="LinksContainer">
                                <p><b>Explore</b></p>
                                <ul>
                                    {NavigationLinks.map((item, index) => (
                                        <Link to={item.path} key={index}>
                                            <li >{item.link}</li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col lg={9} md={12} style={{ width: "100%" }}>
                            <p><b>Address</b></p>
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
                            {/* <br />
                            <br /> */}
                        </Col>

                    </Row>

                    {/* <hr style={{opacity:"0.4",border:"0.5px solid white"}}/> */}
                    <div className="CopywriteText" ref={imageRef}>
                        <img
                            src={CarDoodle} // Replace with your image path
                            alt="Sliding"
                            style={{
                                width: "100px",
                                position: "absolute",
                                left: isVisible ? "1450px" : "0px", // Move from 0px to 200px
                                top: "-40px",
                                transition: "left 4s ease-in-out",
                                transform: "scaleX(-1)",
                            }}
                        />
                        <p style={{ margin: "0px" }}>@2025 <Link to="https://www.outleadsolutions.com/" target="_blank">OutLead Solutions.</Link> All rights reserved.</p>
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