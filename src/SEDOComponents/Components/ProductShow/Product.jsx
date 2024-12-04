import React from "react";
import ProductPageBanner from "../../../../public/Images/Banners/CarsBanner.jpg"
import "../../Styles/Product.css"
import { Row, Col } from "antd";
import ProductData from "../../ProductData";
const Products = () => {
    return (
        <>
            <section id="ProductContainer">
                <div className="BannerContainer">
                    <img src={ProductPageBanner} alt="" />
                </div>
                <div id="ProductShowContainer">
                    <div>
                        <Row>
                            <Col lg={6}>
                                <div className="CategoriesFilters">
                                    <div className="SelectedFiltersName">

                                    </div>
                                    <div className="FilterCheckBox">

                                    </div>
                                    <div className="SearchBarContainer">

                                    </div>
                                </div>
                            </Col>
                            <Col lg={18}>
                                <Row>
                                    {ProductData.map((item, index) => (
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
                                                    {/* <div className="ratingContainer">
                                                        {renderStars(item.rating)}
                                                    </div> */}

                                                </div>
                                            </div>
                                        </Col>

                                    ))}
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Products