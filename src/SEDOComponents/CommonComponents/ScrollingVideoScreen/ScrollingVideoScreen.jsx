import React, { useEffect, useRef, useState } from "react";
import "../../Styles/ScrollingVideoAnimation.css";
import { Row, Col } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ScrollingVideoScreen = () => {


    return (
        <section id="ScrollingVideoAnimationContainer">
            <div className="makeInIndiaCardGray">
                {/* <h1>MAKE IN INDIA </h1> */}
                <p>As strong advocates for local manufacturing, we take pride in sourcing all our components from within India. We fully support and align with Mr Narendra Modi's vision of promoting the
                    “Make In India" initiative, fostering economic growth and self-reliance in our nation.
                </p>
            </div>
            {/* <div className="AboutHomeHeader">
                <p style={{ marginBottom: "0px", color: "#A5252B" }}>Planting Creativity, Growing Joy.
                </p>
                <h2 style={{ marginTop: "0px" }}>Where Imagination Comes to Life.</h2>
            </div>
            <div>
                <Row>
                    <Col lg={12}>
                        <div className="AboutHomeContent">
                            <div className="InsideContainer">
                                <div className="HrHeadingAnimated">
                                    <h2>SEEDO</h2>
                                    <hr />
                                </div>
                                <p>
                                    Driven by creativity, we developed a range of high-quality toys over six months, ensuring they are safe, affordable, and meet the highest standards. Seedo Toys sparks children’s imaginations while offering parents confidence in our craftsmanship. We're excited to share our collection and bring joy to kids everywhere.</p>
                                <div style={{ display: "flex", justifyContent: "start", width: "100%" }}>
                                    <Link to="/aboutSeedo"><button><FaArrowRightLong /></button></Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="AboutUsHomeImage">
                            <img src="https://plus.unsplash.com/premium_photo-1661412706592-0d43f0b0b440?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                    </Col>
                </Row>
            </div> */}
        </section>
    );
};

export default ScrollingVideoScreen;
