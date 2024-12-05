import React, { useEffect, useRef, useState } from "react";
import "../../Styles/ScrollingVideoAnimation.css";
import ScrollingVideoAnimated from "../../../../public/Videos/ScrollingVideoAnimated.mp4";

const ScrollingVideoScreen = () => {
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(() => {
        // Get saved width from localStorage if available, else use default value
        const savedWidth = localStorage.getItem("containerWidth");
        return savedWidth ? parseFloat(savedWidth) : 100;
    });

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const containerTop = containerRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Calculate the scroll progress
            const scrollProgress = Math.min(Math.max((windowHeight - containerTop) / windowHeight, 0), 1);

            // Calculate width based on scroll progress
            const newWidth = 100 + scrollProgress * (window.innerWidth - 100);

            // Set width dynamically and save to localStorage
            setContainerWidth(newWidth);
            localStorage.setItem("containerWidth", newWidth);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section id="ScrollingVideoAnimationContainer">
            <div className="ScrollingVideoHeading">
                {/* <div style={{ overflow: "hidden" }}>
                    <h1 className="PrimaryHeading" data-aos="fade-right"
                        data-aos-offset="300" data-aos-duration="500"
                        data-aos-easing="ease-in-sine">Ignite the Adventure </h1>
                    <h1 className="PrimaryHeading-color" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" data-aos-duration="500">Timeless Fun</h1>
                </div> */}
                <div style={{ overflow: "hidden" }}>
                    <svg width="100%" class="svg rotating-image" height="100%" viewBox="0 0 20 23" fill="red" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.01745 19.7867C8.01745 21.7867 9.29195 23.001 10 23.001C10.7081 23.001 11.9826 21.7867 11.9826 19.7867C11.9826 19.5724 10.2124 14.2867 10.1416 11.7867C12.195 13.0724 15.9477 17.2867 16.1601 17.3581C17.8594 18.3581 19.4879 17.8581 19.9128 17.2867C20.196 16.6438 19.842 14.9295 18.0718 13.9295C17.8594 13.7867 12.549 12.7153 10.2832 11.501C12.549 10.2867 17.8594 9.21526 18.0718 9.0724C19.842 8.0724 20.196 6.35812 19.9128 5.78669C19.4879 5.14383 17.8594 4.64383 16.1601 5.64383C15.9477 5.78669 12.195 9.92955 10.1416 11.2867C10.2124 8.71526 11.9826 3.57241 11.9826 3.21526C11.9826 1.21526 10.7081 0.000976562 10 0.000976562C9.29195 0.000976562 8.01745 1.21526 8.01745 3.21526C8.01745 3.50097 9.71678 8.71526 9.85839 11.2867C7.73423 9.92955 4.12315 5.78669 3.83993 5.64383C2.1406 4.64383 0.512072 5.14383 0.0872398 5.78669C-0.195982 6.35812 0.158045 8.0724 1.92818 9.0724C2.2114 9.21526 7.451 10.2867 9.64597 11.501C7.451 12.7153 2.2114 13.7867 1.92818 13.9295C0.158045 14.9295 -0.195982 16.6438 0.0872398 17.2867C0.512072 17.8581 2.1406 18.3581 3.83993 17.3581C4.05234 17.2153 7.73423 13.0724 9.85839 11.7867C9.71678 14.2867 8.01745 19.5724 8.01745 19.7867Z" fill="currentColor"></path>
                    </svg>
                    <h2 className="SecondaryHeading">Seedo Toys</h2>
                    {/* <hr /> */}
                    <p className="paragraph" data-aos="fade-up"
                        data-aos-duration="800">Driven by creativity, we developed a range of high-quality toys over six months, ensuring they are safe, affordable, and meet the highest standards. Seedo Toys sparks children’s imaginations while offering parents confidence in our craftsmanship. We're excited to share our collection and bring joy to kids everywhere.


                    </p>
                </div>
            </div>
            <div className="VideoContainer">
                <div
                    ref={containerRef}
                    className="AnimatedScrollingContainer"
                    style={{
                        width: `${containerWidth}px`,
                    }}
                >
                    <video
                        src={ScrollingVideoAnimated}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="ScrollingVideo"
                    ></video>
                </div>
            </div>
        </section>
    );
};

export default ScrollingVideoScreen;
