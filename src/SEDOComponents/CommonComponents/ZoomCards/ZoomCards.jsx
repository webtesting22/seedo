import React, { useState, useRef, useEffect } from "react";
import "../../Styles/ZoomCards.css"
import Teddy from "/Images/Products/Teddy.png"
import JetSeries from "/Images/Products/JetSeries.png"
import Racingseries from "/Images/Products/Racingseries.png"
import DriftSeries from "/Images/Products/DriftSeries.png"
import Construction from "/Images/Products/Construction.png"
import NewLaunches from "/Images/Products/NewLaunches.png"
import ZoomBackImage from "/Images/Banners/ZoomBackImage.jpg"
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
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
                {/* <img src={ZoomBackImage} alt="" className="BackoverlayImage" /> */}
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" data-aos="fade-right"
                        data-aos-offset="300" data-aos-duration="500"
                        data-aos-easing="ease-in-sine">Playful Creations </h1>
                    <hr />
                    <p> <Link to="/products"> See All Toys &nbsp;<FaArrowRightLong /></Link></p>
                </div>
                <ul className="avatars" data-aos="fade-up"
                    data-aos-duration="500">
                    {items.map((item, index) => (
                        // <div>
                        <>

                            <li
                                key={index}
                                className={hoveredItem === index ? "hovered" : ""}
                                onMouseEnter={() => setHoveredItem(index)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <img src={item.image} alt="" />
                                <div className="icon"></div>
                                <p>  Category Name</p>
                            </li>
                        </>
                        //  <h5>{item.heading}</h5>
                        // </div>
                    ))}
                </ul>
                {/* <div className="ViewMoreBtn">
                    <Link to="/products" style={{ textDecoration: "none" }}><button className="buttonStyleSecond">Explore Toys World</button></Link>
                </div> */}

            </section>
        </>
    )
}
export default ZoomCards