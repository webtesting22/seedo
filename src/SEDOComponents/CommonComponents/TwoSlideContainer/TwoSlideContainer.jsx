import React, { useState } from "react";
import { Row, Col } from "antd";
import "../../Styles/TwoSlideContainer.css";

const TwoSlideContainer = () => {
    const [backgroundImage, setBackgroundImage] = useState(
        "https://img.freepik.com/free-photo/green-easter-car-with-dotted-egg_23-2149301318.jpg?t=st=1733251376~exp=1733254976~hmac=71a0415dc642cb2490fa3c3338c34d25e58eac203d17c9d20e7f8f80185c5865&w=2000"
    );
    const [animationKey, setAnimationKey] = useState(0);

    const headings = [
        { text: "Hello 1", image: "https://images.unsplash.com/photo-1609395464110-7116592351c6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { text: "Hello 2", image: "https://plus.unsplash.com/premium_photo-1684795780827-3b1830a7daa0?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { text: "Hello 3", image: "https://img.freepik.com/premium-photo/festive-valentine-s-day-holiday-flat-lay-annual-holiday-shopping-concept-reasonable-consumption_330121-278.jpg?w=1800" },
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
                <Row>
                    <Col lg={24}>
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
