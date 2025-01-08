
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../../CommonComponents/Navigation/Navigation";// Adjust if you have a Navigation component
import { Row, Col } from "antd";
import SeedoProductData from "../../ProductData";
const SubcategoriesProducts = () => {
    const { categoryName, subcategoryName } = useParams();
    const categoryData = SeedoProductData[categoryName];

    // If there's no subcategory, directly get the products for the category
    const products = subcategoryName
        ? categoryData?.subcategories[subcategoryName]
        : categoryData?.products;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <>
            <Navigation />
            <section className="SubCategoryProductsContainer">
                <div className="SubcategoryHeader">
                    <h1>{subcategoryName} Products</h1>
                </div>
                <div className="CatalogueCardsContainer">
                    <Row>
                        {products &&
                            products.map((product, index) => (
                                <Col key={index} lg={8} md={12} style={{ width: "100%" }}>
                                    <div className="CatalogueCardContainer">
                                        <div className="CatalogueImageContainer">
                                            {/* Check if ProductImage exists and is not empty */}
                                            {product.ProductImage && product.ProductImage.length > 1 ? (
                                                // Display the image at index 1
                                                <img src={product.ProductImage[1]} alt={`${product.name}-1`} />
                                            ) : (
                                                // If index 1 doesn't exist, display a default image or message
                                                <img src="path/to/default-image.jpg" alt="Default Image" />
                                            )}
                                        </div>
                                        <div className="productTitleContainer">
                                            <h1>{product.name}</h1>
                                            <p>{product.description}</p>
                                            {/* <p>Price: ${product.price}</p> */}
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }

                    </Row>
                </div>
            </section>
        </>
    )
}
export default SubcategoriesProducts