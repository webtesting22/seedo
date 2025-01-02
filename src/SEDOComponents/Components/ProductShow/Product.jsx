import React, { useState, useEffect } from "react";
import { Row, Col, Checkbox, Button, Input, Drawer, Modal, Image } from "antd"; // Import Modal
import { Link } from "react-router-dom";
import { TfiLayoutGrid3Alt, TfiLayoutGrid4Alt } from "react-icons/tfi";
import { CiFilter } from "react-icons/ci";
import { useMediaQuery } from "react-responsive";
import "../../Styles/Product.css";
import Navigation from "../../CommonComponents/Navigation/Navigation";
import SEEDOData from "../../ProductUpdatedData";
import gene7 from "/Images/gene7.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
const { Search } = Input;

const Products = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false); // Modal visibility state
    const [selectedProduct, setSelectedProduct] = useState(null); // Selected product
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [layout, setLayout] = useState(6); // Default layout 4x4x4
    const [searchQuery, setSearchQuery] = useState(""); // Search query state

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

    const handleCategoryChange = (checkedValues) => setSelectedCategories(checkedValues);


    const handleLayoutChange = (layoutType) => {
        setLayout(layoutType);
        AOS.refresh(); // Reinitialize AOS animations after changing the layout
    };


    const handleSearch = (value) => setSearchQuery(value);

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

    const showDrawer = () => setDrawerOpen(true);
    const closeDrawer = () => setDrawerOpen(false);

    const openModal = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedProduct(null);
    };

    useEffect(() => {
        AOS.init(); // Initialize AOS
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <div id="AboutUs">
                <Navigation />
            </div>
            <section id="ProductContainer">
                <div className="ProductHeaderContainer">
                    <h1>Product Categories</h1>
                </div>
                <div className="CatalogueCardsContainer">
                    <Row>
                        <Col lg={12} md={24} style={{ width: "100%" }}>
                            <div className="CatalogueCardContainer">
                                <div className="CatalogueImageContainer">

                                </div>
                                <div className="productTitleContainer">
                                    <h1>Product Name</h1>
                                    <p>Category</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12} md={24} style={{ width: "100%" }}>
                            <div className="CatalogueCardContainer">
                                <div className="CatalogueImageContainer">
                                        
                                </div>
                                <div className="productTitleContainer">
                                    <h1>Product Name</h1>
                                    <p>Category</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12} md={24} style={{ width: "100%" }}>
                            <div className="CatalogueCardContainer">
                                <div className="CatalogueImageContainer">

                                </div>
                                <div className="productTitleContainer">
                                    <h1>Product Name</h1>
                                    <p>Category</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12} md={24} style={{ width: "100%" }}>
                            <div className="CatalogueCardContainer">
                                <div className="CatalogueImageContainer">

                                </div>
                                <div className="productTitleContainer">
                                    <h1>Product Name</h1>
                                    <p>Category</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12} md={24} style={{ width: "100%" }}>
                            <div className="CatalogueCardContainer">
                                <div className="CatalogueImageContainer">

                                </div>
                                <div className="productTitleContainer">
                                    <h1>Product Name</h1>
                                    <p>Category</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                {/* <div className="BannerContainer">
                    <img src={gene7} alt="Products Banner" />
                </div>
                <div style={{ padding: "20px" }}>
                    <span>
                        <Link to="/" className="breadcrumb-link" style={{ color: "black" }}>Home</Link> &gt;{" "}
                        <Link to="/products" className="breadcrumb-link" style={{ color: "black" }}>Product</Link>
                    </span>
                </div> */}
                {/* <div className="TopLinksContainer">
                    <div >
                        <Link to="/" className="breadcrumb-link" style={{ color: "#999", fontSize: "12px" }}>Home</Link>&nbsp;&nbsp; <span style={{ color: "#999", fontSize: "12px", display: "flex" }}><FaArrowRight /></span> &nbsp;&nbsp;
                        <Link to="/products" className="breadcrumb-link" style={{ color: "#999", fontSize: "12px" }}>Products</Link>
                    </div>
                </div>
                <div id="ProductShowContainer">
                    <div className="CategorieHeadingContainer">
                        <div>
                            <h2 className="SecondaryHeading">Best Selling Products</h2>
                            <p>Discover the toys kids adore and parents trust. Shop our bestsellers for endless joy!</p>
                        </div>
                    </div>
                    <div className="SearchAndAddons">
                        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", gap: "10px" }}>
                            <div className="SearchBarContainer" style={{ width: "100%" }}></div>
                            <Search
                                placeholder="Search for products"
                                allowClear
                                size="large"
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <div className="LayoutBtn" style={{ display: "flex", gap: "10px" }}>
                                <Button onClick={() => handleLayoutChange(8)}>
                                    <TfiLayoutGrid3Alt />
                                </Button>
                                <Button onClick={() => handleLayoutChange(6)}>
                                    <TfiLayoutGrid4Alt />
                                </Button>
                            </div>
                            {isMobile && (
                                <div className="FilterBtn">
                                    <Button onClick={showDrawer}>
                                        <CiFilter />
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                    <br />
                    {isMobile && (
                        <Drawer
                            title="Filter by Categories"
                            placement="right"
                            onClose={closeDrawer}
                            open={isDrawerOpen}
                            style={{ position: "relative" }}
                        >
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
                            <Button type="primary" onClick={closeDrawer} style={{ position: "absolute", bottom: "20px", width: "200px", background: "#A5252B" }}>Apply</Button>
                        </Drawer>
                    )}

                    <div>
                        <Row>
                          
                            <Col lg={24} sm={24}>
                                <Row id="ProductCardRow">
                                    {filteredProducts.map((item, index) => (
                                        <Col lg={layout} md={layout} key={index}>
                                            <div
                                                className="BigCardEdit"
                                                data-aos="fade-up"
                                                data-aos-delay={`${index * 10}`}
                                            >
                                                <div className="HoverImageContainer">
                                                    <img
                                                        src={item.ProductImage[0]}
                                                        alt={`${item.ProductTitle} Default`}
                                                        className="defaultImage"
                                                    />
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
                                                    <div style={{ display: "flex", justifyContent: "center", width: "100%" }} className="InsideContainer" id="ProductButton">
                                                        <button onClick={() => openModal(item)}><FaArrowRightLong /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div> */}
            </section>

            {/* Modal for product info */}
            <Modal
                title={selectedProduct?.ProductTitle || "Product Info"}
                visible={isModalOpen}
                onCancel={closeModal}
                footer={null}
                width={800}
            >

                {selectedProduct && (
                    <div>
                        <div className="ModalImageContainer">
                            {selectedProduct.ProductImage.map((image, index) => (
                                <Image
                                    key={index}
                                    src={image}
                                    alt={`${selectedProduct.ProductTitle} - Image ${index + 1}`}
                                    style={{ width: "100%", maxWidth: "250px", height: "100%", objectFit: "cover" }}
                                />
                            ))}
                        </div>
                        <br />
                        <div className="ColoursContainer">
                            {selectedProduct.ProductColours}
                        </div>
                        {/* <br /> */}
                        <div>
                            {selectedProduct.ProductSpecs}
                        </div>
                        <p><strong>Category:</strong> {selectedProduct.ProductCategories}</p>
                        {/* <p><strong>Description:</strong> {selectedProduct.ProductDescription || "No description available."}</p> */}
                        <div>
                            <div>{selectedProduct.ModalInfo}</div>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    );
};

export default Products;
