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
import ProductPageBanner from "./ProductPageBanner.svg"
import SeedoProductData from "../../ProductData";
import friction from "./friction.svg"
import RemoteCar from "./RemoteCar.svg"
import DieCast from "./DieCast.svg"
import EarlyLearning from "./EarlyLearning.svg"
import ProductContext from "./Context/ProductContext";
import space from "./space.png"
const { Search } = Input;

const Products = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false); // Modal visibility state
    const [selectedProduct, setSelectedProduct] = useState(null); // Selected product
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    // const { toggleComponent } = ProductContext();

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

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);
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
        // AOS.init(); // Initialize AOS
        window.scrollTo(0, 0);
    }, []);
    const staticProductCategories = ["Category1", "Category2", "Category3"]; // Define static categories

    return (
        <>
            <div className="AboutUs">
                <Navigation />
            </div>

            <section id="ProductContainer">
                {/* <div className="ProductHeaderContainer">
                    <img src={ProductPageBanner} alt="" />
                    <h1>We Create For You!</h1>
                </div> */}
                <div className="SectionHeadingContainer" style={{ paddingBottom: "0px" }}>
                    {/* <img src={space} alt="" /> */}
                    <h2 className="titleFont" data-aos="fade-up"
                        data-aos-duration="1000">Heading Container</h2>
                    {/* <div className="BackSVG">
                    <svg width="1895" height="997" viewBox="0 0 1895 997" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M489 15.2177C394.5 -2.98877 212 -4.08235 0 74.7177V996.5H1895V18.2177C1888.83 23.8843 1864.8 39.2177 1818 55.2177C1739.67 78.551 1575.33 94.0308 1397 48.5C1373.5 42.5 1279.3 16.1177 1240.5 9.71766C1187.5 0.217663 1045.7 -14.9823 822.5 36.2177C745.5 53.8807 663.4 48.8177 489 15.2177Z" fill="#A0DEF7" />
                    </svg>
                </div> */}
                </div>
                <div className="CatalogueCardsContainer">
                    <div className="SectionInfoContainer">
                        <div className="CategoryCountContainer" style={{ width: "100%" }}>
                            <p> <span>{Object.keys(SeedoProductData).length}</span> Available Selections</p>
                        </div>
                        <div style={{ width: "100%" }}>
                            <p style={{ textAlign: "center" }}>  hello</p>
                        </div>
                        <div style={{ width: "100%" }} className="SortFilterContainer">
                            <p style={{ textAlign: "end" }}> hello</p>
                        </div>
                    </div>
                    <Row>
                        {Object.keys(SeedoProductData).map((categoryName, index) => {
                            const categoryData = SeedoProductData[categoryName];
                            const products = categoryData.products || [];
                            const hasSubcategories = categoryData.subcategories;

                            // Default to a placeholder image for the second image from subcategories
                            let subcategorySecondImage = "path/to/placeholder_image.jpg"; // Default placeholder for second image

                            // List of categories requiring subcategory logic
                            const categoriesRequiringSubcategoryLogic = ["Metal Die Cast Cars", "Remote Controlled Cars"];

                            // Check if the current category requires subcategory logic
                            if (categoriesRequiringSubcategoryLogic.includes(categoryName) && hasSubcategories) {
                                const firstSubcategoryKey = Object.keys(categoryData.subcategories)[0];
                                const firstSubcategory = categoryData.subcategories[firstSubcategoryKey];

                                // Ensure the first subcategory has products and an image to display
                                if (firstSubcategory?.[0]?.ProductImage?.[0]) {
                                    subcategorySecondImage = firstSubcategory[0].ProductImage[0]; // First image from the first product in subcategory
                                }
                            }

                            const colors = [
                                "rgba(9, 177, 171, 0.25)",
                                "rgba(241, 142, 170, 0.23)",
                                "rgba(173, 133, 179, 0.22)",
                                "rgba(80, 173, 105, 0.24)",
                                "rgba(9, 177, 171, 0.25)"
                            ];

                            // Get the background color for the current index
                            const backgroundColor = colors[index % colors.length];


                            return (
                                <Col key={index} lg={8} md={12} style={{ width: "100%" }}>
                                    {/* If subcategories exist, redirect to subcategories page; otherwise, to products page */}
                                    <Link to={hasSubcategories ? `/subcategories/${categoryName}` : `/subcategoriesproducts/${categoryName}`}>
                                        <div className="CatalogueCardContainer" style={{ backgroundColor }} >
                                            <div className="CatalogueImageContainer">
                                                {/* Check if there are products in the category */}
                                                {/* {products.length > 0 ? (
                                                    <img
                                                        src={products[0].ProductImage?.[0] || "path/to/placeholder_image.jpg"}
                                                        alt={products[0].name || "Placeholder"}
                                                    />
                                                ) : (
                                                    // If no products, fallback to the subcategory first product's first image
                                                    <img
                                                        src={subcategorySecondImage}
                                                        alt={`${categoryName} First Product`}
                                                    />
                                                )} */}
                                                <img
                    src={categoryData?.CategoriryImage || "path/to/placeholder_image.jpg"} // Use the category image
                    alt={`${categoryName} Category Image`} // Alt text for the image
                />
                                            </div>
                                            <div className="productTitleContainer">
                                                <h1>{categoryName}</h1>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            );
                        })}



                        {/* <Col lg={12} md={24} style={{ width: "100%" }}>

                            <div className="CatalogueCardContainer">
                                <div className="CatalogueImageContainer">
                                    <img src={RemoteCar} alt="" />
                                </div>
                                <div className="productTitleContainer">
                                    <h1>Remote Controlled Car</h1>
                                    <p>Category</p>
                                </div>
                            </div>

                        </Col>
                        <Col lg={12} md={24} style={{ width: "100%" }}>

                            <div className="CatalogueCardContainer">
                                <div className="CatalogueImageContainer">

                                </div>
                                <div className="productTitleContainer">
                                    <h1>Metal X Racer</h1>
                                    <p>Category</p>
                                </div>
                            </div>

                        </Col>
                        <Col lg={12} md={24} style={{ width: "100%" }}>

                            <div className="CatalogueCardContainer">
                                <div className="CatalogueImageContainer">
                                    <img src={DieCast} alt="" />
                                </div>
                                <div className="productTitleContainer">
                                    <h1>Die cast cars</h1>
                                    <p>Category</p>
                                </div>
                            </div>

                        </Col>
                        <Col lg={12} md={24} style={{ width: "100%" }}>

                            <div className="CatalogueCardContainer">
                                <div className="CatalogueImageContainer">
                                    <img src={EarlyLearning} alt="" />
                                </div>
                                <div className="productTitleContainer">
                                    <h1>Early learning toys </h1>
                                    <p>Category</p>
                                </div>
                            </div>

                        </Col> */}
                    </Row>
                </div>
                {/* <button onClick={toggleComponent}>Switch Component</button> */}
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
