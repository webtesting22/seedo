import React,{useState,useEffect} from "react";
import "../../Styles/VisionMission.css"
import { Row, Col } from "antd";
const MissionVision = () => {
    const images = [
        "https://images.unsplash.com/photo-1496031867413-058d7da89c63?q=80&w=2849&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515611309071-6cd7e12cace9?q=80&w=3036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1664373233010-7c4abae40f78?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change image every 2 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [images.length]);

    return (
        <>
            <section id="MissionVisionComponent">
                <p style={{ color: "#A5252B", textAlign: "center", marginBottom: "0px" }}>All You Need is Fun!</p>
                <h2 className="PrimaryHeading-black" style={{ color: "black", textAlign: "center" }}>
                    SEEDO Goals
                </h2>
                <br />
                <div className="MainContainerVisionMission">

                    <Row>
                        <Col lg={8} md={12} style={{width:"100%"}}>
                            <div className="LeftSideMissionContainer">
                                <div>
                                    <h2>Our Mission</h2>To deliver high-quality, safe, and innovative toys that inspire creativity and confidence in children and parents alike.
                                    <p></p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={12} style={{width:"100%"}}>
                            <div className="MiddleImageContainer">
                            {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className={`carousel-image ${
                            index === currentIndex ? "active" : "inactive"
                        }`}
                    />
                ))} </div>
                        </Col>
                        <Col lg={8} md={12} style={{width:"100%"}}>
                            <div className="RightSideVisionContainer">
                                <div>
                                    <h2>Our Vision</h2>
                                    <p>To become a leading toy manufacturer globally, Seedo Toys aims to be recognized for excellence in product quality and innovation while integrating advance technology into its offerings.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </div>
            </section>
        </>
    )

}
export default MissionVision