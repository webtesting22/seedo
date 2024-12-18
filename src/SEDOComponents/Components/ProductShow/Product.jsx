import React, { useState,useEffect } from "react";
import "../../Styles/Product.css";
import { Row, Col, Checkbox, Button, Input } from "antd";
import { Link } from "react-router-dom";
import Navigation from "../../CommonComponents/Navigation/Navigation";
import SEEDOData from "../../ProductUpdatedData";
import ProductsPageBanner from "/Images/Banners/ProductsPageBanner.jpg";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";

const { Search } = Input;

const Products = () => {
     useEffect(() => {
            // Scroll to the top of the page when the component is mounted
            window.scrollTo(0, 0);
        }, []);
    // State to hold the selected categories
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [layout, setLayout] = useState(8); // Default layout 4x4x4
    const [searchQuery, setSearchQuery] = useState(""); // Search query state

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

    // Handle search input change
    const handleSearch = (value) => {
        setSearchQuery(value);
    };

    // Filter products based on selected categories and search query
    const filteredProducts = SEEDOData.filter(item => {
        const matchesCategory = selectedCategories.length
            ? selectedCategories.includes(item.ProductCategories)
            : true;

        const matchesSearchQuery = searchQuery
            ? item.ProductTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.ProductCategories.toLowerCase().includes(searchQuery.toLowerCase())
            : true;

        return matchesCategory && matchesSearchQuery;
    });

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
                        <div className="SearchBarContainer" style={{ marginBottom: "20px", width: "100%" }}>
                            {/* AntD Search Bar */}

                        </div>
                        <div style={{ marginBottom: "20px", display: "flex", justifyContent: "end", width: "100%", gap: "5px" }}>
                            <Search
                                placeholder="Search for products"
                                allowClear
                                size="large"
                                onChange={(e) => setSearchQuery(e.target.value)} // Real-time update
                                style={{ width: "40%" }}
                            />
                            <Button onClick={() => handleLayoutChange(8)} style={{ height: "100%" }}><TfiLayoutGrid3Alt style={{ cursor: "pointer", }} /></Button>
                            <Button onClick={() => handleLayoutChange(6)} style={{ height: "100%" }}><TfiLayoutGrid4Alt style={{ cursor: "pointer", height: "100%" }} /></Button>
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
