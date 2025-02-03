import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./SubCategories.css"
import SeedoProductData from "../../ProductData";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import { IoGrid } from "react-icons/io5";
import { BsGrid3X3GapFill } from "react-icons/bs";

const SubCategories = () => {
    const { categoryName } = useParams(); // Get the category name from URL
    const categoryData = SeedoProductData[categoryName];
    const hasSubcategories = categoryData.subcategories;
    const [columnSpan, setColumnSpan] = useState(8); // Default span is 8

    // Function to handle button clicks
    const handleColumnSpanChange = (span) => {
        setColumnSpan(span);
    };


    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    const colors = [
        "rgba(9, 177, 171, 0.25)",
        "rgba(241, 142, 170, 0.23)",
        "rgba(173, 133, 179, 0.22)",
        "rgba(80, 173, 105, 0.24)",
        "rgba(9, 177, 171, 0.25)"
    ];
    return (
        <>
            <div className="AboutUs">
                <Navigation />
            </div>
            <section className="SubCategoryContainer">
                <div className="SectionHeadingContainer" style={{ paddingBottom: "0px" }}>
                    <img src={categoryData.subcategoryImage} alt={categoryName} style={{ maxWidth: "100%", height: "auto" }} />
                    <img src={categoryData.MobilesubcategoryImage} alt={categoryName} style={{ maxWidth: "100%", height: "auto" }} />
                </div>
                <div className="CatalogueCardsContainer" >
                    <div className="SectionInfoContainer">
                        <div className="CategoryCountContainer" style={{ width: "100%" }}>
                            {/* Display the dynamic count of subcategories or products */}
                            <p>
                                <span>
                                    {hasSubcategories
                                        ? Object.keys(categoryData.subcategories).length // Count of subcategories
                                        : products.length} {/* Count of products if no subcategories */}
                                </span>{" "}
                                {hasSubcategories ? "Available Selections" : "Available Selections"}
                            </p>
                        </div>
                        <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
                            <Button
                                type={columnSpan === 8 ? "primary" : "default"}
                                onClick={() => handleColumnSpanChange(8)}
                                style={{ marginRight: "8px" }}
                            >
                                <BsGrid3X3GapFill />
                            </Button>
                            <Button
                                type={columnSpan === 12 ? "primary" : "default"}
                                onClick={() => handleColumnSpanChange(12)}
                                style={{ marginRight: "8px" }}
                            >
                                <IoGrid />
                            </Button>
                            {/* <Button
                    type={columnSpan === 24 ? "primary" : "default"}
                    onClick={() => handleColumnSpanChange(24)}
                >
                    Vertical (1 Column)
                </Button> */}
                        </div>
                        {/* <div style={{ width: "100%" }} className="SortFilterContainer">
                            <p style={{ textAlign: "end" }}> hello</p>
                        </div> */}
                    </div>
                    <Row>
                        {hasSubcategories ? (
                            Object.keys(categoryData.subcategories).map((subcategoryName, index) => {
                                const subcategory = categoryData.subcategories[subcategoryName];
                                // Get the first product's image from the subcategory (if available)
                                const firstProductImage = subcategory?.[0]?.ProductImage?.[0] || "path/to/placeholder.jpg";
                                const backgroundColor = colors[index % colors.length];

                                return (
                                    <Col key={index} lg={columnSpan} md={columnSpan} style={{ width: "100%" }}>
                                        <Link to={`/subcategories/${categoryName}/${subcategoryName}`}>
                                            <div className="CatalogueCardContainer" style={{ backgroundColor }}>
                                                <div className="CatalogueImageContainer">
                                                    <img src={firstProductImage} alt={subcategoryName} />
                                                </div>
                                                <div className="productTitleContainer">
                                                    <h1>{subcategoryName}</h1>
                                                </div>
                                            </div>
                                        </Link>
                                    </Col>
                                );
                            })
                        ) : (
                            // If no subcategories, show products in the category
                            <Link to={`/products/${categoryName}`}>
                                <div className="CatalogueCardContainer">
                                    <div className="CatalogueImageContainer">
                                        {/* Get the first product's image if products exist */}
                                        {products.length > 0 ? (
                                            <img src={products[0].ProductImage?.[0] || "path/to/placeholder.jpg"} alt={categoryName} />
                                        ) : (
                                            <img src="path/to/placeholder.jpg" alt={categoryName} />
                                        )}
                                    </div>
                                    <div className="productTitleContainer">
                                        <h1>{categoryName} Products</h1>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </Row>

                </div>
            </section>
        </>
    )
}
export default SubCategories