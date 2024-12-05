import React, { useState, useEffect } from "react";
import ProductPageBanner from "../../../../public/Images/Banners/CarsBanner.jpg";
import "../../Styles/Product.css";
import { Row, Col, Input, Slider, Tag } from "antd";
import ProductData from "../../ProductData";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Products = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(ProductData);

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - Math.ceil(rating);

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

    useEffect(() => {
        // Filter products based on search term
        const filtered = ProductData.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [searchTerm]);

    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section id="ProductContainer">
                <div className="BannerContainer">
                    <img src="https://images.unsplash.com/photo-1531693251400-38df35776dc7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div style={{ padding: "20px" }}>
                    <span>
                        <Link to="/" className="breadcrumb-link" style={{ color: "black" }}>Home</Link> &gt;{" "}
                        <Link to="/products" className="breadcrumb-link" style={{ color: "black" }}>Product</Link>
                    </span>
                </div>
                <div id="ProductShowContainer">
                    <div>
                        <Row>
                            {/* <Col lg={6}>
                                <div className="CategoriesFilters">
                                    <div className="SearchBarContainer">
                                        <h3>Search Product</h3>
                                        <Input
                                            placeholder="Search products..."
                                            allowClear
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            style={{ marginBottom: "20px" }}
                                        />
                                    </div>
                                    <div>
                                        <h3>Selected Categories:</h3>
                                        <Tag >Cars</Tag>
                                        <Tag >Teddies</Tag>
                                    </div>
                                    <div className="PriceRange">
                                            <h3>Price Range</h3>
                                            <div className="PriceRange">
                                                <span>Min: ₹0</span>
                                                <span>Max: ₹50,000</span>
                                            </div>
                                            <Slider range defaultValue={[0, 50000]} disabled />
                                    </div>
                                </div>
                            </Col> */}
                            <Col lg={24}>
                                <Row id="ProductCardRow">
                                    {filteredProducts.map((item, index) => (
                                        <Col lg={6} md={8} key={index}>
                                            <div
                                                className="BigCardEdit"
                                                data-aos="fade-up"
                                                data-aos-delay={`${index * 100}`}
                                            >
                                                <div className="HoverImageContainer">
                                                    <img src={item.image} alt="Default" className="defaultImage" />
                                                    <img src={item.image} alt="Hover" className="hoverImage" />
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
    );
};

export default Products;
