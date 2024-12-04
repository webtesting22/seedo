import React, { useState, useRef, useEffect } from "react";
import "../../Styles/ZoomCards.css"
import Teddy from "../../../../public/Images/Products/Teddy.png"
import JetSeries from "../../../../public/Images/Products/JetSeries.png"
import Racingseries from "../../../../public/Images/Products/Racingseries.png"
import DriftSeries from "../../../../public/Images/Products/DriftSeries.png"
import Construction from "../../../../public/Images/Products/Construction.png"
import NewLaunches from "../../../../public/Images/Products/NewLaunches.png"
import ZoomBackImage from "../../../../public/Images/Banners/ZoomBackImage.jpg"
import { Link } from "react-router-dom";
const ZoomCards = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const items = [
        { item: "Item 1", heading: "Brainy Bear", image: Teddy },
        { item: "Item 4", heading: "Jet Series", image: JetSeries },
        { item: "Item 5", heading: "Racing Series", image: Racingseries },
        { item: "Item 5", heading: "Drift Series", image: DriftSeries },
        { item: "Item 5", heading: "Construction Series", image: Construction },
        { item: "Item 5", heading: "New launches", image: NewLaunches },
    ];

    return (
        <>
            <section id="ZoomCardsContainer">
                <img src={ZoomBackImage} alt="" className="BackoverlayImage" />
                <div >
                    <h1 className="PrimaryHeading-black" data-aos="fade-right"
                        data-aos-offset="300" data-aos-duration="500"
                        data-aos-easing="ease-in-sine">Playful Creations </h1>
                    <h1 className="PrimaryHeading-red" data-aos="fade-right"
                        data-aos-offset="300" data-aos-duration="500"
                        data-aos-easing="ease-in-sine"> Wonders</h1>
                </div>
                <ul className="avatars" data-aos="fade-up"
                    data-aos-duration="500">
                    {items.map((item, index) => (
                        // <div>
                        <li
                            key={index}
                            className={hoveredItem === index ? "hovered" : ""}
                            onMouseEnter={() => setHoveredItem(index)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <img src={item.image} alt="" />
                            <div className="icon"></div>
                        </li>
                        //  <h5>{item.heading}</h5>
                        // </div>
                    ))}
                </ul>
                <div className="ViewMoreBtn">
                    <Link to="/products" style={{textDecoration:"none"}}><button className="buttonStyleSecond">Explore Toys World</button></Link>
                </div>

            </section>
        </>
    )
}
export default ZoomCards