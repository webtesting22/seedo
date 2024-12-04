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
                        <Col lg={6} mg={24}>
                            <div className="SlideBarContainer">
                                <h2 style={{ marginLeft: "10px", marginTop: "0px" }}>Trending Toys</h2>
                                {ProductData.slice(0, 7).map((item, index) => (
                                    <div key={index} className="ProductCardSlideBar" data-aos="fade-up"
                                        // Set the fade-in animation
                                        data-aos-delay={`${index * 100}`}>
                                        <div className="imageShow">
                                            <img src={item.image}alt="" />
                                        </div>
                                        <div className="TitleShow">
                                            {/* <span>Construction</span> */}
                                            <h4>{item.title}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Col>

                        <Col lg={18} md={24}>
                            <div className="RightSideRow">
                                <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between", marginBottom: "1rem" }}>
                                    <h2>Top Deals</h2>
                                    <Link to="/products"><button className="buttonStyleSecond" style={{ padding: "0.75rem 2rem" }}>Explore More <FaLongArrowAltRight style={{ marginLeft: "10px" }} /></button></Link>
                                </div>
                                <Row>
                                    {ProductData.slice(0, 9).map((item, index) => (
                                        <Col lg={8} md={12} key={index}>
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