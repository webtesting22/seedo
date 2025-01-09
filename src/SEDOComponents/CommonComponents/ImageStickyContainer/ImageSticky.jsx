import React, { useState, useEffect, useRef } from "react";
import "./ImageStickyContainer.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
const ImageSticky = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const images = containerRef.current.querySelectorAll('img');

        const handleScroll = () => {
            images.forEach((image) => {
                const rect = image.getBoundingClientRect();
                const screenHeight = window.innerHeight;

                // Calculate fade based on position relative to the viewport
                const fadeFactor = Math.max(0, 0.6 - Math.abs(rect.top) / screenHeight); // Starts at 1, decreases as the image moves up
                image.style.opacity = fadeFactor.toString();
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Run once initially to ensure images are updated correctly on load
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="WhyUsContainer">
                <div className="stickyContainer">
                    <h2>Why Choose Us ?</h2>
                    <p>We are committed to excellence and safety in everything we do. Every product undergoes rigorous quality checks to ensure it meets the highest safety standards, making them 100% kid safe and crafted with precision.
                       <br /> Our goal? To become India’s leading brand, setting new benchmarks for quality and creativity.
                    </p>
                </div>
                <div className="AnimatedImageContainer" ref={containerRef}>
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
                </div>
                {/* <p>Primary CTA</p> */}
            </div>
        </>
    )
}
export default ImageSticky