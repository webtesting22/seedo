import React from "react";
import { FaCarSide, FaRocket, FaCubes, FaGamepad, FaRobot } from "react-icons/fa";
import "../../Styles/Marquee.css";

const Marquee = () => {
    const items = [
        { label: "Remote Cars", icon: <FaCarSide className="icon" /> },
        // { label: "Teddy Bears", icon: <FaTeddyBear className="icon" /> },
        { label: "Toy Rockets", icon: <FaRocket className="icon" /> },
        { label: "Building Blocks", icon: <FaCubes className="icon" /> },
        { label: "Gaming Pads", icon: <FaGamepad className="icon" /> },
        { label: "Robots", icon: <FaRobot className="icon" /> },
    ];

    return (
        <section id="marquee">
            <div className="marqueeContent">
                {items.map((item, index) => (
                    <div key={index} className="marqueeItem">
                        {item.icon}
                        <span>{item.label}</span>
                    </div>
                ))}
                {/* Duplicate the items to create a seamless loop */}
                {items.map((item, index) => (
                    <div key={`duplicate-${index}`} className="marqueeItem">
                        {item.icon}
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Marquee;
