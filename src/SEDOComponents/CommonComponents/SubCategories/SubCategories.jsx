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
    return (
        <>
            <div className="AboutUs">
                <Navigation />
            </div>
            <section className="SubCategoryContainer">
                <div className="SubcategoryHeader">
                    <h1>SubCategories Page</h1>
                </div>
                <div className="CatalogueCardsContainer" >
                    <Row>
                        {hasSubcategories ? (
                            Object.keys(categoryData.subcategories).map((subcategoryName, index) => {
                                const subcategory = categoryData.subcategories[subcategoryName];
                                // Get the first product's image from the subcategory (if available)
                                const firstProductImage = subcategory?.[0]?.ProductImage?.[0] || "path/to/placeholder.jpg";

                                return (
                                    <Col key={index} lg={8} md={12} style={{ width: "100%" }}>
                                        <Link to={`/subcategories/${categoryName}/${subcategoryName}`}>
                                            <div className="CatalogueCardContainer">
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