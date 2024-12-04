import React, { useState } from "react";
import { Row, Col } from "antd";
import "../../Styles/TwoSlideContainer.css";
import HoverBack from "../../../../public/Images/Banners/HoverBack.png"
import Drone from "../../../../public/Images/Banners/Drone.png"
import CarBanner from "../../../../public/Images/Banners/CarBanner.jpeg"
const TwoSlideContainer = () => {
    const [backgroundImage, setBackgroundImage] = useState(
        CarBanner
    );
    const [animationKey, setAnimationKey] = useState(0);

    const headings = [
        { text: "Racing Car", image: "https://images.unsplash.com/photo-1609395464110-7116592351c6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { text: "Rock Crawler", image: "https://plus.unsplash.com/premium_photo-1684795780827-3b1830a7daa0?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { text: "Hyper Car", image: HoverBack },
        { text: "Drone", image: Drone },
        { text: "Twisting Stunt", image: CarBanner },

    ];


    const handleHover = (image) => {
        setBackgroundImage(image);
        setAnimationKey((prevKey) => prevKey + 1);
    };

    return (
        <div id="TwoSlideContainer">
            <div style={{ position: "relative", overflow: "hidden" }}>
                <div
                    key={animationKey}
                    className="backgroundImage"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                ></div>
                <Row style={{ width: "100%" }}>
                    <Col lg={24} style={{ width: "100%" }}>
                        <div className="ImageCard">
                            <div className="ImageContainer">
                                <div className="overlayColor"></div>
                                <div className="HeadingContainer">
                                    {headings.map((heading, index) => (
                                        <h2
                                            key={index}
                                            className="outlineText"
                                            onMouseEnter={() => handleHover(heading.image)}
                                        >
                                            {heading.text}
                                        </h2>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default TwoSlideContainer;
