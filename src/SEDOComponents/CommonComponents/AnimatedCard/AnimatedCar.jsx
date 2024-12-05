import React, { useEffect, useRef, useState } from "react";
import AnimationImage from "/Images/Banners/AnimationImage.jpg";
import "../../Styles/AnimatedCar.css";

const AnimatedCar = () => {
    const carRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting);
                });
            },
            { threshold: 0.1 } // Adjust the threshold as needed
        );

        if (carRef.current) {
            observer.observe(carRef.current);
        }

        return () => {
            if (carRef.current) {
                observer.unobserve(carRef.current);
            }
        };
    }, []);

    return (
        <section>
            <div
                id="CardSlideAnimation"
                ref={carRef}
                className={isVisible ? "animate" : ""}
            >
                <img src={AnimationImage} alt="Animation Car" />
            </div>
        </section>
    );
};

export default AnimatedCar;
