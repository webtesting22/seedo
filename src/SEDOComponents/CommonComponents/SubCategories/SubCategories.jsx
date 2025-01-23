import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./SubCategories.css"
import SeedoProductData from "../../ProductData";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
const SubCategories = () => {
    const { categoryName } = useParams(); // Get the category name from URL
    const categoryData = SeedoProductData[categoryName];
    const hasSubcategories = categoryData.subcategories;


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
                    <h2 className="titleFont" data-aos="fade-up"
                        data-aos-duration="1000">{categoryName}</h2>

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
                        <div style={{ width: "100%" }}>
                            <p style={{ textAlign: "center" }}>  hello</p>
                        </div>
                        <div style={{ width: "100%" }} className="SortFilterContainer">
                            <p style={{ textAlign: "end" }}> hello</p>
                        </div>
                    </div>
                    <Row>
                        {hasSubcategories ? (
                            Object.keys(categoryData.subcategories).map((subcategoryName, index) => {
                                const subcategory = categoryData.subcategories[subcategoryName];
                                // Get the first product's image from the subcategory (if available)
                                const firstProductImage = subcategory?.[0]?.ProductImage?.[0] || "path/to/placeholder.jpg";
                                const backgroundColor = colors[index % colors.length];
                                return (
                                    <Col key={index} lg={8} md={12} style={{ width: "100%" }}>
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