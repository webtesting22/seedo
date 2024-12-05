import React from "react";
import "../../Styles/HomePageProduct.css"
import ProductData from "../../ProductData";
import { Row, Col } from "antd";
import Construction from "../../../../public/Images/Products/Construction.png"
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import DriftSeries1 from "../../../../public/Images/Products/DriftSeries1.png"
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const HomePageProducts = () => {
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating); // Full stars
        const halfStar = rating % 1 !== 0; // Check for half star
        const emptyStars = 5 - Math.ceil(rating); // Remaining empty stars

        return (
            <>
                {[...Array(fullStars)].map((_, index) => (
                    <FaStar key={`full-${index}`} className="star full" />
                ))}
                {halfStar && <FaStarHalfAlt className="star half" />}
                {[...Array(emptyStars)].map((_, index) => (
                    <FaRegStar key={`empty-${index}`} className="star empty" />
                ))}
            </>
        );
    };

    return (
        <>
            <section id="HomePageProductContainer">
                <div className="HomePageProductCard">
                    <Row>
                        {/* <Col lg={6} mg={24} style={{ width: "100%" }}>
                            <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
                                <div className="headingSVG">
                                    <svg width="100%" class="svg rotating-image" height="100%" viewBox="0 0 20 23" fill="red" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.01745 19.7867C8.01745 21.7867 9.29195 23.001 10 23.001C10.7081 23.001 11.9826 21.7867 11.9826 19.7867C11.9826 19.5724 10.2124 14.2867 10.1416 11.7867C12.195 13.0724 15.9477 17.2867 16.1601 17.3581C17.8594 18.3581 19.4879 17.8581 19.9128 17.2867C20.196 16.6438 19.842 14.9295 18.0718 13.9295C17.8594 13.7867 12.549 12.7153 10.2832 11.501C12.549 10.2867 17.8594 9.21526 18.0718 9.0724C19.842 8.0724 20.196 6.35812 19.9128 5.78669C19.4879 5.14383 17.8594 4.64383 16.1601 5.64383C15.9477 5.78669 12.195 9.92955 10.1416 11.2867C10.2124 8.71526 11.9826 3.57241 11.9826 3.21526C11.9826 1.21526 10.7081 0.000976562 10 0.000976562C9.29195 0.000976562 8.01745 1.21526 8.01745 3.21526C8.01745 3.50097 9.71678 8.71526 9.85839 11.2867C7.73423 9.92955 4.12315 5.78669 3.83993 5.64383C2.1406 4.64383 0.512072 5.14383 0.0872398 5.78669C-0.195982 6.35812 0.158045 8.0724 1.92818 9.0724C2.2114 9.21526 7.451 10.2867 9.64597 11.501C7.451 12.7153 2.2114 13.7867 1.92818 13.9295C0.158045 14.9295 -0.195982 16.6438 0.0872398 17.2867C0.512072 17.8581 2.1406 18.3581 3.83993 17.3581C4.05234 17.2153 7.73423 13.0724 9.85839 11.7867C9.71678 14.2867 8.01745 19.5724 8.01745 19.7867Z" fill="currentColor"></path>
                                    </svg>
                                    <h2>Popular Toys</h2>
                                </div>
                            </div>
                            <div className="SlideBarContainer">

                                {ProductData.slice(0, 7).map((item, index) => (
                                    <div key={index} className="ProductCardSlideBar" data-aos="fade-up"
                                        // Set the fade-in animation
                                        data-aos-delay={`${index * 100}`}>
                                        <div className="imageShow">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="TitleShow">
                                            <span>Construction</span>
                                            <h4>{item.title}</h4>
                                            <div className="ratingContainer">
                                                {renderStars(item.rating)}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Col> */}

                        <Col lg={24} md={24} id="Adjust">
                            {/* <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
                                <div className="headingSVG">
                                    <svg width="100%" class="svg rotating-image" height="100%" viewBox="0 0 20 23" fill="red" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.01745 19.7867C8.01745 21.7867 9.29195 23.001 10 23.001C10.7081 23.001 11.9826 21.7867 11.9826 19.7867C11.9826 19.5724 10.2124 14.2867 10.1416 11.7867C12.195 13.0724 15.9477 17.2867 16.1601 17.3581C17.8594 18.3581 19.4879 17.8581 19.9128 17.2867C20.196 16.6438 19.842 14.9295 18.0718 13.9295C17.8594 13.7867 12.549 12.7153 10.2832 11.501C12.549 10.2867 17.8594 9.21526 18.0718 9.0724C19.842 8.0724 20.196 6.35812 19.9128 5.78669C19.4879 5.14383 17.8594 4.64383 16.1601 5.64383C15.9477 5.78669 12.195 9.92955 10.1416 11.2867C10.2124 8.71526 11.9826 3.57241 11.9826 3.21526C11.9826 1.21526 10.7081 0.000976562 10 0.000976562C9.29195 0.000976562 8.01745 1.21526 8.01745 3.21526C8.01745 3.50097 9.71678 8.71526 9.85839 11.2867C7.73423 9.92955 4.12315 5.78669 3.83993 5.64383C2.1406 4.64383 0.512072 5.14383 0.0872398 5.78669C-0.195982 6.35812 0.158045 8.0724 1.92818 9.0724C2.2114 9.21526 7.451 10.2867 9.64597 11.501C7.451 12.7153 2.2114 13.7867 1.92818 13.9295C0.158045 14.9295 -0.195982 16.6438 0.0872398 17.2867C0.512072 17.8581 2.1406 18.3581 3.83993 17.3581C4.05234 17.2153 7.73423 13.0724 9.85839 11.7867C9.71678 14.2867 8.01745 19.5724 8.01745 19.7867Z" fill="currentColor"></path>
                                    </svg>
                                    <h2>Top Deals</h2>
                                </div>
                                <Link to="/products"><button className="buttonStyleSecond" style={{ padding: "0.75rem 2rem" }}>Explore More</button></Link>
                            </div> */}
                            <div className="RightSideRow">

                                <Row>
                                    {ProductData.map((item, index) => (
                                        <Col lg={6} md={12} key={index}>
                                            <div className="BigCardEdit" data-aos="fade-up"
                                                // Set the fade-in animation
                                                data-aos-delay={`${index * 100}`} >
                                                <div className="HoverImageContainer">
                                                    <img src={item.image} alt="Default Image" className="defaultImage" />
                                                    <img
                                                        src={item.image}
                                                        alt="Hover Image"
                                                        className="hoverImage"
                                                    />
                                                </div>

                                                <div className="TitleContainer">
                                                    <span>{item.Categories}</span>
                                                    <h4>{item.title}</h4>
                                                    <div className="ratingContainer">
                                                        {renderStars(item.rating)}
                                                    </div>

                                                </div>
                                            </div>
                                        </Col>

                                    ))}
                                </Row>
                            </div>
                        </Col>


                    </Row>
                </div>
            </section>
        </>
    )
}
export default HomePageProducts