import React, { useState, useEffect, useRef } from "react";
import "./ImageStickyContainer.css"
import { useParams } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
const ImageSticky = () => {

    const { categoryName, productId } = useParams();
    // const containerRef = useRef(null);

    // useEffect(() => {
    //     const images = containerRef.current.querySelectorAll('img');

    //     const handleScroll = () => {
    //         images.forEach((image) => {
    //             const rect = image.getBoundingClientRect();
    //             const screenHeight = window.innerHeight;

    //             // Calculate fade based on position relative to the viewport
    //             const fadeFactor = Math.max(0, 0.6 - Math.abs(rect.top) / screenHeight); // Starts at 1, decreases as the image moves up
    //             image.style.opacity = fadeFactor.toString();
    //         });
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     // Run once initially to ensure images are updated correctly on load
    //     handleScroll();

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <>
            <div className="WhyUsContainer">
                <div className="BackSVG">
                    <svg width="1895" height="997" viewBox="0 0 1895 997" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M489 15.2177C394.5 -2.98877 212 -4.08235 0 74.7177V996.5H1895V18.2177C1888.83 23.8843 1864.8 39.2177 1818 55.2177C1739.67 78.551 1575.33 94.0308 1397 48.5C1373.5 42.5 1279.3 16.1177 1240.5 9.71766C1187.5 0.217663 1045.7 -14.9823 822.5 36.2177C745.5 53.8807 663.4 48.8177 489 15.2177Z" fill="#A0DEF7" />
                    </svg>
                </div>
                <div className="SectionHeadingContainer">
                    <h2 data-aos="fade-up"
                        data-aos-duration="1000" className="titleFont">Why Choose Us ?</h2>
                </div>
                <div className="stickyContainer">

                    <p data-aos="fade-up"
                        data-aos-duration="1500">We are committed to excellence and safety in everything we do. Every product undergoes rigorous quality checks to ensure it meets the highest safety standards, making it 100% safe for kids and crafted with precision.
                        <br /> Our goal? To become India’s leading brand, setting new benchmarks for quality and creativity.
                    </p>
                </div>
                {/* <div className="AnimatedImageContainer" ref={containerRef}>
                    <Row>
                        <Col lg={8}>
                            <img
                                src="https://images.unsplash.com/photo-1623939012339-5b3dc8eca7c6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="fade-image"
                            />
                        </Col>
                        <Col lg={8}>
                            <img
                                src="https://plus.unsplash.com/premium_photo-1661430916195-f8bfa159d705?q=80&w=2711&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="fade-image"
                            />
                        </Col>
                        <Col lg={8}>
                            <img
                                src="https://images.unsplash.com/photo-1606818230946-61140311ad95?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="fade-image"
                            />
                        </Col>
                    </Row>
                </div> */}
                {/* <p>Primary CTA</p> */}
            </div>
        </>
    )
}
export default ImageSticky