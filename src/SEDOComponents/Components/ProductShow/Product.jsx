import React, { useState } from "react";
import "../../Styles/Product.css";
import { Row, Col, Checkbox, Button } from "antd";
import { Link } from "react-router-dom";
import Navigation from "../../CommonComponents/Navigation/Navigation";
import SEEDOData from "../../ProductUpdatedData";
import ProductsPageBanner from "/Images/Banners/ProductsPageBanner.jpg";

const Products = () => {
    // State to hold the selected categories
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [layout, setLayout] = useState(8); // Default layout 4x4x4
    // Define static categories directly
    const staticCategories = [
        "Friction & Pull back + Press & Go",
        "RC Car",
        "Early Learning Toys",
        "Seedo Metal X Racer", // This is the static category to be non-clickable
        "Construction Series",
        "Pull Back Series",
        "Cruiser Series",
        "Drift Series",
        "Racing Series",
        "Jet Series",
        "Fire Birds Series",
    ];

    // Handle category selection
    const handleCategoryChange = (checkedValues) => {
        setSelectedCategories(checkedValues);
    };
    // Set the grid layout based on button click
    const handleLayoutChange = (layoutType) => {
        setLayout(layoutType);
    };

    // Filter products based on selected categories
    const filteredProducts = selectedCategories.length
        ? SEEDOData.filter(item => selectedCategories.includes(item.ProductCategories))
        : SEEDOData; // Show all products if no category is selected

    return (
        <>
            <div id="AboutUs">
                <Navigation />
            </div>
            <section id="ProductContainer">
                <div className="BannerContainer">
                    <img src={ProductsPageBanner} alt="Products Banner" />
                </div>
                <div style={{ padding: "20px" }}>
                    <span>
                        <Link to="/" className="breadcrumb-link" style={{ color: "black" }}>Home</Link> &gt;{" "}
                        <Link to="/products" className="breadcrumb-link" style={{ color: "black" }}>Product</Link>
                    </span>
                </div>
                <div id="ProductShowContainer">
                    <div className="CategorieHeadingContainer">
                        <div>
                            <h2 className="SecondaryHeading">Best Selling Products</h2>
                            <p>Discover the toys kids adore and parents trust. Shop our bestsellers for endless joy!</p>
                        </div>
                    </div>
                    <div className="SearchAndAddons">
                        <div style={{ marginBottom: "20px" }}>
                            <Button onClick={() => handleLayoutChange(8)} style={{ marginRight: "10px" }}>8x8x8 Layout</Button>
                            <Button onClick={() => handleLayoutChange(6)} style={{ marginRight: "10px" }}>6x6x6 Layout</Button>
                        </div>
                    </div>

                    <Row>
                        {/* Sidebar with checkbox filters */}
                        <Col lg={6} md={24} xs={24} sm={24}>
                            <div className="CategoriesFilters">
                                <h3>Filter by Categories</h3>
                                <Checkbox.Group
                                    options={staticCategories.map(category =>
                                        category === "Seedo Metal X Racer"
                                            ? { label: category, value: category, disabled: true }
                                            : { label: category, value: category }
                                    )}
                                    onChange={handleCategoryChange}
                                    className="FilterCheckBox"
                                />
                            </div>
                        </Col>
                        {/* Product cards */}
                        <Col lg={18}>
                            <Row id="ProductCardRow">
                                {filteredProducts.map((item, index) => (
                                    <Col lg={layout} md={layout} key={index}>
                                        <div
                                            className="BigCardEdit"
                                            data-aos="fade-up"
                                            data-aos-delay={`${index * 100}`}
                                        >
                                            <div className="HoverImageContainer">
                                                {/* First image as default */}
                                                <img
                                                    src={item.ProductImage[0]}
                                                    alt={`${item.ProductTitle} Default`}
                                                    className="defaultImage"
                                                />
                                                {/* Second image as hover, fallback to default if not present */}
                                                {item.ProductImage[1] ? (
                                                    <img
                                                        src={item.ProductImage[1]}
                                                        alt={`${item.ProductTitle} Hover`}
                                                        className="hoverImage"
                                                    />
                                                ) : (
                                                    <img
                                                        src={item.ProductImage[0]}
                                                        alt={`${item.ProductTitle} Hover`}
                                                        className="hoverImage"
                                                    />
                                                )}
                                            </div>
                                            <div className="TitleContainer">
                                                <span>{item.ProductCategories}</span>
                                                <h4>{item.ProductTitle}</h4>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    );
};

export default Products;
