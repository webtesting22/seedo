import React, { useRef, useState, useEffect } from "react";
import "../../Styles/HomePage.css";
import landingPageVideo1 from "./Video/landingpageVideo.mp4";

const HomePage = () => {
    const [fadeIn, setFadeIn] = useState(true); // State to control fade-in effect
    const videoRef = useRef(null);

    const mediaItem = { type: "video", src: landingPageVideo1 };

    // Function to handle video end and restart with fade-out and fade-in effect
    const handleVideoEnd = () => {
        setFadeIn(false); // Start fade-out effect
        setTimeout(() => {
            setFadeIn(true); // Start fade-in effect after the video ends
            videoRef.current.play(); // Play the video again
        }, 500); // Delay for the fade-out transition
    };

    useEffect(() => {
        const currentVideo = videoRef.current;
        if (currentVideo) {
            currentVideo.onended = handleVideoEnd; // Call handleVideoEnd when the video finishes
        }
    }, []);

    return (
        <section id="HomepageContainer">
            <div className="carousel-container">
                <div className="blackoverlay">

                </div>
                <div>
                    <video
                        ref={videoRef}
                        src={mediaItem.src}
                        className={`carousel-video ${fadeIn ? "fade-in" : "fade-out"}`}
                        autoPlay
                        playsInline 
                        muted
                        loop={false} // We don't loop the video, instead we handle it manually
                    />
                </div>
            </div>
        </section>
    );
};

export default HomePage;
