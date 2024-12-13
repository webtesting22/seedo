import React, { useState, useEffect } from "react";
import ProductPageBanner from "/Images/Banners/CarsBanner.jpg";
import "../../Styles/Product.css";
import { Row, Col, Input, Slider, Tag } from "antd";
import ProductData from "../../ProductData";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import BannerAbout from "/Images/Banners/tranBanner.png"
import HomePageProducts from "../../CommonComponents/HomePageProducts/HomePageProducts";
import Navigation from "../../CommonComponents/Navigation/Navigation";
const tagsData = [
    {
        category: 'Friction & Pull Back + Press & Go',
        subcategories: ['Friction & Pull Back + Press & Go']
    },
    {
        category: 'RC Car',
        subcategories: ['RC Car']
    },
    {
        category: 'Easy Learning Toys',
        subcategories: ['Easy Learning Toys']
    },
    {
        category: 'Seedo Metal X Racer',
        subcategories: ['Construction Series', 'Pull Back Series', 'Cruiser Series', 'Drift Series', 'Racing Series', 'Jet Series', 'Fire Birds Series', 'Pack']
    }
];


const Products = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(ProductData);
    const [selectedTags, setSelectedTags] = useState([]);

    const [selectedSubcategories, setSelectedSubcategories] = useState([]);
    const handleCategoryChange = (tag, checked) => {
        const nextSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter((t) => t !== tag);
        setSelectedTags(nextSelectedTags);
    };

    const handleSubcategoryChange = (subcategory, checked) => {
        const nextSelectedSubcategories = checked
            ? [...selectedSubcategories, subcategory]
            : selectedSubcategories.filter((s) => s !== subcategory);
        setSelectedSubcategories(nextSelectedSubcategories);
    };
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
            <div id="AboutUs">
                <Navigation />
            </div>
            <section id="ProductContainer">
                <div className="BannerContainer">
                    <img src={BannerAbout} alt="" />
                </div>
                <div style={{ padding: "20px" }}>
                    <span>
                        <Link to="/" className="breadcrumb-link" style={{ color: "black" }}>Home</Link> &gt;{" "}
                        <Link to="/products" className="breadcrumb-link" style={{ color: "black" }}>Product</Link>
                    </span>
                </div>
                <div id="ProductShowContainer">
                    <div>
                        {/* <HomePageProducts /> */}
                        <Row>
                            <Col lg={6} md={24} xs={24} sm={24}>
                                <div className="CategoriesFilters">
                                    <h3>Categories:</h3>
                                    {tagsData.map((tag) => (
                                        <div key={tag.category}>
                                            <Tag.CheckableTag
                                                checked={selectedTags.includes(tag.category)}
                                                onChange={(checked) => handleCategoryChange(tag.category, checked)}
                                            >
                                                {tag.category}
                                            </Tag.CheckableTag>
                                            {selectedTags.includes(tag.category) && tag.category === "Seedo Metal X Racer" &&

                                                tag.subcategories.map((subcategory) => (
                                                    <div key={subcategory} style={{ paddingLeft: "30px" }}>
                                                        <Tag.CheckableTag
                                                            checked={selectedSubcategories.includes(subcategory)}
                                                            onChange={(checked) => handleSubcategoryChange(subcategory, checked)}
                                                        >
                                                            {subcategory}
                                                        </Tag.CheckableTag>
                                                    </div>
                                                ))}
                                        </div>
                                    ))}
                                </div>
                                {/* <div className="CategoriesFilters">
                                    <div className="SearchBarContainer">
                                        <h3>Search Product</h3>
                                        <Input
                                            placeholder="Search products..."
                                            allowClear
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            style={{ marginBottom: "20px" }}
                                        />
                                    </div>
                                    <h3>Selected Categories:</h3>
                                    {tagsData.map((tag) => (
                                        <Tag.CheckableTag
                                            key={tag}
                                            checked={selectedTags.includes(tag)}
                                            onChange={(checked) => handleChange(tag, checked)}
                                        >
                                            {tag}
                                        </Tag.CheckableTag>
                                    ))}
                                    <div className="PriceRange">
                                            <h3>Price Range</h3>
                                            <div className="PriceRange">
                                                <span>Min: ₹0</span>
                                                <span>Max: ₹50,000</span>
                                            </div>
                                            <Slider range defaultValue={[0, 50000]} disabled />
                                    </div>
                                </div> */}
                            </Col>
                            <Col lg={18}>
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
